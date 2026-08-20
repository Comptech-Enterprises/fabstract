"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { EASE } from "@/lib/motion";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const total = GALLERY_FILES.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i + total - 1) % total)),
    [total],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const mid = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft + child.clientWidth / 2 - mid);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setCurrent(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Lookbook"
          title="Gallery"
          subtitle="Stills from the floor and the line — scroll or drag through, click a frame to open."
        />

        <section className="py-10 sm:py-14">
          <div
            ref={trackRef}
            className="film-scroll flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-4"
          >
            {GALLERY_FILES.map((file, i) => (
              <button
                key={file}
                type="button"
                onClick={() => setActive(i)}
                className="group relative shrink-0 snap-center h-[34vh] sm:h-[72vh] w-[72vw] sm:w-[62vw] lg:w-[48vw] overflow-hidden bg-sand"
              >
                <img
                  src={gallerySrc(file)}
                  alt=""
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 bg-cream px-2 py-1 text-[10px] tracking-[0.14em] text-taupe">
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {GALLERY_FILES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to frame ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-[3px] transition-all ${
                    current === i ? "w-8 bg-ink" : "w-3 bg-sand hover:bg-taupe"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-taupe hidden sm:block">Drag or scroll to browse</p>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 z-20 text-[11px] uppercase tracking-[0.2em] text-cream/80 hover:text-cream"
            >
              Close
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 sm:left-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              ←
            </button>

            <div className="relative z-10 flex max-h-full flex-col items-center gap-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={GALLERY_FILES[active]}
                  src={gallerySrc(GALLERY_FILES[active])}
                  alt=""
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) next();
                    if (info.offset.x > 80) prev();
                  }}
                  className="max-h-[78vh] max-w-full cursor-grab rounded-none object-contain active:cursor-grabbing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  draggable={false}
                />
              </AnimatePresence>

              <div className="flex items-center gap-3 text-cream/70">
                <span className="text-base text-cream">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-cream/40" />
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="absolute right-3 sm:right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
