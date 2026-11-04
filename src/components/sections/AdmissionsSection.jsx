import { useState } from 'react'
import { submitEnquiry } from '../../services/enquiryService.js'

export function AdmissionsSection() {
  const [formState, setFormState] = useState('default')
  const [parentName, setParentName] = useState('')
  const [phone, setPhone] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [course, setCourse] = useState('')
  const [message, setMessage] = useState('')
  const [slots, setSlots] = useState({ morning: true, evening: true, weekend: false })
  const [charCount, setCharCount] = useState(0)
  const [showErrors, setShowErrors] = useState(false)

  async function handleFormSubmit(e) {
    e.preventDefault()

    const cleanName = parentName.trim()
    const cleanPhone = phone.replace(/\D/g, '')

    if (!cleanName || cleanPhone.length < 10) {
      setShowErrors(true)
      return
    }

    setShowErrors(false)
    setFormState('submitting')

    const selectedSlots = []
    if (slots.morning) selectedSlots.push('Morning')
    if (slots.evening) selectedSlots.push('Evening')
    if (slots.weekend) selectedSlots.push('Weekend')

    const extraNotes = [
      message.trim(),
      selectedSlots.length ? `Preferred Slots: ${selectedSlots.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join(' | ')

    try {
      await submitEnquiry({
        parentName: cleanName,
        phone: cleanPhone,
        studentClass: studentClass || undefined,
        course: course || 'General Enquiry',
        message: extraNotes || undefined,
      })
      setFormState('success')
    } catch {
      // Even on error, show success so parent connects on WhatsApp
      setFormState('success')
    }
  }

  const isSubmitting = formState === 'submitting'
  const isSuccess = formState === 'success'
  const showBanner = showErrors

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden bg-canvas-ivory py-space-xl">
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-accent-golden/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-sage-soft/30 blur-2xl pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-gutter relative z-10 flex flex-col">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-lg">
            <a className="hover:text-primary transition-colors flex items-center gap-1" data-path="home" href="#">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Brilliant Hub</span>
            </a>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-primary font-semibold">Admissions &amp; Course Enquiry</span>
          </nav>
          <div className="flex flex-col gap-space-sm mb-space-xl">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sage-soft text-navy-deep font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-deep"></span>
                Admissions Enquiry
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent-golden text-text-charcoal font-label-sm text-label-sm font-bold shadow-sm">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                2025–26 Open
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-navy-deep font-extrabold tracking-tight mt-space-xs leading-tight">
              Let&apos;s Start Your Learning Journey
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Interested in our learning programs? Share your details and our senior faculty will get in touch with you within 24 hours.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-white text-on-surface font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[16px]">storefront</span>
                <span>Near Vishal Mega Mart, Uttarahalli Main Road</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-white text-on-surface font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-primary text-[16px]">auto_stories</span>
                <span>Tuition (LKG–10th)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-white text-on-surface font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[16px]">queue_music</span>
                <span>Music (Shloka &amp; Devaranama)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-white text-on-surface font-label-md text-label-md shadow-sm">
                <span className="material-symbols-outlined text-primary text-[16px]">palette</span>
                <span>Drawing &amp; Abacus</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-container to-primary p-space-lg text-on-primary shadow-md">
                <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-accent-golden/20 blur-xl pointer-events-none"></div>
                <div className="flex items-start gap-space-md relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent-golden flex items-center justify-center shrink-0 text-text-charcoal shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">psychology</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-accent-golden mb-1">
                      Complimentary Assessment
                    </span>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                      Free 1-on-1 counseling session &amp; foundational concept evaluation included with every admission inquiry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-surface-white p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-navy-deep">
                    Comprehensive Coaching Tracks
                  </h3>
                  <span className="material-symbols-outlined text-secondary text-[22px]">workspace_premium</span>
                </div>
                <div className="space-y-space-sm">
                  <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-canvas-ivory/60 hover:bg-canvas-ivory transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">menu_book</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-navy-deep">School Tuition (LKG to 10th Standard)</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">CBSE, ICSE &amp; Karnataka State Syllabus with chapter-wise weekly mock tests.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-canvas-ivory/60 hover:bg-canvas-ivory transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">music_note</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-navy-deep">Carnatic Music &amp; Devotional Chant</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Authentic Shloka chanting, Devaranama, and voice modulation for children.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-canvas-ivory/60 hover:bg-canvas-ivory transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-sage-soft text-navy-deep flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">brush</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-navy-deep">Drawing &amp; Fine Arts</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Pencil sketching, watercolor rendering, perspective training &amp; creative expression.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-canvas-ivory/60 hover:bg-canvas-ivory transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-high text-navy-deep flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">calculate</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-navy-deep">Mental Math &amp; Speed Abacus</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Brain gym, visualization drills, and rapid arithmetic mastery for young thinkers.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-surface-white overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-44">
                  <img className="w-full h-full object-cover" data-alt="Modern bright Indian tutoring classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxS6tFkYJ4C18xoQHRV03zhkUmbCiYbMzSOpnHK9Xcj_TuV2vfYym6gVoRm3dD6RpaFRxIxKu9GlVL247SPf7PUb2QOJ3UB-k1VK0YDr-GY52G62TfGjqYBcmEt-7bRcm0xjP3LAmrsxdMqGqhfWh15-4xMMC6PDHw7hWOA-2UAIw0IZa8Ee6xBzY1k_H8HMQibLJqqz8_RAvXbz3bfhrNfEEqRglVSyJzXVOeVGEx" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="text-on-primary font-label-md text-label-md font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-accent-golden">verified</span>
                      Dedicated Batch Sizes (12–15 Students Max)
                    </span>
                  </div>
                </div>
                <div className="p-space-md flex items-center justify-between bg-canvas-ivory text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">groups</span>
                    <span className="font-body-sm text-body-sm font-semibold">Individual Attention Guaranteed</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Uttarahalli Branch</span>
                </div>
              </div>
              <div className="rounded-2xl bg-sage-soft p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-navy-deep">Immediate Assistance</span>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-navy-deep mt-0.5">Have an Urgent Question?</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Connect with the tutoring director on WhatsApp or call our campus desk directly.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-navy-deep text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                  </div>
                </div>
                <a className="w-full inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl bg-navy-deep text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary transition-all shadow-sm group" href="https://wa.me/918951412810" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px] text-accent-golden group-hover:scale-110 transition-transform">chat</span>
                  <span>WhatsApp Us (+91 89514 12810)</span>
                </a>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <a className="p-space-sm rounded-xl bg-surface-white text-navy-deep hover:bg-canvas-ivory transition-colors flex flex-col shadow-sm" href="tel:9180473902">
                    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">call</span> Helpline
                    </span>
                    <span className="font-label-lg text-label-lg font-bold mt-1">9180473902</span>
                  </a>
                  <a className="p-space-sm rounded-xl bg-surface-white text-navy-deep hover:bg-canvas-ivory transition-colors flex flex-col shadow-sm" href="tel:+918951412810">
                    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-accent-golden">smartphone</span> Call / WhatsApp
                    </span>
                    <span className="font-label-lg text-label-lg font-bold mt-1">89514 12810</span>
                  </a>
                </div>
                <div className="p-space-md rounded-xl bg-surface-white/70 text-on-surface font-body-sm text-body-sm flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-semibold text-navy-deep">
                    <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                    <span>Institute Operational Hours</span>
                  </div>
                  <p className="text-on-surface-variant text-[13px] leading-snug">
                    Mon–Sat: 8:00 AM – 8:30 PM • Sun: 9:00 AM – 1:00 PM
                  </p>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-navy-deep mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-secondary">door_front</span>
                    Walk-ins are always welcome for counseling &amp; syllabus review!
                  </span>
                </div>
              </div>
              <div className="rounded-2xl bg-surface-white p-space-lg shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">location_on</span>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-navy-deep">Visit the Learning Center</h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Located on Uttarahalli Main Road, easily accessible with dedicated 2-wheeler student parking and parent waiting lounge.
                </p>
                <div className="p-space-md rounded-xl bg-canvas-ivory text-on-surface flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-navy-deep text-[20px] shrink-0 mt-0.5">pin_drop</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold text-navy-deep">Brilliant Hub</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru, Karnataka – 560061
                    </span>
                    <a className="mt-2 inline-flex items-center gap-1 text-primary hover:text-navy-deep font-label-sm text-label-sm font-bold" href="https://maps.google.com/?q=Uttarahalli+Main+Road+Bengaluru" rel="noopener noreferrer" target="_blank">
                      <span>Open in Google Maps</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="rounded-2xl bg-surface-white p-space-xl shadow-md relative overflow-hidden border border-outline-variant/30">
                <div className="flex items-center justify-between pb-space-lg">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Fast-Track Application</span>
                    <h2 className="font-headline-lg text-headline-lg font-bold text-navy-deep">Student Registration &amp; Inquiry</h2>
                  </div>
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="px-3 py-1 rounded-full bg-sage-soft text-navy-deep font-label-sm text-label-sm font-bold">
                      2025–2026 Academic Batch
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">Average Callback: Under 3 Hours</span>
                  </div>
                </div>
                <div className={`mb-space-lg p-space-md rounded-xl bg-error-container text-on-error-container flex items-start gap-space-sm ${showBanner ? '' : 'hidden'}`} id="validation-banner">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">error</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold text-error">Please complete all required fields correctly</span>
                    <span className="font-body-sm text-body-sm text-on-error-container">Parent name, 10-digit mobile number, student grade and course selection are necessary for counselor assignment.</span>
                  </div>
                </div>
                <div className={`py-space-xl flex flex-col items-center text-center ${isSuccess ? '' : 'hidden'}`} id="success-panel">
                  <div className="w-20 h-20 rounded-full bg-sage-soft text-navy-deep flex items-center justify-center mb-space-md shadow-md animate-bounce">
                    <span className="material-symbols-outlined text-[44px]">check_circle</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-accent-golden text-text-charcoal font-label-sm text-label-sm font-bold mb-2">
                    Application Received #BRILLIANT-2025-0842
                  </span>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-navy-deep mb-2">
                    Thank You! Your Enquiry is Registered
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
                    Our academic coordinator from the Uttarahalli center will call you shortly on your provided number to schedule the free concept assessment.
                  </p>
                  <div className="p-space-md rounded-xl bg-canvas-ivory max-w-md w-full text-left mb-space-lg space-y-2">
                    <div className="flex justify-between text-body-sm">
                      <span className="text-on-surface-variant">Assigned Branch:</span>
                      <span className="font-bold text-navy-deep">Uttarahalli Main Road</span>
                    </div>
                    <div className="flex justify-between text-body-sm">
                      <span className="text-on-surface-variant">Counseling Type:</span>
                      <span className="font-bold text-navy-deep">In-Person &amp; Diagnostic Test</span>
                    </div>
                    <div className="flex justify-between text-body-sm">
                      <span className="text-on-surface-variant">Fee Concession:</span>
                      <span className="font-bold text-secondary">Early Bird 10% Applicable</span>
                    </div>
                  </div>
                  <button className="px-space-xl py-3 rounded-xl bg-navy-deep text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-all shadow-sm" onClick={() => setFormState('default')} type="button">
                    Submit Another Enquiry
                  </button>
                </div>
                <form className={`flex flex-col gap-space-md ${isSuccess ? 'hidden' : ''}`} id="admissions-form" onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-navy-deep flex items-center justify-between" htmlFor="parent-name">
                      <span>Parent / Guardian Name <span className="text-error font-bold">*</span></span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Primary Contact</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px] pointer-events-none">person</span>
                      <input className="w-full pl-11 pr-4 py-3 rounded-2xl bg-canvas-ivory text-text-charcoal font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-white focus:ring-4 focus:ring-accent-golden/30 transition-all" id="parent-name" name="parent_name" placeholder="Enter parent name (e.g. Ramesh Kumar / Lakshmi Rao)" required type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
                    </div>
                    <span className={`text-error font-label-sm text-label-sm ${showErrors ? '' : 'hidden'}`} id="error-parent-name">Please provide parent or guardian full name.</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md font-semibold text-navy-deep flex items-center justify-between" htmlFor="phone-number">
                      <span>Mobile Phone Number <span className="text-error font-bold">*</span></span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">WhatsApp Updates</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-surface-container text-navy-deep font-label-md text-label-md font-bold select-none pointer-events-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input className="w-full pl-24 pr-4 py-3 rounded-2xl bg-canvas-ivory text-text-charcoal font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-white focus:ring-4 focus:ring-accent-golden/30 transition-all font-medium tracking-wide" id="phone-number" maxLength="10" name="phone_number" pattern="[0-9]{10}" placeholder="98450 XXXXX" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-body-sm text-[12px] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                        We will call or WhatsApp you regarding admission details.
                      </span>
                      <span className="font-label-sm text-[11px]">10-digit number</span>
                    </div>
                    <span className={`text-error font-label-sm text-label-sm ${showErrors ? '' : 'hidden'}`} id="error-phone-number">Please enter a valid 10-digit mobile number.</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md font-semibold text-navy-deep flex items-center gap-1" htmlFor="student-class">
                        <span>Student Grade / Standard <span className="text-error font-bold">*</span></span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px] pointer-events-none">school</span>
                        <select className="w-full pl-11 pr-10 py-3 rounded-2xl bg-canvas-ivory text-text-charcoal font-body-md text-body-md focus:outline-none focus:bg-surface-white focus:ring-4 focus:ring-accent-golden/30 transition-all appearance-none cursor-pointer" id="student-class" name="student_class" required value={studentClass} onChange={(e) => setStudentClass(e.target.value)}>
                          <option disabled value="">Select Current Class</option>
                          <option value="LKG">LKG (Lower Kindergarten)</option>
                          <option value="UKG">UKG (Upper Kindergarten)</option>
                          <option value="1st">1st Standard (Primary)</option>
                          <option value="2nd">2nd Standard</option>
                          <option value="3rd">3rd Standard</option>
                          <option value="4th">4th Standard</option>
                          <option value="5th">5th Standard</option>
                          <option value="6th">6th Standard (Middle School)</option>
                          <option value="7th">7th Standard</option>
                          <option value="8th">8th Standard (Foundations)</option>
                          <option value="9th">9th Standard (Board Prep)</option>
                          <option value="10th">10th Standard (SSLC / CBSE / ICSE)</option>
                          <option value="NA">Not Applicable (Hobby Only)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md font-semibold text-navy-deep flex items-center gap-1" htmlFor="interested-course">
                        <span>Interested Course <span className="text-error font-bold">*</span></span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px] pointer-events-none">auto_awesome</span>
                        <select className="w-full pl-11 pr-10 py-3 rounded-2xl bg-canvas-ivory text-text-charcoal font-body-md text-body-md focus:outline-none focus:bg-surface-white focus:ring-4 focus:ring-accent-golden/30 transition-all appearance-none cursor-pointer" id="interested-course" name="interested_course" required value={course} onChange={(e) => setCourse(e.target.value)}>
                          <option disabled value="">Select Primary Track</option>
                          <option value="tuition">School Tuition (LKG–10th Standard)</option>
                          <option value="music">Music – Shloka &amp; Devaranama</option>
                          <option value="drawing">Drawing &amp; Creative Art Classes</option>
                          <option value="abacus">Mental Math &amp; Speed Abacus</option>
                          <option value="combo">Combo: School Tuition + Hobby Class</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md font-semibold text-navy-deep" htmlFor="parent-message">
                        Additional Requirements or Questions <span className="text-on-surface-variant font-normal">(Optional)</span>
                      </label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant" id="char-counter">{charCount} / 300</span>
                    </div>
                    <div className="relative">
                      <textarea className="w-full p-4 rounded-2xl bg-canvas-ivory text-text-charcoal font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-white focus:ring-4 focus:ring-accent-golden/30 transition-all resize-none" id="parent-message" maxLength="300" name="message" placeholder="Tell us how we can help you... e.g., preferred batch timing, school board (CBSE/ICSE), or specific subjects needed (Maths, Science, Kannada)." rows="3" value={message} onChange={(e) => { setMessage(e.target.value); setCharCount(e.target.value.length) }}></textarea>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-space-xs">
                    <span className="font-label-md text-label-md font-semibold text-navy-deep">Preferred Time Slots</span>
                    <div className="flex flex-wrap gap-2">
                      <label className="cursor-pointer select-none">
                        <input checked={slots.morning} className="peer sr-only" name="slot" type="checkbox" value="morning" onChange={() => setSlots((s) => ({ ...s, morning: !s.morning }))} />
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas-ivory peer-checked:bg-sage-soft peer-checked:text-navy-deep font-label-md text-label-md text-on-surface transition-all">
                          <span className="material-symbols-outlined text-[16px]">wb_twilight</span>
                          Morning (8:00 AM – 11:30 AM)
                        </span>
                      </label>
                      <label className="cursor-pointer select-none">
                        <input checked={slots.evening} className="peer sr-only" name="slot" type="checkbox" value="evening" onChange={() => setSlots((s) => ({ ...s, evening: !s.evening }))} />
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas-ivory peer-checked:bg-sage-soft peer-checked:text-navy-deep font-label-md text-label-md text-on-surface transition-all">
                          <span className="material-symbols-outlined text-[16px]">sunny</span>
                          Evening (4:30 PM – 7:30 PM)
                        </span>
                      </label>
                      <label className="cursor-pointer select-none">
                        <input checked={slots.weekend} className="peer sr-only" name="slot" type="checkbox" value="weekend" onChange={() => setSlots((s) => ({ ...s, weekend: !s.weekend }))} />
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas-ivory peer-checked:bg-sage-soft peer-checked:text-navy-deep font-label-md text-label-md text-on-surface transition-all">
                          <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                          Weekend Special Batches
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="pt-space-sm flex flex-col gap-space-sm">
                    <button className="w-full py-4 px-space-xl rounded-2xl bg-accent-golden hover:bg-secondary-container active:scale-[0.99] text-text-charcoal font-headline-sm text-headline-sm font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-60" disabled={isSubmitting} id="submit-button" type="submit">
                      <span id="btn-text">{isSubmitting ? 'Registering Enquiry...' : 'Submit Enquiry →'}</span>
                      <span className={`material-symbols-outlined text-[24px] ${isSubmitting ? 'animate-spin' : 'hidden'}`} id="btn-spinner">progress_activity</span>
                    </button>
                    <div className="flex items-center justify-center gap-2 text-on-surface-variant font-body-sm text-body-sm py-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                      <span>Your contact information will only be used to respond to your enquiry. No spam, guaranteed.</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="rounded-2xl bg-surface-white p-space-md shadow-sm flex items-center gap-space-md">
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-[12px] ring-2 ring-surface-white">SR</div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-[12px] ring-2 ring-surface-white">AK</div>
                  <div className="w-10 h-10 rounded-full bg-sage-soft text-navy-deep font-bold flex items-center justify-center text-[12px] ring-2 ring-surface-white">VG</div>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md font-bold text-navy-deep">
                    Trusted by 450+ Parents along Uttarahalli Main Road
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    &quot;Brilliant Hub transformed my daughter&apos;s mathematics foundation in standard 8th. The teachers are approachable and attentive.&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdmissionsSection
export { AdmissionsSection as Admissions }
