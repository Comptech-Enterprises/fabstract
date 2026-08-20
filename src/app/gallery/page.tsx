"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { EASE } from "@/lib/motion";

/** Mosaic rhythm — repeats over the file list so any count lays out cleanly. */
const SPANS = [
  "sm:col-span-6 lg:col-span-5 aspect-[4/3]",
  "sm:col-span-6 lg:col-span-4 aspect-[4/5] lg:mt-10",
  "sm:col-span-6 lg:col-span-3 aspect-[3/4]",
  "sm:col-span-6 lg:col-span-4 aspect-square lg:mt-10",
  "sm:col-span-6 lg:col-span-3 aspect-[3/4] lg:mt-20",
  "sm:col-span-6 lg:col-span-5 aspect-[4/3]",
];

function Tile({
  file,
  index,
  onOpen,
}: {
  file: string;
  index: number;
  onOpen: (index: number) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative col-span-12 overflow-hidden rounded-lg bg-sand ${SPANS[index % SPANS.length]}`}
      initial={reduce ? undefined : { opacity: 0, y: 40, clipPath: "inset(12% 12% 12% 12%)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: EASE }}
      aria-label={`Open frame ${index + 1}`}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y, scale: 1.16 }}
      >
        <img
          src={gallerySrc(file)}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="font-script text-lg text-cream">Frame {String(index + 1).padStart(2, "0")}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-cream/80">View</span>
      </div>
    </motion.button>
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

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <PageIntro
          eyebrow="Lookbook"
          title="Gallery"
          subtitle="Stills from the floor and the line — click a frame to open."
        />

        <section className="w-full px-3 sm:px-5 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-12 gap-3 sm:gap-5">
            {GALLERY_FILES.map((file, i) => (
              <Tile key={file} file={file} index={i} onOpen={setActive} />
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
                  className="max-h-[78vh] max-w-full cursor-grab rounded-lg object-contain active:cursor-grabbing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  draggable={false}
                />
              </AnimatePresence>

              <div className="flex items-center gap-3 text-cream/70">
                <span className="font-script text-base text-cream">
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
