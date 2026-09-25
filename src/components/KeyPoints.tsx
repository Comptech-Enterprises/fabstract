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
const ROW = 69; // 68px button + 1px divider
const HALF_ROW = 34;

export function KeyPoints({ items }: { items: KeyPoint[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[active];
  const junctionY = 1 + active * ROW + HALF_ROW;

  const next = () => setActive((i) => (i + 1) % items.length);

  return (
    <section
      id="s-strengths"
      className="scroll-mt-24 bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative max-w-[1536px] mx-auto grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-24 items-start">
        <ul className="flex flex-col">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.title} className="relative border-b border-navy/10 first:border-t">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="w-full h-[68px] flex items-center gap-3 text-left cursor-pointer"
                >
                  <span className={`text-[10px] tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-teal" : "text-navy/30"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-lg sm:text-xl leading-tight transition-colors duration-300 ${
                      isActive ? "text-navy" : "text-navy/35 hover:text-navy/70"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
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
              </li>
            );
          })}
        </ul>

        {/* Branch: runs from the active title across the gap to the photo */}
        <div aria-hidden className="hidden lg:block absolute inset-y-0 left-[300px] w-24 pointer-events-none">
          <div className="absolute left-12 top-0 bottom-0 w-px bg-navy/10" />
          <motion.div
            className="absolute left-0 h-px w-12 bg-navy"
            initial={false}
            animate={{ top: junctionY }}
            transition={{ duration: 0.5, ease: EASE }}
          />
          <motion.span
            className="absolute left-12 -ml-1 w-2 h-2 rounded-full bg-navy"
            initial={false}
            animate={{ top: junctionY - 4 }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <p
                className="text-navy/75 text-lg sm:text-xl lg:text-2xl leading-[1.6] max-w-3xl"
                dangerouslySetInnerHTML={{ __html: current.desc }}
              />
              {current.image && (
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className="mt-8 w-full aspect-[16/9] object-cover rounded-2xl lg:rounded-l-none lg:[mask-image:linear-gradient(to_right,transparent,black_22%)]"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
