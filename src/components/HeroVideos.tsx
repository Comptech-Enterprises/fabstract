"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_VIDEOS } from "@/data/hero";

const slide = {
  initial: { x: "100%" },
  animate: { x: "0%" },
  exit: { x: "-100%" },
};

export function HeroVideos() {
  const [index, setIndex] = useState(0);
  const next = (index + 1) % HERO_VIDEOS.length;

  return (
    <div className="absolute inset-0 overflow-hidden bg-smoky-black">
      <AnimatePresence initial={false}>
        <motion.video
          key={HERO_VIDEOS[index]}
          src={HERO_VIDEOS[index]}
          autoPlay
          muted
          playsInline
          preload="auto"
          initial={slide.initial}
          animate={slide.animate}
          exit={slide.exit}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          onEnded={() => setIndex((i) => (i + 1) % HERO_VIDEOS.length)}
          onLoadedData={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <video src={HERO_VIDEOS[next]} muted preload="auto" className="hidden" aria-hidden />
    </div>
  );
}
