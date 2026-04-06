'use client';

import { useEffect, useRef } from 'react';
import { ImageTrailController } from '@/lib/utils';

const flairImages = [
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
  "https://assets.codepen.io/16327/Revised+Flair-4.png",
  "https://assets.codepen.io/16327/Revised+Flair-5.png",
  "https://assets.codepen.io/16327/Revised+Flair-6.png",
  "https://assets.codepen.io/16327/Revised+Flair-7.png",
  "https://assets.codepen.io/16327/Revised+Flair-8.png",
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
  "https://assets.codepen.io/16327/Revised+Flair-4.png",
  "https://assets.codepen.io/16327/Revised+Flair-5.png",
  "https://assets.codepen.io/16327/Revised+Flair-6.png",
  "https://assets.codepen.io/16327/Revised+Flair-7.png",
  "https://assets.codepen.io/16327/Revised+Flair-8.png",
];

// Threshold: pixels mouse must travel before next image appears
const THRESHOLD = 80;

export function MouseTrail({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const controllerRef = useRef<ImageTrailController | null>(null);

  useEffect(() => {
    // Create img elements and append to body so fixed positioning works correctly
    const imgs = flairImages.map((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.style.opacity = '0';
      document.body.appendChild(img);
      return img;
    });
    imgsRef.current = imgs;

    const controller = new ImageTrailController(imgs, THRESHOLD);
    controllerRef.current = controller;
    controller.init();

    const handleMouseMove = (e: MouseEvent) => {
      controller.setMousePos(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const container = containerRef.current;
    const onEnter = () => controller.setActive(true);
    const onLeave = () => controller.setActive(false);
    container?.addEventListener('mouseenter', onEnter);
    container?.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseenter', onEnter);
      container?.removeEventListener('mouseleave', onLeave);
      controller.destroy();
      imgs.forEach((img) => img.remove());
    };
  }, [containerRef]);

  return null;
}
