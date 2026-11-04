import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  submitEnquiry,
  sendEnquiry,
  buildWhatsAppUrl,
  DEFAULT_WHATSAPP_NUMBER,
} from '../services/enquiryService.js'

beforeEach(() => {
  vi.restoreAllMocks()
})

describe('buildWhatsAppUrl', () => {
  it('builds a clean wa.me URL with default institute phone number', () => {
    const url = buildWhatsAppUrl({
      parentName: 'Jane Doe',
      phone: '9876543210',
      course: 'School Tuition',
    })
    expect(url).toContain(`https://wa.me/${DEFAULT_WHATSAPP_NUMBER}?text=`)
    const decoded = decodeURIComponent(url)
    expect(decoded).toContain('Hello Brilliant Hub,')
    expect(decoded).toContain('• Parent Name: Jane Doe')
    expect(decoded).toContain('• Contact Number: 9876543210')
    expect(decoded).toContain('• Interested Course(s): School Tuition')
    expect(decoded).toContain('Please share the batch timings')
  })

  it('includes studentClass and message when provided', () => {
    const url = buildWhatsAppUrl({
      parentName: 'Jane Doe',
      phone: '9876543210',
      studentClass: 'Class 8',
      course: 'Music',
      message: 'Interested in violin',
    })
    const decoded = decodeURIComponent(url)
    expect(decoded).toContain('• Student Grade / Class: Class 8')
    expect(decoded).toContain('• Specific Query / Note: Interested in violin')
  })

  it('joins array courses into a comma-separated string', () => {
    const url = buildWhatsAppUrl({
      parentName: 'Jane',
      phone: '9876543210',
      course: ['tuition', 'music'],
    })
    expect(decodeURIComponent(url)).toContain('tuition, music')
  })
})

describe('submitEnquiry', () => {
  it('returns success and the generated whatsappUrl', async () => {
    const res = await submitEnquiry({
      parentName: 'Jane Doe',
      phone: '9876543210',
      course: 'School Tuition',
    })
    expect(res.error).toBeNull()
    expect(res.data).toBeTruthy()
    expect(res.data.success).toBe(true)
    expect(res.data.whatsappUrl).toContain('https://wa.me/')
  })

  it('rejects invalid/null payload', async () => {
    const res = await submitEnquiry(null)
    expect(res.error).toBeInstanceOf(Error)
    expect(res.data).toBeNull()
  })

  it('calls window.open with the whatsappUrl when available in browser', async () => {
    const openMock = vi.fn()
    vi.stubGlobal('open', openMock)

    await submitEnquiry({
      parentName: 'Jane Doe',
      phone: '9876543210',
      course: 'School Tuition',
    })

    expect(openMock).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/'),
      '_blank',
      'noopener,noreferrer',
    )
    vi.unstubAllGlobals()
  })

  it('dispatches background fetch to /api/send-enquiry without blocking', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)

    const res = await submitEnquiry({
      parentName: 'Jane Doe',
      phone: '9876543210',
      course: 'Music',
    })

    expect(res.error).toBeNull()
    expect(fetchMock).toHaveBeenCalledWith('/api/send-enquiry', expect.any(Object))
    vi.unstubAllGlobals()
  })

  it('exports sendEnquiry as an alias for submitEnquiry', () => {
    expect(sendEnquiry).toBe(submitEnquiry)
  })
})
