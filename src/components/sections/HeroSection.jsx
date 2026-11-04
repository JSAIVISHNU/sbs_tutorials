const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtt8MhPuHlktCmW6fqMV4kUTslOi6oxfSPKkfN3sqhxkhNWe1zSXCZoXJwlP2vBL326JxVJu7lBVEw5NkzMyWER8G55Fy30lC3eddZa4YbUqedckZx3ul7V6F_knEn1ItDEQjzoOlUnXmeOEhpI8w8lCFkdYSv1ZrdEuteFYB8sMzDg73VyQcZCtGwqteYoaxwbJ-tHs2cIgpyZe17FUYStncY01yR-kfZGldIFu0'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9ff] py-[2rem] lg:py-[3.5rem]">
      <div className="max-w-[1280px] mx-auto px-[1.25rem] lg:px-[3rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-[1.25rem]">
            <div className="inline-flex items-center gap-[0.375rem] px-[1.25rem] py-[0.375rem] rounded-full bg-[#d5e7dd] text-[#03345d] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#fdc254] animate-pulse" />
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] font-bold tracking-[0.02em] uppercase">
                Admissions Open 2025
              </span>
            </div>
            <h1 className="font-['Source_Serif_4'] text-[30px] lg:text-[56px] leading-[38px] lg:leading-[64px] tracking-[-0.01em] lg:tracking-[-0.02em] font-semibold text-[#03345d]">
              Learning Today,{' '}
              <br />
              <span className="relative inline-block text-[#7d5700]">
                Building a Brighter
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#ffdeaa] fill-current -z-10"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 12"
                >
                  <path d="M0,7 Q50,0 100,6 T200,8 L200,12 L0,12 Z" />
                </svg>
              </span>{' '}
              Tomorrow
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[28px] text-[#43474e] max-w-xl">
              A welcoming neighbourhood place where children learn, explore their creativity, and grow with intimate
              personal attention in a reassuring home-learning setup.
            </p>
            <div className="flex flex-wrap items-center gap-[0.75rem] pt-[0.375rem] w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-[0.375rem] bg-[#03345d] text-white hover:bg-[#244b75] px-[2rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-[0_4px_20px_-2px_rgba(36,75,117,0.18)]"
                href="#enquiry-form"
              >
                <span>Enquire Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-[0.375rem] bg-white text-[#03345d] hover:bg-[#eef4ff] px-[2rem] py-[0.75rem] rounded-lg font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold transition-all shadow-sm"
                href="#courses"
              >
                <span>Explore Our Courses</span>
              </a>
            </div>
            <div className="w-full mt-[1.25rem] pt-[1.25rem] flex flex-col gap-[0.375rem]">
              <div className="flex flex-wrap items-center gap-[0.375rem] font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#03345d]">
                <span className="px-[0.75rem] py-1 bg-[#eef4ff] rounded-md">School Tuition</span>
                <span className="text-[#c3c6d0]">•</span>
                <span className="px-[0.75rem] py-1 bg-[#eef4ff] rounded-md">Music</span>
                <span className="text-[#c3c6d0]">•</span>
                <span className="px-[0.75rem] py-1 bg-[#eef4ff] rounded-md">Drawing</span>
                <span className="text-[#c3c6d0]">•</span>
                <span className="px-[0.75rem] py-1 bg-[#eef4ff] rounded-md">Abacus</span>
              </div>
              <div className="flex items-center gap-[0.375rem] text-[#43474e] font-['Plus_Jakarta_Sans'] text-[13px] leading-[20px] pt-1">
                <span className="material-symbols-outlined text-[#7d5700] text-[18px]">location_on</span>
                <span>Near Vishal Mega Mart, Uttarahalli Main Road, Bengaluru</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-[1.25rem] lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_12px_32px_-4px_rgba(36,75,117,0.15)] bg-[#e3e8f3]">
              <img
                alt="Friendly lady teacher in blue kurti mentoring elementary school children around a wooden study table at Brilliant Hub Uttarahalli"
                className="w-full h-full object-cover"
                src={HERO_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03345d]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-4 sm:left-8 bg-white/95 backdrop-blur-md px-[1.25rem] py-[0.75rem] rounded-xl shadow-[0_8px_24px_-4px_rgba(36,75,117,0.12)] flex items-center gap-[0.75rem] max-w-[90%]">
              <div className="w-10 h-10 rounded-full bg-[#ffdeaa] flex items-center justify-center flex-shrink-0 text-[#725000]">
                <span className="material-symbols-outlined text-[20px]">cottage</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-semibold text-[#244b75]">
                  Cosy Home Learning Studio
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] text-[#43474e]">
                  Personal Attention • Calm Study Space
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}