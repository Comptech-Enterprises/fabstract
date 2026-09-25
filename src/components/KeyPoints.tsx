"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export interface KeyPoint {
  title: string;
  desc: string;
  image?: string;
}

const SLIDE_SECONDS = 5;

export function KeyPoints({ items }: { items: KeyPoint[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[active];

  const next = () => setActive((i) => (i + 1) % items.length);

  return (
    <section
      id="s-strengths"
      className="scroll-mt-24 bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1536px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start">
        <ul className="flex flex-col">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.title} className="border-b border-navy/10 first:border-t">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="relative w-full flex items-baseline gap-4 sm:gap-6 py-5 sm:py-6 text-left cursor-pointer"
                >
                  <span className={`text-xs tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-teal" : "text-navy/30"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-2xl sm:text-3xl transition-colors duration-300 ${
                      isActive ? "text-navy" : "text-navy/35 hover:text-navy/70"
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-navy/10 overflow-hidden">
                      <span
                        key={active}
                        onAnimationEnd={next}
                        className="block h-full w-full bg-navy origin-left"
                        style={{
                          animation: `kp-progress ${SLIDE_SECONDS}s linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="lg:sticky lg:top-28 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <p
                className="text-navy/75 text-lg sm:text-xl lg:text-2xl leading-[1.7]"
                dangerouslySetInnerHTML={{ __html: current.desc }}
              />
              {current.image && (
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className="mt-8 w-full aspect-[3/2] object-cover rounded-2xl"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
