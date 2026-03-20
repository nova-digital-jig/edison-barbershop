"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null;

    const init = async () => {
      const Lenis = (await import("lenis")).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}
