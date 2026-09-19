"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAssetPath } from "@/utils/basePath";

gsap.registerPlugin(ScrollTrigger);

export interface TimelineStation {
  id: number;
  stationNumber: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export const TIMELINE_STATIONS: TimelineStation[] = [
  {
    id: 1,
    stationNumber: "۰۱",
    badge: "نقطه‌ی شروع",
    title: "سالی که همه‌چیز زیر سؤال رفت",
    description:
      "یک سال پر از ابهام؛ سالی که خیلی از فرض‌های قدیمیمون درباره‌ی آینده، دیگر جواب نداد.",
    image: "/assets/timeline-01-uncertainty.jpg",
  },
  {
    id: 2,
    stationNumber: "۰۲",
    badge: "موج تازه",
    title: "وقتی هوش مصنوعی همه‌چیز را دگرگون کرد",
    description:
      "ابزارهایی که یک‌شبه جای کدنویس، طراح و نویسنده را گرفتند و قواعد بازی را عوض کردند.",
    image: "/assets/timeline-02-ai-wave.jpg",
  },
  {
    id: 3,
    stationNumber: "۰۳",
    badge: "پیامدها",
    title: "مسیرهایی که دیگر همان مسیر قبلی نبودند",
    description:
      "شغل‌هایی که شکل عوض کردند، پروژه‌هایی که متوقف شدند، برنامه‌هایی که باید از نو نوشته می‌شدند.",
    image: "/assets/timeline-03-aftermath.jpg",
  },
  {
    id: 4,
    stationNumber: "۰۴",
    badge: "سؤال مشترک",
    title: "حالا چه‌کار کنیم؟",
    description:
      "سؤالی که تقریباً همه‌ی ما، هرکدام به‌تنهایی، با خودمان داشتیم.",
    image: "/assets/timeline-04-question.jpg",
  },
  {
    id: 5,
    stationNumber: "۰۵",
    badge: "جرقه",
    title: "به‌جای سکوت، دور هم جمع شدیم",
    description:
      "فرانت‌چپتر تصمیم گرفت این بار، به‌جای تنها ماندن، این سؤال را با هم جواب بدهد؛ همین‌جا «در میان مه» شکل گرفت.",
    image: "/assets/timeline-05-frontchapter.jpg",
  },
  {
    id: 6,
    stationNumber: "۰۶",
    badge: "محل برگزاری",
    title: "فضای کار اشتراکی زاویه",
    description:
      "کارخانه نوآوری آزادی تهران؛ جایی که قرار است ۵۰ نفر دور هم جمع شویم و مسیر را با هم پیدا کنیم.",
    image: "/assets/timeline-06-venue.jpg",
  },
];

// Dynamically generate a smooth sinusoidal Bezier path matching station steps
function generateSineWavePath(
  totalWidth: number,
  wavelength = 1000,
  amplitude = 90,
  midY = 160,
): string {
  let d = `M 0 ${midY}`;
  const half = wavelength / 2;
  d += ` Q ${half / 2} ${midY - amplitude}, ${half} ${midY}`;
  for (let x = wavelength; x <= totalWidth + wavelength; x += half) {
    d += ` T ${x} ${midY}`;
  }
  return d;
}

export default function HospitalitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const headingTitleRef = useRef<HTMLHeadingElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate dynamic dimensions based on array length
  const STATION_CARD_WIDTH = 840;
  const STATION_GAP = 160;
  const STEP_WIDTH = STATION_CARD_WIDTH + STATION_GAP;
  const svgWidth = Math.max(3400, (TIMELINE_STATIONS.length + 1) * STEP_WIDTH);
  const sineWavePath = generateSineWavePath(svgWidth, STEP_WIDTH, 90, 160);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const measure = measureRef.current;
    if (!container || !track || !measure) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Travel exactly the horizontal content's width so the last station's end
      // edge meets the viewport edge exactly when the pin releases.
      const getScrollDistance = () => {
        const endPadding =
          parseFloat(getComputedStyle(measure).paddingLeft) || 0;
        return Math.max(
          0,
          measure.scrollWidth - window.innerWidth - endPadding,
        );
      };
      const getTotalPinDistance = () => getScrollDistance();

      // Timeline that pins container for exactly as long as the horizontal track needs
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "experience-pin",
          trigger: container,
          start: "top top",
          end: () => `+=${getTotalPinDistance()}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 0,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // 1. Horizontal scrubbing through every milestone stop (flowing Right-to-Left in RTL).
      tl.to(track, {
        x: () => getScrollDistance(),
        ease: "none",
        duration: 1.0,
      });

      // 2. Parallax floating offsets on station image cards
      imageRefs.current.forEach((el, index) => {
        if (!el) return;
        const yOffset = index % 2 === 0 ? -18 : 18;
        gsap.to(el, {
          yPercent: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 1 + (index % 3) * 0.2,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      data-theme="dark"
      dir="rtl"
      className="relative w-full min-h-screen h-auto lg:h-screen bg-[#080808] text-white overflow-hidden text-right select-none py-16 sm:py-20 lg:py-0"
    >
      {/* 1. Visual Atmosphere & Canvas: Subtle wave texture + vignette */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat bg-center mix-blend-screen"
        style={{
          backgroundImage: `url('${getAssetPath('/assets/dar-miyan-e-meh-timeline-wave.png')}')`,
          backgroundSize: "256px 256px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Narrative Heading: Relative in mobile, Pinned in desktop */}
      <div className="lg:absolute lg:top-14 lg:right-14 z-20 px-6 sm:px-10 lg:px-0 mb-10 lg:mb-0 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
            روایت رویداد
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]/30" />
        </div>
        <h2
          ref={headingTitleRef}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight mt-3 lg:mt-12 transition-all duration-700 ease-out drop-shadow-lg"
        >
          از کجا شروع شد
        </h2>
      </div>

      {/* Pinned Top-Left Navigation hint in RTL (Desktop only) */}
      <div className="absolute top-12 sm:top-16 left-6 sm:left-14 z-20 pointer-events-none text-xs tracking-wider text-zinc-400 hidden lg:block">
        خط زمانی افقی • برای مشاهده به پایین اسکرول کنید
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* Mobile & Tablet Vertical Flow Layout (< 1024px, zero scroll-jacking)    */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 px-6 sm:px-10 max-w-2xl mx-auto space-y-10">
        <div className="relative pr-6 border-r border-[#c5a880]/25 space-y-10">
          {TIMELINE_STATIONS.map((station) => (
            <div key={station.id} className="relative space-y-4">
              {/* Timeline Node Indicator on the line */}
              <div className="absolute -right-[31px] top-1 z-10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c5a880] border-2 border-[#080808] shadow-[0_0_8px_#c5a880]" />
              </div>

              {/* Station Tag & Badge */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#c5a880]/15 text-[#e2ceb5] border border-[#c5a880]/30">
                  ایستگاه {station.stationNumber}
                </span>
                <span className="text-xs font-semibold text-[#c5a880] tracking-wide">
                  {station.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl text-white font-bold leading-snug">
                  {station.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {station.description}
                </p>
              </div>

              {/* Station Visual Card */}
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl">
                <img
                  src={getAssetPath(station.image)}
                  alt={station.title}
                  className="w-full h-full object-cover filter contrast-[1.06] brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3.5 left-3.5 flex items-center justify-between text-[11px] text-zinc-300 font-medium pointer-events-none">
                  <span className="text-xs text-zinc-400 font-mono tracking-wider">
                    {station.stationNumber} / ۰۶
                  </span>
                  <span className="text-[11px] text-[#e2ceb5] tracking-wider font-semibold">
                    {station.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* Desktop Pinned Horizontal Track (>= 1024px)                             */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex relative z-10 w-full h-full items-center">
        <div
          ref={trackRef}
          className="relative flex items-center h-full w-max will-change-transform"
        >
          {/* Continuous Glowing Gold Sine Wave SVG across the entire track */}
          <svg
            className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none overflow-visible z-0 opacity-70 scale-x-[-1]"
            style={{ width: `${svgWidth}px`, height: "320px" }}
            viewBox={`0 0 ${svgWidth} 320`}
            fill="none"
          >
            <defs>
              <linearGradient
                id="goldSineGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#c5a880" stopOpacity="0.1" />
                <stop offset="20%" stopColor="#e2ceb5" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#c5a880" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#e2ceb5" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c5a880" stopOpacity="0.15" />
              </linearGradient>
              <filter
                id="sineGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dynamically calculated glowing Bezier Sine Wave */}
            <path
              d={sineWavePath}
              stroke="url(#goldSineGrad)"
              strokeWidth="2.5"
              filter="url(#sineGlow)"
              fill="none"
            />
          </svg>

          {/* Dynamic Timeline Stations (Mapped from TIMELINE_STATIONS array) */}
          <div
            ref={measureRef}
            className="relative flex items-center h-full pr-[28vw] sm:pr-[24vw] pl-[20vw] shrink-0"
          >
            {TIMELINE_STATIONS.map((station, index) => (
              <React.Fragment key={station.id}>
                <div className="relative flex items-center gap-10 sm:gap-14 shrink-0 w-[780px] sm:w-[840px] z-10">
                  {/* Wave Node Pinpoint */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
                  </div>

                  {/* Station Text & Narrative Details */}
                  <div className="w-[340px] sm:w-[380px] space-y-4 shrink-0 pr-6">
                    {/* Station Tag & Badge */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#c5a880]/15 text-[#e2ceb5] border border-[#c5a880]/30">
                        ایستگاه {station.stationNumber}
                      </span>
                      <span className="text-xs font-semibold text-[#c5a880] tracking-wide">
                        {station.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl text-white font-bold leading-snug tracking-tight">
                        {station.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {station.description}
                      </p>
                    </div>
                  </div>

                  {/* Station Visual Card with Parallax Float */}
                  <div className="relative w-[360px] sm:w-[420px] h-[380px] sm:h-[440px] shrink-0 flex items-center justify-center">
                    <div
                      ref={(el) => {
                        imageRefs.current[index] = el;
                      }}
                      className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-white/10 bg-zinc-900 group will-change-transform"
                    >
                      <img
                        src={getAssetPath(station.image)}
                        alt={station.title}
                        className="w-full h-full object-cover filter contrast-[1.06] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-[11px] text-zinc-300 font-medium pointer-events-none">
                        <span className="text-xs text-zinc-400 font-mono tracking-wider">
                          {station.stationNumber} / ۰۶
                        </span>
                        <span className="text-[11px] text-[#e2ceb5] tracking-wider font-semibold">
                          {station.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Spacer between stations */}
                {index < TIMELINE_STATIONS.length - 1 && (
                  <div className="w-[140px] sm:w-[160px] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
