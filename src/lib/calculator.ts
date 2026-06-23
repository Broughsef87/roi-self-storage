/**
 * Shared, pure helpers for the Cost + ROI calculator.
 *
 * Philosophy (mirrors /resources/self-storage-building-cost): honest ranges,
 * not fake precision. Cost is always a LOW–HIGH band. All $/sq ft bands come
 * from the single source of truth in `pricing.ts` so the calculator can never
 * drift from the published building-type pages.
 */

import { PRICING, type Band, type TypePricing } from "./pricing";

export type BuildingTypeKey = "standard" | "retrofit" | "climate" | "boat-rv";

export interface BuildingTypeConfig {
  key: BuildingTypeKey;
  label: string;
  /** Published pricing (numbers + labels) from the shared source of truth. */
  pricing: TypePricing;
  /** Short plain-language description. */
  blurb: string;
  /** Value used by the existing QuoteForm <select> — already aligned. */
  quoteValue: string;
}

/**
 * Building types offered in the calculator, each pointing at its published
 * pricing. Boat and RV share an identical band, so they're one selectable
 * "Boat / RV" option mapped to the QuoteForm "boat-rv" value.
 */
export const BUILDING_TYPES: BuildingTypeConfig[] = [
  {
    key: "standard",
    label: "Standard drive-up",
    pricing: PRICING.standard,
    blurb: "Single-story, drive-up units with roll-up doors.",
    quoteValue: "standard",
  },
  {
    key: "retrofit",
    label: "Conversion / retrofit",
    pricing: PRICING.conversion,
    blurb: "Converting an existing building or shell into storage.",
    quoteValue: "retrofit",
  },
  {
    key: "climate",
    label: "Climate-controlled",
    pricing: PRICING.climate,
    blurb: "Insulated, sealed envelope with interior hallways and HVAC coordination.",
    quoteValue: "climate",
  },
  {
    key: "boat-rv",
    label: "Boat / RV",
    pricing: PRICING.boat, // boat and rv bands are identical
    blurb: "Larger bays and taller doors than standard drive-up.",
    quoteValue: "boat-rv",
  },
];

export function getBuildingType(key: string): BuildingTypeConfig | undefined {
  return BUILDING_TYPES.find((t) => t.key === key);
}

/** Verbatim exclusions list — mirrors the cost article. Restate on every result. */
export const EXCLUDES =
  "Building package only — excludes concrete, foundations, sitework, general contracting, freight, taxes, and permitting.";

/** Round to the nearest `step` (used to keep cost output as a range, not fake-precise). */
export function roundTo(n: number, step: number): number {
  return Math.round(n / step) * step;
}

/** Cost band → dollar range for a given area, rounded to the nearest $1,000. */
export function costRange(sqft: number, band: Band): { low: number; high: number } {
  return {
    low: roundTo(sqft * band.low, 1000),
    high: roundTo(sqft * band.high, 1000),
  };
}

/** Map an area to the existing QuoteForm size buckets. */
export function sizeBucket(sqft: number): "small" | "medium" | "large" | "xlarge" {
  if (sqft < 5000) return "small";
  if (sqft < 15000) return "medium";
  if (sqft < 50000) return "large";
  return "xlarge";
}

export function fmtUSD(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/** Compact form for summaries, e.g. 48000 -> "$48k". */
export function fmtUSDk(n: number): string {
  return "$" + Math.round(n / 1000) + "k";
}

export interface SpecialAnchor {
  label: string;
  href: string;
  sqft: number;
  price: number;
  /** Which building types this special is a sensible cross-sell for. */
  types: BuildingTypeKey[];
}

/**
 * Published, pre-priced specials used purely as a cross-sell anchor when a
 * user's dimensions land near one. NOTE: specials are promo-priced at specific
 * loads (~$8–9/sq ft); the public estimate uses the article bands. Specials are
 * an anchor, not the formula.
 */
export const SPECIALS: SpecialAnchor[] = [
  { label: "The Basic — 40×100", href: "/specials/40x100-self-storage", sqft: 4000, price: 35417, types: ["standard"] },
  { label: "The Beginner — 30×150", href: "/specials/30x150-self-storage", sqft: 4500, price: 39779, types: ["standard"] },
  { label: "The Small Boat — 35×120", href: "/specials/35x120-boat-storage", sqft: 4200, price: 32800, types: ["boat-rv"] },
  { label: "The RV Starter — 50×150", href: "/specials/50x150-rv-storage", sqft: 7500, price: 66937, types: ["boat-rv"] },
];

/** Closest pre-priced special within ±10% of the entered area for the type, if any. */
export function closestSpecial(sqft: number, type: BuildingTypeKey): SpecialAnchor | null {
  let best: SpecialAnchor | null = null;
  let bestDiff = Infinity;
  for (const s of SPECIALS) {
    if (!s.types.includes(type)) continue;
    const diff = Math.abs(s.sqft - sqft) / s.sqft;
    if (diff <= 0.1 && diff < bestDiff) {
      best = s;
      bestDiff = diff;
    }
  }
  return best;
}
