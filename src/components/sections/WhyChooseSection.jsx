const FEATURES = [
  {
    icon: 'volunteer_activism',
    bg: 'bg-[#ffdeaa]/40',
    color: 'text-[#7d5700]',
    title: 'Personal Attention',
    description: 'Give every learner the opportunity to receive individual attention and encouragement.',
    badge: 'Focused batches · Guided mentoring',
  },
  {
    icon: 'cottage',
    bg: 'bg-[#fdc254]/30',
    color: 'text-[#725000]',
    title: 'Comfortable Learning Space',
    description: 'A friendly and welcoming environment where children can feel comfortable while learning.',
    badge: 'Calm atmosphere · Pressure-free',
  },
  {
    icon: 'auto_stories',
    bg: 'bg-[#d2e4ff]/50',
    color: 'text-[#03345d]',
    title: 'Multiple Learning Opportunities',
    description: 'Explore academics, music, drawing and abacus learning in one place.',
    badge: 'All 4 programs under one roof',
  },
  {
    icon: 'palette',
    bg: 'bg-[#d5e7dd]/60',
    color: 'text-[#273630]',
    title: 'Learning Through Creativity',
    description: 'Encourage curiosity, creative thinking and the joy of discovering new skills.',
    badge: 'Imagination & cognitive growth',
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative w-full py-[3.5rem] overflow-hidden bg-[#f8f9ff]">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#ffdeaa]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#d5e7dd]/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-[3.5rem]">
          <div className="inline-flex items-center gap-2 px-[0.875rem] py-[0.375rem] rounded-full bg-[#d5e7dd] text-[#0f1e19] mb-[1.25rem] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#03345d] animate-pulse" />
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] font-semibold text-[#03345d]">
              WHY Brilliant Hub
            </span>
          </div>
          <h2 className="font-['Source_Serif_4'] text-[38px] lg:text-[56px] leading-[46px] lg:leading-[64px] tracking-[-0.01em] lg:tracking-[-0.02em] font-semibold text-[#03345d] mb-[0.75rem]">
            Learning That Feels{' '}
            <span className="italic font-['Source_Serif_4'] text-[#7d5700] font-normal underline decoration-[#fdc254] decoration-wavy decoration-2 underline-offset-8">
              Personal
            </span>
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[28px] text-[#43474e] max-w-2xl">
            We believe every child learns differently. Our focus is to create a welcoming space where children can learn,
            explore, and grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] mb-[3.5rem]">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col justify-between h-full bg-white rounded-2xl p-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#fdc254]/40 rounded-full" />
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-[1.25rem] group-hover:scale-105 transition-transform duration-300`}
                >
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[28px] text-[#03345d] font-bold mb-[0.375rem]">
                  {feature.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e]">
                  {feature.description}
                </p>
              </div>
              <div className="mt-[2rem] pt-[0.375rem]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef4ff] text-[#43474e] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7d5700]" />
                  {feature.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#eef4ff] rounded-2xl p-[1.25rem] md:p-[1.5rem] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-[1.25rem]">
          <div className="flex items-center gap-[1.25rem]">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white items-center justify-center text-[#03345d] shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">pin_drop</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] text-[#7d5700] font-semibold">
                Uttarahalli Neighbourhood Centre
              </span>
              <p className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] font-semibold">
                A welcoming neighbourhood space in Uttarahalli where young minds blossom with patient care.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[0.75rem] shrink-0 w-full lg:w-auto justify-end">
            <a
              className="inline-flex items-center justify-center gap-2 bg-[#fdc254] hover:bg-[#ffdeaa] text-[#725000] font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold px-[1.25rem] py-[0.75rem] rounded-lg shadow-sm transition-all"
              href="https://wa.me/919916522810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Reach Out to Us</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#eef4ff] text-[#03345d] font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold px-[1.25rem] py-[0.75rem] rounded-lg transition-colors"
              href="/contact.html"
            >
              <span>Visit Centre</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}