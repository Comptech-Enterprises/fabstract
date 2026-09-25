"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BANNER_VIDEO } from "@/data/hero";
import { TypeReveal } from "@/components/TypeReveal";
import { IntroAnimation } from "@/components/IntroAnimation";
import { StickyScrollTabs } from "@/components/StickyScrollTabs";
import { FactoryVideoShowcase } from "@/components/FactoryVideoShowcase";
import { IntroVideo } from "@/components/IntroVideo";

const CAPABILITIES = [
  {
    title: "Strategic Hub & Speed",
    desc: "Located in the heart of the NCR apparel cluster, giving us direct access to skilled artisans, specialized infrastructure, and rapid end-to-end turnarounds.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    title: "Knits & Wovens Mastery",
    desc: "Fully equipped manufacturing units engineered to handle diverse product categories across both woven and knitted garments with ease.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  {
    title: "Artisan Craft & Specialty Washes",
    desc: "In-house capabilities for intricate embroidery, handcrafted details, complex garment dyeing, and specialty washes.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5H18l-3.7 2.7 1.4 4.3L12 12l-3.7 2.5 1.4-4.3L6 7.5h4.5z"/><path d="M5 19a2 2 0 104 0 2 2 0 10-4 0"/><path d="M15 19a2 2 0 104 0 2 2 0 10-4 0"/></svg>',
  },
  {
    title: "Automation & Smart Manufacturing",
    desc: "Precision CAD systems and automated attachments streamline production, ensuring exact fits, minimal waste, and scalable consistency.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>',
  },
  {
    title: "In-House Quality & Lab Testing",
    desc: "Real-time inline quality control backed by dedicated testing labs to verify colorfastness, shrinkage, and international durability standards.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  },
  {
    title: "Ethical & Certified Operations",
    desc: "Fully compliant with global benchmarks—certified by <strong>GOTS</strong>, <strong>Fairtrade</strong>, <strong>FLOCERT</strong>, and <strong>Sedex</strong>—with a focus on fair labor and a motivated workforce.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
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
];

function GlobalPartner() {
  const loop = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section id="s-brands" className="scroll-mt-24 bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <span className="text-teal text-sm tracking-[0.25em] uppercase font-medium">Made for a global audience</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy font-medium leading-[1.15] max-w-4xl">
          A global manufacturing partner to 50+ leading brands.
        </h2>
      </div>
      <div className="mt-12 sm:mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max gap-6 sm:gap-10 hover:[animation-play-state:paused]"
          style={{ animation: "logo-marquee 30s linear infinite" }}
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
    </section>
  );
}

function VideoBanner({ introComplete }: { introComplete: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const quoteY = useTransform(heroProgress, [0, 1], [0, 90]);

  return (
    <section
      id="hero-banner"
      ref={heroRef}
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
        <motion.div style={{ y: quoteY }} className="bg-black/30 w-full px-5 sm:px-10 lg:px-14 py-6 sm:py-8">
          <blockquote className="font-display text-[16px] sm:text-[24px] lg:text-[30px] xl:text-[34px] text-white font-medium leading-[1.3]">
            {introComplete ? (
              <TypeReveal className="block w-full" delay={0.3} charDelay={0.04} attribution="— Mahatma Gandhi" noBg>
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </TypeReveal>
            ) : (
              <span className="block w-full opacity-0">
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </span>
            )}
          </blockquote>
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

      {/* Key points */}
      <section id="s-strengths" className="scroll-mt-24 bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title}>
              <div className="w-10 h-10 text-teal mb-4" dangerouslySetInnerHTML={{ __html: cap.icon }} />
              <h3 className="font-display text-xl sm:text-2xl text-navy font-medium mb-3">{cap.title}</h3>
              <p className="text-navy/65 text-sm sm:text-base leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: cap.desc }} />
            </div>
          ))}
        </div>
      </section>

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
