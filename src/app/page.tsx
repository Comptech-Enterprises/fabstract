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
  "M1.12756 531.57C28.0893 516.8 74.8013 483.241 115.862 435.167M115.862 435.167C142.71 403.734 167.142 366.095 182.056 323.447C229.212 188.604 -65.6747 303.582 53.6794 397.09C73.8056 412.858 94.5052 425.626 115.862 435.167ZM115.862 435.167C221.157 482.211 342.426 450.85 489.709 314.125C517.752 288.093 540.139 265.319 557.876 245.305M557.876 245.305C652.19 138.884 615.024 110.493 597.546 85.1004C576.782 54.9327 401.867 14.2899 417.559 188.351C424.308 263.214 481.985 261.608 557.876 245.305ZM557.876 245.305C749.947 226.232 1020.389 187.041 1106.650 226.667M1106.650 226.667C1118.081 231.918 1129.031 238.554 1139.376 246.804C1294.500 370.518 1217.576 540.884 1103.253 562.658C1028.137 576.964 1027.606 395.943 1106.650 226.667ZM1106.650 226.667C1147.908 138.309 1210.848 53.1511 1296.180 0.642822";

function GlobalPartner() {
  return (
    <section id="s-brands" className="scroll-mt-24 bg-white py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mb-8 sm:mb-12 relative z-20">
        <span className="text-teal text-sm tracking-[0.25em] uppercase font-medium">Made for a global audience</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy font-medium leading-[1.15] max-w-4xl">
          A global manufacturing partner to 50+ leading brands.
        </h2>
      </div>

      <div className="relative w-full h-[520px] sm:h-[600px] md:h-[680px] lg:h-[720px] overflow-hidden flex items-center justify-center">
        <MarqueeAlongSvgPath
          path={MARQUEE_PATH}
          viewBox="0 0 1300 570"
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
              className="w-28 sm:w-34 md:w-40 h-16 sm:h-18 md:h-22 rounded-2xl border border-navy/10 bg-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] flex items-center justify-center px-4 sm:px-5 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                loading="lazy"
                className="max-h-7 sm:max-h-9 md:max-h-10 max-w-[85%] w-auto object-contain pointer-events-none"
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
      <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-navy py-14 sm:py-20 lg:py-24 px-6 sm:px-10 text-center flex flex-col items-center justify-center shadow-xl">
        <p className="max-w-4xl font-display text-lg sm:text-2xl lg:text-3xl text-white/70 leading-relaxed">
          We redefine garment manufacturing by putting
        </p>
        <div className="relative mt-4 sm:mt-6 h-14 sm:h-16 lg:h-20 w-full flex items-center justify-center">
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
        <p className="mt-4 sm:mt-6 max-w-4xl font-display text-lg sm:text-2xl lg:text-3xl text-white/70 leading-relaxed">
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
      className="relative w-full h-[calc(100svh-3.5rem)] sm:h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] max-h-[920px] min-h-[480px] bg-navy overflow-hidden flex items-end"
    >
      <div className="absolute inset-0">
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="relative w-full text-center">
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
