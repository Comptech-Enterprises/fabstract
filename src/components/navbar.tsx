"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "CSR", href: "/csr" },
  { label: "Careers", href: "/career" },
];

const LEFT = NAV_LINKS.slice(0, 3);
const RIGHT = NAV_LINKS.slice(3);

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative pb-1 text-xs lg:text-sm tracking-[0.12em] uppercase transition-colors ${
        active
          ? "text-ink font-medium after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[1.5px] after:bg-champagne"
          : "text-taupe hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sand">
      <nav className="mx-auto max-w-6xl px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        <div className="flex-1 hidden md:flex items-center gap-7 lg:gap-10">
          {LEFT.map((link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ))}
        </div>

        <Link href="/" className="shrink-0">
          <img src="/logo-mark.png" alt="Fabstract" className="h-12 sm:h-14 w-auto object-contain" />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-7 lg:gap-10">
          <div className="hidden md:flex items-center gap-7 lg:gap-10">
            {RIGHT.map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} />
            ))}
          </div>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center rounded-lg bg-champagne px-4 py-2 text-xs font-medium tracking-wide text-white hover:bg-accent2 transition-colors"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="md:hidden mx-4 mb-4 bg-white border border-sand rounded-lg px-5 py-5 space-y-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-2.5 text-xl text-ink"
            >
              <span className="text-xs text-champagne">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
