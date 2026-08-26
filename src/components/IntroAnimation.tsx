"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function GlobeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      className={className}
    >
      <circle cx="50" cy="50" r="42" />
      <ellipse cx="50" cy="50" rx="20" ry="42" />
      <path d="M12 35h76" />
      <path d="M8 50h84" />
      <path d="M12 65h76" />
    </svg>
  );
}

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"typing" | "pause" | "zoom" | "done">("typing");
  const [charIndex, setCharIndex] = useState(0);

  const topText = "FABSTRACT";
  const bottomLeft = "CL";
  const bottomRight = "THING";
  const fullLength = topText.length + 1 + bottomLeft.length + 1 + bottomRight.length;

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
      setPhase("pause");
      return;
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

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden select-none"
      initial={{ opacity: 1 }}
      animate={isZooming ? { opacity: [1, 1, 1, 0] } : { opacity: 1 }}
      transition={
        isZooming
          ? { duration: 2.0, times: [0, 0.6, 0.85, 1], ease: [0.76, 0, 0.24, 1] }
          : { duration: 0.2 }
      }
      style={{
        mixBlendMode: "screen",
        pointerEvents: isZooming ? "none" : "auto",
      }}
    >
      <div className="relative text-center px-4">
        {/* Top Text — "FABSTRACT" (Cutout reveals background video) */}
        <motion.div
          className="font-display font-black text-black text-center leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 12vw, 11rem)" }}
          animate={isZooming ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span>{topText.slice(0, topVisible)}</span>
          {showCursor && charIndex <= topText.length && (
            <span className="animate-blink border-r-[3px] border-black ml-0.5">&nbsp;</span>
          )}
        </motion.div>

        {/* Bottom Text — "CL [GLOBE] THING" */}
        {charIndex > topText.length && (
          <div
            className="mt-2 sm:mt-4 flex items-center justify-center font-display font-black text-black tracking-[0.18em] sm:tracking-[0.25em]"
            style={{ fontSize: "clamp(1.2rem, 4.5vw, 4.2rem)" }}
          >
            {/* Left text "CL" (Fades into white on zoom) */}
            <motion.span
              animate={isZooming ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {bottomLeft.slice(0, bottomLeftVisible)}
            </motion.span>

            {/* Globe Icon (ONLY ELEMENT THAT ZOOMS & EXPANDS VIDEO CUTOUT) */}
            {globeVisible && (
              <motion.span
                className="inline-flex items-center justify-center origin-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isZooming
                    ? {
                        scale: [1, 2.5, 90, 450],
                        opacity: [1, 1, 1, 0],
                      }
                    : { scale: 1, opacity: 1 }
                }
                transition={
                  isZooming
                    ? {
                        duration: 2.0,
                        times: [0, 0.25, 0.7, 1],
                        ease: [0.76, 0, 0.24, 1],
                      }
                    : { duration: 0.3, ease: "easeOut" }
                }
                onAnimationComplete={isZooming ? handleZoomComplete : undefined}
              >
                <GlobeSVG className="w-[1em] h-[1em] mx-[0.05em] text-black" />
              </motion.span>
            )}

            {/* Right text "THING" (Fades into white on zoom) */}
            <motion.span
              animate={isZooming ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {bottomRight.slice(0, bottomRightVisible)}
            </motion.span>

            {showCursor && charIndex > topText.length && (
              <span className="animate-blink border-r-[3px] border-black ml-0.5">&nbsp;</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
