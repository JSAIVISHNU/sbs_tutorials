export function AdmissionsCTA() {
  return (
    <section className="w-full py-[3.5rem] relative overflow-hidden bg-[#03345d] text-white">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#fdc254]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute left-1/3 -bottom-24 w-96 h-96 bg-[#a5c9fa]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem] relative z-10">
        <div className="w-full bg-gradient-to-br from-[#03345d] via-[#244b75] to-[#03345d] rounded-[2rem] shadow-xl overflow-hidden text-white relative">
          <div className="p-[1.5rem] lg:p-[3.5rem] grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-[1.25rem]">
              <div className="flex flex-wrap items-center gap-[0.375rem]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdc254]/20 text-[#ffdeaa] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#fdc254] animate-pulse" />
                  Admissions Open
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[#a5c9fa] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#ffdeaa]">home_pin</span>
                  Uttarahalli Main Road, Bengaluru
                </span>
              </div>
              <div className="flex flex-col gap-[0.375rem]">
                <h2 className="font-['Source_Serif_4'] text-[28px] lg:text-[40px] leading-[36px] lg:leading-[48px] text-white font-semibold">
                  Give Your Child a Great Start
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[28px] text-[#97bbec] max-w-xl">
                  Looking for a friendly place where your child can learn, explore and grow? Get in touch with Brilliant Hub
                  TUTORIALS to know more about our learning programs.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: 'menu_book', label: 'School Tuition (LKG–10th)' },
                  { icon: 'music_note', label: 'Music (Shloka & Devaranama)' },
                  { icon: 'palette', label: 'Drawing Classes' },
                  { icon: 'calculate', label: 'Abacus Classes' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] backdrop-blur-sm"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#ffdeaa]">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[0.75rem] pt-[0.375rem]">
                <a
                  className="inline-flex items-center justify-center gap-2.5 px-[1.5rem] py-[0.875rem] rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.99] group"
                  href="https://wa.me/919916522810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                  </svg>
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-[1.5rem] py-[0.875rem] rounded-xl bg-white/10 text-white hover:bg-white/20 font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-bold transition-all shadow-sm hover:shadow active:scale-[0.99] group"
                  href="tel:+919916522810"
                >
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-12">call</span>
                  <span>Call Us Direct</span>
                </a>
              </div>
              <div className="flex items-center gap-[0.75rem] pt-1">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] uppercase tracking-[0.04em] text-[#ffdeaa]">
                  Hotlines:
                </span>
                <a
                  className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-bold text-white hover:text-[#fdc254] transition-colors underline decoration-[#fdc254]/40 underline-offset-4"
                  href="tel:+9180473902"
                >
                  +91 80473902
                </a>
                <span className="text-white/40">|</span>
                <a
                  className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] font-bold text-white hover:text-[#fdc254] transition-colors underline decoration-[#fdc254]/40 underline-offset-4"
                  href="tel:+919916522810"
                >
                  +91 9916522810
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-[0.75rem]">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-[1.25rem] flex flex-col gap-[1.25rem]">
                <div className="flex items-start gap-[0.75rem]">
                  <div className="w-12 h-12 rounded-xl bg-[#fdc254] text-[#725000] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">chair</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-white font-bold">
                      Personal Attention
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#97bbec]">
                      Small, supportive groups in a cosy, welcoming home study space designed for calm and
                      distraction-free learning.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-[0.75rem] pt-[0.375rem]">
                  <div className="w-12 h-12 rounded-xl bg-[#a5c9fa]/20 text-[#ffdeaa] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">pin_drop</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[18px] leading-[26px] text-white font-bold">
                      Convenient Neighbourhood
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] text-[#97bbec]">
                      Easily accessible near Vishal Mega Mart, Uttarahalli Main Road. Safe drop-off and pickup for local
                      parents.
                    </span>
                  </div>
                </div>
                <div className="w-full bg-[#03345d]/40 rounded-xl p-[0.75rem] flex items-center justify-between">
                  <div className="flex items-center gap-[0.375rem]">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#fdc254] text-[#725000] text-xs font-bold">
                        S
                      </span>
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#a5c9fa] text-[#03345d] text-xs font-bold">
                        B
                      </span>
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#d5e7dd] text-[#273630] text-xs font-bold">
                        S
                      </span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#97bbec] pl-1">
                      Care • Clarity • Confidence
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#ffdeaa] font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px]">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Walk-ins Welcome</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-[0.75rem] shadow-sm flex items-center justify-between text-[#161c24]">
                <div className="flex items-center gap-[0.375rem]">
                  <span className="material-symbols-outlined text-[#7d5700] text-[22px]">contact_support</span>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#03345d] font-bold">
                      Have Questions?
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#43474e]">
                      Drop by or give us a quick ring
                    </span>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#eef4ff] hover:bg-[#e3e8f3] text-[#03345d] font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] font-semibold transition-colors"
                  href="tel:+919916522810"
                >
                  <span>Connect</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}