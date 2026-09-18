'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MethodIntroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 1.02]);

  return (
    <section
      ref={containerRef}
      id="two-days"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen px-6 sm:px-12 bg-[#090909] text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto space-y-6"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 block font-medium">
          مسترکلاس جامع بالینی
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          دو روز. دو بیمار. یک متدولوژی.
        </h2>

        <p className="text-base sm:text-xl text-[#c5a880] font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          یک تجربه عمیق و عملی در اجرای صفر تا صد پروتکل طراحی لبخند در کنار دکتر مایکل آپا.
        </p>

        <div className="pt-6 flex justify-center">
          <span className="w-16 h-[1px] bg-[#c5a880]/40" />
        </div>
      </motion.div>
    </section>
  );
}
