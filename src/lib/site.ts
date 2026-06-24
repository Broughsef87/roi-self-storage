/**
 * Sitewide constants used by metadata + structured-data helpers.
 *
 * Update these in one place and every canonical URL, OG tag, breadcrumb,
 * and JSON-LD reference picks up the change.
 */

export const SITE_URL = "https://www.roiselfstoragebuildings.com";
export const SITE_NAME = "ROI Self Storage";

export const BUSINESS = {
  name: SITE_NAME,
  alternateName: "ROI Metal Buildings — Self Storage Division",
  description:
    "Pre-engineered metal self storage buildings custom-designed around your business plan. From 20-unit starter facilities to 400+ unit complexes. Delivered nationwide.",
  url: SITE_URL,
  telephone: "+1-865-316-9009",
  email: "info@roimetalbuildings.com",
  logo: `${SITE_URL}/brand/logo-horizontal-transparent.png`,
  address: {
    streetAddress: "6800 Waller Ferry Rd, Suite B",
    addressLocality: "Lenoir City",
    addressRegion: "TN",
    postalCode: "37771",
    addressCountry: "US",
  },
  // Public address coordinates (approximate). Replace with surveyed coords if needed.
  geo: {
    latitude: 35.7945,
    longitude: -84.2586,
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  // Sourced from the ROI Metal Buildings Google Business Profile (same company /
  // NAP; self storage is a division). Confirmed 2026-06-24: 5.0 from 21 reviews.
  // Keep in sync with the public GBP so the aggregateRating markup stays substantiated.
  aggregateRating: {
    ratingValue: "5.0",
    reviewCount: "21",
    bestRating: "5",
    worstRating: "1",
  },
  parentOrganization: {
    name: "ROI Metal Buildings",
    url: "https://roimetalbuildings.com",
  },
} as const;

/** Build a fully-qualified URL for a path under the site. */
export function siteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/** Default OG image (used when a page doesn't specify its own). */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og/default.jpg`,
  width: 1200,
  height: 630,
  alt: "ROI Self Storage — Pre-engineered metal self storage buildings",
};
