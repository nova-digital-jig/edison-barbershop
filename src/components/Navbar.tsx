"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-solid py-3" : "bg-black/90 py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1">
          <span className="font-display text-2xl tracking-wider text-cream">
            EDISON
          </span>
          <span className="font-display text-2xl tracking-wider text-gold font-light opacity-70">
            BARBERSHOP
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold px-5 py-2.5 text-sm font-bold tracking-wider uppercase rounded-sm"
          >
            Walk In Today
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/98 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-4xl text-cream hover:text-gold transition-colors tracking-wider"
          >
            {link.label.toUpperCase()}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="btn-gold px-8 py-3 text-lg font-bold tracking-wider uppercase rounded-sm mt-4"
        >
          Walk In Today
        </a>
      </div>
    </nav>
  );
}
