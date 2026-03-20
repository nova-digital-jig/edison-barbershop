import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Edison Barbershop | Sharp Cuts. Clean Lines. | Edison, NJ",
  description:
    "Edison NJ's premier barbershop. Walk-ins welcome with less than 10 minute wait. Classic haircuts, skin fades, beard trims, hot towel shaves. 4.9★ rated with 450+ reviews.",
  keywords: [
    "barbershop Edison NJ",
    "haircut Edison",
    "skin fade Edison",
    "beard trim Edison NJ",
    "walk-in barbershop",
    "barber near me",
    "Edison barber",
    "mens haircut Edison NJ",
  ],
  openGraph: {
    title: "Edison Barbershop | Sharp Cuts. Clean Lines.",
    description:
      "Edison NJ's premier barbershop. Walk-ins welcome. Classic haircuts, skin fades, beard trims & more.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Edison Barbershop",
  image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80",
  telephone: "(732) 555-0456",
  email: "edisonbarbershop@example.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edison",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5187,
    longitude: -74.4121,
  },
  url: "https://edisonbarbershop.com",
  priceRange: "$18-$35",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "450",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Barbershop Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Classic Haircut" }, price: "25.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skin Fade" }, price: "30.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Trim" }, price: "15.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Towel Shave" }, price: "25.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Cut" }, price: "18.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haircut + Beard Combo" }, price: "35.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Design / Line Up" }, price: "35.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Senior Cut" }, price: "20.00", priceCurrency: "USD" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-cream">{children}</body>
    </html>
  );
}
