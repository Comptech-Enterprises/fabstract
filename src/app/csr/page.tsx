"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Still } from "@/components/Still";
import { SectionReveal } from "@/components/SectionReveal";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { BANNER_VIDEO } from "@/data/hero";
import { Parallax, ParallaxLayer } from "@/components/Parallax";
import { TypeReveal } from "@/components/TypeReveal";

function ReadMore({ more }: { more: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6">
      {open ? <p className="text-navy/70 leading-relaxed max-w-xl mb-4">{more}</p> : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-[11px] tracking-[0.22em] uppercase text-navy hover:text-teal"
      >
        {open ? "Read less" : "Read more"}
        <span className="ml-2">{open ? "↑" : "→"}</span>
      </button>
    </div>
  );
}

function Marginalia({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-sm text-teal">{n}</span>
      <span className="h-px flex-1 bg-navy/15" />
      <span className="text-[11px] tracking-[0.24em] uppercase text-navy/50">{title}</span>
    </div>
  );
}

export default function CSRPage() {
  const peopleStats = [
    { value: "500+", label: "Skilled professionals across design, production, and quality." },
    { value: "60%+", label: "Female workforce with equal pay and maternity support." },
    { value: "85%+", label: "Retention — people stay because the floor is fair." },
    { value: "100+", label: "Hours of annual training in modern garment manufacturing." },
  ];

  const planetStats = [
    { value: "BSCI", label: "Certified ethical manufacturing across the supply chain." },
    { value: "ETI", label: "Aligned with Ethical Trading Initiative base code." },
    { value: "ILO", label: "Compliant with International Labour Organization conventions." },
    { value: "GOTS", label: "Organic cotton sourcing where programmes call for it." },
  ];

  const marks = ["CSCC Approved", "BSCI Certified", "ETI Aligned", "ILO Compliant", "Fairtrade"];

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const navyOrbY = useTransform(heroProgress, [0, 1], [0, 120]);
  const navyOrbY2 = useTransform(heroProgress, [0, 1], [0, -80]);
  const quoteY = useTransform(heroProgress, [0, 1], [0, 90]);
  const quoteOpacity = useTransform(heroProgress, [0, 0.8], [1, 0.3]);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Banner — dimmed video background, quote overlaid, 80% of viewport */}
        <section
          ref={heroRef}
          className="relative h-[80vh] min-h-[560px] bg-navy overflow-hidden flex items-center px-5 sm:px-10 lg:px-14"
        >
          <ParallaxLayer speed={0.25} className="absolute inset-0">
            <video
              src={BANNER_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <div className="pointer-events-none absolute inset-0 bg-navy/70" />
          <motion.div
            style={{ y: navyOrbY }}
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border border-white/10"
          />
          <motion.div
            style={{ y: navyOrbY2 }}
            className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full border border-white/10"
          />
          <SectionReveal className="relative max-w-4xl mx-auto text-center">
            <motion.div style={{ y: quoteY, opacity: quoteOpacity }}>
              <span className="text-teal text-6xl sm:text-7xl font-display leading-none">&ldquo;</span>
              <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.3] -mt-6">
                <TypeReveal className="block w-full" duration={1.6}>
                  The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
                </TypeReveal>
              </blockquote>
              <p className="mt-8 text-[12px] tracking-[0.28em] uppercase text-sky">
                — Mahatma Gandhi
              </p>
            </motion.div>
          </SectionReveal>
        </section>

        {/* Statement */}
        <section className="mt-[10vh] px-5 sm:px-10 lg:px-14 pt-16 pb-14 md:pt-24 md:pb-20 max-w-5xl mx-auto">
          <SectionReveal>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-navy font-medium leading-[1.15] max-w-4xl">
              <TypeReveal className="block w-full" duration={1.2}>
                We carry that idea onto our production floor — nothing borrowed is ours to waste.
              </TypeReveal>
            </h1>
            <p className="mt-8 text-navy/70 leading-relaxed max-w-2xl text-lg">
              Sustainability, for us, is an exercise in both social and environmental well-being. It goes beyond
              simply doing good — it is a commitment to people, the planet, and responsible manufacturing under
              our CSR policy per Section 135 of the Companies Act 2013, held to ETI and ILO practice, and Fairtrade
              certified.
            </p>
          </SectionReveal>
        </section>

        {/* 01 — People */}
        <section className="border-t border-navy/10 bg-white px-5 sm:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <Marginalia n="01" title="For People" />
            </SectionReveal>
            <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <SectionReveal className="lg:col-span-7">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.15]">
                  <TypeReveal className="block w-full" duration={1}>
                    An open, ethical floor where people are seen, heard, and paid fairly.
                  </TypeReveal>
                </h2>
                <p className="mt-6 text-navy/70 leading-relaxed max-w-xl">
                  Living wages, real training, and career paths that go somewhere — not just compliance on paper.
                </p>
                <ReadMore more="Every worker on the floor is entitled to living wages, structured training, and a documented path to advance. We measure ourselves by whether people stay, not just whether they're hired." />
              </SectionReveal>
              <SectionReveal delay={0.1} className="lg:col-span-5">
                <Parallax offset={36} className="aspect-[4/5]">
                  <Still
                    src={gallerySrc(GALLERY_FILES[1])}
                    alt="People on the Fabstract floor"
                    className="h-[calc(100%+72px)] -mt-9"
                  />
                </Parallax>
              </SectionReveal>
            </div>
            <SectionReveal delay={0.15} className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {peopleStats.map((s) => (
                <div key={s.value}>
                  <p className="font-display text-4xl sm:text-5xl text-navy font-medium leading-none">{s.value}</p>
                  <p className="mt-3 text-navy/55 text-xs leading-relaxed uppercase tracking-wide max-w-[16ch]">
                    {s.label}
                  </p>
                </div>
              ))}
            </SectionReveal>
          </div>
        </section>

        {/* 02 — Planet */}
        <section className="border-t border-navy/10 bg-navy text-white px-5 sm:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-sky">02</span>
                <span className="h-px flex-1 bg-white/15" />
                <span className="text-[11px] tracking-[0.24em] uppercase text-white/50">For Planet</span>
              </div>
            </SectionReveal>
            <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <SectionReveal delay={0.1} className="lg:col-span-5 lg:order-2">
                <Parallax offset={36} className="aspect-[4/5]">
                  <Still
                    src="/van.png"
                    alt="Fabstract delivery van"
                    className="h-[calc(100%+72px)] -mt-9"
                  />
                </Parallax>
              </SectionReveal>
              <SectionReveal className="lg:col-span-7 lg:order-1">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.15]">
                  <TypeReveal className="block w-full" duration={1}>
                    <span className="text-teal">वन से हम</span> — we exist because of forests.
                  </TypeReveal>
                </h2>
                <p className="mt-6 text-white/70 leading-relaxed max-w-xl">
                  Miyawaki forests across Delhi/NCR, sponsored by Fabstract and led by our Sustainability Head,
                  Mrs. Abha Batra — native species planted dense, growing into a self-sustaining forest within two years.
                </p>
                <div className="mt-6">
                  <p className="text-white/65 leading-relaxed max-w-xl text-sm">
                    New plantations added each month to push back against heat and pollution in the region we build in.
                  </p>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal delay={0.15} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {planetStats.map((s) => (
                <div key={s.value} className="border border-white/15 px-6 py-7">
                  <p className="font-display text-2xl sm:text-3xl text-white font-medium">{s.value}</p>
                  <p className="mt-2 text-white/55 text-xs leading-relaxed">{s.label}</p>
                </div>
              ))}
            </SectionReveal>
          </div>
        </section>

        {/* 03 — CSR */}
        <section className="border-t border-navy/10 bg-white px-5 sm:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <Marginalia n="03" title="CSR" />
            </SectionReveal>
            <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <SectionReveal className="lg:col-span-7">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.15]">
                  <TypeReveal className="block w-full" duration={0.8}>
                    Impact beyond the carton.
                  </TypeReveal>
                </h2>
                <p className="mt-6 text-navy/70 leading-relaxed max-w-xl">
                  Education and skilling, health and sanitation, gender equality, and environmental sustainability —
                  including Swachh Bharat contributions and support for children, women, the elderly, and the
                  differently abled.
                </p>
                <ReadMore more="Five active programmes span the communities we share with global buyers — from classroom sponsorships to worker health camps. Our CSR policy sits under Section 135 of the Companies Act 2013 and reports the same way our production does: transparently, every year." />
              </SectionReveal>
              <SectionReveal delay={0.1} className="lg:col-span-5">
                <Parallax offset={36} className="aspect-[4/5]">
                  <Still
                    src={gallerySrc(GALLERY_FILES[2])}
                    alt="Hands at work, Fabstract floor"
                    className="h-[calc(100%+72px)] -mt-9"
                  />
                </Parallax>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* 04 — Marks */}
        <section className="border-t border-navy/10 bg-white px-5 sm:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <Marginalia n="04" title="Our Marks" />
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="mt-10 font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium leading-[1.15] max-w-2xl">
                <TypeReveal className="block w-full" duration={0.8}>
                  Partners in progress.
                </TypeReveal>
              </h2>
              <p className="mt-6 text-navy/70 leading-relaxed max-w-xl">
                Government-recognised export house. Fairtrade certified. CSCC approved.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.15} className="mt-12 flex flex-wrap gap-3">
              {marks.map((m) => (
                <span
                  key={m}
                  className="border border-navy/15 bg-white px-5 py-3 text-[11px] tracking-[0.18em] uppercase text-navy"
                >
                  {m}
                </span>
              ))}
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
