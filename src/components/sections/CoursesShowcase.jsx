import { useState } from 'react'
import { EnquiryModal } from '../forms/EnquiryModal.jsx'

const COURSES = [
  {
    id: 'tuition',
    accent: 'bg-[#244b75]',
    badgeBg: 'bg-white/95',
    badgeIcon: 'menu_book',
    badgeColor: 'text-[#03345d]',
    badgeLabel: 'Academics',
    label: 'LKG to 10th Standard',
    title: 'School Tuition',
    description: 'Build strong academic foundations with learning support across all school subjects.',
    tags: ['LKG to 10th', 'All Subjects', 'Academic Support'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALCitQFvGwQJJzG6OOYBxJT_SCB_8VrfJ4vNeFNppM1QBc49FdQ2gocE78LRDUCa9IraGpAzGikQbWJw6kt5y30Wy1LJp0AxVQYtYIAfRaGfHCkc0QitDPxEL-2PtDc2j160cE-GXxdbyjIzTsZ-bM-Y6sKFi8h68qfmKWHuqtHupuOgXaVm-x8ucaItTKu7mlVDd8kiBGzYCzZLlqA0kiHS5MFv4H-fJMeVnNP0k',
    alt: 'Photorealistic still life on a warm honey teak study desk',
  },
  {
    id: 'music',
    accent: 'bg-[#fdc254]',
    badgeBg: 'bg-white/95',
    badgeIcon: 'music_note',
    badgeColor: 'text-[#7d5700]',
    badgeLabel: 'Fine Arts',
    label: 'Shloka and Devaranama',
    title: 'Music Classes',
    description: 'Explore traditional devotional music and develop an appreciation for Indian musical heritage.',
    tags: ['Shloka', 'Devaranama', 'Traditional Music'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCyBd-x0eQ6nmBdOImoup_DFNke6ygZl688gknxXCRhE9NBODjsVOCPS0ZDUQkM17RHI4rZ8myJ9yWk8PFkHyi2g8INWaKvtQ5Kaulc8BqQX8arreNVps5Qf-GJsXSjUGXLboXw_xWIcqxX7M3okxfOlMnzMkHNsrED8r0vh5BTlGIDguJzmu-sDLXOPhba0fnox2esw1T1IwpmxBKvjdbvioMMUAMWBV93_jBRQ',
    alt: 'Rich cultural visual depicting traditional Indian classical music practice',
  },
  {
    id: 'drawing',
    accent: 'bg-[#273630]',
    badgeBg: 'bg-white/95',
    badgeIcon: 'palette',
    badgeColor: 'text-[#273630]',
    badgeLabel: 'Creative Arts',
    label: 'Visual Art & Sketching',
    title: 'Drawing Classes',
    description: 'Encourage imagination, creativity and artistic expression through drawing activities.',
    tags: ['Drawing Practice', 'Creativity', 'Art Learning'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdHRDx_D1YZYN3CCGraLM3G-cJkD9caUfJ68-MMhfZ8gzPWkdoW22kQOEkPgCJEy0KlK3ewIUsy0LlI7YUbpowlvunngDpjo6pZZwqKjx9D8XY2bdLFfNl-OKTwpqGk5R4W00eLpnU8QuvdKWTEIoDD-PmAOCnGdGRu1Tw_HkPhOeb8fBOJlXbwg4Bik-ix3Ec4egnEwJU8O99RmwujY2YU84CnLrLPfb2Aw8d5mQ',
    alt: 'Creative artist desk with wooden artist palette',
  },
  {
    id: 'abacus',
    accent: 'bg-[#7d5700]',
    badgeBg: 'bg-white/95',
    badgeIcon: 'calculate',
    badgeColor: 'text-[#7d5700]',
    badgeLabel: 'Brain Development',
    label: 'Mental Arithmetic',
    title: 'Abacus Classes',
    description: 'Explore number skills and mental arithmetic through engaging abacus-based learning.',
    tags: ['Abacus Practice', 'Number Skills', 'Mental Arithmetic'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClBRGrOmjn7IxslVE5PAWkyWEZzkTjgdkXtiwTtakdGpvN6zRimISfihiw3V3VIHrKxo1c37zJsGL09KJ0dPRzc2hXCpqcoXB8wA6VPearBhRqpdPdg8qy8wFqPolU7ccV_beUaqfGso59kEIiGeQFEAw-GVPYjyB-tbDIsizexAMbDOytlgV1yv7pPwqQ9X6uAl-PlHLJHYX8wS5mitIPf0U06qeZtOHQkSTAvJY',
    alt: 'A clean top-down educational composition showing an authentic wooden abacus',
  },
]

export function CoursesShowcase() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <section className="relative w-full py-[3.5rem] md:py-[6rem] px-[1.25rem] md:px-[3rem] overflow-hidden">
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#d5e7dd]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#ffdeaa]/35 blur-3xl pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-[0.375rem] px-3.5 py-1 rounded-full bg-[#d5e7dd] text-[#0f1e19] font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] tracking-[0.02em] uppercase mb-[0.75rem] shadow-sm">
            <span className="material-symbols-outlined text-[15px] text-[#273630]">auto_stories</span>
            <span>Our Courses</span>
          </div>
          <h2 className="font-['Source_Serif_4'] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-0.01em] md:tracking-[-0.015em] font-semibold text-[#03345d] mb-[0.375rem]">
            Explore Our Learning Programs
          </h2>
          <div className="flex items-center justify-center gap-2 my-2">
            <span className="w-8 h-[2px] bg-[#fdc254] rounded-full" />
            <span className="material-symbols-outlined text-[#7d5700] text-[16px]">school</span>
            <span className="w-8 h-[2px] bg-[#fdc254] rounded-full" />
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[28px] text-[#43474e] mt-2">
            Discover opportunities to learn, create and grow through our carefully selected learning programs in a cosy,
            supportive neighbourhood learning atmosphere.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] items-stretch">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className="group bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(36,75,117,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(36,75,117,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className={`h-1.5 w-full ${course.accent}`} />
              <div className="relative w-full h-48 bg-[#e3e8f3] overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt={course.alt}
                  src={course.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03345d]/30 via-transparent to-transparent" />
                <div className={`absolute top-3 left-3 ${course.badgeBg} backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1`}>
                  <span className={`material-symbols-outlined text-[15px] ${course.badgeColor}`}>
                    {course.badgeIcon}
                  </span>
                  <span className={`font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-semibold ${course.badgeColor}`}>
                    {course.badgeLabel}
                  </span>
                </div>
              </div>
              <div className="p-[1.25rem] flex flex-col flex-1 justify-between gap-[1.25rem]">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] font-semibold uppercase tracking-[0.04em] block mb-1">
                    {course.label}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[28px] font-bold text-[#03345d] mb-[0.375rem]">
                    {course.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                    {course.description}
                  </p>
                </div>
                <div className="flex flex-col gap-[1.25rem] mt-auto pt-[0.375rem]">
                  <div className="flex flex-wrap gap-1.5">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#d5e7dd] text-[#0f1e19] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course.title)}
                    className="w-full inline-flex items-center justify-between px-[1.25rem] py-2.5 rounded-lg bg-[#eef4ff] hover:bg-[#03345d] text-[#03345d] hover:text-white font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-colors duration-200 group/btn"
                  >
                    <span>Enquire Now</span>
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 md:mt-16 bg-white rounded-xl p-[1.25rem] md:p-[1.5rem] shadow-[0_4px_20px_-2px_rgba(36,75,117,0.06)] flex flex-col md:flex-row items-center justify-between gap-[1.25rem]">
          <div className="flex items-center gap-[1.25rem]">
            <div className="w-12 h-12 rounded-full bg-[#ffdeaa]/40 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#7d5700] text-[26px]">home_pin</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d]">
                One place to learn, explore and grow.
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                Dedicated coaching setup on Uttarahalli Main Road with personal mentor attention.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-[0.75rem] w-full md:w-auto justify-start md:justify-end">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] text-[#43474e] hidden lg:inline">
              Have questions?
            </span>
            <a
              className="inline-flex items-center gap-[0.375rem] bg-[#fdc254] hover:bg-[#ffdeaa] text-[#725000] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-sm group"
              href="https://wa.me/918951412810?text=Hello%20Brilliant%20Hub,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#725000]">chat</span>
              <span>Talk to us on WhatsApp</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                open_in_new
              </span>
            </a>
            <a
              className="inline-flex items-center gap-[0.375rem] bg-[#eef4ff] hover:bg-[#e3e8f3] text-[#03345d] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-colors"
              href="tel:+9180473902"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Centre</span>
            </a>
          </div>
        </div>
      </div>
      <EnquiryModal open={!!selectedCourse} course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  )
}