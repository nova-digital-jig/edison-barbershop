"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  clipRevealUp,
  fadeUp,
  scaleReveal,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const cuts = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    label: "Skin Fade",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    label: "Classic Cut",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    label: "Beard Work",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    label: "Line Up",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    label: "Taper Fade",
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80",
    label: "Hot Towel Shave",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark">
      <div className="mx-auto max-w-7xl px-6">
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
            Fresh Cuts
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-wider text-cream"
            variants={clipRevealUp}
          >
            OUR WORK
          </motion.h2>
          <motion.div className="w-16 h-0.5 bg-gold mx-auto mt-4" variants={fadeUp} />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {cuts.map((cut) => (
            <motion.div
              key={cut.label}
              className="gallery-item relative aspect-square rounded-sm cursor-pointer overflow-hidden"
              variants={scaleReveal}
              whileHover={{
                y: -8,
                boxShadow: "0 0 0 2px #C8A35A",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={cut.src}
                alt={cut.label}
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="gallery-overlay rounded-sm">
                <span className="font-display text-xl tracking-wider text-cream">
                  {cut.label.toUpperCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
