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
      className="relative h-[65vh] sm:h-[56.25vw] min-h-[520px] sm:min-h-[400px] max-h-[85vh] bg-navy overflow-hidden flex items-end px-5 sm:px-10 lg:px-14 pb-[5px]"
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
      <div className="relative w-full mx-auto text-center">
        <motion.div style={{ y: quoteY }}>
          <span className="text-teal text-4xl sm:text-5xl font-display leading-none">&ldquo;</span>
          <blockquote className="font-display text-[16px] sm:text-[24px] lg:text-[30px] xl:text-[34px] text-white font-medium leading-[1.3] -mt-4">
            {introComplete ? (
              <TypeReveal className="block w-full" delay={0.3} charDelay={0.04} attribution="— Mahatma Gandhi">
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
      <section className="bg-sky/30 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 lg:pl-[236px]">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium mb-10">Our Core Strengths</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Knitted", image: "/images/card-knitted.jpg", desc: "Crafted from premium cotton blends and organic fabrics, our knitted apparel seamlessly combines softness, durability, and contemporary design for effortless everyday wear." },
            { label: "Woven", image: "/images/card-woven.jpg", desc: "Consciously crafted for women and kids, our versatile collection of tops, dresses, and separates is thoughtfully designed for effortless movement and everyday wear." },
            { label: "Sweater", image: "/images/card-sweater.jpg", desc: "" },
            { label: "Home Textile", image: "/images/card-home-textile.jpg", desc: "" },
          ].map((card) => (
            <a
              key={card.label}
              href="/about"
              className="group relative aspect-[3/4] rounded-2xl bg-sky/20 overflow-hidden cursor-pointer flex items-end p-6 transition-all duration-500"
            >
              {card.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-navy/30" />
              <div className="relative z-10">
                <span className="font-display text-xl sm:text-2xl text-white font-medium block">
                  {card.label}
                </span>
                {card.desc && (
                  <p className="text-white/0 group-hover:text-white/90 text-sm sm:text-base mt-2 leading-relaxed font-bold transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {card.desc}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
      <StickyScrollTabs />
      <Footer />
    </>
  );
}
