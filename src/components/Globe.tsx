"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface GlobePin {
  name: string;
  lat: number;
  lng: number;
}

const PINS: GlobePin[] = [
  { name: "USA & Canada", lat: 42, lng: -100 },
  { name: "UK & Europe", lat: 52, lng: 12 },
  { name: "Australia & NZ", lat: -27, lng: 134 },
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

function isLand(lat: number, lng: number): boolean {
  if (lat > 60 && lat < 85 && lng > -140 && lng < -55) return true;
  if (lat > 48 && lat <= 60 && lng > -135 && lng < -52) return true;
  if (lat > 24 && lat <= 48 && lng > -125 && lng < -65) return true;
  if (lat > 14 && lat <= 24 && lng > -118 && lng < -80) return true;
  if (lat > 60 && lng > -55 && lng < -15) return true; // Greenland
  if (lat > -5 && lat <= 14 && lng > -82 && lng < -50) return true;
  if (lat > -25 && lat <= -5 && lng > -80 && lng < -34) return true;
  if (lat > -40 && lat <= -25 && lng > -75 && lng < -48) return true;
  if (lat > -56 && lat <= -40 && lng > -75 && lng < -58) return true;
  if (lat > 35 && lat <= 72 && lng > -10 && lng < 42) return true;
  if (lat > 55 && lat <= 72 && lng > -25 && lng < 32) return true;
  if (lat > 20 && lat <= 38 && lng > -18 && lng < 38) return true;
  if (lat > 0 && lat <= 20 && lng > -18 && lng < 50) return true;
  if (lat > -20 && lat <= 0 && lng > -18 && lng < 52) return true;
  if (lat > -35 && lat <= -20 && lng > 14 && lng < 52) return true;
  if (lat > 50 && lat <= 80 && lng > 30 && lng < 180) return true;
  if (lat > 12 && lat <= 42 && lng > 34 && lng < 62) return true;
  if (lat > 8 && lat <= 50 && lng > 62 && lng < 150) return true;
  if (lat > -10 && lat <= 8 && lng > 95 && lng < 142) return true;
  if (lat > 30 && lat <= 46 && lng > 129 && lng < 146) return true;
  if (lat > -40 && lat <= -10 && lng > 113 && lng < 154) return true;
  if (lat > -47 && lat <= -34 && lng > 166 && lng < 178) return true;
  return false;
}

interface Props {
  activeRegion: string;
  onRegionClick: (name: string) => void;
}

export default function Globe({ activeRegion, onRegionClick }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    rotX: 0.2,
    rotY: 0.6,
    isDragging: false,
    prevMouse: { x: 0, y: 0 },
    autoRotate: true,
  });
  const pinMeshesRef = useRef<{ mesh: THREE.Mesh; name: string }[]>([]);
  const sceneObjRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    dotMesh: THREE.Mesh;
    pinGroup: THREE.Group;
  } | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || el.offsetWidth || 600;
    const h = el.clientHeight || el.offsetHeight || 420;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.z = 2.7;

    // Lighting — soft, like reference image
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const sun = new THREE.DirectionalLight(0xffffff, 0.4);
    sun.position.set(4, 2, 4);
    scene.add(sun);

    // Globe base — light/white sphere
    const globeGeo = new THREE.SphereGeometry(1, 80, 80);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0xf5f0eb,
      shininess: 8,
      transparent: true,
      opacity: 0.92,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Subtle edge glow ring
    const glowGeo = new THREE.SphereGeometry(1.01, 80, 80);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xe8e0d8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // Build dot texture on canvas
    const dotCanvas = document.createElement("canvas");
    const CW = 2048, CH = 1024;
    dotCanvas.width = CW;
    dotCanvas.height = CH;
    const ctx = dotCanvas.getContext("2d")!;

    const step = 3.5; // degrees between dots
    for (let lat = -85; lat <= 85; lat += step) {
      for (let lng = -180; lng <= 180; lng += step) {
        if (!isLand(lat, lng)) continue;
        const x = ((lng + 180) / 360) * CW;
        const y = ((90 - lat) / 180) * CH;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(107,124,60,0.55)";
        ctx.fill();
      }
    }

    const dotTex = new THREE.CanvasTexture(dotCanvas);
    const dotGeo = new THREE.SphereGeometry(1.003, 80, 80);
    const dotMat = new THREE.MeshBasicMaterial({
      map: dotTex,
      transparent: true,
      depthWrite: false,
    });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    scene.add(dotMesh);

    // Pin group — rotates with globe
    const pinGroup = new THREE.Group();
    scene.add(pinGroup);
    pinMeshesRef.current = [];

    for (const pin of PINS) {
      const pos = latLngToVec3(pin.lat, pin.lng, 1.06);
      const isActive = pin.name === activeRegion;

      // Pin sphere
      const geo = new THREE.SphereGeometry(isActive ? 0.055 : 0.04, 16, 16);
      const mat = new THREE.MeshPhongMaterial({
        color: isActive ? 0xd4a54a : 0x6b7c3c,
        emissive: isActive ? 0x8b6a1a : 0x3a4a1a,
        shininess: 30,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      pinGroup.add(mesh);
      pinMeshesRef.current.push({ mesh, name: pin.name });

      // Outer pulse ring
      const ringGeo = new THREE.RingGeometry(0.065, 0.085, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isActive ? 0xd4a54a : 0x6b7c3c,
        transparent: true,
        opacity: isActive ? 0.6 : 0.3,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      pinGroup.add(ring);
    }

    sceneObjRef.current = { scene, camera, renderer, globe, dotMesh, pinGroup };

    // Drag controls
    const s = stateRef.current;
    const onDown = (e: MouseEvent) => { s.isDragging = true; s.autoRotate = false; s.prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMove = (e: MouseEvent) => {
      if (!s.isDragging) return;
      s.rotY += (e.clientX - s.prevMouse.x) * 0.005;
      s.rotX += (e.clientY - s.prevMouse.y) * 0.005;
      s.rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, s.rotX));
      s.prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onUp = () => { s.isDragging = false; };

    const onTouchDown = (e: TouchEvent) => { s.isDragging = true; s.autoRotate = false; s.prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const onTouchMove = (e: TouchEvent) => {
      if (!s.isDragging) return;
      s.rotY += (e.touches[0].clientX - s.prevMouse.x) * 0.005;
      s.rotX += (e.touches[0].clientY - s.prevMouse.y) * 0.005;
      s.prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchUp = () => { s.isDragging = false; };

    // Click pins
    const raycaster = new THREE.Raycaster();
    const mouse2 = new THREE.Vector2();
    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse2.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2, camera);
      const hits = raycaster.intersectObjects(pinMeshesRef.current.map(p => p.mesh));
      if (hits.length) {
        const hit = pinMeshesRef.current.find(p => p.mesh === hits[0].object);
        if (hit) onRegionClick(hit.name);
      }
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("touchstart", onTouchDown, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchUp);
    el.addEventListener("click", onClick);

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      if (s.autoRotate) s.rotY += 0.003;
      const rx = s.rotX, ry = s.rotY;
      globe.rotation.set(rx, ry, 0);
      dotMesh.rotation.set(rx, ry, 0);
      pinGroup.rotation.set(rx, ry, 0);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = el.clientWidth || el.offsetWidth;
      const nh = el.clientHeight || el.offsetHeight;
      if (nw < 10 || nh < 10) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(el);
    window.addEventListener("resize", onResize);
    // Retry after layout settles
    setTimeout(onResize, 100);
    setTimeout(onResize, 500);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onTouchDown);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchUp);
      el.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Update pin colors when activeRegion changes
  useEffect(() => {
    for (const { mesh, name } of pinMeshesRef.current) {
      const mat = mesh.material as THREE.MeshPhongMaterial;
      const active = name === activeRegion;
      mat.color.set(active ? 0xd4a54a : 0x6b7c3c);
      mat.emissive.set(active ? 0x8b6a1a : 0x3a4a1a);
      mesh.scale.setScalar(active ? 1.5 : 1.0);
    }
  }, [activeRegion]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ cursor: "grab", background: "transparent" }}
    />
  );
}
