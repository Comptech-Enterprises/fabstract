"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

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

const filters = ["All", "Women", "Men", "Kids"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

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
              Our Gallery
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-smoky-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl"
            >
              Product Showcase &amp; Specialisations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed"
            >
              Explore our diverse range of high-fashion garments featuring hand-embroidery, placement printing, yarn dyeing, and specialized washes.
            </motion.p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-12">
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
                    <span className="text-olive-drab text-xs font-semibold">{item.technique}</span>
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
