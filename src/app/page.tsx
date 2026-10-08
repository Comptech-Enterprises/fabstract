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
import { MarqueeAlongSvgPath } from "@/components/ui/marquee-along-svg-path";

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

const MARQUEE_PATH =
  "M71.13 581.57C98.09 566.80 144.80 533.24 185.86 485.17M185.86 485.17C212.71 453.73 237.14 416.10 252.06 373.45C299.21 238.60 4.33 353.58 123.68 447.09C143.81 462.86 164.51 475.63 185.86 485.17ZM185.86 485.17C291.16 532.21 412.43 500.85 559.71 364.13C587.75 338.09 610.14 315.32 627.88 295.31M627.88 295.31C722.19 188.88 685.02 160.49 667.55 135.10C646.78 104.93 471.87 64.29 487.56 238.35C494.31 313.21 551.99 311.61 627.88 295.31ZM627.88 295.31C819.95 276.23 1090.39 237.04 1176.65 276.67M1176.65 276.67C1188.08 281.92 1199.03 288.55 1209.38 296.80C1364.50 420.52 1287.58 590.88 1173.25 612.66C1098.14 626.96 1097.61 445.94 1176.65 276.67ZM1176.65 276.67C1217.91 188.31 1280.85 103.15 1366.18 50.64";

function GlobalPartner() {
  return (
    <section id="s-brands" className="scroll-mt-24 bg-white py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mb-8 sm:mb-12 relative z-20">
        <span className="text-teal text-sm tracking-[0.25em] uppercase font-medium">Made for a global audience</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy font-medium leading-[1.15] max-w-4xl">
          A global manufacturing partner to 50+ leading brands.
        </h2>
      </div>

      <div className="relative w-full h-[540px] sm:h-[620px] md:h-[680px] lg:h-[740px] overflow-hidden flex items-center justify-center">
        <MarqueeAlongSvgPath
          path={MARQUEE_PATH}
          viewBox="0 0 1440 680"
          alignX="right"
          baseVelocity={4}
          showPath={false}
          offsetRotate="auto"
          slowdownOnHover={true}
          slowDownFactor={0.25}
          draggable={true}
          dragAwareDirection={true}
          dragVelocityDecay={0.98}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          repeat={1}
          enableRollingZIndex={true}
          dragSensitivity={0.015}
          responsive={true}
          grabCursor={true}
          className="w-full h-full"
        >
          {BRAND_LOGOS.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="w-24 sm:w-28 md:w-32 h-13 sm:h-15 md:h-17 rounded-xl sm:rounded-2xl border border-navy/10 bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] flex items-center justify-center px-3 sm:px-4 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                loading="lazy"
                className="max-h-6 sm:max-h-7 md:max-h-8 max-w-[80%] w-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
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
      className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-18 min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)] flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-12"
    >
      <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-navy py-14 sm:py-20 lg:py-24 px-6 sm:px-10 text-center flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
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
      className="relative w-full h-[calc(100svh-3.5rem)] sm:h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] max-h-[920px] min-h-[480px] bg-navy overflow-hidden flex flex-col justify-end"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Ambient video blur behind on mobile so the viewport is filled with matching light & motion */}
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="sm:hidden absolute inset-0 h-full w-full object-cover blur-2xl opacity-60 scale-110 pointer-events-none"
        />
        {/* Main video: zoomed out on mobile (object-contain) to show the full width with both kids */}
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="relative z-10 w-full h-full object-contain sm:object-cover sm:object-top"
        />
      </div>
      <div className="relative z-20 w-full text-center">
        <div className="bg-black/55 backdrop-blur-xl w-full px-5 sm:px-10 lg:px-14 py-6 sm:py-8">
          <blockquote className="font-display text-[16px] sm:text-[24px] lg:text-[30px] xl:text-[34px] text-white font-medium leading-[1.3]">
            The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
            <span className="block mt-3 sm:mt-4 text-sm sm:text-base tracking-[0.28em] uppercase text-sky font-bold">— Mahatma Gandhi</span>
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
