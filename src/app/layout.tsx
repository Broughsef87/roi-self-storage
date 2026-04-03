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
  title: "ROI Self Storage | Pre-Engineered Metal Storage Buildings",
  description:
    "Custom metal self storage buildings engineered for maximum ROI. From mini-storage to climate-controlled facilities. Nationwide delivery. Call (865) 316-9009.",
  keywords:
    "self storage buildings, metal storage buildings, mini storage, climate controlled storage, pre-engineered metal buildings",
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
