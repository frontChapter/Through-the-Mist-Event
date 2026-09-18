'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience-data';

const HOTEL_IMAGES: Record<string, string> = {
  'The Ned NoMad': 'https://framerusercontent.com/images/tmxxQx1ikX10NldKAMomonXZRBo.jpg',
  'The New York EDITION': 'https://framerusercontent.com/images/X7JuNGJcs89yORUrw6mffKhX5pI.jpg',
  'The Marmara Park Avenue': 'https://framerusercontent.com/images/IEW5cXSsOyiyaHzWWk0WoAVSO28.jpg',
  'The Langham': 'https://framerusercontent.com/images/hPzqLQsmss4e2xxh3keFhaXY.jpg',
};

export default function LocationSection() {
  return (
    <section
      id="location"
      data-theme="dark"
      dir="ltr"
      className="relative h-screen w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center py-20 px-6 sm:px-12 border-t border-white/10 overflow-hidden text-left"
    >
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                05 / Location &amp; Stays
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
            <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Manhattan, New York City
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 space-y-0.5 text-right">
            <p className="text-white font-medium">{EXPERIENCE_DATA.location.venue}</p>
            <p>{EXPERIENCE_DATA.location.address}</p>
          </div>
        </div>

        {/* Custom Dark Styled Map Container */}
        <div className="rounded-3xl overflow-hidden border border-white/10 relative h-[180px] sm:h-[220px] bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] shrink-0">
          <iframe
            title="NYU College of Dentistry Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3643033877965!2d-73.98064272346914!3d40.73860087138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25908e330543f%3A0x6bfe76e27b6136d8!2sNYU%20College%20of%20Dentistry!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute top-4 left-4 max-w-xs bg-black/85 backdrop-blur-xl border border-white/15 p-3.5 rounded-xl shadow-2xl space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a880] block">
              Host Clinic &amp; Suites
            </span>
            <h4 className="font-serif italic text-base text-white">NYU College of Dentistry</h4>
            <p className="font-sans text-[11px] text-zinc-400">
              Gramercy / Kips Bay • Manhattan
            </p>
          </div>
        </div>

        {/* Recommended Hotels Grid */}
        <div className="space-y-3 shrink-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span>Curated Accommodations</span>
            <span>Gramercy • NoMad • Flatiron</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERIENCE_DATA.location.hotels.map((hotel) => {
              const photo = HOTEL_IMAGES[hotel.name] || 'https://framerusercontent.com/images/tmxxQx1ikX10NldKAMomonXZRBo.jpg';

              return (
                <div
                  key={hotel.name}
                  className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col group hover:border-white/30 transition-all duration-200"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={photo}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-105"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest text-zinc-300 border border-white/10">
                      {hotel.area}
                    </div>
                  </div>

                  <div className="p-3 flex flex-col justify-between flex-1 space-y-2">
                    <h4 className="font-serif italic text-sm text-white group-hover:text-zinc-200 transition-colors truncate">
                      {hotel.name}
                    </h4>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 group-hover:text-white flex items-center justify-between pt-1 border-t border-white/5 transition-colors"
                    >
                      <span>Map link</span>
                      <svg
                        className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
