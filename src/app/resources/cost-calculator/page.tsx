import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import CostCalculator from "@/components/CostCalculator";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PRICING, type Band } from "@/lib/pricing";

const PATH = "/resources/cost-calculator";

// Prose band strings sourced from the single pricing source (no drift).
// Match the published convention: whole dollars plain, half-dollars show cents.
const money = (n: number) => (Number.isInteger(n) ? `${n}` : n.toFixed(2));
const sf = (b: Band) => `$${money(b.low)}-${money(b.high)}/sq ft`;
const P = PRICING;

export const metadata: Metadata = pageMetadata({
  title: "Self-Storage Building Cost & ROI Calculator | ROI Self Storage",
  description:
    "Estimate self-storage building-package cost and project a rough investment payback. Honest ranges, every assumption labeled, scope exclusions stated. Building package from $7-20/sf.",
  path: PATH,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Cost & ROI Calculator", path: PATH },
]);

const faqs = [
  {
    q: "How accurate is this self-storage cost calculator?",
    a: `It's a starting range, not a quote. The estimate multiplies your area by published building-package $/sq ft bands (${sf(P.standard.buildingPackage)} standard, ${sf(P.conversion.buildingPackage)} conversion) and rounds to a low–high range. Your real number depends on site, loads, dimensions, building type, and scope, and is confirmed only in a written quote.`,
  },
  {
    q: "What's included in the cost estimate?",
    a: "Only the engineered metal building package. It excludes concrete, foundations, sitework, general contracting, freight, taxes, and permitting — those are your contractor's scope. Always compare quotes on the same scope.",
  },
  {
    q: "How is the investment payback calculated?",
    a: "Projected gross annual revenue = rentable sq ft × your market rent × 12 × occupancy. Building-package payback divides the package cost range by that revenue. It's directional only and excludes land, sitework, financing, and operating costs — not a financial guarantee.",
  },
  {
    q: "Do you have climate-controlled and boat/RV pricing?",
    a: `Yes. Climate-controlled building packages run about ${sf(P.climate.buildingPackage)} (${sf(P.climate.estTotal!)} estimated total build), and boat/RV run about ${sf(P.boat.buildingPackage)} (${sf(P.boat.estTotal!)} total). These are the same published bands shown on each building-type page. As always, your real number depends on your project and is confirmed in a written quote.`,
  },
  {
    q: "Where do the rent and occupancy numbers come from?",
    a: "From you. The calculator ships with neutral, clearly-labeled default assumptions (e.g. 70% rentable efficiency, 85% occupancy) and an empty market-rent field — you enter your own market's numbers. We never present assumed rent or occupancy as ROI's market data.",
  },
];

export default function CostCalculatorPage() {
  return (
    <>
      <JsonLd id="cost-calculator-schema" data={[breadcrumb, faqPageSchema([...faqs])]} />
      <SubPageLayout
        title="Self-Storage Cost & ROI Calculator"
        subtitle="Estimate your building-package cost and project a rough investment return — with honest ranges, labeled assumptions, and no fake precision."
      >
        {/* Calculator */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CostCalculator />
          </div>
        </section>

        {/* How this works / methodology */}
        <section className="py-16 lg:py-24 bg-roi-light">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
              How this estimate works
            </h2>
            <div className="space-y-5 text-roi-steel leading-relaxed text-sm">
              <p>
                We don&apos;t believe in a single cost-per-square-foot number — an honest one
                doesn&apos;t exist without your project&apos;s details. So this tool gives you a
                <strong className="text-roi-navy"> range</strong>, built from the same published
                bands we quote from:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-roi-navy">Standard drive-up:</strong> {sf(P.standard.buildingPackage)} (building package).</li>
                <li><strong className="text-roi-navy">Conversion / retrofit:</strong> {sf(P.conversion.buildingPackage)} (building package).</li>
                <li><strong className="text-roi-navy">Climate-controlled:</strong> {sf(P.climate.buildingPackage)} building package ({sf(P.climate.estTotal!)} estimated total build).</li>
                <li><strong className="text-roi-navy">Boat &amp; RV:</strong> {sf(P.boat.buildingPackage)} building package ({sf(P.boat.estTotal!)} estimated total build).</li>
              </ul>
              <p>
                These are the same published bands you&apos;ll find on each building-type page —
                the calculator reads them from one shared source so the numbers never drift.
              </p>
              <p>
                <strong className="text-roi-navy">What&apos;s excluded:</strong> the estimate is the
                building package only — it excludes concrete, foundations, sitework, general
                contracting, freight, taxes, and permitting. Those are real costs; they&apos;re just
                your contractor&apos;s scope, not ours.
              </p>
              <p>
                <strong className="text-roi-navy">The ROI projection</strong> turns area into a rough
                return: rentable square feet (after aisles) × your market rent × 12 months ×
                occupancy gives projected gross revenue, and dividing the cost range by that revenue
                gives a building-package payback range. Every input is an assumption you control — we
                don&apos;t inject market rent or occupancy as if they were our data.
              </p>
              <p>
                For the full reasoning behind these numbers, read{" "}
                <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
                  what drives self-storage building cost
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
              Frequently asked questions
            </h2>
            <PageFAQ items={faqs} />
          </div>
        </section>
      </SubPageLayout>
    </>
  );
}
