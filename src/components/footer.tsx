"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-stone border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-3">Navigate</p>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-stone hover:text-ink w-fit">About</Link>
            <Link href="/products" className="text-sm text-stone hover:text-ink w-fit">Products</Link>
            <Link href="/gallery" className="text-sm text-stone hover:text-ink w-fit">Gallery</Link>
            <Link href="/csr" className="text-sm text-stone hover:text-ink w-fit">CSR</Link>
            <Link href="/career" className="text-sm text-stone hover:text-ink w-fit">Careers</Link>
          </nav>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-3">Contact</p>
          <a href="tel:+911140524038" className="block text-sm text-stone hover:text-ink">
            +91-11-4052 4038
          </a>
          <Link href="/#contact" className="block mt-2 text-sm text-stone hover:text-ink">
            Enquiry form
          </Link>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-3">New Delhi</p>
          <p className="text-sm text-stone leading-relaxed">M-169, Greater Kailash-II</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-3">Noida</p>
          <p className="text-sm text-stone leading-relaxed">C-57, Hosiery Complex</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 border-t border-sand flex flex-wrap items-center gap-4 justify-between">
        <img src="/logo-mark.png" alt="Fabstract" className="h-8 w-auto object-contain opacity-80" />
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] uppercase tracking-wider text-taupe">
          <p>© {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd.</p>
          <p>Est. 1991 · Fairtrade · BSCI</p>
        </div>
      </div>
    </footer>
  );
}
