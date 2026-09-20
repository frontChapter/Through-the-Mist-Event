"use client";

import React from "react";
import { getAssetPath } from "@/utils/basePath";

interface SpeakerLink {
  website?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  github?: string;
}

interface Speaker {
  name: string;
  role: string;
  pillRole: string;
  bio: string;
  image: string;
  links: SpeakerLink;
}

const SPEAKERS: Speaker[] = [
  {
    name: "یاسین همتی",
    pillRole: "رئیس هیئت‌مدیره کارا صنعت",
    role: "رئیس هیئت‌مدیره شرکت تأمین آلیاژ کارا صنعت",
    bio: "با بیش از ۲۰ سال سابقه در تولید نرم‌افزار و بیش از یک دهه تجربه در زنجیره تأمین؛ رئیس هیئت‌مدیره شرکت تأمین آلیاژ کارا صنعت و فعال در حوزه نوآوری، تحلیل بازار و همکاری‌های پایدار صنعتی.",
    image: "/assets/speaker-yasin-hemmati.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/yasiinhemmatii/",
    },
  },
  {
    name: "دکتر مهیار پویامهر",
    pillRole: "روان‌شناس بالینی",
    role: "روان‌شناس، کاندیدای دکتری روان‌شناسی بالینی دانشگاه شیراز",
    bio: "مدرس دانشگاه و مؤلف و مترجم کتاب؛ هدایت‌کننده‌ی نشست تخصصی روانشناختی از مِه تا وضوح با حضور مهیار پویامهر برای مواجهه‌ی مشترک با بحران و بلاتکلیفی.",
    image: "/assets/speaker-mahyar-pouyamehr.webp",
    links: {
      website: "https://www.drmahyarpouyamehr.ir",
      instagram: "https://www.instagram.com/dr.mahyar.pouyamehr/",
    },
  },
  {
    name: "امیر کریمی",
    pillRole: "مهندس ارشد نرم‌افزار",
    role: "مهندس ارشد نرم‌افزار، مدیر فناوری (CTO) شرکت InteliCraft",
    bio: "متخصص معماری نرم‌افزار و توسعه محصولات دیجیتال؛ با تجربه در راهبری تیم‌های فنی، طراحی سیستم‌های مقیاس‌پذیر و به‌کارگیری فناوری‌های نوین از جمله هوش مصنوعی در پروژه‌های نرم‌افزاری.",
    image: "/assets/speaker-amir-karimi.webp",
    links: {
      website: "https://amirzone.ir",
      linkedin: "https://www.linkedin.com/in/amirhosseinkarimi/",
      github: "https://github.com/amirHosseinKarimi/",
    },
  },
  {
    name: "پویا صبرآموز",
    pillRole: "مدیرعامل و CTO سابق",
    role: "مدیرعامل (CEO) فعلی و مدیر فناوری (CTO) سابق یک‌پی (Yekpay) و کاربوم (Karboom)",
    bio: "با ۱۲ سال تجربه‌ی برنامه‌نویسی در پروژه‌های ایرانی و بین‌المللی؛ همراه یاسین همتی و امیر کریمی در پنل گفت‌وگوی پارادایم‌شیفت‌ها و مسیر پیشِ‌رو.",
    image: "/assets/speaker-pouya-sabramooz.webp",
    links: {
      website: "https://sabramooz.ir",
      linkedin: "https://www.linkedin.com/in/pooya-sabramooz/",
      github: "https://github.com/sabramooz",
      instagram: "https://www.instagram.com/sabramooz",
    },
  },
];

function GlobeIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon({ className = "w-2.5 h-2.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function ApaMethodSection() {
  return (
    <section
      id="method"
      data-theme="light"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#FAF8F5] text-[#1a1a1a] flex flex-col justify-center py-10 sm:py-14 px-6 sm:px-12 border-t border-black/5 overflow-hidden text-right"
    >
      <div className="container mx-auto max-w-6xl relative z-10 text-right flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-5 sm:mb-6 text-right space-y-1.5">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-black/60 font-semibold">
              ۰۴ / ارائه‌دهندگان و همراهان
            </span>
            <span className="w-7 h-[1px] bg-black/20" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight tracking-tight">
            سخنرانان و تسهیل‌گران رویداد
          </h2>
          <p className="text-xs sm:text-[13px] text-black/65 max-w-2xl leading-relaxed">
            چهره‌هایی که در این رویداد، تجارب عملی، بینش‌های روان‌شناختی و مسیر
            مواجهه با عدم‌قطعیت را با شما به اشتراک می‌گذارند.
          </p>
        </div>

        {/* 4-Column Speaker Cards Grid with Full Portrait Image & Minimal Bottom Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 items-stretch">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:border-black/15 transition-all duration-300 group"
            >
              {/* Full Portrait Aspect Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EFECE6] shrink-0">
                <img
                  src={getAssetPath(speaker.image)}
                  alt={speaker.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                {/* Name & Role Glass Pill Overlay on Image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-sm font-medium">
                  <span className="font-bold tracking-tight">
                    {speaker.name}
                  </span>
                  <span className="text-white/80 text-[10px] font-normal truncate max-w-[120px]">
                    {speaker.pillRole}
                  </span>
                </div>
              </div>

              {/* Ultra-Compact Bottom Box */}
              <div className="px-3.5 py-3 sm:px-4 sm:py-3.5 flex flex-col flex-1 justify-between gap-2.5 text-right">
                <div className="space-y-1">
                  <div className="text-[11.5px] font-bold text-black/90 leading-snug">
                    {speaker.role}
                  </div>
                  <p className="text-[11px] text-black/65 leading-relaxed font-normal">
                    {speaker.bio}
                  </p>
                </div>

                {/* Minimalist Social Links Bar */}
                <div className="pt-2 border-t border-black/5 flex items-center gap-1.5 mt-auto">
                  {speaker.links.website && (
                    <a
                      href={speaker.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`وب‌سایت ${speaker.name}`}
                      title="وب‌سایت"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.04] text-black/60 hover:text-black hover:bg-black/[0.1] hover:scale-105 transition-all duration-200 border border-black/10"
                    >
                      <GlobeIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {speaker.links.linkedin && (
                    <a
                      href={speaker.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`لینکدین ${speaker.name}`}
                      title="LinkedIn"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.04] text-black/60 hover:text-black hover:bg-black/[0.1] hover:scale-105 transition-all duration-200 border border-black/10"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {speaker.links.github && (
                    <a
                      href={speaker.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`گیت‌هاب ${speaker.name}`}
                      title="GitHub"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.04] text-black/60 hover:text-black hover:bg-black/[0.1] hover:scale-105 transition-all duration-200 border border-black/10"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {speaker.links.instagram && (
                    <a
                      href={speaker.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`اینستاگرام ${speaker.name}`}
                      title="Instagram"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.04] text-black/60 hover:text-black hover:bg-black/[0.1] hover:scale-105 transition-all duration-200 border border-black/10"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {speaker.links.x && (
                    <a
                      href={speaker.links.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`اکانت X ${speaker.name}`}
                      title="X (Twitter)"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.04] text-black/60 hover:text-black hover:bg-black/[0.1] hover:scale-105 transition-all duration-200 border border-black/10"
                    >
                      <XIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
