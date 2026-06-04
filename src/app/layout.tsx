import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-5TJ6GV81X9";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

/**
 * Sitewide metadata. Per Lu's SEO dispatch:
 *   - DO NOT set a sitewide canonical here. Each page sets its own via
 *     `pageMetadata(...)` so subpage signal isn't consolidated into the
 *     homepage.
 *   - DO NOT set sitewide openGraph/twitter here. Each page owns its own
 *     so social shares of any subpage show the correct card.
 *
 * What stays in this root metadata: `metadataBase` (so relative paths
 * in page metadata resolve to www), icons, manifest.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/favicon-192x192.png", sizes: "192x192" },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} antialiased`}>
      <head>
        {/* LocalBusiness + AggregateRating — emitted once sitewide. Per-page
            schemas (FAQPage, Service, BreadcrumbList) reference this via @id. */}
        <JsonLd id="local-business" data={localBusinessSchema()} />
      </head>
      <body>
        {/* Google Analytics 4 (gtag.js). Loaded via next/script with the
            "afterInteractive" strategy so it doesn't block first paint but
            still fires on every route — the App Router auto-tracks SPA
            pageviews because gtag's config call subscribes to history changes. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
