'use client';

import { useEffect, useRef, useCallback } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SECTION_IDS = [
  'hero',
  'skyline',
  'mission',
  'two-days',
  'agenda',
  'experience',
  'method',
  'reservations',
  'location',
  'faq',
  'footer',
];

const LOCKOUT_MS = 850;
const DELTA_THRESHOLD = 25;

declare global {
  interface Window {
    __fullpageGoTo?: (index: number) => void;
    __experienceStep?: number;
    __experienceMaxSteps?: number;
    __setExperienceStep?: (step: number) => void;
  }
}

export default function FullpageScrollController() {
  const currentIndexRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);
  const lastWheelTimeRef = useRef<number>(0);

  const scrollToIndex = useCallback((index: number, customDuration = 1.0) => {
    if (index < 0 || index >= SECTION_IDS.length) return;

    const targetId = SECTION_IDS[index];
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    currentIndexRef.current = index;
    isAnimatingRef.current = true;
    lastWheelTimeRef.current = Date.now();

    if (window.__lenis) {
      window.__lenis.scrollTo(targetEl, {
        offset: 0,
        duration: customDuration,
        lock: true,
      });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, LOCKOUT_MS);
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndexRef.current < SECTION_IDS.length - 1) {
      scrollToIndex(currentIndexRef.current + 1);
    }
  }, [scrollToIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndexRef.current > 0) {
      scrollToIndex(currentIndexRef.current - 1);
    }
  }, [scrollToIndex]);

  // Expose global jumper for Navbar & CTA
  useEffect(() => {
    window.__fullpageGoTo = (index: number) => {
      scrollToIndex(index, 1.2);
    };

    const handleJumpToEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      const targetId = customEvent.detail?.targetId;
      if (!targetId) return;

      const foundIdx = SECTION_IDS.indexOf(targetId);
      if (foundIdx !== -1) {
        scrollToIndex(foundIdx, 1.2);
      }
    };

    window.addEventListener('fullpage-jump-to', handleJumpToEvent);

    return () => {
      delete window.__fullpageGoTo;
      window.removeEventListener('fullpage-jump-to', handleJumpToEvent);
    };
  }, [scrollToIndex]);

  // Sync currentIndexRef on scroll in case of outside navigation
  useEffect(() => {
    const handleScrollSync = () => {
      if (isAnimatingRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
            currentIndexRef.current = i;
            break;
          }
        }
      }
    };

    window.addEventListener('lenis-scroll', handleScrollSync);
    window.addEventListener('scroll', handleScrollSync, { passive: true });

    return () => {
      window.removeEventListener('lenis-scroll', handleScrollSync);
      window.removeEventListener('scroll', handleScrollSync);
    };
  }, []);

  // Wheel listener with trackpad momentum decay filter & inner-scroll boundary checks
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const deltaY = e.deltaY;

      // 1. Check if an animation or lockout timer is currently active
      if (isAnimatingRef.current || now - lastWheelTimeRef.current < LOCKOUT_MS) {
        e.preventDefault();
        return;
      }

      // 2. Acceleration threshold filter (ignores low-velocity decay ticks from macOS trackpads)
      if (Math.abs(deltaY) < DELTA_THRESHOLD) {
        return;
      }

      // 3. Inner-Scroll Isolation for Agenda & FAQ tables/lists
      const target = e.target as HTMLElement | null;
      const innerScrollable = target?.closest<HTMLElement>('[data-inner-scroll="true"]');

      if (innerScrollable) {
        const isAtBottom =
          innerScrollable.scrollTop + innerScrollable.clientHeight >=
          innerScrollable.scrollHeight - 4;
        const isAtTop = innerScrollable.scrollTop <= 4;

        if (deltaY > 0 && !isAtBottom) {
          // Allow inner container to scroll down naturally
          return;
        }
        if (deltaY < 0 && !isAtTop) {
          // Allow inner container to scroll up naturally
          return;
        }
      }

      // 4. GSAP Pinned Horizontal Timeline coordination on #experience
      const st = typeof window !== 'undefined' ? ScrollTrigger.getById('experience-pin') : null;
      const experienceIndex = SECTION_IDS.indexOf('experience');
      const isAtExperience = currentIndexRef.current === experienceIndex;

      if (st && (st.isActive || isAtExperience)) {
        if (deltaY > 0 && st.progress < 0.98) {
          // Allow natural Lenis scrub through the horizontal pinned timeline until all milestones complete
          return;
        }
        if (deltaY < 0 && st.progress > 0.02) {
          // Allow natural Lenis scrub backwards through the horizontal pinned timeline
          return;
        }
      }

      // 4b. GSAP Pinned Multi-Phase Timeline coordination on #agenda
      const stAgenda = typeof window !== 'undefined' ? ScrollTrigger.getById('agenda-pin') : null;
      const agendaIndex = SECTION_IDS.indexOf('agenda');
      const isAtAgenda = currentIndexRef.current === agendaIndex;

      if (stAgenda && (stAgenda.isActive || isAtAgenda)) {
        if (deltaY > 0 && stAgenda.progress < 0.98) {
          // Allow natural Lenis scrub through the pinned agenda section until all phases complete
          return;
        }
        if (deltaY < 0 && stAgenda.progress > 0.02) {
          // Allow natural Lenis scrub backwards through the pinned agenda section
          return;
        }
      }

      // 5. Trigger clean section snap
      e.preventDefault();
      if (deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goToNext, goToPrev]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        goToNext();
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrev]);

  // Mobile swipe navigation
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;

      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNext, goToPrev]);

  return null;
}
