"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Walk-ins", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "nav-glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.03em] text-cream"
        >
          EDISON <span className="text-gold">BARBER</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7325550456"
            className="btn-gold rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-glass mt-2 border-t border-gold/10 px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7325550456"
            className="btn-gold mt-4 inline-block rounded-full px-6 py-3 text-sm font-semibold"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
