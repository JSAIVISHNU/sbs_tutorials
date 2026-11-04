const LOGO_URL = '/images/logo.png'

export function Footer() {
  return (
    <footer className="w-full bg-[#eef4ff] text-[#161c24] py-[3.5rem] shadow-[0_-4px_20px_-2px_rgba(36,75,117,0.04)]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[1.5rem]">
        <div className="lg:col-span-4 flex flex-col gap-[0.75rem]">
          <div className="flex items-center gap-[0.5rem]">
            <img alt="Brilliant Hub brand logo" className="h-9 w-auto object-contain" src={LOGO_URL} />
            <span className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] font-bold">
              Brilliant Hub
            </span>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e] pr-[1.25rem]">
            A warm, friendly neighbourhood learning space in Uttarahalli nurturing academic excellence, artistic
            expression, and analytical skills in every child.
          </p>
          <div className="flex items-center gap-[0.375rem] mt-[0.375rem] text-[#03345d]">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] font-semibold">
              Affectionate Mentorship • Proven Results
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-[0.375rem]">
          <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-[#03345d] font-semibold mb-[0.375rem]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-[0.375rem] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
            <li>
              <a className="hover:text-[#03345d] transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#03345d] transition-colors" href="#">
                About Institute
              </a>
            </li>
            <li>
              <a className="hover:text-[#03345d] transition-colors" href="#courses">
                All Courses
              </a>
            </li>
            <li>
              <a className="hover:text-[#03345d] transition-colors" href="#contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#03345d] transition-colors" href="#enquiry-form">
                Admissions &amp; Enquiry
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-[0.375rem]">
          <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-[#03345d] font-semibold mb-[0.375rem]">
            Academic Programs
          </h4>
          <ul className="flex flex-col gap-[0.375rem] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
            <li className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[16px] text-[#0284c7]">school</span>
              <span>01 – School Tuition (LKG to 10th)</span>
            </li>
            <li className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[16px] text-[#7c3aed]">music_note</span>
              <span>02 – Music Classes (Shloka • Devaranama)</span>
            </li>
            <li className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[16px] text-[#ea580c]">palette</span>
              <span>03 – Drawing Classes (Art &amp; Creativity)</span>
            </li>
            <li className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[16px] text-[#16a34a]">calculate</span>
              <span>04 – Abacus Classes (Mental Maths)</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-[0.375rem]">
          <h4 className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-[#03345d] font-semibold mb-[0.375rem]">
            Reach Out
          </h4>
          <div className="flex flex-col gap-[0.75rem] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
            <div className="flex items-start gap-[0.375rem]">
              <span className="material-symbols-outlined text-[18px] text-[#03345d] mt-0.5">location_on</span>
              <span>Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru - 560061</span>
            </div>
            <div className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[18px] text-[#03345d]">call</span>
              <div className="flex flex-col">
                <span>+91 9180473902</span>
                <span>+91 8951412810</span>
              </div>
            </div>
            <div className="flex items-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[18px] text-[#03345d]">schedule</span>
              <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] mt-[2rem] pt-[1.25rem] border-t border-[#c3c6d0]/30 flex flex-col sm:flex-row items-center justify-between text-[#43474e] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px]">
        <p>© 2025 Brilliant Hub. All rights reserved. Empowering young learners in Uttarahalli.</p>
        <p className="mt-[0.375rem] sm:mt-0 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] font-medium">
          Excellence in Academics &amp; Creative Arts
        </p>
      </div>
    </footer>
  )
}