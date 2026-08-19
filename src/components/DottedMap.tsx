"use client";

import { useEffect, useRef } from "react";

interface Region {
  name: string;
  lat: number;
  lng: number;
  active: boolean;
}

interface Props {
  activeRegion: string;
  onRegionClick: (name: string) => void;
}

const REGIONS: Region[] = [
  { name: "USA & Canada", lat: 42, lng: -100, active: false },
  { name: "UK & Europe", lat: 52, lng: 12, active: false },
  { name: "Australia & NZ", lat: -27, lng: 134, active: false },
];

// Simplified land mask — returns true if (lat, lng) is likely land
function isLand(lat: number, lng: number): boolean {
  // North America
  if (lat > 60 && lat < 85 && lng > -140 && lng < -55) return true;
  if (lat > 48 && lat <= 60 && lng > -135 && lng < -52) return true;
  if (lat > 24 && lat <= 48 && lng > -125 && lng < -65) return true;
  if (lat > 14 && lat <= 24 && lng > -118 && lng < -80) return true;
  // Greenland
  if (lat > 60 && lng > -55 && lng < -15) return true;
  // South America
  if (lat > -5 && lat <= 14 && lng > -82 && lng < -50) return true;
  if (lat > -25 && lat <= -5 && lng > -80 && lng < -34) return true;
  if (lat > -40 && lat <= -25 && lng > -75 && lng < -48) return true;
  if (lat > -56 && lat <= -40 && lng > -75 && lng < -58) return true;
  // Europe
  if (lat > 35 && lat <= 72 && lng > -10 && lng < 42) return true;
  if (lat > 55 && lat <= 72 && lng > -25 && lng < 32) return true;
  // Africa
  if (lat > 20 && lat <= 38 && lng > -18 && lng < 38) return true;
  if (lat > 0 && lat <= 20 && lng > -18 && lng < 50) return true;
  if (lat > -20 && lat <= 0 && lng > -18 && lng < 52) return true;
  if (lat > -35 && lat <= -20 && lng > 14 && lng < 52) return true;
  // Russia / N Asia
  if (lat > 50 && lat <= 80 && lng > 30 && lng < 180) return true;
  // Middle East
  if (lat > 12 && lat <= 42 && lng > 34 && lng < 62) return true;
  // South / SE Asia
  if (lat > 8 && lat <= 50 && lng > 62 && lng < 150) return true;
  if (lat > -10 && lat <= 8 && lng > 95 && lng < 142) return true;
  // Japan / Korea
  if (lat > 30 && lat <= 46 && lng > 129 && lng < 146) return true;
  // Australia
  if (lat > -40 && lat <= -10 && lng > 113 && lng < 154) return true;
  // New Zealand
  if (lat > -47 && lat <= -34 && lng > 166 && lng < 178) return true;
  return false;
}

function latLngToXY(lat: number, lng: number, w: number, h: number) {
  const x = ((lng + 180) / 360) * w;
  const y = ((90 - lat) / 180) * h;
  return { x, y };
}

export default function DottedMap({ activeRegion, onRegionClick }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      const ctx = canvas.getContext("2d")!;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, w, h);

      const dotSpacing = 5;
      const dotRadius = 1.6;

      for (let lng = -180; lng <= 180; lng += dotSpacing * (360 / w)) {
        for (let lat = -85; lat <= 85; lat += dotSpacing * (180 / h)) {
          if (!isLand(lat, lng)) continue;
          const { x, y } = latLngToXY(lat, lng, w, h);

          // Check if near any region pin for highlight
          let highlighted = false;
          for (const region of REGIONS) {
            const px = latLngToXY(region.lat, region.lng, w, h);
            const dist = Math.hypot(x - px.x, y - px.y);
            const radius = region.name === "USA & Canada" ? w * 0.18
              : region.name === "UK & Europe" ? w * 0.12
              : w * 0.1;
            if (dist < radius) {
              highlighted = region.name === activeRegion;
              break;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = highlighted ? "rgba(107,124,60,0.85)" : "rgba(107,124,60,0.22)";
          ctx.fill();
        }
      }

      // Draw pins
      for (const region of REGIONS) {
        const { x, y } = latLngToXY(region.lat, region.lng, w, h);
        const isActive = region.name === activeRegion;

        // Pulse ring
        ctx.beginPath();
        ctx.arc(x, y, isActive ? 14 : 10, 0, Math.PI * 2);
        ctx.strokeStyle = isActive ? "rgba(107,124,60,0.4)" : "rgba(107,124,60,0.15)";
        ctx.lineWidth = isActive ? 2 : 1.5;
        ctx.stroke();

        // Pin dot
        ctx.beginPath();
        ctx.arc(x, y, isActive ? 7 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? "#2F4156" : "#567C8D";
        ctx.fill();

        // Label
        ctx.font = `${isActive ? "bold " : ""}${isActive ? 11 : 10}px system-ui, sans-serif`;
        ctx.fillStyle = isActive ? "#3a4a1a" : "rgba(60,70,30,0.6)";
        ctx.textAlign = "center";
        const label = region.name === "USA & Canada" ? "USA & Canada"
          : region.name === "UK & Europe" ? "UK & Europe"
          : "Australia & NZ";
        ctx.fillText(label, x, y - 14);
      }
    };

    draw();

    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [activeRegion]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    for (const region of REGIONS) {
      const { x, y } = latLngToXY(region.lat, region.lng, w, h);
      if (Math.hypot(mx - x, my - y) < 20) {
        onRegionClick(region.name);
        return;
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="w-full h-full"
      style={{ cursor: "pointer" }}
    />
  );
}
