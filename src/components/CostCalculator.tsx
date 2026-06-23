"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BUILDING_TYPES,
  getBuildingType,
  costRange,
  closestSpecial,
  fmtUSD,
  fmtUSDk,
  EXCLUDES,
  type BuildingTypeKey,
} from "@/lib/calculator";

type LoadTier = "low" | "standard" | "high";

function num(s: string): number {
  const n = parseFloat(s.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function CostCalculator() {
  // --- Cost inputs ---
  const [typeKey, setTypeKey] = useState<BuildingTypeKey>("standard");
  const [widthStr, setWidthStr] = useState("");
  const [lengthStr, setLengthStr] = useState("");
  const [sqftStr, setSqftStr] = useState("");
  const [loadTier, setLoadTier] = useState<LoadTier>("standard");
  const [location, setLocation] = useState("");

  // --- ROI inputs (all editable assumptions, never presented as ROI's data) ---
  const [effStr, setEffStr] = useState("70");
  const [rentStr, setRentStr] = useState(""); // $/sq ft / month — empty by default
  const [occStr, setOccStr] = useState("85");
  const [opexStr, setOpexStr] = useState("");

  const type = getBuildingType(typeKey)!;
  const pricing = type.pricing;
  const sqft = Math.round(num(sqftStr));

  function onWidth(v: string) {
    setWidthStr(v);
    const w = num(v);
    const l = num(lengthStr);
    if (w > 0 && l > 0) setSqftStr(String(Math.round(w * l)));
  }
  function onLength(v: string) {
    setLengthStr(v);
    const w = num(widthStr);
    const l = num(v);
    if (w > 0 && l > 0) setSqftStr(String(Math.round(w * l)));
  }

  // Primary: building-package range (published for every type).
  const cost = useMemo(
    () => (sqft > 0 ? costRange(sqft, pricing.buildingPackage) : null),
    [sqft, pricing]
  );
  // Secondary: estimated total build, where the site publishes a total band.
  const estTotal = useMemo(
    () => (sqft > 0 && pricing.estTotal ? costRange(sqft, pricing.estTotal) : null),
    [sqft, pricing]
  );

  const special = useMemo(() => (sqft > 0 ? closestSpecial(sqft, typeKey) : null), [sqft, typeKey]);

  // --- ROI math ---
  const eff = num(effStr) / 100;
  const rent = num(rentStr);
  const occ = num(occStr) / 100;
  const opex = num(opexStr) / 100;

  const rentableSqft = sqft > 0 && eff > 0 ? Math.round(sqft * eff) : 0;
  const grossRevenue =
    rentableSqft > 0 && rent > 0 && occ > 0 ? rentableSqft * rent * 12 * occ : 0;
  const noi = grossRevenue > 0 && opex > 0 ? grossRevenue * (1 - opex) : 0;

  // Payback uses the building-package range (Part 1), per spec.
  const payback = useMemo(() => {
    if (!cost || grossRevenue <= 0) return null;
    return { low: cost.low / grossRevenue, high: cost.high / grossRevenue };
  }, [cost, grossRevenue]);

  // --- Lead deep-link ---
  const quoteHref = useMemo(() => {
    const dims =
      num(widthStr) > 0 && num(lengthStr) > 0 ? `${num(widthStr)}×${num(lengthStr)}` : `${sqft.toLocaleString()} sq ft`;
    let summary = `${dims} ${type.label.toLowerCase()}`;
    if (sqft > 0) summary += ` ≈ ${sqft.toLocaleString()} sq ft`;
    if (cost) summary += ` · est. package ${fmtUSDk(cost.low)}–${fmtUSDk(cost.high)}`;
    if (payback) summary += ` · projected payback ~${payback.low.toFixed(1)}–${payback.high.toFixed(1)} yrs`;
    const params = new URLSearchParams();
    params.set("bt", type.quoteValue);
    if (sqft > 0) params.set("sqft", String(sqft));
    if (location.trim()) params.set("loc", location.trim());
    params.set("calc", summary);
    return `/?${params.toString()}#quote`;
  }, [type, sqft, widthStr, lengthStr, cost, payback, location]);

  const inputCls =
    "w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors bg-white";
  const labelCls = "block text-sm font-medium text-roi-navy mb-1";
  const helpCls = "mt-1 text-xs text-gray-400";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* ============ INPUTS ============ */}
      <div className="space-y-10">
        {/* Part 1 — building */}
        <section aria-labelledby="cc-building">
          <h3 id="cc-building" className="text-lg font-bold text-roi-navy mb-4">
            1. Your building
          </h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="cc-type" className={labelCls}>Building type</label>
              <select
                id="cc-type"
                className={inputCls}
                value={typeKey}
                onChange={(e) => setTypeKey(e.target.value as BuildingTypeKey)}
              >
                {BUILDING_TYPES.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.label} ({t.pricing.buildingPackageLabel})
                  </option>
                ))}
              </select>
              <p className={helpCls}>{type.blurb}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cc-w" className={labelCls}>Width (ft)</label>
                <input id="cc-w" inputMode="numeric" className={inputCls} value={widthStr}
                  onChange={(e) => onWidth(e.target.value)} placeholder="40" />
              </div>
              <div>
                <label htmlFor="cc-l" className={labelCls}>Length (ft)</label>
                <input id="cc-l" inputMode="numeric" className={inputCls} value={lengthStr}
                  onChange={(e) => onLength(e.target.value)} placeholder="100" />
              </div>
            </div>

            <div>
              <label htmlFor="cc-sqft" className={labelCls}>Total area (sq ft)</label>
              <input id="cc-sqft" inputMode="numeric" className={inputCls} value={sqftStr}
                onChange={(e) => setSqftStr(e.target.value)} placeholder="4,000" />
              <p className={helpCls}>Enter width × length above, or type total square footage directly.</p>
            </div>

            <div>
              <label htmlFor="cc-load" className={labelCls}>Site load / region</label>
              <select id="cc-load" className={inputCls} value={loadTier}
                onChange={(e) => setLoadTier(e.target.value as LoadTier)}>
                <option value="low">Low-load / mild region</option>
                <option value="standard">Standard</option>
                <option value="high">High wind / snow / seismic</option>
              </select>
              <p className={helpCls}>
                Qualitative only — higher-load sites trend toward the top of the band.
              </p>
            </div>

            <div>
              <label htmlFor="cc-loc" className={labelCls}>
                Project location <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input id="cc-loc" className={inputCls} value={location}
                onChange={(e) => setLocation(e.target.value)} placeholder="Nashville, TN" />
            </div>
          </div>
        </section>

        {/* Part 2 — ROI assumptions */}
        <section aria-labelledby="cc-roi">
          <h3 id="cc-roi" className="text-lg font-bold text-roi-navy mb-1">
            2. Investment assumptions
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            These are editable assumptions, not ROI&apos;s market data. Enter your own market&apos;s numbers.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="cc-eff" className={labelCls}>Rentable efficiency (%)</label>
              <input id="cc-eff" inputMode="numeric" className={inputCls} value={effStr}
                onChange={(e) => setEffStr(e.target.value)} placeholder="70" />
              <p className={helpCls}>Gross → net rentable after aisles. ~70% is typical; adjust for your layout.</p>
            </div>
            <div>
              <label htmlFor="cc-rent" className={labelCls}>Market rent ($/sq ft / month)</label>
              <input id="cc-rent" inputMode="decimal" className={inputCls} value={rentStr}
                onChange={(e) => setRentStr(e.target.value)} placeholder="e.g. 0.90" />
              <p className={helpCls}>Enter your local market rate — we don&apos;t assume one for you.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cc-occ" className={labelCls}>Occupancy (%)</label>
                <input id="cc-occ" inputMode="numeric" className={inputCls} value={occStr}
                  onChange={(e) => setOccStr(e.target.value)} placeholder="85" />
                <p className={helpCls}>Stabilized assumption.</p>
              </div>
              <div>
                <label htmlFor="cc-opex" className={labelCls}>
                  Operating expense (%) <span className="text-gray-400 font-normal">(opt.)</span>
                </label>
                <input id="cc-opex" inputMode="numeric" className={inputCls} value={opexStr}
                  onChange={(e) => setOpexStr(e.target.value)} placeholder="35" />
                <p className={helpCls}>Of gross revenue.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============ RESULTS ============ */}
      <div className="lg:sticky lg:top-24 self-start w-full">
        <div className="bg-roi-light border border-gray-200 rounded-xl p-6 lg:p-8 space-y-6">
          {/* Cost result */}
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
              Estimated building-package cost
            </div>
            {sqft <= 0 ? (
              <p className="text-roi-steel text-sm">Enter your dimensions to see an estimate.</p>
            ) : cost ? (
              <>
                <div className="text-3xl lg:text-4xl font-bold text-roi-navy">
                  {fmtUSD(cost.low)} <span className="text-gray-400 font-normal">–</span> {fmtUSD(cost.high)}
                </div>
                <p className="mt-1 text-xs text-roi-steel">
                  {sqft.toLocaleString()} sq ft × {pricing.buildingPackageLabel}.{" "}
                  {loadTier === "high" && "Higher-load site — trend toward the top of the band. "}
                  {loadTier === "low" && "Lower-load site — trend toward the bottom of the band. "}
                </p>

                {/* Secondary — estimated total build */}
                <div className="mt-4 rounded-lg bg-white border border-gray-200 p-3">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-0.5">
                    Estimated total build (excl. land &amp; soft costs)
                  </div>
                  {estTotal ? (
                    <>
                      <div className="text-lg font-bold text-roi-navy">
                        {fmtUSD(estTotal.low)} <span className="text-gray-400 font-normal">–</span> {fmtUSD(estTotal.high)}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Building package + erection &amp; concrete ({pricing.estTotalLabel} all-in).
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-roi-steel">
                      {pricing.estTotalNote} — concrete &amp; sitework aren&apos;t in ROI&apos;s scope.
                    </div>
                  )}
                </div>
              </>
            ) : null}
            <p className="mt-3 text-[11px] leading-relaxed text-gray-500">{EXCLUDES}</p>

            {special && (
              <div className="mt-4 rounded-lg bg-white border border-gray-200 p-3 text-xs text-roi-steel">
                Near a pre-priced package:{" "}
                <Link href={special.href} className="text-roi-red font-semibold hover:underline">
                  {special.label} — {fmtUSD(special.price)}
                </Link>
                <span className="text-gray-400">
                  {" "}(promo-priced at a specific load; a cross-sell anchor, not your estimate).
                </span>
              </div>
            )}
          </div>

          {/* ROI result */}
          <div className="border-t border-gray-200 pt-6">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              Investment projection
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-roi-steel">Estimated rentable area</dt>
                <dd className="font-semibold text-roi-navy">
                  {rentableSqft > 0 ? `≈ ${rentableSqft.toLocaleString()} sq ft` : "—"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-roi-steel">Projected gross annual revenue</dt>
                <dd className="font-semibold text-roi-navy">
                  {grossRevenue > 0 ? `≈ ${fmtUSD(grossRevenue)}` : "—"}
                </dd>
              </div>
              {noi > 0 && (
                <div className="flex justify-between gap-4">
                  <dt className="text-roi-steel">After operating expenses (NOI)</dt>
                  <dd className="font-semibold text-roi-navy">≈ {fmtUSD(noi)}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4 border-t border-gray-200 pt-2 mt-2">
                <dt className="text-roi-steel font-medium">Building-package payback</dt>
                <dd className="font-bold text-roi-navy">
                  {payback ? `≈ ${payback.low.toFixed(1)} – ${payback.high.toFixed(1)} yrs` : "—"}
                </dd>
              </div>
            </dl>
            {grossRevenue <= 0 && (
              <p className="mt-2 text-xs text-gray-400">
                Enter rentable efficiency, market rent, and occupancy to project revenue and payback.
              </p>
            )}
            <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
              Directional only. Building-package payback divides the package cost range by projected
              gross revenue — it excludes land, sitework, financing, and operating costs. Not a
              financial guarantee.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-gray-200 pt-6">
            <Link
              href={quoteHref}
              className="block w-full text-center bg-roi-red text-white font-semibold py-3.5 px-6 rounded-md hover:bg-roi-navy transition-colors text-sm"
            >
              Get a real quote on this build →
            </Link>
            <p className="mt-2 text-center text-xs text-gray-400">
              Pre-fills the quote form with what you modeled. No obligation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
