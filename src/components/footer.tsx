"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "./navbar";
import { EASE } from "@/lib/motion";

const DITHER =
  "url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27360%27%20height%3D%27240%27%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%270%27%20y2%3D%271%27%3E%3Cstop%20offset%3D%270.04%27%20stop-color%3D%27%23000%27%2F%3E%3Cstop%20offset%3D%270.96%27%20stop-color%3D%27%23fff%27%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%27f%27%20x%3D%270%27%20y%3D%270%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20color-interpolation-filters%3D%27sRGB%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.45%27%20numOctaves%3D%272%27%20seed%3D%277%27%20stitchTiles%3D%27stitch%27%20result%3D%27n%27%2F%3E%3CfeColorMatrix%20in%3D%27n%27%20type%3D%27matrix%27%20values%3D%271%200%200%200%200%201%200%200%200%200%201%200%200%200%200%200%200%200%200%201%27%20result%3D%27ng%27%2F%3E%3CfeComposite%20in%3D%27SourceGraphic%27%20in2%3D%27ng%27%20operator%3D%27arithmetic%27%20k2%3D%270.5%27%20k3%3D%270.5%27%20result%3D%27s%27%2F%3E%3CfeComponentTransfer%20in%3D%27s%27%20result%3D%27t%27%3E%3CfeFuncR%20type%3D%27discrete%27%20tableValues%3D%270%201%27%2F%3E%3C%2FfeComponentTransfer%3E%3CfeColorMatrix%20in%3D%27t%27%20type%3D%27matrix%27%20values%3D%270%200%200%200%201%200%200%200%200%200.5%200%200%200%200%200%201%200%200%200%200%27%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27url%28%23g%29%27%20filter%3D%27url%28%23f%29%27%2F%3E%3C%2Fsvg%3E')";

const GRID = "radial-gradient(circle, #000 0.9px, transparent 1.3px)";

const DITHER_STYLES = `
.df-field { position: absolute; inset: 0; }
.df-field.df-lit {
  -webkit-mask-image: radial-gradient(circle 220px at var(--df-x, 50%) var(--df-y, 50%), #000 40%, rgb(0 0 0 / .25) 100%);
  mask-image: radial-gradient(circle 220px at var(--df-x, 50%) var(--df-y, 50%), #000 40%, rgb(0 0 0 / .25) 100%);
}
.df-dots {
  position: absolute; top: 0; bottom: 0; left: 0;
  width: calc(100% + 360px);
  background: var(--df-accent, #567c8d);
  -webkit-mask-image: ${GRID}, ${DITHER};
  mask-image: ${GRID}, ${DITHER};
  -webkit-mask-size: 4px 4px, 360px 240px;
  mask-size: 4px 4px, 360px 240px;
  -webkit-mask-repeat: repeat, repeat-x;
  mask-repeat: repeat, repeat-x;
  -webkit-mask-position: 0 0, left bottom;
  mask-position: 0 0, left bottom;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}
@media (prefers-reduced-motion: no-preference) {
  .df-dots { animation: df-drift 40s linear infinite; }
  @supports (animation-timeline: view()) {
    .df-band { view-timeline: --df-band; }
    .df-mark { animation: df-rise linear both; animation-timeline: --df-band; animation-range: entry 20% entry 100%; }
  }
}
@keyframes df-drift { to { translate: -360px 0; } }
@keyframes df-rise { from { translate: 0 25%; } }
`;

export function Footer() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !fieldRef.current) return;
    const el = fieldRef.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--df-x", `${x}px`);
      el.style.setProperty("--df-y", `${y}px`);
      el.classList.add("df-lit");
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(frameRef.current);
    fieldRef.current?.classList.remove("df-lit");
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <motion.footer
      className="bg-navy text-white border-t border-white/10 relative overflow-hidden"
      style={{ "--df-accent": "#567c8d" } as CSSProperties}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <style>{DITHER_STYLES}</style>

      {/* Subtle glowing ambient lighting */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <Link href="/" className="inline-block mb-6 group">
            <img
              src="/branding/logo-mark.webp"
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
                <Link
                  href={link.href}
                  className="text-white/80 text-sm hover:text-sky transition-colors font-light"
                >
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

      {/* ── Interactive Dither Band with Wordmark ── */}
      <div
        aria-hidden="true"
        className="df-band relative h-48 sm:h-56 lg:h-64 overflow-hidden border-t border-white/5"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div ref={fieldRef} className="df-field">
          <div className="df-dots" />
        </div>
        <p className="df-mark pointer-events-none absolute -bottom-[0.05em] left-3 select-none text-[clamp(4.5rem,19vw,12rem)] font-bold leading-[0.8] tracking-[-0.06em] text-navy sm:left-6">
          FABSTRACT
        </p>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
        <p className="text-white/50 text-xs tracking-wide font-light">
          &copy; {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 text-[11px] tracking-wider uppercase text-white/75 hover:text-white transition-all cursor-pointer"
          >
            Back to top
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5m-6 6 6-6 6 6" />
            </svg>
          </button>
          <span className="w-px h-3 bg-white/15" aria-hidden="true" />
          <p className="text-sky text-[11px] tracking-[0.28em] uppercase font-semibold">Vol. 1991</p>
        </div>
      </div>
    </motion.footer>
  );
}
