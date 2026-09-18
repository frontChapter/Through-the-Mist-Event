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
      dir="ltr"
      className="relative h-screen w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center pt-20 pb-8 px-6 sm:px-12 border-t border-white/10 overflow-hidden text-left"
    >
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                02 / Agenda
              </span>
              <span className="w-6 h-[1px] bg-white/20" />
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white tracking-tight">
              {currentData.title}
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#c5a880]">
              {currentData.date} • {currentData.time}
            </p>
          </div>

          {/* Day Switcher Tabs */}
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedDay('day1')}
              className={`px-5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedDay === 'day1'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Day One
            </button>
            <button
              type="button"
              onClick={() => setSelectedDay('day2')}
              className={`px-5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedDay === 'day2'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Day Two
            </button>
          </div>
        </div>

        {/* Pinned Macro Dental Cast Image + Scrolling Curriculum Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 items-center flex-1 min-h-0">
          {/* Left Column: Macro Dental Cast Image */}
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
                  alt="Dental Model Cast Macro"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <span>Hand-Sculpted Model</span>
                <span>Macro View</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Curriculum Table with Isolated Inner-Scroll */}
          <div className="lg:col-span-7 flex flex-col h-full max-h-[55vh] min-h-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 pb-2 border-b border-white/10 flex justify-between shrink-0">
              <span>Sequence</span>
              <span>Module / Method</span>
            </div>

            {/* Scrollable Container with data-inner-scroll="true" */}
            <div
              data-inner-scroll="true"
              className="divide-y divide-white/[0.08] overflow-y-auto pr-3 space-y-1 select-text"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
            >
              {currentData.curriculum.map((item) => (
                <div
                  key={item.number}
                  className="py-3 flex items-baseline justify-between gap-6 group hover:bg-white/[0.02] px-2 rounded-xl transition-colors duration-150"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-serif italic text-xl sm:text-2xl text-zinc-500 group-hover:text-white transition-colors w-7">
                      {item.number}
                    </span>
                    <span className="font-sans text-sm sm:text-base font-light text-zinc-200 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border shrink-0 ${
                      item.type === 'Hands-On'
                        ? 'bg-[#c5a880]/15 text-[#c5a880] border-[#c5a880]/30 font-medium'
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
