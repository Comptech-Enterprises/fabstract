"use client";

import { GALLERY_FILES, gallerySrc } from "@/data/gallery";
import { Still } from "./Still";

export function Filmstrip({ indices }: { indices: number[] }) {
  return (
    <div className="film-scroll flex gap-px overflow-x-auto snap-x snap-mandatory">
      {indices.map((idx) => {
        const file = GALLERY_FILES[idx % GALLERY_FILES.length];
        return (
          <div key={file} className="snap-start shrink-0 w-[78vw] sm:w-[46vw] lg:w-[32vw] aspect-[4/5]">
            <Still src={gallerySrc(file)} alt="" className="h-full w-full" />
          </div>
        );
      })}
    </div>
  );
}
