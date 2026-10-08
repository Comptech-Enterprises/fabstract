"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { INTRO_VIDEOS } from "@/data/hero";

export interface ShowcaseItem {
  id: number;
  title: string;
  tag: string;
  desc: string;
  videoSrc: string;
}

const DEFAULT_SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 1,
    tag: "Showcase 01 — Innovation",
    title: "Precision Craftsmanship",
    desc: "From yarn selection to bespoke finishing, precision technology meets artisan expertise at every single stage of production.",
    videoSrc: INTRO_VIDEOS[0],
  },
  {
    id: 2,
    tag: "Showcase 02 — Sustainability",
    title: "Conscious Manufacturing",
    desc: "State-of-the-art closed-loop processes engineered to conserve natural resources, reduce carbon emissions, and optimize material efficiency.",
    videoSrc: INTRO_VIDEOS[1],
  },
  {
    id: 3,
    tag: "Showcase 03 — Global Scale",
    title: "Scalable Production & Delivery",
    desc: "Export-grade consistency delivering over 250,000 premium units monthly to top fashion brands across the globe.",
    videoSrc: INTRO_VIDEOS[2],
  },
];

const SPRING = "ease-[cubic-bezier(0.34,1.35,0.64,1)]";

export function IntroVideo({ items = DEFAULT_SHOWCASE_ITEMS }: { items?: ShowcaseItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const activeIndex = useTransform(scrollYProgress, (v) => {
    const idx = Math.floor(v * items.length);
    return Math.min(idx, items.length - 1);
  });

  return (
    <div
      ref={containerRef}
      id="s-showcase"
      className="scroll-mt-24 relative bg-white"
      style={{ height: `${(items.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center py-8 sm:py-12 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto w-full relative">
          {/* Header kicker */}
          <div className="mb-6 sm:mb-8 flex items-center justify-between">
            <div>
              <span className="text-teal text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
                Video Showcase
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-navy font-medium">
                Crafting the Future of Apparel
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute audio" : "Mute audio"}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 hover:bg-navy/10 text-navy text-xs font-medium transition-colors"
            >
              {muted ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M23 9l-6 6M17 9l6 6" />
                  </svg>
                  <span className="hidden sm:inline">Unmute</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" />
                  </svg>
                  <span className="hidden sm:inline">Mute</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 h-[700px] sm:h-[760px] lg:h-[580px]">
            {items.map((item, i) => (
              <ShowcaseCard
                key={item.id}
                item={item}
                index={i}
                muted={muted}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({
  item,
  index,
  muted,
  activeIndex,
}: {
  item: ShowcaseItem;
  index: number;
  muted: boolean;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const isActive = useTransform(activeIndex, (v) => v === index);

  return (
    <motion.div
      style={{ flexGrow: useTransform(isActive, (a) => (a ? 6 : 1)) }}
      className={`relative min-h-0 min-w-0 basis-0 overflow-hidden rounded-2xl bg-navy cursor-pointer outline-none transition-[flex-grow] duration-[800ms] ${SPRING}`}
    >
      <motion.video
        src={item.videoSrc}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        style={{
          scale: useTransform(isActive, (a) => (a ? 1 : 1.1)),
          filter: useTransform(isActive, (a) =>
            a ? "grayscale(0)" : "grayscale(0.7)"
          ),
        }}
        className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-[transform,filter] duration-[800ms] ${SPRING}`}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500"
        style={{ opacity: useTransform(isActive, (a) => (a ? 1 : 0.75)) }}
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
          {item.tag}
        </span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl text-white leading-[1.2] max-w-xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
          {item.desc}
        </p>
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
