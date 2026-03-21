export default function Footer() {
  return (
    <footer className="bg-darkest py-16 border-t border-cream/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display text-2xl tracking-wider text-cream">
                EDISON
              </span>
              <span className="font-display text-2xl tracking-wider text-gold/70">
                BARBERSHOP
              </span>
            </div>
            <p className="text-cream/40 text-sm font-body leading-relaxed">
              Sharp cuts. Clean lines. Edison&apos;s neighborhood barbershop
              since 2016. Walk-ins always welcome.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-display text-lg tracking-wider text-cream mb-4">
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              {["Services", "About", "Gallery", "Reviews", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-cream/40 hover:text-gold text-sm font-body transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="text-right max-md:text-center">
            <h4 className="font-display text-lg tracking-wider text-cream mb-4">
              CONTACT
            </h4>
            <div className="space-y-2 text-sm font-body">
              <p className="text-cream/40">123 Main Street, Edison, NJ 08817</p>
              <a
                href="tel:+17325550456"
                className="block text-gold hover:text-gold-light transition-colors"
              >
                (732) 555-0456
              </a>
              <p className="text-cream/40">Mon–Sat 9AM–8PM · Sun 10AM–5PM</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-6 justify-end max-md:justify-center">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Google */}
              <a
                href="#"
                aria-label="Google"
                className="text-cream/30 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  <path d="M12 8v8m-4-4h8" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/25 font-body">
          <p>&copy; {new Date().getFullYear()} Edison Barbershop. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://nova-agents.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors"
            >
              Vektor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
