import { EnquiryForm } from '../forms/EnquiryForm.jsx'

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-[3.5rem] lg:py-[5rem] bg-[#f8f9ff]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] flex flex-col gap-[2.5rem]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-[0.5rem]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdc254]/30 border border-[#fdc254] text-[#7d5700]">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-wider font-extrabold">
              ★ ADMISSIONS &amp; VISITS ★
            </span>
          </div>
          <h2 className="font-['Source_Serif_4'] text-[30px] lg:text-[44px] leading-[38px] lg:leading-[52px] font-bold text-[#03345d]">
            Let&apos;s Connect
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e]">
            Visit us in Uttarahalli or message our academic director directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.75rem] items-start">
          
          {/* Left Column: Campus Visit & Hotlines matching Flyer Bottom */}
          <div className="lg:col-span-6 flex flex-col gap-[1.5rem]">
            <div className="p-6 sm:p-7 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-5">
              
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] uppercase font-black tracking-wider">
                  INSTITUTE LOCATION
                </span>
                <h3 className="font-['Source_Serif_4'] text-[24px] font-bold text-[#03345d] mt-1">
                  Brilliant Hub
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px] text-[#43474e] mt-1">
                  Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru, Karnataka – 560061
                </p>
              </div>

              {/* Hotlines Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  className="flex items-center justify-center gap-2 bg-[#03345d] hover:bg-[#244b75] text-white px-4 py-3 rounded-xl font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-all shadow-sm active:scale-[0.99]"
                  href="tel:9180473902"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call 9180473902</span>
                </a>
                <a
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl font-['Plus_Jakarta_Sans'] text-[14px] font-bold transition-all shadow-sm active:scale-[0.99]"
                  href="https://wa.me/918951412810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp 89514 12810</span>
                </a>
              </div>

              {/* Map Card styled like Flyer QR / Location Box */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#002244] to-[#03345d] p-6 text-white flex flex-col gap-4 border border-[#fdc254]/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-['Plus_Jakarta_Sans'] text-[16px] font-bold">
                    <span className="material-symbols-outlined text-[#fdc254]">pin_drop</span>
                    <span>Uttarahalli Main Road</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fdc254]/20 text-[#fdc254] font-['Plus_Jakarta_Sans'] text-[11px] font-black uppercase">
                    Prominent Landmark
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-gray-300">
                      Directly opposite / near
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                      Vishal Mega Mart
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] text-gray-300">
                      Uttarahalli Main Road, Bengaluru
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#fdc254] text-[#5c3e00] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                  </div>
                </div>

                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] text-[#5c3e00] font-['Plus_Jakarta_Sans'] text-[13px] font-black uppercase tracking-wider transition-all shadow-md active:scale-[0.99]"
                  href="https://maps.google.com/?q=Vishal+Mega+Mart+Uttarahalli+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Click for Google Maps Route</span>
                </a>
              </div>

              {/* Operating hours */}
              <div className="p-4 rounded-xl bg-[#f8faff] text-[13px] text-[#43474e] flex items-center gap-2 border border-gray-100">
                <span className="material-symbols-outlined text-[#03345d] text-[18px]">schedule</span>
                <span>Open Mon–Sat: 8:00 AM – 8:30 PM • Sunday: 9:00 AM – 1:00 PM</span>
              </div>

            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div
            id="enquiry-form"
            className="lg:col-span-6 p-6 sm:p-7 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] uppercase font-black tracking-wider">
                FAST-TRACK APPLICATION
              </span>
              <h3 className="font-['Source_Serif_4'] text-[24px] font-bold text-[#03345d] mt-1">
                Send an Admission Enquiry
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                Fill in your child&apos;s details below. Our faculty will connect with you within 24 hours to schedule the free diagnostic assessment.
              </p>
            </div>
            <EnquiryForm />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
