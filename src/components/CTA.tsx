"use client";

import { motion } from "framer-motion";
import {
  clipRevealUp,
  fadeUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const hours = [
  { days: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { days: "Saturday", time: "9:00 AM – 8:00 PM" },
  { days: "Sunday", time: "10:00 AM – 5:00 PM" },
];

const infoCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] as const },
  },
};

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-dark relative overflow-hidden"
    >
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body"
            variants={fadeUp}
          >
            Visit Us
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-wider text-cream"
            variants={clipRevealUp}
          >
            READY FOR A FRESH CUT?
          </motion.h2>
          <motion.div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-8" variants={fadeUp} />

          {/* Phone number — pulses subtly */}
          <motion.a
            href="tel:+17325550456"
            className="inline-block font-display text-4xl md:text-5xl text-gold hover:text-gold-light transition-colors tracking-wider"
            variants={fadeUp}
            whileInView={{
              scale: [1, 1.03, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            viewport={viewportConfig}
          >
            (732) 555-0456
          </motion.a>

          <motion.p
            className="text-cream/50 text-lg mt-4 font-body"
            variants={fadeUp}
          >
            No appointment needed — just walk in.
          </motion.p>
        </motion.div>

        {/* Info grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Hours */}
          <motion.div className="text-center md:text-left" variants={infoCard}>
            <h3 className="font-display text-2xl text-cream tracking-wider mb-4">
              HOURS
            </h3>
            <div className="space-y-2">
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-center md:justify-between text-sm font-body"
                >
                  <span className="text-cream/70">{h.days}</span>
                  <span className="text-gold ml-4">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div className="text-center" variants={infoCard}>
            <h3 className="font-display text-2xl text-cream tracking-wider mb-4">
              LOCATION
            </h3>
            <p className="text-cream/70 text-sm font-body leading-relaxed">
              123 Main Street
              <br />
              Edison, NJ 08817
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-gold text-sm font-body hover:text-gold-light transition-colors underline underline-offset-4"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Walk-in info */}
          <motion.div className="text-center md:text-right" variants={infoCard}>
            <h3 className="font-display text-2xl text-cream tracking-wider mb-4">
              WALK-INS
            </h3>
            <p className="text-cream/70 text-sm font-body leading-relaxed">
              No appointment necessary.
              <br />
              First come, first served.
              <br />
              Average wait: under 10 min.
            </p>
          </motion.div>
        </motion.div>

        {/* Map embed */}
        <motion.div
          className="mt-12 rounded-sm overflow-hidden border border-cream/10 aspect-[16/7]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <iframe
            title="Edison Barbershop location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48540.48831920546!2d-74.45!3d40.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b60e0830f82d%3A0x64a5e36e4ef47b92!2sEdison%2C%20NJ!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
