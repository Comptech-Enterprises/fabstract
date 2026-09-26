"use client";

import React, { useState, useCallback } from "react";
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
    <section id="s-brands" className="scroll-mt-24 bg-white py-16 sm:py-24 overflow-hidden">
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
        <div className="bg-black/30 w-full px-5 sm:px-10 lg:px-14 py-6 sm:py-8">
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
      <section id="s-about" className="scroll-mt-24 bg-sky/20 py-14 sm:py-20 px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-center font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.3]">
            We are redefining apparel manufacturing by putting people, planet, and innovation at the core of our business.
          </p>
        </div>
      </section>
      <GlobalPartner />

      <IntroVideo />

      <KeyPoints items={CAPABILITIES} />

      {/* 4 Factories & Cinematic Large Video Showcase */}
      <section id="s-factories" className="scroll-mt-24 bg-sky/10 py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-navy/10">
        <div className="max-w-[1536px] mx-auto">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-navy font-medium leading-[1.3] max-w-5xl mb-10 sm:mb-14">
            4 factories fully equipped to handle 100% woven or 100% knitted garments — end to end, under one roof.
          </p>

          <FactoryVideoShowcase />
        </div>
      </section>

      </StickyScrollTabs>
      <Footer />
    </>
  );
}
