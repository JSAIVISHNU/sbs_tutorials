import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className="w-full bg-[#eef4ff] text-[#161c24] mt-[3.5rem] shadow-[0_-1px_12px_rgba(36,75,117,0.03)]">
      <div className="max-w-[1280px] mx-auto px-[1rem] lg:px-[3rem] py-[3.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] mb-[2rem]">
          <div className="md:col-span-1">
            <div className="flex items-center gap-[0.625rem] mb-[0.75rem]">
              <img alt="SBS Tutorials Logo" className="h-9 w-auto object-contain" src="/images/logo.png" />
              <span className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[28px] font-bold text-[#03345d]">
                SBS TUTORIALS
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] mb-[1.25rem] leading-relaxed">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-[0.375rem] text-[#43474e] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px]">
              <span className="material-symbols-outlined text-[16px] text-[#7d5700]">location_on</span>
              <span>{t('bengaluru')}</span>
            </div>
          </div>
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-semibold text-[#03345d] mb-[0.75rem]">
              {t('academicStreams')}
            </h4>
            <ul className="space-y-[0.375rem] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
              <li>
                <a className="hover:text-[#03345d] transition-colors" href="#">
                  {t('schoolTuition')}
                </a>
              </li>
              <li>
                <a className="hover:text-[#03345d] transition-colors" href="#">
                  {t('abacus')}
                </a>
              </li>
              <li>
                <a className="hover:text-[#03345d] transition-colors" href="#">
                  {t('music')}
                </a>
              </li>
              <li>
                <a className="hover:text-[#03345d] transition-colors" href="#">
                  {t('drawing')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-semibold text-[#03345d] mb-[0.75rem]">
              {t('admissionsOffice')}
            </h4>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] mb-[0.375rem]">
              {t('visitingHours')}
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e] mb-[0.75rem]">
              {t('directHelpline')}
            </p>
            <a
              className="inline-block bg-[#fdc254] text-[#725000] px-[1.25rem] py-[0.375rem] rounded font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] font-semibold hover:bg-[#ffdeaa] transition-colors"
              href="#enquire"
            >
              {t('scheduleVisit')}
            </a>
          </div>
        </div>
        <div className="pt-[1.25rem] flex flex-col md:flex-row items-center justify-between gap-[0.75rem] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#43474e]">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-[1.5rem]">
            <a className="hover:text-[#03345d] transition-colors" href="#">
              {t('privacyPolicy')}
            </a>
            <a className="hover:text-[#03345d] transition-colors" href="#">
              {t('termsOfEnrollment')}
            </a>
            <a className="hover:text-[#03345d] transition-colors" href="#">
              {t('academicCalendar')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}