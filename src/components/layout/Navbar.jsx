const LOGO_URL = '/images/logo.png'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(36,75,117,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] flex items-center justify-between">
        <a href="/" className="flex items-center gap-[0.75rem] hover:opacity-95 transition-opacity">
          <img alt="Brilliant Hub brand logo" className="h-10 w-auto object-contain" src={LOGO_URL} />
          <div className="flex flex-col">
            <span className="font-['Source_Serif_4'] text-[22px] leading-[30px] font-semibold text-[#03345d] tracking-tight">
              Brilliant Hub
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-semibold text-[#7d5700] tracking-[0.04em] uppercase">
              Uttarahalli • Bengaluru
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-[2rem]">
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#03345d]" href="/">
            Home
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#161c24] transition-colors" href="/about.html">
            About
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#161c24] transition-colors" href="/courses.html">
            Courses
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#161c24] transition-colors" href="/admissions.html">
            Admissions
          </a>
          <a className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#43474e] hover:text-[#161c24] transition-colors" href="/contact.html">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-[0.75rem]">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-install-prompt'))}
            className="hidden sm:inline-flex items-center gap-1.5 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#03345d]/20 text-[#03345d] hover:bg-[#eef4ff] font-['Plus_Jakarta_Sans'] text-[13px] leading-[18px] font-semibold transition-colors"
            title="Download as App on Home Screen"
          >
            <span className="material-symbols-outlined text-[18px]">install_mobile</span>
            <span>Install App</span>
          </button>
          <a
            className="inline-flex items-center justify-center bg-[#fdc254] text-[#725000] hover:bg-[#f7bd4f] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-[0_4px_20px_-2px_rgba(36,75,117,0.06)]"
            href="https://wa.me/918951412810"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire Now
          </a>
          <div className="w-8 h-8 rounded-full bg-[#03345d] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}