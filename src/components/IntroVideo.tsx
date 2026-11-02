"use client";

import { useEffect, useRef, useState } from "react";
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
    desc: "From yarn selection to finishing, precision technology meets artisan expertise at every single stage of production.",
    videoSrc: INTRO_VIDEOS[0],
  },
  {
    id: 2,
    tag: "Showcase 02 — Sustainability",
    title: "Conscious Manufacturing",
    desc: "State-of-the-art processes engineered to conserve natural resources, reduce carbon emissions, and optimize material efficiency.",
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

const MAX_VOLUME = 0.3;

export function IntroVideo({ items = DEFAULT_SHOWCASE_ITEMS }: { items?: ShowcaseItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-mute when scrolling away from the showcase section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setMuted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="s-showcase"
      className="scroll-mt-24 relative bg-white py-10 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1536px] mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
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
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 hover:bg-navy/10 text-navy text-xs font-medium transition-colors cursor-pointer"
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
              isActive={activeIndex === i}
              muted={muted || activeIndex !== i}
              onActivate={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  item,
  index,
  isActive,
  muted,
  onActivate,
}: {
  item: ShowcaseItem;
  index: number;
  isActive: boolean;
  muted: boolean;
  onActivate: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = MAX_VOLUME;
    video.muted = muted;
  }, [muted]);

  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      style={{ flexGrow: isActive ? 6 : 1 }}
      className="relative min-h-0 min-w-0 basis-0 overflow-hidden rounded-2xl bg-navy cursor-pointer outline-none transition-[flex-grow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      <video
        ref={videoRef}
        src={item.videoSrc}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.volume = MAX_VOLUME;
        }}
        onVolumeChange={(e) => {
          if (e.currentTarget.volume > MAX_VOLUME) {
            e.currentTarget.volume = MAX_VOLUME;
          }
        }}
        className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-all duration-700 ease-out ${
          isActive ? "scale-100 grayscale-0" : "scale-105 grayscale-[70%]"
        }`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-75"
        }`}
      />

      {/* Collapsed label */}
      <div
        className={`absolute inset-0 flex lg:flex-col items-center lg:justify-end gap-3 p-4 transition-all duration-300 ${
          isActive
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <span className="text-[10px] tracking-[0.2em] text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-base lg:text-lg text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
          {item.title}
        </span>
      </div>

      {/* Expanded content */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 transition-all duration-500 ${
          isActive
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
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
      </div>
    </div>
  );
}
