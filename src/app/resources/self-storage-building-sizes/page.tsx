import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";

const PATH = "/resources/self-storage-building-sizes";

// NOTE ON JSON-LD ENTITIES (FOR-162): JsonLd renders via
// dangerouslySetInnerHTML, so it does NOT HTML-escape. Every string that
// reaches a schema builder must therefore contain a PLAIN "&", never "&amp;".
// JSX-escaped entities belong in visible markup only. The literal below uses
// a plain ampersand on purpose.
const TITLE = "Self-Storage Building Sizes — Unit Counts & What Each Footprint Fits | ROI";
const DESCRIPTION =
  "Common self-storage building sizes from 15x100 to 50x150 — how many units each fits, what they suit, and what drives the cost of each footprint.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

// Two-level breadcrumb (Home -> page). No pathless "Resources" middle crumb —
// there is no /resources index route, and a pathless mid-list crumb
// reintroduces the GSC BreadcrumbList error fixed in FOR-66. Matches
// FOR-123 / FOR-124 / FOR-144.
const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Self-Storage Building Sizes", path: PATH },
]);

const article = articleSchema({
  headline: "Self-Storage Building Sizes: What Each Footprint Actually Gives You",
  description: DESCRIPTION,
  path: PATH,
  datePublished: "2026-08-28",
});

const faqs = [
  {
    q: "What's the most common self-storage building size?",
    a: "Around 30x100 to 40x100 for a first building — 3,000 to 4,000 square feet, roughly 20 units. Large enough to be a real business, small enough to finance and lease up without betting the property on it.",
  },
  {
    q: "How many units fit in a 30x100 building?",
    a: "Typically 20 units at 10x15, in two back-to-back rows. Drive-aisle and door layout can change that.",
  },
  {
    q: "What size building do I need for RV storage?",
    a: "Substantially more than household storage. ROI's RV package is 50x150x16 with 15x50 bays — the height and depth are non-negotiable for Class A motorhomes and fifth wheels.",
  },
  {
    q: "Can I expand a self-storage building later?",
    a: "Yes, and it's worth designing for it from the start. End-wall expansion on a steel building is straightforward if the original engineering anticipated it, and expensive to retrofit if it didn't.",
  },
  {
    q: "Does the size change the cost per square foot?",
    a: "Usually yes, in your favour as it grows. Fixed costs get spread across more square footage. That's why the 30x120 prices better per unit than the 30x100.",
  },
  {
    q: "How much land do I need for a self-storage building?",
    a: "Roughly two to two and a half times the building footprint for a single building with drive-up access, once drive aisles and turning space are included. Setbacks vary by jurisdiction and have to be checked locally. The ratio improves as you add buildings, since a second row shares the aisle.",
  },
];

// Typical layouts, not quotes. Method: building width sets unit depth (two
// back-to-back rows), length / unit width gives the count per row. The 40x100
// row reproduces ROI's own published "20 back-to-back units", which is the
// sanity check that the arithmetic matches how they actually lay these out.
const comparison = [
  { size: "15 × 100", sqft: "1,500", units: "10 @ 10×15", best: "Infill lots, phase one" },
  { size: "15 × 130", sqft: "1,950", units: "13 @ 10×15", best: "Narrow or deep-constrained parcels" },
  { size: "30 × 100", sqft: "3,000", units: "20 @ 10×15", best: "First real facility" },
  { size: "30 × 120", sqft: "3,600", units: "24 @ 10×15", best: "Better cost per unit than 30×100" },
  { size: "40 × 100", sqft: "4,000", units: "20 @ 10×20", best: "Higher rent per unit, vehicle-capable" },
  { size: "30 × 150", sqft: "4,500", units: "mixed", best: "Wider tenant base, lower vacancy risk" },
  { size: "35 × 120 × 12", sqft: "4,200", units: "boat bays", best: "Waterfront and lake markets" },
  { size: "50 × 150 × 16", sqft: "7,500", units: "10 @ 15×50", best: "RV and motorhome, longest tenancies" },
];

export default function SelfStorageBuildingSizesPage() {
  return (
    <>
      <JsonLd id="building-sizes-schema" data={[breadcrumb, article, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Self-Storage Building Sizes: What Each Footprint Actually Gives You"
      subtitle="The useful question isn't how many square feet it is — it's how many rentable units come out of it, and what kind. Here's what the common footprints actually give you."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            Most people start a self-storage project with a number in their head — a building
            size, or a piece of land. The useful question isn&apos;t how many square feet it is.
            It&apos;s <strong className="text-roi-navy">how many rentable units come out of it,
            and what kind.</strong>
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            This page walks through the common footprints, what each typically yields, and what
            makes one right for your site.
          </p>
          <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-5">
            <p className="text-sm text-roi-steel leading-relaxed">
              <strong className="text-roi-navy">A caveat worth reading first:</strong> the unit
              counts below are <strong className="text-roi-navy">typical layouts, not quotes.</strong>{" "}
              Drive-aisle width, door placement, corridor design and unit mix all change the count.
              Use them to understand the shape of the decision, then{" "}
              <Link href="/resources/cost-calculator" className="text-roi-red font-semibold hover:underline">
                run your numbers
              </Link>{" "}
              or ask us for a real layout.
            </p>
          </div>
        </div>
      </section>

      {/* What decides layout */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The two things that actually decide your layout
          </h2>
          <p className="text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">Building width sets your unit depth.</strong> A
            30-foot-wide building gives two rows of 15-foot-deep units back to back. A
            40-foot-wide building gives two rows of 20-foot units. Width is the decision that
            constrains everything after it.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">Building length sets your unit count.</strong> Divide
            by unit width — usually 10 feet — and multiply by two for back-to-back rows.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            That&apos;s the whole arithmetic. What makes it a real decision is unit mix and demand:
            a market that wants small units and a market that wants boat parking need different
            buildings on the same piece of land.
          </p>
        </div>
      </section>

      {/* Footprints */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-8">
            Common footprints
          </h2>

          <h3 className="text-xl font-bold text-roi-navy mb-2">15 × 100 — 1,500 sq ft</h3>
          <p className="text-roi-steel leading-relaxed">
            Single-loaded: one row of 15-foot-deep units, typically{" "}
            <strong className="text-roi-navy">10 units at 10×15</strong>.
          </p>
          <p className="mt-3 text-roi-steel leading-relaxed">
            The smallest footprint that makes commercial sense. Suits an infill lot, an expansion
            phase, or a market you&apos;re testing before committing. Lower absolute return, but
            also the lowest entry cost and the easiest to add to later.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">15 × 130 — 1,950 sq ft</h3>
          <p className="text-roi-steel leading-relaxed">
            Same single-loaded design, longer run: typically{" "}
            <strong className="text-roi-navy">13 units at 10×15</strong>.
          </p>
          <p className="mt-3 text-roi-steel leading-relaxed">
            Good fit for a narrow or awkwardly shaped parcel where depth is constrained but length
            isn&apos;t. Three more units than the 15×100 for proportionally less cost, since the
            fixed costs are already covered.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">30 × 100 — 3,000 sq ft</h3>
          <p className="text-roi-steel leading-relaxed">
            Double-loaded: two rows of 15-foot-deep units, typically{" "}
            <strong className="text-roi-navy">20 units at 10×15</strong>.
          </p>
          <p className="mt-3 text-roi-steel leading-relaxed">
            The 10×15 is a workhorse unit — a household&apos;s worth of furniture, a
            contractor&apos;s tools and materials. Twenty of them is a real facility rather than a
            trial.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">30 × 120 — 3,600 sq ft</h3>
          <p className="text-roi-steel leading-relaxed">
            Same design, longer: typically{" "}
            <strong className="text-roi-navy">24 units at 10×15</strong>.
          </p>
          <p className="mt-3 text-roi-steel leading-relaxed">
            The size the search data suggests people are actively pricing. The extra 20 feet adds
            four units against a fixed foundation and roof system — better cost per unit than the
            30×100.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">
            40 × 100 — 4,000 sq ft —{" "}
            <Link href="/specials/40x100-self-storage" className="text-roi-red hover:underline">
              The Basic
            </Link>
          </h3>
          <p className="text-roi-steel leading-relaxed">
            Two rows of 20-foot-deep units, <strong className="text-roi-navy">20 units at 10×20</strong>.
          </p>
          <p className="mt-3 text-roi-steel leading-relaxed">
            The extra depth changes who rents from you. A 10×20 takes a car, a boat trailer, or a
            full household. Same unit count as the 30×100, meaningfully higher rent per unit.{" "}
            <strong className="text-roi-navy">One of ROI&apos;s four packaged specials.</strong>
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">
            30 × 150 — 4,500 sq ft —{" "}
            <Link href="/specials/30x150-self-storage" className="text-roi-red hover:underline">
              The Beginner
            </Link>
          </h3>
          <p className="text-roi-steel leading-relaxed">
            Mixed-unit layout rather than uniform. Mixing sizes captures a wider tenant base and
            cuts vacancy risk — you&apos;re not dependent on one segment of the market showing up.{" "}
            <strong className="text-roi-navy">Packaged special.</strong>
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">
            35 × 120 × 12 —{" "}
            <Link href="/specials/35x120-boat-storage" className="text-roi-red hover:underline">
              The Small Boat
            </Link>
          </h3>
          <p className="text-roi-steel leading-relaxed">
            Purpose-built for boat storage. 10×10 doors with extra height clearance, sized for
            small to medium boats. If you have property near water, this is a different and often
            less competitive market than household storage.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-2">
            50 × 150 × 16 —{" "}
            <Link href="/specials/50x150-rv-storage" className="text-roi-red hover:underline">
              The RV Starter
            </Link>
          </h3>
          <p className="text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">10 oversized 15×50 bays with 12×14 doors.</strong>{" "}
            Built for Class A motorhomes and fifth wheels. The highest rent per unit of anything on
            this list, and the tenants stay longest — an RV owner isn&apos;t moving out next month.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Quick comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-roi-navy text-white">
                <tr>
                  <th className="text-left font-bold px-4 py-3">Footprint</th>
                  <th className="text-left font-bold px-4 py-3">Sq ft</th>
                  <th className="text-left font-bold px-4 py-3">Typical units</th>
                  <th className="text-left font-bold px-4 py-3">Best for</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.size} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-roi-navy whitespace-nowrap">{r.size}</td>
                    <td className="px-4 py-3 text-roi-steel whitespace-nowrap">{r.sqft}</td>
                    <td className="px-4 py-3 text-roi-steel whitespace-nowrap">{r.units}</td>
                    <td className="px-4 py-3 text-roi-steel">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Typical layouts, not quotes — drive aisles, door placement and unit mix all change the count.
          </p>
        </div>
      </section>

      {/* Bigger isn't better */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Bigger isn&apos;t automatically better
          </h2>
          <p className="text-roi-steel leading-relaxed">
            The fixed costs — site work, foundation, permits, mobilisation — don&apos;t scale with
            size. That&apos;s the argument for building larger.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            The argument against is that an oversized facility in a thin market is vacant square
            footage you&apos;re paying to heat, insure and maintain.{" "}
            <strong className="text-roi-navy">Lease-up rate matters more than unit count</strong>,
            and a full 20-unit building beats a half-empty 40-unit one on every measure that
            matters.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            If you don&apos;t know your market&apos;s absorption rate, that&apos;s the number to
            find before you pick a footprint. Our{" "}
            <Link href="/resources/is-self-storage-a-good-investment" className="text-roi-red font-semibold hover:underline">
              feasibility guide
            </Link>{" "}
            covers how to think about it.
          </p>
        </div>
      </section>

      {/* How much land each footprint needs.
          NOTE: aisle widths and the 2-2.5x ratio are GENERAL INDUSTRY PLANNING
          PRACTICE, framed as such in the copy. They are not ROI engineering
          specs and must not be presented as quotes. */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            How much land each footprint needs
          </h2>
          <p className="text-roi-steel leading-relaxed">
            The building footprint is not the site requirement, and this is where projects get
            stuck at the planning stage. A 30&times;100 building does not fit on a 30&times;100
            piece of land.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">Drive aisles are the biggest addition.</strong>{" "}
            Drive-up units need enough width for a vehicle to pull in, stop, and back out without a
            three-point turn. Typical is 24 to 30 feet — closer to 30 where you have drive-up units
            on both sides of the aisle.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">Turning space at the ends.</strong> A truck with a
            trailer needs room to come around the end of a building. Undersized end space is the
            most common complaint from tenants who otherwise like the facility.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">Setbacks vary by jurisdiction</strong> and are the one
            number you cannot estimate from a rule of thumb. Check them before you fall in love with
            a parcel.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">A working rule of thumb:</strong> for a single
            building with drive-up access, plan on usable site area of roughly two to two and a half
            times the building footprint. A 3,000 sq ft building wants something in the range of
            6,000 to 7,500 sq ft of usable ground once aisles and maneuvering are accounted for.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            That ratio improves as you add buildings — a second row shares the aisle between them
            rather than needing its own.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            <strong className="text-roi-navy">If you&apos;re evaluating a parcel rather than a
            building</strong>, work backwards: take the usable area after setbacks, divide by
            roughly 2.25, and that&apos;s the approximate building footprint the site supports. Then
            come back to the table above.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            Aisle widths and the site-area ratio above are general industry planning practice, not
            ROI engineering specifications. Your jurisdiction, site shape and access plan govern.
          </p>
        </div>
      </section>

      {/* Cost drivers */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            What drives the cost of each size
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Square footage is the smallest part of the answer. What actually moves the number:
          </p>
          <ul className="space-y-4 text-gray-300 text-sm leading-relaxed list-disc pl-5">
            <li><strong className="text-white">Eave height</strong> — the single biggest structural cost driver after span</li>
            <li><strong className="text-white">Door count and size</strong> — every opening is a framed penetration; the RV bays&apos; 12×14 doors cost multiples of a standard 10×10</li>
            <li><strong className="text-white">Site conditions</strong> — grading, drainage and soil vary more between parcels than most people expect</li>
            <li><strong className="text-white">Unit mix</strong> — more interior partitions means more material and labour per square foot</li>
            <li><strong className="text-white">Climate control</strong> — insulation and mechanical, if you&apos;re building for it</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/resources/cost-calculator"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-6 py-3 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Run your own numbers →
            </Link>
            <Link
              href="/resources/self-storage-building-cost"
              className="inline-flex items-center justify-center border border-white/25 text-white font-medium px-6 py-3 rounded-md hover:bg-white/5 transition-colors text-sm"
            >
              What drives self-storage construction cost →
            </Link>
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

      {/* CTA — routes size intent into the cost funnel per FOR-166 */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Know your footprint? Put a number on it.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Run your dimensions through the calculator for an all-in cost range, or browse the
            pre-priced packages if one matches what you had in mind.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/cost-calculator"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Open the Cost Calculator
            </Link>
            <Link
              href="/specials"
              className="inline-flex items-center justify-center border border-gray-300 text-roi-navy font-medium px-7 py-3.5 rounded-md hover:bg-white transition-colors text-sm"
            >
              See Packaged Specials
            </Link>
          </div>
        </div>
      </section>
    </SubPageLayout>
    </>
  );
}
