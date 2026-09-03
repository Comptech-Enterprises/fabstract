"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { GlobeInstance } from "globe.gl";
import type { WebGLRendererParameters } from "three";

function InlineGlobe({ size }: { size: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<unknown>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || size < 8) return;

    let destroyed = false;

    import("globe.gl").then(({ default: GlobeGL }) => {
      if (destroyed || !mountRef.current) return;

      const GlobeFactory = GlobeGL as unknown as (
        opts?: { rendererConfig?: WebGLRendererParameters }
      ) => (el: HTMLElement) => GlobeInstance;

      const globe = GlobeFactory({
        rendererConfig: { alpha: true, antialias: true },
      })(mountRef.current as HTMLElement);
      globeRef.current = globe;

      globe
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(false);

      globe.renderer().setClearColor(0x000000, 0);
      globe.scene().background = null;

      globe.width(size);
      globe.height(size);
      globe.pointOfView({ lat: 20, lng: 0, altitude: 1.8 }, 0);

      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 3;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
    });

    return () => {
      destroyed = true;
      if (globeRef.current) {
        const g = globeRef.current as { _destructor?: () => void };
        g._destructor?.();
      }
      if (mount) mount.innerHTML = "";
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className="inline-block overflow-hidden rounded-full"
      style={{ width: size, height: size, verticalAlign: "middle" }}
    />
  );
}

const topText = "FABSTRACT";
const bottomLeft = "CL";
const bottomRight = "THING";

/* ── One row layout, rendered twice (see IntroAnimation below):
   once as the "cutout" layer (black text, mix-blend-mode: screen, globe
   slot left empty) and once as the "globe" layer (text made invisible,
   normal blend mode, real globe dropped into the slot). Both layers share
   the exact same markup/fonts/tracking, so the browser's layout engine
   guarantees the globe lines up with its reserved gap — no manual
   position measurement needed. ── */
function IntroRow({
  cutout,
  topVisible,
  showTopCursor,
  bottomLeftVisible,
  bottomRightVisible,
  showBottomCursor,
  showBottomRow,
  globeVisible,
  globeSize,
  isZooming,
  bottomRowRef,
}: {
  cutout: boolean;
  topVisible: number;
  showTopCursor: boolean;
  bottomLeftVisible: number;
  bottomRightVisible: number;
  showBottomCursor: boolean;
  showBottomRow: boolean;
  globeVisible: boolean;
  globeSize: number;
  isZooming: boolean;
  bottomRowRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const textColor = cutout ? "black" : "transparent";
  const cursorColor = cutout ? "black" : "transparent";

  return (
    <div className="relative text-center px-4">
      {/* Top Text — "FABSTRACT" */}
      <motion.div
        className="font-display font-black text-center leading-[0.9] tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 12vw, 11rem)", color: textColor }}
        animate={isZooming ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span>{topText.slice(0, topVisible)}</span>
        {showTopCursor && (
          <span
            className="animate-blink border-r-[3px] ml-0.5"
            style={{ borderColor: cursorColor }}
          >
            &nbsp;
          </span>
        )}
      </motion.div>

      {/* Bottom Text — "CL [GLOBE] THING" */}
      {showBottomRow && (
        <div
          ref={bottomRowRef}
          className="mt-2 sm:mt-4 flex items-center justify-center font-display font-black tracking-[0.18em] sm:tracking-[0.25em]"
          style={{ fontSize: "clamp(1.2rem, 4.5vw, 4.2rem)", color: textColor }}
        >
          <motion.span
            animate={isZooming ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {bottomLeft.slice(0, bottomLeftVisible)}
          </motion.span>

          {globeVisible && (
            <motion.span
              className="inline-flex items-center justify-center origin-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isZooming
                  ? { scale: [1, 4, 8], opacity: [1, 1, 0] }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                isZooming
                  ? { duration: 1.6, times: [0, 0.5, 1], ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0.3, ease: "easeOut" }
              }
            >
              {cutout ? (
                <span
                  aria-hidden
                  className="inline-block"
                  style={{ width: globeSize || 1, height: globeSize || 1 }}
                />
              ) : (
                globeSize > 0 && <InlineGlobe size={globeSize} />
              )}
            </motion.span>
          )}

          <motion.span
            animate={isZooming ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {bottomRight.slice(0, bottomRightVisible)}
          </motion.span>

          {showBottomCursor && (
            <span
              className="animate-blink border-r-[3px] ml-0.5"
              style={{ borderColor: cursorColor }}
            >
              &nbsp;
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"typing" | "pause" | "zoom" | "done">("typing");
  const [charIndex, setCharIndex] = useState(0);
  const [globeSize, setGlobeSize] = useState(0);
  const globeContainerRef = useRef<HTMLDivElement>(null);

  const fullLength = topText.length + 1 + bottomLeft.length + 1 + bottomRight.length;

  /* ── Measure font size for globe (once the bottom row has mounted) ── */
  const bottomRowMounted = charIndex > topText.length;
  useEffect(() => {
    if (!bottomRowMounted) return;
    const measure = () => {
      const el = globeContainerRef.current;
      if (!el) return;
      const computed = parseFloat(getComputedStyle(el).fontSize);
      if (computed > 0) setGlobeSize(Math.round(computed));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [bottomRowMounted]);

  /* ── Scroll Lock during animation ── */
  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [phase]);

  /* ── Typing animation ── */
  useEffect(() => {
    if (phase !== "typing") return;
    if (charIndex >= fullLength) {
      const timer = setTimeout(() => setPhase("pause"), 50);
      return () => clearTimeout(timer);
    }
    const delay = charIndex === 0 ? 350 : charIndex === topText.length ? 250 : 65;
    const timer = setTimeout(() => setCharIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [charIndex, phase, fullLength]);

  /* ── Pause before zoom ── */
  useEffect(() => {
    if (phase !== "pause") return;
    const timer = setTimeout(() => setPhase("zoom"), 500);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleZoomComplete = useCallback(() => {
    if (phase === "zoom") {
      setPhase("done");
      onComplete();
    }
  }, [phase, onComplete]);

  const topVisible = Math.min(charIndex, topText.length);
  const bottomStart = topText.length + 1;
  const bottomChars = Math.max(0, charIndex - bottomStart);
  const bottomLeftVisible = Math.min(bottomChars, bottomLeft.length);
  const globeVisible = bottomChars > bottomLeft.length;
  const bottomRightStart = bottomLeft.length + 1;
  const bottomRightVisible = Math.max(0, bottomChars - bottomRightStart);

  const showCursor = phase === "typing";
  const isZooming = phase === "zoom";
  const showBottomRow = charIndex > topText.length;

  if (phase === "done") return null;

  const rowProps = {
    topVisible,
    showTopCursor: showCursor && charIndex <= topText.length,
    bottomLeftVisible,
    bottomRightVisible,
    showBottomCursor: showCursor && charIndex > topText.length,
    showBottomRow,
    globeVisible,
    globeSize,
    isZooming,
  };

  return (
    <>
      {/* Layer 1 — the cutout text, revealing the video behind it */}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden select-none"
        initial={{ opacity: 1 }}
        animate={isZooming ? { opacity: [1, 1, 0] } : { opacity: 1 }}
        transition={
          isZooming
            ? { duration: 1.6, times: [0, 0.6, 1], ease: [0.22, 1, 0.36, 1] }
            : { duration: 0.2 }
        }
        style={{
          mixBlendMode: "screen",
          pointerEvents: isZooming ? "none" : "auto",
        }}
      >
        <IntroRow cutout bottomRowRef={globeContainerRef} {...rowProps} />
      </motion.div>

      {/* Layer 2 — the real globe, laid out identically but with the text
          made invisible, so it isn't screen-blended and keeps its true
          green/grey/blue colors */}
      {globeVisible && (
        <motion.div
          className="fixed inset-0 z-[101] flex items-center justify-center overflow-hidden select-none pointer-events-none"
          initial={{ opacity: 1 }}
          animate={isZooming ? { opacity: [1, 1, 0] } : { opacity: 1 }}
          transition={
            isZooming
              ? { duration: 1.6, times: [0, 0.6, 1], ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.2 }
          }
          onAnimationComplete={isZooming ? handleZoomComplete : undefined}
        >
          <IntroRow cutout={false} {...rowProps} />
        </motion.div>
      )}
    </>
  );
}
