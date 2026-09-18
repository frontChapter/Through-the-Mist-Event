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
      dir="ltr"
      className="relative h-screen w-full min-h-screen px-6 sm:px-12 bg-[#090909] text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto space-y-6"
      >
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-400 block">
          Clinical Masterclass
        </span>

        <h2 className="font-serif italic text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight">
          Two days. Two patients. One method.
        </h2>

        <p className="font-serif italic text-base sm:text-xl text-[#c5a880] font-light tracking-wide max-w-xl mx-auto">
          An intimate, hands-on immersion into the full smile design protocol alongside Dr. Michael Apa.
        </p>

        <div className="pt-6 flex justify-center">
          <span className="w-12 h-[1px] bg-[#c5a880]/40" />
        </div>
      </motion.div>
    </section>
  );
}
