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
    title: "Where It All Began",
    desc: "Fabstract made a humble beginning with just 25 sewing machines, operating as a job-work unit from rented premises and primarily supplying garment exporters in the surrounding area. What began on a small scale would become the foundation for a much larger vision.",
    img: "/images/timeline/1991-workshop.png",
  },
  {
    year: "1996",
    title: "Our First Step into Exports",
    desc: "After 5–6 years of consistent quality and reliable deliveries, Fabstract secured its first direct export order. It was a defining milestone that marked our transition from a local job-work unit to a garment exporter, opening the door to new markets and bigger opportunities.",
    img: "/images/1996-exports.webp",
  },
  {
    year: "1998",
    title: "Taking Our First Big Step",
    desc: "With growing experience and a stronger foundation, we expanded into our own manufacturing facility in Noida. This was an important step in our journey, allowing us to build greater production capabilities and take on bigger opportunities.",
    img: "/images/timeline/1998-noida.jpg",
  },
  {
    year: "2001",
    title: "Our First Factory in Noida",
    desc: "A major milestone in our journey, C-57 became Fabstract’s first factory in Noida. It marked an important step in building our own manufacturing infrastructure and laying the foundation for the growth that would follow.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2005",
    title: "Building Beyond Production",
    desc: "We began strengthening our product development and sampling capabilities, moving beyond manufacturing to become a more complete apparel partner. This helped us better understand our customers’ needs, develop new products and support their collections from an earlier stage.",
    img: "/images/timeline/2005-knits.png",
  },
  {
    year: "2005",
    title: "Expanding Our Footprint",
    desc: "With growing business and a vision to expand our capabilities, we established our second factory at C-56, right next to C-57. This expansion strengthened our manufacturing base and prepared us to take on greater opportunities.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2008",
    title: "Taking Greater Control of Our Supply Chain",
    desc: "We established our own knitting unit with a clear ambition: to move towards greater vertical integration. By bringing fabric production closer to our garment manufacturing operations, we took another step towards improving control, consistency and efficiency.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2018",
    title: "Growing with a Greater Purpose",
    desc: "We continued to evolve as a business, placing greater emphasis on responsible manufacturing, worker welfare and ethical practices. Our growth was no longer just about producing more; it was about building a company that our customers, employees and partners could believe in.",
    img: "/images/timeline/2018-fairtrade.jpg",
  },
  {
    year: "2020",
    title: "A New Chapter in Manufacturing",
    desc: "We expanded into a significantly larger facility at 140-A, marking another major step in Fabstract’s manufacturing journey. The new factory represented our continued investment in infrastructure, production capabilities and our ability to serve growing customer requirements.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2020",
    title: "Taking Responsibility Beyond Manufacturing",
    desc: "Our C-57 facility became Fairtrade-compliant, marking an important milestone in our commitment to ethical manufacturing and worker welfare. It reflected our belief that progress should not be measured by production alone, but also by the positive impact we create for the people behind every garment.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2021",
    title: "Preparing for the Next Chapter",
    desc: "We continued expanding our material development capabilities, exploring more responsible fabric choices and improving the way we approached manufacturing. These efforts reflected our ambition to meet the changing expectations of global brands without compromising on quality.",
    img: "/images/timeline/2021-gots.png",
  },
  {
    year: "2022",
    title: "Extending Our Fairtrade Commitment",
    desc: "Building on the progress at C-57, our 140-A facility achieved Fairtrade compliance. This was another step towards embedding responsible manufacturing practices across our growing operations.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2024",
    title: "Earning Our Place on the Global Stage",
    desc: "Our journey from a small job-work unit had grown into a manufacturing operation serving international customers across markets. With greater scale, stronger capabilities and decades of hands-on experience, we continued building relationships with brands that expect consistency, quality and dependable execution.",
    img: "/images/2024-global.webp",
  },
  {
    year: "2025",
    title: "Building for the Future",
    desc: "We established our newest facility at D-150, continuing our investment in manufacturing infrastructure and strengthening our capacity for the next phase of growth. From a humble beginning with 25 sewing machines, each new facility has brought us closer to our ambition of competing global apparel industry.",
    img: "/images/timeline/placeholder.jpg",
  },
  {
    year: "2026",
    title: "Competing Through Capability",
    desc: "Today, Fabstract stands on more than three decades of manufacturing experience. We continue to invest in our people, processes and capabilities, striving to deliver the quality, responsiveness and reliability expected by leading global apparel brands. We remain grounded in the values that started our journey, with the ambition to keep raising the standard of what we can achieve.",
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
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent h-2/3 pointer-events-none z-[5]" />
          <div className="absolute bottom-0 left-0 px-6 sm:px-10 lg:px-14 pb-8 lg:pb-12 pt-12 pr-12 sm:pr-24 z-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-navy/50 backdrop-blur-sm [mask-image:radial-gradient(ellipse_95%_95%_at_20%_80%,black_45%,transparent_100%)]"
            />
            <div className="relative z-10">
              <p className="text-sky text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-3">Who We Are</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.08] max-w-3xl [text-shadow:0_2px_24px_rgba(12,18,28,0.4)]">
                Manufacturing with purpose, craft, and precision
              </h1>
            </div>
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
                              {m.year}
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
