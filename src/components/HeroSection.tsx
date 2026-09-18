'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/data/experience-data';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll animation for pinned container effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Perspective exit fade & depth scale
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 0.95], [1, 0.8, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      id="hero"
      data-theme="dark"
      dir="ltr"
      className="relative h-screen w-full min-h-screen flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 bg-[#0a0a0a] text-white overflow-hidden select-none text-left"
    >
      {/* Background Macro Organic Video / Canvas Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        <motion.video
          style={{ scale: videoScale }}
          src={EXPERIENCE_DATA.hero.videoUrl}
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

      {/* Top Sides Metadata: Date (Left) & Location (Right) */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono tracking-widest uppercase text-zinc-300 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-[10px] text-zinc-400">Date</span>
          <span className="font-medium text-white">{EXPERIENCE_DATA.hero.dates}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col text-right"
        >
          <span className="text-[10px] text-zinc-400">Location</span>
          <span className="font-medium text-white">{EXPERIENCE_DATA.hero.location}</span>
        </motion.div>
      </div>

      {/* Center Hero Block: Logotype "DESIGN X HAND" + Romantic Serif "Hello, Dr. Michael Apa" */}
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
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-zinc-400 uppercase block">
            DESIGN × HAND
          </span>
        </motion.div>

        {/* Main Romantic Serif Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="space-y-4"
        >
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-zinc-300 font-light tracking-tight">
            Hello,
          </p>
          <h1 className="font-serif italic text-6xl sm:text-8xl md:text-9xl font-normal text-white tracking-tight leading-[0.88] drop-shadow-2xl">
            Dr. Michael Apa
          </h1>
        </motion.div>

        {/* Subtitle / Descriptive Lead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 max-w-xl text-zinc-400 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide"
        >
          {EXPERIENCE_DATA.hero.subtitle}
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
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-400">
            Scroll to Explore
          </span>
          <span className="w-[1px] h-6 bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
