const COURSES = [
  {
    icon: 'menu_book',
    label: 'LKG to 10th Standard',
    title: 'School Tuition',
    description:
      'All Subjects • Strong academic foundations, conceptual clarity, school syllabus support, and regular homework guidance.',
    cta: 'Enquire for Tuition',
  },
  {
    icon: 'music_note',
    label: 'Shloka & Devaranama',
    title: 'Music Classes',
    description:
      'Learn traditional devotional music, correct Sanskrit pronunciation, rhythmic understanding, and deep cultural values.',
    cta: 'Enquire for Music',
  },
  {
    icon: 'palette',
    label: 'Creativity & Expression',
    title: 'Drawing Classes',
    description:
      'Pencil sketching, colouring techniques, watercolour basics, and freehand artistic imagination for young developing minds.',
    cta: 'Enquire for Drawing',
  },
  {
    icon: 'calculate',
    label: 'Mental Arithmetic',
    title: 'Abacus Classes',
    description:
      'Speed calculations, improved concentration, photographic memory, and enduring confidence with mathematics.',
    cta: 'Enquire for Abacus',
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-[3.5rem] bg-[#f8f9ff]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] flex flex-col gap-[2rem]">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-[0.375rem]">
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#7d5700] tracking-[0.04em] uppercase font-bold">
            Programs Offered
          </span>
          <h2 className="font-['Source_Serif_4'] text-[28px] lg:text-[40px] leading-[36px] lg:leading-[48px] tracking-[-0.01em] lg:tracking-[-0.015em] font-semibold text-[#03345d]">
            Explore Our Learning Programs
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e]">
            Thoughtfully structured classes designed to build academic clarity, mental sharpness, and creative joy for
            young minds in Uttarahalli.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="flex flex-col justify-between p-[1.25rem] bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(36,75,117,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(36,75,117,0.12)] transition-all"
            >
              <div className="flex flex-col gap-[0.75rem]">
                <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center text-[#03345d]">
                  <span className="material-symbols-outlined text-[24px]">{course.icon}</span>
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] uppercase font-bold tracking-[0.04em]">
                    {course.label}
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[28px] font-bold text-[#03345d] mt-1">
                    {course.title}
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                  {course.description}
                </p>
              </div>
              <div className="pt-[1.25rem]">
                <a
                  className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] text-[#03345d] hover:text-[#7d5700] transition-colors font-semibold"
                  href="#enquiry-form"
                >
                  <span>{course.cta}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}