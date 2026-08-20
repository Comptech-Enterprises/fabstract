"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

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

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Products"
          title="Knit. Woven. Home."
          subtitle="From delicate beadwork to bold prints — women's (60%), men's (20%), and children's (20%) collections across woven, knitted, and home textile categories."
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-3 flex gap-6 text-sm text-taupe">
          <span>60% women</span>
          <span>20% men</span>
          <span>20% children</span>
        </div>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 grid md:grid-cols-3 gap-4">
          {LINES.map((line) => (
            <article key={line.id} id={line.id} className="rounded-lg border border-sand bg-white overflow-hidden">
              <Still src={gallerySrc(line.file)} alt={line.title} className="aspect-[4/3] w-full" />
              <div className="p-5">
                <p className="text-xs text-taupe">
                  {line.share} {line.shareLabel}
                </p>
                <h2 className="mt-1 font-display font-semibold text-xl text-ink">{line.title}</h2>
                <p className="mt-3 text-sm text-stone">{line.items.join(", ")}</p>
                <p className="mt-3 text-xs text-taupe">Key fabrics</p>
                <p className="mt-1 text-sm text-stone">{line.fabrics}</p>
              </div>
            </article>
          ))}
        </div>
        <section id="materials" className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
          <h2 className="font-display font-semibold text-2xl text-ink mb-4">Fabrics we believe in</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {MATERIALS.map((mat) => (
              <div key={mat.label} className="rounded-lg border border-sand bg-white p-5">
                <h3 className="font-medium text-ink">{mat.label}</h3>
                <p className="mt-1 text-sm text-stone">{mat.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
