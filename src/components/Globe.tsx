"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface GlobePin {
  name: string;
  lat: number;
  lng: number;
  color: string;
  share: string;
}

const PINS: GlobePin[] = [
  { name: "USA & Canada", lat: 40, lng: -100, color: "#6B7C3C", share: "60%" },
  { name: "UK & Europe", lat: 50, lng: 10, color: "#6B7C3C", share: "30%" },
  { name: "Australia & NZ", lat: -27, lng: 134, color: "#6B7C3C", share: "10%" },
];

function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

interface Props {
  activeRegion: string;
  onRegionClick: (name: string) => void;
}

export default function Globe({ activeRegion, onRegionClick }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    globe: THREE.Mesh;
    pinMeshes: { mesh: THREE.Mesh; pin: GlobePin }[];
    animId: number;
    isDragging: boolean;
    prevMouse: { x: number; y: number };
    rotX: number;
    rotY: number;
    autoRotate: boolean;
  } | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth;
    const h = el.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 2.8;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 3, 5);
    scene.add(dir);

    // Globe sphere
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0xf5f0eb,
      shininess: 20,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Dotted land overlay using canvas texture
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 2048;
    dotCanvas.height = 1024;
    const ctx = dotCanvas.getContext("2d")!;

    // Draw dotted pattern for continents using simplified point cloud
    ctx.fillStyle = "rgba(107,124,60,0.35)";
    const landPoints: [number, number][] = [];

    // North America
    for (let lat = 15; lat < 75; lat += 3) {
      for (let lng = -170; lng < -50; lng += 3) {
        if (isLand(lat, lng, "NA")) landPoints.push([lat, lng]);
      }
    }
    // Europe
    for (let lat = 35; lat < 72; lat += 3) {
      for (let lng = -10; lng < 45; lng += 3) {
        if (isLand(lat, lng, "EU")) landPoints.push([lat, lng]);
      }
    }
    // Asia
    for (let lat = 0; lat < 75; lat += 3) {
      for (let lng = 45; lng < 150; lng += 3) {
        if (isLand(lat, lng, "AS")) landPoints.push([lat, lng]);
      }
    }
    // Africa
    for (let lat = -40; lat < 38; lat += 3) {
      for (let lng = -20; lng < 55; lng += 3) {
        if (isLand(lat, lng, "AF")) landPoints.push([lat, lng]);
      }
    }
    // South America
    for (let lat = -60; lat < 15; lat += 3) {
      for (let lng = -82; lng < -34; lng += 3) {
        if (isLand(lat, lng, "SA")) landPoints.push([lat, lng]);
      }
    }
    // Australia
    for (let lat = -45; lat < -10; lat += 3) {
      for (let lng = 113; lng < 155; lng += 3) {
        if (isLand(lat, lng, "AU")) landPoints.push([lat, lng]);
      }
    }

    for (const [lat, lng] of landPoints) {
      const x = ((lng + 180) / 360) * 2048;
      const y = ((90 - lat) / 180) * 1024;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    const dotTex = new THREE.CanvasTexture(dotCanvas);
    const dotGeo = new THREE.SphereGeometry(1.002, 64, 64);
    const dotMat = new THREE.MeshBasicMaterial({ map: dotTex, transparent: true, depthWrite: false });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    scene.add(dotMesh);

    // Pins
    const pinMeshes: { mesh: THREE.Mesh; pin: GlobePin }[] = [];
    for (const pin of PINS) {
      const pos = latLngToVec3(pin.lat, pin.lng, 1.05);
      const geo = new THREE.SphereGeometry(0.04, 16, 16);
      const mat = new THREE.MeshPhongMaterial({ color: 0x6b7c3c, emissive: 0x3a4a1a });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      scene.add(mesh);

      // Pulse ring
      const ringGeo = new THREE.RingGeometry(0.05, 0.07, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x6b7c3c, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      ring.rotateX(Math.PI / 2);
      scene.add(ring);

      pinMeshes.push({ mesh, pin });
    }

    // Rotation state
    let rotX = 0.3;
    let rotY = 0.5;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = (e.clientX - prevMouse.x) * 0.005;
      const dy = (e.clientY - prevMouse.y) * 0.005;
      rotY += dx;
      rotX += dy;
      rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotX));
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => { isDragging = false; };

    // Touch
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const dx = (e.touches[0].clientX - prevMouse.x) * 0.005;
      const dy = (e.touches[0].clientY - prevMouse.y) * 0.005;
      rotY += dx;
      rotX += dy;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    // Click detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(pinMeshes.map((p) => p.mesh));
      if (hits.length > 0) {
        const hit = pinMeshes.find((p) => p.mesh === hits[0].object);
        if (hit) onRegionClick(hit.pin.name);
      }
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    el.addEventListener("click", onClick);

    // Animate
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (autoRotate) rotY += 0.003;
      globe.rotation.x = rotX;
      globe.rotation.y = rotY;
      dotMesh.rotation.x = rotX;
      dotMesh.rotation.y = rotY;
      for (const { mesh } of pinMeshes) {
        mesh.rotation.x = rotX;
        mesh.rotation.y = rotY;
      }
      // sync rings
      scene.children.forEach((c) => {
        if (c instanceof THREE.Mesh && c !== globe && c !== dotMesh && !pinMeshes.find((p) => p.mesh === c)) {
          c.rotation.x = rotX;
          c.rotation.y = rotY;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    const ref = {
      renderer, scene, camera, globe, pinMeshes, animId,
      isDragging, prevMouse, rotX, rotY, autoRotate,
    };
    sceneRef.current = ref;

    const onResize = () => {
      if (!el) return;
      const w2 = el.clientWidth;
      const h2 = el.clientHeight;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      el.removeChild(renderer.domElement);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Highlight active pin
  useEffect(() => {
    if (!sceneRef.current) return;
    for (const { mesh, pin } of sceneRef.current.pinMeshes) {
      const mat = mesh.material as THREE.MeshPhongMaterial;
      if (pin.name === activeRegion) {
        mat.color.set(0xd4a54a);
        mat.emissive.set(0x8b6a1a);
        mesh.scale.setScalar(1.6);
      } else {
        mat.color.set(0x6b7c3c);
        mat.emissive.set(0x3a4a1a);
        mesh.scale.setScalar(1.0);
      }
    }
  }, [activeRegion]);

  return (
    <div ref={mountRef} className="w-full h-full" style={{ cursor: "grab" }} />
  );
}

// Simplified land-detection heuristic
function isLand(lat: number, lng: number, continent: string): boolean {
  if (continent === "NA") {
    if (lat > 60) return lng > -140 && lng < -60;
    if (lat > 50) return lng > -135 && lng < -55;
    if (lat > 30) return lng > -125 && lng < -65;
    if (lat > 20) return lng > -120 && lng < -80 || (lng > -90 && lng < -60);
    return lng > -110 && lng < -75;
  }
  if (continent === "EU") {
    if (lat > 60) return lng > -25 && lng < 30;
    if (lat > 50) return lng > -10 && lng < 40;
    if (lat > 40) return lng > -10 && lng < 42;
    return lng > -5 && lng < 30;
  }
  if (continent === "AS") {
    if (lat > 60) return lng > 55 && lng < 145;
    if (lat > 40) return lng > 45 && lng < 145;
    if (lat > 20) return lng > 50 && lng < 150;
    if (lat > 0) return (lng > 70 && lng < 150) || (lng > 95 && lng < 140);
    return lng > 100 && lng < 145;
  }
  if (continent === "AF") {
    if (lat > 20) return lng > -18 && lng < 40;
    if (lat > 0) return lng > -18 && lng < 50;
    if (lat > -20) return lng > 10 && lng < 52;
    return lng > 15 && lng < 50;
  }
  if (continent === "SA") {
    if (lat > 0) return lng > -82 && lng < -50;
    if (lat > -25) return lng > -82 && lng < -34;
    if (lat > -40) return lng > -75 && lng < -45;
    return lng > -75 && lng < -55;
  }
  if (continent === "AU") {
    if (lat > -20) return lng > 130 && lng < 155;
    if (lat > -35) return lng > 113 && lng < 155;
    return lng > 115 && lng < 152;
  }
  return false;
}
