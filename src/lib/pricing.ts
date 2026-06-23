/**
 * SINGLE SOURCE OF TRUTH for self-storage pricing.
 *
 * Authoritative all-in "Est. Total Range" ($/sq ft) = building package + steel
 * erection + concrete/site work (national averages).
 * // ROI (Lisa), confirmed 2026-06-23.
 *
 * The cost calculator drives its headline output from `total` below. The
 * building-type pages (climate/boat/rv) render their 3-tier breakdown cards
 * from the `*Label` strings. Change a number HERE and it updates everywhere.
 *
 * Open-ended values: Flex is "$36+" (no published ceiling) and Retrofit is
 * "$10.50–$16.00+" (range with "and up"). `plus` renders the trailing "+";
 * a missing `high` means open-ended at the top — never cap it at a false high.
 */

export interface Band {
  low: number;
  high: number;
}

/** All-in estimated total build, $/sq ft. */
export interface TotalRange {
  low: number;
  /** Omitted when open-ended at the top (e.g. Flex "$36+"). */
  high?: number;
  /** Render a trailing "+" ("and up"). */
  plus?: boolean;
  avg: number;
  avgPlus?: boolean;
}

export interface TypePricing {
  /** Authoritative all-in total range — drives the calculator. */
  total: TotalRange;
  /** Display label for the total, copied to match the type-page cards. */
  totalLabel: string;
  /** Component breakdown labels for the type-page 3-tier cards (where shown). */
  buildingPackageLabel?: string;
  erectionConcreteLabel?: string;
}

export type PricingKey = "standard" | "climate" | "boat" | "rv" | "flex" | "conversion";

export const PRICING: Record<PricingKey, TypePricing> = {
  standard: {
    total: { low: 23.5, high: 33, avg: 28.25 },
    totalLabel: "$23.50–$33.00/sf",
    buildingPackageLabel: "$10–$12/sf",
  },
  climate: {
    total: { low: 30, high: 42, avg: 36 },
    totalLabel: "$30–$42/sf",
    buildingPackageLabel: "$15–$20/sf",
    erectionConcreteLabel: "$15–$22/sf",
  },
  boat: {
    total: { low: 25.5, high: 36, avg: 30.75 },
    totalLabel: "$25.50–$36.00/sf",
    buildingPackageLabel: "$12–$15/sf",
    erectionConcreteLabel: "$13.50–$21/sf",
  },
  rv: {
    total: { low: 25.5, high: 36, avg: 30.75 },
    totalLabel: "$25.50–$36.00/sf",
    buildingPackageLabel: "$12–$15/sf",
    erectionConcreteLabel: "$13.50–$21/sf",
  },
  flex: {
    total: { low: 36, plus: true, avg: 40, avgPlus: true },
    totalLabel: "$36+/sf",
  },
  conversion: {
    total: { low: 10.5, high: 16, plus: true, avg: 13.25, avgPlus: true },
    totalLabel: "$10.50–$16.00+/sf",
  },
};
