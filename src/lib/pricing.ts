/**
 * SINGLE SOURCE OF TRUTH for published building-package pricing bands.
 *
 * Every $/sq ft figure the site quotes lives here so the numbers never drift
 * across the building-type pages and the cost calculator. The building-type
 * pages (climate-controlled, boat, rv) render their 3-tier pricing cards from
 * the `*Label` strings below; the calculator reads the numeric bands for math.
 *
 * These mirror what's published on the live type pages (confirmed current
 * 2026-06-23). If ROI updates a band, change it HERE and it updates everywhere.
 *
 * Display labels use a literal en-dash (–) and are copied verbatim from the
 * type-page cards so rendered output is byte-identical after refactor.
 */

export interface Band {
  /** $/sq ft, low end. */
  low: number;
  /** $/sq ft, high end. */
  high: number;
}

export interface TypePricing {
  /** Building-package band — the primary, always-published number. */
  buildingPackage: Band;
  buildingPackageLabel: string;
  /** + erection & concrete band (published for climate/boat/rv). */
  erectionConcrete?: Band;
  erectionConcreteLabel?: string;
  /** Estimated total build band (published for climate/boat/rv). */
  estTotal?: Band;
  estTotalLabel?: string;
  /** When no est-total band is published (standard/conversion), show this note. */
  estTotalNote?: string;
}

export type PricingKey = "standard" | "conversion" | "climate" | "boat" | "rv";

export const PRICING: Record<PricingKey, TypePricing> = {
  standard: {
    buildingPackage: { low: 10, high: 12 },
    buildingPackageLabel: "$10–$12/sf",
    estTotalNote: "+ your contractor's concrete & sitework",
  },
  conversion: {
    buildingPackage: { low: 7, high: 10 },
    buildingPackageLabel: "$7–$10/sf",
    estTotalNote: "≈ $13/sf and up, depending on the existing structure",
  },
  climate: {
    buildingPackage: { low: 15, high: 20 },
    buildingPackageLabel: "$15–$20/sf",
    erectionConcrete: { low: 15, high: 22 },
    erectionConcreteLabel: "$15–$22/sf",
    estTotal: { low: 30, high: 42 },
    estTotalLabel: "$30–$42/sf",
  },
  boat: {
    buildingPackage: { low: 12, high: 15 },
    buildingPackageLabel: "$12–$15/sf",
    erectionConcrete: { low: 13.5, high: 21 },
    erectionConcreteLabel: "$13.50–$21/sf",
    estTotal: { low: 25.5, high: 36 },
    estTotalLabel: "$25.50–$36/sf",
  },
  rv: {
    buildingPackage: { low: 12, high: 15 },
    buildingPackageLabel: "$12–$15/sf",
    erectionConcrete: { low: 13.5, high: 21 },
    erectionConcreteLabel: "$13.50–$21/sf",
    estTotal: { low: 25.5, high: 36 },
    estTotalLabel: "$25.50–$36/sf",
  },
};
