export function Footer() {
  return (
    <footer className="w-full bg-[#001426] text-white py-8 sm:py-12 border-t-2 border-[#fdc254]/40">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl border border-[#fdc254] shrink-0">
                <img alt="Brilliant Hub Logo" className="h-9 w-auto object-contain" src="/images/logo.png" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Source_Serif_4'] text-[20px] font-black text-white tracking-wider">
                  BRILLIANT HUB
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold text-[#fdc254] uppercase tracking-wider">
                  A BRIGHTER FUTURE STARTS HERE!
                </span>
              </div>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-[12px] font-black text-[#fdc254] uppercase tracking-wide mt-1">
              FOUR SKILLS. ONE PLACE. ENDLESS POSSIBILITIES.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-gray-300 font-bold uppercase tracking-wider mt-1">
              <span className="text-[#fdc254]">★</span>
              <span>ADMISSIONS OPEN • LEARN • CREATE • DISCOVER • EXCEL</span>
              <span className="text-[#fdc254]">★</span>
            </div>
          </div>

          {/* 4 Programs from flyer */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <h4 className="font-['Plus_Jakarta_Sans'] text-[13px] font-black text-[#fdc254] uppercase tracking-wider">
              OUR FOUR PROGRAMS
            </h4>
            <ul className="flex flex-col gap-2 font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                <span>01 – SCHOOL TUITION (LKG to 10th)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                <span>02 – MUSIC CLASSES (Shloka • Devaranama)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
                <span>03 – DRAWING CLASSES (Art &amp; Creativity)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
                <span>04 – ABACUS CLASSES (Mental Maths)</span>
              </li>
            </ul>
          </div>

          {/* Location & Hotlines */}
          <div className="md:col-span-3 flex flex-col gap-2.5 font-['Plus_Jakarta_Sans'] text-[13px]">
            <h4 className="font-['Plus_Jakarta_Sans'] text-[13px] font-black text-[#fdc254] uppercase tracking-wider">
              CALL / WHATSAPP / VISIT
            </h4>
            <div className="flex flex-col gap-2 text-gray-300">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#fdc254] shrink-0 mt-0.5">location_on</span>
                <span>Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-white">
                <span className="material-symbols-outlined text-[18px] text-[#25D366]">call</span>
                <a href="tel:9180473902" className="hover:underline">9180473902</a>
                <span>/</span>
                <a href="https://wa.me/918951412810" target="_blank" rel="noopener noreferrer" className="hover:underline">89514 12810</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <span>&copy; {new Date().getFullYear()} Brilliant Hub. All rights reserved.</span>
          <span className="font-bold text-[#fdc254]">Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
