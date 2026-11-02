import { useTranslation } from 'react-i18next'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMwnU_PCqM8rCoEZ6km_4QqOdBtDBCsYvLDRe4I_vrGQoAQd52u9IU3HdCD7S36qjbQxPVU607PdYKac82RxMESI1GP0p-3DhaIB0LB_4wzu6mmYbzif3GFbF2JQ_lU08sq3NwgFc1RE70z0jJljI0JVnoHB_Pa4s1bKkTT0tGnwerTmjuwsrBySn98BSkCHo2jPpdCK7AiI7AH0Toq6r0bJE5Lvf1cLbGCnm6b4'

export function HeroSection() {
  const { t } = useTranslation('home')

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f8f9ff] py-[3.5rem] lg:py-[6rem]"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ffdeaa]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-[#d5e7dd]/35 blur-3xl pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-[1rem] lg:px-[3rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] lg:gap-[3.5rem] items-center">
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-[2rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d5e7dd] text-[#273630] shadow-sm mb-[1.25rem]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7d5700] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7d5700]" />
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-semibold tracking-[0.04em] uppercase">
                {t('admissionsOpen')}
              </span>
            </div>
            <h1 className="font-['Source_Serif_4'] text-[38px] lg:text-[56px] leading-[46px] lg:leading-[64px] tracking-[-0.01em] lg:tracking-[-0.02em] font-semibold text-[#244b75] mb-[1.25rem]">
              {t('headline')} <span className="text-[#7d5700] italic">{t('headlineAccent')}</span>
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] lg:text-[17px] leading-[24px] lg:leading-[28px] text-[#43474e] max-w-xl mb-[2rem]">
              {t('description')}
            </p>
            <div className="flex flex-wrap items-center gap-[0.75rem] sm:gap-[1.25rem] mb-[2rem] w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center bg-[#244b75] text-white hover:bg-[#03345d] px-[2rem] py-[0.875rem] rounded-xl font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold shadow-[0_8px_24px_-4px_rgba(36,75,117,0.24)] hover:shadow-[0_12px_28px_-4px_rgba(36,75,117,0.32)] transition-all duration-200 active:scale-[0.98] group"
                href="https://wa.me/919180473902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t('enquireNow')}</span>
                <span className="material-symbols-outlined text-[18px] ml-1.5 transition-transform duration-200 group-hover:translate-x-1 text-[#ffdeaa]">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center bg-white text-[#244b75] hover:bg-[#eef4ff] px-[1.25rem] py-[0.875rem] rounded-xl font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold shadow-sm hover:shadow transition-all duration-200"
                href="#"
              >
                {t('exploreCourses')}
              </a>
            </div>
            <div className="w-full pt-[1.25rem] bg-[#eef4ff]/60 rounded-xl p-[1.25rem]">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#43474e] font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] mb-[0.375rem]">
                <span className="font-medium text-[#03345d]">{t('schoolTuition')}</span>
                <span className="text-[#c3c6d0] font-light">•</span>
                <span className="font-medium text-[#03345d]">{t('music')}</span>
                <span className="text-[#c3c6d0] font-light">•</span>
                <span className="font-medium text-[#03345d]">{t('drawing')}</span>
                <span className="text-[#c3c6d0] font-light">•</span>
                <span className="font-medium text-[#03345d]">{t('abacus')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#43474e] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] mt-1">
                <span className="material-symbols-outlined text-[18px] text-[#7d5700]">location_on</span>
                <span>{t('location')}</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-[2rem] lg:mt-0">
            <div className="relative mx-auto max-w-[580px] lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_48px_-12px_rgba(36,75,117,0.14)] relative group">
                <img
                  alt="SBS Tutorials students engaged in focused academic study, artistic sketching, and music learning"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  src={HERO_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#244b75]/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-8 z-20 max-w-[85%] sm:max-w-xs bg-white/95 backdrop-blur-md p-[0.75rem] sm:p-[1.25rem] rounded-2xl shadow-[0_12px_32px_-4px_rgba(36,75,117,0.16)] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#d5e7dd] flex items-center justify-center flex-shrink-0 text-[#273630]">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-semibold text-[#244b75] leading-snug truncate">
                    {t('holisticAcademics')}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] truncate">
                    {t('creativeArts')}
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#7d5700]">palette</span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#244b75] uppercase tracking-[0.04em] font-semibold">
                  {t('activeBatches')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}