import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import CostCalculator from "@/components/CostCalculator";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PRICING, type PricingKey } from "@/lib/pricing";

const PATH = "/resources/cost-calculator";

// All-in Est. Total ranges, sourced from the single pricing source (no drift).
// Reuse the canonical labels, swapping the unit suffix for prose.
const total = (k: PricingKey) => PRICING[k].totalLabel.replace("/sf", "/sq ft");

export const metadata: Metadata = pageMetadata({
  title: "Self-Storage Building Cost & ROI Calculator | ROI Self Storage",
  description:
    "Estimate the all-in self-storage build cost ($23.50–$42/sq ft by type, national averages) and project a rough investment payback. Honest ranges, every assumption labeled.",
  path: PATH,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Cost & ROI Calculator", path: PATH },
]);

const faqs = [
  {
    q: "How accurate is this self-storage cost calculator?",
    a: `It's a starting range, not a quote. The estimate multiplies your area by published all-in cost ranges (${total("standard")} standard, ${total("conversion")} conversion — national averages) and rounds to a low–high range. Your real number depends on site, loads, dimensions, building type, and scope, and is confirmed only in a written quote.`,
  },
  {
    q: "What's included in the cost estimate?",
    a: "The estimated total range includes the building package, steel erection, and concrete/site work (national averages). It excludes land, permits, utilities, and other soft costs. Your real number is confirmed in a written quote.",
  },
  {
    q: "How is the investment payback calculated?",
    a: "Projected gross annual revenue = rentable sq ft × your market rent × 12 × occupancy. Simple payback divides the estimated total build cost by that revenue. It's directional only and excludes land, financing, and operating costs — not a financial guarantee.",
  },
  {
    q: "How much does each building type cost?",
    a: `All-in estimated totals (national averages): standard drive-up ${total("standard")}, climate-controlled ${total("climate")}, boat/RV ${total("boat")}, flex spaces ${total("flex")}, and conversion/retrofit ${total("conversion")}. These are the same published figures shown across the site. Your real number depends on your project and is confirmed in a written quote.`,
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
        subtitle="Estimate your all-in build cost and project a rough investment return — with honest ranges, labeled assumptions, and no fake precision."
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
                all-in estimated totals (national averages) we quote from:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-roi-navy">Standard drive-up:</strong> {total("standard")}.</li>
                <li><strong className="text-roi-navy">Climate-controlled:</strong> {total("climate")}.</li>
                <li><strong className="text-roi-navy">Boat &amp; RV:</strong> {total("boat")}.</li>
                <li><strong className="text-roi-navy">Flex spaces:</strong> {total("flex")}.</li>
                <li><strong className="text-roi-navy">Conversion / retrofit:</strong> {total("conversion")}.</li>
              </ul>
              <p>
                These are the same published figures you&apos;ll find across the site — the calculator
                reads them from one shared source so the numbers never drift.
              </p>
              <p>
                <strong className="text-roi-navy">What this includes:</strong> the estimated total
                range covers the building package, steel erection, and concrete/site work (national
                averages). It still <strong className="text-roi-navy">excludes</strong> land, permits,
                utilities, and other soft costs.
              </p>
              <p>
                <strong className="text-roi-navy">The ROI projection</strong> turns area into a rough
                return: rentable square feet (after aisles) × your market rent × 12 months ×
                occupancy gives projected gross revenue, and dividing the estimated total build cost
                by that revenue gives a simple payback range. Every input is an assumption you
                control — we don&apos;t inject market rent or occupancy as if they were our data.
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
