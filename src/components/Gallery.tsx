"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cuts = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    label: "Skin Fade",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    label: "Classic Cut",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    label: "Beard Work",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    label: "Line Up",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    label: "Taper Fade",
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80",
    label: "Hot Towel Shave",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animate = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      gsap.from(el.querySelectorAll(".reveal-up"), {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(el.querySelectorAll(".gallery-item"), {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.querySelector(".gallery-grid"),
          start: "top 85%",
          once: true,
        },
      });
    };

    animate();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 bg-dark"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="reveal-up text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Fresh Cuts
          </p>
          <h2 className="reveal-up font-display text-5xl md:text-6xl tracking-wider text-cream">
            OUR WORK
          </h2>
          <div className="reveal-up w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {cuts.map((cut) => (
            <div
              key={cut.label}
              className="gallery-item relative aspect-square rounded-sm cursor-pointer"
            >
              <Image
                src={cut.src}
                alt={cut.label}
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="gallery-overlay rounded-sm">
                <span className="font-display text-xl tracking-wider text-cream">
                  {cut.label.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
