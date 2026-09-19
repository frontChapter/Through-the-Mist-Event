"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function MissionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedStageRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState<number>(1);

  // Mouse spotlight coordinates (desktop)
  const targetCoords = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const currentCoords = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const rafId = useRef<number | null>(null);

  const updateCssProperties = (x: number, y: number) => {
    if (!pinnedStageRef.current) return;
    pinnedStageRef.current.style.setProperty("--mouse-x", `${x}px`);
    pinnedStageRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!pinnedStageRef.current) return;
    const rect = pinnedStageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetCoords.current = { x, y };

    if (currentCoords.current.x === -9999) {
      currentCoords.current = { x, y };
      updateCssProperties(x, y);
    }
  };

  const handleMouseLeave = () => {
    targetCoords.current = { x: -9999, y: -9999 };
    currentCoords.current = { x: -9999, y: -9999 };
    updateCssProperties(-9999, -9999);
  };

  // Lerp loop for spotlight
  useEffect(() => {
    let isMounted = true;

    const animate = () => {
      if (!isMounted) return;

      if (targetCoords.current.x !== -9999) {
        currentCoords.current.x +=
          (targetCoords.current.x - currentCoords.current.x) * 0.16;
        currentCoords.current.y +=
          (targetCoords.current.y - currentCoords.current.y) * 0.16;

        updateCssProperties(
          Math.round(currentCoords.current.x * 10) / 10,
          Math.round(currentCoords.current.y * 10) / 10
        );
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      isMounted = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // GSAP ScrollTrigger Pinned Narrative Scroll Animation (Desktop only)
  useEffect(() => {
    const container = containerRef.current;
    const stage = pinnedStageRef.current;
    const b1 = block1Ref.current;
    const b2 = block2Ref.current;
    const b3 = block3Ref.current;

    if (!container || !stage || !b1 || !b2 || !b3) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Set initial states: Block 1 crystal clear, Blocks 2 and 3 hidden with blur
      gsap.set(b1, { opacity: 1, filter: "blur(0px)", y: 0, pointerEvents: "auto" });
      gsap.set(b2, { opacity: 0, filter: "blur(14px)", y: 30, pointerEvents: "none" });
      gsap.set(b3, { opacity: 0, filter: "blur(16px)", y: 35, pointerEvents: "none" });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "mission-pin",
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          pinSpacing: false,
          anticipatePin: 1,
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) {
              setActiveStep(1);
            } else if (p < 0.70) {
              setActiveStep(2);
            } else {
              setActiveStep(3);
            }
          },
        },
      });

      // Total timeline normalized to 3.0 units with generous dwell windows
      tl.to(
        b1,
        {
          opacity: 0,
          filter: "blur(12px)",
          y: -28,
          pointerEvents: "none",
          ease: "power2.inOut",
          duration: 0.35,
        },
        0.7
      )
        .to(
          b2,
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            pointerEvents: "auto",
            ease: "power2.out",
            duration: 0.35,
          },
          0.75
        )
        .to(
          b2,
          {
            opacity: 0,
            filter: "blur(12px)",
            y: -28,
            pointerEvents: "none",
            ease: "power2.inOut",
            duration: 0.35,
          },
          1.75
        )
        .to(
          b3,
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            pointerEvents: "auto",
            ease: "power2.out",
            duration: 0.35,
          },
          1.80
        )
        .set({}, {}, 3.0);
    });

    return () => mm.revert();
  }, []);

  const handleJumpToReservations = () => {
    if (window.__fullpageGoTo) {
      window.__fullpageGoTo(7); // reservations section index
    } else {
      document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="mission"
      data-theme="light"
      dir="rtl"
      className="relative w-full h-auto lg:h-[280vh] bg-[#FAF9F5] text-[#1a1a1a] select-none py-16 sm:py-20 lg:py-0"
    >
      {/* Pinned Viewport Container in Desktop, Natural Container in Mobile */}
      <div
        ref={pinnedStageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-hidden py-6 lg:py-20 px-5 sm:px-12 lg:px-20 text-right transition-colors duration-500"
      >
        {/* 1. Base Persian Marble Sculpture Layer (Soft, Matte, Ambient) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={getAssetPath("/assets/dar-miyan-e-meh-mission-sculpture.webp")}
            alt="تندیس‌های مرمرین ماموریت"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left opacity-20 sm:opacity-40 filter contrast-95 brightness-102 transition-transform duration-700"
          />
          {/* High-Legibility Frosted Gradient Overlay for mobile & tablets (< lg) */}
          <div className="absolute inset-0 bg-[#FAF9F5]/90 backdrop-blur-[2px] pointer-events-none lg:hidden block" />
          {/* Desktop Luxury Horizontal Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] pointer-events-none hidden lg:block" />
        </div>

        {/* 2. Spotlight Luminous Layer (Desktop only) */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none hidden lg:block"
          style={{
            maskImage:
              "radial-gradient(circle 380px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle 380px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 70%)",
          }}
        >
          <img
            src={getAssetPath("/assets/dar-miyan-e-meh-mission-sculpture.webp")}
            alt="تندیس‌های مرمرین - کانون نور"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left opacity-70 filter contrast-125 brightness-105 transition-transform duration-700"
          />
        </div>

        {/* 3. Text Narrative Content Container */}
        <div className="container mx-auto max-w-7xl relative z-10 text-right h-full flex flex-col justify-center">
          <div className="max-w-3xl relative min-h-0 lg:min-h-[440px] flex flex-col justify-center space-y-12 lg:space-y-0">
            {/* Step 1: Main Quote & Manifesto */}
            <div
              ref={block1Ref}
              className="w-full space-y-5 sm:space-y-6 pb-8 lg:pb-0 border-b border-black/10 lg:border-none will-change-[transform,opacity]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/60">
                  ۰۱ / ماموریت رویداد
                </span>
                <span className="w-8 h-[1px] bg-black/20" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111111] tracking-tight leading-relaxed sm:leading-snug lg:leading-[1.4] text-balance">
                «هیچ‌کس دوبار در یک رودخانه قدم نمی‌گذارد؛ چون هم رودخانه دیگر همان
                رودخانه نیست، هم او دیگر همان آدم نیست.»
              </h2>

              <p className="text-xs sm:text-sm text-black/55 font-normal">
                — هراکلیتوس / درنگ در معنای دگرگونی و آغاز راه
              </p>

              <div className="pt-3 hidden lg:flex items-center gap-2 text-[11px] text-black/45 font-medium">
                <span>اسکرول کنید تا روایت آشکار شود</span>
                <span className="animate-bounce">↓</span>
              </div>
            </div>

            {/* Step 2: Philosophy and Narrative Lead */}
            <div
              ref={block2Ref}
              className="w-full space-y-5 sm:space-y-6 py-8 lg:py-0 border-b border-black/10 lg:border-none lg:absolute lg:inset-0 my-auto flex flex-col justify-center will-change-[transform,opacity]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/60">
                  ۰۲ / رویکرد و روان‌شناسی
                </span>
                <span className="w-8 h-[1px] bg-black/20" />
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-black/85 leading-loose font-normal">
                <p className="font-medium text-black/95 leading-loose text-balance bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-black/5 shadow-sm">
                  «در میان مه» بر پایه‌ی یک کارگاه تعاملی گروهی شکل گرفته است. این
                  بخش را{" "}
                  <span className="font-bold text-black">دکتر مهیار پویامهر</span>،
                  دکترای روان‌شناسی از دانشگاه شیراز، هدایت می‌کند؛ جایی که هر‌کس،
                  در کنار جمعی هم‌مسیر، بحران و بلاتکلیفی خودش را به گفت‌وگو
                  می‌گذارد، نه برای یافتن پاسخ آماده، بلکه برای دیدن مسیر از
                  زاویه‌ای تازه.
                </p>
                <p className="text-black/80 leading-loose text-balance bg-white/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-black/5 shadow-sm">
                  فراتر از مباحث نظری، شرکت‌کنندگان از یک گفت‌وگوی صریح میان{" "}
                  <span className="font-bold text-black">صالح شجاعی</span>،{" "}
                  <span className="font-bold text-black">امیر کریمی</span> و{" "}
                  <span className="font-bold text-black">پویا صبرآموز</span>،
                  تجربه‌ای دست‌اول از پارادایم‌های تازه‌ی بازار کار به دست
                  می‌آورند؛ گفت‌وگویی که قرار نیست نگرانی را کم کند، بلکه قرار است
                  به آن جهت بدهد.
                </p>
              </div>
            </div>

            {/* Step 3: Three Pillars & Call To Action */}
            <div
              ref={block3Ref}
              className="w-full space-y-6 pt-4 lg:pt-0 lg:absolute lg:inset-0 my-auto flex flex-col justify-center will-change-[transform,opacity]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/60">
                  ۰۳ / ساختار تجربه
                </span>
                <span className="w-8 h-[1px] bg-black/20" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                سه گام پیوسته در کارگاه تعاملی
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
                {EXPERIENCE_DATA.mission.pillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="flex flex-col gap-2 p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-black/5 shadow-sm"
                  >
                    <span className="text-xl font-black text-[#1a1a1a]">
                      {pillar.num}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-black/90 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-black/65 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Inline Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleJumpToReservations}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] text-[#FAF9F5] text-xs sm:text-sm font-bold shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>رزرو صندلی در میان مه</span>
                  <span className="text-white/60">←</span>
                </button>
                <span className="text-xs text-black/50 font-medium">
                  ظرفیت محدود به ۵۰ نفر
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Interactive Step Indicator (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-8 left-10 z-20 items-center gap-3 text-[11px] tracking-wider text-black/80 bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-sm font-medium select-none pointer-events-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === 1 ? "bg-black scale-110" : "bg-black/20"
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === 2 ? "bg-black scale-110" : "bg-black/20"
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === 3 ? "bg-black scale-110" : "bg-black/20"
              }`}
            />
          </div>
          <span className="w-1 h-1 rounded-full bg-black/25" />
          <span>
            {activeStep === 1
              ? "بیانیه رویداد"
              : activeStep === 2
              ? "رویکرد کارگاه"
              : "سه گام تعاملی"}
          </span>
        </div>
      </div>
    </section>
  );
}
