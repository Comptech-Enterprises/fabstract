"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
function Caret() {
  return (
    <span aria-hidden className="animate-blink relative inline-block w-0 align-baseline">
      <span className="absolute left-0 -top-[0.78em] h-[0.8em] w-[3px] bg-black" />
    </span>
  );
}

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"typing" | "earth" | "pause" | "zoom" | "done">("typing");
  const [charIndex, setCharIndex] = useState(0);

  const topText = "FABSTRACT";
  const bottomLeft = "CL";
  const bottomRight = "THING";
  const fullLength = topText.length + 1 + bottomLeft.length + 1 + bottomRight.length;

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);
    const prevent = (e: Event) => e.preventDefault();
    window.addEventListener("wheel", prevent, { passive: false });
    window.addEventListener("touchmove", prevent, { passive: false });
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("touchmove", prevent);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (charIndex >= fullLength) {
      const t = setTimeout(() => setPhase("earth"), 150);
      return () => clearTimeout(t);
    }
    const globeStep = topText.length + 1 + bottomLeft.length;
    const delay = charIndex === 0 ? 350 : charIndex === topText.length ? 250 : charIndex === globeStep ? 140 : 65;
    const t = setTimeout(() => setCharIndex((i) => i + 1), delay);
    return () => clearTimeout(t);
  }, [charIndex, phase, fullLength]);

  useEffect(() => {
    if (phase !== "earth") return;
    const t = setTimeout(() => setPhase("pause"), 200);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => setPhase("zoom"), 650);
    return () => clearTimeout(t);
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
  const globeTyped = bottomChars > bottomLeft.length;
  const bottomRightVisible = Math.min(Math.max(0, bottomChars - bottomLeft.length - 1), bottomRight.length);

  const earthVisible = globeTyped || phase !== "typing";
  const showCursor = phase === "typing";
  const isZooming = phase === "zoom";

  if (phase === "done") return null;

  return (
    <>
      {/* 1. Solid white intro layer */}
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
          pointerEvents: isZooming ? "none" : "auto",
        }}
      >
        <div className="relative text-center px-4">
          <motion.div
            className="font-display font-black text-black text-center leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 12vw, 11rem)" }}
            animate={isZooming ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span>{topText.slice(0, topVisible)}</span>
            {showCursor && charIndex <= topText.length && <Caret />}
            <span className="invisible">{topText.slice(topVisible)}</span>
          </motion.div>

          {charIndex > topText.length && (
            <div
              className="mt-2 sm:mt-4 flex items-center justify-center font-display font-black text-black tracking-[0.18em] sm:tracking-[0.25em]"
              style={{ fontSize: "clamp(1.2rem, 4.5vw, 4.2rem)" }}
            >
              <motion.span
                animate={isZooming ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {bottomLeft.slice(0, bottomLeftVisible)}
                {showCursor && !globeTyped && <Caret />}
                <span className="invisible">{bottomLeft.slice(bottomLeftVisible)}</span>
              </motion.span>

              {/* Slot where the globe is "typed" in (globe itself lives in the layer above) */}
              <span className="inline-block w-[1.05em] h-[1.05em] -ml-[0.12em] sm:-ml-[0.14em] mr-[0.05em] sm:mr-[0.06em]" />
              {showCursor && bottomChars === bottomLeft.length + 1 && <Caret />}

              <motion.span
                animate={isZooming ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {bottomRight.slice(0, bottomRightVisible)}
                {showCursor && bottomChars > bottomLeft.length + 1 && <Caret />}
                <span className="invisible">{bottomRight.slice(bottomRightVisible)}</span>
              </motion.span>
            </div>
          )}
        </div>
      </motion.div>

      {/* 2. Solid Opaque Layer for the Earth Globe */}
      {earthVisible && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="relative text-center px-4">
            {/* Mirror top text height for exact vertical alignment */}
            <div
              className="font-display font-black leading-[0.9] tracking-tight invisible"
              style={{ fontSize: "clamp(2.5rem, 12vw, 11rem)" }}
            >
              <span>{topText}</span>
            </div>

            <div
              className="mt-2 sm:mt-4 flex items-center justify-center font-display font-black tracking-[0.18em] sm:tracking-[0.25em]"
              style={{ fontSize: "clamp(1.2rem, 4.5vw, 4.2rem)" }}
            >
              <span className="invisible">{bottomLeft}</span>

              <motion.span
                className="inline-flex items-center justify-center origin-center rounded-full overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isZooming
                    ? { scale: [1, 4, 8], opacity: [1, 1, 0] }
                    : { scale: [0.3, 1.12, 1], opacity: 1 }
                }
                transition={
                  isZooming
                    ? { duration: 1.6, times: [0, 0.5, 1], ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                }
                onAnimationComplete={isZooming ? handleZoomComplete : undefined}
              >
                <img
                  src="/intro/globe.gif"
                  alt="O"
                  className="w-[1.05em] h-[1.05em] -ml-[0.12em] sm:-ml-[0.14em] mr-[0.05em] sm:mr-[0.06em] object-contain inline-block align-middle select-none pointer-events-none"
                  style={{ clipPath: "circle(44.5%)", transform: "scale(1.12)" }}
                />
              </motion.span>

              <span className="invisible">{bottomRight}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
