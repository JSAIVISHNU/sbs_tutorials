const FEATURES = [
  {
    icon: 'volunteer_activism',
    bg: 'bg-[#0284c7]/10',
    color: 'text-[#0284c7]',
    title: 'Personalised Attention',
    description: 'Focused small batches with individual attention ensuring no child gets left behind.',
    badge: 'Focused Batches · Caring Mentors',
  },
  {
    icon: 'auto_stories',
    bg: 'bg-[#7c3aed]/10',
    color: 'text-[#7c3aed]',
    title: 'Four Skills Under One Roof',
    description: 'School Tuition, Music, Drawing, and Abacus in one safe, convenient Uttarahalli hub.',
    badge: 'Academics + Arts + Mental Math',
  },
  {
    icon: 'menu_book',
    bg: 'bg-[#ea580c]/10',
    color: 'text-[#ea580c]',
    title: 'Homework & Exam Prep',
    description: 'Systematic syllabus coverage, regular practice tests, and daily homework support.',
    badge: 'CBSE · ICSE · State Board',
  },
  {
    icon: 'calculate',
    bg: 'bg-[#16a34a]/10',
    color: 'text-[#16a34a]',
    title: 'Cognitive & Creative Growth',
    description: 'Music chanting, artistic expression, and abacus speed math sharpening memory and focus.',
    badge: 'Enduring Confidence & Speed',
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative w-full py-[3.5rem] lg:py-[4.5rem] overflow-hidden bg-[#f8faff]">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#fdc254]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#0284c7]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-[3rem]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700] mb-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold uppercase tracking-wider">
              ★ WHY PARENTS CHOOSE BRILLIANT HUB ★
            </span>
          </div>

          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[46px] leading-[40px] lg:leading-[54px] font-bold text-[#03345d] mb-3">
            Learning That Feels{' '}
            <span className="italic font-['Source_Serif_4'] text-[#b45309] font-normal underline decoration-[#fdc254] decoration-2 underline-offset-8">
              Personal &amp; Inspiring
            </span>
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-[16px] leading-[26px] text-[#43474e] max-w-2xl">
            We provide an affectionate, supportive study setup where children can ask questions without hesitation,
            develop a love for learning, and excel in every aspect of life.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] mb-[3rem]">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col justify-between h-full bg-white rounded-2xl p-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-[1.25rem] group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[24px] text-[#03345d] font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px] text-[#43474e]">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100">
                <span className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  {feature.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Golden Ribbon Banner matching flyer bottom */}
        <div className="rounded-2xl bg-gradient-to-r from-[#03345d] via-[#02244a] to-[#03345d] p-6 lg:p-8 text-white shadow-xl border-2 border-[#fdc254] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center lg:text-left">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold text-[#fdc254] uppercase tracking-wider">
              FOUR SKILLS • ONE PLACE • ENDLESS POSSIBILITIES
            </span>
            <h4 className="font-['Source_Serif_4'] text-[22px] sm:text-[26px] font-bold text-white mt-1">
              Visit Brilliant Hub or Call Us Direct
            </h4>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-300 mt-1">
              Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru. Call or WhatsApp 9180473902 / 89514 12810.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+918951412810"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-colors border border-white/20"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[14px] font-black transition-all shadow-md active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseSection
