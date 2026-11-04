import { COURSES } from '../../data/courses.js'

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-[3.5rem] lg:py-[5rem] bg-[#f8faff] relative overflow-hidden">
      {/* Background subtle radial accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#fdc254]/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-[#0284c7]/10 blur-3xl rounded-full" />

      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] relative z-10 flex flex-col gap-[2.5rem]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-[0.75rem]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fdc254] via-[#f59e0b] to-[#fdc254] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[12px] font-black uppercase tracking-wider shadow-sm border border-[#eab308]">
            <span>★</span>
            <span>LEARN • CREATE • DISCOVER • EXCEL</span>
            <span>★</span>
          </div>
          
          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[46px] leading-[38px] lg:leading-[54px] font-bold text-[#03345d]">
            Our Four Learning Pillars
          </h2>
          
          <p className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[18px] leading-[26px] font-extrabold text-[#03345d] tracking-tight">
            FOUR SKILLS. ONE PLACE. ENDLESS POSSIBILITIES.
          </p>
          <p className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] leading-[24px] text-[#43474e] max-w-2xl">
            Designed to match our Uttarahalli learning curriculum. Choose one track or combine school tuition with creative and cognitive hobbies.
          </p>
        </div>

        {/* 2x2 Quadrant Grid matching the Pamphlet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] lg:gap-[2rem] max-w-5xl mx-auto w-full">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden relative"
              style={{ borderColor: `${course.themeColor}33` }}
            >
              {/* Top Colored Pill Header matching the flyer */}
              <div
                className="px-6 py-4 flex items-center justify-between text-white"
                style={{ backgroundColor: course.themeColor }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-['Source_Serif_4'] text-[28px] font-black leading-none tracking-wider text-white">
                    {course.num}
                  </span>
                  <div className="h-6 w-[2px] bg-white/40" />
                  <span className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[18px] font-extrabold uppercase tracking-wide">
                    {course.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-inner">
                  <span className="material-symbols-outlined text-[22px]">{course.icon}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                <div className="flex flex-col gap-3">
                  {/* Subtitle pill */}
                  <div className="flex items-center">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-black uppercase tracking-wider"
                      style={{
                        backgroundColor: `${course.themeColor}15`,
                        color: course.themeColor,
                      }}
                    >
                      {course.subtitle}
                    </span>
                  </div>

                  <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px] text-[#43474e]">
                    {course.description}
                  </p>

                  {/* Highlights checklist from the flyer */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Program Highlights
                    </span>
                    <ul className="flex flex-col gap-2">
                      {course.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-[14px] font-medium text-[#161c24]">
                          <span
                            className="material-symbols-outlined text-[18px] shrink-0 mt-0.5"
                            style={{ color: course.themeColor }}
                          >
                            check_circle
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action inside card */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(course.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-['Plus_Jakarta_Sans'] text-[14px] font-bold text-white transition-all shadow-sm hover:brightness-110 active:scale-[0.99]"
                    style={{ backgroundColor: course.themeColor }}
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Enquire for {course.title.split(' ')[0]}</span>
                  </a>
                  <a
                    href="tel:9180473902"
                    title="Call Helpline"
                    className="w-11 h-11 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100 text-[#03345d] flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </a>
                </div>
              </div>

              {/* Curved colored accent shelf at bottom */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: course.themeColor }}
              />
            </div>
          ))}
        </div>

        {/* Pamphlet Bottom Bar Banner */}
        <div className="mt-4 max-w-5xl mx-auto w-full rounded-3xl bg-gradient-to-r from-[#002244] via-[#03345d] to-[#01182e] p-6 lg:p-8 text-white shadow-2xl border-2 border-[#fdc254] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left gap-1">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold text-[#fdc254] uppercase tracking-wider">
              VISIT BRILLIANT HUB • UTTARAHALLI CENTRE
            </span>
            <h3 className="font-['Source_Serif_4'] text-[22px] sm:text-[26px] font-bold text-white">
              Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-gray-300">
              Easily accessible location with dedicated two-wheeler parking and parent waiting area.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/918951412810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-all shadow-md active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>WhatsApp (89514 12810)</span>
            </a>
            <a
              href="https://maps.app.goo.gl/svBrjDf1WZVzcpaU9?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#fdc254] hover:bg-[#f59e0b] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">pin_drop</span>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CoursesSection
