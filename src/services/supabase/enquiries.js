import { supabase } from './client.js'

/**
 * Submits an admission enquiry to Supabase.
 * Anonymous users are permitted to insert only.
 *
 * @param {Object} payload
 * @param {string} payload.parentName
 * @param {string} payload.phone
 * @param {string} [payload.studentClass]
 * @param {string} payload.course
 * @param {string} [payload.message]
 * @returns {Promise<{ data: any, error: Error | null }>}
 */
export async function submitEnquiry(payload) {
  const record = {
    parent_name: payload.parentName,
    phone: payload.phone,
    student_class: payload.studentClass ?? null,
    course: payload.course,
    message: payload.message ?? null,
  }

  const { data, error } = await supabase.from('enquiries').insert(record).select('id').single()

  if (error) {
    return { data: null, error: new Error('Unable to submit enquiry. Please try again later.') }
  }

  return { data, error: null }
}
