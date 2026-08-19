"use client";

import { motion } from "framer-motion";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { Still } from "./Still";
import { EASE } from "@/lib/motion";

const SPANS = [
  "md:col-span-2 md:row-span-2 min-h-[320px]",
  "min-h-[200px]",
  "min-h-[200px]",
  "md:col-span-2 min-h-[220px]",
];

export function PhotoMosaic({
  indices,
  className = "",
}: {
  indices: number[];
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-sky ${className}`}>
      {indices.map((idx, i) => {
        const file = GALLERY_FILES[idx % GALLERY_FILES.length];
        return (
          <motion.div
            key={`${file}-${i}`}
            className={SPANS[i % SPANS.length]}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
          >
            <Still src={gallerySrc(file)} alt="" className="h-full w-full min-h-[180px]" />
          </motion.div>
        );
      })}
    </div>
  );
}
