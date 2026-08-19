"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO } from "@/data/hero";

export function HeroVideos() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.playsInline = true;
    const play = () => el.play().catch(() => {});
    play();
    el.addEventListener("canplay", play);
    return () => el.removeEventListener("canplay", play);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy">
      <video
        ref={ref}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
