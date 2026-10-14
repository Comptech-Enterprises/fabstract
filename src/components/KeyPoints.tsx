"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";

export interface KeyPoint {
  title: string;
  desc: string;
  image?: string;
  video?: string;
}

const SPRING = "ease-[cubic-bezier(0.34,1.35,0.64,1)]";

function MobileKeyPoints({ items }: { items: KeyPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [activeIndex, setActiveIndex] = useState(0);

  const rawIndex = useTransform(scrollYProgress, (v) => {
    const idx = Math.floor(v * items.length);
    return Math.min(idx, items.length - 1);
  });

  useEffect(() => {
    const unsub = rawIndex.on("change", (v) => setActiveIndex(v));
    return unsub;
  }, [rawIndex]);

  const item = items[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(items.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100 z-[5]" : "opacity-0 z-[1]"
            }`}
          >
            {it.video ? (
              <video
                src={it.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : it.image ? (
              <img
                src={it.image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-navy" />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none z-10" />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <motion.div
            className="h-full bg-teal origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Chapter indicator */}
        <div className="absolute top-6 right-6 z-30">
          <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-mono tracking-widest">
            <span className="text-teal font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(items.length).padStart(2, "0")}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "bg-teal scale-150"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-10 left-6 right-6 z-20">
          <div className="max-w-3xl">
            <motion.span
              key={`tag-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90 mb-3"
            >
              {String(activeIndex + 1).padStart(2, "0")} — Core Capabilities
            </motion.span>
            <motion.h3
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl text-white font-medium leading-[1.1]"
            >
              {item.title}
            </motion.h3>
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-white/75 text-sm leading-relaxed max-w-md [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopKeyPoints({ items }: { items: KeyPoint[] }) {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="max-w-[1536px] mx-auto flex flex-row gap-3 h-[600px]"
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
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-[transform,filter] duration-[800ms] ${SPRING} ${
                  isActive ? "scale-100 grayscale-0" : "scale-110 grayscale"
                }`}
              />
            ) : item.image ? (
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
              className={`absolute inset-0 flex flex-col items-center justify-end gap-3 p-4 transition-opacity duration-300 ${
                isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
              }`}
            >
              <span className="text-[10px] tracking-[0.2em] text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg text-white whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                {item.title}
              </span>
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 p-8 transition-all duration-500 ${
                isActive
                  ? "opacity-100 translate-y-0 delay-300"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-3xl text-white leading-[1.2] max-w-xl">
                {item.title}
              </h3>
              <p
                className="mt-3 text-base text-white/80 leading-relaxed max-w-xl [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
              <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function KeyPoints({ items }: { items: KeyPoint[] }) {
  return (
    <section
      id="s-strengths"
      className="scroll-mt-24 bg-white"
    >
      {/* Header — visible on desktop only (mobile has it inside sticky) */}
      <div className="hidden lg:block py-12 sm:py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto mb-6 sm:mb-8">
          <span className="text-teal text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
            Core Capabilities
          </span>
          <h2 className="mt-2 font-display text-3xl lg:text-4xl text-navy font-medium">
            Our Strengths
          </h2>
        </div>
        <DesktopKeyPoints items={items} />
      </div>

      {/* Mobile: sticky scroll like FactoryVideoShowcase */}
      <div className="lg:hidden">
        <MobileKeyPoints items={items} />
      </div>
    </section>
  );
}
