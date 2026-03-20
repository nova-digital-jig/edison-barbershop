"use client";

import { useEffect, useRef } from "react";

const services = [
  { name: "Classic Haircut", price: "$25" },
  { name: "Skin Fade", price: "$30" },
  { name: "Beard Trim", price: "$15" },
  { name: "Hot Towel Shave", price: "$25" },
  { name: "Haircut + Beard", price: "$35" },
  { name: "Kids Cut (under 12)", price: "$18" },
  { name: "Hair Design / Line Up", price: "$35" },
  { name: "Senior Cut (65+)", price: "$20" },
];

export default function Services() {
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
    };

    animate();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-dark"
    >
      {/* Decorative barber pole stripes on sides */}
      <div className="absolute left-8 top-0 bottom-0 hidden lg:block">
        <div className="barber-stripe h-full" />
      </div>
      <div className="absolute right-8 top-0 bottom-0 hidden lg:block">
        <div className="barber-stripe h-full" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="reveal-up text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">
            What We Offer
          </p>
          <h2 className="reveal-up font-display text-5xl md:text-6xl tracking-wider text-cream">
            THE MENU
          </h2>
          <div className="reveal-up w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* Price list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`reveal-up service-row flex items-baseline py-4 px-4 rounded-sm ${
                i < services.length - 1
                  ? "border-b border-cream/5"
                  : ""
              }`}
            >
              <span className="text-cream text-base md:text-lg font-body font-medium">
                {service.name}
              </span>
              <span className="price-dots" />
              <span className="text-gold font-display text-2xl md:text-3xl tracking-wide">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="reveal-up text-center text-muted text-sm mt-10 font-body">
          All services include consultation. Walk-ins welcome — no appointment
          needed.
        </p>
      </div>
    </section>
  );
}
