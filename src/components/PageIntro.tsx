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
    <header className="bg-cream pt-28 sm:pt-32 pb-10 sm:pb-14 px-5 sm:px-8 border-b border-sand">
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-4 sm:gap-8">
        <motion.div
          className="col-span-12 sm:col-span-2 flex sm:flex-col items-start sm:items-start gap-3 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <span className="font-script text-2xl text-champagne">N°</span>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-taupe sm:[writing-mode:vertical-rl] sm:rotate-180">
            {eyebrow}
          </p>
        </motion.div>

        <div className="col-span-12 sm:col-span-10 border-t border-sand sm:border-t-0 sm:border-l sm:border-sand pt-6 sm:pt-0 sm:pl-8 lg:pl-14">
          <motion.h1
            className="font-display font-semibold text-ink text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-4xl leading-[0.98]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.p
              className="mt-5 max-w-xl text-stone text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
