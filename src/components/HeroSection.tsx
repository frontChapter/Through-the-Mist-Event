"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll animation for pinned container effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Perspective exit fade & depth scale
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.95],
    [1, 0.8, 0],
  );
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      id="hero"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 bg-[#0a0a0a] text-white overflow-hidden select-none text-right"
    >
      {/* Background Macro Organic Video / Canvas Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        <motion.video
          style={{ scale: videoScale }}
          src={getAssetPath(EXPERIENCE_DATA.hero.videoUrl)}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1]"
        />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Top Sides Metadata: Date (Right in RTL) & Location (Left in RTL) */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs tracking-wider text-zinc-300 pt-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-[11px] text-zinc-400">تاریخ برگزاری</span>
          <span className="font-semibold text-white">پنجشنبه، ۲ مهر ۱۴۰۵</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col text-left"
        >
          <span className="text-[11px] text-zinc-400">محل برگزاری</span>
          <span className="font-semibold text-white">
            تهران • کارخانه نوآوری آزادی (زاویه)
          </span>
        </motion.div>
      </div>

      {/* Center Hero Block: Logotype "DESIGN X HAND" + Title */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
        className="relative z-10 my-auto flex flex-col items-center text-center max-w-5xl mx-auto py-16"
      >
        {/* DESIGN X HAND Logotype */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-xs sm:text-sm tracking-[0.35em] text-[#c5a880] uppercase block font-semibold">
            رویداد حضوری فرانت‌چپتر
          </span>
        </motion.div>

        {/* Main Romantic Editorial Title in Dana */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="space-y-3"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-zinc-300 font-light tracking-normal">
            یافتن مسیر در روزهای پر از ابهام
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            در میان مِه
          </h1>
        </motion.div>

        {/* Subtitle / Descriptive Lead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 max-w-xl text-zinc-300 font-light text-sm sm:text-base leading-relaxed tracking-normal"
        >
          توان قدم برداشتن در دورانی که به نظر میرسد هیچ چیزی پیش رو نیست
        </motion.p>
      </motion.div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 w-full flex justify-center pb-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] tracking-wider text-zinc-400">
            برای مشاهده به پایین اسکرول کنید
          </span>
          <span className="w-[1px] h-6 bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
