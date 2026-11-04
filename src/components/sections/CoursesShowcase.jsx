import { useState } from 'react'
import { EnquiryModal } from '../forms/EnquiryModal.jsx'
import { COURSES } from '../../data/courses.js'

export function CoursesShowcase() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <section className="relative w-full py-[3rem] md:py-[5rem] px-[1.25rem] md:px-[3rem] overflow-hidden bg-[#f8faff]">
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#d5e7dd]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#ffdeaa]/35 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Header matching poster style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700] mb-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-wider font-extrabold">
              ★ ADMISSIONS OPEN • LEARN • CREATE • DISCOVER • EXCEL ★
            </span>
          </div>
          <h1 className="font-['Source_Serif_4'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] font-bold text-[#03345d]">
            Four Skills. One Place. Endless Possibilities.
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-[16px] leading-[26px] text-[#43474e] mt-3 max-w-2xl">
            Explore our 4 specialized learning tracks designed to cultivate academic success, cultural expression, artistic creativity, and rapid mental math agility.
          </p>
        </div>

        {/* 4 Cards Grid matching 01, 02, 03, 04 from the Flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] items-stretch">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 flex flex-col overflow-hidden relative group"
            >
              {/* Colored Top Accent Bar */}
              <div
                className="h-2.5 w-full"
                style={{ backgroundColor: course.themeColor }}
              />

              <div className="p-[1.5rem] flex flex-col flex-1 justify-between gap-[1.25rem]">
                <div className="flex flex-col gap-3">
                  
                  {/* Number Badge and Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-['Source_Serif_4'] text-[34px] font-black leading-none tracking-tight"
                      style={{ color: course.themeColor }}
                    >
                      {course.num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: course.themeColor }}
                    >
                      <span className="material-symbols-outlined text-[20px]">{course.icon}</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-bold text-[#03345d]">
                      {course.title}
                    </h2>
                    <span
                      className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[15px] font-extrabold uppercase tracking-wide block mt-1"
                      style={{ color: course.themeColor }}
                    >
                      {course.subtitle}
                    </span>
                  </div>

                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                    {course.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="flex flex-col gap-2 pt-2 border-t border-gray-100 font-['Plus_Jakarta_Sans'] text-[12px] leading-[18px] text-[#43474e]">
                    {course.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-1.5">
                        <span
                          className="material-symbols-outlined text-[15px] shrink-0 mt-0.5"
                          style={{ color: course.themeColor }}
                        >
                          check_circle
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                  <a
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-white shadow-xs hover:brightness-105 active:scale-[0.99] transition-all"
                    style={{ backgroundColor: course.themeColor }}
                    href={`https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(course.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>WhatsApp Enquiry</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course.title)}
                    className="w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#03345d] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold transition-colors"
                  >
                    <span>Instant Form Enquiry</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pamphlet Styled Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#03345d] via-[#02244a] to-[#03345d] p-6 md:p-8 text-white shadow-xl border-2 border-[#fdc254] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center lg:text-left gap-1.5">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#fdc254] font-['Plus_Jakarta_Sans'] text-[12px] font-black uppercase tracking-wider">
              <span>★</span>
              <span>ADMISSIONS OPEN</span>
              <span>★</span>
              <span className="text-gray-400">•</span>
              <span>UTTARAHALLI BENGALURU</span>
            </div>
            <h3 className="font-['Source_Serif_4'] text-[24px] sm:text-[28px] font-bold text-white">
              Four Skills. One Place. Endless Possibilities.
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-300 max-w-xl">
              VISIT BRILLIANT HUB, Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+918951412810"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-colors border border-white/20"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>89514 12810</span>
            </a>
            <a
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[14px] font-extrabold transition-all shadow-md active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      <EnquiryModal open={!!selectedCourse} course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  )
}

export default CoursesShowcase
