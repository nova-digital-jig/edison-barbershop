"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  clipRevealUp,
  fadeUp,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const stats = [
  { value: 8, suffix: "+", label: "Years" },
  { value: 15, suffix: "K+", label: "Cuts" },
  { value: 4.9, suffix: "★", label: "Rating", decimals: 1 },
  { value: null, display: "Walk-Ins", label: "Welcome" },
];

function CountUp({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-display text-3xl md:text-4xl text-gold tracking-wider">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image — slides from left with parallax depth */}
          <motion.div
            className="relative aspect-[4/5] rounded-sm overflow-hidden"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
              alt="Inside Edison Barbershop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold border accent */}
            <div className="absolute inset-0 border border-gold/20 rounded-sm" />
          </motion.div>

          {/* Text — slides from right */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p
              className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body"
              variants={fadeUp}
            >
              About Us
            </motion.p>
            <motion.h2
              className="font-display text-4xl md:text-5xl tracking-wider text-cream mb-6"
              variants={clipRevealUp}
            >
              THE SHOP
            </motion.h2>
            <motion.div className="w-16 h-0.5 bg-gold mb-8" variants={fadeUp} />

            <motion.p
              className="text-cream/70 text-lg leading-relaxed mb-6 font-body"
              variants={slideFromRight}
            >
              More than a barbershop — it&apos;s where Edison comes to look
              sharp. Our experienced barbers blend classic techniques with modern
              styles in a space that feels like home.
            </motion.p>
            <motion.p
              className="text-cream/50 text-base leading-relaxed mb-10 font-body"
              variants={slideFromRight}
            >
              Since 2016, we&apos;ve been the neighborhood spot for fresh fades,
              clean lineups, and hot towel shaves. No pretense, no appointments
              needed — just great cuts and good vibes.
            </motion.p>

            {/* Stats with count up */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={staggerContainer(0.12)}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} className="text-center" variants={fadeUp}>
                  {stat.value !== null ? (
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  ) : (
                    <div className="font-display text-3xl md:text-4xl text-gold tracking-wider">
                      {stat.display}
                    </div>
                  )}
                  <div className="text-cream/50 text-xs uppercase tracking-widest mt-1 font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
