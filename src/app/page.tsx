"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BANNER_VIDEO } from "@/data/hero";
import { IntroAnimation } from "@/components/IntroAnimation";
import { StickyScrollTabs } from "@/components/StickyScrollTabs";
import { FactoryVideoShowcase } from "@/components/FactoryVideoShowcase";
import { IntroVideo } from "@/components/IntroVideo";
import { KeyPoints } from "@/components/KeyPoints";

const CAPABILITIES = [
  {
    title: "Strategic Hub & Speed",
    desc: "Located in the heart of the NCR apparel cluster, giving us direct access to skilled artisans, specialized infrastructure, and rapid end-to-end turnarounds.",
    image: "/images/strategic-hub.webp",
  },
  {
    title: "Knits & Wovens Mastery",
    desc: "Fully equipped manufacturing units engineered to handle diverse product categories across both woven and knitted garments with ease.",
    image: "/images/knits-wovens.webp",
  },
  {
    title: "Artisan Craft & Specialty Washes",
    desc: "In-house capabilities for intricate embroidery, handcrafted details, complex garment dyeing, and specialty washes.",
    image: "/images/artisan-washes.webp",
  },
  {
    title: "Automation & Smart Manufacturing",
    desc: "Precision CAD systems and automated attachments streamline production, ensuring exact fits, minimal waste, and scalable consistency.",
    image: "/images/smart-manufacturing.webp",
  },
  {
    title: "In-House Quality & Lab Testing",
    desc: "Real-time inline quality control backed by dedicated testing labs to verify colorfastness, shrinkage, and international durability standards.",
  },
  {
    title: "Ethical & Certified Operations",
    desc: "Fully compliant with global benchmarks—certified by <strong>GOTS</strong>, <strong>Fairtrade</strong>, <strong>FLOCERT</strong>, and <strong>Sedex</strong>—with a focus on fair labor and a motivated workforce.",
  },
];

const BRAND_LOGOS = [
  { name: "Living Crafts", src: "/brands/living-crafts.webp" },
  { name: "TBCo", src: "/brands/tbco.webp" },
  { name: "Happy Earth", src: "/brands/happy-earth.webp" },
  { name: "Yes Friends", src: "/brands/yes-friends.webp" },
  { name: "Alp n Rock", src: "/brands/alp-and-rock.webp" },
  { name: "Pact", src: "/brands/pact.webp" },
  { name: "Mate the Label", src: "/brands/mate-the-label.webp" },
  { name: "Chelsea Peers", src: "/brands/chelsea-peers.webp" },
  { name: "Nature Baby", src: "/brands/nature-baby.webp" },
  { name: "Nobody's Child", src: "/brands/nobodys-child.webp" },
  { name: "Yuki Threads", src: "/brands/yuki-threads.webp" },
  { name: "Frugi", src: "/brands/frugi.webp" },
  { name: "Guapoo", src: "/brands/guapoo.webp" },
  { name: "L*Space", src: "/brands/l-space.webp" },
  { name: "Story mfg.", src: "/brands/story-mfg.webp" },
  { name: "Volcom", src: "/brands/volcom.webp" },
  { name: "Renfold", src: "/brands/renfold.webp" },
  { name: "Kowtow", src: "/brands/kowtow.webp" },
];

function LogoRow({ logos, reverse = false }: { logos: typeof BRAND_LOGOS; reverse?: boolean }) {
  const loop = [...logos, ...logos];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-6 sm:gap-10 hover:[animation-play-state:paused]"
        style={{ animation: `logo-marquee 35s linear infinite ${reverse ? "reverse" : "normal"}` }}
      >
        {loop.map((logo, i) => (
          <div
            key={i}
            className="w-44 sm:w-56 h-24 sm:h-28 shrink-0 rounded-xl border border-navy/10 bg-sky/20 flex items-center justify-center px-6"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function GlobalPartner() {
  const reversed = [...BRAND_LOGOS].reverse();

  return (
    <section id="s-brands" className="scroll-mt-24 bg-white py-10 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <span className="text-teal text-sm tracking-[0.25em] uppercase font-medium">Made for a global audience</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy font-medium leading-[1.15] max-w-4xl">
          A global manufacturing partner to 50+ leading brands.
        </h2>
      </div>
      <div className="mt-12 sm:mt-16 flex flex-col gap-6 sm:gap-10">
        <LogoRow logos={BRAND_LOGOS} reverse />
        <LogoRow logos={reversed} />
      </div>
    </section>
  );
}

const FADE_WORDS = ["People", "Planet", "Innovation"];

function FadeThroughSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FADE_WORDS.length);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="s-about"
      className="scroll-mt-24 sm:scroll-mt-28 flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-14"
    >
      <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-navy py-12 sm:py-18 lg:py-22 px-6 sm:px-10 text-center flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
        {/* Thematic backgrounds for People, Planet, and Innovation states */}
        {/* Video background for People */}
        <motion.div
          animate={{
            opacity: index === 0 ? 1 : 0,
            scale: index === 0 ? 1 : 1.05,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
        >
          <video
            src="/videos/15395212_3840_2160_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-40 sm:opacity-50"
          />
        </motion.div>

        <AnimatePresence>
          {index === 1 && (
            <motion.div
              key="planet-pattern-bg"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
            >
              <img
                src="/images/planet-pattern-transparent.png"
                alt="Planet globes pattern"
                className="w-full h-full object-cover opacity-70 sm:opacity-80"
              />
            </motion.div>
          )}
          {index === 2 && (
            <motion.div
              key="innovation-pattern-bg"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
            >
              <img
                src="/images/innovation-pattern-transparent.png"
                alt="Innovation rockets and lightbulbs pattern"
                className="w-full h-full object-cover opacity-30 sm:opacity-35"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="relative z-10 max-w-4xl font-display text-lg sm:text-2xl lg:text-3xl text-white/70 leading-relaxed">
          We redefine garment manufacturing by putting
        </p>
        <div className="relative z-10 mt-4 sm:mt-6 h-14 sm:h-16 lg:h-20 w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute font-display text-3xl sm:text-4xl lg:text-6xl text-white font-semibold"
            >
              {FADE_WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="relative z-10 mt-4 sm:mt-6 max-w-4xl font-display text-lg sm:text-2xl lg:text-3xl text-white/70 leading-relaxed">
          at the core of our business.
        </p>
      </div>
    </section>
  );
}

function VideoBanner() {
  return (
    <section
      id="hero-banner"
      className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] sm:max-h-[920px] sm:min-h-[480px] bg-navy overflow-hidden flex flex-col justify-end"
    >
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[center_60%] sm:object-top"
        />
      </div>
      <div className="relative z-20 w-full text-center">
        <div className="bg-gradient-to-t from-black/90 via-black/60 to-black/25 sm:bg-black/55 backdrop-blur-md sm:backdrop-blur-xl w-full px-4 sm:px-10 lg:px-14 py-3 sm:py-8">
          <blockquote className="font-display text-[13px] sm:text-[24px] lg:text-[30px] xl:text-[34px] text-white font-medium leading-snug sm:leading-[1.3]">
            The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
            <span className="block mt-1 sm:mt-4 text-[10px] sm:text-base tracking-[0.25em] sm:tracking-[0.28em] uppercase text-sky font-bold">— Mahatma Gandhi</span>
          </blockquote>
        </div>
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
      <VideoBanner />
      <StickyScrollTabs>
      <FadeThroughSection />
      <GlobalPartner />

      <IntroVideo />

      <KeyPoints items={CAPABILITIES} />

      {/* 4 Factories — Scroll-Triggered Video */}
      <FactoryVideoShowcase />

      </StickyScrollTabs>
      <Footer />
    </>
  );
}
