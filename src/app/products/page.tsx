"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Women", "Men", "Kids"];

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

        {/* Gallery */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            >
              <div>
                <p className="text-olive-drab text-sm tracking-[0.3em] uppercase mb-4">Our Gallery</p>
                <h2 className="text-smoky-black text-2xl sm:text-3xl font-bold">
                  Product Showcase &amp; Specialisations
                </h2>
                <p className="text-smoky-black/60 max-w-xl mt-3 text-sm">
                  Explore our diverse range of high-fashion garments featuring hand-embroidery, placement printing, yarn dyeing, and specialized washes.
                </p>
              </div>

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
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.name}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease }}
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
