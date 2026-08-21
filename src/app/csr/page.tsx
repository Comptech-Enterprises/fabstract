"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const CHAPTERS = [
  {
    id: "people",
    number: "01",
    title: "People",
    lead:
      "A fair floor is the product. Equal pay, maternity support, and training built into the working week — the reason people stay for years, not seasons.",
    theme: "light" as const,
    files: [GALLERY_FILES[0], GALLERY_FILES[1]],
    stats: [
      { value: "500+", label: "Skilled professionals across design, production, and quality." },
      { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
      { value: "60%+", label: "Female workforce with equal pay and maternity support." },
      { value: "85%+", label: "Retention — people stay because the floor is fair." },
    ],
  },
  {
    id: "purpose",
    number: "02",
    title: "Purpose",
    lead:
      "Compliance is the floor, not the ceiling. Fabstract runs to BSCI, ETI, and ILO standards, sources organic and recycled inputs where programmes allow, and documents every audit — not just the ones buyers ask for.",
    theme: "light" as const,
    files: [GALLERY_FILES[4], GALLERY_FILES[6]],
    stats: [
      { value: "BSCI", label: "Certified ethical manufacturing across the supply chain." },
      { value: "ETI", label: "Aligned with the Ethical Trading Initiative base code." },
      { value: "ILO", label: "Compliant with International Labour Organization conventions." },
      { value: "GOTS", label: "Organic cotton sourcing where programmes call for it." },
    ],
  },
  {
    id: "impact",
    number: "03",
    title: "Impact",
    lead:
      "Five active programmes covering education, environment, and worker well-being — run continuously since the house was founded, not switched on for audits.",
    theme: "light" as const,
    files: [GALLERY_FILES[7], GALLERY_FILES[8]],
    stats: [
      { value: "5", label: "Active CSR programmes — education, environment, well-being." },
      { value: "1991", label: "Fairtrade-aligned house, government-recognised exporter since founding." },
      { value: "30+", label: "Years of buyer audits passed without a compliance stop." },
      { value: "2", label: "Units — New Delhi and Noida — on the same CSR standard." },
    ],
  },
] as const;

const MARKS = ["CSCC Approved", "BSCI Certified", "ETI Aligned", "ILO Compliant", "Fairtrade", "GOTS"];

export default function CSRPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-5 sm:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">CSR</p>
          <h1 className="mt-4 font-display font-bold text-ink text-4xl sm:text-6xl tracking-tight">
            People. Purpose. Impact.
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-stone text-base sm:text-lg leading-relaxed">
            Sustainability is an exercise in social well-being — a commitment to the people on
            the floor and the standards behind every garment.
          </p>
        </section>

        {CHAPTERS.map((chapter, i) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`scroll-mt-24 relative overflow-hidden border-t border-sand ${i % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
              <SectionReveal>
                <p className="text-xs uppercase tracking-[0.2em] text-champagne">
                  Chapter {chapter.number}
                </p>
                <TextReveal
                  as="h2"
                  text={chapter.title}
                  className="mt-2 font-display font-semibold text-4xl sm:text-6xl tracking-tight text-ink"
                />
                <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-stone">
                  {chapter.lead}
                </p>
              </SectionReveal>

              <SectionReveal className="mt-10 grid sm:grid-cols-2 gap-4">
                {chapter.files.map((file) => (
                  <div key={file} className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <img
                      src={gallerySrc(file)}
                      alt={chapter.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </SectionReveal>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {chapter.stats.map((stat, j) => (
                  <SectionReveal key={stat.value} delay={j * 0.06}>
                    <div className="card p-5 h-full">
                      <p className="font-display text-2xl sm:text-3xl font-bold leading-none tracking-tight text-champagne">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-taupe">
                        {stat.label}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="marks" className="scroll-mt-24 bg-white border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
            <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                Certifications & audits
              </h2>
              <p className="max-w-sm text-sm text-stone leading-relaxed">
                Documentation available to buyers on request, per programme.
              </p>
            </SectionReveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {MARKS.map((mark, i) => (
                <SectionReveal key={mark} delay={i * 0.04}>
                  <span className="card inline-block px-4 py-2 text-xs font-medium text-stone">
                    {mark}
                  </span>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-champagne">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight max-w-lg">
              Want our compliance pack for your audit team?
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
