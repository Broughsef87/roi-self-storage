# ROI Self Storage — SEO Work Report

**Site:** https://www.roiselfstoragebuildings.com
**Date:** June 2026
**Prepared for:** Andrew Brough

---

## Executive summary

The ROI Self Storage site shipped with technical SEO at modern best-practice for a Next.js App Router build, plus the P0 fixes recommended in Lu's audit. Every page has a self-canonical, page-specific social card metadata, and the right JSON-LD structured data. Sitewide analytics (GA4) is now live. Sitemap and robots.txt are in place. The site is indexable, crawlable, and ready to compete in local + organic search.

---

## What was built

### 1. Foundation — robots.txt + sitemap.xml
Both files generated and served at the root of the site so Google can discover every page without guessing.

- **`/robots.txt`** — allows full crawl, points at the sitemap.
- **`/sitemap.xml`** — auto-built from the App Router file tree. Every static route on the site appears with its `lastmod` timestamp.

### 2. Canonical URL strategy (Lu's Fix #1)
**Problem Lu flagged:** the original build had a sitewide canonical pointing at the homepage. This consolidates all of a subpage's ranking signal into `/` — Google treats every page as a duplicate of the homepage.

**Fix:** every page now declares its own self-canonical. Implemented via a shared `pageMetadata()` helper in `src/lib/metadata.ts` — each page calls it with its own path and the canonical, OG URL, and Twitter URL all resolve to that exact page.

**Result:** every URL on the site is now its own indexable target. Subpage ranking signal stays where it earned.

### 3. Per-page Open Graph + Twitter cards (Lu's Fix #2)
**Problem Lu flagged:** social shares of any subpage were rendering the homepage's preview card — wrong title, wrong description, wrong image.

**Fix:** the same `pageMetadata()` helper emits a full `openGraph` block (type, url, siteName, title, description, image) and a `twitter` block (summary_large_image card, title, description, image) for every page. Pages that need a custom hero image override the default; everything else falls back to a sitewide 1200×630 OG default that's been generated and placed at `/og/default.jpg`.

**Result:** sharing any URL on the site to LinkedIn, Facebook, X, iMessage, or Slack renders that page's own preview card.

### 4. JSON-LD structured data (Lu's Fix #3, full implementation)
Google's Rich Results Test now sees ROI Self Storage as a real local business with reviews, services, breadcrumbs, and FAQs — the four schema types that move the needle for local + service-business SEO.

#### 4a. `LocalBusiness` + `AggregateRating` — sitewide
Emitted once in the root layout. Includes:
- Full business name + alternate name (ties the site to ROI Metal Buildings)
- Phone, email, logo
- PostalAddress (Lenoir City, TN)
- GeoCoordinates (lat/long)
- OpeningHoursSpecification (Mon–Fri 9am–7pm)
- **AggregateRating: 5.0 ★ from 20 reviews** — surfaces stars in Google search results
- `parentOrganization` pointing at roimetalbuildings.com (cross-site authority signal)
- `areaServed: United States` (signals national scope, not just TN-local)

Anchored with a stable `@id` so all per-page schemas reference the same business entity.

#### 4b. `FAQPage` schema — on every page with an FAQ section
Each FAQ block on the homepage, About page, building-type pages, and specials emits a JSON-LD `FAQPage` with every Q&A. This is what surfaces the expandable Q&A snippets directly inside Google search results.

#### 4c. `Service` schema — on each building-type subpage
`/mini-storage`, `/climate-controlled`, `/boat-storage`, `/rv-storage`, `/portable-storage`, `/storage-doors`, `/retrofit` each emit a `Service` schema with:
- Service type, name, description
- Provider reference to the LocalBusiness
- Where available, a `UnitPriceSpecification` with the lowest per-sq-ft price (e.g. mini storage from $10/sq ft) — these enable price-range rich snippets

#### 4d. `BreadcrumbList` schema — on every subpage
Tells Google the site's hierarchy (Home → Specials → 50×150 RV Storage). Google uses this to render breadcrumb trails *inside* search results instead of raw URLs.

### 5. Schema validation
Every schema was validated against `validator.schema.org` and Google's Rich Results Test before deployment. All passed with zero errors and zero warnings.

### 6. Meta-keywords cleanup
Removed the legacy `<meta name="keywords">` tag from the homepage. Google has officially ignored this tag since 2009; it was contributing nothing and creating an inconsistency between the homepage and the rest of the site. Sitewide policy: no meta-keywords anywhere.

### 7. Indexing fix — `metadataBase`
Google Search Console was reporting "Page with redirect" errors on the homepage because relative URLs in metadata weren't resolving correctly. Added an explicit `metadataBase: new URL("https://www.roiselfstoragebuildings.com")` in the root layout so every relative path (canonicals, OG images, manifest) resolves to www and stops triggering the redirect warning.

### 8. Google Analytics 4 (live as of today)
Installed `G-5TJ6GV81X9` sitewide via Next.js's `Script` component with the `afterInteractive` strategy:
- Doesn't block first paint (no Core Web Vitals hit)
- Fires on every page including SPA route changes (App Router auto-tracks because `gtag('config')` subscribes to history)
- Verifiable in real-time via GA4's Realtime view

---

## Files where this work lives

| File | What it does |
|------|--------------|
| `src/lib/site.ts` | Sitewide constants — URL, business info, geo, AggregateRating, default OG image |
| `src/lib/metadata.ts` | `pageMetadata()` helper — emits canonical + OG + Twitter for every page |
| `src/lib/schema.ts` | JSON-LD builders for LocalBusiness, FAQPage, Service, BreadcrumbList |
| `src/components/JsonLd.tsx` | React server component that emits `<script type="application/ld+json">` tags |
| `src/data/home-faqs.ts` | Homepage FAQ data, shared between visible UI and the JSON-LD schema |
| `src/app/layout.tsx` | Root layout — sitewide LocalBusiness schema, GA4 script, metadataBase |
| `public/robots.txt`, `public/sitemap.xml` | Crawl directives + URL list |
| `public/og/default.jpg` | Sitewide 1200×630 OG fallback card |

Every page (homepage, About, all building-type pages, all case studies, all specials) calls `pageMetadata()` and emits its own page-specific JSON-LD. Adding a new page is a 3-line change.

---

## What's next (P1 / P2 — not yet done)

These weren't part of Lu's P0 list but are worth queuing:

1. **Confirm AggregateRating accuracy** — currently set to 5.0 ★ from 20 reviews. If the real Google review count has moved, update `BUSINESS.aggregateRating` in `src/lib/site.ts`.
2. **Surveyed geo coordinates** — the current lat/long (35.7945, -84.2586) is an approximation from the Lenoir City public address. A surveyed exact-coords pair would tighten local pack ranking.
3. **Designer-made OG card** — the current default `/og/default.jpg` is auto-generated from a Python script. A hand-designed card from the brand designer would lift social-share CTR.
4. **Submit sitemap to Search Console** — confirms Google sees the sitemap. (You may have already done this — worth double-checking.)
5. **Set up GA4 conversions** — track the quote form submission as a conversion event so we can attribute leads back to traffic sources.

---

## Bottom line

The site has been built to modern SEO best practice from the ground up. Every page is independently indexable, every page renders the right social card, and Google sees ROI Self Storage as a real business with reviews, services, and clear hierarchy. GA4 is live as of today.

This is the technical foundation. Rankings from here will come from content, backlinks, and time — not from anything else that needs fixing in the code.
