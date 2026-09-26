"use client";

import React, { useEffect, useState, useCallback, useId } from "react";
import { motion } from "framer-motion";

export interface TabItem {
  id: string;
  label: string;
}

interface PageScrollLayoutProps {
  tabs: TabItem[];
  children: React.ReactNode;
  activeIdPrefix?: string;
  className?: string;
  sidebarTopClass?: string;
}

export function PageScrollLayout({
  tabs,
  children,
  activeIdPrefix,
  className = "",
  sidebarTopClass = "top-20",
}: PageScrollLayoutProps) {
  const generatedId = useId();
  const layoutId = activeIdPrefix || generatedId;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  /* ── Click-to-scroll with sticky navbar offset ── */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveTab(id);
    const navOffset = window.innerWidth < 1024 ? 80 : 100;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ── Robust Scrollspy ── */
  useEffect(() => {
    const updateActiveTab = () => {
      const navOffset = window.innerWidth < 1024 ? 80 : 110;

      // Handle bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        if (tabs.length > 0) setActiveTab(tabs[tabs.length - 1].id);
        return;
      }

      let current = tabs[0]?.id || "";
      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset + 140) {
            current = tab.id;
          }
        }
      }
      if (current) setActiveTab(current);
    };

    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab, { passive: true });
    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, [tabs]);

  return (
    <section className={`bg-white relative ${className}`}>
      {/* ─────────────────────────────────────────────── */}
      {/*  MOBILE HORIZONTAL TABS                         */}
      {/* ─────────────────────────────────────────────── */}
      <div className="lg:hidden sticky top-14 sm:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-navy/10 w-full">
        <div className="flex overflow-x-auto px-6 sm:px-10 gap-6 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.id)}
                className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-navy font-medium" : "text-navy/40"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId={`mobileStickyTab-${layoutId}`}
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
        <aside
          className={`hidden lg:flex flex-col sticky ${sidebarTopClass} self-start w-[190px] xl:w-[220px] shrink-0 pl-6 xl:pl-10 py-16 xl:py-20 z-20`}
        >
          <nav className="flex flex-col gap-3" aria-label="Section navigation">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
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
        </div>
      </div>
    </section>
  );
}
