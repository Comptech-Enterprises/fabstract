"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
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
    <>
      <Navbar />
      <main className="pt-28">
        {/* Intro */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl"
            >
              Three Decades of Crafting Fashion for the World
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed"
            >
              Founded in 1991, Fabstract Clothing India Pvt. Ltd. is a government-recognized
              garment export house manufacturing high fashion knitwear &amp; woven garments. With
              an average growth of 20% year-over-year, we serve leading brands across the USA,
              Canada, and Europe.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-bone py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Journey</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-16">
                From a Vision to a Global Export House
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-olive-drab/30 sm:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease }}
                    className={`relative flex items-start gap-8 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                      <div className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5 shadow-sm">
                        <p className="text-olive-drab font-bold text-lg mb-1">{item.title}</p>
                        <p className="text-smoky-black/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-4 sm:left-1/2 w-8 h-8 -translate-x-1/2 bg-olive-drab rounded-full flex items-center justify-center z-10">
                      <span className="text-floral-white text-[10px] font-bold">{item.year.slice(2)}</span>
                    </div>

                    <div className="pl-16 sm:hidden">
                      <div className="bg-floral-white rounded-2xl p-5 border border-smoky-black/5 shadow-sm">
                        <p className="text-olive-drab font-bold text-sm mb-1">{item.year} — {item.title}</p>
                        <p className="text-smoky-black/60 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "sm:pl-16" : "sm:pr-16 sm:text-right"}`}>
                      <p className="text-olive-drab font-bold text-2xl">{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">What Drives Us</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
                Mission, Vision &amp; Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />,
                  title: "Our Mission",
                  content: <p className="text-smoky-black/65 leading-relaxed">To deliver world-class apparel through ethical manufacturing, empowering our workforce and partners while upholding the highest standards of quality, sustainability, and timely delivery.</p>,
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                  title: "Our Vision",
                  content: <p className="text-smoky-black/65 leading-relaxed">To be the most trusted garment manufacturing partner globally — known for innovation, integrity, and an unwavering commitment to fashion excellence that sets the benchmark for the industry.</p>,
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
                  title: "Our Values",
                  content: (
                    <ul className="text-smoky-black/65 leading-relaxed space-y-2">
                      <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Ethical labour practices &amp; fair wages</li>
                      <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Quality over quantity — zero-compromise standards</li>
                      <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Environmental sustainability in every process</li>
                      <li className="flex items-start gap-2"><span className="text-olive-drab mt-1.5 text-xs">&#9679;</span> Transparency &amp; long-term partnerships</li>
                    </ul>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="bg-floral-white rounded-2xl p-8 border border-bone/50"
                >
                  <div className="w-12 h-12 bg-olive-drab/15 rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-olive-drab" fill="none" viewBox="0 0 24 24" stroke="currentColor">{card.icon}</svg>
                  </div>
                  <h3 className="text-smoky-black font-bold text-lg mb-3">{card.title}</h3>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
