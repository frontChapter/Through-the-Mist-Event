'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/data/experience-data';

export default function AgendaSection() {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2'>('day1');

  const currentData = selectedDay === 'day1' ? EXPERIENCE_DATA.dayOne : EXPERIENCE_DATA.dayTwo;
  const castImage =
    selectedDay === 'day1'
      ? 'https://framerusercontent.com/images/1M8usMCWBnKXUc0FRJ7wtG2liTE.jpg'
      : 'https://framerusercontent.com/images/jdxv5yOFrXxmdUzwBSpsAnTSr9s.jpg';

  return (
    <section
      id="agenda"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center pt-20 pb-8 px-6 sm:px-12 border-t border-white/10 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                ۰۲ / برنامه و سرفصل‌ها
              </span>
              <span className="w-6 h-[1px] bg-white/20" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {currentData.title}
            </h2>
            <p className="text-xs tracking-wider text-[#c5a880] font-medium">
              {currentData.date} • {currentData.time}
            </p>
          </div>

          {/* Day Switcher Tabs */}
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedDay('day1')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 font-medium ${
                selectedDay === 'day1'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              روز اول
            </button>
            <button
              type="button"
              onClick={() => setSelectedDay('day2')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 font-medium ${
                selectedDay === 'day2'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              روز دوم
            </button>
          </div>
        </div>

        {/* Pinned Macro Dental Cast Image + Scrolling Curriculum Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 items-center flex-1 min-h-0">
          {/* Dental Model Cast Macro */}
          <div className="lg:col-span-5 h-full max-h-[55vh] flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative aspect-[4/5] w-full max-w-sm h-full group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={castImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  src={castImage}
                  alt="مدل گچی تراش‌خورده"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-zinc-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-medium">
                <span>مدل تراش‌خورده با دست</span>
                <span>نمای ماکرو</span>
              </div>
            </div>
          </div>

          {/* Numbered Curriculum Table with Isolated Inner-Scroll */}
          <div className="lg:col-span-7 flex flex-col h-full max-h-[55vh] min-h-0">
            <div className="text-[11px] tracking-wider text-zinc-400 pb-2 border-b border-white/10 flex justify-between shrink-0 font-medium">
              <span>ترتیب</span>
              <span>عنوان ماژول / روش بالینی</span>
            </div>

            {/* Scrollable Container with data-inner-scroll="true" */}
            <div
              data-inner-scroll="true"
              className="divide-y divide-white/[0.08] overflow-y-auto pl-3 space-y-1 select-text"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
            >
              {currentData.curriculum.map((item) => (
                <div
                  key={item.number}
                  className="py-3 flex items-baseline justify-between gap-6 group hover:bg-white/[0.02] px-2 rounded-xl transition-colors duration-150"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="text-xl sm:text-2xl font-black text-zinc-500 group-hover:text-white transition-colors w-8">
                      {item.number}
                    </span>
                    <span className="text-sm sm:text-base font-normal text-zinc-200 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] tracking-wider px-3 py-1 rounded-full border shrink-0 font-medium ${
                      item.type === 'کار عملی'
                        ? 'bg-[#c5a880]/20 text-[#e2ceb5] border-[#c5a880]/40 font-bold'
                        : 'bg-white/5 text-zinc-400 border-white/10'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
