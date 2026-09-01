import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dr-snow-ma.theivanacollective.chatgpt.site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Dr. Snow",
  description: "Residential seasonal membership and pay-per-storm snow removal with optional ice control serving Greater Springfield and Western Massachusetts.",
  url: siteUrl,
  telephone: "+1-413-330-8573",
  image: `${siteUrl}/dr-snow-logo.png`,
  logo: `${siteUrl}/dr-snow-logo.png`,
  priceRange: "$$",
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
    "Westfield, Massachusetts",
    "Agawam, Massachusetts",
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
  title: "Dr. Snow MA | Snow Removal & Ice Control",
  description: "Seasonal membership and pay-per-storm residential snow removal with optional ice control in Greater Springfield and Western Massachusetts.",
  metadataBase: new URL("https://dr-snow-ma.theivanacollective.chatgpt.site"),
  openGraph: {
    title: "Dr. Snow MA | Snow Removal & Ice Control",
    description: "Seasonal and pay-per-storm residential snow removal with optional ice control in Greater Springfield and Western Massachusetts.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Snow snow removal and ice control in Western Massachusetts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Snow MA | Snow Removal & Ice Control",
    description: "Seasonal and pay-per-storm residential snow removal with optional ice control in Greater Springfield and Western Massachusetts.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
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
