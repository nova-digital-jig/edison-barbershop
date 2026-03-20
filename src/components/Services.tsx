"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", name: "Classic Haircut", price: "$25" },
  { num: "02", name: "Skin Fade", price: "$30" },
  { num: "03", name: "Beard Trim", price: "$15" },
  { num: "04", name: "Hot Towel Shave", price: "$25" },
  { num: "05", name: "Kids Cut", desc: "Under 12", price: "$18" },
  { num: "06", name: "Haircut + Beard Combo", price: "$35" },
  { num: "07", name: "Hair Design / Line Up", price: "$35" },
  { num: "08", name: "Senior Cut", desc: "65+", price: "$20" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36"
    >
      {/* Section header */}
      <div className="mb-16 flex items-end justify-between">
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            What We Offer
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.03em] text-cream md:text-6xl">
            Services
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
          Walk-ins welcome. Every cut includes a consultation to get it right.
        </p>
      </div>

      {/* Service list */}
      <div className="border-t border-cream/10">
        {services.map((service) => (
          <div
            key={service.num}
            className="service-item service-row group flex cursor-default items-center justify-between border-b border-cream/10 py-6 md:py-8"
          >
            <div className="flex items-center gap-6 md:gap-10">
              <span className="text-sm text-gold/50">{service.num}</span>
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight md:text-2xl">
                  {service.name}
                </span>
                {service.desc && (
                  <span className="ml-3 text-sm text-muted">
                    ({service.desc})
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-gold md:text-xl">
                {service.price}
              </span>
              <span className="service-arrow text-gold">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
