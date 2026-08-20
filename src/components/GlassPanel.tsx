"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function GlassPanel({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`border border-sand bg-cream ${className}`}
      whileHover={hover && !reduce ? { x: 6 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
