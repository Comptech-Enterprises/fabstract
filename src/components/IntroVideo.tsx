"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_VIDEOS } from "@/data/hero";

const MAX_CLIP_MS = 10000;

export function IntroVideo() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = () => setIndex((i) => (i + 1) % INTRO_VIDEOS.length);

  useEffect(() => {
    const t = setTimeout(next, MAX_CLIP_MS);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [index]);

  return (
    <section id="s-showcase" className="scroll-mt-24 bg-white px-4 sm:px-8 lg:px-14 py-10 sm:py-16">
      <div className="relative mx-auto max-w-[1536px] aspect-video rounded-2xl overflow-hidden border-2 border-navy/15 shadow-xl bg-navy">
        <video
          key={index}
          ref={videoRef}
          src={INTRO_VIDEOS[index]}
          autoPlay
          muted={muted}
          playsInline
          preload="auto"
          onEnded={next}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
        >
          {muted ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M23 9l-6 6M17 9l6 6" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" />
            </svg>
          )}
        </button>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex gap-2">
          {INTRO_VIDEOS.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
