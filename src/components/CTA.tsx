"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-line",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.15,
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
      id="contact"
      className="border-t border-cream/10 py-32 lg:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <h2
          className="cta-line font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.95] tracking-[-0.05em] text-cream"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          READY FOR
        </h2>
        <h2
          className="cta-line font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.95] tracking-[-0.05em] text-gold"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          A FRESH CUT?
        </h2>

        <div className="cta-line mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="tel:7325550456"
            className="btn-gold rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-wider"
          >
            Call (732) 555-0456
          </a>
          <a
            href="#hero"
            className="btn-ghost rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-wider text-cream"
          >
            Walk In Today
          </a>
        </div>

        <p className="cta-line mt-8 text-sm text-muted">
          Mon–Sat 9am–8pm · Sun 10am–5pm
        </p>
      </div>
    </section>
  );
}
