"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CSRPage() {
  const initiatives = [
    {
      title: "Worker Welfare & Fair Living Wages",
      tag: "25% Above Minimum Wage",
      desc: "Guaranteeing living wages that exceed minimum government standards by 25%. We transparently distribute Fairtrade premiums directly to worker welfare funds, supporting staff and their families.",
      bullets: ["Living wages 25% above minimums", "Fairtrade Premium distribution", "Direct financial literacy programs"],
    },
    {
      title: "Women Empowerment & Mobility",
      tag: "60%+ Female Workforce",
      desc: "Empowering female factory staff through tailored technical training programs, pattern-making academies, and structured promotion paths into supervisory and leadership roles.",
      bullets: ["Technical training & skill programs", "Equal pay & maternity support", "Upward mobility into leadership"],
    },
    {
      title: "Healthcare, Housing & Appliance Support",
      tag: "Comprehensive Welfare",
      desc: "Providing family support through free on-site doctor consultations, subsidized housing allowances, and employee grants for purchasing essential household appliances.",
      bullets: ["Free health checkups & consultations", "Subsidized housing support", "Household appliance assistance"],
    },
    {
      title: "Tree Plantation & Nature Walks",
      tag: "Green Initiatives",
      desc: "Fostering environmental stewardship with annual tree plantation drives across NCR, alongside guided nature walks for staff and their families to build ecological awareness.",
      bullets: ["Annual tree plantation drives", "Guided nature walk programs", "Zero single-use plastic policy"],
    },
    {
      title: "Fashion Revolution Participation",
      tag: "#WhoMadeMyClothes",
      desc: "Proud participants in global supply chain transparency initiatives. We champion open factory doors, fair labor standards, and consumer awareness under Fashion Revolution's banner.",
      bullets: ["Supply chain transparency", "Worker story showcases", "Ethical manufacturing advocacy"],
    },
  ];

  const pillars = [
    {
      title: "Employer Branding & Work Environment",
      desc: "A progressive, inclusive factory culture where every worker feels valued, respected, and empowered to excel in their craft.",
      stats: "85%+ Retention Rate",
    },
    {
      title: "Skill Development & Advancement",
      desc: "Continuous cross-training in modern sewing technology, pattern-making, quality management, and supervisory skills.",
      stats: "100+ Hours Annual Training",
    },
    {
      title: "Health, Sanitation & Well-being",
      desc: "Clean RO drinking water stations, ergonomic seating, well-ventilated production bays, and female hygiene support.",
      stats: "Zero Safety Violations",
    },
    {
      title: "Team Culture & Factory Environment",
      desc: "Celebrating national festivals, hosting sports tournaments, recognizing top performers, and maintaining high team spirit.",
      stats: "Annual Recognition Events",
    },
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
      <main className="pt-16">
        {/* Hero / Intro */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">
              Corporate Social Responsibility
            </p>
            <h1 className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl">
              Operating Responsibly, Always
            </h1>
            <p className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed">
              Our CSR policy, developed under Section 135 of the Companies Act 2013,
              reflects our commitment to integrity, trust, and ethical business
              practices aligned with ETI and ILO conventions.
            </p>
          </div>
        </section>

        {/* CSR Focus Areas */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Focus Areas</p>
            <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
              Where We Make a Difference
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {csrAreas.map((area) => (
                <div key={area.title} className="bg-bone/40 p-8 rounded-2xl">
                  <h3 className="text-olive-dark font-semibold mb-3">{area.title}</h3>
                  <p className="text-smoky-black/60 text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-bone border border-smoky-black/5">
              <h3 className="text-smoky-black font-semibold mb-4">Compliance Standards</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {[
                  "Anti-Bribery & Corruption",
                  "Labour Rights",
                  "Freedom of Association",
                  "Working Conditions",
                  "No Child Labour",
                  "Living Wages",
                  "Fair Working Hours",
                  "Non-Discrimination",
                  "Regular Employment",
                  "Humane Treatment",
                  "Immigration Rights",
                  "Environmental Compliance",
                ].map((item) => (
                  <p key={item} className="text-smoky-black/60 text-sm flex items-center gap-2 py-1">
                    <span className="text-olive-drab">&#10003;</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community & People */}
        <section className="py-24 bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Impact</p>
            <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-6 max-w-2xl">
              Community &amp; People
            </h2>
            <p className="text-smoky-black/60 max-w-2xl mb-16">
              People are at the heart of Fabstract. We invest in worker welfare, women empowerment, family health, and environmental stewardship across all operations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((item) => (
                <div
                  key={item.title}
                  className="bg-floral-white rounded-3xl p-8 border border-smoky-black/5 hover:border-olive-drab/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="inline-block bg-olive-drab/10 text-olive-drab text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {item.tag}
                    </span>
                    <h3 className="text-smoky-black font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-smoky-black/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="border-t border-smoky-black/5 pt-4">
                    <ul className="space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="text-xs text-smoky-black/70 flex items-center gap-2">
                          <span className="text-olive-drab font-bold">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Fabstract */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Work Culture</p>
            <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-6 max-w-2xl">
              Life at Fabstract
            </h2>
            <p className="text-smoky-black/60 max-w-2xl mb-16">
              A modern, safe, and supportive workplace designed for career advancement, worker health, and collective pride in world-class manufacturing.
            </p>

            {/* Culture Highlight Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-bone/40 rounded-3xl p-8 border border-bone hover:border-olive-drab/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-smoky-black font-bold text-lg mb-3">{pillar.title}</h3>
                    <p className="text-smoky-black/60 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-smoky-black/5">
                    <span className="text-xs font-bold text-olive-drab uppercase tracking-wider">
                      {pillar.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Factory Environment Showcase Bar */}
            <div className="bg-bone rounded-3xl p-8 sm:p-12 border border-smoky-black/5 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                  <p className="text-4xl font-bold text-olive-drab mb-2">100%</p>
                  <p className="text-smoky-black font-semibold text-base mb-1">Safety Compliance</p>
                  <p className="text-smoky-black/50 text-xs">Strict adherence to BSCI, CSCC &amp; ETI codes</p>
                </div>
                <div className="p-4 border-y md:border-y-0 md:border-x border-smoky-black/10">
                  <p className="text-4xl font-bold text-olive-drab mb-2">60%+</p>
                  <p className="text-smoky-black font-semibold text-base mb-1">Female Workforce</p>
                  <p className="text-smoky-black/50 text-xs">Equal opportunities &amp; upward leadership mobility</p>
                </div>
                <div className="p-4">
                  <p className="text-4xl font-bold text-olive-drab mb-2">25%+</p>
                  <p className="text-smoky-black font-semibold text-base mb-1">Above Minimum Wage</p>
                  <p className="text-smoky-black/50 text-xs">Fair living wages and direct Fairtrade distribution</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
