"use client";

import Link from "next/link";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "CSR", href: "/csr" },
  { label: "Careers", href: "/career" },
];

export function Footer() {
  return (
    <footer className="bg-cream text-stone border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/logo-mark.png" alt="Fabstract" className="h-9 w-auto object-contain" />
          <p className="mt-4 text-sm text-stone/70 leading-relaxed max-w-xs">
            Government-recognised garment export house. Knit, woven, and home — Noida to the world since 1991.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "var(--champagne)" }}>
            Navigate
          </p>
          <nav className="flex flex-col gap-2.5">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-stone hover:text-ink transition-colors w-fit">
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="text-sm text-stone hover:text-ink transition-colors w-fit">
              Contact Us
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "var(--champagne)" }}>
            Contact
          </p>
          <a href="tel:+911140524038" className="block text-sm text-stone hover:text-ink transition-colors">
            +91-11-4052 4038
          </a>
          <a href="mailto:info@fabstractclothing.com" className="block mt-2.5 text-sm text-stone hover:text-ink transition-colors">
            info@fabstractclothing.com
          </a>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "var(--champagne)" }}>
            Offices
          </p>
          <p className="text-sm text-stone leading-relaxed">New Delhi — M-169, Greater Kailash-II</p>
          <p className="mt-2.5 text-sm text-stone leading-relaxed">Noida — C-57, Hosiery Complex</p>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-taupe">
          <p>© {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd. — All Rights Reserved</p>
          <p>Est. 1991 · Fairtrade · BSCI</p>
        </div>
      </div>
    </footer>
  );
}
