"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "./navbar";
import { EASE } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      className="bg-white text-navy border-t border-navy/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="px-5 sm:px-8 lg:px-12 py-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <p className="font-display text-5xl text-navy mb-5">Fabstract</p>
          <p className="text-navy/70 text-sm leading-relaxed max-w-md">
            Government recognized garment export house, manufacturing &amp;
            exporting high fashion knitwear &amp; woven garments since 1991.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[10px] tracking-[0.28em] uppercase text-teal mb-5">Index</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-navy/85 text-sm hover:text-teal transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-[10px] tracking-[0.28em] uppercase text-teal mb-5">Marks</p>
          <ul className="space-y-2.5 text-navy/85 text-sm">
            <li>CSCC Approved</li>
            <li>BSCI Certified</li>
            <li>ETI Aligned</li>
            <li>ILO Compliant</li>
          </ul>
        </div>
      </div>
      <div className="px-5 sm:px-8 lg:px-12 py-6 border-t border-navy/10 flex flex-wrap justify-between gap-3">
        <p className="text-navy/45 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd.
        </p>
        <p className="text-teal text-[10px] tracking-[0.28em] uppercase">Vol. 1991</p>
      </div>
    </motion.footer>
  );
}
