/**
 * Brilliant Hub – Enquiry Service
 *
 * Formats admission enquiry details into a clean, polite message and opens
 * WhatsApp directly to the institute owner (+91 99165 22810).
 */

export const DEFAULT_WHATSAPP_NUMBER = '919916522810'

/**
 * Builds a clean, polite WhatsApp Click-to-Chat URL containing the parent's enquiry details.
 *
 * @param {Object} payload
 * @param {string} payload.parentName
 * @param {string} payload.phone
 * @param {string} [payload.studentClass]
 * @param {string} [payload.course]
 * @param {string} [payload.message]
 * @param {string} [targetNumber]
 * @returns {string}
 */
export function buildWhatsAppUrl(payload, targetNumber = DEFAULT_WHATSAPP_NUMBER) {
  const parentName = typeof payload?.parentName === 'string' ? payload.parentName.trim() : ''
  const phone = typeof payload?.phone === 'string' ? payload.phone.trim() : ''
  const studentClass =
    typeof payload?.studentClass === 'string' ? payload.studentClass.trim() : ''
  const course = Array.isArray(payload?.course)
    ? payload.course.join(', ')
    : typeof payload?.course === 'string'
      ? payload.course.trim()
      : typeof payload?.interestedCourse === 'string'
        ? payload.interestedCourse.trim()
        : ''
  const message = typeof payload?.message === 'string' ? payload.message.trim() : ''

  const lines = [
    'Hello Brilliant Hub,',
    '',
    'I would like to enquire about admission for my child. Here are the details:',
    '',
    `• Parent Name: ${parentName}`,
    `• Contact Number: ${phone}`,
  ]

  if (studentClass) {
    lines.push(`• Student Grade / Class: ${studentClass}`)
  }

  if (course) {
    lines.push(`• Interested Course(s): ${course}`)
  }

  if (message) {
    lines.push(`• Specific Query / Note: ${message}`)
  }

  lines.push('')
  lines.push('Please share the batch timings, fee details, and admission process. Thank you!')

  const encoded = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${targetNumber}?text=${encoded}`
}

/**
 * Submits an admission enquiry:
 * 1. Formats the enquiry details into a clean WhatsApp message
 * 2. Opens WhatsApp in a new tab for the parent
 * 3. Asynchronously notifies the backend API if configured
 *
 * @param {Object} payload
 * @returns {Promise<{ data: { success: boolean, whatsappUrl: string, message: string } | null, error: Error | null }>}
 */
export async function submitEnquiry(payload) {
  if (!payload || typeof payload !== 'object') {
    return { data: null, error: new Error('Invalid enquiry details.') }
  }

  const course = Array.isArray(payload?.course)
    ? payload.course.join(', ')
    : payload?.course || payload?.interestedCourse || ''

  const body = {
    parentName: payload?.parentName,
    phone: payload?.phone,
    studentClass: payload?.studentClass,
    course,
    message: payload?.message,
  }

  const whatsappUrl = buildWhatsAppUrl(body)

  // In browser environments, open WhatsApp directly
  if (typeof window !== 'undefined' && typeof window.open === 'function') {
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch {
      // Ignored if browser popups are blocked; the UI button provides a manual link
    }
  }

  // Non-blocking background call to /api/send-enquiry (if server is configured)
  try {
    if (typeof fetch === 'function') {
      fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).catch(() => {})
    }
  } catch {
    // Non-blocking fallback
  }

  return {
    data: {
      success: true,
      whatsappUrl,
      message: 'Enquiry submitted successfully.',
    },
    error: null,
  }
}

export const sendEnquiry = submitEnquiry
export default submitEnquiry
