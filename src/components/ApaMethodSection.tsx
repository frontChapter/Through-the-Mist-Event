'use client';

import React from 'react';

export default function ApaMethodSection() {
  return (
    <section
      id="method"
      data-theme="light"
      dir="ltr"
      className="relative h-screen w-full min-h-screen bg-[#FAF8F5] text-[#1a1a1a] flex flex-col justify-center py-20 px-6 sm:px-12 border-t border-black/5 overflow-hidden text-left"
    >
      <div className="container mx-auto max-w-7xl relative z-10 text-left h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Vertical Monochrome Portrait of Dr. Michael Apa */}
          <div className="lg:col-span-5 flex justify-center h-full max-h-[58vh]">
            <div className="relative w-full max-w-sm aspect-[3/4] h-full max-h-[58vh] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-black/10 bg-[#EFECE6] group">
              <img
                src="/7umm.png"
                alt="Dr. Michael Apa Vertical Monochrome Portrait"
                className="w-full h-full object-cover object-[48%_center] filter contrast-[1.08] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
                <span className="font-semibold tracking-wider">Dr. Michael Apa</span>
                <span className="text-white/80">Founder &amp; Sculptor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Method Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/50">
                04 / The Method
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-[#111111] leading-tight tracking-tight">
              &ldquo;Beauty is not added. It is uncovered.&rdquo;
            </h2>

            <div className="space-y-4 font-sans font-light text-xs sm:text-sm text-black/75 leading-relaxed max-w-xl">
              <p className="font-normal text-black/90">
                For over two decades, Dr. Michael Apa has pioneered a bespoke approach to aesthetic dentistry, treating teeth not as isolated white stones, but as living extensions of the human face.
              </p>
              <p className="text-black/65">
                Design by Hand exposes the nuance behind every clinical decision: how subtle adjustments in cervical contour alter the eye&apos;s perception of the lip line, and how proportion dictating structure turns science into high art.
              </p>
            </div>

            {/* Dr. Apa Signature */}
            <div className="pt-1">
              <img
                src="https://framerusercontent.com/images/oeEkBPY3x7o5P5DOQh04YDRFh2E.png"
                alt="Dr. Michael Apa Signature"
                className="h-9 w-auto opacity-75 object-contain"
              />
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center gap-8 font-mono text-xs text-black/60 uppercase tracking-wider">
              <div>
                <span className="font-serif italic text-2xl text-black block">20+</span>
                <span>Years Mastered</span>
              </div>
              <div className="w-[1px] h-8 bg-black/15" />
              <div>
                <span className="font-serif italic text-2xl text-black block">10,000+</span>
                <span>Cases Designed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
