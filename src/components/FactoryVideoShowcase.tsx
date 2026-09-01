"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FactoryVideoItem {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  videoSrc?: string;
  noFilter?: boolean;
}

const DEFAULT_VIDEOS: FactoryVideoItem[] = [
  {
    id: 1,
    title: "Knitting & Fabric Engineering",
    subtitle: "Precision circular and flat knitting machines turning raw yarn into luxury single jersey, interlock, and rib fabrics.",
    tag: "Unit 01 — Knitting",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-3902.mp4",
  },
  {
    id: 2,
    title: "Precision Automated Cutting",
    subtitle: "High-speed CAD-guided computerized spreading and laser cutting ensuring zero wastage and exact seam matching.",
    tag: "Unit 02 — Cutting",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2408.mp4",
  },
  {
    id: 3,
    title: "Specialized Sewing Lines",
    subtitle: "Skilled seamstresses with modular workstations crafting complex woven and knit garment constructions.",
    tag: "Unit 03 — Assembly",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2159.mp4",
    noFilter: true,
  },
  {
    id: 4,
    title: "Artisanal Embroidery & Handcraft",
    subtitle: "Multi-head automated embroidery paired with traditional artisanal embellishment for bespoke detail.",
    tag: "Unit 04 — Craft",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2243.mp4",
  },
  {
    id: 5,
    title: "Garment Dyeing & Eco-Washes",
    subtitle: "State-of-the-art closed-loop washing, pigment dyeing, and sustainable enzyme treatments with zero liquid discharge.",
    tag: "Unit 05 — Dye & Wash",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2046.mp4",
  },
  {
    id: 6,
    title: "Finishing, Steaming & Packing",
    subtitle: "Automated tunnel finishers, barcode tag validation, and export packaging ready for global retail floors.",
    tag: "Unit 06 — Logistics",
    videoSrc: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/whatsapp-video-01sept.mp4",
  },
];

export function FactoryVideoShowcase({
  videos = DEFAULT_VIDEOS,
}: {
  videos?: FactoryVideoItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentVideo = videos[currentIndex];

  const nextVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const prevVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  const handleVideoEnded = () => {
    nextVideo();
  };

  useEffect(() => {
    if (!currentVideo.videoSrc && isPlaying) {
      timerRef.current = setTimeout(() => {
        nextVideo();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, currentVideo.videoSrc, nextVideo]);

  return (
    <div className="relative w-full">
      {/* ── Large Cinematic Full-Resolution Video Player ── */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[440px] max-h-[740px] rounded-2xl lg:rounded-3xl overflow-hidden bg-navy shadow-2xl border border-navy/20">
        
        {/* Animate video changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {currentVideo.videoSrc ? (
              <video
                ref={videoRef}
                src={currentVideo.videoSrc}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full bg-navy flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/30 via-navy/85 to-navy" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <span className="relative z-10 text-white/60 text-xs tracking-[0.25em] uppercase font-mono">
                  Loading Video • Unit 0{currentIndex + 1}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Overlays ── */}
        {!currentVideo.noFilter ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-transparent to-transparent pointer-events-none z-10" />
          </>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
        )}

        {/* ── Top Bar (Counter) ── */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-10 flex items-center justify-end z-20 pointer-events-auto">
          <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-mono tracking-widest">
            <span className="text-sky font-bold">0{currentIndex + 1}</span> / 0{videos.length}
          </div>
        </div>

        {/* ── Bottom Content Overlay ── */}
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h3
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-2xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.15]"
            >
              {currentVideo.title}
            </motion.h3>
            <motion.p
              key={`sub-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            >
              {currentVideo.subtitle}
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end lg:self-auto">
            <button
              onClick={prevVideo}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
              aria-label="Previous video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextVideo}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
              aria-label="Next video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
