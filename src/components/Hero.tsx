"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let gsapModule: typeof import("gsap") | null = null;

    const animate = async () => {
      gsapModule = await import("gsap");
      const gsap = gsapModule.gsap;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-scissors", {
        opacity: 0,
        scale: 0.5,
        rotation: -90,
        duration: 0.8,
        delay: 0.3,
      })
        .from(
          ".hero-line-1",
          { opacity: 0, y: 60, duration: 0.8 },
          "-=0.3"
        )
        .from(
          ".hero-line-2",
          { opacity: 0, y: 60, duration: 0.8 },
          "-=0.5"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 30, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-ctas",
          { opacity: 0, y: 30, duration: 0.6 },
          "-=0.3"
        )
        .from(
          ".hero-trust",
          { opacity: 0, y: 20, duration: 0.5 },
          "-=0.2"
        );
    };

    animate();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Barbershop atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Scissors icon */}
        <div className="hero-scissors mb-6 flex justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C8A35A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
        </div>

        <h1>
          <span className="hero-line-1 block font-display text-[clamp(3.5rem,10vw,5rem)] leading-[0.95] tracking-wider text-cream">
            SHARP CUTS.
          </span>
          <span className="hero-line-2 block font-display text-[clamp(3.5rem,10vw,5rem)] leading-[0.95] tracking-wider text-gold">
            CLEAN LINES.
          </span>
        </h1>

        <p className="hero-sub mt-6 text-lg md:text-xl text-cream/70 max-w-xl mx-auto font-body">
          Edison&apos;s premier barbershop. Walk-ins welcome.
          <br className="hidden sm:block" /> No appointment needed.
        </p>

        {/* CTAs */}
        <div className="hero-ctas mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-gold px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm"
          >
            Walk In Today
          </a>
          <a
            href="#services"
            className="btn-ghost px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm text-cream"
          >
            View Prices
          </a>
        </div>

        {/* Trust strip */}
        <div className="hero-trust mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/50">
          <span className="flex items-center gap-1">
            <span className="text-gold">★</span> 4.9 Google
          </span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span>450+ Reviews</span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span>Est. 2016</span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span className="text-gold/80">Walk-Ins Welcome</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
