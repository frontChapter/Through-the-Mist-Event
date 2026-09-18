'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '@/data/experience-data';

gsap.registerPlugin(ScrollTrigger);

export default function AgendaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedStageRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Scroll to designated phase on tab click
  const handleTabClick = useCallback((targetDay: 'day1' | 'day2') => {
    setActiveDay(targetDay);
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const containerTop = currentScroll + rect.top;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;

    // Target scroll position: 15% for Day 1, 75% for Day 2
    const targetScroll =
      targetDay === 'day1'
        ? containerTop + totalHeight * 0.15
        : containerTop + totalHeight * 0.75;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { duration: 1.0 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: 'agenda-pin',
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinnedStageRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);

          // Threshold for switching active day around 48%
          if (p >= 0.48) {
            setActiveDay('day2');
          } else {
            setActiveDay('day1');
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const currentData = activeDay === 'day1' ? EXPERIENCE_DATA.dayOne : EXPERIENCE_DATA.dayTwo;
  const currentImage =
    activeDay === 'day1' ? '/assets/agenda-day-1.jpg' : '/assets/agenda-day-2.jpg';

  return (
    <section
      ref={containerRef}
      id="agenda"
      data-theme="dark"
      dir="rtl"
      className="relative w-full h-[300vh] bg-[#070707] text-white select-none"
    >
      {/* Pinned Viewport Container (Fixed to viewport during 300vh scroll) */}
      <div
        ref={pinnedStageRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden"
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
          {/* Top Bar: Section Label, Day Tabs, and Scroll Phase Indicator */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10 shrink-0">
            {/* Tag & Heading Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                ۰۲ / برنامه و سرفصل‌ها
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs tracking-wider text-zinc-400 font-mono hidden sm:inline">
                {activeDay === 'day1' ? 'PHASE ۰۱ — ماک‌آپ بالینی' : 'PHASE ۰۲ — درمان ترکیبی'}
              </span>
            </div>

            {/* Interactive Day Switcher Tabs */}
            <div className="flex items-center gap-4">
              {/* Micro Progress Bar */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-zinc-500 font-mono">
                  {Math.round(scrollProgress * 100)}%
                </span>
                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c5a880] transition-all duration-150 ease-out"
                    style={{ width: `${Math.max(4, scrollProgress * 100)}%` }}
                  />
                </div>
              </div>

              {/* Day Switcher Capsule */}
              <div className="flex items-center bg-white/[0.04] p-1 rounded-full border border-white/10 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => handleTabClick('day1')}
                  className={`relative px-5 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 font-medium ${
                    activeDay === 'day1'
                      ? 'text-black font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeDay === 'day1' && (
                    <motion.div
                      layoutId="active-day-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_15px_rgba(255,255,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">روز اول</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTabClick('day2')}
                  className={`relative px-5 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 font-medium ${
                    activeDay === 'day2'
                      ? 'text-black font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeDay === 'day2' && (
                    <motion.div
                      layoutId="active-day-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_15px_rgba(255,255,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">روز دوم</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Stage: Dynamic Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-6 items-center flex-1 min-h-0">
            {/* Right Column: Title, Schedule Specs, and Sequential Curriculum Matrix */}
            <div className="lg:col-span-7 flex flex-col h-full max-h-[64vh] min-h-0 justify-between">
              {/* Dynamic Header Block with AnimatePresence */}
              <div className="space-y-3 shrink-0 pb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay + '-heading'}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-2"
                  >
                    {/* Time and Date Badge */}
                    <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider font-mono">
                      <span className="text-[#c5a880] font-semibold bg-[#c5a880]/10 border border-[#c5a880]/20 px-3 py-1 rounded-full">
                        {currentData.time}
                      </span>
                      <span className="text-zinc-400">
                        {currentData.date}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
                      {currentData.title}
                    </h2>

                    {/* Overview Narrative */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal max-w-2xl text-balance">
                      {currentData.overview}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Curriculum List Header */}
              <div className="text-[11px] tracking-wider text-zinc-500 pb-2 border-b border-white/10 flex justify-between shrink-0 font-medium">
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="w-8">شماره</span>
                  <span>سرفصل و موضوع کارگاه</span>
                </div>
                <span>نوع بخش</span>
              </div>

              {/* Scrollable Curriculum Rows with Ultra-Fine Borders */}
              <div
                data-inner-scroll="true"
                className="divide-y divide-white/[0.08] overflow-y-auto pl-2 pr-1 space-y-0.5 select-text flex-1 min-h-0"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,255,255,0.18) transparent',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay + '-list'}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="divide-y divide-white/[0.08]"
                  >
                    {currentData.curriculum.map((item) => (
                      <div
                        key={item.number + '-' + item.title}
                        className="py-3 px-2.5 flex items-baseline justify-between gap-4 group hover:bg-white/[0.03] rounded-xl transition-all duration-150"
                      >
                        {/* Number & Title */}
                        <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                          <span className="text-lg sm:text-xl font-black text-zinc-500 group-hover:text-[#c5a880] transition-colors w-8 shrink-0 font-mono">
                            {item.number}
                          </span>
                          <span className="text-xs sm:text-sm font-normal text-zinc-200 group-hover:text-white transition-colors leading-relaxed truncate sm:text-clip">
                            {item.title}
                          </span>
                        </div>

                        {/* Session Type Badge */}
                        <span
                          className={`text-[10px] tracking-wider px-3 py-0.5 rounded-full border shrink-0 font-medium ${
                            item.type === 'کار عملی'
                              ? 'bg-[#c5a880]/15 text-[#f1e0cf] border-[#c5a880]/35 font-semibold'
                              : item.type === 'تحویل نهایی'
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                              : 'bg-white/5 text-zinc-400 border-white/10'
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Left Column: Masked Luxury Macro Dental Cast Image with Ambient Light */}
            <div className="lg:col-span-5 h-full max-h-[64vh] flex items-center justify-center relative">
              <div className="relative aspect-[4/5] w-full max-w-md h-full max-h-[58vh] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.85)] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={currentImage}
                      alt={activeDay === 'day1' ? 'مدل ماک‌آپ روز اول' : 'مدل تراش روز دوم'}
                      className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Glass Badge Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-zinc-300 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                    {activeDay === 'day1' ? 'ماک‌آپ مستقیم بالینی' : 'پروتکل سمان و تراش'}
                  </span>
                  <span className="text-zinc-400 font-mono text-[10px]">
                    {activeDay === 'day1' ? 'DAY ۰۱ — MACRO' : 'DAY ۰۲ — CLINICAL'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Caption / Scroll Indicator */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-zinc-500 text-[11px] font-mono shrink-0">
            <span>DESIGN X HAND — CURRICULUM</span>
            <span className="flex items-center gap-2 text-zinc-400">
              <span>با اسکرول ادامه دهید</span>
              <span className="animate-bounce">↓</span>
            </span>
            <span>۲ روز • ۱۶ امتیاز بازآموزی ADA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
