"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface KeyPoint {
  title: string;
  desc: string;
  image?: string;
}

const SPRING = "ease-[cubic-bezier(0.34,1.35,0.64,1)]";

export function KeyPoints({ items }: { items: KeyPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const activeIndex = useTransform(scrollYProgress, (v) => {
    const idx = Math.floor(v * items.length);
    return Math.min(idx, items.length - 1);
  });

  return (
    <div
      ref={containerRef}
      id="s-strengths"
      className="scroll-mt-24 relative bg-white"
      style={{ height: `${(items.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center py-8 sm:py-12 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto w-full flex flex-col lg:flex-row gap-3 h-[760px] sm:h-[820px] lg:h-[600px]">
          {items.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              index={i}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({
  item,
  index,
  activeIndex,
}: {
  item: KeyPoint;
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const isActive = useTransform(activeIndex, (v) => v === index);

  return (
    <motion.div
      style={{ flexGrow: useTransform(isActive, (a) => (a ? 6 : 1)) }}
      className={`relative min-h-0 min-w-0 basis-0 overflow-hidden rounded-2xl bg-navy cursor-pointer outline-none transition-[flex-grow] duration-[800ms] ${SPRING}`}
    >
      {item.image ? (
        <motion.img
          src={item.image}
          alt=""
          loading="lazy"
          style={{
            scale: useTransform(isActive, (a) => (a ? 1 : 1.1)),
            filter: useTransform(isActive, (a) =>
              a ? "grayscale(0)" : "grayscale(1)"
            ),
          }}
          className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-[transform,filter] duration-[800ms] ${SPRING}`}
        />
      ) : (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-navy to-navy transition-all duration-[800ms]"
          style={{
            background: useTransform(isActive, (a) =>
              a
                ? "linear-gradient(to bottom right, var(--color-navy), var(--color-teal)/70%, var(--color-sky)/60%)"
                : "linear-gradient(to bottom right, var(--color-navy), var(--color-navy))"
            ),
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500"
        style={{ opacity: useTransform(isActive, (a) => (a ? 1 : 0.7)) }}
      />

      {/* Collapsed label */}
      <motion.div
        className="absolute inset-0 flex lg:flex-col items-center lg:justify-end gap-3 p-4 transition-opacity duration-300"
        style={{
          opacity: useTransform(isActive, (a) => (a ? 0 : 1)),
          pointerEvents: useTransform(isActive, (a) =>
            a ? "none" : "auto"
          ) as any,
        }}
      >
        <span className="text-[10px] tracking-[0.2em] text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-base lg:text-lg text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
          {item.title}
        </span>
      </motion.div>

      {/* Expanded content */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6 sm:p-8 transition-all duration-500"
        style={{
          opacity: useTransform(isActive, (a) => (a ? 1 : 0)),
          y: useTransform(isActive, (a) => (a ? 0 : 16)),
          pointerEvents: useTransform(isActive, (a) =>
            a ? "auto" : "none"
          ) as any,
        }}
      >
        <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl text-white leading-[1.2] max-w-xl">
          {item.title}
        </h3>
        <p
          className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl [&_strong]:font-semibold"
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
      </motion.div>
    </motion.div>
  );
}
