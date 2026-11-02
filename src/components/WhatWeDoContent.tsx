"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VerticalKey = "circular-knits" | "wovens" | "home-textiles" | "sweaters";

interface VerticalTile {
  label: string;
  items: string[];
  image: string;
  catalogue: string;
}

interface VerticalCategory {
  id: VerticalKey;
  label: string;
  tagline: string;
  tiles: VerticalTile[];
}

const VERTICALS: VerticalCategory[] = [
  {
    id: "circular-knits",
    label: "Circular Knits",
    tagline: "Engineered luxury jersey, interlock, pique, and fleece crafted from sustainably grown cotton.",
    tiles: [
      {
        label: "Women's",
        items: ["Rib Crop Tops", "Jersey Midi Dresses", "Co-ord Lounge Sets", "Oversized Hoodies"],
        image: "/what-we-do/categories/women-knitted.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      {
        label: "Men's",
        items: ["240 GSM Heavy Tees", "Pique Cotton Polos", "Brushed Fleece Sweats", "Structured Joggers"],
        image: "/what-we-do/categories/men-knitted.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      {
        label: "Kids",
        items: ["Organic Cotton Tees", "Comfy Rib Rompers", "Easy-Pull Joggers", "Printed Sweatshirts"],
        image: "/what-we-do/categories/kids-knitted.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
      {
        label: "Intimate & Lounge",
        items: ["Modal Sleep Sets", "Seamless Rib Bralettes", "Bamboo Modal Trunks", "Organic Cotton Briefs"],
        image: "/what-we-do/categories/women-intimate.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
    ],
  },
  {
    id: "wovens",
    label: "Wovens",
    tagline: "Consciously crafted poplins, cambrics, linens, and voiles tailored for effortless contemporary drape.",
    tiles: [
      {
        label: "Women's",
        items: ["Smocked Maxi Dresses", "Embroidered Peasant Blouses", "Tiered Linen Skirts", "Relaxed Button-Downs"],
        image: "/what-we-do/categories/women-woven.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      {
        label: "Men's",
        items: ["Camp Collar Linen Shirts", "Oxford Button-Downs", "Utility Overshirts", "Tapered Chino Trousers"],
        image: "/what-we-do/categories/men-woven.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      {
        label: "Kids",
        items: ["Floral Smocked Frocks", "Classic Linen Shirts", "Summer Dungarees", "Pleated Shorts"],
        image: "/what-we-do/categories/kids-woven.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    ],
  },
  {
    id: "home-textiles",
    label: "Home Textiles",
    tagline: "Consciously made organic home textiles, bedding, living accessories, and nursery essentials.",
    tiles: [
      {
        label: "Bedding & Sleep",
        items: ["Stonewashed Linen Duvet", "Organic Cotton Sheets", "Waffle Pillow Shams"],
        image: "/what-we-do/categories/card-home-textile.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      {
        label: "Living & Throws",
        items: ["Waffle Cotton Throws", "Weighted Blankets", "Textured Cushion Covers"],
        image: "/what-we-do/categories/living-throws.png",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      {
        label: "Table & Dining",
        items: ["Artisanal Table Runners", "Organic Napkin Sets", "Slub Cotton Aprons"],
        image: "/what-we-do/categories/card-woven.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      {
        label: "Nursery & Kids",
        items: ["Muslin Swaddle Blankets", "Organic Cot Quilts", "Nursery Play Mats"],
        image: "/what-we-do/categories/nursery-kids.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    ],
  },
  {
    id: "sweaters",
    label: "Sweaters",
    tagline: "Expertly engineered fine-gauge to chunky knitwear using certified wool, cashmere blends, and organic cotton.",
    tiles: [
      {
        label: "Women's",
        items: ["Cropped Knit Cardigans", "Ribbed Turtlenecks", "Cable Knit Sweaters", "Fine Cashmere Crew"],
        image: "/what-we-do/categories/women-sweater.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      {
        label: "Men's",
        items: ["Half-Zip Merino Knits", "Heavy Cable Pullovers", "Textured Waffle Sweaters", "Buttoned Cardigans"],
        image: "/what-we-do/categories/men-sweater.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      {
        label: "Kids",
        items: ["Jacquard Animal Sweaters", "Soft Button Cardigans", "Chunky Knit Beanies", "Raglan Sleeve Knits"],
        image: "/what-we-do/categories/kids-sweater.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    ],
  },
];

const R2 = "https://pub-3551751dc58044cb88a118691e50d580.r2.dev";
const gal = (name: string) => `${R2}/gallery/${name}.webp`;

const QUALITY_STATS = [
  { value: "1991", label: "35 years of experience" },
  { value: "In-house", label: "Knitting to finishing" },
  { value: "5-stage", label: "Quality audit and checking" },
  { value: "Knits & Wovens", label: "All made in the same lines" },
];

function WhatWeMake() {
  const [activeTab, setActiveTab] = useState<VerticalKey>("circular-knits");
  const currentVertical = VERTICALS.find((v) => v.id === activeTab) || VERTICALS[0];

  return (
    <>
      <div className="flex flex-col items-start gap-6 mb-10 sm:mb-12">
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">What we make</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15]">
            Four Business Verticals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-navy/60 leading-relaxed max-w-2xl font-light">
            {currentVertical.tagline}
          </p>
        </div>
        <div className="flex flex-nowrap gap-1.5 sm:gap-2 max-w-full overflow-x-auto shrink-0">
          {VERTICALS.map((v) => {
            const active = activeTab === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveTab(v.id)}
                className={`px-3.5 sm:px-4 py-2.5 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active ? "bg-[#06402B] text-white" : "bg-navy/5 text-navy/55 hover:text-navy"
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {currentVertical.tiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.catalogue}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#f5efe9]">
                <img
                  src={tile.image}
                  alt={`${tile.label} - ${currentVertical.label}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-navy">{tile.label}</span>
                <span aria-hidden className="text-navy/50 group-hover:text-navy group-hover:translate-x-1 transition-all">→</span>
              </div>
              <p className="mt-1.5 text-xs text-navy/55 leading-relaxed">{tile.items.slice(0, 2).join(" · ")}</p>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function WhatWeDoContent() {
  return (
    <div id="what-we-do" className="scroll-mt-28">
      {/* What we make */}
      <section id="what-we-make" className="scroll-mt-24 bg-beige py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-navy/10">
        <div className="max-w-[1536px] mx-auto">
          <WhatWeMake />
        </div>
      </section>

      {/* Quality band */}
      <section id="quality" className="scroll-mt-24 bg-[#06402B] text-white grid lg:grid-cols-[1.35fr_1fr] border-b border-navy/10">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20">
          <div className="grid xl:grid-cols-[1.1fr_1fr] gap-8 xl:gap-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15]">
              Built into each step of the process.
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              From fabric inspection to final packing, our quality checkpoints ensure consistency, reliability and long-term performance.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 xl:grid-cols-4 gap-6">
            {QUALITY_STATS.map((st) => (
              <div key={st.value}>
                <p className="font-display text-2xl sm:text-3xl text-[#e6c98a]">{st.value}</p>
                <p className="mt-1.5 text-xs text-white/65 leading-relaxed">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-full">
          <img src="/what-we-do/quality-check.jpg" alt="Quality check" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}
