"use client";

import { useState } from "react";

export function Still({
  src,
  alt,
  className = "",
  imgClassName = "",
  zoom = true,
  ken = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
  ken?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`bg-white ${className}`} aria-hidden />;
  }

  return (
    <div
      className={`overflow-hidden bg-white ${zoom ? "still-zoom" : ""} ${ken ? "still-ken" : ""} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
        draggable={false}
      />
    </div>
  );
}
