export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.03em]">
              EDISON <span className="text-gold">BARBER</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Sharp cuts. Clean lines. Walk-ins welcome.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Edison, NJ</li>
              <li>
                <a
                  href="tel:7325550456"
                  className="transition-colors hover:text-gold"
                >
                  (732) 555-0456
                </a>
              </li>
              <li>
                <a
                  href="mailto:edisonbarbershop@example.com"
                  className="transition-colors hover:text-gold"
                >
                  edisonbarbershop@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Mon – Sat: 9:00 AM – 8:00 PM</li>
              <li>Sun: 10:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-muted md:flex-row">
          <p>
            Serving Edison, Metuchen, Woodbridge &amp; Highland Park
          </p>
          <p>
            © 2026 Edison Barbershop. Website by{" "}
            <a
              href="https://nova-digital-nextjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-gold/80"
            >
              Nova Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
