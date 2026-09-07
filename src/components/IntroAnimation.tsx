"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function GlobeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className}>
      <defs>
        <clipPath id="globe-clip"><circle cx="200" cy="200" r="176" /></clipPath>
        <radialGradient id="globe-shade" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="85%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="globe-hi" cx="28%" cy="25%" r="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="60%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="176" fill="currentColor" fillOpacity="0.15" />

      <g clipPath="url(#globe-clip)" stroke="currentColor" fill="currentColor">
        {/* Grid lines */}
        <ellipse cx="200" cy="105" rx="170" ry="16" strokeWidth="0.4" opacity="0.06" fill="none" />
        <ellipse cx="200" cy="152" rx="174" ry="20" strokeWidth="0.4" opacity="0.07" fill="none" />
        <ellipse cx="200" cy="200" rx="176" ry="22" strokeWidth="0.5" opacity="0.09" fill="none" />
        <ellipse cx="200" cy="248" rx="174" ry="20" strokeWidth="0.4" opacity="0.07" fill="none" />
        <ellipse cx="200" cy="295" rx="170" ry="16" strokeWidth="0.4" opacity="0.06" fill="none" />
        <ellipse cx="200" cy="200" rx="44" ry="176" strokeWidth="0.4" opacity="0.06" fill="none" />
        <ellipse cx="200" cy="200" rx="88" ry="176" strokeWidth="0.4" opacity="0.07" fill="none" />
        <ellipse cx="200" cy="200" rx="132" ry="176" strokeWidth="0.4" opacity="0.07" fill="none" />

        {/* North America - Canada */}
        <path d="M30 62L36 58 42 55 48 53 55 50 62 48 68 47 74 48 78 50 82 48 88 46 94 44 100 42 106 43 110 46 108 50 104 53 98 56 92 58 86 56 82 54 76 56 72 60 68 62 64 66 62 70 66 72 72 70 78 68 84 66 90 64 96 62 102 60 108 62 114 65 110 68 104 72 98 76 92 80 88 84 84 88 80 92 76 96 74 100 72 106 74 112 78 116 82 118 86 120 90 124 92 128 90 132 86 136 82 138 78 136 74 132 70 130 66 128 62 126 58 128 56 132 58 138 62 144 64 150Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* USA mainland */}
        <path d="M32 94L38 92 44 90 50 92 54 96 50 100 46 104 42 108 40 114 38 120 36 126 34 132 36 138 40 142 44 146 48 150 52 154 56 156 60 158 64 154 62 148 58 142 56 136 58 130 62 126 66 128 70 130 74 132 78 136 82 140 86 142 90 144 92 148 90 152 86 154 82 156 78 158 74 160 70 162 66 164 62 162Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Alaska */}
        <path d="M22 74L26 70 30 68 34 70 36 74 34 78 30 82 26 84 22 86 20 88 18 92 20 96 24 98 28 100 32 102 36 104 40 102 42 98 40 94 36 90 32 86 28 82 24 78Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Florida */}
        <path d="M64 154L66 158 68 164 70 170 72 176 72 182 70 186 68 188 66 186 64 182 62 176 60 170 58 164 58 160 60 156Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Greenland */}
        <path d="M114 30L108 32 104 36 100 42 98 48 96 54 98 60 100 64 104 68 108 72 114 74 120 76 126 76 132 74 138 70 142 66 146 60 148 54 148 48 146 42 142 38 136 34 130 32 124 30 118 30Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Mexico + Central America */}
        <path d="M42 148L46 152 50 156 48 162 44 166 42 172 40 178 42 184 46 188 48 192 50 196 48 200 46 204 48 208 52 212 56 216 60 220 62 224 60 228 56 230 54 226 52 222 50 218 48 214 46 210 44 206 42 202 40 198 38 192 36 186 36 180 38 174 40 168 42 164 44 158 44 152Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Cuba */}
        <path d="M50 176L54 174 60 174 66 176 72 178 76 180 78 182 76 184 70 186 64 186 58 184 54 182 50 180Z" strokeWidth="0.7" fillOpacity="0.75" />
        {/* Hispaniola */}
        <path d="M78 180L82 178 86 178 88 180 86 182 82 182Z" strokeWidth="0.6" fillOpacity="0.7" />
        {/* South America */}
        <path d="M66 232L62 236 60 242 62 248 66 254 70 258 76 262 82 266 86 272 90 278 94 284 98 290 100 296 102 302 104 308 104 314 102 320 100 326 96 332 92 336 88 340 84 344 80 348 78 352 76 358 76 362 78 364 80 362 82 358 86 352 90 346 92 340 94 334 96 328 98 322 100 316 102 310 104 304 106 298 108 292 110 286 112 280 114 274 114 268 112 262 110 256 108 250 104 244 100 240 96 236 90 234 84 232 78 232 72 234Z" strokeWidth="1.1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Iceland */}
        <path d="M150 48L148 46 144 46 142 48 142 52 144 56 148 58 152 58 156 56 156 52 154 50Z" strokeWidth="0.8" fillOpacity="0.78" />
        {/* Great Britain */}
        <path d="M160 66L158 68 156 72 156 76 158 80 160 84 162 88 164 90 166 88 166 84 166 80 164 76 162 72 160 68Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Ireland */}
        <path d="M150 76L148 74 146 76 146 80 148 84 150 86 152 84 152 80 150 78Z" strokeWidth="0.7" fillOpacity="0.78" />
        {/* Scandinavia - Norway/Sweden */}
        <path d="M186 36L182 38 180 42 178 48 180 54 182 58 184 62 186 66 190 70 194 72 198 74 202 72 204 68 204 64 202 60 200 56 198 52 196 48 194 44 192 40 190 38Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Finland */}
        <path d="M206 44L204 48 204 52 206 56 208 60 210 64 212 60 212 56 210 52 208 48Z" strokeWidth="0.7" fillOpacity="0.75" />
        {/* Iberian Peninsula */}
        <path d="M156 96L152 98 150 102 150 106 152 110 156 112 160 112 164 110 166 106 166 102 164 98 160 96Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* France */}
        <path d="M166 88L164 90 162 94 164 98 168 100 172 100 176 98 178 94 176 90 172 88 168 88Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Central Europe */}
        <path d="M180 86L184 84 190 84 196 86 202 86 208 84 214 84 220 86 226 88 228 90 226 92 222 94 218 96 212 98 206 100 202 100 198 98 194 96 190 94 186 92 182 90 180 88Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Italy boot */}
        <path d="M192 100L190 104 190 108 192 112 194 116 196 120 196 124 194 126 192 124 190 120 190 116 192 118 194 122 196 126 200 128 202 126 204 122 204 118 202 114 200 110 198 106 196 102Z" strokeWidth="0.7" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Sicily */}
        <path d="M192 128L190 130 192 132 196 132 198 130 196 128Z" strokeWidth="0.5" fillOpacity="0.7" />
        {/* Sardinia */}
        <path d="M186 114L184 116 184 120 186 122 188 120 188 116Z" strokeWidth="0.5" fillOpacity="0.7" />
        {/* Greece + Balkans */}
        <path d="M208 100L206 104 206 108 208 112 210 116 212 118 214 116 214 112 212 108 210 104Z" strokeWidth="0.7" fillOpacity="0.78" />
        {/* Turkey */}
        <path d="M218 98L222 96 228 96 234 98 240 100 244 102 246 104 244 106 240 108 234 108 228 106 224 104 220 102Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Northwest Africa */}
        <path d="M146 114L150 116 154 118 158 120 162 124 164 128 166 132 164 136 160 138 156 136 152 132 150 128 148 124 146 120 146 116Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* West Africa bulge */}
        <path d="M156 140L160 142 166 146 172 150 178 156 182 162 184 168 182 172 178 174 174 172 170 168 166 162 162 156 160 150 158 146 156 142Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Central + East Africa */}
        <path d="M184 168L188 174 192 180 196 186 200 194 204 202 208 212 210 222 212 232 214 240 216 248 218 256 220 262 222 268 224 274 226 280 228 284 228 288 226 290 222 288 218 284 214 278 210 272 208 266 206 260 204 254 202 248 200 242 198 236 196 230 194 224 192 218 190 212 188 206 186 200 184 194 184 188 184 182 184 176Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Horn of Africa */}
        <path d="M234 188L238 186 242 186 246 188 250 192 252 198 252 204 250 208 246 210 242 208 238 204 236 200 234 196 234 192Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Southern Africa */}
        <path d="M196 260L200 264 204 270 208 274 212 278 216 282 220 284 224 286 226 290 224 292 220 294 216 292 212 290 208 286 204 282 200 278 198 274 196 270 196 264Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Madagascar */}
        <path d="M240 252L238 248 236 252 236 258 238 264 240 270 242 276 244 280 246 278 246 272 246 266 244 260 242 256Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Arabian Peninsula */}
        <path d="M232 114L228 118 226 124 228 130 232 136 236 140 240 142 244 140 248 136 250 132 250 128 248 124 244 120 240 116 236 114Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Iran/Afghanistan */}
        <path d="M250 106L254 108 258 110 262 114 264 118 266 122 264 126 260 128 256 126 252 122 250 118 248 114 248 110Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Russia - vast northern landmass */}
        <path d="M220 84L224 82 230 80 238 78 246 76 254 74 262 72 270 70 278 68 286 68 294 70 302 72 310 74 318 76 326 78 332 80 338 84 342 88 346 92 348 98 350 104 348 108 344 112 340 114 336 116 330 114 324 112 318 110 312 108 306 106 300 106 294 108 288 110 282 112 276 112 270 112 264 110 258 108 252 106 248 104 244 102 240 100 236 98 232 94 228 90 224 86Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Kamchatka */}
        <path d="M354 80L352 76 350 72 348 76 348 82 350 88 352 92 354 96 356 92 356 86Z" strokeWidth="0.6" fillOpacity="0.75" />
        {/* China */}
        <path d="M288 112L284 116 282 122 282 128 284 134 288 138 292 142 296 146 302 148 308 150 314 148 318 144 322 140 326 136 328 132 328 126 326 120 322 116 318 112 314 110 308 108 302 108 296 110Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Mongolia */}
        <path d="M292 102L296 100 302 100 308 102 314 104 310 106 304 106 298 106 294 104Z" strokeWidth="0.6" fillOpacity="0.7" />
        {/* India */}
        <path d="M268 126L264 130 262 136 262 142 264 148 266 154 268 160 270 166 272 172 274 178 276 184 278 188 278 192 276 194 274 192 272 188 270 184 268 178 266 172 264 168 264 174 266 182 270 190 274 196 278 198 282 196 284 192 286 186 286 180 284 174 282 168 280 162 278 156 276 150 274 144 272 138 272 132 270 128Z" strokeWidth="0.9" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Sri Lanka */}
        <path d="M278 200L276 198 274 200 274 204 276 206 278 206 280 204 280 200Z" strokeWidth="0.5" fillOpacity="0.78" />
        {/* Korea */}
        <path d="M328 114L326 118 324 122 324 128 326 132 328 136 330 132 330 128 330 124 328 118Z" strokeWidth="0.6" fillOpacity="0.78" />
        {/* Japan - Honshu */}
        <path d="M338 98L336 102 336 108 338 114 340 120 342 126 344 130 346 126 348 120 348 114 348 108 346 104 344 100 340 98Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Japan - Hokkaido */}
        <path d="M340 90L338 88 336 90 336 94 338 96 342 98 344 96 344 92 342 90Z" strokeWidth="0.5" fillOpacity="0.78" />
        {/* Southeast Asia - Vietnam/Thailand */}
        <path d="M308 148L304 152 302 158 304 164 308 170 312 174 316 176 318 172 316 166 314 160 312 154Z" strokeWidth="0.8" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Myanmar */}
        <path d="M296 148L294 152 294 158 296 164 298 168 300 172 302 168 302 162 300 156 298 152Z" strokeWidth="0.7" fillOpacity="0.75" />
        {/* Malaysia */}
        <path d="M306 180L304 178 300 180 298 184 300 188 304 190 308 188 308 184Z" strokeWidth="0.6" fillOpacity="0.75" />
        {/* Sumatra */}
        <path d="M296 190L294 194 294 200 296 206 298 210 300 208 300 202 300 196 298 192Z" strokeWidth="0.7" fillOpacity="0.75" strokeLinejoin="round" />
        {/* Java */}
        <path d="M306 210L310 208 316 208 322 210 328 212 332 214 328 216 322 216 316 214 310 212Z" strokeWidth="0.5" fillOpacity="0.7" />
        {/* Borneo */}
        <path d="M312 186L308 190 308 196 312 200 316 202 320 200 322 196 320 192 316 188Z" strokeWidth="0.7" fillOpacity="0.75" strokeLinejoin="round" />
        {/* Philippines */}
        <path d="M328 158L326 162 326 168 328 174 330 178 332 174 332 168 330 162Z" strokeWidth="0.6" fillOpacity="0.75" />
        {/* Sulawesi */}
        <path d="M326 196L324 200 326 204 330 206 332 202 330 198Z" strokeWidth="0.5" fillOpacity="0.7" />
        {/* Papua New Guinea */}
        <path d="M344 200L340 204 340 210 344 214 350 216 356 214 358 210 356 206 352 202 348 200Z" strokeWidth="0.7" fillOpacity="0.75" strokeLinejoin="round" />
        {/* Australia */}
        <path d="M300 244L296 248 292 254 290 260 288 268 288 274 290 280 294 286 298 290 304 294 310 298 316 300 322 300 328 298 334 294 338 290 342 284 346 278 348 272 350 266 350 260 348 254 344 248 340 244 336 240 330 238 324 236 318 236 312 238 306 240Z" strokeWidth="1" fillOpacity="0.78" strokeLinejoin="round" />
        {/* Tasmania */}
        <path d="M322 306L320 308 320 312 322 314 326 314 328 312 328 308 326 306 324 304Z" strokeWidth="0.5" fillOpacity="0.78" />
        {/* New Zealand - North Island */}
        <path d="M364 284L362 288 360 292 360 298 362 302 364 304 366 302 368 298 368 294 366 290 364 286Z" strokeWidth="0.7" fillOpacity="0.78" />
        {/* New Zealand - South Island */}
        <path d="M360 306L358 310 356 316 358 322 360 326 362 324 364 320 364 314 362 310 360 308Z" strokeWidth="0.7" fillOpacity="0.78" />

        <circle cx="200" cy="200" r="176" fill="url(#globe-shade)" stroke="none" />
        <circle cx="200" cy="200" r="176" fill="url(#globe-hi)" stroke="none" />
      </g>

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
      const t = setTimeout(() => setPhase("pause"), 50);
      return () => clearTimeout(t);
    }
    const delay = charIndex === 0 ? 350 : charIndex === topText.length ? 250 : 65;
    const t = setTimeout(() => setCharIndex((i) => i + 1), delay);
    return () => clearTimeout(t);
  }, [charIndex, phase, fullLength]);

  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => setPhase("zoom"), 500);
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
            </motion.span>

            {globeVisible && (
              <motion.span
                className="inline-flex items-center justify-center origin-center"
                initial={{ scale: 0.2, opacity: 0 }}
                animate={
                  isZooming
                    ? { scale: [1, 4, 8], opacity: [1, 1, 0] }
                    : { scale: 1, opacity: 1 }
                }
                transition={
                  isZooming
                    ? { duration: 1.6, times: [0, 0.5, 1], ease: [0.22, 1, 0.36, 1] }
                    : { duration: 1.5, ease: [0.05, 0.7, 0.1, 1] }
                }
                onAnimationComplete={isZooming ? handleZoomComplete : undefined}
              >
                <GlobeSVG className="w-[1em] h-[1em] mx-[0.05em] text-black" />
              </motion.span>
            )}

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
