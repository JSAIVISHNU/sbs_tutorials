import { COURSES } from '../../data/courses.js'

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-[3.5rem] bg-[#f8faff]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] flex flex-col gap-[2.5rem]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-[0.5rem]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700]">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.08em] font-extrabold">
              Four Skills • One Place • Endless Possibilities
            </span>
          </div>
          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[44px] leading-[38px] lg:leading-[52px] font-bold text-[#03345d]">
            Our Four Learning Pillars
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e]">
            Expertly designed courses providing personalized attention, creative expression, cultural roots, and mental math mastery for children in Uttarahalli.
          </p>
        </div>

        {/* 4 Cards matching 01, 02, 03, 04 from the Flyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between p-[1.5rem] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden group"
            >
              {/* Top Accent Stripe matching course color */}
              <div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ backgroundColor: course.themeColor }}
              />

              <div className="flex flex-col gap-[1rem] pt-1">
                {/* Number Badge and Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-['Source_Serif_4'] text-[32px] font-black leading-none tracking-tight"
                    style={{ color: course.themeColor }}
                  >
                    {course.num}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: course.themeColor }}
                  >
                    <span className="material-symbols-outlined text-[22px]">{course.icon}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-bold text-[#03345d]">
                    {course.title}
                  </h3>
                  <div
                    className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] font-extrabold tracking-wide uppercase mt-1"
                    style={{ color: course.themeColor }}
                  >
                    {course.subtitle}
                  </div>
                </div>

                {/* Highlights List with Checkmarks */}
                <ul className="flex flex-col gap-2 pt-1 border-t border-gray-100 font-['Plus_Jakarta_Sans'] text-[13px] leading-[18px] text-[#43474e]">
                  {course.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="material-symbols-outlined text-[16px] shrink-0 mt-0.5"
                        style={{ color: course.themeColor }}
                      >
                        check_circle
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-[1.5rem] mt-2 border-t border-gray-100">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all text-white shadow-sm hover:brightness-105 active:scale-[0.99]"
                  style={{ backgroundColor: course.themeColor }}
                  href={`https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(course.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner at bottom of courses matching the poster */}
        <div className="mt-2 rounded-2xl bg-gradient-to-r from-[#03345d] via-[#02244a] to-[#03345d] p-6 lg:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#fdc254]/30">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-extrabold text-[#fdc254] uppercase tracking-wider">
              ★ ADMISSIONS OPEN • ALL GRADES &amp; SKILL LEVELS ★
            </span>
            <h3 className="font-['Source_Serif_4'] text-[24px] sm:text-[28px] font-bold text-white">
              Give your child the Brilliant Hub Advantage
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-300">
              Personalized mentorship, calm study environment, and experienced teachers near Vishal Mega Mart.
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
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20schedule%20a%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#fdc254] hover:bg-[#f59e0b] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Schedule Visit</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CoursesSection
