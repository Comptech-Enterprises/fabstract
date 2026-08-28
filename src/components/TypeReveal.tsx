"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function TypeReveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  );
}
