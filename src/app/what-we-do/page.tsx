"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageScrollLayout } from "@/components/PageScrollLayout";

const WHAT_WE_DO_TABS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "what-we-make", label: "What We Make" },
  { id: "fabrics", label: "Fabrics" },
  { id: "process", label: "Process" },
  { id: "quality", label: "Quality" },
  { id: "details", label: "Craft & Details" },
  { id: "flexibility", label: "Flexibility" },
];

interface CategorySegment {
  desc: string;
  items: string[];
  image: string;
  catalogue: string;
}

interface ProductCategory {
  label: string;
  defaultTagline: string;
  segments: {
    women: CategorySegment;
    men: CategorySegment;
    kids: CategorySegment;
  };
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    label: "Knitted",
    defaultTagline: "Engineered luxury jersey, interlock, pique, and fleece crafted from sustainably grown cotton.",
    segments: {
      women: {
        desc: "Relaxed silhouettes, elevated oversized tees, rib dresses, loungewear sets, and modal cotton basics with second-skin softness.",
        items: ["Rib Crop Tops", "Jersey Midi Dresses", "Co-ord Lounge Sets", "Oversized Hoodies"],
        image: "/what-we-do/categories/knitted-women.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      men: {
        desc: "Heavyweight drop-shoulder tees, structured polo shirts, brushed back fleece crewnecks, and premium French Terry joggers.",
        items: ["240 GSM Heavy Tees", "Pique Cotton Polos", "Brushed Fleece Sweats", "Structured Joggers"],
        image: "/what-we-do/categories/knitted-men.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      kids: {
        desc: "Ultra-soft, skin-friendly organic cotton playwear, breathable rompers, and everyday printed tees built to withstand everyday play.",
        items: ["Organic Cotton Tees", "Comfy Rib Rompers", "Easy-Pull Joggers", "Printed Sweatshirts"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8156.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
  {
    label: "Woven",
    defaultTagline: "Consciously crafted poplins, cambrics, linens, and voiles tailored for effortless contemporary drape.",
    segments: {
      women: {
        desc: "Flowing smocked dresses, tiered tiered midi skirts, handcrafted pintuck blouses, resort wear, and tailored summer shirts.",
        items: ["Smocked Maxi Dresses", "Embroidered Peasant Blouses", "Tiered Linen Skirts", "Relaxed Button-Downs"],
        image: "/what-we-do/categories/woven-women.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      men: {
        desc: "Crisp organic cotton dress shirts, relaxed Cuban collar linen shirts, utility overshirts, and lightweight summer trousers.",
        items: ["Camp Collar Linen Shirts", "Oxford Button-Downs", "Utility Overshirts", "Tapered Chino Trousers"],
        image: "/what-we-do/categories/woven-men.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      kids: {
        desc: "Charming cotton dresses, formal linen button-ups, and holiday partywear crafted with non-toxic AZO-free botanical dyes.",
        items: ["Floral Smocked Frocks", "Classic Linen Shirts", "Summer Dungarees", "Pleated Shorts"],
        image: "/what-we-do/categories/woven-kids.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
  {
    label: "Sweater & Knitwear",
    defaultTagline: "Expertly engineered fine-gauge to chunky knitwear using certified wool, cashmere blends, and organic cotton.",
    segments: {
      women: {
        desc: "Open-front cropped cardigans, mock neck ribbed sweaters, oversized cable knits, and fine-gauge cashmere blend layering tops.",
        items: ["Cropped Knit Cardigans", "Ribbed Turtlenecks", "Cable Knit Sweaters", "Fine Cashmere Crew"],
        image: "/what-we-do/categories/card-sweater.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      men: {
        desc: "Classic waffle-knit crewnecks, chunky fisherman rib pullovers, half-zip merino pullovers, and timeless winter cardigans.",
        items: ["Half-Zip Merino Knits", "Heavy Cable Pullovers", "Textured Waffle Sweaters", "Buttoned Cardigans"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8199.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      kids: {
        desc: "Cozy hypoallergenic knitted cardigans, soft animal jacquard sweaters, and warm fleece-lined knit pullovers for children.",
        items: ["Jacquard Animal Sweaters", "Soft Button Cardigans", "Chunky Knit Beanies", "Raglan Sleeve Knits"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8209.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
  {
    label: "Intimate & Loungewear",
    defaultTagline: "Second-skin softness, seamless precision sewing, and organic hypoallergenic intimate essentials.",
    segments: {
      women: {
        desc: "Wire-free modal bralettes, high-waisted organic cotton briefs, seamless bodysuits, and ultra-soft modal sleepwear.",
        items: ["Modal Sleep Sets", "Seamless Rib Bralettes", "Organic Cotton Briefs", "Soft Touch Bodysuits"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8157.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      men: {
        desc: "Ergonomic boxer briefs, breathable bamboo-blend modal trunks, and relaxed moisture-wicking everyday lounge sleep shorts.",
        items: ["Bamboo Modal Trunks", "Classic Boxer Briefs", "Pure Cotton Undershirts", "Relaxed Lounge Shorts"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8210.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      kids: {
        desc: "Pure combed cotton vest sets, irritation-free flat-seam underwear, and cozy temperature-regulating nightwear sets.",
        items: ["Tagless Cotton Vests", "Soft Ribbed Boxer Sets", "Cozy 2-Piece Pyjamas", "Thermal Undershirts"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8212.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
  {
    label: "Home Textile & Living",
    defaultTagline: "Handcrafted throws, organic linen beddings, table linens, and conscious artisanal lifestyle collections.",
    segments: {
      women: {
        desc: "Relaxed stonewashed bed sheets, fringed waffle cotton throws, decorative botanical cushion covers, and dining linens.",
        items: ["Stonewashed Linen Duvet", "Waffle Cotton Throws", "Botanical Cushion Covers", "Organic Napkin Sets"],
        image: "/what-we-do/categories/card-home-textile.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      men: {
        desc: "Structured canvas weekend duffles, heavy slub aprons, minimalist workstation accessories, and weighted waffle blankets.",
        items: ["Heavy Canvas Duffel", "Minimalist Table Runners", "Slub Cotton Aprons", "Textured Throws"],
        image: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/gallery/ASN_8150.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      kids: {
        desc: "Hypoallergenic crib bedding, whimsical printed cot quilts, playful storage bins, and organic muslin swaddles.",
        items: ["Muslin Swaddle Blankets", "Organic Cot Quilts", "Printed Pillow Covers", "Nursery Play Mats"],
        image: "/what-we-do/categories/card-woven.webp",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
];

type TabKey = "women" | "men" | "kids";

const R2 = "https://pub-3551751dc58044cb88a118691e50d580.r2.dev";
const gal = (name: string) => `${R2}/gallery/${name}.webp`;

interface Tile {
  label: string;
  desc?: string;
  img?: string;
  tint?: string;
}

function Placeholder({ tint = "#e9e2d6" }: { tint?: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundColor: tint }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/10" />
      <svg className="relative w-8 h-8 text-navy/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
      <span className="absolute bottom-2 left-2.5 text-[9px] tracking-[0.2em] uppercase text-navy/35">Placeholder</span>
    </div>
  );
}

function TileCard({ tile, ratio = "aspect-[4/3]" }: { tile: Tile; ratio?: string }) {
  return (
    <div>
      <div className={`${ratio} overflow-hidden bg-navy/5`}>
        {tile.img ? (
          <img src={tile.img} alt={tile.label} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <Placeholder tint={tile.tint} />
        )}
      </div>
      <p className="mt-3 text-[11px] tracking-[0.16em] uppercase font-semibold text-navy">{tile.label}</p>
      {tile.desc && <p className="mt-1.5 text-xs text-navy/60 leading-relaxed">{tile.desc}</p>}
    </div>
  );
}

function SectionHead({ eyebrow, title, blurb }: { eyebrow: string; title: string; blurb?: string }) {
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
      <div>
        <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15]">{title}</h2>
      </div>
      {blurb && <p className="text-navy/65 text-sm sm:text-base leading-relaxed max-w-md lg:justify-self-end">{blurb}</p>}
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// DUMMY copy and placeholder images unless a tile has `img` (real gallery photo).
const CAPABILITY_TILES: Tile[] = [
  { label: "Fabric Development", desc: "Dummy: knits, wovens and textures developed with mills.", img: "/what-we-do/development/fabric-development.webp" },
  { label: "Product Development", desc: "Dummy: sketches and tech packs turned into garments.", img: "/what-we-do/development/product-development.webp" },
  { label: "Sampling", desc: "Dummy: prototypes and fit samples with quick turnaround.", img: "/what-we-do/development/sampling.webp" },
  { label: "Technical Engineering", desc: "Dummy: patterns, grading and construction detail.", img: "/what-we-do/development/technical-engineering.webp" },
  { label: "Production", desc: "Dummy: scalable manufacturing under one roof.", img: gal("ASN_8161") },
  { label: "Quality", desc: "Dummy: checkpoints from fabric to finished garment.", img: gal("ASN_8208") },
];

const FABRIC_TILES: Tile[] = [
  { label: "Double Gauze", img: "/what-we-do/fabrics/double-gauze.webp" },
  { label: "Soft Slub", img: "/what-we-do/fabrics/soft-slub.webp" },
  { label: "Slub Knit", img: "/what-we-do/fabrics/slub-knit.webp" },
  { label: "Jersey", img: "/what-we-do/fabrics/jersey.webp" },
  { label: "French Terry", img: "/what-we-do/fabrics/french-terry.webp" },
  { label: "Ribs & Textures", img: "/what-we-do/fabrics/ribs-textures.webp" },
];

const PROCESS_STEPS: Tile[] = [
  { label: "Brief", desc: "Dummy: you share the concept, tech pack or reference.", tint: "#ece7df" },
  { label: "Development", desc: "Dummy: our team develops the first sample.", tint: "#dcb6a8" },
  { label: "Fit & Approval", desc: "Dummy: measurements and construction refined.", tint: "#e4dccf" },
  { label: "Production", desc: "Dummy: approved styles move into bulk.", img: gal("ASN_8150") },
  { label: "Quality", desc: "Dummy: inspection stages through production.", img: gal("ASN_8210") },
  { label: "Ready to Ship", desc: "Dummy: packed and prepared for delivery.", tint: "#d8cdbd" },
];

const QUALITY_STATS = [
  { value: "1991", label: "Years of experience" },
  { value: "In-house", label: "Dummy: development to finishing" },
  { value: "5-stage", label: "Dummy: garment checking" },
  { value: "Knits + Wovens", label: "Multiple fabric platforms" },
];

const DETAIL_TILES: Tile[] = [
  { label: "Neck Finishing", tint: "#c9ccd0" },
  { label: "Seam Construction", tint: "#e4dccf" },
  { label: "Stitch Quality", tint: "#8a8f6c" },
  { label: "Print & Embroidery", tint: "#3b3f47" },
  { label: "Garment Washing", img: "/what-we-do/fabrics/garment-wash.webp" },
  { label: "Measurement Checking", tint: "#b7c0cc" },
  { label: "Final Inspection", tint: "#ece7df" },
];

const FLEX_ITEMS: Tile[] = [
  { label: "Development", desc: "Dummy: new fabrics, constructions and product ideas.", tint: "#d9d2c5" },
  { label: "Sampling", desc: "Dummy: from first prototype to approved sample.", tint: "#e4dccf" },
  { label: "Production", desc: "Dummy: controlled manufacturing across categories.", img: gal("ASN_8157") },
];

const HOME_LABEL = "Home Textile & Living";
type TabId = TabKey | "home";
const TAB_LABELS: Record<TabId, string> = { women: "Women's", men: "Men's", kids: "Kids", home: "Home Textiles" };

function WhatWeMake() {
  const [tab, setTab] = useState<TabId>("women");
  const homeCategory = PRODUCT_CATEGORIES.find((c) => c.label === HOME_LABEL)!;
  const tiles: { key: string; label: string; seg: CategorySegment }[] =
    tab === "home"
      ? (["women", "men", "kids"] as TabKey[]).map((k) => ({ key: k, label: TAB_LABELS[k], seg: homeCategory.segments[k] }))
      : PRODUCT_CATEGORIES.filter((c) => c.label !== HOME_LABEL).map((c) => ({ key: c.label, label: c.label, seg: c.segments[tab] }));

  return (
    <>
      <div className="flex flex-col items-start gap-6 mb-10 sm:mb-12">
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">What we make</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15]">
            Built across categories. Specialized where it matters.
          </h2>
        </div>
        <div className="flex flex-nowrap gap-1.5 sm:gap-2 max-w-full overflow-x-auto shrink-0">
          {(["women", "men", "kids", "home"] as TabId[]).map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={`px-3.5 sm:px-4 py-2.5 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active ? "bg-[#06402B] text-white" : "bg-navy/5 text-navy/55 hover:text-navy"
                }`}
              >
                {TAB_LABELS[k]}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {tiles.map(({ key, label, seg }) => {
            return (
              <a
                key={key}
                href={seg.catalogue}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#f5efe9]">
                  <img
                    src={seg.image}
                    alt={`${label} - ${TAB_LABELS[tab]}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-navy">{label}</span>
                  <span aria-hidden className="text-navy/50 group-hover:text-navy group-hover:translate-x-1 transition-all">→</span>
                </div>
                <p className="mt-1.5 text-xs text-navy/55 leading-relaxed">{seg.items.slice(0, 2).join(" · ")}</p>
              </a>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
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

      {/* Hero (real video + real copy, mockup layout) */}
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
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.1]">
            Crafting quality garments for the world&apos;s leading brands
          </h1>
          <p className="mt-6 text-white/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-light">
            From premium knits to sustainable home textiles, we bring expertise across every category of apparel manufacturing.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 inline-flex items-center gap-3 bg-white text-navy px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-sky transition-colors cursor-pointer"
          >
            Explore our capabilities
            <span aria-hidden>↓</span>
          </button>
        </motion.div>
      </section>

      <PageScrollLayout tabs={WHAT_WE_DO_TABS} activeIdPrefix="what-we-do">
        {/* Capabilities (DUMMY copy; Production + Quality photos are real) */}
        <section id="capabilities" className="scroll-mt-24 bg-beige py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[1536px] mx-auto">
            <Reveal>
              <SectionHead
                eyebrow="Our capabilities"
                title="More than making the garment. We help build it."
                blurb="Dummy: from an initial concept to a production-ready garment, our teams work closely with customers to solve the details."
              />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
                {CAPABILITY_TILES.map((t) => (
                  <TileCard key={t.label} tile={t} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* What we make (real category data, images and catalogue links; heading is dummy) */}
        <section id="what-we-make" className="scroll-mt-24 bg-beige pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[1536px] mx-auto">
            <WhatWeMake />
          </div>
        </section>

        {/* Fabric (all DUMMY) */}
        <section id="fabrics" className="scroll-mt-24 bg-beige py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[1536px] mx-auto">
            <Reveal>
              <SectionHead
                eyebrow="Fabric is where it starts"
                title="The right garment starts with the right fabric."
                blurb="Dummy: our development teams work across a broad range of knitted and woven structures, helping brands develop handfeel, weight and drape."
              />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
                {FABRIC_TILES.map((t) => (
                  <TileCard key={t.label} tile={t} ratio="aspect-square" />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process (DUMMY copy; Production + Quality photos are real) */}
        <section id="process" className="scroll-mt-24 bg-beige pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">From sample to production</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15] mb-10">
              A clear process. A stronger product.
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-[13px] h-px bg-navy/15" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 lg:gap-x-5">
                {PROCESS_STEPS.map((t, i) => (
                  <div key={t.label}>
                    <span className="relative z-10 inline-flex w-7 h-7 rounded-full bg-navy text-white text-[10px] font-semibold items-center justify-center mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <TileCard tile={t} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality band (heading/stats DUMMY except 1991 and Knits + Wovens; photo is real) */}
      <section id="quality" className="scroll-mt-24 bg-[#06402B] text-white grid lg:grid-cols-[1.35fr_1fr]">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20">
          <div className="grid xl:grid-cols-[1.1fr_1fr] gap-8 xl:gap-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15]">
              Quality isn&apos;t a final inspection. It&apos;s built into the process.
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Dummy: from fabric inspection to final packing, our quality checkpoints ensure consistency, reliability and long-term performance.
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
          <img src={gal("ASN_8209")} alt="Quality check" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* Details (all DUMMY) */}
      <section id="details" className="scroll-mt-24 bg-beige py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto">
          <Reveal>
            <SectionHead
              eyebrow="The detail is in the difference"
              title="Thousands of small decisions go into one finished garment."
              blurb="Dummy: our teams focus on the details that don't always appear on a tech pack but are immediately visible in the finished product."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {DETAIL_TILES.map((t) => (
                <TileCard key={t.label} tile={t} ratio="aspect-square" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Flexibility (DUMMY copy; Production photo is real) */}
      <section id="flexibility" className="scroll-mt-24 bg-beige pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto">
          <Reveal>
            <SectionHead
              eyebrow="Flexibility is a capability"
              title="Big enough to manufacture. Flexible enough to develop."
              blurb="Dummy: our integrated setup lets us respond to a wide range of customer needs, from new fabric developments to scalable production runs."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {FLEX_ITEMS.map((t) => (
                <div key={t.label} className="flex gap-4 items-start">
                  <div className="w-[46%] shrink-0 aspect-[4/3] overflow-hidden bg-navy/5">
                    {t.img ? <img src={t.img} alt={t.label} loading="lazy" className="w-full h-full object-cover" /> : <Placeholder tint={t.tint} />}
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-navy">{t.label}</p>
                    <p className="mt-2 text-xs text-navy/60 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA (heading/body DUMMY; button link is real) */}
      <section className="bg-[#e9e4dd] grid md:grid-cols-[1.2fr_1fr]">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 grid xl:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-navy/55 mb-3">Made for brands, not just orders</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-light leading-[1.15]">
              Your product is more than an order number.
            </h2>
          </div>
          <div>
            <p className="text-navy/65 text-sm leading-relaxed">
              Dummy: we work alongside brands through development, production and delivery, building long-term partnerships based on consistency and communication.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 bg-[#06402B] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-navy transition-colors"
            >
              Let&apos;s talk <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[220px]">
          <div className="absolute inset-0">
            <Placeholder tint="#cfc6b8" />
          </div>
        </div>
      </section>
      </PageScrollLayout>

      <Footer />
    </>
  );
}
