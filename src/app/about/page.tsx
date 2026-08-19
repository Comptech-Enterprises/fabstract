"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";

const TEAM = [
  {
    name: "Kavya Mehra",
    role: "Marketing Manager",
    bio: "Builds Fabstract’s brand story for global buyers — lookbooks, trade shows, and seasonal campaigns for knit and woven lines.",
  },
  {
    name: "Arjun Malhotra",
    role: "Production Manager",
    bio: "Runs the Noida floor from cutting to packing, keeping bulk programmes on the 60–90 day lead time buyers expect.",
  },
  {
    name: "Priya Sethi",
    role: "Merchandising Manager",
    bio: "Owns T&A calendars, tech packs, and buyer sampling so each order moves cleanly from proto to shipment.",
  },
  {
    name: "Rohan Kapoor",
    role: "Quality Control Manager",
    bio: "Leads five-stage garment inspection, fabric tests, and AQL checks before cartons leave the factory.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About"
          title="House, floor, and the people who run both"
          subtitle="Founded in 1991 and based in New Delhi & Noida, India, Fabstract has 30+ years of export experience, a team of 500+ skilled professionals, and serves 45+ global clients."
          fileIndex={7}
        />

        <section className="border-t border-ink/10 bg-white">
          <div className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 max-w-3xl">
            <p className="text-mute text-[11px] tracking-[0.3em] uppercase mb-4">The house</p>
            <h2 className="font-display text-4xl text-ink font-medium mb-6">From knitting to carton</h2>
            <p className="text-mute leading-relaxed">
              We are Fairtrade certified, ETI and ILO compliant, and run active CSR programmes focused on education, environment, and worker well-being. A government-recognised export house — design through packing under one roof.
            </p>
          </div>
        </section>

        <section className="px-6 sm:px-10 lg:px-14 py-20 border-t border-ink/10 bg-white">
          <p className="text-mute text-[11px] tracking-[0.3em] uppercase mb-4">People</p>
          <h2 className="font-display text-4xl text-ink font-medium mb-12">Management</h2>
          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {TEAM.map((person, i) => (
              <SectionReveal key={person.name} delay={i * 0.05}>
                <article className="grid md:grid-cols-12 gap-4 py-8">
                  <p className="md:col-span-3 text-crimson text-[11px] tracking-[0.18em] uppercase pt-1">
                    {person.role}
                  </p>
                  <h3 className="md:col-span-3 font-display text-2xl text-ink">{person.name}</h3>
                  <p className="md:col-span-6 text-mute text-sm leading-relaxed">{person.bio}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
