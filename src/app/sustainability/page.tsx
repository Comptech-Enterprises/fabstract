"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { R2_MEDIA } from "@/data/hero";
import { PageScrollLayout } from "@/components/PageScrollLayout";
import GlyphPortal from "@/components/ui/glyph-portal";

const SUSTAINABILITY_TABS = [
  { id: "commitment", label: "Commitment" },
  { id: "scorecard", label: "Impact Scorecard" },
];

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  bulbZero = false,
}: {
  target: string;
  suffix?: string;
  duration?: number;
  bulbZero?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const num = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
  const hasPlus = target.includes("+");
  const hasPercent = target.includes("%");
  const [display, setDisplay] = useState("0");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, num, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const val = Math.round(v);
        setDisplay(val.toLocaleString());
        if (val >= num) {
          setCompleted(true);
        }
      },
    });
    return () => ctrl.stop();
  }, [inView, num, duration]);

  if (bulbZero) {
    return (
      <span ref={ref} className="inline-flex items-center">
        <span className="font-['Times_New_Roman',_Times,_serif] text-[1.18em] leading-none inline-block font-normal">
          1
        </span>
        <span className="inline-flex items-center gap-1.5 mx-1.5 shrink-0 -mt-1">
          <img
            src="/icons/lightbulb.webp"
            alt="0"
            className="h-[0.9em] w-auto drop-shadow-[0_0_14px_rgba(255,190,0,0.65)] select-none"
          />
          <img
            src="/icons/lightbulb.webp"
            alt="0"
            className="h-[0.9em] w-auto drop-shadow-[0_0_14px_rgba(255,190,0,0.65)] select-none"
          />
        </span>
        {hasPercent && "%"}
        {hasPlus && "+"}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display}
      {hasPercent && "%"}
      {hasPlus && "+"}
      {suffix}
    </span>
  );
}

interface MediaSlide {
  type: "video" | "image";
  src: string;
  highlight?: string;
  alt?: string;
}

interface StatMetric {
  sectionHeader?: { tag?: string; title: string };
  bgPattern?: string;
  bgRepeat?: boolean;
  bgTileSize?: string;
  bgOpacity?: number;
  bgAnimate?: boolean;
  imageFirst?: boolean;
  num: string;
  bulbZero?: boolean;
  label: string;
  subheading?: string;
  sub: string;
  highlight: string;
  img?: string;
  video?: string;
  videos?: { src: string; highlight: string }[];
  slides?: MediaSlide[];
  containImage?: boolean;
}

function StatMediaSlider({
  slides,
  defaultHighlight,
  containImage,
}: {
  slides: MediaSlide[];
  defaultHighlight: string;
  containImage?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const activeSlide = slides[current];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (total <= 1) return;
    if (activeSlide.type !== "image") return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total, activeSlide.type, current]);

  return (
    <div className="relative w-full h-full select-none overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {activeSlide.type === "video" ? (
            <video
              key={activeSlide.src}
              src={activeSlide.src}
              autoPlay
              loop={total === 1}
              onEnded={() => {
                if (total > 1) {
                  setCurrent((prev) => (prev + 1) % total);
                }
              }}
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.img
              src={activeSlide.src}
              alt={activeSlide.alt || "Benchmark media"}
              className={`w-full h-full ${containImage ? "object-contain bg-emerald-50" : "object-cover"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient vignette */}
      {!activeSlide.src?.includes("water") && !activeSlide.src?.includes("rainwater") && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c141f]/70 via-transparent to-black/20 pointer-events-none" />
      )}

      {/* Top Left Badge */}
      <span className="absolute top-5 left-5 inline-block text-[10px] tracking-[0.2em] uppercase font-semibold text-teal bg-teal/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal/30 z-20 pointer-events-none">
        {activeSlide.highlight || defaultHighlight}
      </span>

      {total > 1 && (
        <>
          {/* Top Right Counter / Pill */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/15">
            <svg className="w-3 h-3 text-teal fill-teal" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>
              {current + 1} / {total}
            </span>
          </div>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  current === i ? "w-6 h-1.5 bg-teal" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const STAT_METRICS: StatMetric[] = [
  {
    sectionHeader: {
      tag: "Verifiable Metrics",
      title: "Sustainability Impact - Energy",
    },
    bgPattern: "/backgrounds/lightning-tile.svg",
    bgRepeat: true,
    num: "100%",
    bulbZero: true,
    label: "Clean Auxiliary Energy",
    subheading: "Solar Powers Fabstract",
    sub: "Fabstract creates its own 100% clean biomass & solar energy powering its facilities, boilers and mills.",
    highlight: "Zero Fossil Coal",
    img: `${R2_MEDIA}/coal.jpg`,
    videos: [
      {
        src: `${R2_MEDIA}/solar.mp4`,
        highlight: "Zero Fossil Coal",
      },
      {
        src: `${R2_MEDIA}/solar-genset.mp4`,
        highlight: "Clean Biomass & Solar",
      },
    ],
  },
  {
    sectionHeader: {
      tag: "Verifiable Metrics",
      title: "Sustainability Impact - Water",
    },
    bgPattern: "/backgrounds/water-flow.svg",
    bgRepeat: true,
    bgTileSize: "240px 480px",
    bgOpacity: 0.22,
    bgAnimate: true,
    imageFirst: true,
    num: "95%+",
    label: "Water Recycled",
    sub: "Biological Effluent Treatment Plants (ETP) ensuring zero toxic process discharge.",
    highlight: "Closed Loop Water",
    img: `${R2_MEDIA}/water.webp`,
    video: "/videos/WhatsApp-Video-2026-10-08-at-13.05.56.mp4",
  },
  {
    sectionHeader: {
      tag: "Verifiable Metrics",
      title: "Sustainability Impact - Tree Plantation",
    },
    bgPattern: "/backgrounds/tree-tile.svg",
    bgRepeat: true,
    bgTileSize: "180px 180px",
    bgOpacity: 0.18,
    num: "5,000+",
    label: "Trees Planted",
    sub: "Van Se Hum is a project very close to our hearts. \"Van Se Hum\" translates to \"We exist because of forests,\" highlighting the crucial role forests play in our survival. This year, with temperatures soaring above 53 degrees Celsius, our Sustainability Head, Mrs. Abha Batra, felt a renewed urgency to act. We've embraced the Miyawaki method, a technique where native trees are planted in close proximity. Competing for sunlight, these trees grow rapidly, resulting in a dense, self-sustaining forest within just two years. All expenses for this project are sponsored by Fabstract Clothing India. We are committed to launching many more initiatives like this every month to combat global warming and severe pollution in Delhi/NCR.",
    highlight: "वन से हम Initiative",
    slides: [
      { type: "image", src: "/images/sustainability/van-se-hum-103.jpg", highlight: "वन से हम Initiative", alt: "Van Se Hum group photo" },
      { type: "image", src: "/images/sustainability/van-se-hum-104.jpg", highlight: "वन से हम Banner", alt: "Van Se Hum banner" },
      { type: "image", src: "/images/sustainability/van-se-hum-105.jpg", highlight: "Tree Plantation Drive", alt: "Tree planting group" },
      { type: "image", src: "/images/sustainability/van-se-hum-106.jpg", highlight: "Community Planting", alt: "Community tree planting" },
      { type: "image", src: "/images/sustainability/van-se-hum-107.jpg", highlight: "Sapling Care", alt: "Planting saplings" },
      { type: "image", src: "/images/sustainability/van-se-hum-108.jpg", highlight: "Growing Together", alt: "Tree planting volunteers" },
      { type: "image", src: "/images/sustainability/van-se-hum-109.jpg", highlight: "Nurturing Roots", alt: "Planting together" },
      { type: "image", src: "/images/sustainability/van-se-hum-110.jpg", highlight: "Planting for Future", alt: "Van Se Hum planting" },
      { type: "image", src: "/images/sustainability/van-se-hum-111.webp", highlight: "Tree Hugging", alt: "Tree hugging" },
    ],
    containImage: true,
  },
  {
    num: "100%",
    label: "Sustainable Yarns",
    sub: "Every knit garment crafted from BCI cotton, recycled polyester, or OEKO-TEX certified yarn — zero conventional fiber.",
    highlight: "Clean Knitting",
    img: `${R2_MEDIA}/yarn.jpg`,
    video: `${R2_MEDIA}/working.mp4`,
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-navy relative">
        {/* Unified ambient lighting across the entire page */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_25%,_rgba(16,185,129,0.06)_0%,_transparent_75%)]" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_75%,_rgba(52,211,153,0.04)_0%,_transparent_65%)]" />

        {/* Scroll-driven Glyph Portal Intro */}
        <GlyphPortal
          word="SUSTAINABILITY"
          scrollLength={2.4}
          interactive
          background={
            <div
              className="absolute inset-0 bg-white overflow-hidden"
              style={{ transform: "scale(var(--gp-field-scale,1))" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,_rgba(16,185,129,0.12)_0%,_transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,_rgba(52,211,153,0.08)_0%,_transparent_60%)]" />
              {/* Fade to base white at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white" />
            </div>
          }
          style={{
            "--gp-paper": "#08261c",
            "--gp-ink": "#ffffff",
            "--gp-field": "#ffffff",
            "--gp-foreground": "#0f172a",
          }}
          enterLabel="Explore our commitment"
        >
          <div style={{ maxWidth: 850 }}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-navy font-medium leading-[1.08] mb-6">
              Manufacturing with Responsibility
            </h2>
          </div>
        </GlyphPortal>

        <PageScrollLayout tabs={SUSTAINABILITY_TABS} activeIdPrefix="sustainability" theme="light">
          {/* Intro Statement Section */}
          <section id="commitment" className="scroll-mt-24 bg-transparent px-6 sm:px-10 lg:px-16 py-16 lg:py-24 text-center relative z-10">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
              <p className="text-emerald-700 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">The Fabstract Commitment</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6 tracking-tight">
                Sustainability is not an afterthought. It is engineered into every stitch, fiber, and factory floor.
              </h2>
              <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                Our renewable energy and ethical worker charter exceed national standards and comply with premier international sustainability codes.
              </p>
            </div>
          </section>

          {/* Section 1: Live Environmental Impact Scorecard */}
          <section id="scorecard" className="scroll-mt-24 bg-transparent text-navy px-6 sm:px-10 lg:px-16 py-20 lg:py-28 relative overflow-hidden z-10">
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Alternating Image-Text Rows — snaps one screen per stat on desktop */}
              <div className="flex flex-col gap-10 lg:gap-16">
                {STAT_METRICS.map((stat, idx) => {
                  const imageFirst = stat.imageFirst !== undefined ? stat.imageFirst : idx % 2 === 0;
                  const slides: MediaSlide[] = stat.slides
                    ? stat.slides
                    : stat.videos
                    ? stat.videos.map((v) => ({
                        type: "video" as const,
                        src: v.src,
                        highlight: v.highlight,
                      }))
                    : stat.video
                    ? [{ type: "video" as const, src: stat.video, highlight: stat.highlight }]
                    : [{ type: "image" as const, src: stat.img || "", highlight: stat.highlight, alt: stat.label }];
                  const hasVideo = Boolean(stat.video || stat.videos || stat.slides);

                  return (
                    <div
                      key={stat.label}
                      className="relative lg:flex lg:flex-col lg:justify-center lg:overflow-hidden"
                    >
                      {stat.bgPattern && (
                        <div
                          className={`pointer-events-none absolute inset-y-0 -z-10 ${
                            stat.bgAnimate ? "bg-water-flow" : ""
                          }`}
                          style={{
                            left: "50%",
                            right: "50%",
                            width: "100vw",
                            marginLeft: "-50vw",
                            marginRight: "-50vw",
                            ...(stat.bgRepeat
                              ? {
                                  backgroundImage: `url(${stat.bgPattern})`,
                                  backgroundRepeat: "repeat",
                                  backgroundSize: stat.bgTileSize || "150px 150px",
                                  opacity: stat.bgOpacity ?? 0.07,
                                }
                              : {
                                  backgroundImage: `url(${stat.bgPattern})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  opacity: stat.bgOpacity ?? 0.07,
                                }),
                          }}
                        />
                      )}
                      {stat.sectionHeader && (
                        <div className="max-w-3xl pt-10 sm:pt-14 pb-2">
                          {stat.sectionHeader.tag && (
                            <motion.p
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="text-emerald-700 text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                            >
                              {stat.sectionHeader.tag}
                            </motion.p>
                          )}
                          <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-light tracking-tight"
                          >
                            {stat.sectionHeader.title}
                          </motion.h2>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "5rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="h-0.5 bg-gradient-to-r from-emerald-600 to-teal mt-5 mb-8 rounded-full"
                          />
                        </div>
                      )}
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`grid grid-cols-1 ${
                          hasVideo ? "lg:grid-cols-12" : "lg:grid-cols-2"
                        } gap-8 lg:gap-12 items-center ${
                          !imageFirst ? "lg:[direction:rtl]" : ""
                        }`}
                      >
                        {/* Image / Video / Slider Side */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className={`relative ${
                            hasVideo
                              ? "h-[400px] sm:h-[480px] md:h-[520px] lg:h-[50vh] xl:h-[54vh] lg:col-span-7 xl:col-span-7"
                              : "h-[340px] sm:h-[400px] lg:h-[42vh]"
                          } rounded-2xl overflow-hidden shadow-2xl group lg:[direction:ltr]`}
                        >
                          <StatMediaSlider slides={slides} defaultHighlight={stat.highlight} containImage={stat.containImage} />
                        </motion.div>

                        {/* Text Side */}
                        <div
                          className={`flex flex-col justify-center lg:[direction:ltr] ${
                            hasVideo ? "lg:col-span-5 xl:col-span-5" : ""
                          }`}
                        >
                          {stat.subheading ? (
                            <>
                              {/* 1. Metric + Label in one line */}
                              <div className="flex items-baseline gap-2.5 sm:gap-3 flex-nowrap whitespace-nowrap">
                                <span className="font-['Times_New_Roman',_Times,_serif] text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-navy font-normal tracking-tight shrink-0">
                                  <AnimatedCounter target={stat.num} bulbZero={Boolean(stat.bulbZero)} />
                                </span>
                                <h3 className="text-emerald-800 font-semibold text-xl sm:text-2xl lg:text-2xl xl:text-3xl tracking-wide shrink-0">
                                  {stat.label}
                                </h3>
                              </div>

                              {/* 2. Solar Powers Fabstract */}
                              <motion.p
                                initial={{ opacity: 0, x: imageFirst ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="font-display text-xl sm:text-2xl text-slate-800 font-light mt-2"
                              >
                                {stat.subheading}
                              </motion.p>
                            </>
                          ) : (
                            <>
                              <p className="font-['Times_New_Roman',_Times,_serif] text-5xl sm:text-6xl lg:text-7xl text-navy font-normal tracking-tight">
                                <AnimatedCounter target={stat.num} />
                              </p>
                              <motion.h3
                                initial={{ opacity: 0, x: imageFirst ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                                className="text-emerald-800 font-semibold text-2xl sm:text-3xl mt-3 tracking-wide"
                              >
                                {stat.label}
                              </motion.h3>
                            </>
                          )}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="h-px bg-slate-200 mt-4"
                          />
                          <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-slate-600 text-base sm:text-lg leading-relaxed font-light pt-5"
                          >
                            {stat.sub}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </PageScrollLayout>

        {/* Back to Top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden lg:flex fixed bottom-8 left-6 z-40 items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-slate-600 hover:text-navy transition-colors bg-white/95 px-3 py-1.5 rounded-full backdrop-blur-md border border-slate-200 shadow-md cursor-pointer"
        >
          <span>↑</span>
          Back to top
        </button>
      </main>
      <Footer />
    </>
  );
}
