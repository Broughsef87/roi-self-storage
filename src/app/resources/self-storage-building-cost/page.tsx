import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";

const PATH = "/resources/self-storage-building-cost";

export const metadata: Metadata = pageMetadata({
  title: "What Drives Self-Storage Building Cost? | ROI",
  description:
    "An honest look at what actually drives self-storage building cost — building package, loads, doors, foundations, region — and how to build a defensible budget.",
  path: PATH,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "What Drives Self-Storage Building Cost?", path: PATH },
]);

const article = articleSchema({
  headline: "What Drives Self-Storage Building Cost?",
  description:
    "An honest look at what actually drives self-storage building cost — building package, loads, doors, foundations, region — and how to build a defensible budget.",
  path: PATH,
  datePublished: "2026-06-16",
});

const faqs = [
  {
    q: "How much does a self-storage building cost per square foot?",
    a: "There's no honest single number without your project's details — it depends on building type, loads, region, scope, and what's included. As starting ranges, standard building packages run about $10-12/sq ft and conversions around $7-10/sq ft (national averages, building package only, excluding concrete and sitework). Send your project for a real range.",
  },
  {
    q: "Why won't you just give me a price?",
    a: "Because a real price depends on your site, loads, dimensions, building type, and scope — a number quoted without those is a guess that won't hold. We give you a starting range fast and a real quote once we have your details.",
  },
  {
    q: "What's not included in the building package price?",
    a: "Concrete, foundations, sitework, and on-site general contracting — handled by your contractor. Make sure any quotes you compare cover the same scope.",
  },
  {
    q: "What makes one storage building cost more than another?",
    a: "Building type (climate-controlled and boat/RV cost more than standard drive-up), load requirements, size and spans, doors and interior systems, coatings, region, and schedule.",
  },
];

export default function SelfStorageBuildingCostPage() {
  return (
    <>
      <JsonLd id="cost-guide-schema" data={[breadcrumb, article, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="What Drives Self-Storage Building Cost?"
      subtitle="A single cost-per-square-foot figure doesn't exist without your project's details. Here's a clear model of what actually moves the number — so you can build a defensible budget."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            Buyers want a number. The honest answer is that a single cost-per-square-foot figure
            doesn&apos;t exist without your project&apos;s details — and anyone who quotes you one
            sight unseen is guessing. What we can give you is a clear model of what actually moves
            the number, so you can build a defensible budget and know exactly what you&apos;re
            paying for.
          </p>
          <div className="mt-8 rounded-lg border border-gray-200 bg-roi-light p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-roi-steel flex-1">
              <strong className="text-roi-navy">Want a quick range for your build?</strong> Try the
              cost &amp; ROI calculator — size and type in, honest range out.
            </p>
            <Link
              href="/resources/cost-calculator"
              className="shrink-0 inline-flex items-center justify-center bg-roi-red text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-roi-darkred transition-colors"
            >
              Open the calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* Honest version of cost per sf */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The honest version of &ldquo;cost per square foot&rdquo;
          </h2>
          <p className="text-roi-steel leading-relaxed">
            You&apos;ll see cost-per-square-foot numbers thrown around online. Treat them carefully —
            a real figure depends on date, region, scope, what&apos;s included and excluded, and the
            source. The same building is a different price in a high-wind coastal market than in a
            low-load inland one, and &ldquo;per square foot&rdquo; means nothing if you don&apos;t
            know whether it includes concrete, doors, erection, or just the steel package. We
            publish starting ranges (see the{" "}
            <Link href="/#sizes" className="text-roi-red font-semibold hover:underline">pricing guide</Link>)
            and then quote your actual project. We don&apos;t pretend a national average is your
            price.
          </p>
        </div>
      </section>

      {/* Includes / doesn't */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            What ROI&apos;s price includes — and what it doesn&apos;t
          </h2>
          <p className="text-roi-steel leading-relaxed">
            This is the first thing that makes cost numbers comparable. ROI&apos;s building package
            covers the engineered metal building system, door and partition options, and stamped
            drawings, delivered nationwide. It does NOT include concrete, foundations, sitework, or
            on-site general contracting — those are your contractor&apos;s scope. When you compare
            quotes, make sure you&apos;re comparing the same scope. A &ldquo;cheaper&rdquo; number
            that excludes more isn&apos;t actually cheaper.
          </p>
        </div>
      </section>

      {/* Cost drivers */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The cost drivers
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">What actually moves your number:</p>
          <ul className="space-y-5 text-roi-steel text-sm leading-relaxed">
            <li>
              <strong className="text-roi-navy">Building package</strong> — size, spans, heights,
              and bay spacing of the steel system.
            </li>
            <li>
              <strong className="text-roi-navy">Load requirements</strong> — wind, snow, and live
              loads, set by your jurisdiction and site exposure. Higher loads mean more steel.
            </li>
            <li>
              <strong className="text-roi-navy">Building type</strong> —{" "}
              <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">standard drive-up</Link>{" "}
              is the baseline;{" "}
              <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">climate-controlled</Link>{" "}
              (insulation + interior buildout + HVAC coordination) and boat/RV (larger bays, taller
              doors) cost more.
            </li>
            <li>
              <strong className="text-roi-navy">Doors, hallways, and partitions</strong> — count and
              type; climate-controlled interior systems add cost. (See our{" "}
              <Link href="/resources/self-storage-doors-buyers-guide" className="text-roi-red font-semibold hover:underline">
                doors buyer&apos;s guide
              </Link>{" "}
              for how door type and sizing work.)
            </li>
            <li>
              <strong className="text-roi-navy">Foundations and concrete</strong> — not in
              ROI&apos;s scope, but a major line in your total, driven by soils, loads, and slab
              design.
            </li>
            <li>
              <strong className="text-roi-navy">Coatings and corrosion exposure</strong> — coastal
              or corrosive environments may call for different coatings.
            </li>
            <li>
              <strong className="text-roi-navy">Region and the steel market</strong> — material
              pricing and local labor move with the market.
            </li>
            <li>
              <strong className="text-roi-navy">Schedule</strong> — timeline pressure and sequencing
              affect cost.
            </li>
          </ul>
        </div>
      </section>

      {/* Defensible budget */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Building a defensible budget
          </h2>
          <p className="text-roi-steel leading-relaxed">
            A real budget separates the building package from the rest of the project (concrete,
            sitework, GC, soft costs, permitting) and ranges each. Don&apos;t anchor on one blended
            cost-per-square-foot number — break it into the pieces above, range them for your market,
            and tighten as you get real quotes and engineering. We&apos;ll give you a building-package
            range from your dimensions; pair it with your contractor&apos;s concrete and sitework
            numbers for a total. Already have a building? A{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">conversion</Link>{" "}
            changes the math — often lower cost per square foot when the shell cooperates.
          </p>
        </div>
      </section>

      {/* What to have ready */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            What to have ready for a real number
          </h2>
          <p className="text-roi-steel leading-relaxed">
            To move from a range to a quote, bring: site location (for code and loads), building
            dimensions, target unit mix and door schedule, and any known load or foundation
            requirements. The more you bring, the tighter the number.
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Get a budget range.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Send us your site and dimensions and we&apos;ll give you a building-package range you can
            build a real budget around — no fake precision.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Get a Budget Range
            </a>
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
