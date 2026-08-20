"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { Still } from "@/components/Still";

type Person = {
  name: string;
  role: string;
  bio: string;
  /** Drop a real portrait path here (e.g. "/team/kavya.jpg") to replace the placeholder. */
  image?: string;
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

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function Portrait({ person }: { person: Person }) {
  if (person.image) {
    return (
      <Still
        src={person.image}
        alt={person.name}
        className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-full"
      />
    );
  }

  return (
    <div
      className="relative flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-full border border-sand bg-cream"
      role="img"
      aria-label={`${person.name} — portrait placeholder`}
      title="Portrait placeholder"
    >
      <span className="font-display text-xl font-semibold tracking-wide text-taupe">
        {initials(person.name)}
      </span>
    </div>
  );
}

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

        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <SectionReveal className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                A garment house, not a middleman.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-stone text-sm sm:text-base leading-relaxed">
              <p>
                Fabstract is a Delhi/NCR export house making knit and woven garments for
                buyers across Europe, North America, and Asia. Every stage — design through
                packing — happens under one roof, so a change on the tech pack reaches the
                cutting table the same day.
              </p>
              <p>
                Fairtrade certified, ETI and ILO compliant, with CSR programmes covering
                education, environment, and worker well-being. Bulk programmes ship on the
                60–90 day lead time buyers plan around.
              </p>
            </div>
          </SectionReveal>
        </section>

        <section className="border-y border-sand bg-white">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {FACTS.map((fact, i) => (
                <SectionReveal key={fact.value} delay={i * 0.06}>
                  <p className="font-display text-4xl sm:text-5xl font-medium leading-none tracking-tight text-ink">
                    {fact.value}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-taupe leading-relaxed">
                    {fact.label}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
          <SectionReveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                Management team
              </h2>
            </div>
            <p className="max-w-sm text-sm text-stone leading-relaxed">
              Four managers own the order end to end — brand, floor, calendar, and quality.
            </p>
          </SectionReveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-12">
            {TEAM.map((person, i) => (
              <SectionReveal key={person.name} delay={i * 0.06}>
                <article className="flex gap-5 sm:gap-6 border-t border-sand py-7 sm:py-9">
                  <Portrait person={person} />
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-ink">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-taupe">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm text-stone leading-relaxed">{person.bio}</p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-t border-sand">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
            <SectionReveal>
              <p className="font-script text-lg text-taupe">How we work</p>
            </SectionReveal>
            <div className="mt-8 grid sm:grid-cols-3 gap-x-10 gap-y-10">
              {VALUES.map((value, i) => (
                <SectionReveal key={value.title} delay={i * 0.06}>
                  <div className="border-t border-sand pt-5">
                    <h3 className="font-display font-semibold text-xl text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm text-stone leading-relaxed">{value.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-sand bg-white">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight max-w-lg">
              Want the capability deck or a sample programme?
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
