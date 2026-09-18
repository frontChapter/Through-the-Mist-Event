'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience-data';

export default function MissionSection() {
  return (
    <section
      id="mission"
      data-theme="light"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#F7F5F0] text-[#1a1a1a] flex flex-col justify-center py-20 px-6 sm:px-12 transition-colors duration-500 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-7xl relative z-10 text-right h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Narrative + Three Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/60">
                ۰۱ / ماموریت رویداد
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            {/* Main Narrative Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.3] text-[#111111] tracking-tight">
              &ldquo;{EXPERIENCE_DATA.mission.quote}&rdquo;
            </h2>

            {/* Lead and Philosophy text */}
            <div className="space-y-3 text-xs sm:text-sm text-black/75 leading-relaxed font-normal max-w-xl">
              <p className="font-medium text-black/90">
                {EXPERIENCE_DATA.mission.lead}
              </p>
              <p className="text-black/70 leading-relaxed">
                {EXPERIENCE_DATA.mission.body}
              </p>
            </div>

            {/* Three Pillars */}
            <div className="pt-4 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {EXPERIENCE_DATA.mission.pillars.map((pillar) => (
                <div key={pillar.num} className="space-y-1">
                  <span className="text-2xl font-black text-[#1a1a1a] block">
                    {pillar.num}
                  </span>
                  <h3 className="text-xs font-bold text-black/90 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-black/65 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sculpture Video Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-full max-h-[55vh]">
            <div className="relative w-full max-w-md aspect-[3/4] h-full max-h-[55vh] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-black/5 bg-[#EAE6DF]">
              <video
                src="https://framerusercontent.com/assets/y1uCxXHBZ8vhZO8qlT5Z3nvVxU.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-black/80 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 font-medium">
                <span>فلسفه طراحی آپا</span>
                <span>از فلورانس تا نیویورک</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
