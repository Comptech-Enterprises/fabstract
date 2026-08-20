"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function LineMask({
  lines,
  as: Tag = "h1",
  className = "",
  delay = 0,
}: {
  lines: string[];
  as?: "h1" | "h2" | "p";
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Tag className={className}>{lines.join(" ")}</Tag>;
  }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="block"
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.35 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: delay + i * 0.12, ease: EASE }}
        >
          {line}
        </motion.span>
      ))}
    </Tag>
  );
}
