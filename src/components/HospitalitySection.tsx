'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HospitalitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingTitleRef = useRef<HTMLHeadingElement>(null);
  const [currentHeading, setCurrentHeading] = useState<'پیش‌رویداد' | 'برنامه‌های عصرگاهی'>('پیش‌رویداد');

  // Parallax refs for floating image clusters
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const p4Ref = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<HTMLDivElement>(null);
  const p6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 140);
      const getDwellBuffer = () => Math.max(window.innerHeight * 0.75, 600);
      const getTotalPinDistance = () => getScrollDistance() + getDwellBuffer();

      // Timeline that pins container until all 3 milestone stops are completed with deliberate dwell time
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'experience-pin',
          trigger: container,
          start: 'top top',
          end: () => `+=${getTotalPinDistance()}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 0,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Transition heading gracefully around 48% scroll progress
            if (self.progress > 0.46) {
              setCurrentHeading('برنامه‌های عصرگاهی');
            } else {
              setCurrentHeading('پیش‌رویداد');
            }
          },
        },
      });

      // 1. Horizontal scrubbing movement through all 3 milestone stops (flowing Right-to-Left in RTL)
      tl.to(track, {
        x: () => getScrollDistance(),
        ease: 'none',
        duration: 1.0,
      });

      // 2. Dwell hold phase: Keeps pin locked so Milestone 3 is fully visible and readable
      tl.to({}, { duration: 0.35 });

      // 3. Organic parallax offsets on image clusters
      if (p1Ref.current && p2Ref.current) {
        gsap.to(p1Ref.current, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 1.2,
          },
        });
        gsap.to(p2Ref.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 0.8,
          },
        });
      }

      if (p3Ref.current && p4Ref.current) {
        gsap.to(p3Ref.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 1,
          },
        });
        gsap.to(p4Ref.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 1.4,
          },
        });
      }

      if (p5Ref.current && p6Ref.current) {
        gsap.to(p5Ref.current, {
          yPercent: -22,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 1.1,
          },
        });
        gsap.to(p6Ref.current, {
          yPercent: 16,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getTotalPinDistance()}`,
            scrub: 0.9,
          },
        });
      }

      // Refresh measurements once DOM elements are rendered
      ScrollTrigger.refresh();
    }, container);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      data-theme="dark"
      dir="rtl"
      className="relative w-full h-screen bg-[#080808] text-white overflow-hidden text-right select-none"
    >
      {/* 1. Visual Atmosphere & Canvas: Dark Slate Texture + Noise Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat bg-center mix-blend-screen"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')`,
          backgroundSize: '256px 256px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Pinned Top-Right Narrative Heading in RTL */}
      <div className="absolute top-10 sm:top-14 right-6 sm:right-14 z-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
            ۰۳ / تجربه رویداد
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]/30" />
        </div>
        <h2
          ref={headingTitleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-1 transition-all duration-700 ease-out drop-shadow-lg"
        >
          {currentHeading}
        </h2>
      </div>

      {/* Pinned Top-Left Navigation hint in RTL */}
      <div className="absolute top-12 sm:top-16 left-6 sm:left-14 z-20 pointer-events-none text-xs tracking-wider text-zinc-400 hidden sm:block">
        خط زمانی افقی • برای مشاهده به پایین اسکرول کنید
      </div>

      {/* 2. Pinned Horizontal Track */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div
          ref={trackRef}
          className="relative flex items-center h-full pr-[28vw] sm:pr-[24vw] pl-[20vw] w-max will-change-transform"
        >
          {/* Continuous Glowing Gold Sine Wave SVG across the entire track */}
          <svg
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[3400px] h-[320px] pointer-events-none overflow-visible z-0 opacity-70 scale-x-[-1]"
            viewBox="0 0 3400 320"
            fill="none"
          >
            <defs>
              <linearGradient id="goldSineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c5a880" stopOpacity="0.1" />
                <stop offset="20%" stopColor="#e2ceb5" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#c5a880" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#e2ceb5" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c5a880" stopOpacity="0.15" />
              </linearGradient>
              <filter id="sineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing Bezier Sine Wave */}
            <path
              d="M 0 160 Q 300 60, 600 160 T 1200 160 T 1800 160 T 2400 160 T 3000 160 T 3400 160"
              stroke="url(#goldSineGrad)"
              strokeWidth="2.5"
              filter="url(#sineGlow)"
              fill="none"
            />
          </svg>

          {/* ═════════════════════════════════════════════════════════════════════ */}
          {/* MILESTONE 1: Pre-Event Welcome Tour                                 */}
          {/* ═════════════════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center gap-12 sm:gap-16 shrink-0 w-[880px] z-10">
            {/* Wave Node Pinpoint */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 1 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pr-6">
              {/* Date & Time above wave */}
              <div className="space-y-1 text-xs tracking-wider text-zinc-400">
                <div className="text-[#c5a880] font-medium">پنج‌شنبه، ۲۶ شهریور ۱۴۰۵</div>
                <div className="text-zinc-500">۱۸:۰۰ الی ۲۰:۰۰</div>
              </div>

              {/* Inner Circle Badge */}
              <div>
                <span className="inline-block text-[10px] tracking-wider px-3 py-1 rounded-full border border-[#c5a880]/40 text-[#c5a880] bg-[#c5a880]/10 font-medium">
                  [ حلقه اختصاصی ]
                </span>
              </div>

              {/* Title & Description below wave */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                  تور اختصاصی و بازدید از استودیو
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  دعوت ویژه از اعضای حلقه اختصاصی جهت بازدید خصوصی از سوئیت زیبایی آپا در دانشگاه NYU و دورهمی صمیمانه در دفتر آپا استتیک نیویورک.
                </p>
              </div>
            </div>

            {/* Milestone 1 Asymmetric Image Cluster */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 1 */}
              <div
                ref={p1Ref}
                className="absolute right-0 top-6 w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/bIjl57OIXrKB53E2sQBDjP8L84.jpg"
                  alt="راهروی سوئیت زیبایی آپا"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
              </div>

              {/* Photo 2 */}
              <div
                ref={p2Ref}
                className="absolute left-0 bottom-8 w-[260px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/IBcxMoSH8dSiNEl5xhH80cm4gvM.jpg"
                  alt="تدارکات بالینی"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>
          </div>

          {/* Spacer between milestones */}
          <div className="w-[180px] shrink-0" />

          {/* ═════════════════════════════════════════════════════════════════════ */}
          {/* MILESTONE 2: Evening Reception                                      */}
          {/* ═════════════════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center gap-12 sm:gap-16 shrink-0 w-[880px] z-10">
            {/* Wave Node Pinpoint */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 2 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pr-6">
              {/* Date & Time above wave */}
              <div className="space-y-1 text-xs tracking-wider text-zinc-400">
                <div className="text-[#c5a880] font-medium">جمعه، ۲۷ شهریور ۱۴۰۵</div>
                <div className="text-zinc-500">۲۰:۰۰ تا پاسی از شب</div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                  گردهمایی و رسپشن شبانه
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  پایان روز اول با گفتگو، کوکتل و میان‌وعده‌های دست‌چین‌شده در کنار دکتر آپا، سایر شرکت‌کنندگان و تیم بالینی آپا در نیویورک.
                </p>
              </div>
            </div>

            {/* Milestone 2 Asymmetric Image Cluster */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 3 */}
              <div
                ref={p3Ref}
                className="absolute right-2 top-4 w-[230px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/NTvqBz8aWl1T8B0PjcmumJqn3IA.jpg"
                  alt="مهمانان رسپشن شبانه"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
              </div>

              {/* Photo 4 */}
              <div
                ref={p4Ref}
                className="absolute left-0 bottom-4 w-[250px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/6VrWQPo3Rtfmp3e8grPrsdQiKZk.jpg"
                  alt="فضای شبانه نیویورک سیتی"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Spacer between milestones */}
          <div className="w-[180px] shrink-0" />

          {/* ═════════════════════════════════════════════════════════════════════ */}
          {/* MILESTONE 3: Private Dinner with Dr. Apa                            */}
          {/* ═════════════════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center gap-12 sm:gap-16 shrink-0 w-[880px] z-10">
            {/* Wave Node Pinpoint */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 3 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pr-6">
              {/* Date & Time */}
              <div className="space-y-1 text-xs tracking-wider text-zinc-400">
                <div className="text-[#c5a880] font-medium">شنبه، ۲۸ شهریور ۱۴۰۵</div>
                <div className="text-zinc-500">۱۷:۳۰ الی ۲۰:۰۰</div>
              </div>

              {/* Inner Circle Badge */}
              <div>
                <span className="inline-block text-[10px] tracking-wider px-3 py-1 rounded-full border border-[#c5a880]/40 text-[#c5a880] bg-[#c5a880]/10 font-medium">
                  [ حلقه اختصاصی ]
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                  ضیافت شام خصوصی با دکتر آپا
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  مختص اعضای اینر سرکل؛ یک فضای صمیمانه و ممتاز برای گفتگوی مستقیم، منتورشیپ فردی و تبادل تجربیات بالینی همراه با صرف شام مجلل.
                </p>
              </div>
            </div>

            {/* Milestone 3 Asymmetric Image Cluster */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 5 */}
              <div
                ref={p5Ref}
                className="absolute right-0 top-8 w-[250px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/8Y5jpKsgNpmxQM2aXcWp6IHJE.jpg"
                  alt="میز شام خصوصی"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>

              {/* Photo 6 */}
              <div
                ref={p6Ref}
                className="absolute left-2 bottom-6 w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/oIr8BpwXZAYjuUCUk0Dbm2IpUI.jpg"
                  alt="دکتر مایکل آپا در ضیافت شام"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
