"use client";

import React from "react";
import { EXPERIENCE_DATA } from "@/data/experience-data";

export default function MissionSection() {
  return (
    <section
      id="mission"
      data-theme="light"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#F7F5F0] text-[#1a1a1a] flex flex-col justify-center py-20 px-6 sm:px-12 transition-colors duration-500 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-7xl relative z-10 text-right h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Narrative + Three Pillars */}
          <div className="lg:col-span-6 space-y-8">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/60">
                ۰۱ / ماموریت رویداد
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            {/* Main Narrative Heading: فاصله متناسب با سایزهای بزرگ */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111111] tracking-tight leading-snug sm:leading-tight lg:leading-[1.4] text-balance">
              «هیچ‌کس دوبار در یک رودخانه قدم نمی‌گذارد؛ چون هم رودخانه دیگر
              همان رودخانه نیست، هم او دیگر همان آدم نیست.»
            </h2>

            {/* Lead and Philosophy text: ارتفاع استاندارد متن فارسی */}
            <div className="space-y-6 text-sm sm:text-base text-black/75 leading-loose font-normal max-w-xl">
              <p className="font-medium text-black/90 leading-loose text-balance">
                «در میان مه» بر پایه‌ی یک کارگاه تعاملی گروهی شکل گرفته است. این
                بخش را{" "}
                <span className="font-bold text-black">دکتر مهیار پویامهر</span>
                ، دکترای روان‌شناسی از دانشگاه شیراز، هدایت می‌کند؛ جایی که
                هر‌کس، در کنار جمعی هم‌مسیر، بحران و بلاتکلیفی خودش را به
                گفت‌وگو می‌گذارد، نه برای یافتن پاسخ آماده، بلکه برای دیدن مسیر
                از زاویه‌ای تازه.
              </p>
              <p className="text-black/70 leading-loose text-balance">
                فراتر از مباحث نظری، شرکت‌کنندگان از یک گفت‌وگوی صریح میان{" "}
                <span className="font-bold text-black">صالح شجاعی</span> و{" "}
                <span className="font-bold text-black">پویا صبرآموز</span>،
                تجربه‌ای دست‌اول از پارادایم‌های تازه‌ی بازار کار به دست
                می‌آورند؛ گفت‌وگویی که قرار نیست نگرانی را کم کند، بلکه قرار است
                به آن جهت بدهد.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="pt-6 sm:pt-8 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-6 lg:gap-x-8">
              {EXPERIENCE_DATA.mission.pillars.map((pillar) => (
                <div key={pillar.num} className="flex flex-col gap-2.5">
                  <span className="text-2xl font-black text-[#1a1a1a] block">
                    {pillar.num}
                  </span>
                  <h3 className="text-xs font-bold text-black/90 leading-snug">
                    {pillar.title}
                  </h3>
                  {/* اصلاح ارتفاع خط برای فونت‌های زیرنویس */}
                  <p className="text-[11px] text-black/65 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sculpture Video Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-full max-h-[55vh]">
            <div className="relative w-full max-w-md aspect-[3/4] h-full max-h-[55vh] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-black/5 bg-[#EAE6DF]">
              <video
                src="/assets/mission-sculpture.mp4"
                poster="/assets/mission-sculpture-poster.webp"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-black/80 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 font-medium">
                <span>فلسفه‌ی رویداد</span>
                <span>از ابهام تا مسیر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
