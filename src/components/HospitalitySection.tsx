'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HospitalitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingTitleRef = useRef<HTMLHeadingElement>(null);
  const [currentHeading, setCurrentHeading] = useState<'Pre-Event' | 'After Hours'>('Pre-Event');

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
              setCurrentHeading('After Hours');
            } else {
              setCurrentHeading('Pre-Event');
            }
          },
        },
      });

      // 1. Horizontal scrubbing movement through all 3 milestone stops
      tl.to(track, {
        x: () => -getScrollDistance(),
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
      dir="ltr"
      className="relative w-full h-screen bg-[#080808] text-white overflow-hidden text-left select-none"
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

      {/* Pinned Top-Left Narrative Heading */}
      <div className="absolute top-10 sm:top-14 left-6 sm:left-14 z-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c5a880]">
            03 / The Experience
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]/30" />
        </div>
        <h2
          ref={headingTitleRef}
          className="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-1 transition-all duration-700 ease-out drop-shadow-lg"
        >
          {currentHeading}
        </h2>
      </div>

      {/* Pinned Top-Right Navigation hint */}
      <div className="absolute top-12 sm:top-16 right-6 sm:right-14 z-20 pointer-events-none font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hidden sm:block">
        Horizontal Timeline • Scroll down to advance
      </div>

      {/* 2. Pinned Horizontal Track */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div
          ref={trackRef}
          className="relative flex items-center h-full pl-[28vw] sm:pl-[24vw] pr-[20vw] w-max will-change-transform"
        >
          {/* Continuous Glowing Gold Sine Wave SVG across the entire track */}
          <svg
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[3400px] h-[320px] pointer-events-none overflow-visible z-0 opacity-70"
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
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 1 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pl-6">
              {/* Date & Time above wave */}
              <div className="space-y-1.5 font-mono text-[11px] tracking-widest uppercase text-zinc-400">
                <div className="text-[#c5a880]">Thursday, September 17</div>
                <div className="text-zinc-500">6:00 – 8:00 PM</div>
              </div>

              {/* Inner Circle Badge */}
              <div>
                <span className="inline-block font-mono text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-[#c5a880]/40 text-[#c5a880] bg-[#c5a880]/10">
                  [ INNER CIRCLE ]
                </span>
              </div>

              {/* Title & Description below wave */}
              <div className="space-y-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-normal leading-tight">
                  Pre-Event Welcome Tour
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Apa Inner Circle attendees are invited to an intimate private tour and gathering at Apa Aesthetic New York with the Apa Aesthetic clinical team.
                </p>
              </div>
            </div>

            {/* Milestone 1 Asymmetric Image Cluster (Overlapping Duo) */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 1: Tall Architectural Hallway */}
              <div
                ref={p1Ref}
                className="absolute left-0 top-6 w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/bIjl57OIXrKB53E2sQBDjP8L84.jpg"
                  alt="Apa Aesthetic Suite Hallway"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
              </div>

              {/* Photo 2: Clinical Tools / Hands-On (Landscape overlapping) */}
              <div
                ref={p2Ref}
                className="absolute right-0 bottom-8 w-[260px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/IBcxMoSH8dSiNEl5xhH80cm4gvM.jpg"
                  alt="Clinical Preparations"
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
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 2 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pl-6">
              {/* Date & Time above wave */}
              <div className="space-y-1.5 font-mono text-[11px] tracking-widest uppercase text-zinc-400">
                <div className="text-[#c5a880]">Friday, September 18</div>
                <div className="text-zinc-500">8:00 PM – Late</div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-normal leading-tight">
                  Evening Reception
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Close out Day One with cocktails, conversation and curated bites alongside Dr. Apa, fellow attendees, and the Apa Aesthetic New York team.
                </p>
              </div>
            </div>

            {/* Milestone 2 Asymmetric Image Cluster (Layered Vertical Duo) */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 3: Ambient Portrait / Guests */}
              <div
                ref={p3Ref}
                className="absolute left-2 top-4 w-[230px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/NTvqBz8aWl1T8B0PjcmumJqn3IA.jpg"
                  alt="Evening Reception Guests"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
              </div>

              {/* Photo 4: Moody Night Atmosphere */}
              <div
                ref={p4Ref}
                className="absolute right-0 bottom-4 w-[250px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/6VrWQPo3Rtfmp3e8grPrsdQiKZk.jpg"
                  alt="New York City Night Atmosphere"
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
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-[#c5a880] border-2 border-black shadow-[0_0_12px_#c5a880]" />
            </div>

            {/* Milestone 3 Text & Details */}
            <div className="w-[380px] space-y-5 shrink-0 pl-6">
              {/* Date & Time */}
              <div className="space-y-1.5 font-mono text-[11px] tracking-widest uppercase text-zinc-400">
                <div className="text-[#c5a880]">Saturday, September 19</div>
                <div className="text-zinc-500">5:30 – 8:00 PM</div>
              </div>

              {/* Inner Circle Badge */}
              <div>
                <span className="inline-block font-mono text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-[#c5a880]/40 text-[#c5a880] bg-[#c5a880]/10">
                  [ INNER CIRCLE ]
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-normal leading-tight">
                  Private dinner with Dr. Apa
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Reserved exclusively for Inner Circle attendees, this intimate private dinner offers a smaller setting to connect with Dr. Apa and Apa Associates over a curated dining experience.
                </p>
              </div>
            </div>

            {/* Milestone 3 Asymmetric Image Cluster */}
            <div className="relative w-[440px] h-[480px] shrink-0 flex items-center">
              {/* Photo 5: Curated Dining Arrangement */}
              <div
                ref={p5Ref}
                className="absolute left-0 top-8 w-[250px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-white/10 z-10 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/8Y5jpKsgNpmxQM2aXcWp6IHJE.jpg"
                  alt="Private Dining Table Setup"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>

              {/* Photo 6: Dr. Michael Apa with Guests */}
              <div
                ref={p6Ref}
                className="absolute right-2 bottom-6 w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] border border-white/15 z-20 will-change-transform"
              >
                <img
                  src="https://framerusercontent.com/images/oIr8BpwXZAYjuUCUk0Dbm2IpUI.jpg"
                  alt="Dr. Michael Apa at Dinner"
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
