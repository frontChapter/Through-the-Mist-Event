"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkylineSection() {
  return (
    <section
      id="skyline"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* B&W Skyline Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/assets/skyline-tehran.webp"
          alt="خط افق تهران"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Atmospheric Clouds */}
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 1.5 }}
        src="/assets/hospitality-catering.png"
        alt="Clouds Left"
        className="absolute top-1/4 -right-20 w-1/2 opacity-35 object-contain pointer-events-none mix-blend-screen"
      />
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5 }}
        src="/assets/hospitality-reception.png"
        alt="Clouds Right"
        className="absolute bottom-10 -left-20 w-3/5 opacity-40 object-contain pointer-events-none mix-blend-screen"
      />

      {/* Central Architectural Manifesto Quote */}
      <div className="relative z-10 max-w-4xl px-8 text-center">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-light leading-relaxed">
          دیدن راه،{" "}
          <span className="font-bold underline decoration-white/40 underline-offset-8">
            ممکن نیست
          </span>
          <br className="hidden sm:inline" /> فقط مه است و ما،{" "}
          <span className="font-bold underline decoration-white/40 underline-offset-8">
            وسط آن
          </span>
          .
        </p>
      </div>

      {/* Vignette Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
    </section>
  );
}
