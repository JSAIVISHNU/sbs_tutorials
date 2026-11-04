import { useState } from 'react'
import { validateEnquiry } from '../../utils/validation/enquiryValidation.js'
import { submitEnquiry } from '../../services/supabase/enquiries.js'
import { toUserMessage, logError } from '../../utils/helpers/errors.js'

const GRADES = [
  { value: '', label: 'Select standard / grade' },
  { value: 'LKG - UKG', label: 'Kindergarten (LKG / UKG)' },
  { value: 'Class 1 - 3', label: 'Class 1 to 3' },
  { value: 'Class 4 - 5', label: 'Class 4 to 5' },
  { value: 'Class 6 - 7', label: 'Class 6 to 7' },
  { value: 'Class 8 - 10', label: 'Class 8 to 10 (High School)' },
]

const COURSE_OPTIONS = [
  { value: 'tuition', label: '01 – School Tuition (LKG to 10th)' },
  { value: 'music', label: '02 – Music Classes (Shloka & Devaranama)' },
  { value: 'drawing', label: '03 – Drawing Classes (Art & Creativity)' },
  { value: 'abacus', label: '04 – Abacus Classes (Mental Maths)' },
]

export function EnquiryForm() {
  const [values, setValues] = useState({
    parentName: '',
    phone: '',
    studentClass: '',
    selectedCourses: [],
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleCourseToggle(value) {
    setValues((prev) => {
      const selected = prev.selectedCourses.includes(value)
        ? prev.selectedCourses.filter((item) => item !== value)
        : [...prev.selectedCourses, value]
      return { ...prev, selectedCourses: selected }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const course = values.selectedCourses.join(', ')
    const validation = validateEnquiry({
      parentName: values.parentName,
      phone: values.phone,
      studentClass: values.studentClass,
      course: course || ' ',
      message: values.message,
    })
    setErrors(validation.errors)
    if (!validation.isValid) return

    setStatus('submitting')
    setErrorMessage('')

    const { data, error } = await submitEnquiry({
      parentName: values.parentName,
      phone: values.phone,
      studentClass: values.studentClass,
      course,
      message: values.message,
    })

    if (error) {
      logError('EnquiryForm', error)
      setStatus('error')
      setErrorMessage(toUserMessage(error))
      return
    }

    setWhatsappUrl(data?.whatsappUrl || '')
    setStatus('success')
    setValues({ parentName: '', phone: '', studentClass: '', selectedCourses: [], message: '' })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-2 p-4 bg-[#eefbf3] border border-[#a3e8bc] rounded-xl font-['Plus_Jakarta_Sans']">
        <div className="flex items-center gap-2 text-[#0b6b33] font-bold text-[15px]">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span>Enquiry submitted successfully. We will contact you shortly.</span>
        </div>
        <p className="text-[13px] leading-[20px] text-[#2e593f]">
          Opening WhatsApp to connect you directly with Brilliant Hub.
        </p>
        {whatsappUrl ? (
          <a
            className="inline-flex items-center justify-center gap-2 mt-1 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-[14px] font-bold shadow-sm transition-all"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Continue on WhatsApp</span>
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </a>
        ) : null}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[0.75rem]" noValidate>
      <div className="flex flex-col gap-1">
        <label className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] font-semibold">
          Parent&apos;s Full Name
        </label>
        <input
          className="w-full px-[1.25rem] py-[0.75rem] bg-[#eef4ff] rounded-lg font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#161c24] placeholder:text-[#73777f] focus:outline-none focus:bg-[#e3e8f3]"
          name="parentName"
          onChange={handleChange}
          placeholder="e.g. Ramesh Kumar"
          required
          type="text"
          value={values.parentName}
        />
        {errors.parentName ? (
          <p className="text-xs text-[#ba1a1a]">{errors.parentName}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] font-semibold">
          Contact Phone Number
        </label>
        <input
          className="w-full px-[1.25rem] py-[0.75rem] bg-[#eef4ff] rounded-lg font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#161c24] placeholder:text-[#73777f] focus:outline-none focus:bg-[#e3e8f3]"
          name="phone"
          onChange={handleChange}
          pattern="[0-9]{10}"
          placeholder="e.g. 9876543210"
          required
          type="tel"
          value={values.phone}
        />
        {errors.phone ? <p className="text-xs text-[#ba1a1a]">{errors.phone}</p> : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] font-semibold">
          Student Grade / Class
        </label>
        <select
          className="w-full px-[1.25rem] py-[0.75rem] bg-[#eef4ff] rounded-lg font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#161c24] focus:outline-none focus:bg-[#e3e8f3]"
          name="studentClass"
          onChange={handleChange}
          required
          value={values.studentClass}
        >
          {GRADES.map((grade) => (
            <option key={grade.value} value={grade.value}>
              {grade.label}
            </option>
          ))}
        </select>
        {errors.studentClass ? (
          <p className="text-xs text-[#ba1a1a]">{errors.studentClass}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] font-semibold mb-1">
          Courses of Interest
        </label>
        <div className="grid grid-cols-2 gap-[0.375rem] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#161c24]">
          {COURSE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-[0.375rem] p-2 rounded-lg bg-[#eef4ff] cursor-pointer hover:bg-[#e3e8f3]"
            >
              <input
                checked={values.selectedCourses.includes(option.value)}
                className="accent-[#03345d] w-4 h-4"
                name="course"
                onChange={() => handleCourseToggle(option.value)}
                type="checkbox"
                value={option.value}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {errors.course ? <p className="text-xs text-[#ba1a1a]">{errors.course}</p> : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] font-semibold">
          Message / Specific Queries
        </label>
        <textarea
          className="w-full px-[1.25rem] py-[0.75rem] bg-[#eef4ff] rounded-lg font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#161c24] placeholder:text-[#73777f] focus:outline-none focus:bg-[#e3e8f3]"
          name="message"
          onChange={handleChange}
          placeholder="Tell us about your child's requirements, preferred batch timing, etc."
          rows={3}
          value={values.message}
        />
        {errors.message ? <p className="text-xs text-[#ba1a1a]">{errors.message}</p> : null}
      </div>

      {status === 'error' ? (
        <p className="text-sm text-[#ba1a1a] font-['Plus_Jakarta_Sans']">{errorMessage}</p>
      ) : null}

      <button
        className="mt-[0.375rem] w-full py-[0.75rem] px-[1.25rem] bg-[#fdc254] text-[#725000] hover:bg-[#ffdeaa] rounded-lg font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-bold transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
        disabled={status === 'submitting'}
        type="submit"
      >
        <span>{status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}</span>
      </button>
    </form>
  )
}