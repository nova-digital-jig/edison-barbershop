import type { Variants, Transition } from "framer-motion";

// Barbershop easing — confident, sharp, like a blade
const BLADE: [number, number, number, number] = [0.77, 0, 0.175, 1];
const SNAP: [number, number, number, number] = [0.33, 1, 0.68, 1];

// ─── Clip-path reveals (blade cutting across) ────────────────────────
export const clipRevealUp: Variants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.6, ease: BLADE },
  },
};

export const clipRevealLeft: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.6, ease: BLADE },
  },
};

export const clipRevealRight: Variants = {
  hidden: {
    clipPath: "inset(0 0 0 100%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0 0 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: BLADE },
  },
};

// ─── Fade / slide variants ────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SNAP },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: BLADE },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: BLADE },
  },
};

export const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: BLADE },
  },
};

// ─── Scale reveal (gallery) ───────────────────────────────────────────
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: SNAP },
  },
};

// ─── Spin in (scissors icon) ──────────────────────────────────────────
export const spinIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: BLADE },
  },
};

// ─── Background zoom ─────────────────────────────────────────────────
export const heroZoom: Variants = {
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: { duration: 3, ease: "easeOut" },
  },
};

// ─── Pulse (phone number) ────────────────────────────────────────────
export const subtlePulse: Variants = {
  visible: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ─── Stagger containers ──────────────────────────────────────────────
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fastStagger = staggerContainer(0.08);
export const mediumStagger = staggerContainer(0.1);
export const heroStagger = staggerContainer(0.1, 0.3);

// ─── Shared viewport config ──────────────────────────────────────────
export const viewportConfig = { once: true, amount: 0.2 } as const;
