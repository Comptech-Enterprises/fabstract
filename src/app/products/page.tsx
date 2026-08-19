"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/PageHero";

export default function ProductsPage() {
  const productLines = [
    {
      title: "Woven Apparel",
      share: "55% of production",
      items: ["Tops", "Dresses", "Skirts", "Jackets", "Trousers", "Jumpsuits", "Pyjama Sets"],
      fabrics: "Cambric, Voile, Poplin, Yarn Dyed, Dobby",
    },
    {
      title: "Knitted Apparel",
      share: "45% of production",
      items: ["Tees", "Sweatshirts", "Hoodies", "Joggers", "Vests", "Underwear"],
      fabrics: "Velour, Sherpa, Single Jerseys, Pique, French Terry, Fleece, Interlock, Viscose Jersey, Modal/Cotton",
    },
    {
      title: "Home Textiles & Accessories",
      share: "Growing segment",
      items: ["Bed Linens", "Cushion Covers", "Blankets", "Scarves", "Tote Bags", "Accessories"],
      fabrics: "Premium cottons, blended fabrics, specialty weaves",
    },
  ];

  const materialTags = [
    { label: "Organic Cotton", desc: "GOTS-certified organic cotton sourcing" },
    { label: "Recycled", desc: "Recycled polyester & upcycled fabrics" },
    { label: "Cellulose", desc: "Modal, Tencel & viscose-based fibres" },
    { label: "Spun Dyed", desc: "Reduced water usage dope-dyed yarns" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Products"
          title="High fashion knitwear & woven garments"
          subtitle="From delicate beadwork to bold prints — women's (60%), men's (20%), and children's (20%) collections across woven, knitted, and home textile categories."
          fileIndex={0}
        />

        {productLines.map((line) => (
          <section key={line.title} className="border-t border-ink/10">
            <div className="px-6 sm:px-10 lg:px-14 py-14 max-w-3xl">
              <p className="text-teal text-[11px] tracking-[0.25em] uppercase mb-3">{line.share}</p>
              <h2 className="font-display text-4xl text-navy font-medium mb-6">{line.title}</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                {line.items.map((item) => (
                  <span key={item} className="text-navy/70 text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-teal mb-2">Key fabrics</p>
              <p className="text-navy/70 text-sm">{line.fabrics}</p>
            </div>
          </section>
        ))}

        <section className="px-6 sm:px-10 lg:px-14 py-20 border-t border-ink/10 bg-white">
          <p className="text-mute text-[11px] tracking-[0.3em] uppercase mb-4">Materials</p>
          <h2 className="font-display text-4xl text-ink font-medium mb-12">Fabrics we believe in</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-crimson/15">
            {materialTags.map((mat) => (
              <div key={mat.label} className="bg-white p-8">
                <h4 className="text-ink mb-2">{mat.label}</h4>
                <p className="text-mute text-sm leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
