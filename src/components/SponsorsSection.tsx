"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function SponsorsSection() {
  const sponsors = EXPERIENCE_DATA.sponsors || [];

  return (
    <section
      id="sponsors"
      data-theme="dark"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-center py-16 sm:py-20 px-6 sm:px-12 border-t border-white/10 text-right overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a880]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col justify-center space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                ۰۷ / حامیان و همراهان
              </span>
              <span className="w-8 h-[1px] bg-[#c5a880]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              حامیان و همکاران رویداد
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
              مجموعه‌ها و حامیانی که در کنار جامعه فرانت‌چپتر، مسیر برگزاری این رویداد تعاملی را پشتیبانی و هموار کرده‌اند.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono hidden md:block">
            PARTNERS &amp; SPONSORS
          </div>
        </div>

        {/* 3 Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto w-full">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 bg-[#111111]/90 backdrop-blur-md hover:border-[#c5a880]/50 hover:bg-[#141414] transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Role Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-[#c5a880] bg-[#c5a880]/10 px-3 py-1 rounded-full border border-[#c5a880]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                    <span>{sponsor.role}</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    ۰{index + 1}
                  </span>
                </div>

                {/* Logo Showcase Box */}
                <div className="relative w-full h-28 sm:h-32 my-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center p-6 group-hover:bg-white/[0.06] group-hover:border-white/10 transition-all duration-300 overflow-hidden">
                  <img
                    src={getAssetPath(sponsor.logoWhite)}
                    alt={sponsor.name}
                    width={180}
                    height={70}
                    loading="lazy"
                    decoding="async"
                    className="max-h-16 sm:max-h-20 max-w-[80%] object-contain filter contrast-125 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Sponsor Titles */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#c5a880] transition-colors">
                    {sponsor.name}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 tracking-wider">
                    {sponsor.enName}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-zinc-300/80 font-light leading-relaxed mt-3">
                  {sponsor.description}
                </p>
              </div>

              {/* Bottom Website Action */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors group/link"
                >
                  <span>مشاهده وب‌سایت</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#c5a880] transition-transform group-hover/link:-translate-x-1"
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

                <span className="text-[11px] font-mono text-zinc-600">
                  {sponsor.url.replace(/^https?:\/\//, "")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Callout Banner */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right shrink-0">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              علاقه‌مند به حمایت از رویدادها یا همکاری با کامیونیتی فرانت‌چپتر هستید؟
            </p>
            <p className="text-xs text-zinc-400 font-light">
              امکان معرفی محصول، ارائه‌ی خدمات یا مشارکت در برنامه‌های آتی رویداد.
            </p>
          </div>

          <a
            href="https://t.me/frontChapterSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-xs font-medium text-zinc-200 hover:text-white transition-all duration-200 shrink-0 group"
          >
            <span>ارتباط با پشتیبانی رویداد</span>
            <svg
              className="w-3.5 h-3.5 text-[#2AABEE] transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.74 8.2c-.13.58-.48.72-.97.45l-2.67-1.97-1.29 1.24c-.14.14-.26.26-.54.26l.19-2.73 4.97-4.49c.22-.19-.05-.3-.34-.11L8.14 13.8l-2.65-.83c-.58-.18-.59-.58.12-.86l10.36-3.99c.48-.18.9.11.67.68z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
