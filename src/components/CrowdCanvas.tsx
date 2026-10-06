"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface CrowdCanvasProps {
  src?: string;
  rows?: number;
  cols?: number;
}

type Peep = {
  image: HTMLImageElement;
  rect: number[];
  width: number;
  height: number;
  drawArgs: any[];
  x: number;
  y: number;
  anchorY: number;
  scaleX: number;
  walk: gsap.core.Timeline | null;
  setRect: (rect: number[]) => void;
  render: (ctx: CanvasRenderingContext2D) => void;
};

const randomRange = (min: number, max: number) =>
  min + Math.random() * (max - min);
const randomIndex = (array: any[]) => (randomRange(0, array.length) | 0);
const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
const removeItemFromArray = (array: any[], item: any) =>
  removeFromArray(array, array.indexOf(item));
const removeRandomFromArray = (array: any[]) =>
  removeFromArray(array, randomIndex(array));
const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

function createPeep(image: HTMLImageElement, rect: number[]): Peep {
  const peep: Peep = {
    image,
    rect: [],
    width: 0,
    height: 0,
    drawArgs: [],
    x: 0,
    y: 0,
    anchorY: 0,
    scaleX: 1,
    walk: null,
    setRect(r: number[]) {
      peep.rect = r;
      peep.width = r[2];
      peep.height = r[3];
      peep.drawArgs = [peep.image, ...r, 0, 0, peep.width, peep.height];
    },
    render(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.translate(peep.x, peep.y);
      ctx.scale(peep.scaleX, 1);
      ctx.drawImage(
        peep.image,
        peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3],
        0, 0, peep.width, peep.height,
      );
      ctx.restore();
    },
  };
  peep.setRect(rect);
  return peep;
}

export function CrowdCanvas({
  src = "/images/crowd-peeps.png",
  rows = 15,
  cols = 7,
}: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const resetPeep = (peep: Peep) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      // Headroom padding so the bounce (startY - 10) never reaches or clips past the top (y = 0)
      const minHeadroom = 24;
      const minStartY = minHeadroom + 12; // bounce allowance
      const naturalStartY = stage.height - peep.height + (100 - 250 * gsap.parseEase("power2.in")(Math.random()));
      const startY = Math.max(minStartY, naturalStartY);
      let startX: number, endX: number;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = (peep: Peep, props: { startX: number; startY: number; endX: number }) => {
      const { startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(peep, { duration: yDuration, repeat: xDuration / yDuration, yoyo: true, y: startY - 10 }, 0);

      return tl;
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const props = resetPeep(peep);
      const walk = normalWalk(peep, props).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((p) => p.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((p) => p.walk?.kill());
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      while (availablePeeps.length) {
        addPeepToCrowd().walk?.progress(Math.random());
      }
    };

    const img = document.createElement("img");
    img.onload = () => {
      const { naturalWidth: w, naturalHeight: h } = img;
      const total = rows * cols;
      const rw = w / rows;
      const rh = h / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep(img, [
            (i % rows) * rw,
            ((i / rows) | 0) * rh,
            rw,
            rh,
          ]),
        );
      }

      resize();
      gsap.ticker.add(render);
    };
    img.src = src;

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(render);
      crowd.forEach((p) => p.walk?.kill());
    };
  }, [src, rows, cols]);

  return <canvas ref={canvasRef} className="absolute bottom-0 h-full w-full" />;
}
