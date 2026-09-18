'use client';

import React from 'react';

export default function ApaMethodSection() {
  return (
    <section
      id="method"
      data-theme="light"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#FAF8F5] text-[#1a1a1a] flex flex-col justify-center py-20 px-6 sm:px-12 border-t border-black/5 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-7xl relative z-10 text-right h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Vertical Monochrome Portrait of Dr. Michael Apa */}
          <div className="lg:col-span-5 flex justify-center h-full max-h-[58vh]">
            <div className="relative w-full max-w-sm aspect-[3/4] h-full max-h-[58vh] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-black/10 bg-[#EFECE6] group">
              <img
                src="/7umm.png"
                alt="پرتره دکتر مایکل آپا"
                className="w-full h-full object-cover object-[48%_center] filter contrast-[1.08] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-lg font-medium">
                <span className="font-bold tracking-wider">دکتر مایکل آپا</span>
                <span className="text-white/80">بنیان‌گذار و مجسمه‌ساز لبخند</span>
              </div>
            </div>
          </div>

          {/* Narrative & Method Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-black/60 font-semibold">
                ۰۴ / متدولوژی بالینی
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.3] tracking-tight">
              &ldquo;زیبایی افزوده نمی‌شود؛ بلکه آشکار می‌گردد.&rdquo;
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-black/75 leading-relaxed font-normal max-w-xl">
              <p className="font-medium text-black/90 leading-relaxed">
                بیش از دو دهه است که دکتر مایکل آپا رویکردی اختصاصی و پیشگامانه را در دندان‌پزشکی زیبایی بنا نهاده است؛ نگریستن به دندان‌ها نه به عنوان ساختارهای مجزا، بلکه به عنوان امتدادی زنده و هماهنگ با معماری صورت انسان.
              </p>
              <p className="text-black/70 leading-relaxed">
                دوره «طراحی با دست» ظرافت‌های پنهان پشت هر تصمیم بالینی را آشکار می‌سازد: اینکه چگونه کوچک‌ترین اصلاحات در کانتور سرویکال ادراک بصری خط لب را دگرگون می‌کند و چگونه تناسبات ساختاری، علم پزشکی را به یک اثر هنری تکرارپذیر بدل می‌سازد.
              </p>
            </div>

            {/* Dr. Apa Signature */}
            <div className="pt-1">
              <img
                src="/assets/dr-apa-signature.png"
                alt="امضای دکتر مایکل آپا"
                className="h-9 w-auto opacity-75 object-contain"
              />
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center gap-8 text-xs text-black/70 tracking-wider">
              <div>
                <span className="text-2xl font-black text-black block">+۲۰</span>
                <span className="font-medium">سال تسلط و تدریس</span>
              </div>
              <div className="w-[1px] h-8 bg-black/15" />
              <div>
                <span className="text-2xl font-black text-black block">+۱۰,۰۰۰</span>
                <span className="font-medium">کیس طراحی‌شده</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
