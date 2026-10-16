"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { R2_MEDIA } from "@/data/hero";

/* ------------------------------------------------------------------ */
/*  Tabs config                                                        */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: "s-about", label: "About Us" },
  { id: "s-brands", label: "Brands" },
  { id: "s-showcase", label: "Showcase" },
  { id: "s-strengths", label: "Strengths" },
  { id: "s-factories", label: "Factories" },
  { id: "s-contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Contact form field style                                           */
/* ------------------------------------------------------------------ */

const field =
  "w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky";

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function StickyScrollTabs({ children }: { children?: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const getNavOffset = () => {
    if (typeof window === "undefined") return 72;
    const nav = document.querySelector("nav");
    const navHeight = nav
      ? nav.getBoundingClientRect().height
      : window.innerWidth < 640
      ? 56
      : window.innerWidth < 768
      ? 64
      : 72;
    if (window.innerWidth < 1024) {
      const mobileTabs = document.querySelector(".lg\\:hidden.sticky");
      const tabsHeight = mobileTabs ? mobileTabs.getBoundingClientRect().height : 52;
      return navHeight + tabsHeight;
    }
    return navHeight;
  };

  /* ── Click-to-scroll ── */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveTab(id);
    const navOffset = getNavOffset();
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ── Robust Scrollspy for Active Tab ── */
  useEffect(() => {
    const updateActiveTab = () => {
      const navOffset = getNavOffset();

      let current = TABS[0].id;
      for (const tab of TABS) {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= navOffset + 140) current = tab.id;
      }
      setActiveTab(current);
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

  return (
    <section ref={containerRef} className="bg-white relative">
      {/* ─────────────────────────────────────────────── */}
      {/*  MOBILE HORIZONTAL TABS                         */}
      {/* ─────────────────────────────────────────────── */}
      <div className="lg:hidden sticky top-14 sm:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-navy/10 w-full">
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
        <aside className="hidden lg:flex flex-col sticky top-20 self-start w-[180px] shrink-0 pl-6 xl:pl-12 py-20 z-20">
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
          {children}

          {/* ═══════════════════════════════════════════ */}
          {/*  TAGLINE                                     */}
          {/* ═══════════════════════════════════════════ */}
          <div className="bg-[#06402B] px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
            <p className="text-center font-display text-xl sm:text-2xl lg:text-3xl text-white italic leading-[1.6]">
              Sustainably grown. Consciously made. Expertly crafted.
            </p>
          </div>


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
