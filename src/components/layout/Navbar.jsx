const LOGO_URL = '/images/logo.png'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001426]/95 backdrop-blur-xl border-b-2 border-[#fdc254]/40 shadow-lg text-white">
      <div className="h-16 sm:h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 hover:opacity-95 transition-opacity">
          <div className="bg-white p-1 rounded-xl border border-[#fdc254] shrink-0">
            <img alt="Brilliant Hub Logo" className="h-8 sm:h-10 w-auto object-contain" src={LOGO_URL} />
          </div>
          <div className="flex flex-col">
            <span className="font-['Source_Serif_4'] text-[18px] sm:text-[22px] font-black text-white tracking-wider leading-none">
              BRILLIANT HUB
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] sm:text-[11px] font-bold text-[#fdc254] uppercase tracking-wider mt-0.5">
              Uttarahalli • Bengaluru
            </span>
          </div>
        </a>

        {/* Desktop Hotline Buttons */}
        <div className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
          <a
            href="tel:9180473902"
            className="flex items-center gap-1.5 text-gray-200 hover:text-[#fdc254] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-[#fdc254]">call</span>
            <span>9180473902</span>
          </a>
          <span className="text-gray-500">•</span>
          <a
            href="https://wa.me/918951412810"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:brightness-110 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>89514 12810</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-install-prompt'))}
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-[#fdc254]/60 text-[#fdc254] hover:bg-[#fdc254]/10 font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[13px] font-bold transition-colors"
            title="Download as App on Home Screen"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">install_mobile</span>
            <span className="hidden xs:inline">Install App</span>
          </button>
          
          <a
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#4a2e00] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-black uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
            href="https://wa.me/918951412810"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
          </a>
        </div>

      </div>
    </header>
  )
}

export default Navbar
