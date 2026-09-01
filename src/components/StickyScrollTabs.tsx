"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { R2_MEDIA } from "@/data/hero";

/* ------------------------------------------------------------------ */
/*  Tabs config                                                        */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: "s-newsroom", label: "Newsroom" },
  { id: "s-contact", label: "Contact" },
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

const ARTICLE_URL =
  "https://betterfuturemedia.substack.com/p/eu-ban-destroying-unsold-clothes?r=8has2w&utm_medium=ios&utm_source=notes-share-action";

const NEWS_CARDS: NewsCard[] = [
  {
    category: "People",
    date: "June 30, 2026",
    title: "Ethical Manufacturing and Shared Accountability",
    excerpt:
      "How garment manufacturers can prioritise interventions that fit their workforce & operational needs with accountability.",
    image: `${R2_MEDIA}/worker.jpg`,
    href: ARTICLE_URL,
  },
  {
    category: "Media & Research",
    date: "May 12, 2026",
    title: "Worker Welfare Programmes Boost Productivity by 6%",
    excerpt:
      "Low-cost vision correction intervention delivers over 3x return; Fabstract to expand programme to all workers.",
    image: `${R2_MEDIA}/health.jpg`,
    href: ARTICLE_URL,
  },
  {
    category: "Media & Research",
    date: "April 21, 2026",
    title: "Fabstract and Innovo Fiber Scale Fibre52® Technology",
    excerpt:
      "Fabstract Clothing, one of India's leading garment exporters, has partnered with Innovo for lower-impact cotton processing.",
    image: `${R2_MEDIA}/yarn.jpg`,
    href: ARTICLE_URL,
  },
  {
    category: "Sustainability",
    date: "March 15, 2026",
    title: "Fabstract Releases Annual Sustainability Progress Report",
    excerpt:
      "Fabstract releases its sustainability report, highlighting a 30% reduction in water usage and 1.3M+ hours of employee training.",
    image: `${R2_MEDIA}/trees.jpg`,
    href: ARTICLE_URL,
  },
  {
    category: "Industry",
    date: "February 8, 2026",
    title: "Government Recognises Fabstract for Export Excellence",
    excerpt:
      "Fabstract Clothing India receives the prestigious Star Export House recognition for consistent growth and ethical trade practices.",
    image: `${R2_MEDIA}/training.jpg`,
    href: ARTICLE_URL,
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
  const [selectedArticles, setSelectedArticles] = useState<NewsCard[]>(NEWS_CARDS.slice(0, 3));

  const containerRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const newsScrollRef = useRef<HTMLDivElement>(null);

  // Randomly select 3 articles on client mount
  useEffect(() => {
    const shuffled = [...NEWS_CARDS].sort(() => 0.5 - Math.random());
    setSelectedArticles(shuffled.slice(0, 3));
  }, []);

  /* ── Click-to-scroll ── */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveTab(id);
    const navOffset = window.innerWidth < 1024 ? 80 : 96;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ── Robust Scrollspy for Active Tab ── */
  useEffect(() => {
    const updateActiveTab = () => {
      const navOffset = window.innerWidth < 1024 ? 80 : 100;

      const newsEl = document.getElementById("s-newsroom");
      const contactEl = document.getElementById("s-contact");

      if (!newsEl || !contactEl) return;

      const contactRect = contactEl.getBoundingClientRect();

      if (contactRect.top <= navOffset + 140) {
        setActiveTab("s-contact");
      } else {
        setActiveTab("s-newsroom");
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
          {/*  SECTION 2 — NEWSROOM                       */}
          {/* ═══════════════════════════════════════════ */}
          <article
            id="s-newsroom"
            ref={registerRef("s-newsroom")}
            className="scroll-mt-24 lg:scroll-mt-24 px-6 sm:px-10 lg:px-14 py-16 lg:py-20 min-h-[calc(100vh-6rem)] flex flex-col justify-center border-t border-navy/10"
          >
            {/* Header + View More */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-teal text-xs tracking-[0.25em] uppercase font-medium">Stories & Updates</span>
                <motion.h2
                  className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-light tracking-tight mt-2"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  Newsroom
                </motion.h2>
              </div>

              {/* View More Link in Header */}
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-navy text-xs tracking-[0.2em] uppercase font-semibold hover:text-teal transition-colors pb-1 border-b border-navy/20 hover:border-teal"
              >
                View all articles
                <span>→</span>
              </a>
            </div>

            {/* 3 Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {selectedArticles.map((card, i) => (
                <motion.div
                  key={`${card.title}-${i}`}
                  className="bg-white group flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                >
                  <div>
                    {/* Card image */}
                    <div className="relative w-full aspect-[4/3] bg-navy/5 overflow-hidden mb-4 rounded-lg">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Category + date */}
                    <p className="text-navy/50 text-[13px] mb-2">
                      {card.category}{" "}
                      <span className="text-navy/30">|</span> {card.date}
                    </p>

                    {/* Title */}
                    <h3 className="font-display text-navy text-xl font-medium leading-snug mb-3 group-hover:text-teal transition-colors">
                      {card.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-navy/55 text-sm leading-relaxed mb-4 line-clamp-3">
                      {card.excerpt}
                    </p>
                  </div>

                  {/* Read more */}
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-navy text-[13px] tracking-wide uppercase hover:text-teal transition-colors group-hover:underline"
                  >
                    Read more
                    <span>›</span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile View More Button */}
            <div className="mt-10 sm:hidden">
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-navy text-navy text-xs tracking-[0.2em] uppercase font-semibold hover:bg-navy hover:text-white transition-all"
              >
                View all articles →
              </a>
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
            <div className="bg-white px-6 sm:px-10 lg:px-14 py-16 space-y-10">
              <div>
                <p className="text-navy text-[11px] tracking-[0.32em] uppercase mb-4">
                  Contact
                </p>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight">
                  Let&apos;s work together
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div>
                  <h4 className="text-[10px] tracking-[0.22em] uppercase text-navy mb-3">
                    Email
                  </h4>
                  <a
                    href="mailto:marketing@fcipl.net"
                    className="text-ink text-sm inline-block hover:text-teal font-medium"
                  >
                    marketing@fcipl.net
                  </a>
                </div>
              </div>
              <div className="h-64 border border-navy/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373.328171050494!2d77.42009967629299!3d28.510651575731526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce964e1798c21%3A0x377f35899acea227!2sFabstract%20Clothing%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1787899092345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Fabstract Clothing India Pvt Ltd"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
