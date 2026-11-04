export function AdmissionsCTA() {
  const TIMINGS = [
    {
      period: 'Morning Batches',
      time: '8:00 AM – 11:30 AM',
      icon: 'wb_sunny',
      color: '#0284c7',
      bg: 'bg-[#f0f9ff]',
      badge: 'Mon – Sat',
      focus: 'Abacus Speed Maths • Early Concept Revision • Weekend Hobby Slots',
      desc: 'Ideal for students seeking fresh morning focus, rapid arithmetic calculations, and weekend masterclasses.',
    },
    {
      period: 'Evening Batches',
      time: '4:30 PM – 7:30 PM',
      icon: 'sunset',
      color: '#7c3aed',
      bg: 'bg-[#faf5ff]',
      badge: 'Mon – Fri',
      focus: 'School Tuition (LKG–10th) • Homework Support • Music & Shlokas',
      desc: 'The popular after-school slot: guided homework completion, chapter-wise syllabus coverage, and traditional devotional music.',
    },
    {
      period: 'Weekend Specials',
      time: 'Sat & Sun Flexible Slots',
      icon: 'palette',
      color: '#ea580c',
      bg: 'bg-[#fff7ed]',
      badge: 'Weekends',
      focus: 'Drawing & Fine Arts • Devaranama Vocals • Mock Exam Series',
      desc: 'Dedicated creative studio time and vocal chanting for students with packed weekday academic timetables.',
    },
  ]

  return (
    <section className="w-full py-[3.5rem] lg:py-[5rem] bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-[#fdc254]/15 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] relative z-10 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700] mb-3">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-extrabold uppercase tracking-wider">
              ★ BATCH SCHEDULES &amp; TIMINGS ★
            </span>
          </div>

          <h2 className="font-['Source_Serif_4'] text-[32px] lg:text-[46px] leading-[40px] lg:leading-[54px] font-bold text-[#03345d] mb-3">
            Flexible Batches Designed for School Routines
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] leading-[26px] text-[#43474e]">
            Choose batch timings that naturally fit your family&apos;s daily routine. Small groups ensure your child
            never feels rushed or overlooked.
          </p>
        </div>

        {/* 3 Timing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIMINGS.map((slot) => (
            <div
              key={slot.period}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl ${slot.bg} flex items-center justify-center`}
                    style={{ color: slot.color }}
                  >
                    <span className="material-symbols-outlined text-[24px]">{slot.icon}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full font-['Plus_Jakarta_Sans'] text-[11px] font-black tracking-wider uppercase"
                    style={{ backgroundColor: `${slot.color}15`, color: slot.color }}
                  >
                    {slot.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] font-bold text-[#03345d]">
                    {slot.period}
                  </h3>
                  <div className="font-['Plus_Jakarta_Sans'] text-[13px] font-extrabold text-[#7d5700] mt-0.5">
                    {slot.time}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
                    Included Programs
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#03345d]">
                    {slot.focus}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                    {slot.desc}
                  </p>
                </div>
              </div>

              <div
                className="h-1.5 w-full mt-5 rounded-full"
                style={{ backgroundColor: slot.color }}
              />
            </div>
          ))}
        </div>

        {/* Diagnostic Assessment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#002244] via-[#03345d] to-[#01182e] p-6 lg:p-8 text-white shadow-xl border-2 border-[#fdc254] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#fdc254] text-[#5c3e00] flex items-center justify-center shrink-0 font-bold shadow-sm">
              <span className="material-symbols-outlined text-[28px]">psychology</span>
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#fdc254] font-['Plus_Jakarta_Sans'] text-[12px] font-black uppercase tracking-wider">
                <span>★</span>
                <span>Complimentary 1-on-1 Evaluation</span>
                <span>★</span>
              </div>
              <h3 className="font-['Source_Serif_4'] text-[20px] sm:text-[24px] font-bold text-white mt-1">
                Free Diagnostic Concept Test for Every Child
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-gray-300 mt-1">
                Before joining, our teachers evaluate your child&apos;s current understanding to recommend the ideal batch and focus areas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20reserve%20a%20batch%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-all shadow-md active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Reserve Batch Slot on WhatsApp</span>
            </a>
            <a
              href="tel:9180473902"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-colors border border-white/20"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AdmissionsCTA
