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
import { FactoryVideoShowcase } from "@/components/FactoryVideoShowcase";

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
    desc: "In-house capabilities for intricate embroidery, handcrafted details, complex garment dyeing, and specialized acid washes.",
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
    desc: "Fully compliant with global benchmarks—certified by GOTS, Fairtrade, FLOCERT, and Sedex—with a focus on fair labor and a motivated workforce.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
  },
];

function GlobalPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgX = useTransform(scrollYProgress, [0.15, 0.6], [300, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-14 lg:pl-[236px] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="flex-1">
          <span className="text-teal text-sm tracking-[0.25em] uppercase font-medium">Made for a global audience</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.2]">
            A global manufacturing partner to 50+ leading brands.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-navy/70 leading-[1.8]">
            Since 1991, Fabstract has grown from a boutique workshop into a modern, four-facility operation. Today, backed by more than 30 years of expertise, we lead the sustainable garment export sector through low-impact, solar-driven, and green-certified manufacturing.
          </p>
        </div>
        <motion.div className="flex-1" style={{ x: imgX, opacity: imgOpacity }}>
          <img
            src="/images/products-collage.jpg"
            alt="Fabstract product range"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </motion.div>
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
      className="relative h-[65vh] sm:h-[56.25vw] min-h-[520px] sm:min-h-[400px] max-h-[85vh] bg-navy overflow-hidden flex items-end"
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
      <section className="bg-sky/20 py-14 sm:py-20 px-6 sm:px-10 lg:px-14 lg:pl-[236px]">
        <div className="max-w-5xl">
          <p className="text-lg sm:text-xl lg:text-2xl text-navy font-bold leading-[1.6]">
            We are redefining apparel manufacturing by putting people, planet, and innovation at the core of our business.
          </p>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-navy/70 leading-[1.8]">
            We are committed to <strong className="text-navy">ethical manufacturing,</strong> investing in <strong className="text-navy">our people,</strong> and advancing <strong className="text-navy">sustainable solutions</strong> that help shape a more responsible and resilient global apparel and textile industry.
          </p>
          <p className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl text-navy italic leading-[1.6]">
            Sustainably grown. Consciously made. Expertly crafted.
          </p>
        </div>
      </section>
      <GlobalPartner />

      {/* Our Core Strengths */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-14 lg:pl-[236px]">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium mb-12">Our Core Strengths</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title}>
              <div className="w-10 h-10 text-teal mb-4" dangerouslySetInnerHTML={{ __html: cap.icon }} />
              <h3 className="font-display text-xl sm:text-2xl text-navy font-medium mb-3">{cap.title}</h3>
              <p className="text-navy/65 text-sm sm:text-base leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Factories & Cinematic Large Video Showcase */}
      <section className="bg-sky/10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 lg:pl-[236px] border-t border-navy/10">
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy font-medium leading-[1.4] max-w-5xl mb-10 sm:mb-12">
          4 factories fully equipped to handle 100% woven or 100% knitted garments — end to end, under one roof.
        </p>

        <FactoryVideoShowcase />
      </section>

      <StickyScrollTabs />
      <Footer />
    </>
  );
}
