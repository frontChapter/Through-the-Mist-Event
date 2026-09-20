'use client';

import React from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import FullpageScrollController from '@/components/FullpageScrollController';
import Navbar from '@/components/Navbar';
import GlobalFloatingCta from '@/components/GlobalFloatingCta';

// 11 Sections
import HeroSection from '@/components/HeroSection';
import SkylineSection from '@/components/SkylineSection';
import MissionSection from '@/components/MissionSection';
import MethodIntroSection from '@/components/MethodIntroSection';
import AgendaSection from '@/components/AgendaSection';
import HospitalitySection from '@/components/HospitalitySection';
import ApaMethodSection from '@/components/ApaMethodSection';
import TicketsSection from '@/components/TicketsSection';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import SponsorsSection from '@/components/SponsorsSection';
import TeamSection from '@/components/TeamSection';
import EventFooter from '@/components/EventFooter';

export default function ExperiencePage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Fullpage 100vh Strict Snap Controller */}
        <FullpageScrollController />

        {/* Fixed Header with zero-lag adaptive contrast & shared underline */}
        <Navbar />

        {/* Global Floating Reserve Capsule */}
        <GlobalFloatingCta />

        {/* 12 Narrative Sections */}
        <main id="main-content">
          {/* Section 1: Hero & Entrance */}
          <HeroSection />

          {/* Section 2: Manhattan Skyline Transition */}
          <SkylineSection />

          {/* Section 3: Michelangelo Sculpture (Light Marble) */}
          <MissionSection />

          {/* Section 4: Two Days. Two Patients. One Method */}
          <MethodIntroSection />

          {/* Section 5: Day One Course & Curriculum Matrix */}
          <AgendaSection />

          {/* Section 6: Horizontal Timeline with Wavy Sine Line */}
          <HospitalitySection />

          {/* Section 7: Dr. Apa & His Method (Light Marble) */}
          <ApaMethodSection />

          {/* Section 8: Level of Access Passes */}
          <TicketsSection />

          {/* Section 9: Manhattan Map & Nearby Stays */}
          <LocationSection />

          {/* Section 10: FAQ (Pure White) */}
          <FaqSection />

          {/* Section 11: Sponsors & Supporters (Dark) */}
          <SponsorsSection />

          {/* Section 12: Organizing Team (Dark) */}
          <TeamSection />
        </main>

        {/* Section 13: Outro & Sculptural Climax */}
        <EventFooter />
      </div>
    </SmoothScrollProvider>
  );
}
