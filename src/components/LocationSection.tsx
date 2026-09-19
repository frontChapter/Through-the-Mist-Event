"use client";

import React, { useState, useEffect, useRef } from "react";
import { EXPERIENCE_DATA } from "@/data/experience-data";
import { getAssetPath } from "@/utils/basePath";

export default function LocationSection() {
  const { location } = EXPERIENCE_DATA;
  const [loadMap, setLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      data-theme="dark"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-center py-16 sm:py-20 px-6 sm:px-12 border-t border-white/10 text-right overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl flex flex-col space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                محل برگزاری
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              تهران، کارخانه نوآوری آزادی
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between md:justify-end">
            <div className="text-xs text-zinc-400 space-y-0.5 md:text-left">
              <p className="text-white font-semibold">فضای کار اشتراکی زاویه</p>
              <p>کارخانه نوآوری آزادی، تهران</p>
            </div>

            <a
              href="https://neshan.org/maps/places/4e09fb9c5fe83b144bf619b64313d78f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium border border-white/15 backdrop-blur-md transition-all duration-200 group self-start sm:self-auto"
            >
              <span>Open in Maps</span>
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Custom Dark Styled Map Container with Lazy Mount */}
        <div
          ref={mapContainerRef}
          className="rounded-2xl overflow-hidden border border-white/10 relative bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] shrink-0 min-h-[320px] sm:min-h-[400px] md:min-h-[450px]"
        >
          {loadMap ? (
            <iframe
              title="map-iframe"
              src="https://neshan.org/maps/iframe/places/4e09fb9c5fe83b144bf619b64313d78f#c35.700-51.319-20z-0p/35.699950527535606/51.31910263372955"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="rounded-2xl border-0 w-full h-[320px] sm:h-[400px] md:h-[450px] pointer-events-none sm:pointer-events-auto transition-opacity duration-500"
            />
          ) : (
            <div className="w-full h-[320px] sm:h-[400px] md:h-[450px] flex flex-col items-center justify-center gap-3 bg-[#0d0d0d] text-zinc-500">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#c5a880] animate-pulse">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                در حال آماده‌سازی نقشه موقعیت...
              </span>
            </div>
          )}

          {/* Mobile Overlay: Direct tap to open in Neshan without capturing vertical scroll gestures */}
          <a
            href="https://neshan.org/maps/places/4e09fb9c5fe83b144bf619b64313d78f"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden absolute inset-0 z-10 flex items-end justify-center pb-4 bg-gradient-to-t from-black/80 via-transparent to-transparent"
          >
            <span className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg inline-flex items-center gap-2">
              <span>مشاهده و مسیریابی در نشان</span>
              <span>←</span>
            </span>
          </a>

          {/* Host Info Box */}
          <div className="absolute top-4 right-4 max-w-xs bg-black/85 backdrop-blur-xl border border-white/15 p-3.5 rounded-xl shadow-2xl space-y-1 text-right pointer-events-none">
            <span className="text-[10px] uppercase tracking-wider text-[#c5a880] block font-semibold">
              میزبان رویداد
            </span>
            <h4 className="text-sm sm:text-base text-white font-bold">
              فضای کار اشتراکی زاویه
            </h4>
            <p className="text-xs text-zinc-400">
              تهران • کارخانه نوآوری آزادی
            </p>
          </div>
        </div>

        {/* Venue Gallery */}
        <div className="space-y-3 shrink-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs tracking-wider text-zinc-400 font-medium">
            <span>نمایی از فضای برگزاری</span>
            <span className="text-zinc-500">کارخانه نوآوری آزادی • زاویه</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {location.gallery.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col group hover:border-white/30 transition-all duration-200"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-105"
                  />
                </div>

                <div className="p-3">
                  <h4 className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-[#c5a880] transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capacity & Venue Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-zinc-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-zinc-200 font-semibold">
              ظرفیت محدود • ۵۰ نفر
            </span>
          </div>
          <p className="text-zinc-400 text-center sm:text-left">
            پذیرش شرکت‌کنندگان در فضای کار اشتراکی زاویه • پنجشنبه، ۲ مهر ۱۴۰۵
          </p>
        </div>
      </div>
    </section>
  );
}
