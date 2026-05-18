import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  // Canonical base URL. Without this, Next.js infers it from the Vercel preview
  // URL and Google can flag the apex (no-www) version as a "Page with redirect"
  // since the canonical tag wouldn't pin it to www.
  metadataBase: new URL("https://www.roiselfstoragebuildings.com"),
  alternates: {
    canonical: "/",
  },
  title: "ROI Self Storage | Pre-Engineered Metal Storage Buildings",
  description:
    "Custom metal self storage buildings engineered for maximum ROI. From mini-storage to climate-controlled facilities. Nationwide delivery. Call (865) 316-9009.",
  keywords:
    "self storage buildings, metal storage buildings, mini storage, climate controlled storage, pre-engineered metal buildings",
  openGraph: {
    type: "website",
    url: "https://www.roiselfstoragebuildings.com",
    siteName: "ROI Self Storage",
    title: "ROI Self Storage | Pre-Engineered Metal Storage Buildings",
    description:
      "Custom metal self storage buildings engineered for maximum ROI. Standard, climate controlled, boat & RV, flex, and retrofit configurations. Nationwide delivery.",
  },
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
      <body>{children}</body>
    </html>
  );
}
