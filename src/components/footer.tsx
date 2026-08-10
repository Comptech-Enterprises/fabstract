"use client";

import Link from "next/link";
import { NAV_LINKS } from "./navbar";

export function Footer() {
  return (
    <footer className="bg-smoky-black py-12 border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <p className="text-floral-white font-bold text-lg tracking-wide mb-4">
              FABSTRACT
            </p>
            <p className="text-bone/50 text-sm leading-relaxed max-w-sm">
              Government recognized garment export house, manufacturing &amp;
              exporting high fashion knitwear &amp; woven garments since 1991.
            </p>
          </div>

          <div>
            <p className="text-bone/80 font-semibold text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone/40 text-sm hover:text-olive-drab transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-bone/80 font-semibold text-sm mb-4">Certifications</p>
            <ul className="space-y-2 text-bone/40 text-sm">
              <li>CSCC Approved</li>
              <li>BSCI Certified</li>
              <li>ETI Aligned</li>
              <li>ILO Compliant</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bone/10 text-center">
          <p className="text-bone/30 text-sm">
            &copy; {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
