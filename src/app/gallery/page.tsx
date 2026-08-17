"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 260, damping: 24 };

const PIN_ASPECT = [
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[1/1]",
  "aspect-[5/6]",
  "aspect-[16/10]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/7]",
  "aspect-[16/9]",
];

function Pin({
  file,
  index,
  onOpen,
}: {
  file: string;
  index: number;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`relative w-full overflow-hidden rounded-2xl bg-bone text-left ${PIN_ASPECT[index % PIN_ASPECT.length]}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br from-bone via-olive-drab/25 to-bone animate-pulse transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        ref={imgRef}
        src={gallerySrc(file)}
        alt=""
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-[filter,opacity] duration-700 ${
          loaded ? "opacity-100 blur-0" : "opacity-70 blur-2xl"
        }`}
        draggable={false}
      />
    </button>
  );
}

function LightboxShot({
  src,
  dir,
  onPrev,
  onNext,
}: {
  src: string;
  dir: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="relative z-10 max-h-[86vh] max-w-full"
      initial={{ opacity: 0, x: dir * 56, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: dir * -56, scale: 0.96 }}
      transition={spring}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragEnd={(_, info) => {
        if (info.offset.x > 70) onPrev();
        else if (info.offset.x < -70) onNext();
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 rounded-xl bg-bone/20 animate-pulse blur-md" />
      )}
      <img
        src={src}
        alt=""
        onLoad={() => setLoaded(true)}
        className={`max-h-[86vh] max-w-full object-contain rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] cursor-grab active:cursor-grabbing transition-[filter,opacity] duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-60 blur-2xl"
        }`}
      />
    </motion.div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const [dir, setDir] = useState(0);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setDir(-1);
    setActive((i) => (i === null ? i : (i + GALLERY_FILES.length - 1) % GALLERY_FILES.length));
  }, []);
  const next = useCallback(() => {
    setDir(1);
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

  return (
    <>
      <Navbar />
      <main className="pt-28 bg-bone min-h-screen">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center overflow-hidden">
          <motion.p
            className="text-olive-drab text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Lookbook
          </motion.p>
          <motion.h1
            className="text-smoky-black text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
          >
            Gallery
          </motion.h1>
        </header>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="columns-2 md:columns-3 gap-3 sm:gap-4">
            {GALLERY_FILES.map((file, i) => (
              <div key={file} className="mb-3 sm:mb-4 break-inside-avoid">
                <Pin
                  file={file}
                  index={i}
                  onOpen={() => {
                    setDir(0);
                    setActive(i);
                  }}
                />
              </div>
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
          >
            <motion.div
              className="absolute inset-0 bg-smoky-black/80 backdrop-blur-md"
              onClick={close}
            />
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 z-10 text-floral-white/70 hover:text-floral-white text-sm tracking-widest uppercase"
              aria-label="Close"
            >
              Close
            </button>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full border border-floral-white/25 text-floral-white/80"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <AnimatePresence mode="wait" custom={dir}>
              <LightboxShot
                key={GALLERY_FILES[active]}
                src={gallerySrc(GALLERY_FILES[active])}
                dir={dir}
                onPrev={prev}
                onNext={next}
              />
            </AnimatePresence>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full border border-floral-white/25 text-floral-white/80"
              aria-label="Next"
            >
              &#8594;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
