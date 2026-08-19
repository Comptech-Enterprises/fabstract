"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";

export default function CSRPage() {
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
        <PageHero
          eyebrow="Corporate Social Responsibility"
          title="Operating Responsibly, Always"
          subtitle="Our CSR policy, developed under Section 135 of the Companies Act 2013, reflects our commitment to integrity, trust, and ethical business practices aligned with ETI and ILO conventions."
          fileIndex={3}
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-mute text-[11px] tracking-[0.3em] uppercase mb-4">Focus Areas</p>
              <h2 className="font-display text-4xl text-ink font-medium mb-12">
                Where We Make a Difference
              </h2>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 gap-px bg-crimson/15">
              {csrAreas.map((area, i) => (
                <SectionReveal key={area.title} delay={i * 0.08}>
                  <div className="bg-white p-8 h-full">
                    <h3 className="text-ink font-medium mb-3">{area.title}</h3>
                    <p className="text-mute text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-mute text-[11px] tracking-[0.3em] uppercase mb-4">Initiatives in Action</p>
              <h2 className="font-display text-4xl text-ink font-medium mb-16">
                Stories from the Ground
              </h2>
            </SectionReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <SectionReveal>
                <span className="inline-block bg-crimson/10 text-mute text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  Green Initiative
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-ink font-medium mb-2">
                  Sustainability — <span className="text-crimson">वन से हम</span>
                </h3>
                <p className="text-mute text-sm italic mb-6">&quot;We exist because of forests&quot;</p>
                <div className="space-y-4 text-mute leading-relaxed">
                  <p>
                    Van Se Hum is a project very close to our hearts. With temperatures soaring above 53°C, our Sustainability Head Mrs. Abha Batra felt a renewed urgency to act.
                  </p>
                  <p>
                    We&apos;ve embraced the <strong className="text-ink font-semibold">Miyawaki method</strong> — native trees planted in close proximity, competing for sunlight, growing rapidly into a dense, self-sustaining forest within just two years.
                  </p>
                  <p>
                    All expenses for this project are sponsored by Fabstract Clothing India. We are committed to launching many more such initiatives every month to combat global warming and severe pollution in Delhi/NCR.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div>
                  <p className="text-ink font-semibold text-sm">Sustainability Head</p>
                  <p className="text-mute text-sm">Mrs. Abha Batra</p>
                </div>
              </SectionReveal>
            </div>

            <div className="max-w-3xl">
              <SectionReveal delay={0.1}>
                <span className="inline-block bg-crimson/10 text-mute text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  Our People
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-ink font-medium mb-6">
                  Goals for the Future
                </h3>
                <p className="text-mute leading-relaxed mb-6">
                  Our future goals are focused on building stronger, long-term partnerships and sustainable growth — for our workers, our planet, and our partners.
                </p>
                <ul className="space-y-4">
                  {[
                    "Establish consistent business throughout the year, prioritizing reliable, recurring orders over occasional ones.",
                    "Strengthen relationships with core customers, enabling better support, planning, and mutual growth.",
                    "Collaborate strategically on product development, quality improvements, and innovations that add value for all partners.",
                  ].map((goal) => (
                    <li key={goal} className="flex items-start gap-3 text-mute text-sm leading-relaxed">
                      <span className="text-mute font-bold mt-0.5">✓</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
