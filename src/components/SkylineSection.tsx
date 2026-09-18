'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SkylineSection() {
  return (
    <section
      id="skyline"
      data-theme="dark"
      dir="ltr"
      className="relative h-screen w-full min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center overflow-hidden text-left"
    >
      {/* B&W Skyline Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="https://framerusercontent.com/images/d4BIIWbUg28oBzQsJxxuvVqWg.png"
          alt="Manhattan Skyline"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Atmospheric Clouds */}
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 1.5 }}
        src="https://framerusercontent.com/images/kwUU1rBWv681HtZLrg68CeCE.png"
        alt="Clouds Left"
        className="absolute top-1/4 -left-20 w-1/2 opacity-35 object-contain pointer-events-none mix-blend-screen"
      />
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5 }}
        src="https://framerusercontent.com/images/v3RCF0bz9htqXJTGrH2bP6CS2FY.png"
        alt="Clouds Right"
        className="absolute bottom-10 -right-20 w-3/5 opacity-40 object-contain pointer-events-none mix-blend-screen"
      />

      {/* Central Architectural Manifesto Quote */}
      <div className="relative z-10 max-w-4xl px-8 text-center space-y-6">
        <p className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-snug tracking-tight">
          The sculptor sees what is <em className="italic font-normal underline decoration-white/30 underline-offset-8">hidden</em>. The architect draws up the plans. The artisan shapes with intention. The engineer ensures that it <em className="italic font-normal underline decoration-white/30 underline-offset-8">stands</em>.
        </p>

        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light tracking-wide">
          Here we bring them all to smile design.
        </p>
      </div>

      {/* Vignette Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
    </section>
  );
}
