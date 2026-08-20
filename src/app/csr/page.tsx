"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

export default function CSRPage() {
  const peopleStats = [
    { value: "500+", label: "Skilled professionals across design, production, and quality." },
    { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
  ];
  const planetStats = [
    { value: "BSCI", label: "Certified ethical manufacturing across the supply chain." },
    { value: "ETI", label: "Aligned with Ethical Trading Initiative base code." },
    { value: "ILO", label: "Compliant with International Labour Organization conventions." },
    { value: "GOTS", label: "Organic cotton sourcing where programmes call for it." },
  ];
  const csrStats = [
    { value: "5", label: "Active CSR programmes — education, environment, and worker well-being." },
    { value: "60%+", label: "Female workforce with equal pay and maternity support." },
    { value: "85%+", label: "Retention — people stay because the floor is fair." },
    { value: "1991", label: "Fairtrade-aligned house, government-recognised exporter since founding." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="CSR"
          title="People. Planet. Floor."
          subtitle="Sustainability is an exercise in both social and environmental well-being — a commitment to people, the planet, and responsible manufacturing."
        />
        <section id="people" className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
          <Still src={gallerySrc(GALLERY_FILES[0])} alt="Floor" className="aspect-video w-full rounded-lg" />
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {peopleStats.map((s) => (
              <div key={s.value} className="rounded-lg border border-sand bg-white p-5">
                <p className="font-display text-2xl font-semibold text-ink">{s.value}</p>
                <p className="mt-2 text-sm text-stone">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="planet" className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
          <h2 className="font-display font-semibold text-2xl text-ink">Planet</h2>
          <p className="text-stone text-sm mt-3 max-w-2xl leading-relaxed">
            वन से हम — we exist because of forests. Miyawaki programmes in Delhi/NCR, led by Sustainability Head Mrs. Abha Batra.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {planetStats.map((s) => (
              <div key={s.value} className="rounded-lg border border-sand bg-white p-5">
                <p className="font-display text-xl font-semibold text-ink">{s.value}</p>
                <p className="text-xs text-taupe mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="csr" className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
          <h2 className="font-display font-semibold text-2xl text-ink mb-4">Impact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {csrStats.map((s) => (
              <div key={s.value} className="rounded-lg border border-sand bg-white p-5">
                <p className="font-display text-2xl font-semibold text-ink">{s.value}</p>
                <p className="text-sm text-stone mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="marks" className="mx-auto max-w-6xl px-5 sm:px-8 pb-16 flex flex-wrap gap-2">
          {["CSCC Approved", "BSCI Certified", "ETI Aligned", "ILO Compliant", "Fairtrade"].map((m) => (
            <span key={m} className="rounded-lg bg-white border border-sand px-3 py-1.5 text-xs text-stone">
              {m}
            </span>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
