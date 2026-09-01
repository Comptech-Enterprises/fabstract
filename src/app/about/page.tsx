"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const TABS = [
  { id: "legacy", label: "Our Legacy" },
  { id: "journey", label: "Our Journey" },
  { id: "leadership", label: "Management" },
  { id: "certifications", label: "Certifications" },
] as const;

const JOURNEY_PAIRS = [
  [
    {
      year: "1991",
      title: "Founding & First Workshop",
      desc: "Fabstract was established in New Delhi as an export garment house, dedicated to high fashion woven and knitted apparel crafted by skilled master artisans.",
      img: GALLERY_FILES[0],
    },
    {
      year: "1998",
      title: "Noida Production Expansion",
      desc: "Commissioned modern multi-line manufacturing unit in Sector 63, Noida, expanding cutting, multi-needle sewing, and finishing capacity to serve international brands.",
      img: GALLERY_FILES[1],
    },
  ],
  [
    {
      year: "2005",
      title: "Dedicated Knits & Sampling Studio",
      desc: "Established a specialized sample development studio and rapid prototyping line for international buyer collections across USA and Europe.",
      img: GALLERY_FILES[2],
    },
    {
      year: "2012",
      title: "In-House Quality Control & Testing Lab",
      desc: "Built an internal fabric testing and physical quality laboratory. Today, the laboratory conducts performance testing, color approvals, and 5-stage AQL checks to reduce lead times.",
      img: GALLERY_FILES[3],
    },
  ],
  [
    {
      year: "2018",
      title: "Sustainable & Fairtrade Operations",
      desc: "Adopted Fairtrade and BSCI compliance, sponsored urban Miyawaki micro-forests in Delhi NCR, and strengthened women empowerment programs across all factory units.",
      img: GALLERY_FILES[4],
    },
    {
      year: "2021",
      title: "Circular Sourcing & Eco-Blends",
      desc: "Integrated GOTS-certified organic cotton, natural linen, and sustainable blends into core collections with zero-waste cutting practices.",
      img: GALLERY_FILES[5],
    },
  ],
  [
    {
      year: "2024",
      title: "Global Reach & Digital Integration",
      desc: "Expanded monthly capacity to 80,000–100,000 units, supplying premier buyers across USA, Canada, France, Italy, and Sweden with seamless cloud-managed buyer assets.",
      img: GALLERY_FILES[6] || GALLERY_FILES[0],
    },
    {
      year: "2026",
      title: "Automated Finishing & Sustainable Innovation",
      desc: "Upgraded smart cutting tables, solar-powered lines, and closed-loop garment recycling to lead ethical fashion manufacturing into the future.",
      img: GALLERY_FILES[7] || GALLERY_FILES[1],
    },
  ],
];

const TEAM = [
  {
    name: "Kavya Mehra",
    role: "Head of Marketing",
    dept: "Global Accounts",
    experience: "12+ Years Industry Leadership",
    bio: "Builds Fabstract’s brand story for global buyers — lookbooks, trade shows, and seasonal campaigns for knit and woven lines.",
    img: GALLERY_FILES[1],
  },
  {
    name: "Arjun Malhotra",
    role: "Production Director",
    dept: "Floor Operations",
    experience: "18+ Years Manufacturing Mastery",
    bio: "Runs the Noida floor from cutting to packing, keeping bulk programmes on the 60–90 day lead time buyers expect.",
    img: GALLERY_FILES[6],
  },
  {
    name: "Priya Sethi",
    role: "Merchandising Head",
    dept: "Sourcing & T&A",
    experience: "14+ Years Global Sourcing",
    bio: "Owns T&A calendars, tech packs, and buyer sampling so each order moves cleanly from proto to shipment.",
    img: GALLERY_FILES[2],
  },
  {
    name: "Rohan Kapoor",
    role: "Quality Control Lead",
    dept: "AQL & Compliance",
    experience: "16+ Years Quality Assurance",
    bio: "Leads five-stage garment inspection, fabric testing, and strict AQL benchmarks before cartons leave the factory.",
    img: GALLERY_FILES[7],
  },
];



export default function AboutPage() {
  const [active, setActive] = useState("legacy");
  const [currentPair, setCurrentPair] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger point located around 35% from the top of the viewport
      const triggerPoint = window.scrollY + window.innerHeight * 0.35;

      const sections = TABS.map((tab) => {
        const el = document.getElementById(tab.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const height = el.offsetHeight;
        return { id: tab.id, top, bottom: top + height };
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      if (!sections.length) return;

      // When near very top of page
      if (window.scrollY < sections[0].top - 100) {
        setActive(sections[0].id);
        return;
      }

      // When near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      // Determine active section
      let currentActive = sections[0].id;
      for (const sec of sections) {
        if (triggerPoint >= sec.top) {
          currentActive = sec.id;
        }
      }
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToPrev = () => {
    if (currentPair > 0) {
      setSlideDirection(-1);
      setCurrentPair((c) => c - 1);
    }
  };

  const goToNext = () => {
    if (currentPair < JOURNEY_PAIRS.length - 1) {
      setSlideDirection(1);
      setCurrentPair((c) => c + 1);
    }
  };

  const activeMilestones = JOURNEY_PAIRS[currentPair];

  return (
    <>
      <Navbar />
      <main className="bg-white pt-20 md:pt-24">
        {/* Shahi-style Hero Banner */}
        <section className="relative h-[52vh] min-h-[360px] sm:h-[62vh] md:h-[70vh] overflow-hidden">
          <Still
            src={gallerySrc(GALLERY_FILES[0])}
            alt="Fabstract manufacturing floor"
            ken
            zoom={false}
            className="absolute inset-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/20" />
          <div className="absolute inset-x-0 bottom-0 px-6 sm:px-10 lg:px-14 pb-10 lg:pb-16">
            <p className="text-sky text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3">Who We Are</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.08] max-w-4xl [text-shadow:0_2px_24px_rgba(12,18,28,0.4)]">
              Manufacturing with purpose, craft, and precision
            </h1>
          </div>
        </section>

        {/* Intro Statement Section (Full Width, Centered) */}
        <section className="bg-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-navy/10 text-center">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6 tracking-tight">
              Manufacturing Excellence, Cutting-Edge, and Vertically Integrated
            </h2>
            <p className="text-navy/75 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
              As a premier apparel manufacturer, we manage the entire process from spinning to finished garment. Our state-of-the-art mills craft woven and knitted fabric with premium cotton fiber and materials from reputable suppliers to ensure speed, quality, and responsibility.
            </p>
          </div>
        </section>

        {/* Sticky Sub-Navigation Bar (Unified Desktop & Mobile) */}
        <div className="sticky top-20 md:top-24 z-40 bg-white/95 border-b border-navy/10 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-start md:justify-center gap-6 sm:gap-8 lg:gap-14 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => {
              const on = active === tab.id;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`shrink-0 py-4 text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 font-semibold border-b-2 -mb-[1px] ${
                    on ? "text-navy border-navy" : "text-navy/40 border-transparent hover:text-navy"
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Full-Width Editorial Sections */}
        <div className="w-full">
          {/* Section 1: Our Legacy - Blue Background 3-Column Center-Portrait Layout */}
          <section id="legacy" className="scroll-mt-28 bg-navy text-white px-6 sm:px-10 lg:px-14 py-16 lg:py-24 border-b border-navy/10 relative overflow-hidden">
            {/* Subtle ambient lighting behind portrait */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-sky/15 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
                {/* Left Column: Heading & Founder Story */}
                <div className="lg:col-span-4 space-y-6">
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
                    Our Legacy
                  </h2>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
                    Fabstract Clothing, founded in 1991, has grown from a specialized workshop into a premier government-recognized garment export house over three decades of craftsmanship.
                  </p>
                </div>

                {/* Center Column: Founder / Legacy Portrait with cinematic reveal & living halo aura */}
                <div className="lg:col-span-5 flex justify-center items-center relative py-8">
                  {/* Subtle radiating living aurora */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-[radial-gradient(circle,#c8d9e6_0%,#567c8d_40%,transparent_70%)] blur-3xl pointer-events-none"
                    />
                  </div>
                  
                  {/* Portrait Motion Container with Blur-to-Clear Reveal & Shimmer Light Sweep (Replays on revisit) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 36, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.025, y: -6 }}
                    className="relative z-10 max-w-[340px] sm:max-w-[420px] w-full flex justify-center group"
                  >
                    {/* Museum-grade delicate corner brackets */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-sky/30 group-hover:border-sky transition-colors duration-500 pointer-events-none" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-sky/30 group-hover:border-sky transition-colors duration-500 pointer-events-none" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-sky/30 group-hover:border-sky transition-colors duration-500 pointer-events-none" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-sky/30 group-hover:border-sky transition-colors duration-500 pointer-events-none" />

                    {/* Shimmer light sweep sweep on reveal */}
                    <motion.div
                      initial={{ x: "-120%", opacity: 0.7 }}
                      whileInView={{ x: "220%", opacity: 0 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-20"
                    />

                    <img
                      src="/paawan.png"
                      alt="Fabstract Legacy"
                      className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-all duration-700 rounded-sm"
                      onError={(e) => {
                        e.currentTarget.src = "/paawan.PNG";
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right Column: Statement note */}
                <div className="lg:col-span-3 lg:pt-24 space-y-4">
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-xs font-light">
                    Our vertical integration and strong commitment to ethics and sustainability position us as a preferred global manufacturing partner.
                  </p>
                </div>
              </div>
            </section>

          {/* Section 2: Explore Our Journey - Exactly 2 Years at a time */}
          <section id="journey" className="scroll-mt-28 bg-white px-6 sm:px-10 lg:px-14 py-16 lg:py-24 border-b border-navy/10">
            <div className="max-w-7xl mx-auto">
              {/* Centered Bold Title */}
              <div className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight">
                  Explore our Journey
                </h2>
              </div>

              {/* Centered Top Arrow Indicator */}
              <div className="flex justify-center mb-6">
                <button
                  type="button"
                  onClick={goToPrev}
                  disabled={currentPair === 0}
                  className={`p-1.5 transition-colors ${
                    currentPair === 0 ? "text-navy/15 cursor-not-allowed" : "text-navy/40 hover:text-navy cursor-pointer"
                  }`}
                  aria-label="Previous slide"
                >
                  <svg className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* Journey 2-Year Viewport with Animated Transition */}
              <div className="relative min-h-[580px] overflow-hidden py-2">
                {/* Center Vertical Dotted Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-r border-dotted border-navy/25 pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPair}
                    initial={{ opacity: 0, y: slideDirection * 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: slideDirection * -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-16"
                  >
                    {/* First Year in Pair (Image Left, Content Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                      {/* Left Column: Image */}
                      <div className="md:pr-6">
                        <div className="relative group overflow-hidden rounded-xs border border-navy/10 shadow-xs bg-beige/30">
                          <Still
                            src={gallerySrc(activeMilestones[0].img)}
                            alt={activeMilestones[0].title}
                            className="aspect-[16/10] w-full object-cover group-hover:scale-103 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Right Column: Big Year + Story */}
                      <div className="md:pl-6">
                        <p className="font-display text-6xl sm:text-7xl lg:text-8xl text-navy font-light tracking-tight leading-none mb-3 sm:mb-4">
                          {activeMilestones[0].year}
                        </p>
                        <h3 className="text-navy font-bold text-base sm:text-lg mb-3 tracking-normal">
                          {activeMilestones[0].title}
                        </h3>
                        <p className="text-navy/70 text-sm sm:text-base leading-relaxed max-w-lg">
                          {activeMilestones[0].desc}
                        </p>
                      </div>
                    </div>

                    {/* Second Year in Pair (Content Left, Image Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                      {/* Left Column: Big Year + Story */}
                      <div className="order-2 md:order-1 md:pr-6">
                        <p className="font-display text-6xl sm:text-7xl lg:text-8xl text-navy font-light tracking-tight leading-none mb-3 sm:mb-4">
                          {activeMilestones[1].year}
                        </p>
                        <h3 className="text-navy font-bold text-base sm:text-lg mb-3 tracking-normal">
                          {activeMilestones[1].title}
                        </h3>
                        <p className="text-navy/70 text-sm sm:text-base leading-relaxed max-w-lg">
                          {activeMilestones[1].desc}
                        </p>
                      </div>

                      {/* Right Column: Image */}
                      <div className="order-1 md:order-2 md:pl-6">
                        <div className="relative group overflow-hidden rounded-xs border border-navy/10 shadow-xs bg-beige/30">
                          <Still
                            src={gallerySrc(activeMilestones[1].img)}
                            alt={activeMilestones[1].title}
                            className="aspect-[16/10] w-full object-cover group-hover:scale-103 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Centered Bottom Arrow Indicator (Click to advance to next 2 years) */}
              <div className="flex flex-col items-center justify-center mt-6">
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={currentPair === JOURNEY_PAIRS.length - 1}
                  className={`group flex flex-col items-center gap-1 p-2 transition-colors ${
                    currentPair === JOURNEY_PAIRS.length - 1
                      ? "text-navy/15 cursor-not-allowed"
                      : "text-navy/50 hover:text-navy cursor-pointer"
                  }`}
                  aria-label="Next 2 years"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
                    {currentPair === JOURNEY_PAIRS.length - 1 ? "End of Journey" : "Next Milestones"}
                  </span>
                  <svg className="w-7 h-7 stroke-current group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Section 3: Management & Leadership - Blue Background & Editorial Executive Cards */}
          <section id="leadership" className="scroll-mt-28 bg-navy text-white px-6 sm:px-10 lg:px-14 py-20 lg:py-28 border-b border-navy/10 relative overflow-hidden">
            {/* Subtle ambient lighting */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-teal/15 rounded-full blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-sky/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mb-14">
                <p className="text-sky text-xs font-semibold tracking-[0.25em] uppercase mb-3">The Team</p>
                <h2 className="font-display text-4xl sm:text-5xl text-white font-light tracking-tight">
                  Management & Leadership
                </h2>
                <p className="text-white/70 text-base sm:text-lg mt-3 leading-relaxed font-light">
                  Seasoned industry leaders with decades of apparel manufacturing, merchandising, and global supply chain expertise.
                </p>
              </div>

              {/* 4 Editorial Executive Portrait Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
                {TEAM.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="relative min-h-[440px] sm:min-h-[480px] rounded-2xl overflow-hidden shadow-xl group flex flex-col justify-between p-6 sm:p-7 bg-[#1b2735] border border-white/15 hover:border-sky/50 transition-all duration-500"
                  >
                    {/* Background Executive Photo */}
                    <div className="absolute inset-0 bg-navy">
                      <img
                        src={gallerySrc(person.img)}
                        alt={person.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                    </div>
                    {/* Multi-layer Dark Gradient for high legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162230] via-[#162230]/60 to-transparent" />

                    {/* Top Department Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-[0.18em] uppercase">
                        {person.dept}
                      </span>
                      <span className="text-white/40 font-display text-2xl font-light">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Bottom Info & Bio */}
                    <div className="relative z-10 mt-auto pt-6">
                      <p className="text-sky text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                        {person.role}
                      </p>
                      <h3 className="font-display text-2xl text-white font-medium mb-3 group-hover:text-sky transition-colors">
                        {person.name}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {person.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Certifications & Marks - 5 Big Visual Placeholders (Blue Background) */}
          <section id="certifications" className="scroll-mt-28 px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-navy text-white relative overflow-hidden border-b border-navy/10">
            {/* Ambient glowing orbs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mb-14">
                <p className="text-sky text-xs font-semibold tracking-[0.25em] uppercase mb-3">Standards & Badges</p>
                <h2 className="font-display text-4xl sm:text-5xl text-white font-light tracking-tight">
                  Certifications & Compliance
                </h2>
                <p className="text-white/70 text-base sm:text-lg mt-3 leading-relaxed font-light">
                  Operating with full compliance to national labor codes and premier international export standards.
                </p>
              </div>

              {/* 5 Big Placeholder Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7">
                {[
                  {
                    name: "Fairtrade Certified",
                    code: "FLO-CERT ID",
                    desc: "Ethical trade, fair price premiums, and community development funds.",
                    icon: (
                      <svg className="w-9 h-9 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                      </svg>
                    ),
                  },
                  {
                    name: "BSCI Audited",
                    code: "Social Compliance",
                    desc: "Audited social management systems ensuring worker welfare and safety.",
                    icon: (
                      <svg className="w-9 h-9 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                  {
                    name: "ETI Base Code",
                    code: "Ethical Trading",
                    desc: "Living wages, safe working hours, and ethical employment practices.",
                    icon: (
                      <svg className="w-9 h-9 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    ),
                  },
                  {
                    name: "ILO Standards",
                    code: "Labour Conventions",
                    desc: "Compliance with International Labour Organization core conventions.",
                    icon: (
                      <svg className="w-9 h-9 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    ),
                  },
                  {
                    name: "GOTS & CSCC",
                    code: "Organic & Security",
                    desc: "Certified organic textile sourcing alongside verified facility security.",
                    icon: (
                      <svg className="w-9 h-9 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    ),
                  },
                ].map((cert, i) => (
                  <div key={cert.name} className="group flex flex-col">
                    {/* Big Visual Placeholder Box */}
                    <div className="aspect-[4/3] rounded-xl bg-white/5 border-2 border-dashed border-white/20 group-hover:border-sky group-hover:bg-white/10 flex flex-col items-center justify-center p-6 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden backdrop-blur-xs">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-sky group-hover:scale-110 group-hover:bg-sky/25 group-hover:text-white transition-all duration-300 shadow-inner">
                        {cert.icon}
                      </div>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/40 group-hover:text-sky transition-colors">
                        Seal Placeholder 0{i + 1}
                      </span>
                    </div>

                    {/* Content & Name Below Placeholder */}
                    <div className="mt-4">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-white group-hover:text-sky transition-colors leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-sky text-xs tracking-wider uppercase font-semibold mt-1">
                        {cert.code}
                      </p>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden lg:flex fixed bottom-8 left-6 z-40 items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-navy/50 hover:text-navy transition-colors bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-xs border border-navy/10 shadow-xs"
        >
          <span>↑</span>
          Back to top
        </button>
      </main>
      <Footer />
    </>
  );
}
