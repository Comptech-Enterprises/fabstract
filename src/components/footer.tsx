"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "./navbar";
import { EASE } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      className="bg-navy text-white border-t border-white/10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {/* Subtle glowing ambient lighting */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <Link href="/" className="inline-block mb-6 group">
            <img
              src="/logo-mark.png"
              alt="Fabstract Clothing India"
              className="h-14 md:h-18 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md font-light">
            Government recognized garment export house, manufacturing &amp;
            exporting high fashion knitwear &amp; woven garments since 1991.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-sky font-semibold mb-5">Index</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 text-sm hover:text-sky transition-colors font-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-sky font-semibold mb-5">Compliance & Marks</p>
          <ul className="space-y-3 text-white/80 text-sm font-light">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              CSCC Security Approved
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              BSCI Social Certified
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              ETI Base Code Aligned
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              ILO Standards Compliant
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
        <p className="text-white/50 text-xs tracking-wide font-light">
          &copy; {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-sky text-[11px] tracking-[0.28em] uppercase font-semibold">Vol. 1991</p>
      </div>
    </motion.footer>
  );
}
