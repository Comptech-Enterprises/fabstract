"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { EASE } from "@/lib/motion";

function ImageMarquee({
  files,
  reverse,
  onOpen,
}: {
  files: readonly string[];
  reverse?: boolean;
  onOpen: (file: string) => void;
}) {
  const row = [...files, ...files];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-6 sm:gap-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee-gallery"} group-hover:[animation-play-state:paused]`}
      >
        {row.map((file, i) => (
          <button
            key={`${file}-${i}`}
            type="button"
            onClick={() => onOpen(file)}
            className="relative h-[70vh] min-h-[420px] w-[min(72vw,28rem)] sm:w-[min(42vw,36rem)] shrink-0 overflow-hidden rounded-lg bg-sand"
          >
            <img
              src={gallerySrc(file)}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) => (i === null ? i : (i + GALLERY_FILES.length - 1) % GALLERY_FILES.length));
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % GALLERY_FILES.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  function openFile(file: string) {
    const index = GALLERY_FILES.indexOf(file as (typeof GALLERY_FILES)[number]);
    if (index >= 0) setActive(index);
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Lookbook"
          title="Gallery"
          subtitle="Stills from the floor and the line — click a frame to open."
        />
        <section className="py-12 space-y-16 sm:space-y-24 group">
          <ImageMarquee files={GALLERY_FILES} onOpen={openFile} />
          <ImageMarquee files={[...GALLERY_FILES].reverse()} reverse onOpen={openFile} />
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <div className="absolute inset-0 bg-ink/70" onClick={close} />
            <button type="button" onClick={close} className="absolute top-5 right-5 z-10 text-cream text-sm">
              Close
            </button>
            <button type="button" onClick={prev} className="absolute left-4 z-10 text-cream" aria-label="Previous">
              ←
            </button>
            <img
              src={gallerySrc(GALLERY_FILES[active])}
              alt=""
              className="relative z-10 max-h-[85vh] max-w-full object-contain rounded-lg"
            />
            <button type="button" onClick={next} className="absolute right-4 z-10 text-cream" aria-label="Next">
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
