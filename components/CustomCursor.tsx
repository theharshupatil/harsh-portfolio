
"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  age: number;
  size: number;
};

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId = 0;

    const particles: Particle[] = [];
    let lastX = -100;
    let lastY = -100;
    let mouseX = -100;
    let mouseY = -100;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const distance = Math.hypot(mouseX - lastX, mouseY - lastY);
      const steps = Math.min(Math.ceil(distance / 4), 20);

      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;

        particles.push({
          x: lastX + (mouseX - lastX) * t,
          y: lastY + (mouseY - lastY) * t,
          age: 0,
          size: 4 + Math.random() * 4,
        });
      }

      lastX = mouseX;
      lastY = mouseY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the flowing colour trail
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.age += 0.018;

        if (p.age >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const opacity = Math.pow(1 - p.age, 2) * 0.32;
        const size = p.size * (1 - p.age * 0.65);

        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, size * 2.5
        );

        gradient.addColorStop(0, `rgba(90, 165, 255, ${opacity})`);
        gradient.addColorStop(0.35, `rgba(100, 90, 255, ${opacity * 0.65})`);
        gradient.addColorStop(1, "rgba(40, 80, 255, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move);

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
