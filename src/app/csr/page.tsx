"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { StatGrid } from "@/components/StatGrid";

const TABS = [
  { href: "#people", label: "For People" },
  { href: "#planet", label: "For Planet" },
  { href: "#csr", label: "CSR" },
  { href: "#marks", label: "Our Marks" },
];

export default function CSRPage() {
  const people = [
    { value: "500+", label: "Skilled professionals across design, production, and quality." },
    { value: "60%+", label: "Female workforce with equal pay and maternity support." },
    { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
    { value: "85%+", label: "Retention — people stay because the floor is fair." },
  ];

  const planet = [
    { value: "BSCI", label: "Certified ethical manufacturing across the supply chain." },
    { value: "ETI", label: "Aligned with Ethical Trading Initiative base code." },
    { value: "ILO", label: "Compliant with International Labour Organization conventions." },
    { value: "GOTS", label: "Organic cotton sourcing where programmes call for it." },
  ];

  const csrAreas = [
    {
      title: "Education & Skilling",
      desc: "Promoting education, vocational skills, and livelihood enhancement — especially for children, women, elderly, and differently abled.",
    },
    {
      title: "Health & Sanitation",
      desc: "Eradicating hunger and malnutrition, promoting preventive healthcare and sanitation, contributing to Swachh Bharat Kosh.",
    },
    {
      title: "Gender Equality",
      desc: "Empowering women, setting up support facilities, and reducing inequalities faced by socially and economically backward groups.",
    },
    {
      title: "Environmental Sustainability",
      desc: "Committed to environmental compliance and sustainable manufacturing practices across all operations.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          eyebrow="Sustainability"
          title="Operating responsibly, for people and the planet"
          subtitle="Our CSR policy, developed under Section 135 of the Companies Act 2013, reflects a commitment to integrity, trust, and ethical practice aligned with ETI and ILO conventions. Fairtrade certified. Active programmes in education, environment, and worker well-being."
        />

        <div className="sticky top-20 md:top-24 z-40 bg-white/95 border-b border-navy/10 backdrop-blur-md">
          <nav className="px-5 sm:px-8 lg:px-12 flex gap-6 sm:gap-10 overflow-x-auto">
            {TABS.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="shrink-0 py-4 text-[11px] tracking-[0.22em] uppercase text-navy/60 hover:text-teal"
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>

        <section id="people" className="scroll-mt-32 py-20 lg:py-28 bg-beige">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionReveal>
              <p className="text-teal text-[11px] tracking-[0.28em] uppercase mb-3">Responsible for people</p>
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium leading-[1.05] max-w-3xl">
                Empowering employees and communities
              </h2>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">
                An open, ethical floor where workers feel safe, seen, heard, respected, and valued — living wages, training, and real career paths.
              </p>
            </SectionReveal>
            <StatGrid items={people} />
          </div>
        </section>

        <section id="planet" className="scroll-mt-32 py-20 lg:py-28 bg-sky/40">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionReveal>
              <p className="text-teal text-[11px] tracking-[0.28em] uppercase mb-3">Responsible for planet</p>
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium leading-[1.05] max-w-3xl">
                Championing environmental stewardship
              </h2>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">
                Sustainability — <span className="text-teal">वन से हम</span> — &quot;We exist because of forests.&quot; Miyawaki forests in Delhi/NCR, sponsored by Fabstract, led by Sustainability Head Mrs. Abha Batra.
              </p>
            </SectionReveal>
            <StatGrid items={planet} />
            <SectionReveal className="mt-16 max-w-3xl">
              <p className="text-navy/70 leading-relaxed">
                Native trees planted close together, competing for light, growing into a dense, self-sustaining forest within two years. More such programmes each month to fight heat and pollution.
              </p>
            </SectionReveal>
          </div>
        </section>

        <section id="csr" className="scroll-mt-32 py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionReveal>
              <p className="text-teal text-[11px] tracking-[0.28em] uppercase mb-3">Corporate social responsibility</p>
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium leading-[1.05] max-w-3xl">
                Building futures, one step beyond
              </h2>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">
                Impact beyond the carton — communities, education, health, and the supply chain we share with global buyers.
              </p>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 gap-px bg-navy/10 mt-16">
              {csrAreas.map((area) => (
                <div key={area.title} className="bg-white p-8 lg:p-12">
                  <h3 className="font-display text-2xl sm:text-3xl text-navy mb-4">{area.title}</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
            <SectionReveal className="mt-20 max-w-3xl">
              <h3 className="font-display text-3xl text-navy mb-6">Goals for the future</h3>
              <ul className="space-y-4">
                {[
                  "Establish consistent business throughout the year, prioritizing reliable, recurring orders over occasional ones.",
                  "Strengthen relationships with core customers, enabling better support, planning, and mutual growth.",
                  "Collaborate strategically on product development, quality improvements, and innovations that add value for all partners.",
                ].map((goal) => (
                  <li key={goal} className="text-navy/70 leading-relaxed border-l-2 border-teal pl-5">
                    {goal}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>

        <section id="marks" className="scroll-mt-32 py-20 lg:py-28 bg-sky/50 border-t border-navy/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <SectionReveal>
              <p className="text-teal text-[11px] tracking-[0.28em] uppercase mb-3">Our partners in progress</p>
              <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium leading-[1.05] max-w-3xl">
                Marks that hold the floor to account
              </h2>
              <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">
                Government-recognised export house. Fairtrade certified. CSCC approved.
              </p>
            </SectionReveal>
            <div className="mt-14 flex flex-wrap gap-3">
              {["CSCC Approved", "BSCI Certified", "ETI Aligned", "ILO Compliant", "Fairtrade"].map((m) => (
                <span
                  key={m}
                  className="border border-navy/15 px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-navy"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
