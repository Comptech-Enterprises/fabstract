"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { EASE } from "@/lib/motion";

const COLUMNS = 3;
const COLUMN_SPEED = [-60, 40, -30] as const;

function ParallaxColumn({
  files,
  speed,
  onOpen,
}: {
  files: { file: string; index: number }[];
  speed: number;
  onOpen: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <div ref={ref} className="flex-1">
      <motion.div style={{ y }} className="flex flex-col gap-4 sm:gap-6">
        {files.map(({ file, index }) => (
          <button
            key={file}
            type="button"
            onClick={() => onOpen(index)}
            className="group relative w-full overflow-hidden rounded-2xl bg-sand aspect-[4/5]"
          >
            <img
              src={gallerySrc(file)}
              alt=""
              loading={index < 4 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute bottom-3 left-3 bg-white/90 border border-sand rounded px-2 py-1 text-[10px] tracking-[0.14em] text-stone opacity-0 group-hover:opacity-100 transition-opacity">
              {String(index + 1).padStart(2, "0")} / {String(GALLERY_FILES.length).padStart(2, "0")}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const total = GALLERY_FILES.length;

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

  const columns: { file: string; index: number }[][] = Array.from({ length: COLUMNS }, () => []);
  GALLERY_FILES.forEach((file, i) => {
    columns[i % COLUMNS].push({ file, index: i });
  });

  return (
    <>
      <Navbar />
      <main className="bg-cream overflow-hidden">
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-5 sm:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">Lookbook</p>
          <h1 className="mt-4 font-display font-bold text-ink text-4xl sm:text-6xl tracking-tight">
            Gallery
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-stone text-base sm:text-lg leading-relaxed">
            Stills from the floor and the line. Scroll to browse, click a frame to open.
          </p>
        </section>

        <section className="px-5 sm:px-8 pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl flex gap-4 sm:gap-6">
            {columns.map((col, i) => (
              <ParallaxColumn key={i} files={col} speed={COLUMN_SPEED[i % COLUMN_SPEED.length]} onOpen={setActive} />
            ))}
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
              className="absolute inset-0 bg-black/80"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 z-20 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:text-white"
            >
              Close
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 sm:left-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
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

              <div className="flex items-center gap-3 text-white/70">
                <span className="text-base text-white">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-white/40" />
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="absolute right-3 sm:right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
