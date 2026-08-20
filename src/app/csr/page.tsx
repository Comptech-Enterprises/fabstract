"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const CHAPTERS = [
  {
    id: "people",
    number: "01",
    title: "People",
    lead:
      "A fair floor is the product. Equal pay, maternity support, and training built into the working week — the reason people stay for years, not seasons.",
    file: GALLERY_FILES[0],
    stats: [
      { value: "500+", label: "Skilled professionals across design, production, and quality." },
      { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
      { value: "60%+", label: "Female workforce with equal pay and maternity support." },
      { value: "85%+", label: "Retention — people stay because the floor is fair." },
    ],
  },
  {
    id: "planet",
    number: "02",
    title: "Planet",
    lead:
      "वन से हम — we exist because of forests. Miyawaki plantation programmes across Delhi/NCR, led by Sustainability Head Mrs. Abha Batra, alongside lower-impact fabric sourcing.",
    file: GALLERY_FILES[4],
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
    file: GALLERY_FILES[7],
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
        <PageIntro
          eyebrow="CSR"
          title="People. Planet. Floor."
          subtitle="Sustainability is an exercise in both social and environmental well-being — a commitment to people, the planet, and responsible manufacturing."
        />

        <section className="bg-white border-t border-sand">
          <SectionReveal className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-8 lg:gap-16 items-start px-5 sm:px-8 py-14 sm:py-16">
            <p className="lg:col-span-5 font-script text-2xl sm:text-3xl text-taupe leading-snug">
              Made well, by people treated well.
            </p>
            <p className="lg:col-span-7 text-stone text-sm sm:text-base leading-relaxed">
              Compliance is the floor, not the ceiling. Fabstract runs to BSCI, ETI, and ILO
              standards, sources organic and recycled inputs where programmes allow, and puts
              part of every year back into the communities the workforce comes from.
            </p>
          </SectionReveal>
        </section>

        {CHAPTERS.map((chapter, i) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`scroll-mt-24 border-t border-sand ${i % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
              <SectionReveal className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Still
                    src={gallerySrc(chapter.file)}
                    alt={chapter.title}
                    className="aspect-[5/4] w-full rounded-none"
                  />
                </div>
                <div className="lg:col-span-6">
                  <p className="font-script text-lg text-taupe">{chapter.number}</p>
                  <TextReveal
                    as="h2"
                    text={chapter.title}
                    className="mt-2 font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight"
                  />
                  <p className="mt-5 max-w-md text-sm sm:text-base text-stone leading-relaxed">
                    {chapter.lead}
                  </p>
                </div>
              </SectionReveal>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {chapter.stats.map((stat, j) => (
                  <SectionReveal key={stat.value} delay={j * 0.06}>
                    <div className="border-t border-sand pt-5">
                      <p className="font-display text-2xl sm:text-3xl font-medium leading-none tracking-tight text-ink">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-taupe leading-relaxed">
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
            <div className="mt-8 flex flex-wrap gap-2">
              {MARKS.map((mark, i) => (
                <SectionReveal key={mark} delay={i * 0.04}>
                  <span className="inline-block rounded-full border border-sand px-4 py-2 text-xs text-stone">
                    {mark}
                  </span>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight max-w-lg">
              Want our compliance pack for your audit team?
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
