"use client";

import Link from "next/link";

export function EnquireTab() {
  return (
    <Link
      href="/#contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-2.5 py-4 [writing-mode:vertical-rl] hover:brightness-110 transition-[filter]"
      style={{ background: "var(--champagne)" }}
    >
      Enquire Now
    </Link>
  );
}
