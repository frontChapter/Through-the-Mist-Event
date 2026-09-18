'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Exactly 5 navigation items in Persian RTL order
const NAV_ITEMS = [
  { label: 'ماموریت', id: 'mission' },
  { label: 'برنامه', id: 'agenda' },
  { label: 'متدولوژی', id: 'method' },
  { label: 'رزرو', id: 'reservations' },
  { label: 'سوالات متداول', id: 'faq' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('mission');
  const [isLightSection, setIsLightSection] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronous, zero-lag scroll evaluator
  const evaluateHeaderState = useCallback(() => {
    // 1. Theme evaluation: check if header intersects with light sections (#mission, #method, #faq)
    const lightIds = ['mission', 'method', 'faq'];
    let isLight = false;

    for (const id of lightIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Header sits from y=0 to y=80; check if section covers the header baseline (y=60)
        if (rect.top <= 60 && rect.bottom > 60) {
          isLight = true;
          break;
        }
      }
    }

    if (!isLight) {
      // General fallback to any [data-theme="light"]
      const lightElements = document.querySelectorAll<HTMLElement>('[data-theme="light"]');
      for (let i = 0; i < lightElements.length; i++) {
        const rect = lightElements[i].getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom > 60) {
          isLight = true;
          break;
        }
      }
    }

    setIsLightSection(isLight);

    // 2. Active tab evaluation based on scroll position
    const scrollY = window.scrollY;
    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      const item = NAV_ITEMS[i];
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.offsetTop - 140;
        if (scrollY >= top) {
          setActiveTab(item.id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    // Listen directly to Lenis scroll event + native scroll fallback
    window.addEventListener('lenis-scroll', evaluateHeaderState);
    window.addEventListener('scroll', evaluateHeaderState, { passive: true });
    window.addEventListener('resize', evaluateHeaderState, { passive: true });

    // IntersectionObserver for element entry detection
    const observer = new IntersectionObserver(
      () => {
        evaluateHeaderState();
      },
      {
        rootMargin: '-5% 0px -85% 0px',
        threshold: 0,
      }
    );

    const themedSections = document.querySelectorAll('[data-theme], #mission, #method, #faq');
    themedSections.forEach((sec) => observer.observe(sec));

    evaluateHeaderState();

    return () => {
      window.removeEventListener('lenis-scroll', evaluateHeaderState);
      window.removeEventListener('scroll', evaluateHeaderState);
      window.removeEventListener('resize', evaluateHeaderState);
      observer.disconnect();
    };
  }, [evaluateHeaderState]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveTab(id);

    window.dispatchEvent(
      new CustomEvent('fullpage-jump-to', { detail: { targetId: id } })
    );
  };

  // Explicit contrast styling
  const headerBgClass = isLightSection
    ? 'bg-white/80 border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
    : 'bg-black/35 border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]';

  const textColor = isLightSection ? 'text-[#111111]' : 'text-[#FFFFFF]';
  const textMuted = isLightSection ? 'text-[#111111]/70 hover:text-[#111111]' : 'text-[#FFFFFF]/70 hover:text-[#FFFFFF]';
  const indicatorColor = isLightSection ? 'bg-[#111111]' : 'bg-[#FFFFFF]';

  return (
    <header
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-auto w-full transition-colors duration-300 font-sans backdrop-blur-md border-b ${headerBgClass}`}
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Right side in RTL: Frontchapter Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(
                new CustomEvent('fullpage-jump-to', { detail: { targetId: 'hero' } })
              );
            }}
            className="group flex items-center select-none transition-transform duration-200 hover:scale-[1.02]"
            aria-label="صفحه اصلی فرانت‌چپتر"
          >
            <div className="relative h-8 sm:h-9 w-[128px] sm:w-[144px]">
              {/* White text logo for dark background sections */}
              <Image
                src="/images/logo-dark.svg"
                alt="فرانت‌چپتر"
                fill
                priority
                unoptimized
                className={`object-contain object-right transition-opacity duration-300 ${
                  isLightSection ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Dark text logo for light background sections */}
              <Image
                src="/images/logo.svg"
                alt="فرانت‌چپتر"
                fill
                priority
                unoptimized
                className={`object-contain object-right transition-opacity duration-300 ${
                  isLightSection ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </Link>
        </div>

        {/* Center: 5 Nav Items with glide underline */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? `${textColor} font-bold` : textMuted
                }`}
              >
                <span>{item.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${indicatorColor}`}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Left side in RTL: SEATS status CTA with left-pointing arrow */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#reservations"
            onClick={(e) => handleNavClick(e, 'reservations')}
            className={`text-xs font-medium tracking-wide underline underline-offset-4 transition-colors duration-300 inline-flex items-center gap-1.5 group ${textMuted}`}
          >
            <span>رزرو صندلی</span>
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

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${textColor}`}
          aria-label="منو"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            dir="rtl"
            className={`mx-4 mb-4 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl md:hidden flex flex-col space-y-4 text-xs tracking-wider border text-right ${
              isLightSection
                ? 'bg-white/95 text-[#111111] border-black/10'
                : 'bg-black/95 text-white border-white/15'
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                  activeTab === item.id
                    ? isLightSection ? 'bg-black/10 font-bold' : 'bg-white/15 font-bold'
                    : 'opacity-70'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
