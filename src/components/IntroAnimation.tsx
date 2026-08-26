"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BANNER_VIDEO } from "@/data/hero";

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

  useEffect(() => {
    if (phase !== "typing") return;
    if (charIndex >= fullLength) {
      setPhase("pause");
      return;
    }
    const delay = charIndex === 0 ? 400 : charIndex === topText.length ? 300 : 70;
    const timer = setTimeout(() => setCharIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [charIndex, phase, fullLength]);

  useEffect(() => {
    if (phase !== "pause") return;
    const timer = setTimeout(() => setPhase("zoom"), 600);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "zoom") return;
    const timer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
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

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100]"
          style={{ pointerEvents: isZooming ? "none" : "auto" }}
        >
          <video
            src={BANNER_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-white"
            style={{ mixBlendMode: "screen" }}
          >
            <div className="relative text-center select-none">
              <div
                className="font-display font-black text-black text-center leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(4rem, 15vw, 14rem)" }}
              >
                <span>{topText.slice(0, topVisible)}</span>
                {showCursor && charIndex <= topText.length && (
                  <span className="animate-blink border-r-[3px] border-black ml-0.5">&nbsp;</span>
                )}
              </div>

              {charIndex > topText.length && (
                <div
                  className="mt-1 sm:mt-2 flex items-center justify-center font-display font-black text-black tracking-[0.25em]"
                  style={{ fontSize: "clamp(1.8rem, 5.5vw, 5rem)" }}
                >
                  <span>{bottomLeft.slice(0, bottomLeftVisible)}</span>

                  {globeVisible && (
                    <motion.span
                      className="inline-flex items-center justify-center origin-center"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isZooming
                          ? { scale: 120, opacity: 1 }
                          : { scale: 1, opacity: 1 }
                      }
                      transition={
                        isZooming
                          ? { duration: 2.5, ease: [0.76, 0, 0.24, 1] }
                          : { duration: 0.3, ease: "easeOut" }
                      }
                    >
                      <GlobeSVG className="w-[1em] h-[1em] -mx-[0.05em]" />
                    </motion.span>
                  )}

                  <span>{bottomRight.slice(0, bottomRightVisible)}</span>

                  {showCursor && charIndex > topText.length && (
                    <span className="animate-blink border-r-[3px] border-black ml-0.5">&nbsp;</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
