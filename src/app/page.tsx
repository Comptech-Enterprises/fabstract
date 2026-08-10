"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Global", href: "#global-presence" },
  { label: "Community", href: "#community" },
  { label: "Life at Fabstract", href: "#life-at-fabstract" },
  { label: "CSR", href: "#csr" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bone/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center">
            <img src="/logo.png" alt="Fabstract Clothing India" className="h-12" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-smoky-black/70 hover:text-olive-drab text-sm tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-smoky-black"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bone border-t border-smoky-black/10 pb-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block mx-3 my-1 px-4 py-2.5 rounded-xl text-smoky-black/70 hover:text-olive-drab hover:bg-smoky-black/5 text-sm tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

const CLIENT_NAMES = [
  "Billabong", "Quicksilver", "Volcom", "Rip Curl", "O'Neill",
  "Urban Outfitters", "Anthropologie", "NAF NAF", "Kookai",
  "Replay", "Ella Moss", "Sud Express", "Foxhead Inc.", "Delia's",
  "JC Brothers & Sisters",
];

function Hero() {
  return (
    <section id="home" className="relative bg-floral-white overflow-hidden">
      {/* Hero Banner */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,94,60,0.06),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,240,235,0.5),_transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-6">
                Since 1991 &mdash; Government Recognized Export House
              </p>
              <h1 className="text-smoky-black text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Fashion
                <br />
                <span className="text-olive-drab">for the World</span>
              </h1>
              <p className="mt-8 text-smoky-black/60 text-lg sm:text-xl max-w-xl leading-relaxed">
                Ethical and sustainable apparel manufacturing — high fashion knitwear
                &amp; woven garments exported to USA, Canada, and Europe.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-block bg-olive-drab text-floral-white px-8 py-3.5 rounded-full text-sm tracking-wider hover:bg-olive-dark transition-colors"
                >
                  REQUEST A QUOTE
                </a>
                <a
                  href="#"
                  className="inline-block border border-smoky-black/20 text-smoky-black px-8 py-3.5 rounded-full text-sm tracking-wider hover:border-olive-drab hover:text-olive-drab transition-colors"
                >
                  DOWNLOAD PROFILE
                </a>
              </div>
            </div>

            {/* Factory / Product imagery placeholders */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-bone rounded-2xl h-48 flex items-center justify-center border border-smoky-black/5">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-olive-drab/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                    <p className="text-olive-drab/40 text-xs">Factory Floor</p>
                  </div>
                </div>
                <div className="bg-bone rounded-2xl h-64 flex items-center justify-center border border-smoky-black/5">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-smoky-black/15 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                    <p className="text-smoky-black/20 text-xs">Woven Collection</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-bone rounded-2xl h-64 flex items-center justify-center border border-smoky-black/5">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-smoky-black/15 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                    <p className="text-smoky-black/20 text-xs">Knit Collection</p>
                  </div>
                </div>
                <div className="bg-bone rounded-2xl h-48 flex items-center justify-center border border-smoky-black/5">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-olive-drab/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                    <p className="text-olive-drab/40 text-xs">Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "1L+", label: "Units / Month" },
              { value: "15+", label: "Global Clients" },
              { value: "5", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="bg-bone rounded-2xl p-6 text-center border border-smoky-black/5">
                <p className="text-olive-drab text-3xl sm:text-4xl font-bold">{stat.value}</p>
                <p className="text-smoky-black/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logo Carousel */}
      <div className="border-t border-smoky-black/10 py-10 overflow-hidden">
        <p className="text-center text-smoky-black/30 text-xs tracking-[0.3em] uppercase mb-8">
          Trusted by global brands
        </p>
        <div className="relative">
          <div className="flex animate-scroll gap-12 w-max">
            {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 bg-bone border border-smoky-black/5 rounded-xl px-8 py-4 flex items-center justify-center min-w-[160px]"
              >
                <span className="text-smoky-black/50 text-sm font-medium tracking-wide whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Strengths */}
      <div className="border-t border-smoky-black/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((strength) => (
              <div
                key={strength.title}
                className="bg-bone border border-smoky-black/5 rounded-2xl p-8 group hover:border-olive-drab/30 transition-all"
              >
                <div className="text-olive-drab mb-4">{strength.icon}</div>
                <h3 className="text-smoky-black font-semibold text-lg mb-2 group-hover:text-olive-drab transition-colors">
                  {strength.title}
                </h3>
                <p className="text-smoky-black/50 text-sm leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const timeline = [
    { year: "1991", title: "Founded", desc: "Fabstract Clothing India established by Mr. Nitin Batra in New Delhi as a garment export house." },
    { year: "1995", title: "First International Buyers", desc: "Secured first export orders to the USA and Canada, laying the foundation for global partnerships." },
    { year: "2002", title: "Noida Manufacturing Facility", desc: "Expanded operations with a dedicated manufacturing unit at Hosiery Complex, Phase II, Noida." },
    { year: "2008", title: "European Expansion", desc: "Entered European markets — France, Sweden, and Italy — partnering with brands like NAF NAF and Replay." },
    { year: "2015", title: "BSCI Certified", desc: "Achieved BSCI certification for 3 years, reinforcing commitment to ethical and sustainable manufacturing." },
    { year: "2020", title: "1 Lakh Units/Month", desc: "Scaled production capacity to 80,000–1,00,000 units per month with 20% average annual growth." },
    { year: "2024", title: "35+ Years Strong", desc: "Serving 15+ global brands across 5 countries with USD 4M+ annual turnover and growing." },
  ];

  return (
    <section id="about" className="bg-bone">
      {/* Intro */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-3xl">
          Three Decades of Crafting Fashion for the World
        </h2>
        <p className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed">
          Founded in 1991, Fabstract Clothing India Pvt. Ltd. is a government-recognized
          garment export house manufacturing high fashion knitwear &amp; woven garments. With
          an average growth of 20% year-over-year, we serve leading brands across the USA,
          Canada, and Europe.
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-bone py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Journey</p>
          <h3 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-16">
            From a Vision to a Global Export House
          </h3>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-olive-drab/30 sm:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-8 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                    <div className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5 shadow-sm">
                      <p className="text-olive-drab font-bold text-lg mb-1">{item.title}</p>
                      <p className="text-smoky-black/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 -translate-x-1/2 bg-olive-drab rounded-full flex items-center justify-center z-10">
                    <span className="text-floral-white text-[10px] font-bold">{item.year.slice(2)}</span>
                  </div>

                  <div className={`pl-16 sm:hidden`}>
                    <div className="bg-floral-white rounded-2xl p-5 border border-smoky-black/5 shadow-sm">
                      <p className="text-olive-drab font-bold text-sm mb-1">{item.year} — {item.title}</p>
                      <p className="text-smoky-black/60 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "sm:pl-16" : "sm:pr-16 sm:text-right"}`}>
                    <p className="text-olive-drab font-bold text-2xl">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">What Drives Us</p>
        <h3 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
          Mission, Vision &amp; Values
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-floral-white rounded-2xl p-8 border border-bone/50">
            <div className="w-12 h-12 bg-olive-drab/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-olive-drab" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
            </div>
            <h4 className="text-smoky-black font-bold text-lg mb-3">Our Mission</h4>
            <p className="text-smoky-black/65 leading-relaxed">
              To deliver world-class apparel through ethical manufacturing, empowering our
              workforce and partners while upholding the highest standards of quality,
              sustainability, and timely delivery.
            </p>
          </div>

          <div className="bg-floral-white rounded-2xl p-8 border border-bone/50">
            <div className="w-12 h-12 bg-olive-drab/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-olive-drab" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h4 className="text-smoky-black font-bold text-lg mb-3">Our Vision</h4>
            <p className="text-smoky-black/65 leading-relaxed">
              To be the most trusted garment manufacturing partner globally — known for
              innovation, integrity, and an unwavering commitment to fashion excellence
              that sets the benchmark for the industry.
            </p>
          </div>

          <div className="bg-floral-white rounded-2xl p-8 border border-bone/50">
            <div className="w-12 h-12 bg-olive-drab/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-olive-drab" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h4 className="text-smoky-black font-bold text-lg mb-3">Our Values</h4>
            <ul className="text-smoky-black/65 leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Ethical labour practices &amp; fair wages</li>
              <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Quality over quantity — zero-compromise standards</li>
              <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Environmental sustainability in every process</li>
              <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Transparency &amp; long-term partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const productLines = [
    {
      title: "Woven Apparel",
      share: "55% of production",
      items: ["Tops", "Dresses", "Skirts", "Jackets", "Trousers", "Jumpsuits", "Pyjama Sets"],
      fabrics: "Cambric, Voile, Poplin, Yarn Dyed, Dobby",
    },
    {
      title: "Knitted Apparel",
      share: "45% of production",
      items: ["Tees", "Sweatshirts", "Hoodies", "Joggers", "Vests", "Underwear"],
      fabrics: "Velour, Sherpa, Single Jerseys, Pique, French Terry, Fleece, Interlock, Viscose Jersey, Modal/Cotton",
    },
    {
      title: "Home Textiles & Accessories",
      share: "Growing segment",
      items: ["Bed Linens", "Cushion Covers", "Blankets", "Scarves", "Tote Bags", "Accessories"],
      fabrics: "Premium cottons, blended fabrics, specialty weaves",
    },
  ];

  const materialTags = [
    { label: "Organic Cotton", desc: "GOTS-certified organic cotton sourcing" },
    { label: "Recycled", desc: "Recycled polyester & upcycled fabrics" },
    { label: "Cellulose", desc: "Modal, Tencel & viscose-based fibres" },
    { label: "Spun Dyed", desc: "Reduced water usage dope-dyed yarns" },
  ];

  return (
    <section id="products" className="bg-floral-white">
      {/* Product Lines */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Products</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
          High Fashion Knitwear &amp; Woven Garments
        </h2>
        <p className="text-smoky-black/60 max-w-2xl mb-16">
          From delicate beadwork to bold prints — our product range spans women&apos;s (60%),
          men&apos;s (20%), and children&apos;s (20%) collections across woven, knitted, and home textile categories.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {productLines.map((line) => (
            <div key={line.title} className="bg-bone/50 rounded-2xl p-8 border border-bone">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-smoky-black font-bold text-lg">{line.title}</h3>
              </div>
              <span className="inline-block bg-olive-drab/15 text-olive-drab text-xs font-medium px-3 py-1 rounded-full mb-5">
                {line.share}
              </span>
              <div className="flex flex-wrap gap-2 mb-6">
                {line.items.map((item) => (
                  <span
                    key={item}
                    className="bg-floral-white text-smoky-black/70 text-sm px-3 py-1.5 rounded-lg border border-bone/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="border-t border-bone pt-4">
                <p className="text-smoky-black/40 text-xs uppercase tracking-wider mb-2">Key Fabrics</p>
                <p className="text-smoky-black/60 text-sm leading-relaxed">{line.fabrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Tags */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Sustainable Materials</p>
        <h3 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
          Fabrics We Believe In
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialTags.map((mat) => (
            <div
              key={mat.label}
              className="bg-bone/40 rounded-2xl p-6 border border-bone hover:border-olive-drab/30 transition-colors group"
            >
              <h4 className="text-smoky-black font-bold mb-2">{mat.label}</h4>
              <p className="text-smoky-black/55 text-sm leading-relaxed">{mat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Women", "Men", "Kids"];

  const galleryItems = [
    { name: "Embroidered Floral Blouse", category: "Women", technique: "Embroidery", fabric: "100% Organic Cotton Cambric" },
    { name: "Yarn-Dyed Striped Hoodie", category: "Men", technique: "Yarn Dyed", fabric: "French Terry Fleece" },
    { name: "All-Over Floral Maxi Dress", category: "Women", technique: "All Over Print", fabric: "Viscose Georgette" },
    { name: "Placement Print Pyjama Set", category: "Kids", technique: "Placement Print", fabric: "Single Jersey Knit" },
    { name: "Beaded & Sequinned Evening Top", category: "Women", technique: "Beaded & Sequinned", fabric: "Silk Blend Voile" },
    { name: "Solid-Dyed Slim Joggers", category: "Men", technique: "Solid Dyed", fabric: "Cotton-Modal Blend" },
    { name: "Hand Tie-Dye Oversized Tee", category: "Women", technique: "Tie Dyed", fabric: "Slub Cotton Jersey" },
    { name: "Utility Woven Children Jacket", category: "Kids", technique: "Woven", fabric: "Cotton Twill & Flannel" },
    { name: "Burnout Sheer Linen Top", category: "Women", technique: "Burnout", fabric: "Linen-Poly Blend" },
    { name: "Ombre Dip-Dyed Sweatshirt", category: "Men", technique: "Ombre Dyed", fabric: "Brushed Fleece" },
    { name: "Placement Embroidered Skirt", category: "Women", technique: "Embroidery", fabric: "Cotton Dobby" },
    { name: "Kids Ribbed Solid Knit Vest", category: "Kids", technique: "Solid Knit", fabric: "100% Combed Cotton" },
  ];

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-floral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Gallery</p>
            <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold">
              Product Showcase &amp; Specialisations
            </h2>
            <p className="text-smoky-black/60 max-w-xl mt-3 text-sm">
              Explore our diverse range of high-fashion garments featuring hand-embroidery, placement printing, yarn dyeing, and specialized washes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === f
                    ? "bg-olive-drab text-floral-white shadow-sm"
                    : "bg-bone text-smoky-black/60 hover:text-smoky-black hover:bg-bone/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="group bg-bone/50 rounded-2xl overflow-hidden border border-smoky-black/5 hover:border-olive-drab/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="aspect-[3/4] flex items-center justify-center bg-bone p-6 relative">
                <div className="text-center">
                  <svg className="w-12 h-12 text-olive-drab/30 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="text-smoky-black/40 text-xs font-medium">{item.fabric}</p>
                </div>
                <span className="absolute top-3 right-3 bg-floral-white/90 backdrop-blur-sm text-smoky-black/70 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-smoky-black/5">
                  {item.category}
                </span>
              </div>

              <div className="p-5 bg-floral-white">
                <h3 className="text-smoky-black font-bold text-sm mb-2 group-hover:text-olive-drab transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-olive-drab font-semibold">{item.technique}</span>
                </div>
              </div>
            </div>
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
        <div className="text-center mb-16">
          <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Clients</p>
          <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6">
            Trusted by Leading Global Brands
          </h2>
          <p className="text-smoky-black/60 max-w-2xl mx-auto">
            Delivering trend-setting garments at competitive prices with
            committed timelines — earning long-standing partnerships worldwide.
          </p>
        </div>

        <div className="flex justify-center gap-8 sm:gap-16 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-olive-drab">{stat.value}</p>
              <p className="text-smoky-black/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

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
    },
    {
      name: "UK & Europe",
      share: "30% of Exports",
      hubs: ["Paris", "Milan", "Stockholm", "London"],
      desc: "Delivering trend-setting high-fashion wovens and eco-certified organic knits to leading European fashion houses across France, Italy, Sweden & UK.",
      highlights: ["GOTS & Fairtrade Certified", "Complex Beadwork & Embroidery", "Express 45-day Sample-to-Ship"],
    },
    {
      name: "Australia & NZ",
      share: "10% of Exports",
      hubs: ["Sydney", "Melbourne", "Auckland"],
      desc: "Providing high-performance ocean & beachwear, casual knits, and sustainable lifestyle apparel for top Australian and New Zealand brands.",
      highlights: ["Rapid Growth Market", "UPF Protective Fabrics", "Organic Cotton Basics"],
    },
  ];

  const revenueData = [
    { year: "2018", rev: "$12M", height: "30%" },
    { year: "2019", rev: "$15M", height: "42%" },
    { year: "2020", rev: "$18M", height: "50%" },
    { year: "2021", rev: "$22M", height: "62%" },
    { year: "2022", rev: "$28M", height: "76%" },
    { year: "2023", rev: "$34M", height: "88%" },
    { year: "2024", rev: "$40M+", height: "100%" },
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
  ];

  const currentRegion = regions.find((r) => r.name === activeRegion) || regions[0];

  return (
    <section id="global-presence" className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Export Network &amp; Growth</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
          Global Presence &amp; Financial Trajectory
        </h2>
        <p className="text-smoky-black/60 max-w-2xl mb-16">
          Exporting premium knitwear and woven garments across North America, Europe, and Oceania — supported by steady year-on-year revenue expansion.
        </p>

        {/* Interactive World Map & Region Selector */}
        <div className="bg-floral-white rounded-3xl p-8 sm:p-12 border border-smoky-black/5 shadow-sm mb-16">
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
            {/* World Map SVG Visual */}
            <div className="lg:col-span-7 bg-bone/60 rounded-2xl p-6 relative overflow-hidden border border-smoky-black/5 min-h-[280px] flex items-center justify-center">
              <svg className="w-full h-auto opacity-80" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified Continents */}
                <path fill="#8B5E3C" fillOpacity="0.15" d="M150 120 h180 v120 h-180 z M180 260 h120 v160 h-120 z M460 100 h140 v120 h-140 z M480 240 h100 v180 h-100 z M720 120 h200 v120 h-200 z M760 300 h140 v120 h-140 z" />
                {/* HQ Noida / Delhi */}
                <circle cx="620" cy="230" r="6" fill="#8B5E3C" className="animate-ping opacity-75" />
                <circle cx="620" cy="230" r="5" fill="#8B5E3C" />
                <text x="620" y="255" fill="#101010" opacity="0.6" fontSize="12" textAnchor="middle" fontWeight="bold">HQ Noida / Delhi</text>

                {/* Region Connection Arc & Markers */}
                <path d="M 620 230 Q 400 120 260 180" stroke="#8B5E3C" strokeWidth="2" strokeDasharray="4 4" strokeOpacity={activeRegion === "USA & Canada" ? "1" : "0.3"} />
                <circle cx="260" cy="180" r={activeRegion === "USA & Canada" ? "8" : "5"} fill={activeRegion === "USA & Canada" ? "#8B5E3C" : "#8B5E3C80"} />

                <path d="M 620 230 Q 560 160 520 150" stroke="#8B5E3C" strokeWidth="2" strokeDasharray="4 4" strokeOpacity={activeRegion === "UK & Europe" ? "1" : "0.3"} />
                <circle cx="520" cy="150" r={activeRegion === "UK & Europe" ? "8" : "5"} fill={activeRegion === "UK & Europe" ? "#8B5E3C" : "#8B5E3C80"} />

                <path d="M 620 230 Q 750 300 830 360" stroke="#8B5E3C" strokeWidth="2" strokeDasharray="4 4" strokeOpacity={activeRegion === "Australia & NZ" ? "1" : "0.3"} />
                <circle cx="830" cy="360" r={activeRegion === "Australia & NZ" ? "8" : "5"} fill={activeRegion === "Australia & NZ" ? "#8B5E3C" : "#8B5E3C80"} />
              </svg>
            </div>

            {/* Region Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-smoky-black">{currentRegion.name}</h3>
                <span className="text-xs font-bold text-olive-drab bg-olive-drab/10 px-3 py-1 rounded-full">
                  {currentRegion.share}
                </span>
              </div>
              <p className="text-smoky-black/60 text-sm leading-relaxed">
                {currentRegion.desc}
              </p>
              <div>
                <p className="text-xs uppercase tracking-wider text-smoky-black/40 font-semibold mb-2">Major Shipping Hubs</p>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.hubs.map((hub) => (
                    <span key={hub} className="bg-bone text-smoky-black/70 text-xs px-3 py-1 rounded-md font-medium">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-smoky-black/40 font-semibold mb-2">Key Highlights</p>
                <ul className="space-y-1.5">
                  {currentRegion.highlights.map((h) => (
                    <li key={h} className="text-sm text-smoky-black/70 flex items-center gap-2">
                      <span className="text-olive-drab text-xs">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Growth Visual (2018 - Present) */}
        <div className="bg-floral-white rounded-3xl p-8 sm:p-12 border border-smoky-black/5 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-olive-drab text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Financial Trajectory</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-smoky-black">Revenue Expansion (2018 – Present)</h3>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-olive-drab">3.3x</p>
                <p className="text-xs text-smoky-black/50">Growth Expansion</p>
              </div>
              <div className="h-8 w-px bg-smoky-black/10" />
              <div>
                <p className="text-3xl font-bold text-smoky-black">$40M+</p>
                <p className="text-xs text-smoky-black/50">Annual Capacity</p>
              </div>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-2 sm:gap-6 pt-8 border-b border-smoky-black/10 px-2">
            {revenueData.map((d) => (
              <div key={d.year} className="flex-1 flex flex-col items-center gap-3 group">
                <span className="text-xs font-bold text-olive-drab opacity-0 group-hover:opacity-100 transition-opacity">
                  {d.rev}
                </span>
                <div
                  className="w-full max-w-[48px] bg-olive-drab/20 group-hover:bg-olive-drab rounded-t-lg transition-all duration-300 relative"
                  style={{ height: d.height }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-olive-drab rounded-t-lg" />
                </div>
                <span className="text-xs font-semibold text-smoky-black/60">{d.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Showcase & Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-smoky-black mb-6">Client Showcase &amp; Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-floral-white p-8 rounded-3xl border border-smoky-black/5 shadow-sm flex flex-col justify-between">
                <p className="text-smoky-black/70 text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-smoky-black font-bold text-sm">{t.author}</p>
                  <p className="text-olive-drab text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityAndPeople() {
  const initiatives = [
    {
      title: "Worker Welfare & Fair Living Wages",
      tag: "25% Above Minimum Wage",
      desc: "Guaranteeing living wages that exceed minimum government standards by 25%. We transparently distribute Fairtrade premiums directly to worker welfare funds, supporting staff and their families.",
      bullets: ["Living wages 25% above minimums", "Fairtrade Premium distribution", "Direct financial literacy programs"],
    },
    {
      title: "Women Empowerment & Mobility",
      tag: "60%+ Female Workforce",
      desc: "Empowering female factory staff through tailored technical training programs, pattern-making academies, and structured promotion paths into supervisory and leadership roles.",
      bullets: ["Technical training & skill programs", "Equal pay & maternity support", "Upward mobility into leadership"],
    },
    {
      title: "Healthcare, Housing & Appliance Support",
      tag: "Comprehensive Welfare",
      desc: "Providing family support through free on-site doctor consultations, subsidized housing allowances, and employee grants for purchasing essential household appliances.",
      bullets: ["Free health checkups & consultations", "Subsidized housing support", "Household appliance assistance"],
    },
    {
      title: "Tree Plantation & Nature Walks",
      tag: "Green Initiatives",
      desc: "Fostering environmental stewardship with annual tree plantation drives across NCR, alongside guided nature walks for staff and their families to build ecological awareness.",
      bullets: ["Annual tree plantation drives", "Guided nature walk programs", "Zero single-use plastic policy"],
    },
    {
      title: "Fashion Revolution Participation",
      tag: "#WhoMadeMyClothes",
      desc: "Proud participants in global supply chain transparency initiatives. We champion open factory doors, fair labor standards, and consumer awareness under Fashion Revolution's banner.",
      bullets: ["Supply chain transparency", "Worker story showcases", "Ethical manufacturing advocacy"],
    },
  ];

  return (
    <section id="community" className="py-24 bg-floral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Impact</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
          Community &amp; People
        </h2>
        <p className="text-smoky-black/60 max-w-2xl mb-16">
          People are at the heart of Fabstract. We invest in worker welfare, women empowerment, family health, and environmental stewardship across all operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="bg-bone/40 rounded-3xl p-8 border border-bone hover:border-olive-drab/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block bg-olive-drab/10 text-olive-drab text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {item.tag}
                </span>
                <h3 className="text-smoky-black font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-smoky-black/60 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="border-t border-smoky-black/5 pt-4">
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-xs text-smoky-black/70 flex items-center gap-2">
                      <span className="text-olive-drab font-bold">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifeAtFabstract() {
  const pillars = [
    {
      title: "Employer Branding & Work Environment",
      desc: "A progressive, inclusive factory culture where every worker feels valued, respected, and empowered to excel in their craft.",
      stats: "85%+ Retention Rate",
    },
    {
      title: "Skill Development & Advancement",
      desc: "Continuous cross-training in modern sewing technology, pattern-making, quality management, and supervisory skills.",
      stats: "100+ Hours Annual Training",
    },
    {
      title: "Health, Sanitation & Well-being",
      desc: "Clean RO drinking water stations, ergonomic seating, well-ventilated production bays, and female hygiene support.",
      stats: "Zero Safety Violations",
    },
    {
      title: "Team Culture & Factory Environment",
      desc: "Celebrating national festivals, hosting sports tournaments, recognizing top performers, and maintaining high team spirit.",
      stats: "Annual Recognition Events",
    },
  ];

  return (
    <section id="life-at-fabstract" className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Work Culture</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
          Life at Fabstract
        </h2>
        <p className="text-smoky-black/60 max-w-2xl mb-16">
          A modern, safe, and supportive workplace designed for career advancement, worker health, and collective pride in world-class manufacturing.
        </p>

        {/* Culture Highlight Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-floral-white rounded-3xl p-8 border border-smoky-black/5 hover:border-olive-drab/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-smoky-black font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-smoky-black/60 text-sm leading-relaxed mb-6">{pillar.desc}</p>
              </div>
              <div className="pt-4 border-t border-smoky-black/5">
                <span className="text-xs font-bold text-olive-drab uppercase tracking-wider">
                  {pillar.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Factory Environment Showcase Bar */}
        <div className="bg-floral-white rounded-3xl p-8 sm:p-12 border border-smoky-black/5 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-olive-drab mb-2">100%</p>
              <p className="text-smoky-black font-semibold text-base mb-1">Safety Compliance</p>
              <p className="text-smoky-black/50 text-xs">Strict adherence to BSCI, CSCC &amp; ETI codes</p>
            </div>
            <div className="p-4 border-y md:border-y-0 md:border-x border-smoky-black/10">
              <p className="text-4xl font-bold text-olive-drab mb-2">60%+</p>
              <p className="text-smoky-black font-semibold text-base mb-1">Female Workforce</p>
              <p className="text-smoky-black/50 text-xs">Equal opportunities &amp; upward leadership mobility</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-olive-drab mb-2">25%+</p>
              <p className="text-smoky-black font-semibold text-base mb-1">Above Minimum Wage</p>
              <p className="text-smoky-black/50 text-xs">Fair living wages and direct Fairtrade distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CSR() {
  const areas = [
    {
      title: "Education & Skilling",
      desc: "Promoting education, vocational skills, and livelihood enhancement — especially for children, women, elderly, and differently abled.",
    },
    {
      title: "Health & Sanitation",
      desc: "Eradicating hunger and malnutrition, promoting preventive healthcare and sanitation, contributing to Swachh Bharat Kosh.",
    },
    {
      title: "Gender Equality",
      desc: "Empowering women, setting up support facilities, and reducing inequalities faced by socially and economically backward groups.",
    },
    {
      title: "Environmental Sustainability",
      desc: "Committed to environmental compliance and sustainable manufacturing practices across all operations.",
    },
  ];

  return (
    <section id="csr" className="py-24 bg-floral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">
          Corporate Social Responsibility
        </p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-6 max-w-2xl">
          Operating Responsibly, Always
        </h2>
        <p className="text-smoky-black/60 max-w-2xl mb-16">
          Our CSR policy, developed under Section 135 of the Companies Act 2013,
          reflects our commitment to integrity, trust, and ethical business
          practices aligned with ETI and ILO conventions.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {areas.map((area) => (
            <div key={area.title} className="bg-bone/40 p-8 rounded-2xl">
              <h3 className="text-olive-dark font-semibold mb-3">{area.title}</h3>
              <p className="text-smoky-black/60 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-bone border border-smoky-black/5">
          <h3 className="text-smoky-black font-semibold mb-4">Compliance Standards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {[
              "Anti-Bribery & Corruption",
              "Labour Rights",
              "Freedom of Association",
              "Working Conditions",
              "No Child Labour",
              "Living Wages",
              "Fair Working Hours",
              "Non-Discrimination",
              "Regular Employment",
              "Humane Treatment",
              "Immigration Rights",
              "Environmental Compliance",
            ].map((item) => (
              <p key={item} className="text-smoky-black/60 text-sm flex items-center gap-2 py-1">
                <span className="text-olive-drab">&#10003;</span> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="text-smoky-black text-3xl sm:text-4xl font-bold mb-16 max-w-2xl">
          Let&apos;s Work Together
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-smoky-black font-semibold mb-3">Registered Office</h3>
              <p className="text-smoky-black/60 text-sm leading-relaxed">
                M-169, Greater Kailash - II,
                <br />
                New Delhi - 110048, India
              </p>
              <p className="text-olive-drab text-sm mt-2">+91-11-4052 4038</p>
            </div>

            <div>
              <h3 className="text-smoky-black font-semibold mb-3">Manufacturing Facility</h3>
              <p className="text-smoky-black/60 text-sm leading-relaxed">
                C-57, Hosiery Complex, Phase II,
                <br />
                Noida - 201305, India
              </p>
              <p className="text-olive-drab text-sm mt-2">+91-120-4668800</p>
            </div>

            <div>
              <h3 className="text-smoky-black font-semibold mb-3">Email</h3>
              <p className="text-olive-drab text-sm">nitin@fcipl.net</p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-floral-white p-8 rounded-2xl border border-smoky-black/10 shadow-sm space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors"
                />
              </div>
              <div>
                <label className="block text-smoky-black text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors"
              />
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors"
              />
            </div>
            <div>
              <label className="block text-smoky-black text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-bone border border-smoky-black/10 rounded-lg px-4 py-3 text-sm text-smoky-black focus:outline-none focus:border-olive-drab transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-olive-drab text-floral-white px-8 py-3 rounded-full text-sm tracking-wider hover:bg-olive-dark transition-colors w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-smoky-black py-12 border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <p className="text-floral-white font-bold text-lg tracking-wide mb-4">
              FABSTRACT
            </p>
            <p className="text-bone/50 text-sm leading-relaxed max-w-sm">
              Government recognized garment export house, manufacturing &amp;
              exporting high fashion knitwear &amp; woven garments since 1991.
            </p>
          </div>

          <div>
            <p className="text-bone/80 font-semibold text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-bone/40 text-sm hover:text-olive-drab transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-bone/80 font-semibold text-sm mb-4">Certifications</p>
            <ul className="space-y-2 text-bone/40 text-sm">
              <li>CSCC Approved</li>
              <li>BSCI Certified</li>
              <li>ETI Aligned</li>
              <li>ILO Compliant</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bone/10 text-center">
          <p className="text-bone/30 text-sm">
            &copy; {new Date().getFullYear()} Fabstract Clothing India Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Clients />
      <GlobalPresence />
      <CommunityAndPeople />
      <LifeAtFabstract />
      <CSR />
      <Contact />
      <Footer />
    </>
  );
}
