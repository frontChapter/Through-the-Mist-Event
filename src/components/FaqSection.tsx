"use client";

import React, { useState } from "react";
import { EXPERIENCE_DATA } from "@/data/experience-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = EXPERIENCE_DATA.faqs;
  const midPoint = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, midPoint);
  const col2 = faqs.slice(midPoint);

  return (
    <section
      id="faq"
      data-theme="light"
      dir="rtl"
      className="relative min-h-screen h-auto lg:h-screen w-full bg-[#FFFFFF] text-[#111111] flex flex-col justify-center pt-16 sm:pt-20 pb-12 lg:pb-8 px-6 sm:px-12 border-t border-black/5 text-right overflow-visible lg:overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl lg:max-w-6xl h-auto lg:h-full flex flex-col justify-center space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="space-y-2 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-black/60 font-semibold">
              ۰۶ / پرسش‌ها
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
            سوالات متداول
          </h2>
          <p className="font-light text-sm sm:text-base text-black/60 max-w-2xl">
            تمام نکات لازم درباره‌ی برنامه، بلیت، و لجستیک روز رویداد.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          data-inner-scroll="true"
          className="w-full overflow-visible lg:overflow-y-auto lg:max-h-[62vh] xl:max-h-none xl:overflow-visible pl-1 select-text"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0.2) transparent",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 items-start">
            {/* Column 1 (Right column in RTL) */}
            <div className="divide-y divide-black/10 border-y border-black/10">
              {col1.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="py-3.5 transition-colors duration-150"
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between text-right gap-4 group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-sm sm:text-base text-[#111111] group-hover:text-black/70 transition-colors font-bold leading-snug">
                        {faq.question}
                      </h3>
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-black text-white border-black rotate-45"
                            : "border-black/20 text-black group-hover:border-black/40"
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    {/* Smooth CSS Grid Height Transition */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed pb-2 pt-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Left column in RTL) */}
            <div className="divide-y divide-black/10 border-y border-black/10">
              {col2.map((faq, index) => {
                const realIndex = midPoint + index;
                const isOpen = openIndex === realIndex;

                return (
                  <div
                    key={faq.question}
                    className="py-3.5 transition-colors duration-150"
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(realIndex)}
                      className="w-full flex items-center justify-between text-right gap-4 group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-sm sm:text-base text-[#111111] group-hover:text-black/70 transition-colors font-bold leading-snug">
                        {faq.question}
                      </h3>
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-black text-white border-black rotate-45"
                            : "border-black/20 text-black group-hover:border-black/40"
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    {/* Smooth CSS Grid Height Transition */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed pb-2 pt-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Footer Line */}
        <div className="pt-2 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs text-black/60 tracking-wider border-t border-black/5 shrink-0">
          <span>سؤالی جدا از این‌ها دارید؟</span>
          <a
            href="https://t.me/frontChapterSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold underline underline-offset-4 hover:opacity-75 transition-opacity inline-flex items-center gap-1.5 group"
          >
            <span>ارتباط با تیم فرانت‌چپتر</span>
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
