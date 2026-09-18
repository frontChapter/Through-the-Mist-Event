'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/data/experience-data';

export default function TicketsSection() {
  return (
    <section
      id="reservations"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#070707] text-white flex flex-col justify-center py-20 px-6 sm:px-12 border-t border-white/10 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 shrink-0">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-wider text-[#c5a880] bg-[#c5a880]/10 px-4 py-1.5 rounded-full border border-[#c5a880]/20 font-medium">
            <span>{EXPERIENCE_DATA.hero.deadline}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            سطح دسترسی خود را انتخاب کنید
          </h2>

          <p className="font-light text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            ظرفیت کارگاه جهت تضمین نظارت و هدایت انفرادی دکتر آپا به شدت محدود است.
          </p>
        </div>

        {/* Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch max-w-5xl mx-auto w-full">
          {EXPERIENCE_DATA.passes.map((pass, index) => {
            const isInnerCircle = pass.id === 'inner-circle';

            return (
              <motion.div
                key={pass.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 overflow-hidden min-h-[460px] ${
                  isInnerCircle
                    ? 'bg-[#12110e] border-[#c5a880]/40 shadow-[0_20px_50px_rgba(197,168,128,0.15)]'
                    : 'bg-[#101010] border-white/15 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Subtle Card Background Texture */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay"
                  style={{
                    backgroundImage: `url('/assets/tickets-card-texture.png')`,
                  }}
                />

                {/* Top Section */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] tracking-wider text-[#c5a880] font-semibold">
                      {pass.category}
                    </span>
                    {pass.isSoldOut && (
                      <span className="text-[10px] tracking-wider px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 font-medium">
                        تکمیل ظرفیت
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl text-white font-bold">
                      {pass.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-zinc-400 font-light leading-relaxed">
                      {pass.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-3 border-y border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {pass.price}
                    </span>
                    <span className="text-xs tracking-wider text-zinc-400 font-medium">
                      {pass.currency} / هر دندان‌پزشک
                    </span>
                  </div>

                  {/* Feature Inclusions */}
                  <div className="space-y-2.5 pt-1">
                    {pass.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                        <svg
                          className="w-4 h-4 text-[#c5a880] mt-0.5 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="relative z-10 pt-4 mt-auto">
                  {pass.isSoldOut ? (
                    <button
                      disabled
                      type="button"
                      className="w-full py-3 rounded-full border border-white/20 bg-white/5 text-zinc-400 text-xs tracking-wider cursor-not-allowed text-center font-medium"
                    >
                      لیست انتظار • تکمیل ظرفیت
                    </button>
                  ) : (
                    <a
                      href="#reservations"
                      className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs tracking-wider font-bold transition-all duration-300 shadow-xl text-center"
                    >
                      <span>{pass.ctaText}</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
