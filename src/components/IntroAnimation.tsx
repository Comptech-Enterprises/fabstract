"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function GlobeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
    >
      <defs>
        <clipPath id="globe-clip">
          <circle cx="200" cy="200" r="176" />
        </clipPath>
        <radialGradient id="globe-shading" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="85%" stopColor="currentColor" stopOpacity="0.06" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </radialGradient>
        <radialGradient id="globe-highlight" cx="35%" cy="32%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ocean background */}
      <circle cx="200" cy="200" r="176" fill="currentColor" fillOpacity="0.04" />

      <g clipPath="url(#globe-clip)">
        {/* Grid lines */}
        <ellipse cx="200" cy="200" rx="60" ry="176" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="200" rx="120" ry="176" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="200" rx="176" ry="176" stroke="currentColor" strokeWidth="0" />
        <ellipse cx="200" cy="108" rx="156" ry="22" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="156" rx="168" ry="24" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="200" rx="176" ry="26" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="244" rx="168" ry="24" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
        <ellipse cx="200" cy="292" rx="156" ry="22" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />

        {/* Greenland */}
        <path
          d="M128 58 C124 56, 118 58, 114 62 C110 66, 108 72, 110 78 C112 84, 118 88, 124 90 C130 92, 136 90, 140 86 C144 82, 146 76, 144 70 C142 64, 136 60, 128 58 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
        />

        {/* North America — Canada + USA */}
        <path
          d="M38 90 C42 86, 50 82, 58 80 C64 78, 72 76, 78 74 C84 72, 90 68, 94 72 C98 76, 96 82, 92 86 C88 90, 82 92, 78 96 C74 100, 72 104, 76 108 C80 112, 86 114, 90 118 C94 122, 96 128, 92 132 C88 136, 82 138, 78 136 C74 134, 70 130, 66 126 C62 122, 58 118, 54 116 C50 114, 44 114, 40 118 C36 122, 34 128, 36 134 C38 138, 42 140, 44 136 L48 130 C50 128, 54 130, 52 134 C50 138, 46 142, 42 144 C38 146, 34 144, 32 140 C28 134, 26 126, 28 118 C30 110, 34 104, 36 98 C38 94, 38 92, 38 90 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Central America */}
        <path
          d="M52 148 C54 146, 58 144, 60 148 C62 152, 60 158, 58 162 C56 166, 54 170, 56 174 C58 178, 62 180, 64 184 C66 188, 64 192, 60 194 Z"
          stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* South America */}
        <path
          d="M72 196 C68 194, 64 196, 62 200 C60 206, 62 212, 66 218 C70 224, 76 232, 80 240 C84 248, 88 258, 90 268 C92 278, 90 288, 86 298 C82 308, 76 316, 72 322 C68 326, 66 330, 68 334 C70 338, 74 340, 76 336 C80 330, 84 322, 86 314 C88 306, 90 298, 92 290 C94 282, 96 274, 98 266 C100 258, 100 248, 98 240 C96 232, 92 224, 88 218 C84 212, 80 206, 76 200 C74 198, 72 196, 72 196 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Europe — Iberia, France, British Isles, Scandinavia */}
        <path
          d="M178 72 C174 70, 170 72, 168 76 C166 80, 168 86, 172 90 C176 94, 182 96, 188 98 C194 100, 200 100, 204 96 C208 92, 210 86, 208 82 C206 78, 202 76, 198 78 C194 80, 190 78, 186 76 C182 74, 180 72, 178 72 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* British Isles */}
        <path
          d="M166 68 C164 66, 160 68, 160 72 C160 76, 164 78, 166 76 C168 74, 168 70, 166 68 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"
        />
        {/* Scandinavia */}
        <path
          d="M196 52 C194 50, 190 48, 188 52 C186 56, 188 62, 192 66 C196 70, 200 72, 204 70 C206 68, 206 64, 204 60 C202 56, 198 54, 196 52 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"
        />

        {/* Africa */}
        <path
          d="M186 118 C180 116, 174 118, 170 124 C166 130, 164 138, 164 146 C164 154, 166 162, 170 170 C174 178, 178 186, 182 196 C186 206, 190 216, 194 228 C198 240, 200 252, 202 262 C204 270, 208 276, 212 278 C216 280, 220 278, 222 274 C224 268, 224 260, 222 252 C220 244, 218 236, 218 228 C218 220, 220 212, 222 204 C224 196, 226 188, 226 180 C226 172, 224 164, 220 156 C216 148, 212 140, 208 134 C204 128, 200 122, 194 120 C190 118, 188 118, 186 118 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Madagascar */}
        <path
          d="M234 240 C232 238, 230 240, 230 244 C230 250, 232 256, 234 260 C236 262, 238 260, 238 256 C238 250, 236 244, 234 240 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1"
        />

        {/* Middle East + Asia */}
        <path
          d="M224 100 C220 98, 216 96, 214 98 C212 100, 214 104, 218 108 C222 112, 228 114, 234 116 C240 118, 248 118, 256 116 C264 114, 272 110, 280 108 C288 106, 296 106, 304 108 C312 110, 318 114, 324 118 C330 122, 334 126, 336 130 C338 134, 338 140, 334 144 C330 148, 324 150, 318 148 C312 146, 306 142, 300 138 C294 134, 288 130, 282 128 C276 126, 270 126, 264 128 C258 130, 252 132, 248 130 C244 128, 242 124, 240 120 C238 116, 234 112, 230 108 C226 104, 224 102, 224 100 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* India */}
        <path
          d="M268 138 C264 136, 260 138, 258 142 C256 148, 258 156, 262 164 C266 172, 270 178, 272 182 C274 186, 274 188, 272 186 C270 184, 266 178, 264 174 C262 170, 260 168, 260 172 C260 178, 264 186, 270 190 C274 192, 278 190, 280 186 C282 182, 282 176, 280 170 C278 164, 276 158, 274 152 C272 146, 270 142, 268 138 Z"
          stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* Southeast Asia / Indonesia */}
        <path
          d="M310 162 C308 160, 304 160, 302 164 C300 168, 302 174, 306 178 C310 182, 316 184, 320 182 C324 180, 326 176, 324 172 C322 168, 318 164, 314 162 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.1"
        />
        <path
          d="M326 186 C324 184, 320 186, 322 190 C324 194, 328 196, 332 194 C336 192, 334 188, 330 186 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1"
        />

        {/* Japan */}
        <path
          d="M342 90 C340 88, 338 90, 338 94 C338 100, 340 106, 342 110 C344 114, 346 112, 346 108 C346 102, 344 96, 342 90 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.1"
        />

        {/* Australia */}
        <path
          d="M310 230 C304 228, 296 230, 290 236 C284 242, 280 250, 280 260 C280 270, 284 278, 292 284 C300 290, 310 292, 320 290 C330 288, 338 282, 342 274 C346 266, 346 258, 342 250 C338 242, 330 236, 322 232 C316 230, 312 230, 310 230 Z"
          stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* New Zealand */}
        <path
          d="M356 296 C354 294, 352 296, 352 300 C352 306, 354 312, 356 316 C358 318, 360 316, 360 312 C360 306, 358 300, 356 296 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1"
        />

        {/* Sphere shading overlay */}
        <circle cx="200" cy="200" r="176" fill="url(#globe-shading)" stroke="none" />
        <circle cx="200" cy="200" r="176" fill="url(#globe-highlight)" stroke="none" />
      </g>

      {/* Outer ring */}
      <circle cx="200" cy="200" r="176" stroke="currentColor" strokeWidth="3.5" fill="none" />
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

  if (phase === "done") return null;

  return (
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
                        scale: [1, 4, 8],
                        opacity: [1, 1, 0],
                      }
                    : { scale: 1, opacity: 1 }
                }
                transition={
                  isZooming
                    ? {
                        duration: 1.6,
                        times: [0, 0.5, 1],
                        ease: [0.22, 1, 0.36, 1],
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
