"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FactoryVideoShowcase } from "@/components/FactoryVideoShowcase";

const CAPABILITIES = [
  {
    title: "Strategic Hub & Speed",
    desc: "Located in the heart of the NCR apparel cluster, giving us direct access to skilled artisans, specialized infrastructure, and rapid end-to-end turnarounds.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    title: "Knits & Wovens Mastery",
    desc: "Fully equipped manufacturing units engineered to handle diverse product categories across both woven and knitted garments with ease.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  {
    title: "Artisan Craft & Specialty Washes",
    desc: "In-house capabilities for intricate embroidery, handcrafted details, complex garment dyeing, and specialized acid washes.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5H18l-3.7 2.7 1.4 4.3L12 12l-3.7 2.5 1.4-4.3L6 7.5h4.5z"/><path d="M5 19a2 2 0 104 0 2 2 0 10-4 0"/><path d="M15 19a2 2 0 104 0 2 2 0 10-4 0"/></svg>',
  },
  {
    title: "Automation & Smart Manufacturing",
    desc: "Precision CAD systems and automated attachments streamline production, ensuring exact fits, minimal waste, and scalable consistency.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>',
  },
  {
    title: "In-House Quality & Lab Testing",
    desc: "Real-time inline quality control backed by dedicated testing labs to verify colorfastness, shrinkage, and international durability standards.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  },
  {
    title: "Ethical & Certified Operations",
    desc: "Fully compliant with global benchmarks—certified by GOTS, Fairtrade, FLOCERT, and Sedex—with a focus on fair labor and a motivated workforce.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
  },
];

const CARDS = [
  { label: "Knitted", image: "/images/card-knitted.jpg", desc: "Crafted from premium cotton blends and organic fabrics, our knitted apparel seamlessly combines softness, durability, and contemporary design for effortless everyday wear." },
  { label: "Woven", image: "/images/card-woven.jpg", desc: "Consciously crafted for women and kids, our versatile collection of tops, dresses, and separates is thoughtfully designed for effortless movement and everyday wear." },
  { label: "Sweater", image: "/images/card-sweater.jpg", desc: "" },
  { label: "Home Textile", image: "/images/card-home-textile.jpg", desc: "" },
];

export default function WhatWeDo() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-14">
        <p className="text-sky text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3">What We Do</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.08] max-w-4xl">
          Crafting quality garments for the world&apos;s leading brands
        </h1>
        <p className="mt-4 text-white/65 text-lg sm:text-xl max-w-2xl leading-relaxed">
          From premium knits to sustainable home textiles, we bring expertise across every category of apparel manufacturing.
        </p>
      </section>

      {/* 4 Factories & Video Showcase Section */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-14 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy font-medium leading-[1.4] max-w-4xl mb-10 sm:mb-12">
            4 factories fully equipped to handle 100% woven or 100% knitted garments — end to end, under one roof.
          </p>

          <FactoryVideoShowcase />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title}>
              <div className="w-10 h-10 text-teal mb-4" dangerouslySetInnerHTML={{ __html: cap.icon }} />
              <h3 className="font-display text-xl sm:text-2xl text-navy font-medium mb-3">{cap.title}</h3>
              <p className="text-navy/65 text-sm sm:text-base leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Strengths Cards */}
      <section className="bg-sky/30 py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-medium mb-10">Our Core Strengths</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARDS.map((card) => (
            <a
              key={card.label}
              href="/about"
              className="group relative aspect-[3/4] rounded-2xl bg-sky/20 overflow-hidden cursor-pointer flex items-end p-6 transition-all duration-500"
            >
              {card.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-navy/30" />
              <div className="relative z-10">
                <span className="font-display text-xl sm:text-2xl text-white font-medium block">
                  {card.label}
                </span>
                {card.desc && (
                  <p className="text-white/0 group-hover:text-white/90 text-sm sm:text-base mt-2 leading-relaxed font-bold transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {card.desc}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
