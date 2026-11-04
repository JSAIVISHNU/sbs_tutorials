import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import handler from './send-enquiry.js'

// Unique IP counter to prevent rate-limit pollution between tests.
// Rate limiting is based on IP in the in-memory store; tests that enable
// production-mode rate limiting use distinct IPs so they cannot interfere
// with each other or with tests that run in test mode.
let ipCounter = 1
function nextIp() {
  return `10.0.${Math.floor(ipCounter / 255)}.${ipCounter++ % 255 || 1}`
}

function mockReqRes({ method = 'POST', body = {}, headers = {}, ip } = {}) {
  const resolvedIp = ip || '127.0.0.1'
  const req = {
    method,
    body,
    headers: { 'x-forwarded-for': resolvedIp, ...headers },
    socket: { remoteAddress: resolvedIp },
  }
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    status(code) {
      this.statusCode = code
      return this
    },
    json(payload) {
      this.body = payload
      return this
    },
    setHeader(k, v) {
      this.headers[k] = v
      return this
    },
  }
  return { req, res }
}

const ENV = {
  WHATSAPP_ACCESS_TOKEN: 'token',
  WHATSAPP_PHONE_NUMBER_ID: '123',
  WHATSAPP_RECIPIENT_NUMBER: '919180473902',
  WHATSAPP_TEMPLATE_NAME: 'tmpl',
  WHATSAPP_TEMPLATE_LANGUAGE: 'en',
  WHATSAPP_API_VERSION: 'v19.0',
}

beforeEach(() => {
  vi.restoreAllMocks()
  Object.assign(process.env, ENV)
  // Ensure rate limiting is disabled in all tests except those that explicitly enable it.
  process.env.NODE_ENV = 'test'
  global.fetch = vi.fn()
})

afterEach(() => {
  for (const k of Object.keys(ENV)) delete process.env[k]
  process.env.NODE_ENV = 'test'
})

describe('send-enquiry API – Method & Size Guards', () => {
  it('rejects non-POST (GET)', async () => {
    const { req, res } = mockReqRes({ method: 'GET' })
    await handler(req, res)
    expect(res.statusCode).toBe(405)
    expect(res.body.success).toBe(false)
  })

  it('rejects non-POST (PUT)', async () => {
    const { req, res } = mockReqRes({ method: 'PUT' })
    await handler(req, res)
    expect(res.statusCode).toBe(405)
  })

  it('rejects oversized body via content-length header', async () => {
    const { req, res } = mockReqRes({
      headers: { 'content-length': String(11 * 1024) },
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(413)
  })
})

describe('send-enquiry API – Input Validation', () => {
  it('rejects missing parent name', async () => {
    const { req, res } = mockReqRes({ body: { phone: '9876543210', course: 'School Tuition' } })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
    expect(res.body.errors?.parentName).toBeDefined()
  })

  it('rejects invalid phone (too short)', async () => {
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '123', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
    expect(res.body.errors?.phone).toBeDefined()
  })

  it('rejects invalid phone (alpha characters)', async () => {
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: 'abcdefghij', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
  })

  it('rejects invalid course (unknown value)', async () => {
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'Foo' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
    expect(res.body.errors?.course).toBeDefined()
  })

  it('rejects missing course', async () => {
    const { req, res } = mockReqRes({ body: { parentName: 'Jane', phone: '9876543210' } })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
  })

  it('rejects overlong message (>1000 chars)', async () => {
    const { req, res } = mockReqRes({
      body: {
        parentName: 'Jane',
        phone: '9876543210',
        course: 'School Tuition',
        message: 'a'.repeat(1001),
      },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
  })

  it('rejects invalid JSON string body', async () => {
    const { req, res } = mockReqRes({ body: '{not-json' })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
  })

  it('rejects array body', async () => {
    const { req, res } = mockReqRes({ body: [] })
    await handler(req, res)
    expect(res.statusCode).toBe(400)
  })
})

describe('send-enquiry API – Environment Configuration', () => {
  it('returns 500 when WHATSAPP_ACCESS_TOKEN missing', async () => {
    delete process.env.WHATSAPP_ACCESS_TOKEN
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res.body.success).toBe(false)
  })

  it('returns 500 when WHATSAPP_PHONE_NUMBER_ID missing', async () => {
    delete process.env.WHATSAPP_PHONE_NUMBER_ID
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
  })

  it('returns 500 when WHATSAPP_RECIPIENT_NUMBER missing', async () => {
    delete process.env.WHATSAPP_RECIPIENT_NUMBER
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
  })

  it('returns 500 when WHATSAPP_TEMPLATE_NAME missing', async () => {
    delete process.env.WHATSAPP_TEMPLATE_NAME
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
  })

  it('returns 500 when WHATSAPP_RECIPIENT_NUMBER has invalid format', async () => {
    process.env.WHATSAPP_RECIPIENT_NUMBER = 'invalid-number'
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
  })
})

describe('send-enquiry API – Successful Submissions', () => {
  it('sends WhatsApp on valid School Tuition enquiry', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({ messages: [{ id: 'm1' }] }) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)
    expect(global.fetch).toHaveBeenCalledOnce()
  })

  it('sends WhatsApp on valid Music enquiry', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'Music' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
  })

  it('sends WhatsApp on valid Drawing enquiry', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'Drawing' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
  })

  it('sends WhatsApp on valid Abacus enquiry', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'Abacus' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
  })

  it('accepts normalised course aliases (lowercase "tuition")', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
  })

  it('accepts comma-separated course selection (first token normalised)', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'tuition,music' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
  })

  it('calls Meta Graph API with the correct URL and auth header', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: {
        parentName: 'Ramesh Kumar',
        phone: '9876543210',
        studentClass: 'Class 8 - 10',
        course: 'School Tuition',
        message: 'Looking for evening batch',
      },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
    const [calledUrl, calledOptions] = global.fetch.mock.calls[0]
    expect(calledUrl).toBe('https://graph.facebook.com/v19.0/123/messages')
    expect(calledOptions.headers['Authorization']).toBe('Bearer token')
    const parsedBody = JSON.parse(calledOptions.body)
    expect(parsedBody.messaging_product).toBe('whatsapp')
    expect(parsedBody.to).toBe('919180473902')
    expect(parsedBody.template.name).toBe('tmpl')
    // Verify all 5 template parameters are present
    expect(parsedBody.template.components[0].parameters).toHaveLength(5)
  })

  it('includes full enquiry details in WhatsApp template parameters', async () => {
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const { req, res } = mockReqRes({
      body: {
        parentName: 'Lakshmi Devi',
        phone: '9123456789',
        studentClass: 'Class 4 - 5',
        course: 'Music',
        message: 'Interested in Carnatic music',
      },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(200)
    const [, opts] = global.fetch.mock.calls[0]
    const body = JSON.parse(opts.body)
    const params = body.template.components[0].parameters
    const texts = params.map((p) => p.text)
    expect(texts).toContain('Lakshmi Devi')
    expect(texts).toContain('9123456789')
    expect(texts).toContain('Class 4 - 5')
    expect(texts).toContain('Music')
    expect(texts).toContain('Interested in Carnatic music')
  })
})

describe('send-enquiry API – Error Handling', () => {
  it('returns 502 on Meta API non-ok response', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: { message: 'bad' } }),
    })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(502)
    expect(res.body.success).toBe(false)
    // Must not leak internal error details or credentials
    expect(JSON.stringify(res.body)).not.toContain('bad')
    expect(JSON.stringify(res.body)).not.toContain('token')
  })

  it('returns 504 on network timeout (AbortError)', async () => {
    global.fetch.mockImplementation(
      () =>
        new Promise((_, reject) => {
          const e = new Error('aborted')
          e.name = 'AbortError'
          reject(e)
        }),
    )
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(504)
  })

  it('returns 500 on unexpected fetch exception', async () => {
    global.fetch.mockRejectedValue(new Error('Network crash'))
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    expect(res.statusCode).toBe(500)
  })

  it('does not expose access token in error responses', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: { message: 'OAuth error', code: 190 } }),
    })
    const { req, res } = mockReqRes({
      body: { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' },
    })
    await handler(req, res)
    const responseText = JSON.stringify(res.body)
    expect(responseText).not.toContain(ENV.WHATSAPP_ACCESS_TOKEN)
    expect(responseText).not.toContain(ENV.WHATSAPP_PHONE_NUMBER_ID)
  })
})

describe('send-enquiry API – Rate Limiting (Abuse Protection)', () => {
  // These tests explicitly set NODE_ENV to 'production' to enable rate limiting.
  // Each test uses a unique IP via nextIp() to prevent cross-test store pollution.

  it('allows requests up to RATE_LIMIT_MAX without blocking', async () => {
    process.env.NODE_ENV = 'production'
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const ip = nextIp()
    const validBody = { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' }
    // RATE_LIMIT_MAX = 5, so first 5 should succeed
    for (let i = 0; i < 5; i++) {
      const { req, res } = mockReqRes({ body: validBody, ip })
      await handler(req, res)
      expect(res.statusCode).toBe(200)
    }
  })

  it('blocks the 6th request from the same IP within the window', async () => {
    process.env.NODE_ENV = 'production'
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const ip = nextIp()
    const validBody = { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' }
    for (let i = 0; i < 5; i++) {
      const { req, res } = mockReqRes({ body: validBody, ip })
      await handler(req, res)
    }
    const { req, res } = mockReqRes({ body: validBody, ip })
    await handler(req, res)
    expect(res.statusCode).toBe(429)
    expect(res.body.success).toBe(false)
  })

  it('rate-limit response includes Retry-After header', async () => {
    process.env.NODE_ENV = 'production'
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const ip = nextIp()
    const validBody = { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' }
    for (let i = 0; i < 5; i++) {
      const { req, res } = mockReqRes({ body: validBody, ip })
      await handler(req, res)
    }
    const { req, res } = mockReqRes({ body: validBody, ip })
    await handler(req, res)
    expect(res.statusCode).toBe(429)
    expect(res.headers['Retry-After']).toBeDefined()
  })

  it('different IPs are rate-limited independently', async () => {
    process.env.NODE_ENV = 'production'
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    const ipA = nextIp()
    const ipB = nextIp()
    const validBody = { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' }
    // Exhaust the rate limit for IP A
    for (let i = 0; i < 5; i++) {
      const { req, res } = mockReqRes({ body: validBody, ip: ipA })
      await handler(req, res)
    }
    // IP B should still succeed on its first request
    const { req: reqB, res: resB } = mockReqRes({ body: validBody, ip: ipB })
    await handler(reqB, resB)
    expect(resB.statusCode).toBe(200)
  })

  it('rate limiting is disabled in test environment (NODE_ENV=test)', async () => {
    process.env.NODE_ENV = 'test'
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({}) })
    // Use the same IP repeatedly — should not be blocked in test mode
    const validBody = { parentName: 'Jane', phone: '9876543210', course: 'School Tuition' }
    for (let i = 0; i < 10; i++) {
      const { req, res } = mockReqRes({ body: validBody, ip: '127.0.0.1' })
      await handler(req, res)
      expect(res.statusCode).toBe(200)
    }
  })
})

describe('send-enquiry API – Duplicate Submissions', () => {
  it('processes two identical payloads independently (no server-side dedup)', async () => {
    // The API intentionally does not deduplicate — both submissions are forwarded to Meta.
    // Client-side dedup (disabled button during submission) prevents accidental double-sends.
    global.fetch.mockResolvedValue({ ok: true, json: async () => ({ messages: [{ id: 'x' }] }) })
    const body = { parentName: 'Duplicate Parent', phone: '9876543210', course: 'Music' }

    const { req: req1, res: res1 } = mockReqRes({ body })
    const { req: req2, res: res2 } = mockReqRes({ body })
    await handler(req1, res1)
    await handler(req2, res2)

    expect(res1.statusCode).toBe(200)
    expect(res2.statusCode).toBe(200)
    expect(global.fetch).toHaveBeenCalledTimes(2)
  })
})
