"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/SectionReveal";
import { GALLERY_FILES } from "@/data/gallery";
import { EASE } from "@/lib/motion";

const LINES = [
  {
    id: "woven",
    title: "Woven Apparel",
    blurb:
      "Structured pieces cut on the Noida floor — from soft cambric tops to lined jackets, sampled and graded in-house.",
    items: ["Tops", "Dresses", "Skirts", "Jackets", "Trousers", "Jumpsuits", "Pyjama Sets"],
    fabrics: ["Cambric", "Voile", "Poplin", "Yarn Dyed", "Dobby"],
    file: GALLERY_FILES[3],
  },
  {
    id: "knitted",
    title: "Knitted Apparel",
    blurb:
      "Jersey and loopknit programmes built for repeat buys — consistent handfeel, shrinkage tested before bulk.",
    items: ["Tees", "Sweatshirts", "Hoodies", "Joggers", "Vests", "Underwear"],
    fabrics: [
      "Velour",
      "Sherpa",
      "Single Jersey",
      "Pique",
      "French Terry",
      "Fleece",
      "Interlock",
      "Viscose Jersey",
      "Modal/Cotton",
    ],
    file: GALLERY_FILES[5],
  },
  {
    id: "home",
    title: "Home Textiles & Accessories",
    blurb:
      "Bed linen, soft furnishing, and carry pieces made on the same quality system as the apparel lines.",
    items: ["Bed Linens", "Cushion Covers", "Blankets", "Scarves", "Tote Bags", "Accessories"],
    fabrics: ["Premium cottons", "Blended fabrics", "Specialty weaves"],
    file: GALLERY_FILES[8],
  },
] as const;

const MATERIALS = [
  { label: "Organic Cotton", desc: "GOTS-certified organic cotton sourcing." },
  { label: "Recycled", desc: "Recycled polyester and upcycled fabrics." },
  { label: "Cellulose", desc: "Modal, Tencel, and viscose-based fibres." },
  { label: "Spun Dyed", desc: "Dope-dyed yarns that cut water usage." },
  { label: "BCI Cotton", desc: "Better Cotton Initiative sourced fibres." },
];

function ProductHero() {
  return (
    <section className="relative bg-white border-b border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">Products</p>
          <h1 className="mt-4 font-display font-bold text-ink text-4xl sm:text-6xl tracking-tight leading-[0.98]">
            Knit. Woven. Home.
          </h1>
          <p className="mt-6 max-w-lg text-stone text-base sm:text-lg leading-relaxed">
            From delicate beadwork to bold prints — women's, men's, and children's collections
            across woven, knitted, and home textile categories.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {LINES.map((line, i) => (
            <motion.a
              key={line.id}
              href={`#${line.id}`}
              className="card p-6 sm:p-8 h-full block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
            >
              <p className="font-display text-sm font-bold text-champagne">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display font-semibold text-xl sm:text-2xl text-ink tracking-tight">
                {line.title}
              </h3>
              <p className="mt-3 text-sm text-stone leading-relaxed">{line.blurb}</p>
              <span className="mt-5 inline-block text-xs uppercase tracking-[0.14em] text-champagne">
                Explore →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyProductLines() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    function updateActive() {
      ticking = false;
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const line = LINES[active];

  return (
    <section className="border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:h-fit lg:py-24">
          <div className="flex gap-2 mb-8">
            {LINES.map((l, i) => (
              <span
                key={l.id}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i === active ? "bg-champagne" : "bg-sand"
                }`}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={line.id}
              id={line.id}
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <p className="text-[11px] uppercase tracking-wider text-champagne">
                {String(active + 1).padStart(2, "0")} / {String(LINES.length).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display font-semibold text-2xl sm:text-4xl text-ink tracking-tight">
                {line.title}
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-base text-stone leading-relaxed">
                {line.blurb}
              </p>

              <p className="mt-8 text-[11px] uppercase tracking-wider text-taupe">
                Categories
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 max-w-md text-sm text-stone">
                {line.items.map((item) => (
                  <li key={item} className="border-b border-sand/60 py-1.5">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[11px] uppercase tracking-wider text-taupe">
                Key fabrics
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {line.fabrics.map((fabric) => (
                  <span
                    key={fabric}
                    className="border border-sand rounded-lg px-3 py-1 text-xs text-stone"
                  >
                    {fabric}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-7 py-14 sm:py-16 space-y-6">
          {LINES.map((l, i) => (
            <div
              key={l.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="aspect-[5/4] lg:aspect-auto lg:h-[80vh] w-full overflow-hidden rounded-2xl bg-sand grid place-items-center"
            >
              <span className="font-display text-sm uppercase tracking-[0.2em] text-taupe">{l.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <ProductHero />

        <StickyProductLines />

        <section id="materials" className="bg-white border-t border-sand overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16">
            <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                Fabrics we believe in
              </h2>
              <p className="max-w-sm text-sm text-stone leading-relaxed">
                Sustainable inputs offered on every programme, subject to buyer specification. Drag to browse.
              </p>
            </SectionReveal>
          </div>

          <div className="mt-10 pb-14 sm:pb-16 pl-5 sm:pl-8 flex gap-4 overflow-x-auto snap-x snap-mandatory film-scroll">
            {MATERIALS.map((mat, i) => (
              <motion.div
                key={mat.label}
                className="card p-6 snap-start shrink-0 w-[70vw] sm:w-[280px]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <p className="font-script text-base" style={{ color: "var(--champagne)" }}>0{i + 1}</p>
                <h3 className="mt-2 font-display font-semibold text-lg text-ink">
                  {mat.label}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed">{mat.desc}</p>
              </motion.div>
            ))}
            <div className="shrink-0 w-px sm:w-8" aria-hidden />
          </div>
        </section>

        <section className="bg-champagne">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight max-w-lg">
              Send a tech pack — we'll come back with a sample plan.
            </h2>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-white text-champagne px-6 py-3 text-sm font-medium hover:bg-ink hover:text-white transition-colors">
              Talk to us →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
