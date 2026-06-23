import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import CostCalculator from "@/components/CostCalculator";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/resources/cost-calculator";

export const metadata: Metadata = pageMetadata({
  title: "Self-Storage Building Cost & ROI Calculator | ROI Self Storage",
  description:
    "Estimate self-storage building-package cost and project a rough investment payback. Honest ranges, every assumption labeled, scope exclusions stated. Building package from $7-12/sf.",
  path: PATH,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Cost & ROI Calculator", path: PATH },
]);

const faqs = [
  {
    q: "How accurate is this self-storage cost calculator?",
    a: "It's a starting range, not a quote. The estimate multiplies your area by published building-package $/sq ft bands ($10-12 standard, $7-10 conversion) and rounds to a low–high range. Your real number depends on site, loads, dimensions, building type, and scope, and is confirmed only in a written quote.",
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
    a: "Yes, but we don't publish a premium per-square-foot number we haven't verified. For climate-controlled and boat/RV builds the calculator shows the cost as pending verification and points you to a real quote, rather than displaying a fake-precise figure.",
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
                <li><strong className="text-roi-navy">Standard drive-up:</strong> $10–12 / sq ft (building package).</li>
                <li><strong className="text-roi-navy">Conversion / retrofit:</strong> $7–10 / sq ft (building package).</li>
                <li>
                  <strong className="text-roi-navy">Climate-controlled &amp; boat/RV:</strong> premium
                  types that cost more than standard. We show these as pending verification rather
                  than publishing an unconfirmed number.
                </li>
              </ul>
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
