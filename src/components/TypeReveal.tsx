"use client";

import { motion } from "framer-motion";

export function TypeReveal({
  children,
  className = "",
  delay = 0,
  wordDelay = 0.12,
}: {
  children: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const words = children.split(" ");

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
    </motion.span>
  );
}
