"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BANNER_VIDEO } from "@/data/hero";
import { ParallaxLayer } from "@/components/Parallax";

const CARDS = [
  { label: "Knitted", image: "/images/card-knitted.jpg", desc: "Crafted from premium cotton blends and organic fabrics, our knitted apparel seamlessly combines softness, durability, and contemporary design for effortless everyday wear.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf" },
  { label: "Woven", image: "/images/card-woven.jpg", desc: "Consciously crafted for women and kids, our versatile collection of tops, dresses, and separates is thoughtfully designed for effortless movement and everyday wear.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf" },
  { label: "Sweater", image: "/images/card-sweater.jpg", desc: "Expertly engineered knitwear crafted with fine-gauge wool, cashmere blends, and organic cotton for elevated warmth and timeless texture.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf" },
  { label: "Home Textile", image: "/images/card-home-textile.jpg", desc: "Sustainable bed linens, handcrafted throws, and living textiles designed with natural dyes and eco-certified fibers.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf" },
  { label: "Intimate Wear", image: "/images/card-knitted.jpg", desc: "Ultra-soft, breathable essentials and second-skin loungewear tailored with seamless precision and hypoallergenic organic cotton.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf" },
  { label: "Kidswear", image: "/images/card-woven.jpg", desc: "Playful, durable, and skin-safe garments for children — crafted with certified organic fabrics, AZO-free dyes, and child-safe construction standards.", catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf" },
];

function ProductCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div className="group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-sky/20 overflow-hidden flex items-end p-6 sm:p-8 transition-all duration-500 shadow-md hover:shadow-2xl border-2 border-transparent hover:border-white/40 hover:-translate-y-1">
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
        <a
          href={card.catalogue}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-white/30 text-navy bg-white sm:text-white sm:bg-transparent text-xs tracking-[0.15em] uppercase font-semibold overflow-hidden transition-all duration-500 ease-out sm:hover:border-white sm:hover:shadow-lg sm:hover:shadow-white/10"
        >
          <span className="absolute inset-0 bg-white scale-x-0 sm:group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] hidden sm:block" />
          <span className="relative z-10 sm:group-hover:text-navy transition-colors duration-300">Explore Catalogue</span>
          <svg className="relative z-10 w-3.5 h-3.5 sm:group-hover:text-navy transition-all duration-300 sm:group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

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
              <ProductCard key={card.label} card={card} />
            ))}
          </div>

          {/* Row 2: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {CARDS.slice(2, 4).map((card) => (
              <ProductCard key={card.label} card={card} />
            ))}
          </div>

          {/* Row 3: 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {CARDS.slice(4, 6).map((card) => (
              <ProductCard key={card.label} card={card} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
