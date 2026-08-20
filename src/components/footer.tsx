"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "./navbar";
import { EASE } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-sand">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display font-semibold text-ink text-lg">Fabstract</p>
          <p className="mt-3 text-sm text-stone leading-relaxed">
            Government-recognised garment export house. Knit, woven, and home — Noida to the world since 1991.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-1">Site</p>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-stone hover:text-ink w-fit">
              {link.label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-3">Contact</p>
          <a href="tel:+911140524038" className="block text-sm text-stone hover:text-ink">
            +91-11-4052 4038
          </a>
          <Link href="/#contact" className="block mt-2 text-sm text-stone hover:text-ink">
            Request a quote
          </Link>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-3">Houses</p>
          <p className="text-sm text-stone leading-relaxed">M-169, Greater Kailash-II, New Delhi</p>
          <p className="mt-3 text-sm text-stone leading-relaxed">C-57, Hosiery Complex, Noida</p>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-6 border-t border-sand flex flex-wrap gap-3 justify-between text-xs text-taupe">
        <p>© {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd.</p>
        <p>Est. 1991 · Fairtrade · BSCI</p>
      </div>
      <motion.p
        aria-hidden
        className="relative z-0 block w-full whitespace-nowrap text-center font-display font-extrabold leading-[0.68] tracking-[-0.06em] text-sand/80 select-none pointer-events-none px-2 -mb-[0.18em]"
        style={{ fontSize: "calc((100vw - 1rem) / 9.4)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        FABSTRACT
      </motion.p>
    </footer>
  );
}
