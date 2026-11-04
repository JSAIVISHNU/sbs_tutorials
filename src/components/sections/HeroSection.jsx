export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaf2fb] via-[#f8faff] to-white py-[2.5rem] lg:py-[4rem]">
      {/* Decorative radial glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-[#fdc254]/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-80 w-80 bg-[#0284c7]/10 blur-3xl rounded-full" />

      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[3rem] items-center">
          
          {/* Left Column: Branding, Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-[1.25rem]">
            
            {/* Admissions Open Golden Ribbon Banner */}
            <div className="flex flex-col gap-1.5 items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fdc254] via-[#f59e0b] to-[#fdc254] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-black tracking-wider uppercase shadow-sm border border-[#eab308]">
                <span>★</span>
                <span>ADMISSIONS OPEN 2025–26</span>
                <span>★</span>
              </div>
              <div className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[12px] font-extrabold tracking-[0.1em] text-[#03345d] uppercase">
                <span>LEARN</span>
                <span className="text-[#fdc254]">•</span>
                <span>CREATE</span>
                <span className="text-[#fdc254]">•</span>
                <span>DISCOVER</span>
                <span className="text-[#fdc254]">•</span>
                <span>EXCEL</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Source_Serif_4'] text-[36px] sm:text-[50px] lg:text-[60px] leading-[42px] sm:leading-[56px] lg:leading-[68px] font-bold text-[#03345d] tracking-tight">
              A Brighter Future{' '}
              <span className="relative inline-block text-[#b45309]">
                Starts Here!
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#fde047] fill-current -z-10"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 12"
                >
                  <path d="M0,7 Q50,0 100,6 T200,8 L200,12 L0,12 Z" />
                </svg>
              </span>
            </h1>

            {/* Slogan */}
            <p className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[22px] font-extrabold text-[#03345d] tracking-tight">
              FOUR SKILLS. ONE PLACE. ENDLESS POSSIBILITIES.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e] max-w-xl">
              A premier neighbourhood learning hub providing personalised school tuition, traditional music,
              creative fine arts, and speed mental maths in Uttarahalli, Bengaluru.
            </p>

            {/* 4 Quick Jump Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full pt-1">
              {[
                { num: '01', title: 'School Tuition', sub: 'LKG to 10th', color: '#0284c7', bg: '#f0f9ff' },
                { num: '02', title: 'Music Classes', sub: 'Shloka & Devaranama', color: '#7c3aed', bg: '#faf5ff' },
                { num: '03', title: 'Drawing Classes', sub: 'Art & Creativity', color: '#ea580c', bg: '#fff7ed' },
                { num: '04', title: 'Abacus Classes', sub: 'Mental Maths', color: '#16a34a', bg: '#f0fdf4' },
              ].map((p) => (
                <a
                  key={p.num}
                  href="#courses"
                  className="flex flex-col p-2.5 rounded-xl transition-all border hover:shadow-md hover:-translate-y-0.5"
                  style={{ backgroundColor: p.bg, borderColor: `${p.color}40` }}
                >
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-black" style={{ color: p.color }}>
                    {p.num} {p.title.split(' ')[0].toUpperCase()}
                  </span>
                  <span className="text-[12px] font-bold text-[#03345d] leading-tight truncate">
                    {p.sub}
                  </span>
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-[0.75rem] pt-[0.5rem] w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-[1.75rem] py-[0.875rem] rounded-xl font-['Plus_Jakarta_Sans'] text-[15px] font-bold transition-all shadow-md active:scale-[0.99]"
                href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#03345d] text-white hover:bg-[#244b75] px-[1.75rem] py-[0.875rem] rounded-xl font-['Plus_Jakarta_Sans'] text-[15px] font-semibold transition-all shadow-md"
                href="#courses"
              >
                <span>Explore 4 Programs</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>

            {/* Pamphlet Contact Pill */}
            <div className="w-full pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-[#43474e] font-['Plus_Jakarta_Sans'] text-[13px]">
              <div className="inline-flex items-center gap-1.5 font-bold text-[#03345d] bg-[#fdc254]/25 px-3 py-1.5 rounded-lg border border-[#fdc254]">
                <span className="material-symbols-outlined text-[#16a34a] text-[18px]">call</span>
                <span className="uppercase text-[11px] tracking-wider text-[#7d5700]">Hotlines:</span>
                <a href="tel:9180473902" className="hover:underline">9180473902</a>
                <span>/</span>
                <a href="tel:+918951412810" className="hover:underline">89514 12810</a>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <div className="inline-flex items-center gap-1 text-[#03345d] font-semibold">
                <span className="material-symbols-outlined text-[#ea580c] text-[18px]">pin_drop</span>
                <span>Near Vishal Mega Mart, Uttarahalli</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brilliant Hub Spotlight Card */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0">
            <div className="w-full max-w-[440px] rounded-3xl bg-gradient-to-b from-[#03345d] via-[#02244a] to-[#01162d] p-6 sm:p-7 text-white shadow-[0_20px_50px_rgba(3,52,93,0.3)] border-2 border-[#fdc254] relative overflow-hidden">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#fdc254] to-[#f59e0b] text-[#5c3e00] flex items-center justify-center font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Source_Serif_4'] text-[18px] font-bold text-[#fdc254] leading-tight">
                      BRILLIANT HUB
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase text-gray-300">
                      Uttarahalli • Bengaluru
                    </span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#fdc254]/20 border border-[#fdc254]/60 text-[#fdc254] text-[10px] font-black uppercase tracking-wider">
                  ★ ADMISSIONS OPEN ★
                </div>
              </div>

              {/* What makes our hub unique */}
              <div className="my-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col gap-3">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#fdc254] uppercase tracking-wider">
                  Why Families Choose Brilliant Hub
                </span>
                
                <ul className="flex flex-col gap-2.5">
                  {[
                    { icon: 'groups', label: 'Micro-Batches (10–12 Students)', desc: 'Dedicated focus on every child' },
                    { icon: 'auto_stories', label: 'CBSE, ICSE & State Syllabus', desc: 'Homework support & weekly tests' },
                    { icon: 'hub', label: '4 Programs in 1 Safe Campus', desc: 'No daily rushing between multiple centers' },
                    { icon: 'verified', label: 'Free Diagnostic Assessment', desc: 'Identify your child\'s exact learning level' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2.5 text-[13px] text-gray-200">
                      <span className="material-symbols-outlined text-[18px] text-[#fdc254] shrink-0 mt-0.5">
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-bold text-white leading-tight">{item.label}</span>
                        <span className="text-[12px] text-gray-300">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Hotlines & Action inside card */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <div className="text-center font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold text-[#fdc254] tracking-wider uppercase">
                  Four Skills • One Place • Endless Possibilities
                </div>
                <a
                  href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20book%20a%20free%20concept%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#5c3e00] bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] transition-all shadow-md active:scale-[0.99]"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  <span>Book Free Concept Assessment</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
