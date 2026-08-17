"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;
const PAGE_SIZE = 12;

export default function GalleryPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const shown = GALLERY_FILES.slice(0, visible);
  const hasMore = visible < GALLERY_FILES.length;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible((n) => Math.min(n + PAGE_SIZE, GALLERY_FILES.length));
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, visible]);

  return (
    <>
      <Navbar />
      <main className="pt-16">
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
              Product Showcase
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="text-smoky-black/70 text-lg max-w-3xl leading-relaxed"
            >
              Showing {shown.length} of {GALLERY_FILES.length} in shoot series order.
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-floral-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {shown.map((file, i) => {
                const label = file.replace(/\.jpg$/i, "").replaceAll("_", " ");
                return (
                  <motion.a
                    key={file}
                    href={gallerySrc(file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: (i % PAGE_SIZE) * 0.03, ease }}
                    className="group bg-bone/50 rounded-2xl overflow-hidden border border-smoky-black/5 hover:border-olive-drab/30 transition-all duration-300 shadow-sm"
                  >
                    <div className="aspect-[3/4] bg-bone relative overflow-hidden">
                      <img
                        src={gallerySrc(file)}
                        alt={label}
                        loading={i < 4 ? "eager" : "lazy"}
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 sm:p-4 bg-floral-white">
                      <p className="text-smoky-black/70 text-xs font-medium tracking-wide">
                        {label}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {hasMore && (
              <div
                ref={sentinelRef}
                className="mt-12 flex justify-center text-smoky-black/40 text-sm"
              >
                Loading more…
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
