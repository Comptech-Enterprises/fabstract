"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
        image: "/images/knitted-women.png",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/knitwear-2026.pdf",
      },
      men: {
        desc: "Heavyweight drop-shoulder tees, structured polo shirts, brushed back fleece crewnecks, and premium French Terry joggers.",
        items: ["240 GSM Heavy Tees", "Pique Cotton Polos", "Brushed Fleece Sweats", "Structured Joggers"],
        image: "/images/knitted-men.jpg",
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
        image: "/images/card-woven.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      men: {
        desc: "Crisp organic cotton dress shirts, relaxed Cuban collar linen shirts, utility overshirts, and lightweight summer trousers.",
        items: ["Camp Collar Linen Shirts", "Oxford Button-Downs", "Utility Overshirts", "Tapered Chino Trousers"],
        image: "/images/woven-men.png",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf",
      },
      kids: {
        desc: "Charming cotton dresses, formal linen button-ups, and holiday partywear crafted with non-toxic AZO-free botanical dyes.",
        items: ["Floral Smocked Frocks", "Classic Linen Shirts", "Summer Dungarees", "Pleated Shorts"],
        image: "/images/woven-kids.png",
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
        image: "/images/card-sweater.jpg",
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
        image: "/images/card-home-textile.jpg",
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
        image: "/images/card-woven.jpg",
        catalogue: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/credential-deck-2026.pdf",
      },
    },
  },
];

type TabKey = "women" | "men" | "kids";

function CategoryCardSection({
  category,
  index,
}: {
  category: ProductCategory;
  index: number;
}) {
  const isHomeTextile = category.label === "Home Textile & Living";
  const [activeTab, setActiveTab] = useState<TabKey>("women");
  const segment = category.segments[activeTab];
  const isOdd = isHomeTextile ? false : index % 2 === 1;

  if (isHomeTextile) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-navy/10 hover:shadow-lg transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Card on Left */}
          <div className="lg:col-span-5 w-full flex justify-center lg:order-1">
            <div className="group relative aspect-[9/16] w-full max-w-[380px] sm:max-w-[410px] rounded-2xl bg-[#f5efe9] overflow-hidden shadow-md flex items-center justify-center">
              <img
                src="/images/card-home-textile.jpg"
                alt="Home Textile & Living"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          {/* Content on Right */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:order-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">
                Home Textile &amp; Living
              </span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy font-medium leading-tight">
              Artisanal Living &amp; Sustainable Home Collections
            </h4>

            <p className="text-navy/80 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              Elevating interior spaces with responsibly sourced natural textiles. From relaxed stonewashed linen bedsheets and plush waffle cotton throws to decorative botanical cushion covers and crafted dining linens, our collections marry tactile luxury with sustainable craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-navy/70">
              <div className="flex items-center gap-2.5 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>Stonewashed Linen &amp; Bedding Sets</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>Textured Waffle &amp; Knitted Throws</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>Dining Linens &amp; Artisanal Runners</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>AZO-Free Dyes &amp; Natural Fibers</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://pub-3551751dc58044cb88a118691e50d580.r2.dev/catalogues/wovens-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-navy text-white text-xs tracking-[0.16em] uppercase font-semibold hover:bg-navy/90 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Home Living Catalogue</span>
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-navy/10 hover:shadow-lg transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Card (Left on even, Right on odd) */}
        <div className={`lg:col-span-5 w-full flex justify-center ${isOdd ? "lg:order-2" : "lg:order-1"}`}>
          <div className="group relative aspect-[9/16] w-full max-w-[380px] sm:max-w-[410px] rounded-2xl bg-[#f5efe9] overflow-hidden shadow-md flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={segment.image}
                src={segment.image}
                alt={`${category.label} - ${activeTab}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full object-contain object-center"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Content & Tabs (Right on even, Left on odd) */}
        <div className={`lg:col-span-7 flex flex-col justify-center ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
          {/* Segment Tabs Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 p-1.5 bg-[#f5efeb] rounded-2xl w-fit mb-6 border border-navy/5">
            {(["women", "men", "kids"] as TabKey[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 sm:px-6 py-2 rounded-xl text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold transition-all duration-300 cursor-pointer ${
                    isActive ? "text-white shadow-sm" : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId={`category-pill-${category.label}`}
                      className="absolute inset-0 bg-navy rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">
                  {category.label} &bull; {activeTab}
                </span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl lg:text-3xl text-navy font-medium leading-tight">
                {activeTab === "women"
                  ? "Women's Craft & Silhouettes"
                  : activeTab === "men"
                  ? "Men's Precision Essentials"
                  : "Kids Conscious Apparel"}
              </h4>

              <p className="text-navy/80 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                {segment.desc}
              </p>

              {/* Explore Catalogue Button */}
              <div className="pt-4">
                <a
                  href={segment.catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-navy text-white text-xs tracking-[0.16em] uppercase font-semibold hover:bg-navy/90 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore {activeTab} Catalogue</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
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

      {/* Hero Banner (Fits Screen Viewport so Text is fully visible at bottom) */}
      <section
        ref={heroRef}
        className="relative w-full h-[calc(100svh-3.5rem)] sm:h-[calc(100svh-4rem)] md:h-[calc(100svh-4.5rem)] max-h-[920px] min-h-[480px] bg-navy overflow-hidden flex items-end"
      >
        <div className="absolute inset-0">
          <video
            src="/6459997-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-navy/40 pointer-events-none" />

        <div className="relative w-full text-center z-10">
          <motion.div style={{ y: textY }} className="bg-black/40 backdrop-blur-xs w-full px-5 sm:px-10 lg:px-14 py-5 sm:py-8">
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-medium leading-[1.22] max-w-4xl mx-auto">
              Crafting quality garments for the world&apos;s leading brands
            </h1>
            <p className="mt-2.5 sm:mt-3 text-white/85 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              From premium knits to sustainable home textiles, we bring expertise across every category of apparel manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section with Left Card + Right Tabs (Men, Women, Kids) */}
      <section className="bg-sky/20 py-16 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-teal text-xs tracking-[0.25em] uppercase font-semibold mb-2.5">
              Portfolio &amp; Segments
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy font-medium">
              Product Categories
            </h2>
            <p className="mt-3.5 text-navy/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Explore specialized capabilities across women&apos;s, men&apos;s, and kids apparel categories engineered under one roof.
            </p>
          </div>

          {/* Staggered Rows: Left Card + Right Tabs for each category */}
          <div className="space-y-8 sm:space-y-12">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <CategoryCardSection key={category.label} category={category} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
