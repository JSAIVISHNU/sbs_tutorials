export function AboutSection() {
  const PHILOSOPHY = [
    {
      icon: 'favorite',
      bg: 'bg-[#d5e7dd]',
      color: 'text-[#0f1e19]',
      title: 'Personal Attention',
      description: 'Every learner deserves care, encouragement and individual attention.',
      badge: 'Focused Batches',
    },
    {
      icon: 'school',
      bg: 'bg-[#ffdeaa]',
      color: 'text-[#271900]',
      title: 'Learning with Confidence',
      description: 'Create a comfortable environment for asking questions and growing.',
      badge: 'Free Expression',
    },
    {
      icon: 'palette',
      bg: 'bg-[#d2e4ff]',
      color: 'text-[#001c37]',
      title: 'Learning Beyond Academics',
      description: 'Encourage creativity and explore different skills.',
      badge: 'Holistic Growth',
    },
  ]

  return (
    <section className="relative w-full overflow-hidden py-[3.5rem] lg:py-[3.5rem]">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#ffdeaa]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#d5e7dd]/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center py-[1rem]">
          <div className="inline-flex items-center gap-2 px-[0.75rem] py-[0.375rem] rounded-full bg-[#ffdeaa]/50 text-[#271900] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] font-semibold mb-[0.75rem]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7d5700]" />
            ABOUT Brilliant Hub
          </div>
          <h1 className="font-['Source_Serif_4'] text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] tracking-[-0.01em] lg:tracking-[-0.015em] font-bold text-[#03345d] mb-[1.25rem]">
            A Little Place to Learn,{' '}
            <br className="hidden sm:inline" />
            <span className="italic font-['Source_Serif_4'] text-[#244b75]">A Big Space to Grow</span>
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[28px] text-[#161c24] mb-[0.75rem] max-w-2xl">
            At Brilliant Hub, we believe every child deserves attention, encouragement and the right learning
            environment. Our goal is to make learning enjoyable while helping students build confidence and strong
            foundations.
          </p>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e] mb-[2rem] max-w-2xl">
            From school academics to music, drawing and abacus, we provide opportunities for children to explore different
            interests and develop their abilities.
          </p>
          <div className="pt-[0.375rem]">
            <a
              className="inline-flex items-center gap-[0.75rem] bg-[#03345d] text-white hover:bg-[#244b75] font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold px-[2rem] py-[0.75rem] rounded-lg shadow-md transition-all group"
              href="/courses.html"
            >
              <span>Explore Our Courses</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
        <div className="mt-[3.5rem] pt-[2rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[1.25rem] gap-2">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] text-[#7d5700] font-bold">
                Guiding Principles
              </span>
              <h2 className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] font-bold">
                Our Learning Philosophy
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] max-w-md">
              Every child progresses at their own pace within a non-judgmental, family-like study space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            {PHILOSOPHY.map((item) => (
              <div
                key={item.title}
                className="bg-white p-[1.5rem] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-[1.25rem] group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-[#03345d] font-bold mb-[0.375rem]">
                    {item.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-[1.25rem] pt-[0.375rem]">
                  <span className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#03345d] font-semibold">
                    {item.badge}
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}