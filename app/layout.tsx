import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mmcon.ie"),
  title: {
    default:
      "Madden & Mangan Construction Ltd | Building Contractors Kerry & Munster",
    template: "%s | Madden & Mangan Construction",
  },
  description:
    "Madden & Mangan Construction Ltd are experienced building contractors, roofers and conservation specialists based in Castleisland, Co. Kerry, serving clients across Munster.",
  keywords: [
    "building contractors Kerry",
    "building contractors Munster",
    "roofers Kerry",
    "slaters Kerry",
    "conservation builders Ireland",
    "heritage restoration Killarney",
    "Madden & Mangan Construction",
    "Castleisland builders",
  ],
  authors: [{ name: "Madden & Mangan Construction Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "Madden & Mangan Construction Ltd",
    title:
      "Madden & Mangan Construction Ltd | Building Contractors Kerry & Munster",
    description:
      "Experienced building contractors, roofers and conservation specialists based in Castleisland, Co. Kerry, serving clients across Munster.",
    url: "https://www.mmcon.ie",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Madden & Mangan Construction Ltd logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Madden & Mangan Construction Ltd | Building Contractors Kerry & Munster",
    description:
      "Experienced building contractors, roofers and conservation specialists serving Kerry and Munster.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Madden & Mangan Construction Ltd",
  description:
    "Building contractors, roofers, slaters and conservation specialists serving Kerry and Munster from Castleisland, Co. Kerry.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cragg, Tralee Road",
    addressLocality: "Castleisland",
    addressRegion: "Co. Kerry",
    addressCountry: "IE",
  },
  telephone: ["+353872787885", "+353872585186"],
  email: "larry@mmcon.ie",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Kerry" },
    { "@type": "AdministrativeArea", name: "Munster" },
    { "@type": "Country", name: "Ireland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Building Contractors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Roofing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Slating" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Restoration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Conservation Work" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-stone-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}