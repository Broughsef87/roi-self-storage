/**
 * Shared, pure helpers for the Cost + ROI calculator.
 *
 * Philosophy (mirrors /resources/self-storage-building-cost): honest ranges,
 * not fake precision. Cost is the all-in Est. Total Range from the single
 * source of truth in `pricing.ts` (ROI/Lisa, 2026-06-23) — building package +
 * steel erection + concrete/site, national averages.
 */

import { PRICING, type TotalRange, type TypePricing } from "./pricing";

export type BuildingTypeKey = "standard" | "climate" | "boat-rv" | "flex" | "retrofit";

export interface BuildingTypeConfig {
  key: BuildingTypeKey;
  label: string;
  /** Published pricing (total range + labels) from the shared source of truth. */
  pricing: TypePricing;
  /** Short plain-language description. */
  blurb: string;
  /** Value used by the existing QuoteForm <select> — already aligned. */
  quoteValue: string;
}

/**
 * Building types offered in the calculator, each pointing at its published
 * all-in total range. Boat and RV share an identical band, so they're one
 * selectable "Boat / RV" option mapped to the QuoteForm "boat-rv" value.
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
    key: "climate",
    label: "Climate-controlled",
    pricing: PRICING.climate,
    blurb: "Insulated, sealed envelope with interior hallways and HVAC coordination.",
    quoteValue: "climate",
  },
  {
    key: "boat-rv",
    label: "Boat / RV",
    pricing: PRICING.boat, // boat and rv totals are identical
    blurb: "Larger bays and taller doors than standard drive-up.",
    quoteValue: "boat-rv",
  },
  {
    key: "flex",
    label: "Flex spaces",
    pricing: PRICING.flex,
    blurb: "Higher-finish, mixed-use or specialized spaces — open-ended at the top end.",
    quoteValue: "flex",
  },
  {
    key: "retrofit",
    label: "Conversion / retrofit",
    pricing: PRICING.conversion,
    blurb: "Converting an existing building or shell into storage.",
    quoteValue: "retrofit",
  },
];

export function getBuildingType(key: string): BuildingTypeConfig | undefined {
  return BUILDING_TYPES.find((t) => t.key === key);
}

/**
 * What the Est. Total Range covers / excludes. The total now includes building
 * package + steel erection + concrete/site (national averages); it still
 * excludes land, permits, utilities, and other soft costs.
 */
export const TOTAL_DISCLAIMER =
  "Estimated total range includes the building package, steel erection, and concrete/site work (national averages). Excludes land, permits, utilities, and other soft costs. Your real number is confirmed in a written quote.";

/** Round to the nearest `step` (keeps cost output a range, not fake-precise). */
export function roundTo(n: number, step: number): number {
  return Math.round(n / step) * step;
}

export interface CostResult {
  low: number;
  /** null when open-ended at the top (e.g. Flex). */
  high: number | null;
  /** trailing "+" ("and up"). */
  plus: boolean;
  avg: number;
  avgPlus: boolean;
}

/** All-in total range → dollar figures for a given area, rounded to $1,000. */
export function totalCost(sqft: number, t: TotalRange): CostResult {
  return {
    low: roundTo(sqft * t.low, 1000),
    high: t.high != null ? roundTo(sqft * t.high, 1000) : null,
    plus: !!t.plus,
    avg: roundTo(sqft * t.avg, 1000),
    avgPlus: !!t.avgPlus,
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
 * user's dimensions land near one. NOTE: specials are promo-priced building
 * kits at specific loads; the calculator estimate is an all-in total. Specials
 * are an anchor to a real package page, not the formula.
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
