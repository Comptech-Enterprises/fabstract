"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/SectionReveal";
import { TextReveal } from "@/components/TextReveal";
import { EASE } from "@/lib/motion";

type Person = {
  name: string;
  role: string;
  bio: string;
};

const TEAM: Person[] = [
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

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("");
}

const FACTS = [
  { value: "1991", label: "Founded — a government-recognised export house since." },
  { value: "30+", label: "Years exporting knits and wovens to global buyers." },
  { value: "500+", label: "Skilled professionals across design, production, and quality." },
  { value: "45+", label: "Global clients served from New Delhi & Noida." },
];

const VALUES = [
  {
    title: "One roof",
    body: "Design, sampling, cutting, stitching, finishing, and packing sit in the same building — fewer handoffs, tighter control.",
  },
  {
    title: "Fair floor",
    body: "Fairtrade certified, ETI and ILO compliant. Equal pay, maternity support, and training built into the working week.",
  },
  {
    title: "Proof, not promises",
    body: "Five-stage inspection, fabric testing, and AQL checks documented on every programme before cartons ship.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 px-5 sm:px-8 bg-white border-b border-sand">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">About</p>
              <h1 className="mt-4 font-display font-bold text-ink text-4xl sm:text-6xl tracking-tight leading-[0.98]">
                House, floor, people.
              </h1>
              <p className="mt-6 max-w-lg text-stone text-base sm:text-lg leading-relaxed">
                Founded in 1991 and based in New Delhi &amp; Noida, India, Fabstract has 30+
                years of export experience, a team of 500+ skilled professionals, and serves
                45+ global clients.
              </p>
              <p className="mt-4 max-w-lg text-stone text-sm sm:text-base leading-relaxed">
                Design, sampling, cutting, stitching, finishing, and packing sit under one
                roof — fewer handoffs, tighter control, and a tech pack change that reaches
                the cutting table the same day.
              </p>
            </motion.div>
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden card p-0 bg-sand grid place-items-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="font-display text-sm uppercase tracking-[0.2em] text-taupe">Image placeholder</span>
            </motion.div>
          </div>
        </section>

        <section className="bg-ink border-b border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {FACTS.map((fact, i) => (
                <SectionReveal key={fact.value} delay={i * 0.06}>
                  <div className="border-t border-white/15 pt-5">
                    <p className="font-display text-3xl sm:text-4xl font-bold leading-none tracking-tight text-champagne">
                      {fact.value}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
                      {fact.label}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-white border-b border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
          <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <TextReveal
                as="h2"
                text="Management team"
                className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight"
              />
            </div>
            <p className="max-w-sm text-sm text-stone leading-relaxed">
              Four managers own the order end to end — brand, floor, calendar, and quality.
            </p>
          </SectionReveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {TEAM.map((person, i) => (
              <SectionReveal key={person.name} delay={i * 0.06}>
                <article className="card p-6 h-full">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-sand grid place-items-center">
                    <span className="font-display text-2xl font-bold text-taupe">{initials(person.name)}</span>
                  </div>
                  <p className="mt-5 font-display text-sm font-bold text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl text-ink tracking-tight">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-taupe">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm text-stone leading-relaxed">
                    {person.bio}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
          </div>
        </section>

        <section className="bg-[var(--offwhite)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
            <SectionReveal>
              <p className="font-script text-sm text-taupe uppercase tracking-[0.14em]">How we work</p>
            </SectionReveal>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {VALUES.map((value, i) => (
                <SectionReveal key={value.title} delay={i * 0.06}>
                  <div className="card p-6 h-full">
                    <span className="font-display text-sm font-bold text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display font-semibold text-xl text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm text-stone leading-relaxed">{value.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-champagne">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight max-w-lg">
              Want the capability deck or a sample programme?
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
