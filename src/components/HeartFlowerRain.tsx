"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface Particle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  swaySpeed: number;
  swayAmp: number;
  swayOffset: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  emoji: string;
}

const EMOJIS = [
  "💖", "🌸", "✨", "🌺", "💕", "🌷", "🎀", "⭐",
  "💗", "🌹", "🌼", "💐", "🪄", "💓", "🌟", "🦋", "💘"
];

export default function HeartFlowerRain({ isActive }: { isActive: boolean }) {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isActiveRef = useRef(isActive);
  const isRunningRef = useRef(false);
  const particlesRef = useRef<Particle[]>([]);
  const spawnTimerRef = useRef(0);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createParticle = useCallback((spawnY = -40): Particle => {
    const canvas = canvasRef.current;
    const width = canvas?.width || window.innerWidth;
    return {
      x: Math.random() * width,
      y: spawnY,
      speedY: 2.2 + Math.random() * 3.5,
      speedX: (Math.random() - 0.5) * 1.5,
      swaySpeed: 0.025 + Math.random() * 0.04,
      swayAmp: 1.8 + Math.random() * 2.8,
      swayOffset: Math.random() * Math.PI * 2,
      rotation: (Math.random() - 0.5) * 0.6,
      rotationSpeed: (Math.random() - 0.5) * 0.045,
      size: 22 + Math.random() * 18,
      opacity: 0.9 + Math.random() * 0.1,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    };
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      isRunningRef.current = false;
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      isRunningRef.current = false;
      return;
    }

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Spawn new particles while hover is active
    if (isActiveRef.current) {
      spawnTimerRef.current++;
      if (spawnTimerRef.current % 2 === 0 && particlesRef.current.length < 140) {
        particlesRef.current.push(createParticle(-35));
        if (Math.random() > 0.35) {
          particlesRef.current.push(createParticle(-35));
        }
      }
    }

    // Update and draw particles
    const list = particlesRef.current;
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.y += p.speedY;
      p.swayOffset += p.swaySpeed;
      p.x += Math.sin(p.swayOffset) * p.swayAmp + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 60) {
        list.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.font = `${Math.floor(p.size)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.emoji, 0, 0);
      ctx.restore();
    }

    if (isActiveRef.current || list.length > 0) {
      requestAnimationFrame(render);
    } else {
      isRunningRef.current = false;
      ctx.clearRect(0, 0, width, height);
    }
  }, [createParticle]);

  // Handle canvas sizing
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [mounted]);

  // Trigger burst and animation loop on active
  useEffect(() => {
    if (!mounted || !isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const height = canvas.height || window.innerHeight;

    // Burst across top/mid portion of viewport so effect is instant
    for (let i = 0; i < 45; i++) {
      particlesRef.current.push(createParticle(Math.random() * (height * 0.7) - 60));
    }

    if (!isRunningRef.current) {
      isRunningRef.current = true;
      requestAnimationFrame(render);
    }
  }, [isActive, mounted, createParticle, render]);

  if (!mounted) return null;

  return createPortal(
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99999]"
      aria-hidden="true"
    />,
    document.body
  );
}
