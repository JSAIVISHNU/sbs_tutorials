import { useState } from 'react'
import { submitEnquiry } from '../../services/supabase/enquiries.js'
import { toUserMessage, logError } from '../../utils/helpers/errors.js'

export function EnquiryModal({ open, course, onClose }) {
  const [parentName, setParentName] = useState('')
  const [phone, setPhone] = useState('')
  const [grade, setGrade] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  function handleClose() {
    setParentName('')
    setPhone('')
    setGrade('')
    setStatus('idle')
    setErrorMessage('')
    onClose()
  }

  if (!open) return null

  async function handleSubmit(event) {
    event.preventDefault()
    if (!parentName.trim() || !phone.trim()) return
    setStatus('submitting')
    setErrorMessage('')
    const { data, error } = await submitEnquiry({
      parentName,
      phone,
      studentClass: grade,
      course: course || 'General Program Enquiry',
      message: '',
    })
    if (error) {
      logError('EnquiryModal', error)
      setStatus('error')
      setErrorMessage(toUserMessage(error))
      return
    }
    setWhatsappUrl(data?.whatsappUrl || '')
    setStatus('success')
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-[#03345d]/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full p-[1.5rem] shadow-xl relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eef4ff] hover:bg-[#e3e8f3] flex items-center justify-center text-[#43474e] hover:text-[#03345d] transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
        <div className="flex items-center gap-[0.375rem] mb-[0.375rem]">
          <span className="material-symbols-outlined text-[#7d5700] text-[24px]">school</span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] font-semibold uppercase tracking-[0.04em]">
            Admission Enquiry
          </span>
        </div>
        <h3 className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] mb-1">
          Connect with Brilliant Hub
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] mb-[1.25rem]">
          Please share your details for personal batch consultation at our Uttarahalli centre.
        </p>
        {status === 'success' ? (
          <div className="flex flex-col gap-2 p-4 bg-[#eefbf3] border border-[#a3e8bc] rounded-xl font-['Plus_Jakarta_Sans']">
            <div className="flex items-center gap-2 text-[#0b6b33] font-bold text-[15px]">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>Thank you! We will contact you shortly.</span>
            </div>
            <p className="text-[13px] leading-[20px] text-[#2e593f]">
              Opening WhatsApp so you can chat directly with Brilliant Hub.
            </p>
            {whatsappUrl ? (
              <a
                className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-[13px] font-bold shadow-sm transition-all"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Continue on WhatsApp</span>
                <span className="material-symbols-outlined text-[16px]">chat</span>
              </a>
            ) : null}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[0.75rem]">
            <div>
              <label className="block font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] mb-1">
                Selected Program
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg bg-[#eef4ff] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#03345d] font-medium focus:outline-none cursor-default"
                readOnly
                type="text"
                value={course || 'General Program Enquiry'}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.75rem]">
              <div>
                <label className="block font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] mb-1">
                  Parent&apos;s Name *
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-white font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#161c24] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdc254]"
                  placeholder="e.g. Ramesh Kumar"
                  required
                  type="text"
                  value={parentName}
                  onChange={(event) => setParentName(event.target.value)}
                />
              </div>
              <div>
                <label className="block font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] mb-1">
                  Phone Number *
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-white font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#161c24] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdc254]"
                  placeholder="+91 99165 22810"
                  required
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#161c24] mb-1">
                Student Grade / Level
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg bg-white font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#161c24] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fdc254]"
                placeholder="e.g. Class 7 / Beginner"
                type="text"
                value={grade}
                onChange={(event) => setGrade(event.target.value)}
              />
            </div>
            {status === 'error' ? (
              <p className="text-sm text-[#ba1a1a] font-['Plus_Jakarta_Sans']">{errorMessage}</p>
            ) : null}
            <div className="mt-[0.375rem] flex items-center justify-end gap-[0.75rem]">
              <button
                type="button"
                onClick={handleClose}
                className="px-[1.25rem] py-2 rounded-lg bg-[#eef4ff] hover:bg-[#e3e8f3] font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] text-[#43474e] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-1.5 px-[1.25rem] py-2 rounded-lg bg-[#03345d] hover:bg-[#244b75] text-white font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-colors shadow-sm disabled:opacity-50"
              >
                <span>{status === 'submitting' ? 'Submitting...' : 'Submit Request'}</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}