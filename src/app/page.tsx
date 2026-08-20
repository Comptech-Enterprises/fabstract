"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroVideos } from "@/components/HeroVideos";
import { SectionReveal } from "@/components/SectionReveal";
import { EASE } from "@/lib/motion";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const field =
  "w-full rounded-lg border border-sand bg-white px-3 py-2.5 text-sm text-stone placeholder:text-taupe focus:outline-none focus:border-ink";

function Hero() {
  const stats = [
    { n: "30+", l: "Years" },
    { n: "100K+", l: "Units / month" },
    { n: "45+", l: "Clients" },
    { n: "500+", l: "People" },
  ];

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink flex flex-col justify-center">
      <div className="absolute inset-0">
        <HeroVideos />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/80" />
      <div className="relative z-10 w-full mx-auto max-w-6xl px-5 sm:px-8 flex flex-col justify-center pt-20 sm:pt-24 pb-8 sm:pb-12">
        <motion.p
          className="text-sand text-xs sm:text-sm uppercase tracking-[0.28em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Export house · Noida · Since 1991
        </motion.p>
        <motion.h1
          className="mt-3 font-display font-semibold text-cream text-4xl sm:text-7xl lg:text-8xl tracking-tight max-w-3xl leading-[0.95]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Ethical knitwear and wovens for global brands.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-lg text-cream/80 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Vertically integrated from knitting to carton — USA, Canada, and Europe.
        </motion.p>
        <motion.a
          href="/gallery"
          className="mt-6 text-cream text-sm border-b border-cream/50 pb-0.5 hover:border-cream w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          View gallery
        </motion.a>
        <motion.div
          className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
        >
          {stats.map((s) => (
            <div key={s.l} className="rounded-lg bg-ink/50 backdrop-blur-sm px-4 py-4 sm:py-5">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-cream">{s.n}</p>
              <p className="text-xs sm:text-sm text-cream/65 mt-1">{s.l}</p>
            </div>
          ))}
        </motion.div>
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
    <section id="capabilities" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <p className="text-xs uppercase tracking-wider text-taupe">Capabilities</p>
        <h2 className="mt-2 font-display font-semibold text-3xl text-ink">From knitting to carton.</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {cells.map((item, i) => (
            <SectionReveal key={item.value} delay={i * 0.05}>
              <article className="rounded-lg border border-sand bg-white p-6 h-full">
                <p className="font-display text-3xl font-semibold text-ink">{item.value}</p>
                <p className="mt-3 text-sm text-stone leading-relaxed">{item.label}</p>
              </article>
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
    <section id="global-presence" className="bg-white border-y border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-taupe">Network</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink mt-3">Where we ship</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {regions.map((reg) => (
              <button
                key={reg.name}
                onClick={() => setActiveRegion(reg.name)}
                className={`rounded-lg px-4 py-2 text-base ${
                  activeRegion === reg.name ? "bg-ink text-cream" : "bg-cream text-taupe"
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>
          <p className="mt-8 text-base sm:text-lg text-stone leading-relaxed">{current.desc}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {current.shipments.map((s) => (
              <li key={s.product} className="rounded-lg bg-cream px-3 py-1.5 text-sm text-stone">
                {s.product}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-square w-full max-w-xl mx-auto lg:max-w-none">
          <Globe />
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
  const [i, setI] = useState(0);
  const current = faqs[i];

  return (
    <section className="bg-cream text-ink border-y border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[minmax(0,0.9fr)_1.1fr] gap-10 lg:gap-16 items-stretch">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-taupe">FAQ</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-5xl leading-tight text-ink">
            Pick a question.
          </h2>
          <p className="mt-4 text-stone text-sm">Answer swaps on the right. Use the list or arrows.</p>
          <ul className="mt-8 space-y-1">
            {faqs.map((faq, idx) => (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setI(idx)}
                  className={`w-full text-left rounded-lg px-3 py-3 transition-colors ${
                    i === idx ? "bg-white text-ink border border-sand" : "text-taupe hover:text-ink hover:bg-white/70"
                  }`}
                >
                  {faq.q}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex h-[26rem] sm:h-[28rem] flex-col rounded-2xl bg-white border border-sand text-ink p-7 sm:p-10">
          <div className="relative min-h-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.q}
                className="absolute inset-0 overflow-y-auto pr-1"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">
                  {String(i + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display font-semibold text-2xl sm:text-4xl leading-tight">{current.q}</h3>
                <p className="mt-6 text-stone text-base sm:text-lg leading-relaxed">{current.a}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 shrink-0 flex items-center justify-between">
            <div className="flex gap-2">
              {faqs.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Question ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-ink" : "w-3 bg-sand hover:bg-taupe"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous question"
                onClick={() => setI((n) => (n + faqs.length - 1) % faqs.length)}
                className="w-11 h-11 rounded-full border border-sand text-ink hover:bg-sand"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next question"
                onClick={() => setI((n) => (n + 1) % faqs.length)}
                className="w-11 h-11 rounded-full border border-sand text-ink hover:bg-sand"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-cream border-t border-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-taupe">Enquire</p>
          <h2 className="mt-3 font-display font-semibold text-4xl sm:text-6xl text-ink leading-tight">
            Request a quote
          </h2>
          <p className="mt-6 max-w-md text-stone text-base sm:text-lg leading-relaxed">
            Tell us the category, quantity, and timeline. The team replies within 24 hours with a quote.
          </p>
          <dl className="mt-10 space-y-6 text-sm sm:text-base">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-taupe">New Delhi</dt>
              <dd className="mt-1 text-ink">M-169, Greater Kailash-II</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-taupe">Noida</dt>
              <dd className="mt-1 text-ink">C-57, Hosiery Complex</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-taupe">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+911140524038" className="text-ink hover:text-taupe">
                  +91-11-4052 4038
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-white border border-sand p-6 sm:p-8 space-y-4 shadow-[0_20px_50px_-24px_rgba(31,29,32,0.25)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="grid grid-cols-2 gap-3">
            <input required placeholder="First name *" className={field} />
            <input placeholder="Last name" className={field} />
            <input type="email" required placeholder="Email *" className={field} />
            <input type="tel" required placeholder="Phone *" className={field} />
          </div>
          <input placeholder="Company" className={field} />
          <select required className={field}>
            <option value="">Category *</option>
            <option value="woven">Woven Apparel</option>
            <option value="knitted">Knitted Apparel</option>
            <option value="home-textiles">Home Textiles &amp; Accessories</option>
            <option value="multiple">Multiple Categories</option>
          </select>
          <textarea rows={4} placeholder="Message" className={field} />
          <button type="submit" className="btn-crimson">
            Send enquiry
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
