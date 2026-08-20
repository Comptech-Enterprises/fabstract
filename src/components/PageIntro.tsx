"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="bg-cream pt-24 sm:pt-28 pb-8 px-5 sm:px-8 border-b border-sand">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-xs font-medium uppercase tracking-wider text-taupe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 font-display font-semibold text-ink text-3xl sm:text-5xl tracking-tight max-w-3xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            className="mt-4 max-w-2xl text-stone text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}
