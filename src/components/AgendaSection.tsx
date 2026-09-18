"use client";

import React from "react";

interface AgendaItem {
  number: string;
  time: string;
  title: string;
  description: string;
  category: string;
}

const AGENDA_ITEMS: AgendaItem[] = [
  {
    number: "۰۱",
    time: "۱۵:۰۰–۱۵:۱۵",
    title: "خوش اومدی",
    description: "بیا نفس بکش، یه چای دستت بگیر و با آدمهای این جمع آشنا شو.",
    category: "پذیرش",
  },
  {
    number: "۰۲",
    time: "۱۵:۱۵–۱۵:۳۰",
    title: "شروع ماجرا",
    description:
      "داستان اینکه چرا امروز اینجا جمع شدیم و قراره چه مسیری رو با هم بریم.",
    category: "افتتاحیه",
  },
  {
    number: "۰۳",
    time: "۱۵:۳۰–۱۵:۴۵",
    title: "نگاهی به بحران هوش مصنوعی",
    description:
      "یه دید روشن از اینکه موج AI کجای بازار کار رو داره عوض میکنه، از زبان کارخانه هوش مصنوعی ایران.",
    category: "سخنرانی",
  },
  {
    number: "۰۴",
    time: "۱۵:۴۵–۱۷:۱۵",
    title: "کارگاه Group Support",
    description:
      "نود دقیقه که تنها نیستی؛ کنار آدمهایی که همین بلاتکلیفی رو تجربه میکنن، با هدایت دکتر مهیار پویامهر.",
    category: "کارگاه تعاملی",
  },
  {
    number: "۰۵",
    time: "۱۷:۱۵–۱۷:۳۵",
    title: "یه نفس تازه",
    description: "وقت چای و گپوگفت با کسایی که همین الان کنارت نشستن.",
    category: "استراحت و شبکهسازی",
  },
  {
    number: "۰۶",
    time: "۱۷:۳۵–۱۷:۵۰",
    title: "وقتی حمایت به محصول تبدیل میشه",
    description:
      "لیارا میزبان یک تیم کوچیکه که نشونمون میده یه ایدهی نرمافزاری عامالمنفعه (CodeMeet) چطور با حمایت مالی، تبدیل به یک محصول واقعی شده.",
    category: "معرفی حامی",
  },
  {
    number: "۰۷",
    time: "۱۷:۵۰–۱۹:۱۵",
    title: "حرفهای رودررو",
    description:
      "صالح شجاعی و پویا صبرآموز، بدون فیلتر، از پارادایمهای تازهی بازار کار میگن؛ همون سؤالهایی که تو هم داری، اینجا پرسیده میشه.",
    category: "پنل تخصصی",
  },
  {
    number: "۰۸",
    time: "۱۹:۱۵–۱۹:۳۰",
    title: "جمعبندی و خداحافظی",
    description:
      "یه لحظه برای نوشتن اینکه از امروز چی برداشتی، و بعد عکس یادگاری با بقیه.",
    category: "اختتامیه",
  },
];

const getBadgeStyle = (category: string) => {
  switch (category) {
    case "کارگاه تعاملی":
      return "bg-[#c5a880]/15 text-[#f1e0cf] border-[#c5a880]/35 font-semibold";
    case "پنل تخصصی":
      return "bg-amber-500/10 text-amber-300 border-amber-500/25 font-medium";
    case "سخنرانی":
      return "bg-sky-500/10 text-sky-300 border-sky-500/25 font-medium";
    case "معرفی حامی":
      return "bg-purple-500/10 text-purple-300 border-purple-500/25 font-medium";
    case "استراحت و شبکهسازی":
    case "استراحت و شبکه‌سازی":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 font-medium";
    case "افتتاحیه":
      return "bg-blue-500/10 text-blue-300 border-blue-500/25 font-medium";
    case "اختتامیه":
      return "bg-rose-500/10 text-rose-300 border-rose-500/25 font-medium";
    case "پذیرش":
    default:
      return "bg-white/5 text-zinc-400 border-white/10 font-medium";
  }
};

export default function AgendaSection() {
  return (
    <section
      id="agenda"
      data-theme="dark"
      dir="rtl"
      className="relative w-full h-screen min-h-screen bg-[#070707] text-white select-none flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      {/* Background Video Layer with Atmospheric Dark Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/assets/mission-sculpture.mp4"
          poster="/assets/mission-sculpture-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.26] contrast-125 saturate-40 scale-105"
        />
        {/* Luxury Dark Frosted & Vignette Overlays for maximum text readability */}
        <div className="absolute inset-0 bg-[#070707]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,transparent_10%,#070707_90%)]" />
      </div>

      {/* Ambient Radial Lighting Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c5a880]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-between relative z-10">
        {/* Top Bar: Section Label and Context Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 shrink-0">
          {/* Tag & Heading Label */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              ۰۲ / برنامه و زمان‌بندی
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="text-xs tracking-wider text-zinc-400 font-normal">
              ماموریت / برنامه
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>یک رویداد پیوسته • کارخانه نوآوری آزادی</span>
          </div>
        </div>

        {/* Main Stage: Dynamic Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-6 items-center flex-1 min-h-0">
          {/* Right Column: Title, Schedule Specs, and Sequential Curriculum Matrix */}
          <div className="lg:col-span-7 flex flex-col h-full max-h-[64vh] min-h-0 justify-between">
            {/* Header Block */}
            <div className="space-y-2.5 shrink-0 pb-3">
              {/* Time and Date Badge */}
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider font-mono">
                <span className="text-[#c5a880] font-semibold bg-[#c5a880]/10 border border-[#c5a880]/20 px-3 py-1 rounded-full">
                  پنجشنبه، ۲ مهر ۱۴۰۵ • ۱۵:۰۰ الی ۱۹:۳۰
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
                در میان مه
              </h2>

              {/* Overview Narrative */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal max-w-2xl text-balance">
                یک بعدازظهر برای عبور از بحران و ساختن مسیر تازه.
              </p>
            </div>

            {/* Curriculum List Header */}
            <div className="text-[11px] tracking-wider text-zinc-500 pb-2 border-b border-white/10 flex justify-between shrink-0 font-medium">
              <div className="flex items-center gap-6 sm:gap-8">
                <span className="w-8">شماره</span>
                <span>برنامه و سرفصل‌ها</span>
              </div>
              <span>نوع بخش</span>
            </div>

            {/* Scrollable Curriculum Rows with Ultra-Fine Borders */}
            <div
              data-inner-scroll="true"
              className="divide-y divide-white/[0.08] overflow-y-auto pl-2 pr-1 space-y-0.5 select-text flex-1 min-h-0"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.18) transparent",
              }}
            >
              <div className="divide-y divide-white/[0.08]">
                {AGENDA_ITEMS.map((item) => (
                  <div
                    key={item.number + "-" + item.title}
                    className="py-3 px-2.5 flex items-start justify-between gap-4 group hover:bg-white/[0.03] rounded-xl transition-all duration-150"
                  >
                    {/* Number & Content */}
                    <div className="flex items-start gap-3 sm:gap-5 min-w-0 flex-1">
                      <span className="text-base sm:text-lg font-black text-zinc-500 group-hover:text-[#c5a880] transition-colors w-7 sm:w-8 shrink-0 font-mono pt-0.5">
                        {item.number}
                      </span>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#c5a880] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded border border-[#c5a880]/20 shrink-0">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mt-1 font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Session Type Badge */}
                    <span
                      className={`text-[10px] tracking-wider px-2.5 sm:px-3 py-0.5 rounded-full border shrink-0 font-medium ${getBadgeStyle(
                        item.category,
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left Column: Authentic Community Gathering Image with Dark Atmosphere */}
          <div className="lg:col-span-5 h-full max-h-[64vh] flex items-center justify-center relative">
            <div className="relative aspect-[4/5] w-full max-w-md h-full max-h-[58vh] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.85)] group">
              <div className="w-full h-full relative">
                <img
                  src="/assets/frontchapter-community.jpg"
                  alt="جامعه فرانت‌چپتر در رویداد"
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                {/* Shadow overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Glass Badge Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-zinc-300 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                  <span>پنل گفت‌وگو: پارادایم‌شیفت‌ها</span>
                </span>
                <span className="text-zinc-400 font-mono text-[10px]">
                  LIVE — امروز
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Caption / Scroll Indicator */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-zinc-500 text-[11px] font-mono shrink-0">
          <span>FRONTCHAPTER — در میان مه</span>
          <span className="flex items-center gap-2 text-zinc-400 font-sans">
            <span>با اسکرول ادامه دهید</span>
            <span className="animate-bounce">↓</span>
          </span>
          <span className="font-sans">۴.۵ ساعت • ۸ بخش اصلی</span>
        </div>
      </div>
    </section>
  );
}
