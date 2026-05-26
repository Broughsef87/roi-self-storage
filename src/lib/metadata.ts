import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, siteUrl } from "./site";

interface PageMetaInput {
  /** Page <title>. Will be used for og:title and twitter:title unless overridden. */
  title: string;
  /** Meta description (≤160 chars recommended). */
  description: string;
  /** Absolute path under the site, e.g. "/mini-storage" or "/" for the homepage. */
  path: string;
  /** Optional override for OG title (defaults to `title`). */
  ogTitle?: string;
  /** Optional override for OG description (defaults to `description`). */
  ogDescription?: string;
  /** Optional per-page OG image. Defaults to the sitewide default. */
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  /** Optional keywords (rarely useful for SEO these days but harmless). */
  keywords?: string;
}

/**
 * Build a Next.js Metadata object for a page with self-canonical URL,
 * full openGraph and twitter blocks, and image fallback.
 *
 * Each page should call this so canonical / OG / Twitter all point at itself
 * instead of inheriting the homepage's values.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const url = siteUrl(input.path);
  const ogImage = input.ogImage
    ? {
        url: input.ogImage.url.startsWith("http") ? input.ogImage.url : siteUrl(input.ogImage.url),
        width: input.ogImage.width ?? 1200,
        height: input.ogImage.height ?? 630,
        alt: input.ogImage.alt ?? input.title,
      }
    : DEFAULT_OG_IMAGE;

  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;

  return {
    title: input.title,
    description: input.description,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage.url],
    },
  };
}
