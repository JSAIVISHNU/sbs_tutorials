import { EnquiryForm } from '../forms/EnquiryForm.jsx'

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-[3.5rem] bg-[#f8f9ff]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] flex flex-col gap-[2rem]">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-[0.375rem]">
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#7d5700] tracking-[0.04em] uppercase font-bold">
            Reach Out
          </span>
          <h2 className="font-['Source_Serif_4'] text-[28px] lg:text-[40px] leading-[36px] lg:leading-[48px] tracking-[-0.01em] lg:tracking-[-0.015em] font-semibold text-[#03345d]">
            Let&apos;s Connect
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e]">
            Visit us or reach out directly—we are happy to welcome you and your child to Brilliant Hub.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-start">
          <div className="lg:col-span-6 flex flex-col gap-[1.25rem]">
            <div className="p-[1.5rem] bg-[#eef4ff] rounded-2xl flex flex-col gap-[1.25rem]">
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] uppercase font-semibold">
                  Institute Location
                </span>
                <h3 className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] mt-1">
                  Brilliant Hub
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[24px] text-[#43474e] mt-1">
                  Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru, Karnataka - 560061
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-[0.75rem] pt-[0.375rem]">
                <a
                  className="flex-1 flex items-center justify-center gap-[0.375rem] bg-[#03345d] text-white hover:bg-[#244b75] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-sm"
                  href="tel:9180473902"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call (9180473902)</span>
                </a>
                <a
                  className="flex-1 flex items-center justify-center gap-[0.375rem] bg-[#25D366] text-[#075E54] hover:bg-[#20ba5a] px-[1.25rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-sm"
                  href="https://wa.me/919916522810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp (9916522810)</span>
                </a>
              </div>
              <div className="relative w-full rounded-xl overflow-hidden bg-[#e3e8f3] p-[1.25rem] flex flex-col gap-[0.75rem]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[0.375rem] text-[#03345d] font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-semibold">
                    <span className="material-symbols-outlined text-[#7d5700]">pin_drop</span>
                    <span>Uttarahalli Centre</span>
                  </div>
                  <span className="px-[0.75rem] py-0.5 rounded-full bg-[#dde3ed] text-[#161c24] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px]">
                    Home Learning Studio
                  </span>
                </div>
                <div className="w-full h-48 bg-[#e3e8f3] rounded-lg flex flex-col items-center justify-center text-center p-[1.25rem] relative overflow-hidden">
                  <span className="material-symbols-outlined text-[#03345d] text-[36px] mb-1">map</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-[#03345d] font-semibold">
                    Uttarahalli Main Road
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                    Prominent landmark: Near Vishal Mega Mart
                  </span>
                  <a
                    className="mt-[0.75rem] inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#7d5700] hover:underline font-bold"
                    href="https://maps.google.com/?q=Vishal+Mega+Mart+Uttarahalli+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Open in Google Maps</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="enquiry-form"
            className="lg:col-span-6 p-[1.5rem] bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(36,75,117,0.08)] flex flex-col gap-[1.25rem]"
          >
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#7d5700] uppercase font-semibold">
                Admissions • Small Batches
              </span>
              <h3 className="font-['Source_Serif_4'] text-[22px] leading-[30px] text-[#03345d] mt-1">
                Send an Admission Enquiry
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#43474e]">
                Fill in your details below and we will get back to you promptly to schedule a visit.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}