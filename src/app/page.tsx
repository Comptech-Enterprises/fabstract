"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { TextReveal } from "@/components/TextReveal";
import { Footer } from "@/components/footer";
import { HeroVideos } from "@/components/HeroVideos";
import { SectionReveal } from "@/components/SectionReveal";
import { EASE } from "@/lib/motion";

function Hero() {
  const stats = [
    { n: "30+", l: "Years" },
    { n: "100K+", l: "Units / month" },
    { n: "45+", l: "Clients" },
    { n: "500+", l: "People" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.2 }}>
        <HeroVideos />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="relative z-10 w-full px-5 sm:px-8 pt-28 sm:pt-0 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            className="text-white/70 text-xs sm:text-sm uppercase tracking-[0.28em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Export house · Noida · Since 1991
          </motion.p>
          <motion.h1
            className="mt-4 font-display font-semibold text-white text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Ethical knitwear and wovens for global brands.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-md mx-auto text-white/80 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Vertically integrated from knitting to carton — USA, Canada, and Europe.
          </motion.p>
          <motion.a
            href="/gallery"
            className="mt-7 inline-block text-white text-xs uppercase tracking-[0.2em] border-b border-champagne pb-1 hover:opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            View gallery →
          </motion.a>
          <motion.div
            className="mt-10 lg:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
          >
            {stats.map((s) => (
              <div key={s.l} className="rounded-lg border border-white/15 bg-white/[0.06] p-4">
                <p className="font-display text-xl sm:text-2xl font-semibold text-champagne">{s.n}</p>
                <p className="text-[11px] sm:text-xs text-white/60 mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const cells = [
    { value: "100K+", label: "Units per month — knitting to carton, vertically integrated." },
    { value: "60–90", label: "Day lead times with five-stage garment QA." },
    { value: "BSCI", label: "Certified. ETI and ILO aligned across the chain." },
    { value: "30+", label: "Years as a government-recognised export house." },
  ];

  return (
    <section id="capabilities" className="bg-[var(--offwhite)] border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="font-script text-sm text-taupe uppercase tracking-[0.14em]">Capabilities</p>
          <TextReveal
            as="h2"
            text="From knitting to carton."
            className="mt-2 font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight"
          />
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cells.map((item, i) => (
            <SectionReveal key={item.value} delay={i * 0.05}>
              <div className="card p-5 h-full">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-champagne">{item.value}</p>
                <p className="mt-3 text-xs sm:text-sm text-stone leading-relaxed">{item.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  const [activeRegion, setActiveRegion] = useState("USA & Canada");
  const regions = [
    {
      name: "USA & Canada",
      desc: "Long-standing manufacturing partner for major North American fashion retailers, surfwear icons, and contemporary department stores.",
      shipments: [{ product: "Knitwear" }, { product: "Woven Apparel" }, { product: "Home Textiles" }],
    },
    {
      name: "UK & Europe",
      desc: "Delivering trend-setting high-fashion wovens and eco-certified organic knits to leading European fashion houses across France, Italy, Sweden & UK.",
      shipments: [{ product: "Woven Apparel" }, { product: "Knitwear" }, { product: "Embroidered Pieces" }],
    },
    {
      name: "Australia & NZ",
      desc: "Providing high-performance ocean & beachwear, casual knits, and sustainable lifestyle apparel for top Australian and New Zealand brands.",
      shipments: [{ product: "Swimwear & Beachwear" }, { product: "Casual Knitwear" }, { product: "Organic Basics" }],
    },
  ];
  const current = regions.find((r) => r.name === activeRegion) || regions[0];

  return (
    <section id="global-presence" className="bg-white border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <p className="font-script text-lg text-taupe">Network</p>
          <TextReveal as="h2" text="Where we ship" className="font-display font-semibold text-4xl sm:text-5xl text-ink mt-3 tracking-tight" />
          <div className="mt-8 flex flex-wrap gap-3">
            {regions.map((reg) => (
              <button
                key={reg.name}
                onClick={() => setActiveRegion(reg.name)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                  activeRegion === reg.name
                    ? "bg-champagne text-white"
                    : "border border-sand text-taupe hover:text-ink hover:border-taupe"
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>
          <p className="mt-8 text-base sm:text-lg text-stone leading-relaxed">{current.desc}</p>
        </div>
        <div className="card p-8 sm:p-10 w-full max-w-xl mx-auto lg:max-w-none">
          <p className="font-script text-sm text-taupe uppercase tracking-[0.14em]">Shipping to</p>
          <h3 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            {current.name}
          </h3>
          <ul className="mt-8 space-y-5">
            {current.shipments.map((s, i) => (
              <li key={s.product} className="flex items-center gap-4 border-t border-sand pt-5 first:border-t-0 first:pt-0">
                <span className="font-display text-lg font-bold text-champagne">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base text-ink">{s.product}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What does Fabstract do?",
      a: "Fabstract Clothing India is a government-recognised garment export house. We design, manufacture, and export high-fashion knitwear, woven apparel, and home textiles to global brands in USA, Canada, UK, Europe, Australia, and New Zealand — fully vertically integrated from knitting to final packing.",
    },
    {
      q: "What is our main goal?",
      a: "To be the most trusted, ethical, and reliable manufacturing partner for global fashion brands. We combine quality craftsmanship with Fairtrade and ETI-compliant practices — delivering consistent garments while investing in our workers, communities, and the environment.",
    },
    {
      q: "How do I place an order?",
      a: "Send us your product category, estimated quantity, and delivery timeline using the enquiry form or WhatsApp. Our team responds within 24 hours with a quote. Once confirmed, standard lead time is 60–90 days with full updates throughout production.",
    },
    {
      q: "About Fabstract",
      a: "Founded in 1991 and based in New Delhi & Noida, India, Fabstract has 30+ years of export experience, a team of 500+ skilled professionals, and serves 45+ global clients. We are Fairtrade certified, ETI and ILO compliant, and run active CSR programmes focused on education, environment, and worker well-being.",
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section className="text-ink bg-[var(--offwhite)] border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <SectionReveal>
          <p className="font-script text-sm text-taupe uppercase tracking-[0.14em]">FAQ</p>
          <TextReveal
            as="h2"
            text="Questions, answered."
            className="mt-3 font-display font-semibold text-4xl sm:text-5xl leading-tight text-ink"
          />
          <p className="mt-4 text-sm text-stone leading-relaxed">
            Still unsure — send us an enquiry.
          </p>
        </SectionReveal>

        <div className="mt-10 border-t border-sand">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={faq.q} className="border-b border-sand">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-bold text-champagne w-6 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg sm:text-xl tracking-tight text-ink">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="shrink-0 text-xl text-champagne"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pl-10 pb-5 text-sm sm:text-base text-stone leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const darkField =
  "w-full bg-white/5 border border-white/15 rounded-lg pl-11 pr-4 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/30 transition-colors";

function FieldIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-champagne">Enquire</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-6xl text-white leading-tight">
            Request a quote
          </h2>
          <p className="mt-6 max-w-md text-white/60 text-base sm:text-lg leading-relaxed">
            Tell us the category, quantity, and timeline. The team replies within 24 hours with a quote.
          </p>
          <dl className="mt-10 space-y-6 text-sm sm:text-base">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-white/40">New Delhi</dt>
              <dd className="mt-1 text-white">M-169, Greater Kailash-II</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-white/40">Noida</dt>
              <dd className="mt-1 text-white">C-57, Hosiery Complex</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-white/40">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+911140524038" className="text-white hover:text-champagne transition-colors">
                  +91-11-4052 4038
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 rounded-2xl p-6 sm:p-10 bg-white/[0.04] border border-white/10 shadow-[0_0_60px_-15px_rgba(37,99,235,0.35)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FieldIcon d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" />
              <input required placeholder="First name *" className={darkField} />
            </div>
            <div className="relative">
              <FieldIcon d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" />
              <input placeholder="Last name" className={darkField} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FieldIcon d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
              <input type="email" required placeholder="Email *" className={darkField} />
            </div>
            <div className="relative">
              <FieldIcon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.79.65 2.65a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.43-1.22a2 2 0 012.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0122 16.92z" />
              <input type="tel" required placeholder="Phone *" className={darkField} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FieldIcon d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              <input placeholder="Company" className={darkField} />
            </div>
            <div className="relative">
              <FieldIcon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              <select required defaultValue="" className={`${darkField} appearance-none`}>
                <option value="" disabled className="text-ink">Category *</option>
                <option value="woven" className="text-ink">Woven Apparel</option>
                <option value="knitted" className="text-ink">Knitted Apparel</option>
                <option value="home-textiles" className="text-ink">Home Textiles &amp; Accessories</option>
                <option value="multiple" className="text-ink">Multiple Categories</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <svg viewBox="0 0 24 24" className="absolute left-3.5 top-4 w-4 h-4 text-white/40 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <textarea rows={4} placeholder="Message" className={`${darkField} pt-3 resize-none`} />
          </div>
          <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-champagne text-white px-6 py-3 text-sm font-medium hover:bg-accent2 transition-colors">
            Send enquiry →
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <GlobalPresence />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
