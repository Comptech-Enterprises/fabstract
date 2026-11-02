"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageScrollLayout } from "@/components/PageScrollLayout";
import { WhatWeDoContent } from "@/components/WhatWeDoContent";

const WHAT_WE_DO_TABS = [
  { id: "what-we-make", label: "What We Make" },
  { id: "quality", label: "Quality" },
];

export default function WhatWeDo() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(heroProgress, [0, 1], [0, 90]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative w-full h-[calc(100svh-3.5rem)] sm:h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] max-h-[760px] min-h-[500px] bg-navy overflow-hidden flex items-center"
      >
        <div className="absolute inset-0">
          <video
            src="/what-we-do/videos/hero-banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-transparent pointer-events-none" />

        <motion.div style={{ y: textY }} className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 pt-20 max-w-3xl">
          <p className="text-[11px] tracking-[0.3em] uppercase font-semibold text-white/70 mb-5">What we do</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.15]">
            Crafting quality garments for the world&apos;s leading brands
          </h1>
          <p className="mt-6 text-white/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-light">
            From premium knits to sustainable home textiles, we bring expertise across every category of apparel manufacturing.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("what-we-make")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 inline-flex items-center gap-3 bg-white text-navy px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-sky transition-colors cursor-pointer"
          >
            Explore what we make
            <span aria-hidden>↓</span>
          </button>
        </motion.div>
      </section>

      <PageScrollLayout tabs={WHAT_WE_DO_TABS} activeIdPrefix="what-we-do">
        <WhatWeDoContent />

        {/* CTA */}
        <section className="bg-[#e9e4dd] grid md:grid-cols-[1.2fr_1fr]">
          <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 grid xl:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">Made for brands, not just orders</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15]">
                Your product is more than an order number.
              </h2>
            </div>
            <div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 bg-[#06402B] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-navy transition-colors"
              >
                Let&apos;s talk <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[220px]">
            <img src="/what-we-do/brands-cta.jpg" alt="Brands" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </section>
      </PageScrollLayout>

      <Footer />
    </>
  );
}
