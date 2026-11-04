export function WhyChooseSection() {
  const ADVANTAGES = [
    {
      icon: 'groups',
      title: 'Micro-Batches (10–12 Students)',
      desc: 'No crowded 40-student classrooms. Every child receives 1-on-1 attention, daily doubt clearing, and tailored pace.',
      badge: 'Personalised Attention',
      color: '#0284c7',
      bg: 'bg-[#f0f9ff]',
    },
    {
      icon: 'fact_check',
      title: 'Weekly Diagnostic Tests',
      desc: 'Chapter-wise weekly mock tests and regular report cards so parents stay continuously updated without exam stress.',
      badge: 'Continuous Feedback',
      color: '#7c3aed',
      bg: 'bg-[#faf5ff]',
    },
    {
      icon: 'auto_stories',
      title: 'CBSE, ICSE & State Board',
      desc: 'Comprehensive coverage of school textbooks with structured homework guidance, revision notes, and exam papers.',
      badge: 'Academic Excellence',
      color: '#ea580c',
      bg: 'bg-[#fff7ed]',
    },
    {
      icon: 'sentiment_very_satisfied',
      title: 'Affectionate & Caring Mentors',
      desc: 'A gentle, encouraging atmosphere where children feel safe to make mistakes, ask questions, and love studying.',
      badge: 'Supportive Environment',
      color: '#16a34a',
      bg: 'bg-[#f0fdf4]',
    },
  ]

  return (
    <section className="relative w-full py-[3.5rem] lg:py-[5rem] overflow-hidden bg-[#f8faff]">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#fdc254]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#0284c7]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
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

          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e]">
            We provide an affectionate, supportive study setup where children can ask questions without hesitation,
            develop enduring study habits, and excel in every aspect of life.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                  style={{ color: item.color }}
                >
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] font-bold text-[#03345d] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[22px] text-[#43474e]">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]" style={{ color: item.color }}>verified</span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseSection
