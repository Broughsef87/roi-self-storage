/**
 * JSON-LD schema builders. Each returns a plain object ready to be
 * dropped into a <script type="application/ld+json"> tag.
 *
 * Reference all schemas back to the LocalBusiness via @id so search
 * engines understand they describe the same entity.
 */

import { BUSINESS, SITE_URL, DEFAULT_OG_IMAGE, siteUrl } from "./site";

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** LocalBusiness + AggregateRating. Emit once sitewide in root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.logo,
    logo: BUSINESS.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...BUSINESS.hours.days],
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
      bestRating: BUSINESS.aggregateRating.bestRating,
      worstRating: BUSINESS.aggregateRating.worstRating,
    },
    parentOrganization: {
      "@type": "Organization",
      name: BUSINESS.parentOrganization.name,
      url: BUSINESS.parentOrganization.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export interface ServiceInput {
  serviceType: string;
  name: string;
  description: string;
  /** Lowest per-square-foot price (USD). Used for UnitPriceSpecification. */
  minPricePerSqFt?: number;
}

export function serviceSchema(input: ServiceInput) {
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.serviceType,
    name: input.name,
    description: input.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  if (typeof input.minPricePerSqFt === "number") {
    obj.offers = {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/MinimumPrice",
        price: input.minPricePerSqFt.toFixed(2),
        priceCurrency: "USD",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          // FTK = square feet (UN/CEFACT unit code)
          unitCode: "FTK",
        },
      },
    };
  }

  return obj;
}

export interface ProductInput {
  name: string;
  description: string;
  /** Lowest per-square-foot building-package price (USD). */
  minPricePerSqFt?: number;
  /** Highest per-square-foot building-package price (USD), for an AggregateOffer range. */
  maxPricePerSqFt?: number;
}

/**
 * Product schema for a building product line (e.g. mini storage buildings).
 * The product carries a Brand (ROI) and is offeredBy the LocalBusiness via
 * @id; per-sq-ft pricing is expressed as an AggregateOffer with a
 * UnitPriceSpecification (FTK = square feet) so the "from $X/sf" range is
 * machine-readable without implying a fixed unit price.
 */
export function productSchema(input: ProductInput) {
  const obj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    brand: {
      "@type": "Brand",
      name: BUSINESS.name,
    },
  };

  if (typeof input.minPricePerSqFt === "number") {
    const offer: Record<string, unknown> = {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: input.minPricePerSqFt.toFixed(2),
      ...(typeof input.maxPricePerSqFt === "number"
        ? { highPrice: input.maxPricePerSqFt.toFixed(2) }
        : {}),
      offeredBy: { "@id": BUSINESS_ID },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: input.minPricePerSqFt.toFixed(2),
        priceCurrency: "USD",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          // FTK = square feet (UN/CEFACT unit code)
          unitCode: "FTK",
        },
      },
    };
    obj.offers = offer;
  }

  return obj;
}

export interface ArticleInput {
  headline: string;
  description: string;
  /** Path under the site, e.g. "/resources/self-storage-building-cost". */
  path: string;
  /** ISO date (YYYY-MM-DD) the article was first published. */
  datePublished: string;
  /** ISO date (YYYY-MM-DD) of the last meaningful update. Defaults to datePublished. */
  dateModified?: string;
  /** Article image URL (absolute or site-relative). Defaults to the sitewide OG image (1200x630). */
  image?: string;
}

/**
 * Article schema for editorial/resource pages (e.g. the cost guide).
 * Author + publisher resolve to the ROI organization (publisher carries the
 * logo as an ImageObject, which Google requires for Article rich results).
 */
export function articleSchema(input: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: input.image
      ? (input.image.startsWith("http") ? input.image : siteUrl(input.image))
      : DEFAULT_OG_IMAGE.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl(input.path),
    },
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS.logo,
      },
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
  };
}

export interface BreadcrumbCrumb {
  name: string;
  /** Path under the site, e.g. "/case-studies". Omit for the final crumb (current page) per schema.org guidance. */
  path?: string;
}

export function breadcrumbSchema(crumbs: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const item: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
      };
      if (c.path) item.item = siteUrl(c.path);
      return item;
    }),
  };
}
