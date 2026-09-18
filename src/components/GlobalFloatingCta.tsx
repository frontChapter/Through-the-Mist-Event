'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalFloatingCta() {
  const [isVisible, setIsVisible] = useState(true);

  const checkVisibility = useCallback(() => {
    const windowHeight = window.innerHeight;

    // Check if user is in Reservations or Footer section
    const resEl = document.getElementById('reservations');
    const footerEl = document.getElementById('footer');

    let inConflictSection = false;

    if (resEl) {
      const rect = resEl.getBoundingClientRect();
      if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
        inConflictSection = true;
      }
    }

    if (footerEl) {
      const rect = footerEl.getBoundingClientRect();
      if (rect.top < windowHeight * 0.85) {
        inConflictSection = true;
      }
    }

    setIsVisible(!inConflictSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('lenis-scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener('lenis-scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkVisibility]);

  const handleScrollToReservations = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('fullpage-jump-to', { detail: { targetId: 'reservations' } })
    );
  };

  return (
    <div
      dir="ltr"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] pointer-events-none"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            className="pointer-events-auto"
          >
            <div className="group flex flex-col items-center justify-center bg-[#111111]/95 hover:bg-[#161616] text-white border border-white/15 px-7 py-2.5 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.95)] min-w-[190px] w-auto text-center select-none">
              {/* Subtle top indicator text */}
              <span className="font-serif italic text-[11px] text-zinc-400 tracking-wide block whitespace-nowrap">
                Limited seats available
              </span>

              {/* Main CTA Link */}
              <button
                type="button"
                onClick={handleScrollToReservations}
                className="font-mono text-xs font-semibold tracking-[0.18em] uppercase text-white flex items-center justify-center gap-1.5 pt-0.5 hover:text-zinc-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Reserve Now</span>
                <svg
                  className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
