"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getAssetPath } from "@/utils/basePath";

export default function MethodIntroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 0.95],
    [0, 1, 1, 0],
  );
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 1.02]);

  const handleReserveClick = () => {
    window.dispatchEvent(
      new CustomEvent("fullpage-jump-to", {
        detail: { targetId: "reservations" },
      }),
    );
  };

  return (
    <section
      ref={containerRef}
      id="two-days"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-black text-white flex flex-col justify-between items-center text-center px-6 py-16 sm:py-20 overflow-hidden select-none"
    >
      {/* Background Video Layer with Mission Sculpture Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isInView ? (
          <video
            src={getAssetPath("/assets/dar-miyan-e-meh-sculpture-video.mp4")}
            poster={getAssetPath("/assets/dar-miyan-e-meh-sculpture-poster.webp")}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover filter brightness-[0.48] contrast-115 saturate-80 scale-105"
          />
        ) : (
          <img
            src={getAssetPath("/assets/dar-miyan-e-meh-sculpture-poster.webp")}
            alt="Sculpture poster"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-[0.48] contrast-115 saturate-80 scale-105"
          />
        )}
        {/* Cinematic Vignette Overlay to ensure text readability while showing the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_50%,transparent_15%,rgba(0,0,0,0.85)_95%)]" />
      </div>

      {/* Top Spacer */}
      <div className="w-full pt-4 shrink-0 relative z-10" />

      {/* Center Cinematic Typography Block */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 my-auto px-4"
      >
        {/* Main Centered Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-snug sm:leading-tight lg:leading-[1.3] text-balance text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          بحران در انزوا حل نمی‌شود
          <br />
          مسیر از دل گفت‌وگو پیدا می‌شود
        </h2>

        {/* Divider / Delicate Minimal Icon */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xs opacity-75">
          <span className="h-[1px] flex-1 bg-gradient-to-l from-white/30 to-transparent" />
          <div className="shrink-0 text-zinc-300">
            <svg
              width="54"
              height="18"
              viewBox="0 0 72 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-zinc-300 drop-shadow"
            >
              <path
                d="M36 3C34.6 1.6 32.8 1.2 31.4 2.5C30 3.8 30.9 6.2 32.8 7.2C34.7 8.2 36 10.8 36 12.5C36 10.8 37.3 8.2 39.2 7.2C41.1 6.2 42 3.8 40.6 2.5C39.2 1.2 37.4 1.6 36 3Z"
                fill="currentColor"
              />
              <circle cx="36" cy="1.8" r="1.1" fill="currentColor" />
              <path
                d="M30.5 7.2C25 5.8 19.5 7.6 14 12.2C11.3 14.5 7.7 15 5 12.2C2.7 9.8 3.6 6.6 6.3 5.7C9.9 4.3 15.8 5.2 21.2 8"
                stroke="currentColor"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
              <circle cx="2.4" cy="12.2" r="1" fill="currentColor" />
              <path
                d="M41.5 7.2C47 5.8 52.5 7.6 58 12.2C60.7 14.5 64.3 15 67 12.2C69.3 9.8 68.4 6.6 65.7 5.7C62.1 4.3 56.2 5.2 50.8 8"
                stroke="currentColor"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
              <circle cx="69.6" cy="12.2" r="1" fill="currentColor" />
              <circle cx="36" cy="17.5" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        {/* Subtitle Under Divider */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400/90 font-medium tracking-wide text-center max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-balance">
          دورهمی برای فکر کردن گروهی درمورد وضعیت اکنون و گپ‌وگفت درباره‌ی
          مسیرهای پیش رو
        </p>
      </motion.div>

      {/* Bottom CTA & Reservation Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center pb-2 shrink-0">
        <span className="text-[11px] sm:text-xs tracking-wider text-zinc-300 font-sans font-medium mb-2 drop-shadow">
          ظرفیت محدود به ۵۰ نفر
        </span>
        <button
          type="button"
          onClick={handleReserveClick}
          className="bg-white text-black hover:bg-[#e4e2de] text-xs sm:text-sm font-bold px-9 py-3.5 tracking-wider transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_35px_rgba(255,255,255,0.3)] rounded-none cursor-pointer font-sans"
        >
          رزرو صندلی
        </button>
      </div>
    </section>
  );
}
