import { useTranslation } from 'react-i18next'

const LOGO_URL = '/images/logo.png'

export function Navbar() {
  const { t } = useTranslation('navigation')
  const { t: th } = useTranslation('home')

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(36,75,117,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-[1rem] lg:px-[3rem] flex items-center justify-between gap-[1.5rem]">
        <a href="#home" className="flex items-center gap-[0.75rem] group cursor-pointer">
          <img alt="SBS Tutorials Logo" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105" src={LOGO_URL} />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-bold text-[#244b75] tracking-tight group-hover:text-[#03345d] transition-colors">
              {th('title')}
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-medium text-[#43474e] tracking-[0.04em] uppercase">
              {th('subtitle')}
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-[2rem]">
          <a aria-current="page" className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-bold text-[#03345d]" href="#home">
            {t('home')}
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#03345d] transition-colors" href="#">
            {t('about')}
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#03345d] transition-colors" href="#">
            {t('courses')}
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#03345d] transition-colors" href="#">
            {t('contact')}
          </a>
        </nav>
        <div className="flex items-center gap-[1.25rem]">
          <a
            className="inline-flex items-center justify-center bg-[#244b75] text-white hover:bg-[#03345d] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-[0_4px_20px_-2px_rgba(36,75,117,0.12)] hover:shadow-[0_8px_24px_-2px_rgba(36,75,117,0.2)] active:scale-[0.98]"
            href="https://wa.me/919180473902"
            target="_blank"
            rel="noopener noreferrer"
          >
            {th('enquireNow')}
          </a>
          <div className="w-8 h-8 rounded-full bg-[#03345d] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}