const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map()

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || 'unknown'
}

function checkRateLimit(ip) {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }
  entry.count += 1
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count }
}

const COURSE_MAP = {
  tuition: 'School Tuition',
  'school tuition': 'School Tuition',
  music: 'Music',
  'music classes': 'Music',
  drawing: 'Drawing',
  'drawing classes': 'Drawing',
  abacus: 'Abacus',
  'abacus classes': 'Abacus',
}

function normalizeCourse(value) {
  if (typeof value !== 'string') return null
  const key = value.trim().toLowerCase()
  if (Object.prototype.hasOwnProperty.call(COURSE_MAP, key)) {
    return COURSE_MAP[key]
  }
  // support comma-separated selections by mapping the first token
  const first = key.split(',')[0].trim()
  if (Object.prototype.hasOwnProperty.call(COURSE_MAP, first)) {
    return COURSE_MAP[first]
  }
  return null
}

function validateBody(body) {
  const errors = {}
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, errors: { body: 'Invalid request body.' } }
  }

  const parentName = typeof body.parentName === 'string' ? body.parentName.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const studentClass = typeof body.studentClass === 'string' ? body.studentClass.trim() : ''
  const courseRaw = typeof body.course === 'string' ? body.course.trim() : (typeof body.interestedCourse === 'string' ? body.interestedCourse.trim() : '')
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!parentName) errors.parentName = 'Parent name is required.'
  else if (parentName.length > 100) errors.parentName = 'Parent name must be at most 100 characters.'

  if (!phone) errors.phone = 'Phone number is required.'
  else if (!/^[0-9]{10}$/.test(phone)) errors.phone = 'Phone number must be a 10-digit number.'

  const course = normalizeCourse(courseRaw)
  if (!courseRaw) errors.course = 'Interested course is required.'
  else if (!course) errors.course = 'Interested course must be one of: School Tuition, Music, Drawing, Abacus.'

  if (studentClass && studentClass.length > 50) errors.studentClass = 'Student class must be at most 50 characters.'
  if (message && message.length > 1000) errors.message = 'Message must be at most 1000 characters.'

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return {
    ok: true,
    data: {
      parentName,
      phone,
      studentClass: studentClass || 'Not provided',
      course,
      message: message || 'No message',
    },
  }
}

function getEnv() {
  return {
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    recipientNumber: process.env.WHATSAPP_RECIPIENT_NUMBER,
    templateName: process.env.WHATSAPP_TEMPLATE_NAME,
    templateLanguage: process.env.WHATSAPP_TEMPLATE_LANGUAGE,
    apiVersion: process.env.WHATSAPP_API_VERSION || 'v19.0',
  }
}

function validateEnv(env) {
  const missing = []
  if (!env.accessToken) missing.push('WHATSAPP_ACCESS_TOKEN')
  if (!env.phoneNumberId) missing.push('WHATSAPP_PHONE_NUMBER_ID')
  if (!env.recipientNumber) missing.push('WHATSAPP_RECIPIENT_NUMBER')
  if (!env.templateName) missing.push('WHATSAPP_TEMPLATE_NAME')
  if (!env.templateLanguage) missing.push('WHATSAPP_TEMPLATE_LANGUAGE')
  return missing
}

export default async function handler(req, res) {
  // Strict method handling
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed. Use POST.' })
  }

  // Basic abuse protection: rate limit by IP (disabled in test env to keep tests deterministic)
  if (process.env.NODE_ENV !== 'test') {
    const ip = getClientIp(req)
    const limit = checkRateLimit(ip)
    if (!limit.allowed) {
      res.setHeader('Retry-After', String(limit.retryAfter || 60))
      return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' })
    }
  }

  // Request size guard
  const contentLength = Number(req.headers['content-length'] || 0)
  if (contentLength && contentLength > 10 * 1024) {
    return res.status(413).json({ success: false, message: 'Request body too large.' })
  }

  const env = getEnv()
  const missingEnv = validateEnv(env)
  if (missingEnv.length > 0) {
    return res.status(500).json({ success: false, message: 'Server configuration error.' })
  }

  // Validate recipient number format (international, digits only)
  if (!/^[0-9]{10,15}$/.test(env.recipientNumber)) {
    return res.status(500).json({ success: false, message: 'Server configuration error.' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ success: false, message: 'Invalid JSON body.' })
    }
  }

  const validation = validateBody(body)
  if (!validation.ok) {
    return res.status(400).json({ success: false, message: 'Invalid enquiry data.', errors: validation.errors })
  }

  const { parentName, phone, studentClass, course, message } = validation.data

  const url = `https://graph.facebook.com/${env.apiVersion}/${env.phoneNumberId}/messages`

  const payload = {
    messaging_product: 'whatsapp',
    to: env.recipientNumber,
    type: 'template',
    template: {
      name: env.templateName,
      language: { code: env.templateLanguage },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: parentName },
            { type: 'text', text: phone },
            { type: 'text', text: studentClass },
            { type: 'text', text: course },
            { type: 'text', text: message },
          ],
        },
      ],
    },
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    clearTimeout(timeout)

    await response.json().catch(() => ({}))

    if (!response.ok) {
      // Do not leak token or internal details
      return res.status(502).json({ success: false, message: 'WhatsApp notification could not be sent.' })
    }

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully.' })
  } catch (error) {
    clearTimeout(timeout)
    if (error?.name === 'AbortError') {
      return res.status(504).json({ success: false, message: 'Request timed out. Please try again.' })
    }
    return res.status(500).json({ success: false, message: 'Unexpected server error.' })
  }
}