"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";

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
      <main className="bg-cream">
        <PageIntro
          eyebrow="About"
          title="House, floor, people."
          subtitle="Founded in 1991 and based in New Delhi & Noida, India, Fabstract has 30+ years of export experience, a team of 500+ skilled professionals, and serves 45+ global clients."
        />
        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <p className="max-w-2xl text-stone text-sm leading-relaxed mb-10">
            Fairtrade certified, ETI and ILO compliant, CSR on education, environment, and worker well-being. Government-recognised export house — design through packing under one roof.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {TEAM.map((person) => (
              <article key={person.name} className="rounded-lg border border-sand bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-taupe">{person.role}</p>
                <h3 className="mt-2 font-display font-semibold text-xl text-ink">{person.name}</h3>
                <p className="mt-3 text-sm text-stone leading-relaxed">{person.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
