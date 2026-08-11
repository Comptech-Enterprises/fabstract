"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const CLIENT_NAMES = [
  "Billabong", "Quicksilver", "Volcom", "Rip Curl", "O'Neill",
  "Urban Outfitters", "Anthropologie", "NAF NAF", "Kookai",
  "Replay", "Ella Moss", "Sud Express", "Foxhead Inc.", "Delia's",
  "JC Brothers & Sisters",
];

function Hero() {
  return (
    <section id="home" className="relative bg-smoky-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/clothing-background.mp4"
      />
      <div className="absolute inset-0 bg-smoky-black/75" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-smoky-black/70 to-transparent" />

      <div className="relative min-h-[70vh] sm:min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <div className="max-w-3xl">
            <motion.p
              className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Since 1991 &mdash; Government Recognized Export House
            </motion.p>
            <motion.h1
              className="text-floral-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Crafting Fashion
              <br />
              <span className="text-olive-drab">for the World</span>
            </motion.h1>
            <motion.p
              className="mt-8 text-floral-white/70 text-lg sm:text-xl max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Ethical and sustainable apparel manufacturing — high fashion knitwear
              &amp; woven garments exported to USA, Canada, and Europe.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <a
                href="#contact"
                className="inline-block bg-olive-drab text-floral-white px-8 py-3.5 rounded-full text-sm tracking-wider hover:bg-olive-dark transition-colors"
              >
                REQUEST A QUOTE
              </a>
              <a
                href="#"
                className="inline-block border border-floral-white/30 text-floral-white px-8 py-3.5 rounded-full text-sm tracking-wider hover:border-olive-drab hover:text-olive-drab transition-colors"
              >
                DOWNLOAD PROFILE
              </a>
            </motion.div>
          </div>

          {/* Key Stats */}
          <motion.div
            className="mt-16 sm:mt-24 grid grid-cols-4 gap-2 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {[
              { value: "30+", label: "Years Experience" },
              { value: "1L+", label: "Units / Month" },
              { value: "15+", label: "Global Clients" },
              { value: "5", label: "Countries Served" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-floral-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-6 text-center border border-floral-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.08 }}
              >
                <p className="text-olive-drab text-xl sm:text-4xl font-bold">{stat.value}</p>
                <p className="text-floral-white/50 text-[10px] sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

function BrandCarousel() {
  return (
    <div className="bg-bone border-b border-smoky-black/5 py-10 overflow-hidden">
      <p className="text-center text-smoky-black/30 text-xs tracking-[0.3em] uppercase mb-8">
        Trusted by global brands
      </p>
      <div className="relative">
        <div className="flex animate-scroll gap-12 w-max">
          {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 bg-floral-white border border-smoky-black/8 rounded-xl px-8 py-4 flex items-center justify-center min-w-[160px]"
            >
              <span className="text-smoky-black/50 text-sm font-medium tracking-wide whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Capabilities() {
  const strengths = [
    {
      title: "Design",
      desc: "Dedicated sourcing & development team turning buyer concepts into production-ready samples.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
      ),
    },
    {
      title: "Manufacturing",
      desc: "Full vertical integration — knitting to packing, 1L+ units/month capacity.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
      ),
    },
    {
      title: "Sustainability",
      desc: "BSCI certified, ETI & ILO aligned. Ethical practices across entire supply chain.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 01-1.228 2.39l-.403.2a9.001 9.001 0 01-5.395-3.232" /></svg>
      ),
    },
    {
      title: "Operational Excellence",
      desc: "60–90 day lead times, five-stage QA, professional management team.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
      ),
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-floral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
            End-to-End Garment Capabilities
          </h2>
          <p className="text-smoky-black/60 max-w-2xl mb-16">
            From concept to carton — we handle design, manufacturing, compliance, and logistics under one roof, so global brands can focus on selling.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, i) => (
            <motion.div
              key={strength.title}
              className="bg-bone border border-smoky-black/5 rounded-2xl p-8 group hover:border-olive-drab/30 transition-all"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-olive-drab mb-4">{strength.icon}</div>
              <h3 className="text-smoky-black font-semibold text-lg mb-2 group-hover:text-olive-drab transition-colors">
                {strength.title}
              </h3>
              <p className="text-smoky-black/50 text-sm leading-relaxed">{strength.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const allClients = [
    { name: "Billabong", country: "USA" },
    { name: "Quicksilver (Roxy)", country: "USA" },
    { name: "Volcom", country: "USA" },
    { name: "Foxhead Inc.", country: "USA" },
    { name: "Rip Curl", country: "USA" },
    { name: "O'Neill", country: "USA" },
    { name: "Delia's", country: "USA" },
    { name: "Ella Moss", country: "USA" },
    { name: "Urban Outfitters", country: "USA" },
    { name: "Anthropologie", country: "USA" },
    { name: "NAF NAF", country: "France" },
    { name: "Sud Express", country: "France" },
    { name: "Kookai", country: "France" },
    { name: "O'Neill", country: "Canada" },
    { name: "JC Brothers & Sisters", country: "Sweden" },
    { name: "Replay", country: "Italy" },
  ];

  const countries = ["USA", "France", "Canada", "Sweden", "Italy"];

  const stats = [
    { value: "16+", label: "Brand Partners" },
    { value: "5", label: "Countries" },
    { value: "30+", label: "Years of Trust" },
  ];

  return (
    <section id="clients" className="py-24 bg-floral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Clients</p>
          <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6">
            Trusted by Leading Global Brands
          </h2>
          <p className="text-smoky-black/60 max-w-2xl mx-auto">
            Delivering trend-setting garments at competitive prices with
            committed timelines — earning long-standing partnerships worldwide.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 sm:gap-16 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-olive-drab">{stat.value}</p>
              <p className="text-smoky-black/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Animated Client Ticker */}
        <div className="overflow-hidden py-4 my-8 relative">
          <div className="flex animate-scroll gap-6 w-max">
            {[...allClients, ...allClients, ...allClients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 group relative bg-bone hover:bg-olive-drab/10 border border-smoky-black/5 hover:border-olive-drab/30 rounded-full px-6 py-3 transition-all duration-300 cursor-default"
              >
                <span className="text-smoky-black/80 group-hover:text-smoky-black text-sm font-medium transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {countries.map((country) => (
            <span key={country} className="text-smoky-black/40 text-xs tracking-wider uppercase font-medium">
              {country}
            </span>
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
      share: "60% of Exports",
      hubs: ["New York", "Los Angeles", "Toronto"],
      desc: "Long-standing manufacturing partner for major North American fashion retailers, surfwear icons, and contemporary department stores.",
      highlights: ["10+ Retailer Partnerships", "Dedicated QC Teams", "98% On-Time Air & Sea Freight"],
      mapEmbed: "https://www.google.com/maps?q=United+States&z=3&output=embed",
    },
    {
      name: "UK & Europe",
      share: "30% of Exports",
      hubs: ["Paris", "Milan", "Stockholm", "London"],
      desc: "Delivering trend-setting high-fashion wovens and eco-certified organic knits to leading European fashion houses across France, Italy, Sweden & UK.",
      highlights: ["GOTS & Fairtrade Certified", "Complex Beadwork & Embroidery", "Express 45-day Sample-to-Ship"],
      mapEmbed: "https://www.google.com/maps?q=Europe&z=4&output=embed",
    },
    {
      name: "Australia & NZ",
      share: "10% of Exports",
      hubs: ["Sydney", "Melbourne", "Auckland"],
      desc: "Providing high-performance ocean & beachwear, casual knits, and sustainable lifestyle apparel for top Australian and New Zealand brands.",
      highlights: ["Rapid Growth Market", "UPF Protective Fabrics", "Organic Cotton Basics"],
      mapEmbed: "https://www.google.com/maps?q=Australia+and+New+Zealand&z=4&output=embed",
    },
  ];

  const testimonials = [
    {
      quote: "Fabstract has been our most trusted apparel supplier for over a decade. Their commitment to ethical production, Fairtrade standards, and consistent garment finishing is unmatched.",
      author: "Director of Global Sourcing",
      company: "Leading US Surf & Outdoor Brand",
    },
    {
      quote: "Working with Nitin and the Fabstract team gives us total peace of mind. From intricate embroidery to sustainable fabric sourcing, they execute complex orders flawlessly.",
      author: "Head of Product Development",
      company: "European High Fashion House",
    },
    {
      quote: "The quality consistency across bulk orders is remarkable. Fabstract's attention to detail — from fabric weight to stitch density — has made them our go-to partner for five seasons running.",
      author: "VP of Merchandise",
      company: "Australian Active & Swimwear Label",
    },
    {
      quote: "Fairtrade certification was non-negotiable for our brand. Fabstract not only met the standard — they exceeded it. Their transparency reports are the most thorough we've seen.",
      author: "Ethical Sourcing Manager",
      company: "UK Sustainable Fashion Retailer",
    },
    {
      quote: "Tight timelines, complex embroidery specs, and demanding wash tests — Fabstract handled it all without a single delay. A truly professional export partner.",
      author: "Head of Supply Chain",
      company: "North American Outdoor Apparel Group",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActiveTestimonial(idx);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeTestimonial + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTestimonial]);

  const currentRegion = regions.find((r) => r.name === activeRegion) || regions[0];

  return (
    <section id="global-presence" className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Export Network &amp; Growth</p>
          <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
            Global Presence
          </h2>
          <p className="text-smoky-black/60 max-w-2xl mb-16">
            Exporting premium knitwear and woven garments across North America, Europe, and Oceania — supported by steady year-on-year revenue expansion.
          </p>
        </motion.div>

        {/* Interactive World Map & Region Selector */}
        <motion.div
          className="bg-floral-white rounded-3xl p-8 sm:p-12 border border-smoky-black/5 shadow-sm mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap gap-3 mb-8">
            {regions.map((reg) => (
              <button
                key={reg.name}
                onClick={() => setActiveRegion(reg.name)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeRegion === reg.name
                    ? "bg-olive-drab text-floral-white shadow-sm"
                    : "bg-bone text-smoky-black/60 hover:text-smoky-black hover:bg-bone/80"
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Dotted World Map */}
            <div className="lg:col-span-7 rounded-2xl relative overflow-hidden bg-floral-white border border-smoky-black/5 aspect-square">
              <Globe />
            </div>

            {/* Region Details */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-smoky-black">{currentRegion.name}</h3>
              <p className="text-smoky-black/60 text-sm leading-relaxed">
                {currentRegion.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Client Showcase & Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-xl font-bold text-smoky-black mb-6">Client Showcase &amp; Testimonials</h3>
          <div className="relative bg-floral-white rounded-3xl border border-smoky-black/5 shadow-sm p-10 sm:p-14 h-[320px] flex flex-col justify-between">
            <div
              style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)", transition: "opacity 300ms, transform 300ms" }}
            >
              <p className="text-smoky-black/70 text-lg leading-relaxed mb-8 max-w-2xl">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <div>
                <p className="text-smoky-black font-bold text-sm">{testimonials[activeTestimonial].author}</p>
                <p className="text-olive-drab text-xs mt-0.5">{testimonials[activeTestimonial].company}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === activeTestimonial ? "bg-olive-drab w-6 h-2" : "bg-smoky-black/15 w-2 h-2"}`}
                />
              ))}
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => goTo((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-smoky-black/10 flex items-center justify-center text-smoky-black/40 hover:border-olive-drab/50 hover:text-olive-drab transition-all text-sm"
                >&#8592;</button>
                <button
                  onClick={() => goTo((activeTestimonial + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-smoky-black/10 flex items-center justify-center text-smoky-black/40 hover:border-olive-drab/50 hover:text-olive-drab transition-all text-sm"
                >&#8594;</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Contact &amp; Enquiry</p>
          <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-smoky-black/60 max-w-2xl mb-16">
            Ready to start your next collection? Send us your requirements and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info + Map + Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Direct Contacts */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5">
                <h3 className="text-smoky-black font-semibold mb-3">Registered Office</h3>
                <p className="text-smoky-black/60 text-sm leading-relaxed">
                  M-169, Greater Kailash - II,<br />
                  New Delhi - 110048, India
                </p>
                <a href="tel:+911140524038" className="text-olive-drab text-sm mt-3 inline-flex items-center gap-2 hover:underline">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  +91-11-4052 4038
                </a>
              </div>
              <div className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5">
                <h3 className="text-smoky-black font-semibold mb-3">Manufacturing Facility</h3>
                <p className="text-smoky-black/60 text-sm leading-relaxed">
                  C-57, Hosiery Complex, Phase II,<br />
                  Noida - 201305, India
                </p>
                <a href="tel:+911204668800" className="text-olive-drab text-sm mt-3 inline-flex items-center gap-2 hover:underline">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  +91-120-4668800
                </a>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-3">
              <a href="mailto:nitin@fcipl.net" className="inline-flex items-center gap-2 bg-floral-white border border-smoky-black/10 rounded-full px-5 py-2.5 text-sm text-smoky-black/70 hover:border-olive-drab/30 hover:text-olive-drab transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                nitin@fcipl.net
              </a>
              <a href="https://wa.me/911140524038" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-floral-white border border-smoky-black/10 rounded-full px-5 py-2.5 text-sm text-smoky-black/70 hover:border-olive-drab/30 hover:text-olive-drab transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-smoky-black/5 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7834!2d77.2438!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sGreater%20Kailash%20II%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fabstract Office Location"
              />
            </div>

            {/* Download Profile + Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-olive-drab text-floral-white px-6 py-3 rounded-full text-sm tracking-wider hover:bg-olive-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                DOWNLOAD COMPANY PROFILE
              </a>
              <div className="flex items-center gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-floral-white border border-smoky-black/10 flex items-center justify-center text-smoky-black/50 hover:text-olive-drab hover:border-olive-drab/30 transition-all" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-floral-white border border-smoky-black/10 flex items-center justify-center text-smoky-black/50 hover:text-olive-drab hover:border-olive-drab/30 transition-all" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-floral-white border border-smoky-black/10 flex items-center justify-center text-smoky-black/50 hover:text-olive-drab hover:border-olive-drab/30 transition-all" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-floral-white p-8 rounded-2xl border border-smoky-black/10 shadow-sm space-y-6 h-fit"
          >
            <h3 className="text-smoky-black font-bold text-lg">Send an Enquiry</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">First Name *</label>
                <input type="text" required className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors" />
              </div>
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">Last Name</label>
                <input type="text" className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">Email *</label>
                <input type="email" required className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors" />
              </div>
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">Phone *</label>
                <input type="tel" required className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">Company</label>
              <input type="text" className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors" />
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">Product Category *</label>
              <select required className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors">
                <option value="">Select a category</option>
                <option value="woven">Woven Apparel</option>
                <option value="knitted">Knitted Apparel</option>
                <option value="home-textiles">Home Textiles &amp; Accessories</option>
                <option value="multiple">Multiple Categories</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">Estimated Volume</label>
                <select className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors">
                  <option value="">Select volume</option>
                  <option value="500-2000">500 – 2,000 units</option>
                  <option value="2000-10000">2,000 – 10,000 units</option>
                  <option value="10000-50000">10,000 – 50,000 units</option>
                  <option value="50000+">50,000+ units</option>
                </select>
              </div>
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">Timeline</label>
                <select className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors">
                  <option value="">Select timeline</option>
                  <option value="30-60">30 – 60 days</option>
                  <option value="60-90">60 – 90 days</option>
                  <option value="90-120">90 – 120 days</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">Message</label>
              <textarea rows={4} className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors resize-none" placeholder="Tell us about your requirements..." />
            </div>
            <button
              type="submit"
              className="bg-olive-drab text-floral-white px-8 py-3 rounded-full text-sm tracking-wider hover:bg-olive-dark transition-colors w-full"
            >
              SEND ENQUIRY
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandCarousel />
      <Capabilities />
      <Clients />
      <GlobalPresence />
      <Contact />
      <Footer />
    </>
  );
}
