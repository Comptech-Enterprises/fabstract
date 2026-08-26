"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BANNER_VIDEO } from "@/data/hero";
import { ParallaxLayer } from "@/components/Parallax";
import { TypeReveal } from "@/components/TypeReveal";
import { IntroAnimation } from "@/components/IntroAnimation";
import { StickyScrollTabs } from "@/components/StickyScrollTabs";

function VideoBanner({ introComplete }: { introComplete: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const navyOrbY = useTransform(heroProgress, [0, 1], [0, 120]);
  const navyOrbY2 = useTransform(heroProgress, [0, 1], [0, -80]);
  const quoteY = useTransform(heroProgress, [0, 1], [0, 90]);
  const quoteOpacity = useTransform(heroProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={heroRef}
      className="relative h-[80vh] min-h-[560px] bg-navy overflow-hidden flex items-center px-5 sm:px-10 lg:px-14"
    >
      <ParallaxLayer speed={0.25} className="absolute inset-0">
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </ParallaxLayer>
      <div className="pointer-events-none absolute inset-0 bg-navy/70" />
      <motion.div
        style={{ y: navyOrbY }}
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border border-white/10"
      />
      <motion.div
        style={{ y: navyOrbY2 }}
        className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full border border-white/10"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div style={{ y: quoteY, opacity: quoteOpacity }}>
          <span className="text-teal text-6xl sm:text-7xl font-display leading-none">&ldquo;</span>
          <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.3] -mt-6">
            {introComplete ? (
              <TypeReveal className="block w-full" duration={1.6}>
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </TypeReveal>
            ) : (
              <span className="block w-full opacity-0">
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </span>
            )}
          </blockquote>
          {introComplete && (
            <p className="mt-8 text-[12px] tracking-[0.28em] uppercase text-sky">
              — Mahatma Gandhi
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Navbar />
      <VideoBanner introComplete={introComplete} />
      <StickyScrollTabs />
      <Footer />
    </>
  );
}
