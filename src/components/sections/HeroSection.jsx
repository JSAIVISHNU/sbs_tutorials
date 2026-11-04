import { COURSES } from '../../data/courses.js'

export function HeroSection() {
  return (
    <section className="relative w-full py-4 sm:py-8 px-3 sm:px-6 lg:px-8 flex justify-center bg-[#011e38]">
      {/* Decorative Gold & Navy Backdrop */}
      <div className="w-full max-w-[1080px] rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-[#02315d] via-[#01264a] to-[#001830] p-4 sm:p-7 lg:p-10 border-4 border-[#fdc254] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden text-white flex flex-col gap-6 sm:gap-8">
        
        {/* Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-t-4 border-l-4 border-[#fdc254] rounded-tl-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-t-4 border-r-4 border-[#fdc254] rounded-tr-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-b-4 border-l-4 border-[#fdc254] rounded-bl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-b-4 border-r-4 border-[#fdc254] rounded-br-3xl pointer-events-none" />

        {/* TOP SECTION: Logo & Header matching the pamphlet */}
        <div className="flex flex-col items-center text-center relative z-10 pt-2">
          
          {/* Logo Badge */}
          <div className="bg-white rounded-2xl px-5 py-3 shadow-md border-2 border-[#fdc254] mb-3 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Brilliant Hub Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          {/* Main Title */}
          <h1 className="font-['Source_Serif_4'] text-[32px] sm:text-[46px] lg:text-[56px] font-black text-white tracking-wider leading-none uppercase drop-shadow-md">
            BRILLIANT HUB
          </h1>

          {/* Sub-headline */}
          <p className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[22px] lg:text-[26px] font-black text-white tracking-wide mt-1.5 uppercase drop-shadow">
            A BRIGHTER FUTURE STARTS HERE!
          </p>

          {/* Gold Ribbon: ★ ADMISSIONS OPEN ★ */}
          <div className="mt-3 relative inline-flex items-center justify-center">
            <div className="px-6 sm:px-10 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#e5a825] via-[#fdc254] to-[#e5a825] text-[#4a2e00] font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[20px] font-black tracking-widest uppercase shadow-lg border-2 border-[#fff2b2] flex items-center gap-2">
              <span className="text-[#925c00]">★</span>
              <span>ADMISSIONS OPEN</span>
              <span className="text-[#925c00]">★</span>
            </div>
          </div>

          {/* Dark Blue Ribbon: LEARN • CREATE • DISCOVER • EXCEL */}
          <div className="mt-2.5 px-4 sm:px-6 py-1.5 rounded-lg bg-[#001a33] text-white font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[14px] font-extrabold tracking-[0.15em] uppercase border border-[#fdc254]/40 flex items-center gap-2 sm:gap-3 shadow-inner">
            <span>LEARN</span>
            <span className="text-[#fdc254]">•</span>
            <span>CREATE</span>
            <span className="text-[#fdc254]">•</span>
            <span>DISCOVER</span>
            <span className="text-[#fdc254]">•</span>
            <span>EXCEL</span>
          </div>
        </div>

        {/* 4 QUADRANTS GRID: Exact 2x2 layout matching the pamphlet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10 w-full">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-[#161c24] shadow-xl flex flex-col justify-between border-2 border-[#e5e9f0] relative overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col gap-3">
                {/* Header Pill: Number + Title */}
                <div className="flex items-center gap-3">
                  <span
                    className="font-['Source_Serif_4'] text-[36px] sm:text-[44px] font-black leading-none tracking-tight shrink-0"
                    style={{ color: course.themeColor }}
                  >
                    {course.num}
                  </span>
                  
                  <div
                    className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl text-white font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[15px] font-black uppercase tracking-wide flex items-center justify-between shadow-xs"
                    style={{ backgroundColor: course.themeColor }}
                  >
                    <span>– {course.title}</span>
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{course.icon}</span>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="pl-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-black tracking-wide uppercase text-gray-700">
                    {course.subtitle}
                  </span>
                </div>

                {/* Bullets with circular checkmarks */}
                <ul className="flex flex-col gap-2 pt-2 border-t border-gray-100 pl-1 font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] font-bold text-gray-800">
                  {course.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="material-symbols-outlined text-[18px] sm:text-[20px] shrink-0 mt-0.5"
                        style={{ color: course.themeColor }}
                      >
                        check_circle
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Touch Action on Mobile & Desktop */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <a
                  href={`https://wa.me/918951412810?text=${encodeURIComponent(`Hello Brilliant Hub, I would like to enquire about ${course.title} (${course.subtitle}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-black text-white uppercase tracking-wider transition-all shadow-sm hover:brightness-110 active:scale-[0.99]"
                  style={{ backgroundColor: course.themeColor }}
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Bottom Curved Wave Accent matching flyer shelf */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2.5"
                style={{ backgroundColor: course.themeColor }}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Slogan, Contact & Location matching the pamphlet */}
        <div className="flex flex-col items-center text-center gap-3 relative z-10 pt-2 border-t border-white/10">
          
          {/* Slogan */}
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[21px] lg:text-[24px] font-black text-[#fdc254] tracking-tight uppercase">
            FOUR SKILLS. ONE PLACE. ENDLESS POSSIBILITIES.
          </p>

          {/* Contact Bar: CALL / WHATSAPP: 9180473902, 89514 12810 */}
          <div className="w-full max-w-2xl bg-gradient-to-r from-[#e5a825] via-[#fdc254] to-[#e5a825] p-2.5 sm:p-3 rounded-2xl text-[#3b2400] shadow-lg border-2 border-[#fff2b2] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[17px] font-black uppercase">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[20px] text-[#2e593f]">call</span>
              <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
              <span>CALL / WHATSAPP:</span>
            </span>
            <div className="flex items-center gap-2.5 font-black">
              <a
                href="tel:9180473902"
                className="underline hover:text-black transition-colors"
                title="Call 9180473902"
              >
                9180473902
              </a>
              <span>,</span>
              <a
                href="https://wa.me/918951412810"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
                title="WhatsApp 89514 12810"
              >
                89514 12810
              </a>
            </div>
          </div>

          {/* Location Bar */}
          <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[17px] lg:text-[18px] font-extrabold text-white max-w-2xl mt-1 leading-snug">
            VISIT BRILLIANT HUB, Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.
          </p>

          {/* Location Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
            <a
              href="https://maps.app.goo.gl/svBrjDf1WZVzcpaU9?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#4a2e00] font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[14px] font-black uppercase tracking-wider shadow-md active:scale-[0.99] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>OPEN IN GOOGLE MAPS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection
