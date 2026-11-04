export function AboutSection() {
  const PILLARS = [
    {
      num: '01',
      tag: 'LEARN',
      title: 'School Tuition',
      subtitle: 'LKG to 10th Standard',
      icon: 'school',
      themeColor: '#0284c7',
      bgLight: 'bg-[#f0f9ff]',
      description: 'Personalised attention, homework support, and rigorous exam preparation building a rock-solid academic foundation.',
      bullets: ['Personalised Attention', 'Homework & Exam Prep', 'Strong Academic Base'],
    },
    {
      num: '02',
      tag: 'CREATE',
      title: 'Music Classes',
      subtitle: 'Shloka • Devaranama',
      icon: 'music_note',
      themeColor: '#7c3aed',
      bgLight: 'bg-[#faf5ff]',
      description: 'Traditional devotional music, Sanskrit chanting, vocal training, and immersion in heritage instruments.',
      bullets: ['Devotional Elements', 'Traditional Instruments', 'Vocal Chanting Culture'],
    },
    {
      num: '03',
      tag: 'DISCOVER',
      title: 'Drawing Classes',
      subtitle: 'Learn Art & Creativity',
      icon: 'palette',
      themeColor: '#ea580c',
      bgLight: 'bg-[#fff7ed]',
      description: 'Developing creative imagination, fine arts sketching, and colourful self-expression in a warm, encouraging studio.',
      bullets: ['Colouring & Artistic Colours', 'Sketching Fundamentals', 'Creative Thinking'],
    },
    {
      num: '04',
      tag: 'EXCEL',
      title: 'Abacus Classes',
      subtitle: 'Mental Maths & Calculation',
      icon: 'calculate',
      themeColor: '#16a34a',
      bgLight: 'bg-[#f0fdf4]',
      description: 'Unlocking lightning-fast mental arithmetic, photographic memory retention, and enduring mathematics confidence.',
      bullets: ['Mental Maths Mastery', 'Calculation Speed & Accuracy', 'Memory & Focus'],
    },
  ]

  return (
    <section className="relative w-full overflow-hidden py-[3.5rem] lg:py-[4.5rem] bg-white">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#fdc254]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#0284c7]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block matching Pamphlet Header */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700] mb-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-wider font-extrabold">
              ★ ABOUT BRILLIANT HUB • UTTARAHALLI ★
            </span>
          </div>

          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[46px] leading-[40px] lg:leading-[54px] font-bold text-[#03345d] mb-4">
            A Brighter Future Starts Here!
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold text-[#03345d] mb-3">
            Four Skills. One Place. Endless Possibilities.
          </p>

          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e] max-w-2xl mb-6">
            Located near Vishal Mega Mart on Uttarahalli Main Road, Brilliant Hub is a dedicated learning sanctuary where
            children receive heartfelt individual mentorship. We balance scholastic excellence with cultural arts and mental
            arithmetic so every child discovers their inner brilliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 bg-[#03345d] text-white hover:bg-[#244b75] font-['Plus_Jakarta_Sans'] text-[14px] font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.99]"
              href="/courses.html"
            >
              <span>Explore The 4 Courses</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] font-['Plus_Jakarta_Sans'] text-[14px] font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.99]"
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20learn%20more%20about%20your%20centre."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid (LEARN • CREATE • DISCOVER • EXCEL) */}
        <div className="mt-14 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2 border-b border-gray-100 pb-4">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-wider text-[#7d5700] font-black">
                Our Educational Framework
              </span>
              <h3 className="font-['Source_Serif_4'] text-[24px] sm:text-[28px] text-[#03345d] font-bold mt-1">
                LEARN • CREATE • DISCOVER • EXCEL
              </h3>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#43474e] max-w-md">
              Each child is nurtured through tailored batches, structured syllabus guidance, and personal encouragement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((item) => (
              <div
                key={item.tag}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 flex flex-col justify-between group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: item.themeColor }}
                />

                <div className="pt-2">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-2.5 py-1 rounded-md text-white font-['Plus_Jakarta_Sans'] text-[11px] font-black tracking-widest uppercase"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      {item.num} • {item.tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                  </div>

                  <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[24px] text-[#03345d] font-bold mb-1">
                    {item.title}
                  </h4>
                  <span
                    className="font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold uppercase tracking-wide block mb-3"
                    style={{ color: item.themeColor }}
                  >
                    {item.subtitle}
                  </span>

                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] mb-4">
                    {item.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 border-t border-gray-100 pt-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5 text-[12px] text-[#03345d] font-medium">
                        <span className="material-symbols-outlined text-[15px]" style={{ color: item.themeColor }}>
                          check
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100">
                  <a
                    href={`https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-bold hover:underline"
                    style={{ color: item.themeColor }}
                  >
                    <span>Enquire for {item.title}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
