"use client";

import { useEffect, useRef } from "react";
import type { GlobeInstance } from "globe.gl";
import type { WebGLRendererParameters } from "three";

const LOCATIONS = [
  { name: "USA",       lat: 39.5,   lng: -98.35  },
  { name: "Canada",    lat: 56.13,  lng: -106.35 },
  { name: "UK",        lat: 55.38,  lng: -3.44   },
  { name: "Europe",    lat: 48.86,  lng: 10.0    },
  { name: "Australia", lat: -25.27, lng: 133.78  },
  { name: "NZ",        lat: -40.9,  lng: 174.89  },
];

const ARCS = [
  { src: "USA",    dst: "Canada"    },
  { src: "USA",    dst: "UK"        },
  { src: "UK",     dst: "Europe"    },
  { src: "USA",    dst: "Australia" },
  { src: "Australia", dst: "NZ"    },
];

type Loc = typeof LOCATIONS[0];
type Arc = { src: string; dst: string };

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

      const GlobeFactory = GlobeGL as unknown as (
        opts?: { rendererConfig?: WebGLRendererParameters }
      ) => (el: HTMLElement) => GlobeInstance;
      const globe = GlobeFactory({
        rendererConfig: { alpha: true, antialias: true },
      })(mountRef.current as HTMLElement);
      globeRef.current = globe;

      globe
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#d7c9b2")
        .atmosphereAltitude(0.08);

      globe.renderer().setClearColor(0x000000, 0);
      globe.scene().background = null;

      globe
        .pointsData(LOCATIONS)
        .pointLat((d: unknown) => (d as Loc).lat)
        .pointLng((d: unknown) => (d as Loc).lng)
        .pointColor(() => "#4d4845")
        .pointAltitude(0.04)
        .pointRadius(0.6)
        .pointLabel((d: unknown) => (d as Loc).name);

      globe
        .ringsData(LOCATIONS)
        .ringLat((d: unknown) => (d as Loc).lat)
        .ringLng((d: unknown) => (d as Loc).lng)
        .ringColor(() => (t: number) => `rgba(123,115,105,${1 - t})`)
        .ringMaxRadius(5)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(900);

      const byName = Object.fromEntries(LOCATIONS.map(l => [l.name, l]));
      globe
        .arcsData(ARCS)
        .arcStartLat((d: unknown) => byName[(d as Arc).src].lat)
        .arcStartLng((d: unknown) => byName[(d as Arc).src].lng)
        .arcEndLat((d: unknown) => byName[(d as Arc).dst].lat)
        .arcEndLng((d: unknown) => byName[(d as Arc).dst].lng)
        .arcColor(() => "#7b7369")
        .arcAltitude(0.3)
        .arcStroke(0.5)
        .arcDashLength(0.4)
        .arcDashGap(0.3)
        .arcDashAnimateTime(3000);

      ringFrame = requestAnimationFrame(function tick() {
        if (!destroyed) ringFrame = requestAnimationFrame(tick);
      });

      const fit = () => {
        const el = mountRef.current;
        if (!el || destroyed) return;
        const w = el.clientWidth;
        const h = el.clientHeight;
        if (w < 8 || h < 8) return;
        globe.width(w);
        globe.height(h);
        globe.pointOfView({ lat: 20, lng: 0, altitude: w < 480 ? 1.95 : 1.55 }, 0);
      };
      fit();

      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2;
      controls.enableZoom = false;
    });

    const onResize = () => {
      if (!mountRef.current || !globeRef.current) return;
      const el = mountRef.current;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 8 || h < 8) return;
      const g = globeRef.current as {
        width: (w: number) => unknown;
        height: (h: number) => unknown;
      };
      g.width(w);
      g.height(h);
    };
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      destroyed = true;
      cancelAnimationFrame(ringFrame);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
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
      className="w-full h-full min-h-0 overflow-hidden bg-transparent"
      style={{ touchAction: "none", background: "transparent" }}
    />
  );
}
