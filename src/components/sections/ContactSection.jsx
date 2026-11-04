import { EnquiryForm } from '../forms/EnquiryForm.jsx'

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-8 sm:py-12 px-3 sm:px-6 lg:px-8 bg-[#011e38] text-white">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* Section Header matching pamphlet style */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e5a825] via-[#fdc254] to-[#e5a825] text-[#4a2e00] font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-black uppercase tracking-wider shadow-sm">
            <span>★</span>
            <span>ADMISSIONS OPEN</span>
            <span>★</span>
          </div>
          <h2 className="font-['Source_Serif_4'] text-[26px] sm:text-[36px] font-bold text-white uppercase tracking-tight">
            Online Admission Enquiry
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[15px] font-bold text-[#fdc254] uppercase tracking-wider">
            FOUR SKILLS. ONE PLACE. ENDLESS POSSIBILITIES.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Contact & Location Info from Pamphlet */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 sm:p-6 bg-gradient-to-b from-[#02315d] to-[#01264a] rounded-3xl border-2 border-[#fdc254] shadow-md flex flex-col gap-4 text-white">
              
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-black text-[#fdc254] uppercase tracking-wider">
                  VISIT BRILLIANT HUB
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-bold text-white mt-1 leading-snug">
                  Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru.
                </p>
              </div>

              {/* Call / WhatsApp hotlines from pamphlet */}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-black text-[#fdc254] uppercase tracking-wider">
                  CALL / WHATSAPP
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all"
                    href="tel:9180473902"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#fdc254]">call</span>
                    <span>9180473902</span>
                  </a>
                  <a
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3 py-2.5 rounded-xl font-['Plus_Jakarta_Sans'] text-[13px] font-bold transition-all shadow-sm"
                    href="https://wa.me/918951412810"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>89514 12810</span>
                  </a>
                </div>
              </div>

              {/* Google Maps link */}
              <div className="pt-2 border-t border-white/10">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#4a2e00] font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] font-black uppercase tracking-wider transition-all shadow-md active:scale-[0.99]"
                  href="https://maps.app.goo.gl/svBrjDf1WZVzcpaU9?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div
            id="enquiry-form"
            className="lg:col-span-7 p-5 sm:p-7 bg-white rounded-3xl shadow-xl text-[#161c24] border-2 border-[#e5e9f0] flex flex-col gap-4"
          >
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-black text-[#7d5700] uppercase tracking-wider">
                QUICK REGISTRATION
              </span>
              <h3 className="font-['Source_Serif_4'] text-[22px] sm:text-[24px] font-bold text-[#03345d] mt-0.5">
                Submit Admission Enquiry
              </h3>
            </div>
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection
