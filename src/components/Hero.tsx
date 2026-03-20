"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  clipRevealUp,
  fadeUp,
  spinIn,
  heroZoom,
  heroStagger,
  viewportConfig,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with zoom */}
      <motion.div
        className="absolute inset-0"
        variants={heroZoom}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Barbershop atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Scissors icon — spins in */}
        <motion.div className="mb-6 flex justify-center" variants={spinIn}>
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
        </motion.div>

        <h1>
          <motion.span
            className="block font-display text-[clamp(3.5rem,10vw,5rem)] leading-[0.95] tracking-wider text-cream"
            variants={clipRevealUp}
          >
            SHARP CUTS.
          </motion.span>
          <motion.span
            className="block font-display text-[clamp(3.5rem,10vw,5rem)] leading-[0.95] tracking-wider text-gold"
            variants={clipRevealUp}
          >
            CLEAN LINES.
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-cream/70 max-w-xl mx-auto font-body"
          variants={fadeUp}
        >
          Edison&apos;s premier barbershop. Walk-ins welcome.
          <br className="hidden sm:block" /> No appointment needed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
        >
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
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/50"
          variants={fadeUp}
        >
          <span className="flex items-center gap-1">
            <span className="text-gold">★</span> 4.9 Google
          </span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span>450+ Reviews</span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span>Est. 2016</span>
          <span className="hidden sm:inline text-cream/20">·</span>
          <span className="text-gold/80">Walk-Ins Welcome</span>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
