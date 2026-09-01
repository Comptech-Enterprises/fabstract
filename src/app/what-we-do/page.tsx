"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BANNER_VIDEO } from "@/data/hero";
import { ParallaxLayer } from "@/components/Parallax";

const CARDS = [
  { label: "Knitted", image: "/images/card-knitted.jpg", desc: "Crafted from premium cotton blends and organic fabrics, our knitted apparel seamlessly combines softness, durability, and contemporary design for effortless everyday wear." },
  { label: "Woven", image: "/images/card-woven.jpg", desc: "Consciously crafted for women and kids, our versatile collection of tops, dresses, and separates is thoughtfully designed for effortless movement and everyday wear." },
  { label: "Sweater", image: "/images/card-sweater.jpg", desc: "Expertly engineered knitwear crafted with fine-gauge wool, cashmere blends, and organic cotton for elevated warmth and timeless texture." },
  { label: "Home Textile", image: "/images/card-home-textile.jpg", desc: "Sustainable bed linens, handcrafted throws, and living textiles designed with natural dyes and eco-certified fibers." },
  { label: "Intimate Wear", image: "/images/card-knitted.jpg", desc: "Ultra-soft, breathable essentials and second-skin loungewear tailored with seamless precision and hypoallergenic organic cotton." },
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

      {/* Hero Banner (Same Proportions as Home Hero) */}
      <section
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

        <div className="absolute inset-0 bg-navy/40 pointer-events-none" />

        <div className="relative w-full text-center z-10">
          <motion.div style={{ y: textY }} className="bg-black/40 backdrop-blur-xs w-full px-5 sm:px-10 lg:px-14 py-6 sm:py-8">
            <h1 className="font-display text-[18px] sm:text-[26px] lg:text-[32px] xl:text-[36px] text-white font-medium leading-[1.25] max-w-4xl mx-auto">
              Crafting quality garments for the world&apos;s leading brands
            </h1>
            <p className="mt-2 text-white/80 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              From premium knits to sustainable home textiles, we bring expertise across every category of apparel manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Cards (2 + 2 + 1 Layout) */}
      <section className="bg-sky/30 py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium mb-12 text-center">
            Product Categories
          </h2>

          {/* Row 1: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {CARDS.slice(0, 2).map((card) => (
              <a
                key={card.label}
                href="/about"
                className="group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-sky/20 overflow-hidden cursor-pointer flex items-end p-6 sm:p-8 transition-all duration-500 shadow-md hover:shadow-xl"
              >
                {card.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative z-10">
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium block">
                    {card.label}
                  </span>
                  {card.desc && (
                    <p className="text-white/85 text-sm sm:text-base mt-2 leading-relaxed font-normal max-w-md">
                      {card.desc}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Row 2: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {CARDS.slice(2, 4).map((card) => (
              <a
                key={card.label}
                href="/about"
                className="group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-sky/20 overflow-hidden cursor-pointer flex items-end p-6 sm:p-8 transition-all duration-500 shadow-md hover:shadow-xl"
              >
                {card.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative z-10">
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium block">
                    {card.label}
                  </span>
                  {card.desc && (
                    <p className="text-white/85 text-sm sm:text-base mt-2 leading-relaxed font-normal max-w-md">
                      {card.desc}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Row 3: 1 Centered Card (Intimate Wear) */}
          <div className="max-w-xl mx-auto">
            {CARDS.slice(4, 5).map((card) => (
              <a
                key={card.label}
                href="/about"
                className="group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-sky/20 overflow-hidden cursor-pointer flex items-end p-6 sm:p-8 transition-all duration-500 shadow-md hover:shadow-xl"
              >
                {card.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative z-10">
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium block">
                    {card.label}
                  </span>
                  {card.desc && (
                    <p className="text-white/85 text-sm sm:text-base mt-2 leading-relaxed font-normal max-w-md">
                      {card.desc}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
