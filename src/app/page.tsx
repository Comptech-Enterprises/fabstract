"use client";

import React, { useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/SectionReveal";
import { StatGrid } from "@/components/StatGrid";
import { BANNER_VIDEO } from "@/data/hero";
import { ParallaxLayer } from "@/components/Parallax";
import { TypeReveal } from "@/components/TypeReveal";
import { IntroAnimation } from "@/components/IntroAnimation";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const field =
  "w-full bg-transparent border-0 border-b border-white/25 rounded-none px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-sky";


function VideoBanner({ introComplete }: { introComplete: boolean }) {
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
            {introComplete ? (
              <TypeReveal className="block w-full" duration={1.6}>
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </TypeReveal>
            ) : (
              <span className="block w-full opacity-0">
                The earth, the air, the land and the water are not an inheritance from our forefathers but on loan from our children.
              </span>
            )}
          </blockquote>
          <p className="mt-8 text-[12px] tracking-[0.28em] uppercase text-sky">
            — Mahatma Gandhi
          </p>
        </motion.div>
      </SectionReveal>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-white">
      <div className="px-6 sm:px-10 lg:px-14 py-16 lg:py-28 max-w-6xl">
        <p className="text-teal text-[11px] tracking-[0.32em] uppercase mb-4">Capabilities</p>
        <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium leading-[1.05] max-w-3xl">
          End-to-end garment capabilities
        </h2>
        <p className="mt-6 text-navy/70 text-lg leading-relaxed max-w-2xl">
          Design through packing under one roof — samples, bulk, and ethical compliance for USA, Canada, and Europe.
        </p>
        <StatGrid
          items={[
            { value: "100K+", label: "Units per month — knitting to carton, vertically integrated." },
            { value: "60–90", label: "Day lead times with five-stage garment QA." },
            { value: "BSCI", label: "Certified. ETI and ILO aligned across the chain." },
            { value: "30+", label: "Years as a government-recognised export house." },
          ]}
        />
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

  const currentRegion = regions.find((r) => r.name === activeRegion) || regions[0];

  return (
    <section id="global-presence" className="bg-white border-t border-navy/10">
      <div className="px-6 sm:px-10 lg:px-14 py-20">
        <SectionReveal className="mb-12">
          <p className="text-navy text-[11px] tracking-[0.32em] uppercase mb-4">Chapter 04</p>
          <h2 className="font-display text-4xl sm:text-6xl text-navy font-medium">Global presence</h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 w-full min-w-0 overflow-hidden">
            <div className="relative mx-auto aspect-square w-full max-w-[22.5rem] sm:max-w-lg lg:max-w-none">
              <Globe />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-2 mb-8">
              {regions.map((reg) => (
                <button
                  key={reg.name}
                  onClick={() => setActiveRegion(reg.name)}
                  className={`text-left py-3 border-b text-sm tracking-wide transition-colors ${
                    activeRegion === reg.name
                      ? "border-navy text-navy"
                      : "border-navy/10 text-teal hover:text-navy"
                  }`}
                >
                  {reg.name}
                </button>
              ))}
            </div>
            <p className="text-mute text-sm leading-relaxed">{currentRegion.desc}</p>
            <ul className="mt-8 space-y-2">
              {currentRegion.shipments.map((s) => (
                <li key={s.product} className="text-ink text-xs tracking-[0.2em] uppercase">
                  {s.product}
                </li>
              ))}
            </ul>
          </div>
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

  return (
    <section className="bg-sky/50 px-6 sm:px-10 lg:px-14 py-24 border-t border-ink/10">
      <p className="text-crimson text-[11px] tracking-[0.32em] uppercase mb-4">Chapter 05</p>
      <h2 className="font-display text-4xl sm:text-6xl text-ink font-medium mb-12">Questions</h2>
      {faqs.map((faq, i) => (
        <FAQItem key={i} q={faq.q} a={faq.a} />
      ))}
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ink/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-baseline justify-between gap-6 py-7 text-left group"
      >
        <span className="font-display text-2xl sm:text-3xl text-navy group-hover:text-teal transition-colors">{q}</span>
        <span className="text-navy text-lg">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="pb-8 text-mute leading-relaxed max-w-3xl">{a}</p>}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="grid lg:grid-cols-2">
      <div className="bg-white px-6 sm:px-10 lg:px-14 py-16 space-y-10">
        <div>
          <p className="text-crimson text-[11px] tracking-[0.32em] uppercase mb-4">Chapter 06</p>
          <h2 className="font-display text-4xl sm:text-6xl text-ink font-medium">Let&apos;s work together</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[10px] tracking-[0.22em] uppercase text-crimson mb-3">Registered office</h3>
            <p className="text-mute text-sm leading-relaxed">
              M-169, Greater Kailash - II,<br />
              New Delhi - 110048, India
            </p>
            <a href="tel:+911140524038" className="text-ink text-sm mt-3 inline-block hover:text-crimson">
              +91-11-4052 4038
            </a>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.22em] uppercase text-crimson mb-3">Manufacturing</h3>
            <p className="text-mute text-sm leading-relaxed">
              C-57, Hosiery Complex, Phase II,<br />
              Noida - 201305, India
            </p>
            <a href="tel:+911204668800" className="text-ink text-sm mt-3 inline-block hover:text-crimson">
              +91-120-4668800
            </a>
          </div>
        </div>
        <div className="h-56 border border-navy/10 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=M-169%2C%20Greater%20Kailash%20II%2C%20New%20Delhi%20110048&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fabstract registered office, Greater Kailash II"
          />
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-navy px-6 sm:px-10 lg:px-14 py-16 space-y-6"
      >
        <h3 className="font-display text-4xl text-white mb-8">Send an enquiry</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">First name *</label>
            <input type="text" required className={field} />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Last name</label>
            <input type="text" className={field} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Email *</label>
            <input type="email" required className={field} />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Phone *</label>
            <input type="tel" required className={field} />
          </div>
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Company</label>
          <input type="text" className={field} />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Product category *</label>
          <select required className={`${field} bg-navy`}>
            <option value="">Select a category</option>
            <option value="woven">Woven Apparel</option>
            <option value="knitted">Knitted Apparel</option>
            <option value="home-textiles">Home Textiles &amp; Accessories</option>
            <option value="multiple">Multiple Categories</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.22em] uppercase text-sky mb-2">Message</label>
          <textarea rows={3} className={field} />
        </div>
        <button type="submit" className="btn-crimson w-full text-center">
          Send enquiry
        </button>
      </form>
    </section>
  );
}

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Navbar />
      <VideoBanner introComplete={introComplete} />
      <Capabilities />
      <GlobalPresence />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
