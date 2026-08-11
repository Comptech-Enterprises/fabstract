"use client";

import { useEffect, useRef } from "react";
import type { GlobeInstance } from "globe.gl";

const LOCATIONS = [
  { name: "New York",    lat: 40.71,  lng: -74.01,  region: "USA & Canada"  },
  { name: "Los Angeles", lat: 34.05,  lng: -118.24, region: "USA & Canada"  },
  { name: "Toronto",     lat: 43.65,  lng: -79.38,  region: "USA & Canada"  },
  { name: "Sydney",      lat: -33.87, lng: 151.21,  region: "Australia & NZ"},
  { name: "Melbourne",   lat: -37.81, lng: 144.96,  region: "Australia & NZ"},
  { name: "Auckland",    lat: -36.85, lng: 174.76,  region: "Australia & NZ"},
];

const REGION_COLOR: Record<string, string> = {
  "USA & Canada":   "#6b7c3f",
  "UK & Europe":    "#8a9a50",
  "Australia & NZ": "#a0b060",
  "India":          "#c8a96e",
};


export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<unknown>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let destroyed = false;
    let ringFrame = 0;

    import("globe.gl").then(({ default: GlobeGL }) => {
      if (destroyed || !mountRef.current) return;

      const GlobeFactory = GlobeGL as unknown as () => (el: HTMLElement) => GlobeInstance;
      const globe = GlobeFactory()(mountRef.current as HTMLElement);
      globeRef.current = globe;

      // Earth texture
      globe
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#c8ddf0")
        .atmosphereAltitude(0.12)
        .width(mount.clientWidth)
        .height(mount.clientHeight);

      // Location pins
      globe
        .pointsData(LOCATIONS)
        .pointLat((d: unknown) => (d as typeof LOCATIONS[0]).lat)
        .pointLng((d: unknown) => (d as typeof LOCATIONS[0]).lng)
        .pointColor((d: unknown) => REGION_COLOR[(d as typeof LOCATIONS[0]).region] ?? "#6b7c3f")
        .pointAltitude(0.04)
        .pointRadius(0.8)
        .pointLabel((d: unknown) => (d as typeof LOCATIONS[0]).name);

      // Start centered on Pacific, showing both USA and Australia
      globe.pointOfView({ lat: 10, lng: -150, altitude: 1.8 }, 0);

      // Ripple rings — new ring per location every 1.5s
      const propagateRings = () => {
        globe.ringsData(LOCATIONS.map(loc => ({ ...loc, propagationSpeed: 2, repeatPeriod: 800 })))
          .ringLat((d: unknown) => (d as typeof LOCATIONS[0]).lat)
          .ringLng((d: unknown) => (d as typeof LOCATIONS[0]).lng)
          .ringColor((d: unknown) => {
            const col = REGION_COLOR[(d as typeof LOCATIONS[0]).region] ?? "#6b7c3f";
            return (t: number) => col + Math.round((1 - t) * 255).toString(16).padStart(2, "0");
          })
          .ringMaxRadius(4)
          .ringPropagationSpeed(2)
          .ringRepeatPeriod(800);
        ringFrame = requestAnimationFrame(propagateRings);
      };
      propagateRings();

      // Controls
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
      cancelAnimationFrame(ringFrame);
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
