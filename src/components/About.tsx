"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "8+", label: "Years" },
  { value: "15K+", label: "Cuts" },
  { value: "4.9", label: "Stars" },
  { value: "Walk-ins", label: "Welcome" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current.querySelector("img"),
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Text reveal
      gsap.fromTo(
        ".about-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Stats reveal
      gsap.fromTo(
        ".about-stat",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Image */}
        <div
          ref={imageRef}
          className="relative aspect-[3/4] overflow-hidden rounded-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Edison Barbershop barber"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <span className="about-text text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Story
          </span>
          <h2 className="about-text mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.03em] text-cream md:text-5xl">
            The Neighborhood&apos;s
            <br />
            Go-To Barbershop
          </h2>
          <p className="about-text mt-6 max-w-lg text-lg leading-relaxed text-cream/60">
            Edison Barbershop has been the neighborhood&apos;s go-to for clean
            cuts since day one. Our barbers are trained in both classic and
            modern styles — from tight fades to traditional scissor cuts.
          </p>
          <p className="about-text mt-4 max-w-lg text-lg leading-relaxed text-cream/60">
            We believe every person deserves to look and feel their best. That
            means no rush jobs, just quality cuts at fair prices.
          </p>

          {/* Stats */}
          <div className="about-stats mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <div className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
