"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { EASE } from "@/lib/motion";

/* ------------------------------------------------------------------ */
/*  Tabs config                                                        */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: "s-capabilities", label: "Capabilities" },
  { id: "s-newsroom", label: "Newsroom" },
  { id: "s-contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Capabilities multi-slide data                                      */
/* ------------------------------------------------------------------ */

interface CapabilitySlide {
  stats: [
    {
      sub: string;
      value: string;
      label: string;
      desc: string;
    },
    {
      sub: string;
      value: string;
      label: string;
      desc: string;
    }
  ];
  image: string;
  imageAlt: string;
  badge?: {
    title: string;
    subtitle: string;
  };
}

const CAPABILITY_SLIDES: CapabilitySlide[] = [
  {
    stats: [
      {
        sub: "Growing Together",
        value: "1,00,000+",
        label: "Employees",
        desc: "Empowering our people through continuous skill development and growth opportunities.",
      },
      {
        sub: "Built On Trust",
        value: "85%",
        label: "Vertical Integration Across 50 Factories",
        desc: "We foster trust through honesty, transparency, and responsible operations.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Garment manufacturing and stitching floor",
    badge: {
      title: "Sustainability Progress",
      subtitle: "FY 2024-25",
    },
  },
  {
    stats: [
      {
        sub: "Crafting Excellence",
        value: "150 Million+",
        label: "Garments A Year",
        desc: "Delivering excellence in every garment we produce, creating lasting value and experiences.",
      },
      {
        sub: "Creating Change",
        value: "70%+",
        label: "Female Employees",
        desc: "Supporting communities and driving positive impact with a predominantly female workforce leading the way.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Fashion designers measuring garment on mannequin",
    badge: {
      title: "Sustainability Progress",
      subtitle: "FY 2024-25",
    },
  },
  {
    stats: [
      {
        sub: "Evolving Every Day",
        value: "5",
        label: "Textile Mills",
        desc: "Remaining agile to meet evolving industry demands across our factories, offices, and textile mills.",
      },
      {
        sub: "Leading With Purpose",
        value: "8",
        label: "States",
        desc: "Reducing our footprint across India through innovative and sustainable practices.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Textile craftsman working with notebook and yarn",
    badge: {
      title: "Sustainability Progress",
      subtitle: "FY 2024-25",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Newsroom data                                                      */
/* ------------------------------------------------------------------ */

interface NewsCard {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const NEWS_CARDS: NewsCard[] = [
  {
    category: "People",
    date: "June 30, 2026",
    title: "Ethical Manufacturing and Shared Accountability",
    excerpt:
      "How garment manufacturers can prioritise interventions that fit their workforce & operational needs with accountability.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    category: "Media & Research",
    date: "May 12, 2026",
    title: "Worker Welfare Programmes Boost Productivity by 6%",
    excerpt:
      "Low-cost vision correction intervention delivers over 3x return; Fabstract to expand programme to all workers.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    category: "Media & Research",
    date: "April 21, 2026",
    title: "Fabstract and Innovo Fiber Scale Fibre52® Technology",
    excerpt:
      "Fabstract Clothing, one of India's leading garment exporters, has partnered with Innovo for lower-impact cotton processing.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    category: "Sustainability",
    date: "March 15, 2026",
    title: "Fabstract Releases Annual Sustainability Progress Report",
    excerpt:
      "Fabstract releases its sustainability report, highlighting a 30% reduction in water usage and 1.3M+ hours of employee training.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    category: "Industry",
    date: "February 8, 2026",
    title: "Government Recognises Fabstract for Export Excellence",
    excerpt:
      "Fabstract Clothing India receives the prestigious Star Export House recognition for consistent growth and ethical trade practices.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
];

/* ------------------------------------------------------------------ */
/*  Contact form field style                                           */
/* ------------------------------------------------------------------ */

const field =
  "w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky";

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function StickyScrollTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [capabilitySlide, setCapabilitySlide] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const capabilitiesTrackRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const newsScrollRef = useRef<HTMLDivElement>(null);

  /* ── Track Scroll Progress for Capabilities Pinned Slider ── */
  const { scrollYProgress: capabilityProgress } = useScroll({
    target: capabilitiesTrackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(capabilityProgress, "change", (progress) => {
    if (progress < 0.33) {
      setCapabilitySlide(0);
    } else if (progress < 0.68) {
      setCapabilitySlide(1);
    } else {
      setCapabilitySlide(2);
    }
  });

  /* ── Click-to-scroll ── */
  const scrollToSection = useCallback((id: string, slideIndex?: number) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveTab(id);
    const navOffset = window.innerWidth < 1024 ? 80 : 96;
    let top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;

    if (id === "s-capabilities" && typeof slideIndex === "number") {
      const trackHeight = el.offsetHeight;
      top += (trackHeight / 3) * slideIndex;
      setCapabilitySlide(slideIndex);
    } else if (id === "s-capabilities") {
      setCapabilitySlide(0);
    }

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ── Robust Scrollspy for Active Tab ── */
  useEffect(() => {
    const updateActiveTab = () => {
      const navOffset = window.innerWidth < 1024 ? 80 : 100;

      const capEl = document.getElementById("s-capabilities");
      const newsEl = document.getElementById("s-newsroom");
      const contactEl = document.getElementById("s-contact");

      if (!capEl || !newsEl || !contactEl) return;

      const capRect = capEl.getBoundingClientRect();
      const newsRect = newsEl.getBoundingClientRect();
      const contactRect = contactEl.getBoundingClientRect();

      // If contact section is in top viewport zone
      if (contactRect.top <= navOffset + 140) {
        setActiveTab("s-contact");
      }
      // If newsroom section is in top viewport zone AND capabilities track has finished
      else if (newsRect.top <= navOffset + 140 && capRect.bottom <= navOffset + 180) {
        setActiveTab("s-newsroom");
      }
      // Otherwise user is viewing Capabilities
      else {
        setActiveTab("s-capabilities");
      }
    };

    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab, { passive: true });
    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, []);

  /* ── Ref registration ── */
  const registerRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) sectionRefs.current.set(id, el);
      else sectionRefs.current.delete(id);
    },
    [],
  );

  /* ── News carousel scroll ── */
  const scrollNews = useCallback((dir: 1 | -1) => {
    const el = newsScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  }, []);

  const currentCapability = CAPABILITY_SLIDES[capabilitySlide];

  return (
    <section ref={containerRef} className="bg-white relative">
      {/* ─────────────────────────────────────────────── */}
      {/*  MOBILE HORIZONTAL TABS                         */}
      {/* ─────────────────────────────────────────────── */}
      <div className="lg:hidden sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-navy/10 w-full">
        <div className="flex overflow-x-auto px-6 sm:px-10 gap-6 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors duration-300 ${
                  isActive ? "text-navy font-medium" : "text-navy/40"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="mobileStickyTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-start relative">
        {/* ─────────────────────────────────────────────── */}
        {/*  LEFT STICKY SIDEBAR (desktop)                  */}
        {/* ─────────────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col sticky top-24 self-start w-[180px] shrink-0 pl-6 xl:pl-12 py-20 z-20">
          <nav className="flex flex-col gap-3" aria-label="Section navigation">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`group flex items-center text-left py-2 transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-navy font-semibold"
                      : "text-navy/35 hover:text-navy/70"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`inline-block h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 bg-navy mr-3"
                        : "w-0 bg-navy/30 mr-0 opacity-0 group-hover:w-3 group-hover:opacity-40 group-hover:mr-2"
                    }`}
                  />
                  <span className="text-[14px] tracking-wide">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ─────────────────────────────────────────────── */}
        {/*  MAIN SCROLLING CONTENT                         */}
        {/* ─────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* ═══════════════════════════════════════════ */}
          {/*  SECTION 1 — CAPABILITIES (STICKY 300VH)    */}
          {/* ═══════════════════════════════════════════ */}
          <div
            id="s-capabilities"
            ref={(el) => {
              capabilitiesTrackRef.current = el;
              registerRef("s-capabilities")(el);
            }}
            className="relative h-[250vh] lg:h-[300vh]"
          >
            <div className="sticky top-20 md:top-24 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] px-6 sm:px-10 lg:px-14 py-8 lg:py-12 flex flex-col justify-center overflow-hidden">
              {/* Header + slide counter indicator */}
              <div className="flex items-center justify-between mb-8 lg:mb-10">
                <motion.h2
                  className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-medium leading-[1.05]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  Capabilities
                </motion.h2>

                {/* Slide indicators / clickable pills */}
                <div className="flex items-center gap-2">
                  {CAPABILITY_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection("s-capabilities", idx)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        capabilitySlide === idx
                          ? "w-8 h-1.5 bg-navy"
                          : "w-2 h-1.5 bg-navy/20 hover:bg-navy/40"
                      }`}
                      aria-label={`Go to capability slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic Stats Row with Keyed Transition */}
              <motion.div
                key={`stats-${capabilitySlide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid sm:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8 mb-8 lg:mb-10"
              >
                {currentCapability.stats.map((stat) => (
                  <div
                    key={stat.sub}
                    className="border-t border-navy/10 pt-4 lg:pt-5"
                  >
                    <p className="text-navy/50 text-[11px] tracking-[0.22em] uppercase mb-2">
                      {stat.sub}
                    </p>
                    <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-medium leading-none tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-navy/60 text-sm">{stat.label}</p>
                    <p className="mt-2.5 text-teal text-sm leading-relaxed max-w-sm">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Dynamic Capability Image + Badge with Keyed Transition */}
              <motion.div
                key={`image-${capabilitySlide}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative w-full aspect-[21/9] sm:aspect-[21/8] bg-navy/5 overflow-hidden group"
              >
                <img
                  src={currentCapability.image}
                  alt={currentCapability.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating sustainability/progress badge */}
                {currentCapability.badge && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-navy/10 px-4 py-2.5 flex items-center gap-3 text-left shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[10px]">
                      ✦
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-navy leading-tight">
                        {currentCapability.badge.title}
                      </p>
                      <p className="text-[10px] text-navy/50 tracking-wider uppercase">
                        {currentCapability.badge.subtitle}
                      </p>
                    </div>
                    <span className="text-navy/40 text-sm ml-1">›</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/*  SECTION 2 — NEWSROOM                       */}
          {/* ═══════════════════════════════════════════ */}
          <article
            id="s-newsroom"
            ref={registerRef("s-newsroom")}
            className="scroll-mt-24 lg:scroll-mt-24 px-6 sm:px-10 lg:px-14 py-16 lg:py-20 min-h-[calc(100vh-6rem)] flex flex-col justify-center border-t border-navy/10"
          >
            {/* Header + arrows */}
            <div className="flex items-start justify-between mb-10">
              <motion.h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-medium leading-[1.05]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Newsroom
              </motion.h2>
              <div className="hidden sm:flex items-center gap-3 mt-3">
                <button
                  onClick={() => scrollNews(-1)}
                  className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous news"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M10 3L5 8l5 5" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollNews(1)}
                  className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
                  aria-label="Next news"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M6 3l5 5-5 5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Horizontal scrolling news cards */}
            <div
              ref={newsScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory -mx-6 sm:-mx-10 lg:-mx-14 px-6 sm:px-10 lg:px-14"
            >
              {NEWS_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  className="shrink-0 w-[300px] sm:w-[340px] snap-start bg-white p-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                >
                  {/* Card image */}
                  <div className="relative w-full aspect-[4/3] bg-navy/5 overflow-hidden mb-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Category + date */}
                  <p className="text-navy/50 text-[13px] mb-2">
                    {card.category}{" "}
                    <span className="text-navy/30">|</span> {card.date}
                  </p>

                  {/* Title */}
                  <h3 className="text-navy text-base font-medium leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-navy/55 text-sm leading-relaxed mb-4 line-clamp-3">
                    {card.excerpt}
                  </p>

                  {/* Read more */}
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-2 text-navy text-[13px] tracking-wide uppercase hover:text-teal transition-colors group"
                  >
                    Read more
                    <span className="group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </article>

          {/* ═══════════════════════════════════════════ */}
          {/*  SECTION 3 — CONTACT                        */}
          {/* ═══════════════════════════════════════════ */}
          <article
            id="s-contact"
            ref={registerRef("s-contact")}
            className="scroll-mt-24 lg:scroll-mt-24 min-h-[calc(100vh-6rem)] flex flex-col justify-center border-t border-navy/10"
          >
            {/* Contact */}
            <div className="grid lg:grid-cols-2">
              <div className="bg-white px-6 sm:px-10 lg:px-14 py-16 space-y-10">
                <div>
                  <p className="text-navy text-[11px] tracking-[0.32em] uppercase mb-4">
                    Contact
                  </p>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-medium">
                    Let&apos;s work together
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] tracking-[0.22em] uppercase text-navy mb-3">
                      Registered office
                    </h4>
                    <p className="text-mute text-sm leading-relaxed">
                      M-169, Greater Kailash - II,
                      <br />
                      New Delhi - 110048, India
                    </p>
                    <a
                      href="tel:+911140524038"
                      className="text-ink text-sm mt-3 inline-block hover:text-teal"
                    >
                      +91-11-4052 4038
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.22em] uppercase text-navy mb-3">
                      Manufacturing
                    </h4>
                    <p className="text-mute text-sm leading-relaxed">
                      C-57, Hosiery Complex, Phase II,
                      <br />
                      Noida - 201305, India
                    </p>
                    <a
                      href="tel:+911204668800"
                      className="text-ink text-sm mt-3 inline-block hover:text-teal"
                    >
                      +91-120-4668800
                    </a>
                  </div>
                </div>
                <div className="h-56 border border-navy/10 overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=M-169%2C%20Greater%20Kailash%20II%2C%20New%20Delhi%20110048&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fabstract registered office, Greater Kailash II"
                  />
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-navy px-6 sm:px-10 lg:px-14 py-16 space-y-6"
              >
                <h3 className="font-display text-4xl text-white mb-8">
                  Send an enquiry
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                      First name *
                    </label>
                    <input type="text" required className={field} />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                      Last name
                    </label>
                    <input type="text" className={field} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                      Email *
                    </label>
                    <input type="email" required className={field} />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                      Phone *
                    </label>
                    <input type="tel" required className={field} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                    Company
                  </label>
                  <input type="text" className={field} />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                    Product category *
                  </label>
                  <select required className={`${field} bg-navy`}>
                    <option value="">Select a category</option>
                    <option value="woven">Woven Apparel</option>
                    <option value="knitted">Knitted Apparel</option>
                    <option value="home-textiles">
                      Home Textiles &amp; Accessories
                    </option>
                    <option value="multiple">Multiple Categories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">
                    Message
                  </label>
                  <textarea rows={3} className={field} />
                </div>
                <button
                  type="submit"
                  className="btn-crimson w-full text-center"
                >
                  Send enquiry
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
