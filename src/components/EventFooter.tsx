"use client";

import React, { useRef, useEffect } from "react";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function EventFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const targetCoords = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const currentCoords = useRef<{ x: number; y: number }>({
    x: -9999,
    y: -9999,
  });
  const targetNorm = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentNorm = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const handleJump = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("fullpage-jump-to", { detail: { targetId } }),
    );
  };

  const updateCssProperties = (
    x: number,
    y: number,
    normX: number,
    normY: number,
  ) => {
    if (!footerRef.current) return;
    footerRef.current.style.setProperty("--mouse-x", `${x}px`);
    footerRef.current.style.setProperty("--mouse-y", `${y}px`);
    footerRef.current.style.setProperty("--shift-x", `${normX * -6}px`);
    footerRef.current.style.setProperty("--shift-y", `${normY * -4}px`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetCoords.current = { x, y };
    targetNorm.current = {
      x: (x / rect.width - 0.5) * 2,
      y: (y / rect.height - 0.5) * 2,
    };

    if (currentCoords.current.x === -9999) {
      currentCoords.current = { x, y };
      currentNorm.current = { ...targetNorm.current };
      updateCssProperties(x, y, targetNorm.current.x, targetNorm.current.y);
    }
  };

  const handleMouseLeave = () => {
    targetCoords.current = { x: -9999, y: -9999 };
    targetNorm.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    let isMounted = true;

    const animate = () => {
      if (!isMounted) return;

      if (targetCoords.current.x !== -9999) {
        currentCoords.current.x +=
          (targetCoords.current.x - currentCoords.current.x) * 0.14;
        currentCoords.current.y +=
          (targetCoords.current.y - currentCoords.current.y) * 0.14;
        currentNorm.current.x +=
          (targetNorm.current.x - currentNorm.current.x) * 0.08;
        currentNorm.current.y +=
          (targetNorm.current.y - currentNorm.current.y) * 0.08;

        updateCssProperties(
          Math.round(currentCoords.current.x * 10) / 10,
          Math.round(currentCoords.current.y * 10) / 10,
          currentNorm.current.x,
          currentNorm.current.y,
        );
      } else {
        currentNorm.current.x += (0 - currentNorm.current.x) * 0.05;
        currentNorm.current.y += (0 - currentNorm.current.y) * 0.05;
        updateCssProperties(
          -9999,
          -9999,
          currentNorm.current.x,
          currentNorm.current.y,
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

  return (
    <footer
      ref={footerRef}
      id="footer"
      data-theme="light"
      dir="rtl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen h-auto lg:h-screen w-full flex flex-col justify-between pt-16 sm:pt-24 pb-8 px-6 sm:px-12 bg-[#F0ECE5] text-[#111111] overflow-hidden text-right select-none"
    >
      {/* Background Sculptural Relief */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#F0ECE5]">
        {/* Layer 1: Base sculpture with smooth subtle parallax and natural scale */}
        <div
          className="absolute inset-x-0 bottom-0 w-full h-[38vh] sm:h-[44vh] md:h-[48vh] flex justify-center items-end will-change-transform"
          style={{
            transform:
              "translate3d(var(--shift-x, 0px), var(--shift-y, 0px), 0) scale(1)",
            transition: "transform 0.15s ease-out",
          }}
        >
          <img
            src={getAssetPath("/assets/footer-shahnameh-relief.webp")}
            alt="در میان مه - نقش‌برجسته شاهنامه"
            width={1152}
            height={480}
            loading="lazy"
            decoding="async"
            className="w-full h-full max-w-5xl lg:max-w-6xl object-contain object-bottom opacity-85 filter contrast-[1.02] brightness-[0.98]"
          />
        </div>

        {/* Layer 2: Interactive Spotlight Layer */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none hidden sm:block will-change-transform"
          style={{
            maskImage:
              "radial-gradient(circle 320px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle 320px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 70%)",
          }}
        >
          <div
            className="absolute inset-x-0 bottom-0 w-full h-[38vh] sm:h-[44vh] md:h-[48vh] flex justify-center items-end"
            style={{
              transform:
                "translate3d(calc(var(--shift-x, 0px) * 1.1), calc(var(--shift-y, 0px) * 1.1), 0) scale(1.005)",
              transition: "transform 0.15s ease-out",
            }}
          >
            <img
              src={getAssetPath("/assets/footer-shahnameh-relief.webp")}
              alt="در میان مه - کانون نور نقش‌برجسته"
              width={1152}
              height={480}
              loading="lazy"
              decoding="async"
              className="w-full h-full max-w-5xl lg:max-w-6xl object-contain object-bottom opacity-100 filter contrast-115 brightness-105"
            />
          </div>
        </div>

        {/* Subtle top blend gradient: seamless fade from solid #F0ECE5 to transparent */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#F0ECE5] via-[#F0ECE5]/70 to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer */}
      <div className="h-2 sm:h-4" />

      {/* Center Outro Block (Centered in Upper Half) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 pt-2 sm:pt-4">
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#9A7444] block font-semibold">
          نقطه اوج
        </span>

        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#141414] tracking-tight leading-none drop-shadow-sm">
          در میان مه
        </h2>

        <p className="text-xs sm:text-sm text-zinc-600 tracking-[0.18em] sm:tracking-[0.25em] max-w-lg mx-auto font-medium leading-relaxed">
          {EXPERIENCE_DATA.hero.dates} • {EXPERIENCE_DATA.hero.location}
        </p>

        <div className="pt-2 flex flex-col items-center gap-3">
          <span className="text-[11px] sm:text-xs text-zinc-500 tracking-wider font-medium">
            مهلت خرید بلیت تا روز پیش از رویداد
          </span>
          <a
            href="#reservations"
            aria-label="رفتن به بخش رزرو صندلی و مشاهده بلیت‌ها"
            onClick={(e) => handleJump(e, "reservations")}
            className="group inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-[#181818] text-white text-xs font-bold tracking-wider hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>رزرو صندلی</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Flexible spacer between text and bottom bar */}
      <div className="flex-1 min-h-[60px]" />

      {/* Bottom Colophon & Legal Grid */}
      <div className="relative z-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider shrink-0 w-full">
        {/* Right (Start in RTL) */}
        <div className="font-mono text-[11px] sm:text-xs tracking-wider text-zinc-700 font-semibold">
          FRONTCHAPTER — در میان مه
        </div>

        {/* Center */}
        <div>
          <a
            href="#hero"
            onClick={(e) => handleJump(e, "hero")}
            className="group inline-flex items-center gap-1.5 text-xs text-zinc-700 hover:text-black transition-colors font-medium"
          >
            <span>بازگشت به بالا</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>

        {/* Left (End in RTL) */}
        <div className="text-[11px] sm:text-xs tracking-wider text-zinc-700">
          © ۱۴۰۵ فرانتچپتر. کلیه حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
