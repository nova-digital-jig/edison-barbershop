"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "8+", label: "Years" },
  { value: "15K+", label: "Cuts" },
  { value: "4.9★", label: "Rating" },
  { value: "Walk-Ins", label: "Welcome" },
];

export default function About() {
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
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(el.querySelector(".about-image"), {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });
    };

    animate();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="about-image relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
              alt="Inside Edison Barbershop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold border accent */}
            <div className="absolute inset-0 border border-gold/20 rounded-sm" />
          </div>

          {/* Text */}
          <div>
            <p className="reveal-up text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">
              About Us
            </p>
            <h2 className="reveal-up font-display text-4xl md:text-5xl tracking-wider text-cream mb-6">
              THE SHOP
            </h2>
            <div className="reveal-up w-16 h-0.5 bg-gold mb-8" />

            <p className="reveal-up text-cream/70 text-lg leading-relaxed mb-6 font-body">
              More than a barbershop — it&apos;s where Edison comes to look
              sharp. Our experienced barbers blend classic techniques with modern
              styles in a space that feels like home.
            </p>
            <p className="reveal-up text-cream/50 text-base leading-relaxed mb-10 font-body">
              Since 2016, we&apos;ve been the neighborhood spot for fresh fades,
              clean lineups, and hot towel shaves. No pretense, no appointments
              needed — just great cuts and good vibes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="reveal-up text-center">
                  <div className="font-display text-3xl md:text-4xl text-gold tracking-wider">
                    {stat.value}
                  </div>
                  <div className="text-cream/50 text-xs uppercase tracking-widest mt-1 font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
