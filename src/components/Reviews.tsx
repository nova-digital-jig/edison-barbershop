"use client";

import { motion } from "framer-motion";
import {
  clipRevealUp,
  fadeUp,
  slideFromRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const reviews = [
  {
    name: "Marcus J.",
    text: "Best barbershop in Edison, hands down. Been coming here for 3 years — never had a bad cut. The skin fades are always on point.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Walk-in friendly and never a long wait. My barber always knows exactly what I want. The hot towel shave is a must-try experience.",
    rating: 5,
  },
  {
    name: "Chris L.",
    text: "Finally found a barbershop that gets the lineup right every time. Clean shop, great vibes, fair prices. My whole family comes here now.",
    rating: 5,
  },
  {
    name: "Anthony M.",
    text: "Took my son for his first real haircut here. The barbers were patient and did an amazing job. We're both regulars now — wouldn't go anywhere else.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#C8A35A"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const cardSlide = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] as const },
  },
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-black">
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
            Testimonials
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-wider text-cream"
            variants={clipRevealUp}
          >
            WHAT THEY SAY
          </motion.h2>
          <motion.div className="w-16 h-0.5 bg-gold mx-auto mt-4" variants={fadeUp} />
        </motion.div>

        {/* Cards — slide from right with stagger */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              className="review-card rounded-sm p-6"
              variants={cardSlide}
            >
              {/* Quote mark */}
              <span className="font-display text-5xl text-gold/30 leading-none block mb-2">
                &ldquo;
              </span>
              <Stars count={review.rating} />
              <p className="text-cream/70 text-sm leading-relaxed mb-4 font-body">
                {review.text}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-cream/5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-xs font-bold font-body">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-cream text-sm font-medium font-body">
                    {review.name}
                  </p>
                  <p className="text-muted text-xs font-body">Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
