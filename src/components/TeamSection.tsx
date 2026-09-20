"use client";

import React from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/basePath";

interface TeamMemberLink {
  website?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  telegram?: string;
}

interface TeamMember {
  name: string;
  role: string;
  pillRole: string;
  bio: string;
  image: string;
  links: TeamMemberLink;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "صالح شجاعی",
    pillRole: "بنیان‌گذار",
    role: "بنیان‌گذار فرانت‌چپتر",
    bio: "بنیان‌گذار کامیونیتی فرانت‌چپتر؛ توسعه‌دهنده وب و طراح تجارب تعاملی رویداد «در میان مه».",
    image: "/assets/team-saleh-shojaei.webp",
    links: {
      website: "https://roxaleh.ir",
      linkedin: "https://www.linkedin.com/in/salehshojaei/",
    },
  },
  {
    name: "علی گلکار",
    pillRole: "کارگردان خلاقیت",
    role: "کارگردان خلاقیت و هویت بصری",
    bio: "کارگردان خلاقیت فرانت‌چپتر؛ هدایت‌کننده هویت بصری، کانسپت هنری و فضاسازی رویداد.",
    image: "/assets/team-ali-golkar.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/aligolkarali/",
      instagram: "https://www.instagram.com/lokiwich/",
    },
  },
  {
    name: "ریحانه ملکی",
    pillRole: "تولید محتوا",
    role: "مدیر تولید محتوا و رسانه",
    bio: "تولیدکننده محتوا و راوی روایت‌های تکنولوژی، جامعه و رویداد «در میان مه».",
    image: "/assets/team-reyhaneh-maleki.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/reyhane-maleki-18387627b/",
      youtube: "https://www.youtube.com/@Ryhnmaleki",
    },
  },
  {
    name: "محمد تضارعی",
    pillRole: "مارکتینگ",
    role: "مدیر مارکتینگ و ارتباطات",
    bio: "توسعه ارتباطات، بازاریابی رویداد و هم‌افزایی با جامعه متخصصان و فعالان زیست‌بوم فناوری.",
    image: "/assets/team-mohammad-tazarei.webp",
    links: {
      website: "https://mohammadtazaroei.ir/",
      telegram: "https://t.me/MohammadTazaroei",
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

function YouTubeIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.459 0 .661-.21.919-.459l2.207-2.146 4.588 3.39c.846.466 1.455.226 1.666-.785l3.007-14.167c.309-1.239-.473-1.8-1.282-1.439z" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      data-theme="dark"
      dir="rtl"
      className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-center py-12 sm:py-16 px-6 sm:px-12 border-t border-white/10 text-right overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c5a880]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col justify-center space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                ۰۸ / تیم برگزاری
              </span>
              <span className="w-8 h-[1px] bg-[#c5a880]/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              تیم برگزاری رویداد
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
              افرادی که با اشتیاق و هم‌افزایی در جامعه فرانت‌چپتر، طراحی، هدایت و اجرای رویداد «در میان مه» را ممکن ساخته‌اند.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono hidden md:block">
            ORGANIZING TEAM
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 bg-[#121212]/90 backdrop-blur-md hover:border-[#c5a880]/50 hover:bg-[#161616] transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.5)] group hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle top ambient accent line on hover */}
              <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Photo container with 4:5 aspect ratio */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#1a1a1a] mb-3.5 border border-white/5">
                  <img
                    src={getAssetPath(member.image)}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                  {/* Name and Pill Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-sm font-medium">
                    <span className="font-bold tracking-tight">
                      {member.name}
                    </span>
                    <span className="text-[#c5a880] text-[10px] font-normal truncate max-w-[110px]">
                      {member.pillRole}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1.5">
                  <div className="text-[12px] font-bold text-white/95 leading-snug">
                    {member.role}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5">
                {member.links.website && (
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`وب‌سایت ${member.name}`}
                    title="وب‌سایت"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-zinc-300 hover:text-[#c5a880] hover:bg-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-200 border border-white/10"
                  >
                    <GlobeIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`لینکدین ${member.name}`}
                    title="LinkedIn"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-zinc-300 hover:text-[#c5a880] hover:bg-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-200 border border-white/10"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.instagram && (
                  <a
                    href={member.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`اینستاگرام ${member.name}`}
                    title="Instagram"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-zinc-300 hover:text-[#c5a880] hover:bg-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-200 border border-white/10"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.youtube && (
                  <a
                    href={member.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`یوتیوب ${member.name}`}
                    title="YouTube"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-zinc-300 hover:text-[#c5a880] hover:bg-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-200 border border-white/10"
                  >
                    <YouTubeIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.telegram && (
                  <a
                    href={member.links.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`تلگرام ${member.name}`}
                    title="Telegram"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-zinc-300 hover:text-[#c5a880] hover:bg-[#c5a880]/15 hover:border-[#c5a880]/40 transition-all duration-200 border border-white/10"
                  >
                    <TelegramIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {!member.links.website &&
                  !member.links.linkedin &&
                  !member.links.instagram &&
                  !member.links.youtube &&
                  !member.links.telegram && (
                    <span className="text-[10px] text-zinc-500 font-mono">
                      تیم اجرایی فرانت‌چپتر
                    </span>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
