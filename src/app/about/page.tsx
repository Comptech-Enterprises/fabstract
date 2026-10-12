"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Still } from "@/components/Still";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { PageScrollLayout } from "@/components/PageScrollLayout";

const ABOUT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "legacy", label: "Our Legacy" },
  { id: "journey", label: "Our Journey" },
  { id: "certifications", label: "Certifications" },
];

const MILESTONES = [
  {
    year: "1991",
    title: "Founding & First Workshop",
    desc: "Fabstract was established in New Delhi as an export garment house, dedicated to high fashion woven and knitted apparel crafted by skilled master artisans.",
    img: "/images/timeline/1991-workshop.png",
  },
  {
    year: "1998",
    title: "Noida Production Expansion",
    desc: "Commissioned modern multi-line manufacturing unit in Sector 63, Noida, expanding cutting, multi-needle sewing, and finishing capacity to serve international brands.",
    img: "/images/timeline/1998-noida.jpg",
  },
  {
    year: "2005",
    title: "Dedicated Knits & Sampling Studio",
    desc: "Established a specialized sample development studio and rapid prototyping line for international buyer collections across USA and Europe.",
    img: "/images/timeline/2005-knits.png",
  },
  {
    year: "2012",
    title: "In-House Quality Control & Testing Lab",
    desc: "Built an internal fabric testing and physical quality laboratory. Today, the laboratory conducts performance testing, color approvals, and 5-stage AQL checks to reduce lead times.",
    img: "/images/timeline/2012-qa-lab.png",
  },
  {
    year: "2018",
    title: "Sustainable & Fairtrade Operations",
    desc: "Adopted Fairtrade and BSCI compliance, sponsored urban Miyawaki micro-forests in Delhi NCR, and strengthened women empowerment programs across all factory units.",
    img: "/images/timeline/2018-fairtrade.jpg",
  },
  {
    year: "2021",
    title: "Circular Sourcing & Eco-Blends",
    desc: "Integrated GOTS-certified organic cotton, natural linen, and sustainable blends into core collections with zero-waste cutting practices.",
    img: "/images/timeline/2021-gots.png",
  },
  {
    year: "2024",
    title: "Global Reach & Digital Integration",
    desc: "Expanded monthly capacity to 80,000–100,000 units, supplying premier buyers across USA, Canada, France, Italy, and Sweden with seamless cloud-managed buyer assets.",
    img: GALLERY_FILES[6] || GALLERY_FILES[0],
  },
  {
    year: "2026",
    title: "Automated Finishing & Sustainable Innovation",
    desc: "Upgraded smart cutting tables, solar-powered lines, and closed-loop garment recycling to lead ethical fashion manufacturing into the future.",
    img: GALLERY_FILES[7] || GALLERY_FILES[1],
  },
];




export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Shahi-style Hero Banner */}
        <section className="relative h-[52vh] min-h-[360px] sm:h-[62vh] md:h-[70vh] overflow-hidden bg-navy">
          <div className="absolute inset-0">
            <video
              src="/videos/about-banner.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/20" />
          <div className="absolute inset-x-0 bottom-0 px-6 sm:px-10 lg:px-14 pb-10 lg:pb-16 z-10">
            <p className="text-sky text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3">Who We Are</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.08] max-w-4xl [text-shadow:0_2px_24px_rgba(12,18,28,0.4)]">
              Manufacturing with purpose, craft, and precision
            </h1>
          </div>
        </section>

        <PageScrollLayout tabs={ABOUT_TABS} activeIdPrefix="about">
          {/* Intro Statement Section (Full Width, Centered) */}
          <section id="overview" className="scroll-mt-24 bg-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-navy/10 text-center">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6 tracking-tight">
                Manufacturing Excellence, Cutting-Edge, and Vertically Integrated
              </h2>
              <p className="text-navy/75 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                As a premier apparel manufacturer, we manage the entire process from spinning to finished garment. Our state-of-the-art mills craft woven and knitted fabric with premium cotton fiber and materials from reputable suppliers to ensure speed, quality, and responsibility.
              </p>
            </div>
          </section>

          {/* Section 1: Our Legacy - Blue Background 3-Column Center-Portrait Layout */}
          <section id="legacy" className="scroll-mt-24 bg-navy text-white px-6 sm:px-10 lg:px-14 py-16 lg:py-24 border-b border-navy/10 relative overflow-hidden">
            {/* Subtle ambient lighting behind portrait */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-sky/15 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
                {/* Left Column: Heading & Founder Story */}
                <div className="lg:col-span-4 space-y-6">
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
                    Our Legacy
                  </h2>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
                    Fabstract Clothing, founded in 1991, has grown from a specialized workshop into a premier government-recognized garment export house over three decades of craftsmanship.
                  </p>
                </div>

                {/* Center Column: 1991 Heritage Display */}
                <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-14">
                  {/* Subtle radiating living aurora */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.55, 0.35],
                      }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full bg-[radial-gradient(circle,#c8d9e6_0%,#567c8d_45%,transparent_70%)] blur-3xl pointer-events-none"
                    />
                  </div>
                  
                  {/* 1991 Display with cinematic reveal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 24, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex flex-col items-center justify-center text-center select-none"
                  >
                    <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-sky/75 font-sans font-medium mb-1">
                      Est.
                    </span>
                    <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-sky/60 leading-none tracking-tight drop-shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                      1991
                    </span>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-sky/40" />
                      <span className="text-[9px] sm:text-[11px] tracking-[0.25em] uppercase text-white/55 font-sans font-light">
                        Over Three Decades of Craft
                      </span>
                      <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-sky/40" />
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Statement note */}
                <div className="lg:col-span-3 lg:pt-24 space-y-4">
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-xs font-light">
                    Our vertical integration and strong commitment to ethics and sustainability position us as a preferred global manufacturing partner.
                  </p>
                </div>
              </div>
            </section>

          {/* Section 2: Explore Our Journey - Animated Timeline */}
          <section id="journey" className="scroll-mt-28 bg-navy text-white px-6 sm:px-10 lg:px-14 py-16 lg:py-28 border-b border-navy/10 relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/8 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-16 lg:mb-24"
              >
                <span className="text-sky text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">Our Story</span>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
                  A Story of Growth
                </h2>
                <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  Our journey reflects years of dedication, craftsmanship, and commitment to helping brands stand out online.
                </p>
              </motion.div>

              <div className="relative">
                {/* Vertical center line (desktop only) */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 pointer-events-none" />

                <div className="space-y-16 lg:space-y-24">
                  {MILESTONES.map((m, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <div key={m.year} className="relative">
                        {/* Center dot */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-sky border-[3px] border-navy shadow-[0_0_12px_rgba(86,124,141,0.5)]"
                        />

                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                          {/* Image side */}
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}
                          >
                            <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                              <Still
                                src={m.img.startsWith("/") || m.img.startsWith("http") ? m.img : gallerySrc(m.img)}
                                alt={m.title}
                                className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </div>
                          </motion.div>

                          {/* Text side */}
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className={`${isLeft ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12 lg:text-right"}`}
                          >
                            <span className="inline-block text-sky text-2xl sm:text-3xl tracking-wider font-bold mb-2">
                              ({m.year})
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl text-white font-medium leading-snug mb-3">
                              {m.title}
                            </h3>
                            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg">
                              {m.desc}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Certifications & Marks - Certificates (Blue Background) */}
          <section id="certifications" className="scroll-mt-28 px-6 sm:px-10 lg:px-14 py-20 lg:py-28 bg-navy text-white relative overflow-hidden border-b border-navy/10">
            {/* Ambient glowing orbs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mb-14">
                <p className="text-sky text-xs font-semibold tracking-[0.25em] uppercase mb-3">Standards & Badges</p>
                <h2 className="font-display text-4xl sm:text-5xl text-white font-light tracking-tight">
                  Certifications & Compliance
                </h2>
                <p className="text-white/70 text-base sm:text-lg mt-3 leading-relaxed font-light">
                  Operating with full compliance to national labor codes and premier international export standards.
                </p>
              </div>

              {/* Certificate cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7">
                {[
                  {
                    name: "OEKO-TEX",
                    code: "Product Safety",
                    desc: "Textiles tested for harmful substances and certified safe for skin contact.",
                    image: "/images/certs/oeko-tex.webp",
                    pdf: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/certificates/oeko-tex.pdf",
                  },
                  {
                    name: "Fairtrade Certified",
                    code: "Fair Trade Certificate",
                    desc: "Ethical trade, fair price premiums, and community development funds.",
                    image: "/images/certs/fairtrade.webp",
                    pdf: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/certificates/fairtrade.pdf",
                  },
                  {
                    name: "FLOCERT",
                    code: "Fairtrade Certification",
                    desc: "Independent certification confirming compliance with Fairtrade standards.",
                    image: "/images/certs/flocert.webp",
                    pdf: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/certificates/flocert.pdf",
                  },
                  {
                    name: "GOTS",
                    code: "Organic Textiles",
                    desc: "Global Organic Textile Standard scope certificate, 2026-2027.",
                    image: "/images/certs/gots.webp",
                    pdf: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/certificates/gots.pdf",
                  },
                  {
                    name: "OCS",
                    code: "Organic Content",
                    desc: "Organic Content Standard scope certificate, 2026-2027.",
                    image: "/images/certs/ocs.webp",
                    pdf: "https://pub-3551751dc58044cb88a118691e50d580.r2.dev/certificates/ocs.pdf",
                  },
                ].map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col"
                  >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white border-2 border-white/20 group-hover:border-sky shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-white group-hover:text-sky transition-colors leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-sky text-xs tracking-wider uppercase font-semibold mt-1">
                        {cert.code}
                      </p>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                        {cert.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-[11px] tracking-[0.2em] uppercase font-semibold text-white/80 group-hover:text-sky transition-colors">
                        View certificate <span aria-hidden>→</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </PageScrollLayout>

        {/* Back to Top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden lg:flex fixed bottom-8 left-6 z-40 items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-navy/50 hover:text-navy transition-colors bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-xs border border-navy/10 shadow-xs"
        >
          <span>↑</span>
          Back to top
        </button>
      </main>
      <Footer />
    </>
  );
}
