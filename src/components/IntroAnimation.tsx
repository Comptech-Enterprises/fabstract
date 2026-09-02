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
        <radialGradient id="globe-shading" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="85%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="globe-highlight" cx="28%" cy="25%" r="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="60%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ocean */}
      <circle cx="200" cy="200" r="176" fill="currentColor" fillOpacity="0.15" />

      <g clipPath="url(#globe-clip)">
        {/* Latitude grid */}
        <ellipse cx="200" cy="80" rx="148" ry="16" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="128" rx="164" ry="20" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="168" rx="172" ry="22" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="200" rx="176" ry="24" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <ellipse cx="200" cy="232" rx="172" ry="22" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="272" rx="164" ry="20" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="320" rx="148" ry="16" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        {/* Longitude grid */}
        <ellipse cx="200" cy="200" rx="44" ry="176" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="200" rx="88" ry="176" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="200" rx="132" ry="176" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />

        {/* ═══ NORTH AMERICA ═══ */}
        {/* Alaska */}
        <path
          d="M28 82 C24 80, 20 82, 18 86 C16 90, 18 94, 22 98 C26 102, 30 104, 34 106 C38 108, 42 106, 44 102 C46 98, 44 94, 40 90 C36 86, 32 84, 28 82 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Canada + USA mainland */}
        <path
          d="M34 68 C38 66, 44 64, 50 62 C56 60, 62 58, 68 56 C74 54, 80 52, 86 54 C90 56, 92 58, 88 60 C84 62, 78 64, 74 66 C70 68, 66 70, 68 74 C70 78, 74 76, 80 74 C86 72, 92 70, 96 68 C100 66, 106 66, 110 68 C114 70, 116 74, 112 76 C108 78, 102 80, 98 82 C94 84, 88 86, 84 90 C80 94, 78 98, 76 102 C74 106, 72 110, 74 114 C76 118, 80 120, 84 122 C88 124, 92 126, 94 130 C96 134, 94 138, 90 140 C86 142, 82 142, 78 140 C74 138, 70 136, 66 134 C62 132, 58 130, 56 132 C54 134, 52 138, 54 142 C56 146, 60 148, 62 152 C64 156, 64 160, 60 162 C56 164, 52 162, 48 158 C44 154, 40 148, 36 142 C32 136, 30 128, 28 120 C26 112, 26 104, 28 96 C30 88, 32 80, 32 74 C32 70, 34 68, 34 68 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Florida */}
        <path
          d="M62 152 C64 156, 66 162, 68 168 C70 174, 70 180, 68 184 C66 186, 64 184, 62 180 C60 176, 58 170, 56 164 C54 160, 56 156, 60 154 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />

        {/* Greenland */}
        <path
          d="M118 34 C112 32, 106 34, 102 38 C98 42, 96 48, 96 54 C96 60, 98 66, 102 70 C106 74, 112 76, 118 78 C124 80, 130 78, 136 74 C140 70, 144 66, 146 60 C148 54, 148 48, 146 42 C144 38, 140 34, 134 32 C128 30, 122 32, 118 34 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />

        {/* Central America */}
        <path
          d="M54 186 C56 184, 60 184, 62 188 C64 192, 62 196, 60 200 C58 204, 56 208, 58 212 C60 216, 64 218, 66 222 C68 226, 66 230, 62 232 C60 234, 58 232, 58 228 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Cuba */}
        <path
          d="M54 178 C58 176, 64 176, 70 178 C74 180, 76 182, 74 184 C72 186, 66 186, 60 184 C56 182, 54 180, 54 178 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ SOUTH AMERICA ═══ */}
        <path
          d="M72 236 C68 234, 64 236, 62 240 C60 244, 62 250, 66 256 C70 262, 76 266, 82 272 C88 278, 94 284, 98 290 C102 296, 104 302, 104 308 C104 314, 102 320, 98 326 C94 332, 90 336, 86 340 C82 344, 78 348, 76 352 C74 356, 72 360, 74 362 C76 364, 78 364, 80 362 C84 358, 88 352, 90 346 C92 340, 94 334, 96 328 C98 322, 100 316, 102 310 C104 304, 104 298, 104 292 C104 286, 106 280, 108 274 C110 268, 110 262, 108 256 C106 250, 102 244, 98 240 C94 236, 88 234, 84 234 C80 234, 76 236, 72 236 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />

        {/* ═══ EUROPE ═══ */}
        {/* Iceland */}
        <path
          d="M154 50 C152 48, 148 48, 146 50 C144 52, 146 56, 150 58 C154 60, 158 58, 158 54 C158 52, 156 50, 154 50 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />
        {/* British Isles — Great Britain */}
        <path
          d="M162 74 C160 70, 158 68, 156 70 C154 72, 154 76, 156 80 C158 84, 160 86, 162 88 C164 90, 166 88, 166 84 C166 80, 164 76, 162 74 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />
        {/* Ireland */}
        <path
          d="M152 78 C150 76, 148 78, 148 80 C148 84, 150 86, 152 84 C154 82, 154 80, 152 78 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.75"
        />
        {/* Scandinavia — Norway/Sweden */}
        <path
          d="M190 42 C188 40, 184 38, 182 40 C180 42, 178 46, 180 52 C182 58, 186 64, 190 68 C194 72, 198 74, 202 72 C206 70, 208 66, 206 62 C204 58, 200 54, 198 50 C196 46, 192 44, 190 42 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Continental Europe — Iberia through Eastern Europe */}
        <path
          d="M164 92 C160 90, 156 92, 154 96 C152 100, 152 106, 156 110 C158 112, 162 114, 164 112 C166 110, 168 106, 170 104 C172 102, 176 100, 180 98 C184 96, 188 96, 192 98 C196 100, 200 102, 204 102 C208 102, 212 100, 216 98 C220 96, 224 94, 226 92 C228 90, 228 88, 224 86 C220 84, 214 84, 208 84 C202 84, 196 84, 192 86 C188 88, 184 90, 180 92 C176 94, 172 94, 168 92 C166 92, 164 92, 164 92 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Italy boot */}
        <path
          d="M196 102 C194 104, 194 108, 196 112 C198 116, 200 120, 198 124 C196 126, 194 124, 194 120 C194 118, 192 116, 192 118 C192 122, 196 126, 200 126 C202 126, 204 124, 204 120 C204 116, 202 112, 200 108 C198 104, 198 102, 196 102 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.75"
        />
        {/* Greece */}
        <path
          d="M212 108 C210 106, 208 108, 208 112 C208 116, 210 118, 212 116 C214 114, 214 110, 212 108 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ AFRICA ═══ */}
        <path
          d="M176 122 C172 120, 168 122, 164 126 C160 130, 158 136, 156 142 C154 148, 154 154, 156 160 C158 166, 162 172, 166 178 C170 184, 174 190, 178 198 C182 206, 186 214, 190 224 C194 234, 196 244, 198 254 C200 264, 202 272, 206 278 C210 284, 214 288, 218 290 C222 292, 226 290, 228 286 C230 282, 230 276, 228 270 C226 264, 224 258, 224 252 C224 246, 224 240, 226 234 C228 228, 230 222, 232 216 C234 210, 234 204, 234 198 C234 192, 232 186, 230 180 C228 174, 226 168, 224 162 C222 156, 220 150, 216 144 C212 138, 208 132, 202 128 C196 124, 190 122, 184 122 C180 122, 178 122, 176 122 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Horn of Africa */}
        <path
          d="M234 198 C238 196, 242 194, 246 196 C250 198, 252 202, 250 206 C248 210, 244 212, 240 210 C236 208, 234 204, 234 200 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />
        {/* Madagascar */}
        <path
          d="M244 254 C242 250, 240 252, 238 256 C236 262, 238 270, 240 276 C242 282, 244 284, 246 282 C248 278, 248 272, 248 266 C248 260, 246 256, 244 254 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ MIDDLE EAST ═══ */}
        <path
          d="M228 96 C226 94, 224 96, 224 100 C224 104, 226 108, 230 112 C234 116, 238 118, 242 120 C246 122, 250 122, 252 118 C254 114, 254 110, 252 106 C250 102, 246 100, 242 98 C238 96, 234 96, 230 96 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Arabian Peninsula */}
        <path
          d="M236 122 C234 120, 230 122, 228 126 C226 130, 228 136, 232 140 C236 144, 242 146, 248 144 C252 142, 254 138, 252 134 C250 130, 246 126, 242 124 C240 122, 238 122, 236 122 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ ASIA ═══ */}
        {/* Russia/Central Asia sprawl */}
        <path
          d="M226 86 C230 84, 236 82, 244 80 C252 78, 262 76, 272 74 C282 72, 292 72, 302 74 C312 76, 320 78, 328 82 C336 86, 342 90, 346 96 C350 102, 350 108, 346 112 C342 116, 336 118, 330 116 C324 114, 318 110, 312 108 C306 106, 300 106, 294 108 C288 110, 282 112, 276 112 C270 112, 264 110, 258 108 C252 106, 246 104, 240 100 C234 96, 230 92, 228 88 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* China/East Asia */}
        <path
          d="M294 112 C290 110, 286 112, 284 116 C282 120, 282 126, 284 132 C286 138, 290 142, 296 146 C302 150, 308 152, 314 150 C320 148, 324 144, 326 140 C328 136, 328 130, 326 124 C324 118, 320 114, 314 112 C308 110, 302 112, 298 112 Z"
          stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* India */}
        <path
          d="M272 128 C268 126, 264 128, 262 132 C260 136, 260 142, 262 148 C264 154, 268 162, 272 168 C276 174, 278 180, 278 184 C278 188, 276 190, 274 188 C272 186, 270 182, 268 178 C266 174, 264 172, 264 176 C264 182, 268 190, 274 194 C278 196, 282 194, 284 190 C286 186, 286 180, 284 174 C282 168, 280 162, 278 156 C276 150, 274 144, 274 138 C274 132, 274 130, 272 128 Z"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Sri Lanka */}
        <path
          d="M280 196 C278 194, 276 196, 276 198 C276 202, 278 204, 280 202 C282 200, 282 198, 280 196 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.75"
        />

        {/* Southeast Asia */}
        <path
          d="M312 156 C310 154, 306 154, 304 158 C302 162, 304 168, 308 172 C312 176, 316 178, 320 176 C324 174, 326 170, 324 166 C322 162, 318 158, 314 156 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />
        {/* Indonesia islands */}
        <path
          d="M306 186 C304 184, 300 186, 300 190 C300 194, 304 196, 308 196 C312 196, 316 194, 318 192 C320 190, 318 186, 314 184 C312 184, 310 186, 308 186 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.6"
        />
        <path
          d="M322 190 C320 188, 318 190, 320 194 C322 198, 326 200, 330 198 C334 196, 334 192, 330 190 C328 188, 324 190, 322 190 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.6"
        />
        <path
          d="M336 192 C334 190, 332 192, 334 196 C336 200, 340 202, 344 200 C346 198, 344 194, 340 192 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.6"
        />

        {/* Korea */}
        <path
          d="M326 120 C324 118, 322 120, 322 124 C322 128, 324 132, 326 134 C328 136, 330 134, 330 130 C330 126, 328 122, 326 120 Z"
          stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.75"
        />

        {/* Japan */}
        <path
          d="M340 100 C338 98, 336 100, 336 104 C336 108, 338 114, 340 120 C342 126, 344 130, 346 128 C348 126, 348 120, 348 114 C348 108, 346 104, 344 100 C342 98, 340 100, 340 100 Z"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.75"
        />
        {/* Hokkaido */}
        <path
          d="M344 94 C342 92, 340 94, 340 96 C340 100, 342 102, 344 100 C346 98, 346 96, 344 94 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ AUSTRALIA ═══ */}
        <path
          d="M308 238 C302 236, 294 238, 288 244 C282 250, 278 258, 278 266 C278 274, 280 282, 286 288 C292 294, 300 298, 308 300 C316 302, 324 300, 332 296 C338 292, 344 286, 348 278 C352 270, 352 262, 348 254 C344 246, 338 240, 330 238 C324 236, 318 236, 312 238 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.75" strokeLinejoin="round"
        />
        {/* Tasmania */}
        <path
          d="M326 306 C324 304, 322 306, 322 308 C322 312, 324 314, 326 312 C328 310, 328 308, 326 306 Z"
          stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.75"
        />
        {/* New Zealand North */}
        <path
          d="M362 290 C360 288, 358 290, 358 294 C358 298, 360 302, 362 304 C364 306, 366 304, 366 300 C366 296, 364 292, 362 290 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.75"
        />
        {/* New Zealand South */}
        <path
          d="M360 308 C358 306, 356 308, 356 312 C356 318, 358 322, 360 324 C362 326, 364 324, 364 318 C364 314, 362 310, 360 308 Z"
          stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.75"
        />

        {/* ═══ SPHERE SHADING ═══ */}
        <circle cx="200" cy="200" r="176" fill="url(#globe-shading)" stroke="none" />
        <circle cx="200" cy="200" r="176" fill="url(#globe-highlight)" stroke="none" />
      </g>

      {/* Outer ring */}
      <circle cx="200" cy="200" r="176" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="200" cy="200" r="179" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.25" />
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
