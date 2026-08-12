"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProductsPage() {
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
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-bone">
          <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4"
            >
              Our Products
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl"
            >
              High Fashion Knitwear &amp; Woven Garments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed"
            >
              From delicate beadwork to bold prints — our product range spans women&apos;s (60%),
              men&apos;s (20%), and children&apos;s (20%) collections across woven, knitted, and home textile categories.
            </motion.p>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Product Lines</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
                What We Manufacture
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {productLines.map((line, i) => (
                <motion.div
                  key={line.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="bg-bone/50 rounded-2xl p-8 border border-bone"
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Materials */}
        <section className="py-24 bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Sustainable Materials</p>
              <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold mb-12">
                Fabrics We Believe In
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {materialTags.map((mat, i) => (
                <motion.div
                  key={mat.label}
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="bg-floral-white rounded-2xl p-6 border border-smoky-black/5 hover:border-olive-drab/30 transition-colors group"
                >
                  <h4 className="text-smoky-black font-bold mb-2">{mat.label}</h4>
                  <p className="text-smoky-black/55 text-sm leading-relaxed">{mat.desc}</p>
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
