import type { Metadata } from "next";
import "./globals.css";

export const siteUrl = "https://drsnowma.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}/#business`,
  name: "Dr. Snow",
  description: "Residential seasonal membership and pay-per-storm snow removal with optional ice control serving Greater Springfield and Western Massachusetts.",
  url: siteUrl,
  telephone: "+1-413-330-8573",
  email: "info@drsnowma.com",
  image: `${siteUrl}/dr-snow-primary-logo.webp`,
  logo: `${siteUrl}/dr-snow-primary-logo.webp`,
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-413-330-8573",
    email: "info@drsnowma.com",
    contactType: "customer service",
    areaServed: "US-MA",
    availableLanguage: ["English"],
  },
  areaServed: [
    "Springfield, Massachusetts",
    "Sixteen Acres, Springfield, Massachusetts",
    "East Forest Park, Springfield, Massachusetts",
    "Pine Point, Springfield, Massachusetts",
    "Boston Road, Springfield, Massachusetts",
    "East Springfield, Massachusetts",
    "Forest Park, Springfield, Massachusetts",
    "Indian Orchard, Springfield, Massachusetts",
    "Wilbraham, Massachusetts",
    "East Longmeadow, Massachusetts",
    "Longmeadow, Massachusetts",
    "Chicopee, Massachusetts",
    "West Springfield, Massachusetts",
  ].map((name) => ({ "@type": "Place", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential Winter Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Residential Snow Removal" },
      { "@type": "OfferCatalog", name: "Seasonal Snow Removal Membership" },
      { "@type": "OfferCatalog", name: "Optional Ice Control" },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Residential Snow Removal in Springfield, MA | Dr. Snow",
    template: "%s | Dr. Snow MA",
  },
  description: "Residential snow removal and optional ice control in Springfield and surrounding Western Massachusetts communities, with seasonal and pay-per-storm options.",
  applicationName: "Dr. Snow MA",
  category: "Snow removal service",
  keywords: [
    "snow removal Springfield MA",
    "residential snow plowing Springfield MA",
    "ice control Western Massachusetts",
    "snow removal Wilbraham MA",
    "snow removal East Longmeadow MA",
    "snow removal Longmeadow MA",
    "snow removal Chicopee MA",
    "snow removal West Springfield MA",
  ],
  openGraph: {
    title: "Residential Snow Removal in Springfield, MA | Dr. Snow",
    description: "Residential snow removal and optional ice control serving Greater Springfield and Western Massachusetts.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dr. Snow MA",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Dr. Snow snow removal and ice control in Western Massachusetts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Snow Removal in Springfield, MA | Dr. Snow",
    description: "Residential snow removal and optional ice control serving Greater Springfield and Western Massachusetts.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
