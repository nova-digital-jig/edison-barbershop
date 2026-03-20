"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    quote:
      "Best barbershop in Edison. Marco always gets my fade perfect. 10/10.",
    author: "James T.",
    location: "Edison",
  },
  {
    quote:
      "Walk-in friendly and never a long wait. The whole vibe is great.",
    author: "Andre W.",
    location: "Metuchen",
  },
  {
    quote:
      "Been coming here since they opened. Consistent quality every single time.",
    author: "Mike R.",
    location: "Edison",
  },
  {
    quote:
      "My sons and I all get our cuts here. Fair prices and great barbers.",
    author: "Carlos M.",
    location: "Woodbridge",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".review-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
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
      id="reviews"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36"
    >
      {/* Header */}
      <div className="mb-16">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
          Reviews
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.03em] text-cream md:text-6xl">
          What Clients Say
        </h2>
      </div>

      {/* Reviews grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="review-card testimonial-card rounded-sm p-8 md:p-10"
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j}>★</span>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-cream/80">
              &ldquo;{review.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-gold">
                {review.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-cream">
                  {review.author}
                </div>
                <div className="text-xs text-muted">{review.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
