"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/career" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 bg-white/95 border-b border-navy/10 ${
        scrolled || open ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-20 md:h-24">
        <Link href="/" className="shrink-0 flex items-center">
          <img
            src="/logo-mark.png"
            alt="Fabstract Clothing India"
            className="h-14 md:h-[4.75rem] w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs lg:text-sm tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-teal" : "text-navy/70 hover:text-navy"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-teal" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-navy focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-[2px] bg-navy rounded-full transition-all duration-300 ease-out origin-center ${
              open ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-navy rounded-full transition-all duration-300 ease-out ${
              open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-navy rounded-full transition-all duration-300 ease-out origin-center ${
              open ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-navy/10 overflow-hidden shadow-lg"
          >
            <div className="py-2 divide-y divide-navy/5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-sm font-medium tracking-[0.2em] uppercase transition-colors ${
                    pathname === link.href ? "text-teal bg-navy/[0.02]" : "text-navy hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
