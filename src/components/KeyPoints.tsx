"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export interface KeyPoint {
  title: string;
  desc: string;
  image?: string;
}

const SPRING = "ease-[cubic-bezier(0.34,1.35,0.64,1)]";

export function KeyPoints({ items }: { items: KeyPoint[] }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="s-strengths"
      className="scroll-mt-24 bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="max-w-[1536px] mx-auto flex flex-col lg:flex-row gap-3 h-[760px] sm:h-[820px] lg:h-[600px]"
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.title}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`relative min-h-0 min-w-0 basis-0 overflow-hidden rounded-2xl bg-navy cursor-pointer outline-none transition-[flex-grow] duration-[800ms] ${SPRING} ${
                isActive ? "grow-[6]" : "grow"
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-[transform,filter] duration-[800ms] ${SPRING} ${
                    isActive ? "scale-100 grayscale-0" : "scale-110 grayscale"
                  }`}
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-navy to-navy transition-all duration-[800ms] ${
                    isActive ? "via-teal/70 to-sky/60" : "via-navy"
                  }`}
                />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
              />

              <div
                className={`absolute inset-0 flex lg:flex-col items-center lg:justify-end gap-3 p-4 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                }`}
              >
                <span className="text-[10px] tracking-[0.2em] text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base lg:text-lg text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
                  {item.title}
                </span>
              </div>

              <div
                className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-y-0 delay-300"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl text-white leading-[1.2] max-w-xl">
                  {item.title}
                </h3>
                <p
                  className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
