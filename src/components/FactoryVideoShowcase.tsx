"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    subtitle:
      "Precision circular and flat knitting machines turning raw yarn into luxury single jersey, interlock, and rib fabrics.",
    tag: "Unit 01 — Knitting",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-3902.mp4",
  },
  {
    id: 2,
    title: "Precision Automated Cutting",
    subtitle:
      "High-speed CAD-guided computerized spreading and laser cutting ensuring zero wastage and exact seam matching.",
    tag: "Unit 02 — Cutting",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2408.mp4",
  },
  {
    id: 3,
    title: "Specialized Sewing Lines",
    subtitle:
      "Skilled seamstresses with modular workstations crafting complex woven and knit garment constructions.",
    tag: "Unit 03 — Assembly",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2159.mp4",
    noFilter: true,
  },
  {
    id: 4,
    title: "Artisanal Embroidery & Handcraft",
    subtitle:
      "Multi-head automated embroidery paired with traditional artisanal embellishment for bespoke detail.",
    tag: "Unit 04 — Craft",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2243.mp4",
  },
  {
    id: 5,
    title: "Company Snapshot",
    subtitle:
      "35+ years of export experience and a capacity of 2,50,000 units per month.",
    tag: "Unit 05 — Snapshot",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/video-2046.mp4",
  },
  {
    id: 6,
    title: "Finishing, Steaming & Packing",
    subtitle:
      "4 factories in Noida, India, 40+ active clients, and certified by GOTS, OCS, OEKO-TEX and Fairtrade.",
    tag: "Unit 06 — Logistics",
    videoSrc:
      "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/media/whatsapp-video-01sept.mp4",
  },
];

export function FactoryVideoShowcase({
  videos = DEFAULT_VIDEOS,
}: {
  videos?: FactoryVideoItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [activeIndex, setActiveIndex] = useState(0);

  const rawIndex = useTransform(scrollYProgress, (v) => {
    const idx = Math.floor(v * videos.length);
    return Math.min(idx, videos.length - 1);
  });

  useEffect(() => {
    const unsub = rawIndex.on("change", (v) => setActiveIndex(v));
    return unsub;
  }, [rawIndex]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(videos.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video layers */}
        {videos.map((video, i) => (
          <VideoLayer key={video.id} video={video} active={i === activeIndex} />
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/20 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent pointer-events-none z-10" />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <motion.div
            className="h-full bg-sky origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Chapter indicator */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-10 z-30">
          <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-mono tracking-widest">
            <span className="text-sky font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(videos.length).padStart(2, "0")}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "bg-sky scale-150"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Bottom text overlay */}
        <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-10 lg:left-16 right-6 sm:right-10 z-20">
          <div className="max-w-3xl">
            <motion.span
              key={`tag-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white/90 mb-4"
            >
              {videos[activeIndex].tag}
            </motion.span>
            <motion.h3
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-medium leading-[1.1]"
            >
              {videos[activeIndex].title}
            </motion.h3>
            <motion.p
              key={`sub-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
            >
              {videos[activeIndex].subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoLayer({
  video,
  active,
}: {
  video: FactoryVideoItem;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (active) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        active ? "opacity-100 z-[5]" : "opacity-0 z-[1]"
      }`}
    >
      {video.videoSrc ? (
        <video
          ref={videoRef}
          src={video.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-navy flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/30 via-navy/85 to-navy" />
        </div>
      )}
    </div>
  );
}
