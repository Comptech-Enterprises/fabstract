"use client";

import type { ReactNode } from "react";
import { HeroVideos } from "./HeroVideos";
import { EASE } from "@/lib/motion";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  fileIndex?: number;
}) {
  return (
    <section className="relative min-h-[78vh] flex items-end">
      <HeroVideos />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-navy via-navy/65 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy/85 via-transparent to-navy/35" />
      <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-32 pb-14 max-w-4xl">
        <motion.p
          className="text-sky text-[11px] tracking-[0.36em] uppercase mb-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-white font-medium [text-shadow:0_2px_24px_rgba(12,18,28,0.55)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            className="mt-7 text-white text-base sm:text-lg leading-relaxed max-w-xl [text-shadow:0_1px_12px_rgba(12,18,28,0.6)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
