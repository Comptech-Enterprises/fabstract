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

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="mx-auto max-w-6xl px-4 sm:px-8 h-[4.25rem] sm:h-[4.75rem] flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <img src="/logo-mark.png" alt="Fabstract" className="h-11 sm:h-12 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base lg:text-lg ${active ? "text-ink font-medium" : "text-taupe hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>
      {open ? (
        <div className="md:hidden border-t border-sand px-5 py-5 bg-white space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-lg text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
