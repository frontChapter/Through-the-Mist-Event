"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { getAssetPath } from "@/utils/basePath";

export default function SkylineSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Smooth mouse coordinates tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 65, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Scroll tracking relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Cloud 1 transforms (top-right cloud)
  const cloud1ScrollY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cloud1ScrollX = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const cloud1MouseX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const cloud1MouseY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  const cloud1X = useTransform(
    [cloud1ScrollX, cloud1MouseX],
    ([sx, mx]: number[]) => sx + mx
  );
  const cloud1Y = useTransform(
    [cloud1ScrollY, cloud1MouseY],
    ([sy, my]: number[]) => sy + my
  );

  // Cloud 2 transforms (bottom-left cloud - opposing depth parallax)
  const cloud2ScrollY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const cloud2ScrollX = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const cloud2MouseX = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const cloud2MouseY = useTransform(smoothMouseY, [-1, 1], [30, -30]);

  const cloud2X = useTransform(
    [cloud2ScrollX, cloud2MouseX],
    ([sx, mx]: number[]) => sx + mx
  );
  const cloud2Y = useTransform(
    [cloud2ScrollY, cloud2MouseY],
    ([sy, my]: number[]) => sy + my
  );
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(Math.max(-1.2, Math.min(1.2, x)));
        mouseY.set(Math.max(-1.2, Math.min(1.2, y)));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="skyline"
      data-theme="dark"
      dir="rtl"
      className="relative h-screen w-full min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* B&W Skyline Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={getAssetPath("/assets/dar-miyan-e-meh-tehran-skyline.webp")}
          alt="خط افق تهران"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Atmospheric Clouds with Interactive Parallax */}
      <motion.div
        style={{ x: cloud1X, y: cloud1Y }}
        className="absolute top-1/4 -right-20 w-1/2 pointer-events-none z-[1]"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5 }}
          src={getAssetPath("/assets/dar-miyan-e-meh-skyline-clouds-left.webp")}
          alt="Clouds Right"
          width={827}
          height={465}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain mix-blend-screen"
        />
      </motion.div>

      <motion.div
        style={{ x: cloud2X, y: cloud2Y }}
        className="absolute bottom-10 -left-20 w-3/5 pointer-events-none z-[1]"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={getAssetPath("/assets/dar-miyan-e-meh-skyline-clouds-right.webp")}
          alt="Clouds Left"
          width={992}
          height={802}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain mix-blend-screen"
        />
      </motion.div>

      {/* Central Architectural Manifesto Quote */}
      <div className="relative z-10 max-w-4xl px-8 text-center">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-light">
          <span className="block">دیدن راه، ممکن نیست</span>
          <span className="block mt-4 sm:mt-6">
            فقط{" "}
            <span className="font-bold underline decoration-white/40 underline-offset-8">
              مه
            </span>{" "}
            است و ما، در{" "}
            <span className="font-bold underline decoration-white/40 underline-offset-8">
              میان
            </span>{" "}
            آن.
          </span>
        </p>
      </div>

      {/* Vignette Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
    </section>
  );
}

