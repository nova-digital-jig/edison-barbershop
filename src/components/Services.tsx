"use client";

import { motion } from "framer-motion";
import {
  clipRevealLeft,
  fadeUp,
  slideFromRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

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

const serviceItem = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] as const },
  },
};

const priceReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.15, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section
      id="services"
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
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body"
            variants={fadeUp}
          >
            What We Offer
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-wider text-cream"
            variants={clipRevealLeft}
          >
            THE MENU
          </motion.h2>
          <motion.div className="w-16 h-0.5 bg-gold mx-auto mt-4" variants={fadeUp} />
        </motion.div>

        {/* Price list */}
        <motion.div
          className="space-y-0"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className={`service-row flex items-baseline py-4 px-4 rounded-sm ${
                i < services.length - 1
                  ? "border-b border-cream/5"
                  : ""
              }`}
              variants={serviceItem}
            >
              <span className="text-cream text-base md:text-lg font-body font-medium">
                {service.name}
              </span>
              <span className="price-dots" />
              <motion.span
                className="text-gold font-display text-2xl md:text-3xl tracking-wide"
                variants={priceReveal}
              >
                {service.price}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-muted text-sm mt-10 font-body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          All services include consultation. Walk-ins welcome — no appointment
          needed.
        </motion.p>
      </div>
    </section>
  );
}
