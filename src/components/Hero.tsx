"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const words = ["SHARP CUTS.", "CLEAN LINES.", "WALK-INS WELCOME."];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.15,
          delay: 2,
        }
      );

      gsap.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 2.6 }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 2.8,
        }
      );

      gsap.fromTo(
        ".hero-trust",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 3.1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Edison Barbershop interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-12">
        <div className="max-w-5xl">
          {/* Main headline */}
          <h1 className="overflow-hidden">
            {words.map((word, i) => (
              <span
                key={i}
                className="hero-word block font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.95] tracking-[-0.05em] text-cream"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 10rem)",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="hero-sub mt-8 max-w-lg text-lg leading-relaxed text-cream/60 md:text-xl">
            Edison NJ&apos;s premier barbershop. No appointment needed.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:7325550456"
              className="hero-cta btn-gold rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Walk In Today
            </a>
            <a
              href="#services"
              className="hero-cta btn-ghost rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream"
            >
              View Cuts
            </a>
          </div>

          {/* Trust bar */}
          <div className="hero-trust mt-12 flex flex-wrap gap-6 text-sm text-cream/50 md:gap-10">
            <span className="flex items-center gap-2">
              <span className="text-gold">★</span> 4.9 Stars
            </span>
            <span>450+ Reviews</span>
            <span>&lt;10 Min Wait</span>
          </div>
        </div>
      </div>
    </section>
  );
}
