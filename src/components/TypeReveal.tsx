"use client";

import { motion } from "framer-motion";

export function TypeReveal({
  children,
  className = "",
  delay = 0,
  wordDelay = 0.12,
  attribution,
}: {
  children: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  attribution?: string;
}) {
  const words = children.split(" ");
  const totalDuration = delay + words.length * wordDelay;

  return (
    <motion.span
      className={className}
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        padding: "0.1em 0.3em",
      }}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: delay + i * wordDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
      {attribution && (
        <motion.span
          className="block mt-3 sm:mt-4 pb-5 text-sm sm:text-base tracking-[0.28em] uppercase text-sky font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: totalDuration + 0.5 }}
        >
          {attribution}
        </motion.span>
      )}
    </motion.span>
  );
}
