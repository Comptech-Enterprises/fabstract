"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration,
}: {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade" | "clip" | "scale" | "slide";
  delay?: number;
  duration?: "fast" | "slow" | "clip";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "fade"
      ? "reveal-fade"
      : variant === "clip"
        ? "reveal-clip"
        : variant === "scale"
          ? "reveal-scale"
          : variant === "slide"
            ? "reveal-slide"
            : "";

  const delayClass = delay > 0 ? `delay-${Math.min(Math.round(delay * 10), 6)}` : "";
  const durationClass = duration ? `duration-${duration}` : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${variantClass} ${delayClass} ${durationClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function ClipReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal variant="clip" delay={delay} duration="clip" className={className}>
      {children}
    </ScrollReveal>
  );
}
