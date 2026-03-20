"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Barbershop fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Barber cutting hair",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Barbershop tools",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Barbershop interior",
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80",
    alt: "Barber at work",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
          Our Work
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.03em] text-cream md:text-6xl">
          Gallery
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card gallery-item relative aspect-square overflow-hidden rounded-sm"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
