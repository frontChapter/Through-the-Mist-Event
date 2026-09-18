'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience-data';

export default function EventFooter() {
  const handleJump = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('fullpage-jump-to', { detail: { targetId } })
    );
  };

  return (
    <footer
      id="footer"
      data-theme="dark"
      dir="ltr"
      className="relative h-screen w-full min-h-screen flex flex-col justify-between pt-20 pb-8 px-6 sm:px-12 bg-[#0a0a0a] text-white overflow-hidden text-left"
    >
      {/* Background Renaissance Angels Video Climax */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        <video
          src="https://framerusercontent.com/assets/PRufuH4Vl5QnSNo9x0LrwWeOgBU.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.5] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Top Spacer */}
      <div className="h-6" />

      {/* Center Outro Block */}
      <div className="relative z-10 my-auto text-center max-w-4xl mx-auto space-y-6">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#c5a880] block">
          The Climax
        </span>

        <h2 className="font-serif italic text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight leading-[0.9]">
          Design × Hand
        </h2>

        <p className="font-mono text-xs sm:text-sm text-zinc-300 uppercase tracking-widest max-w-md mx-auto">
          {EXPERIENCE_DATA.hero.dates} • {EXPERIENCE_DATA.hero.location}
        </p>

        <div className="pt-2">
          <a
            href="#reservations"
            onClick={(e) => handleJump(e, 'reservations')}
            className="group inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 shadow-2xl"
          >
            <span>Reserve Now</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Legal & Colophon Grid */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-widest text-zinc-400 shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">© {new Date().getFullYear()} Design x Hand</span>
          <span>•</span>
          <span>Dr. Michael Apa</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            onClick={(e) => handleJump(e, 'hero')}
            className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <svg
              className="w-3 h-3 transition-transform group-hover:-translate-y-0.5"
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
          <span className="text-zinc-600">/</span>
          <span>New York City • Dubai • Los Angeles</span>
        </div>
      </div>
    </footer>
  );
}
