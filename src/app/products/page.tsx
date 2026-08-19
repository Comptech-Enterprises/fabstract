"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const TABS = [
  { id: "woven", label: "Woven" },
  { id: "knitted", label: "Knitted" },
  { id: "home", label: "Home" },
  { id: "materials", label: "Materials" },
] as const;

const LINES = [
  {
    id: "woven",
    title: "Woven Apparel",
    share: "55%",
    shareLabel: "of production",
    items: ["Tops", "Dresses", "Skirts", "Jackets", "Trousers", "Jumpsuits", "Pyjama Sets"],
    fabrics: "Cambric, Voile, Poplin, Yarn Dyed, Dobby",
    file: GALLERY_FILES[3],
  },
  {
    id: "knitted",
    title: "Knitted Apparel",
    share: "45%",
    shareLabel: "of production",
    items: ["Tees", "Sweatshirts", "Hoodies", "Joggers", "Vests", "Underwear"],
    fabrics: "Velour, Sherpa, Single Jerseys, Pique, French Terry, Fleece, Interlock, Viscose Jersey, Modal/Cotton",
    file: GALLERY_FILES[5],
  },
  {
    id: "home",
    title: "Home Textiles & Accessories",
    share: "Growing",
    shareLabel: "segment",
    items: ["Bed Linens", "Cushion Covers", "Blankets", "Scarves", "Tote Bags", "Accessories"],
    fabrics: "Premium cottons, blended fabrics, specialty weaves",
    file: GALLERY_FILES[8],
  },
] as const;

const MATERIALS = [
  { label: "Organic Cotton", desc: "GOTS-certified organic cotton sourcing" },
  { label: "Recycled", desc: "Recycled polyester & upcycled fabrics" },
  { label: "Cellulose", desc: "Modal, Tencel & viscose-based fibres" },
  { label: "Spun Dyed", desc: "Reduced water usage dope-dyed yarns" },
];

function SideNav({ active }: { active: string }) {
  return (
    <nav className="border-l border-navy/15 py-2">
      {TABS.map((tab) => {
        const on = active === tab.id;
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`flex items-center gap-3 py-2.5 -ml-px border-l-2 transition-colors ${
              on ? "border-navy text-navy" : "border-transparent text-navy/40 hover:text-navy"
            }`}
          >
            <span className={`h-px ${on ? "w-8 bg-navy" : "w-4 bg-navy/25"}`} />
            <span className={`text-[13px] ${on ? "font-medium" : ""}`}>{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default function ProductsPage() {
  const [active, setActive] = useState("woven");

  useEffect(() => {
    const nodes = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <PageIntro
          eyebrow="Products"
          title="High fashion knitwear & woven garments"
          subtitle="From delicate beadwork to bold prints — women's (60%), men's (20%), and children's (20%) collections across woven, knitted, and home textile categories."
        />

        <div className="border-t border-navy/10 grid grid-cols-3 text-center">
          {[
            { n: "60%", l: "Women" },
            { n: "20%", l: "Men" },
            { n: "20%", l: "Children" },
          ].map((s) => (
            <div key={s.l} className="py-8 border-r border-navy/10 last:border-r-0">
              <p className="font-display text-3xl sm:text-5xl text-navy">{s.n}</p>
              <p className="mt-1 text-[10px] tracking-[0.22em] uppercase text-teal">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-12">
          <aside className="hidden lg:block lg:col-span-2 px-6 pt-10 self-start sticky top-24 z-30">
            <SideNav active={active} />
          </aside>

          <div className="lg:col-span-10 min-w-0">
            <div className="lg:hidden sticky top-20 md:top-24 z-40 bg-white/95 border-b border-navy/10 backdrop-blur-md">
              <nav className="px-5 flex gap-6 overflow-x-auto">
                {TABS.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    className={`shrink-0 py-4 text-[11px] tracking-[0.22em] uppercase ${
                      active === tab.id ? "text-navy" : "text-navy/45"
                    }`}
                  >
                    {tab.label}
                  </a>
                ))}
              </nav>
            </div>

            {LINES.map((line, i) => (
              <section
                key={line.id}
                id={line.id}
                className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24 border-t border-navy/10"
              >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                  <Still
                    src={gallerySrc(line.file)}
                    alt={line.title}
                    className={`aspect-[4/5] min-h-[240px] lg:min-h-[28rem] ${
                      i % 2 === 1 ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
                    }`}
                  />
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}`}>
                    <p className="font-display text-6xl sm:text-7xl text-navy font-medium leading-none">{line.share}</p>
                    <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-teal">{line.shareLabel}</p>
                    <h2 className="mt-8 font-display text-4xl sm:text-5xl text-navy font-medium">{line.title}</h2>
                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                      {line.items.map((item) => (
                        <span key={item} className="text-navy/70 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-teal">Key fabrics</p>
                    <p className="mt-2 text-navy/70 text-sm leading-relaxed">{line.fabrics}</p>
                  </div>
                </div>
              </section>
            ))}

            <section id="materials" className="scroll-mt-32 bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-24 border-t border-navy/10">
              <p className="text-teal text-[11px] tracking-[0.28em] uppercase mb-3">Materials</p>
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Fabrics we believe in</h2>
              <div className="mt-12 grid sm:grid-cols-2 border-t border-navy/15">
                {MATERIALS.map((mat) => (
                  <div key={mat.label} className="border-b sm:border-r border-navy/15 p-8 sm:odd:border-r sm:[&:nth-child(2n)]:border-r-0">
                    <h3 className="text-navy font-medium text-lg">{mat.label}</h3>
                    <p className="mt-2 text-navy/60 text-sm leading-relaxed">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
