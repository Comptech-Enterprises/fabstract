"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

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
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Products"
          title="Knit. Woven. Home."
          subtitle="From delicate beadwork to bold prints — women’s, men’s, and children’s collections across woven, knitted, and home textile categories."
        />


        <section>
          {LINES.map((line, i) => (
            <SectionReveal key={line.id}>
              <article
                id={line.id}
                className={`scroll-mt-24 mx-auto max-w-6xl grid lg:grid-cols-12 gap-8 lg:gap-14 items-center px-5 sm:px-8 py-14 sm:py-16 border-t border-sand ${
                  i % 2 === 1 ? "bg-white" : ""
                }`}
              >
                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Still
                    src={gallerySrc(line.file)}
                    alt={line.title}
                    className="aspect-[5/4] w-full rounded-none"
                  />
                </div>

                <div className="lg:col-span-6">
                  <TextReveal
                    as="h2"
                    text={line.title}
                    className="font-display font-semibold text-2xl sm:text-4xl text-ink tracking-tight"
                  />
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
                        className="glass-min rounded-full px-3 py-1 text-xs text-stone"
                      >
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </section>

        <section id="materials" className="bg-white border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
            <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                Fabrics we believe in
              </h2>
              <p className="max-w-sm text-sm text-stone leading-relaxed">
                Sustainable inputs offered on every programme, subject to buyer specification.
              </p>
            </SectionReveal>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MATERIALS.map((mat, i) => (
                <SectionReveal key={mat.label} delay={i * 0.06}>
                  <div className="border-t border-sand pt-5">
                    <p className="font-script text-base" style={{ color: "var(--champagne)" }}>0{i + 1}</p>
                    <h3 className="mt-2 font-display font-semibold text-lg text-ink">
                      {mat.label}
                    </h3>
                    <p className="mt-2 text-sm text-stone leading-relaxed">{mat.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight max-w-lg">
              Send a tech pack — we’ll come back with a sample plan.
            </h2>
            <a href="/#contact" className="btn-crimson">
              Talk to us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
