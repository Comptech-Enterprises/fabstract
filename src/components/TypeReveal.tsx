"use client";

import { motion } from "framer-motion";

export function TypeReveal({
  children,
  className = "",
  delay = 0,
  charDelay = 0.04,
  attribution,
  noBg = false,
}: {
  children: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  attribution?: string;
  noBg?: boolean;
}) {
  const chars = children.split("");
  const totalDuration = delay + chars.length * charDelay;

  return (
    <motion.span
      className={className}
      style={noBg ? {} : {
        backgroundColor: "rgba(0,0,0,0.3)",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        padding: "0.1em 0.3em",
      }}
      initial={noBg ? {} : { backgroundColor: "rgba(0,0,0,0)" }}
      animate={noBg ? {} : { backgroundColor: "rgba(0,0,0,0.3)" }}
      transition={noBg ? {} : { duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * charDelay,
            ease: "linear",
          }}
        >
          {char}
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
