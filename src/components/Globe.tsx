"use client";

import { useEffect, useRef } from "react";
import type { GlobeInstance } from "globe.gl";

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<unknown>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let destroyed = false;

    import("globe.gl").then(({ default: GlobeGL }) => {
      if (destroyed || !mountRef.current) return;

      const GlobeFactory = GlobeGL as unknown as () => (el: HTMLElement) => GlobeInstance;
      const globe = GlobeFactory()(mountRef.current as HTMLElement);
      globeRef.current = globe;

      globe
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#c8ddf0")
        .atmosphereAltitude(0.12)
        .width(mount.clientWidth)
        .height(mount.clientHeight);

      globe.pointOfView({ lat: 20, lng: 0, altitude: 1.8 }, 0);

      const controls = (globe as unknown as { controls: () => { autoRotate: boolean; autoRotateSpeed: number; enableZoom: boolean } }).controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false;
    });

    const onResize = () => {
      if (!mountRef.current || !globeRef.current) return;
      const g = globeRef.current as { width: (w: number) => unknown; height: (h: number) => unknown };
      g.width(mountRef.current.clientWidth);
      g.height(mountRef.current.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      destroyed = true;
      window.removeEventListener("resize", onResize);
      if (globeRef.current) {
        const g = globeRef.current as { _destructor?: () => void };
        g._destructor?.();
      }
      if (mount) mount.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
}
