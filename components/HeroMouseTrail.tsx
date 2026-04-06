'use client';

import { useEffect, useRef, useState } from 'react';
import { MouseTrail } from '@/components/ui/mouse-trail';

export default function HeroMouseTrail() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    heroRef.current = document.querySelector('.hero');
    setReady(true);
  }, []);

  if (!ready) return null;
  return <MouseTrail containerRef={heroRef} />;
}
