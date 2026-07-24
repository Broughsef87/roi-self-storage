import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";
import { PRICING, type PricingKey } from "@/lib/pricing";

const PATH = "/resources/is-self-storage-a-good-investment";

// All-in cost figures come from the single pricing source (same numbers the
// cost guide and calculator publish) so this guide can never drift from them.
const total = (k: PricingKey) => PRICING[k].totalLabel.replace("/sf", "");

export const metadata: Metadata = pageMetadata({
  title: "Is Self-Storage a Good Investment? An Honest Look | ROI",
  description:
    "What self-storage actually returns, the costs that drive it, and how to tell if a specific project pencils — from a builder who'd rather you build the right one.",
  path: PATH,
});

// Two-level breadcrumb (Home -> this page). No pathless "Resources" middle
// crumb — there's no /resources index, and a pathless mid-list crumb
// reintroduces the GSC BreadcrumbList error fixed in FOR-66. Matches
// FOR-123 (doors guide) and FOR-124 (retail conversion guide).
const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Is Self-Storage a Good Investment?", path: PATH },
]);

const article = articleSchema({
  headline: "Is Self-Storage a Good Investment? An Honest Look",
  description:
    "What self-storage actually returns, the costs that drive it, and how to tell if a specific project pencils — from a builder who'd rather you build the right one.",
  path: PATH,
  datePublished: "2026-07-24",
});

const faqs = [
  {
    q: "Is self-storage still a good investment?",
    a: "As an asset class, yes — low operating cost, sticky demand, and resilience in downturns are real. But returns are entirely local: a specific project only works if the trade area is under-supplied and the cost basis is right. The category being strong doesn't make every deal strong.",
  },
  {
    q: "How much does a self-storage facility return?",
    a: "It's a function of local rent, occupancy, and your cost basis, so there's no universal number — anyone who quotes one sight-unseen is guessing. The honest way to estimate it is to run your market's actual rent and occupancy against a real build-cost range. Our cost calculator does exactly that.",
  },
  {
    q: "What's the cheapest way to get into self-storage?",
    a: "Usually converting an existing building. A conversion runs roughly $10.50–$16/sq ft all-in versus $23.50+ for standard ground-up — often half the cost — when the structure cooperates. In a good market, a conversion candidate is frequently the strongest return available.",
  },
  {
    q: "How long does it take a new facility to fill up?",
    a: "Stabilization commonly takes 18–36 months depending on the market and competition. A realistic pro forma has to survive that lease-up ramp, not assume day-one occupancy.",
  },
  {
    q: "Do I need a feasibility study?",
    a: "For anything beyond the smallest facility, yes. The local supply-and-demand picture is the biggest predictor of success and the easiest thing to get wrong. Feasibility is the first expense a serious developer takes on, not the last.",
  },
];

const costRows: { label: string; key: PricingKey }[] = [
  { label: "Standard drive-up", key: "standard" },
  { label: "Climate-controlled", key: "climate" },
  { label: "Boat & RV", key: "boat" },
  { label: "Conversion / retrofit", key: "conversion" },
];

export default function IsSelfStorageAGoodInvestmentPage() {
  return (
    <>
      <JsonLd id="investment-guide-schema" data={[breadcrumb, article, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Is Self-Storage a Good Investment? An Honest Look"
      subtitle="&ldquo;Self-storage is a good investment&rdquo; and &ldquo;this self-storage project is a good investment&rdquo; are different sentences. Here's what actually determines which one you're looking at."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            Self-storage has spent the last decade as the darling of commercial real estate —
            recession-resistant, low-staff, high-margin. Most of that reputation is earned. But
            &ldquo;self-storage is a good investment&rdquo; and &ldquo;<em>this</em> self-storage
            project is a good investment&rdquo; are different sentences, and the gap between them is
            where people lose money. We build these facilities for a living, so we see both the ones
            that pencil and the ones that shouldn&apos;t have been built. Here&apos;s the honest
            version.
          </p>
        </div>
      </section>

      {/* Why the asset class earns its reputation */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Why the asset class earns its reputation
          </h2>
          <p className="text-roi-steel leading-relaxed">
            The fundamentals are genuinely good. A self-storage facility runs on very little labor —
            often one part-time manager, sometimes none with modern access control. Operating costs
            are low: no build-outs between tenants, minimal utilities on standard drive-up, little
            maintenance on a steel building. Demand is sticky — people who put their stuff in storage
            tend to leave it there far longer than they plan to. And it holds up in downturns, because
            the life events that drive storage demand (moving, downsizing, divorce, death,
            small-business overflow) don&apos;t stop when the economy slows.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            That&apos;s the case for the category. It&apos;s real. It&apos;s also not the same as the
            case for your specific deal.
          </p>
        </div>
      </section>

      {/* What determines whether a project works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            What actually determines whether a project works
          </h2>
          <p className="text-roi-steel leading-relaxed mb-8">Three things, in order:</p>

          <h3 className="text-xl font-bold text-roi-navy mb-3">1. The local market</h3>
          <p className="text-roi-steel leading-relaxed">
            Self-storage is a trade-area business — most tenants come from within a few miles. The
            single biggest predictor of success is whether your area is under-supplied. A market with
            lots of existing storage and flat population growth can&apos;t absorb another facility no
            matter how well you build it. A growing area that&apos;s under-served will fill units
            almost regardless. This is why a feasibility study — an honest look at existing supply,
            population, and rents in your specific trade area — matters more than any construction
            decision. Get this wrong and nothing else saves you.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-3">2. Your cost basis</h3>
          <p className="text-roi-steel leading-relaxed">
            What you pay to get built determines your return more than what you charge. This is the
            part we can speak to directly. Building cost varies widely by type — as a national-average
            starting point (building package + erection + concrete, per square foot):
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-roi-light">
                <tr>
                  <th className="text-left font-bold text-roi-navy px-4 py-3 border-b border-gray-200">Type</th>
                  <th className="text-left font-bold text-roi-navy px-4 py-3 border-b border-gray-200">All-in est. / sq ft</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.key} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 text-roi-steel">{row.label}</td>
                    <td className="px-4 py-3 font-semibold text-roi-navy">{total(row.key)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-roi-steel leading-relaxed">
            Notice the bottom row.{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              Converting an existing building
            </Link>{" "}
            is consistently the lowest cost-per-square-foot path in — often half the cost of
            ground-up. If a conversion candidate exists in a good market, that&apos;s frequently the
            strongest return on the board, because you&apos;ve cut the biggest variable. For a full
            breakdown of{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
              what a facility actually costs to build
            </Link>
            , we&apos;ve written that up separately.
          </p>

          <h3 className="text-xl font-bold text-roi-navy mt-10 mb-3">3. Your rents and fill rate</h3>
          <p className="text-roi-steel leading-relaxed">
            Revenue is local rent × rentable square feet × occupancy. We deliberately won&apos;t hand
            you a rent number — anyone who quotes you a universal &ldquo;self-storage makes X per
            square foot&rdquo; is guessing, because it&apos;s entirely a function of your market. What
            we&apos;ll say is that the{" "}
            <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">
              standard drive-up building
            </Link>{" "}
            is the industry workhorse for a reason (lowest cost, broad demand), while{" "}
            <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">
              climate-controlled units
            </Link>{" "}
            command premium rents but cost more to build and run — so they only pencil where the
            market pays for them.
          </p>
        </div>
      </section>

      {/* The math, honestly */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            The math, honestly
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The back-of-envelope every developer runs:{" "}
            <strong className="text-white">
              annual net revenue ÷ total project cost = your yield.
            </strong>{" "}
            Total cost is the building plus land, sitework, and soft costs (permits, financing,
            design). Net revenue is rent times rentable area times stabilized occupancy, minus
            operating expenses. Divide, and you have a return you can compare against other uses of
            the money.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            The honest caveat: that calculation is only as good as the assumptions you feed it, and
            the two that move it most — market rent and stabilized occupancy — are the two we
            can&apos;t supply, because they&apos;re yours. What we <em>can</em> do is give you a real
            building-cost range for your dimensions, so the biggest line in the numerator is grounded
            rather than guessed.{" "}
            <Link href="/resources/cost-calculator" className="text-roi-red font-semibold hover:underline">
              Run your own numbers
            </Link>{" "}
            with our calculator — put in your market&apos;s rent and occupancy, and it returns a
            build-cost range and a rough payback. It won&apos;t pretend to more precision than it
            has, and neither will we.
          </p>
        </div>
      </section>

      {/* Failure modes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The ways it goes wrong
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Because you asked for honest: the failure modes are consistent. Overbuilding into a
            saturated market. Assuming lease-up will be faster than it is (stabilization often takes
            18–36 months, and your pro forma has to survive that ramp). Chasing climate-controlled in
            a market that won&apos;t pay the premium. Underbudgeting the soft costs — land, permits,
            and financing that never show up in a &ldquo;per square foot&rdquo; quote. And treating a
            national average as a local truth. None of these are construction mistakes. They&apos;re
            feasibility mistakes, made before anyone poured concrete.
          </p>
        </div>
      </section>

      {/* So is it a good investment */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            So — is it a good investment?
          </h2>
          <p className="text-roi-steel leading-relaxed">
            For the category: yes, with real fundamentals behind the hype. For your specific project:
            it depends entirely on your market and your cost basis, and it&apos;s knowable{" "}
            <em>before</em> you commit. The developers who do well treat feasibility as the first
            expense, not the last — they confirm the market is under-served, they get an honest build
            number, and they run the return on real assumptions before they fall in love with a site.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            That&apos;s the part we can help with directly: a real building-cost range for your
            dimensions, and a straight answer on whether a conversion beats ground-up for your
            situation. The market study is yours (or a specialist&apos;s) to run — but when
            you&apos;re ready to put a real number on the build,{" "}
            <Link href="/#quote" className="text-roi-red font-semibold hover:underline">
              send us your dimensions
            </Link>{" "}
            and we&apos;ll give you a range you can actually underwrite against.
          </p>
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

      {/* CTA — funnels down into the calculator (the tool) */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Put a real number on the build.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Run your market&apos;s rent and occupancy against a real build-cost range, or send us
            your dimensions for a range you can underwrite against.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/cost-calculator"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Run Your Own Numbers
            </Link>
            <a
              href="tel:8653169009"
              className="inline-flex items-center justify-center border border-gray-300 text-roi-navy font-medium px-7 py-3.5 rounded-md hover:bg-white transition-colors text-sm"
            >
              Call (865) 316-9009
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
    </>
  );
}
