export function AboutSection() {
  const DIMENSIONS = [
    {
      step: '01',
      title: 'Academic Mastery',
      tag: 'LEARN',
      subtitle: 'School Tuition (LKG to 10th Standard)',
      color: '#0284c7',
      bgLight: 'bg-[#f0f9ff]',
      icon: 'menu_book',
      summary: 'Daily homework coaching, concept clarity, and syllabus coverage for CBSE, ICSE, and Karnataka State Board in micro-batches.',
    },
    {
      step: '02',
      title: 'Cultural Heritage',
      tag: 'CREATE',
      subtitle: 'Music Classes (Shloka & Devaranama)',
      color: '#7c3aed',
      bgLight: 'bg-[#faf5ff]',
      icon: 'queue_music',
      summary: 'Devotional Sanskrit chanting, authentic vocal modulation, and traditional instruments nurturing peace of mind and cultural values.',
    },
    {
      step: '03',
      title: 'Artistic Expression',
      tag: 'DISCOVER',
      subtitle: 'Drawing & Fine Arts Studio',
      color: '#ea580c',
      bgLight: 'bg-[#fff7ed]',
      icon: 'palette',
      summary: 'Color theory, pencil shading, watercolor techniques, and imaginative freehand drawing that awaken creative problem-solving.',
    },
    {
      step: '04',
      title: 'Mental Arithmetic',
      tag: 'EXCEL',
      subtitle: 'Speed Abacus & Calculation Skills',
      color: '#16a34a',
      bgLight: 'bg-[#f0fdf4]',
      icon: 'calculate',
      summary: 'Brain gym drills, photographic memory exercises, and lightning-fast calculations that build lifelong mathematics confidence.',
    },
  ]

  return (
    <section className="relative w-full py-[3.5rem] lg:py-[5rem] overflow-hidden bg-white">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#fdc254]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#0284c7]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700] mb-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-wider font-extrabold">
              ★ THE BRILLIANT HUB PHILOSOPHY ★
            </span>
          </div>

          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[46px] leading-[40px] lg:leading-[54px] font-bold text-[#03345d] mb-4">
            One Sanctuary for Complete Child Growth
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e]">
            Parents often spend multiple hours each evening running across traffic between tuition teachers, music classes,
            art teachers, and abacus centers. Brilliant Hub was created right on Uttarahalli Main Road to bring academics,
            cultural heritage, fine arts, and mental math under one warm, safe, and dependable roof.
          </p>
        </div>

        {/* 4 Growth Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIMENSIONS.map((dim) => (
            <div
              key={dim.step}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className="font-['Source_Serif_4'] text-[24px] font-black"
                    style={{ color: dim.color }}
                  >
                    {dim.step}
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold tracking-wider"
                    style={{ backgroundColor: `${dim.color}15`, color: dim.color }}
                  >
                    {dim.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: dim.color }}
                  >
                    <span className="material-symbols-outlined text-[20px]">{dim.icon}</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] font-bold text-[#03345d] leading-tight">
                    {dim.title}
                  </h3>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  {dim.subtitle}
                </p>

                <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] pt-1 border-t border-gray-100">
                  {dim.summary}
                </p>
              </div>

              <div
                className="h-1 w-full mt-4 rounded-full"
                style={{ backgroundColor: dim.color }}
              />
            </div>
          ))}
        </div>

        {/* Community & Campus Highlights Banner */}
        <div className="rounded-2xl bg-[#eef4ff] p-6 lg:p-8 border border-[#cbe0ff] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#03345d] text-[#fdc254] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">home_pin</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-['Plus_Jakarta_Sans'] text-[17px] font-bold text-[#03345d]">
                Conveniently Located in Uttarahalli
              </h4>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#43474e]">
                Near Vishal Mega Mart, Uttarahalli Main Road. Easily accessible for families living in Channasandra,
                Subramanyapura, Poornaprajna Layout, and surrounding neighbourhoods.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=Vishal+Mega+Mart+Uttarahalli+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#03345d] hover:bg-[#244b75] text-white font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>Find on Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
