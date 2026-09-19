"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function TicketsSection() {
  return (
    <section
      id="reservations"
      data-theme="dark"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#070707] text-white flex flex-col justify-center py-20 px-6 sm:px-12 border-t border-white/10 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-6xl flex flex-col justify-center">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 shrink-0">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-wider text-[#c5a880] bg-[#c5a880]/10 px-4 py-1.5 rounded-full border border-[#c5a880]/20 font-medium">
            <span>{EXPERIENCE_DATA.hero.deadline}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            بلیت خودت رو انتخاب کن
          </h2>
        </div>

        {/* Two Main Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto w-full">
          {EXPERIENCE_DATA.passes.map((pass, index) => {
            const isSupporter = pass.id === "supporter";

            return (
              <motion.div
                key={pass.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 overflow-hidden min-h-[460px] ${
                  isSupporter
                    ? "bg-[#12110e] border-[#c5a880]/40 shadow-[0_20px_50px_rgba(197,168,128,0.12)]"
                    : "bg-[#101010] border-white/15 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Subtle Card Background Texture */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay"
                  style={{
                    backgroundImage: `url('${getAssetPath('/assets/dar-miyan-e-meh-card-texture.webp')}')`,
                  }}
                />

                {/* Supporter Badge (Top Left of Card) */}
                {isSupporter && (
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8 z-20 pointer-events-none">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-500 shadow-[0_0_14px_rgba(244,63,94,0.25)]">
                      <svg
                        className="w-3.5 h-3.5 fill-rose-500 text-rose-500"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </div>
                )}

                {/* Top Section */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl text-white font-bold">
                      {pass.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed min-h-[64px] sm:min-h-[60px]">
                      {pass.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-3 pb-4 border-y border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {pass.price}
                    </span>
                    <span className="text-xs sm:text-sm tracking-wider text-zinc-400 font-medium">
                      {pass.currency}
                    </span>
                  </div>

                  {/* Feature Inclusions */}
                  <div className="space-y-3 pt-2">
                    {pass.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light"
                      >
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
                <div className="relative z-10 pt-6 mt-auto">
                  <a
                    href={pass.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`خرید ${pass.name} در درگاه پرداخت`}
                    className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm tracking-wider font-bold transition-all duration-300 shadow-xl text-center"
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 3: Financial Hardship Support Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 sm:mt-12 max-w-5xl mx-auto w-full"
        >
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-right backdrop-blur-sm">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                اگر این روزها شرایط مالی سختی داری و دوست داری در «در میان مه»
                کنار ما باشی، لازم نیست نگران هزینه باشی.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                پیام بده، برات جا نگه می‌داریم.
              </p>
            </div>

            <a
              href="https://t.me/frontChapterSupport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-xs sm:text-sm text-zinc-300 hover:text-white font-medium transition-all duration-200 shrink-0"
            >
              <svg
                className="w-4 h-4 text-[#2AABEE] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.74 8.2c-.13.58-.48.72-.97.45l-2.67-1.97-1.29 1.24c-.14.14-.26.26-.54.26l.19-2.73 4.97-4.49c.22-.19-.05-.3-.34-.11L8.14 13.8l-2.65-.83c-.58-.18-.59-.58.12-.86l10.36-3.99c.48-.18.9.11.67.68z" />
              </svg>
              <span>پیام در تلگرام</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
