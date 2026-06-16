import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema, productSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Mini Storage Buildings | Pre-Engineered Steel Self Storage | ROI",
  description:
    "Metal mini storage buildings engineered around your unit mix and pro forma. Roll-up doors, low operating cost, nationwide delivery. Building package from $10-12/sf.",
  path: "/mini-storage",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Mini Storage", path: "/mini-storage" },
]);

const service = serviceSchema({
  serviceType: "Mini Storage Building Manufacturing",
  name: "Pre-Engineered Mini Storage Buildings",
  description:
    "Single-story drive-up self storage buildings with individual roll-up doors. Engineered for site-specific wind, snow, and seismic loads around your unit mix and net rentable square feet. Building package $10-$12 per sq ft.",
  minPricePerSqFt: 10,
});

const product = productSchema({
  name: "Mini Storage Building (Pre-Engineered Steel)",
  description:
    "Pre-engineered steel mini storage building system — primary frames, secondary framing, cladding, bracing, roll-up doors, and partitions — engineered to your site, loads, dimensions, and local code. Building package only; excludes concrete and sitework.",
  minPricePerSqFt: 10,
  maxPricePerSqFt: 12,
});

const faqs = [
  {
    q: "How much does a mini storage building cost?",
    a: "Standard mini storage building packages typically start around $10-12/sq ft (national average, building package only, excluding concrete and sitework). Your real cost depends on size, spans, loads, door count, and region — send dimensions for a project range.",
  },
  {
    q: "What sizes do mini storage buildings come in?",
    a: "Buildings are engineered to your site and unit mix rather than sold in fixed sizes — bay dimensions, widths, and heights are set by the layout you need. Tell us the unit mix you want to rent and we'll size the building to it.",
  },
  {
    q: "How long does it take to build a mini storage facility?",
    a: "Manufacturing typically takes several weeks after drawing approval, then delivery and erection. Most projects reach operational in a few months depending on sitework, permitting, and install scope.",
  },
  {
    q: "Can I expand a mini storage facility later?",
    a: "Yes — facilities are commonly expanded by adding units or buildings as demand grows, and existing structures can sometimes be converted to add rentable space. (See conversions and expansions.)",
  },
  {
    q: "What's the difference between mini storage and climate-controlled?",
    a: "Mini storage is typically single-story, drive-up, and non-conditioned — lower cost to build and operate. Climate-controlled adds insulation, conditioning, and interior hallway systems for a premium unit type.",
  },
];

export default function MiniStoragePage() {
  return (
    <>
      <JsonLd id="mini-storage-schema" data={[breadcrumb, service, product, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Mini Storage Buildings: Pre-Engineered Steel for Self Storage Facilities"
      subtitle="The standard, most common format in the industry — single-story, drive-up units with roll-up doors, simple access, and low operating costs. Engineered around the unit mix your market and pro forma call for."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            A mini storage building is a single-story, drive-up self storage building — the
            standard, most common format in the industry. Rows of units with roll-up doors,
            simple drive-up access, and low operating costs. For first-time facility owners and
            developers expanding a portfolio, it&apos;s usually the most direct, fastest-to-revenue
            way into self storage. ROI engineers, manufactures, and delivers the pre-engineered
            steel building package; you build the facility around the unit mix your market and
            pro forma call for.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed">
            A quick note on terms: &ldquo;pre-engineered metal building&rdquo; (PEMB) is common
            buyer language, and it&apos;s accurate — modern systems are still engineered for your
            site, loads, dimensions, and local code. What you&apos;re buying is an engineered metal
            building system: primary frames, secondary framing, cladding, and bracing designed to
            work together, plus the{" "}
            <Link href="/storage-doors" className="text-roi-red font-semibold hover:underline">
              roll-up doors
            </Link>{" "}
            and partitions that make it a storage facility.
          </p>
        </div>
      </section>

      {/* Best for / not best for */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Best for / not best for
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">
                Mini storage is a strong fit when:
              </h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Your market wants standard drive-up units with vehicle access to the door.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Land cost supports a single-story footprint.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> You want lower operating costs — no elevators, less HVAC, simpler maintenance.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> You&apos;re building your first facility or adding standard units to a portfolio.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">
                Look at other formats when:
              </h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span aria-hidden="true" className="text-gray-300 shrink-0">&#10007;</span> Land is expensive or constrained — multi-story may pencil better per acre.</li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-gray-300 shrink-0">&#10007;</span>
                  <span>Your market demands climate-controlled units at a premium. (See{" "}
                    <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">climate-controlled storage buildings</Link>.)</span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-gray-300 shrink-0">&#10007;</span>
                  <span>You&apos;re storing boats and RVs, which need larger bays and door heights. (See{" "}
                    <Link href="/boat-storage" className="text-roi-red font-semibold hover:underline">boat/RV storage buildings</Link>.)</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-roi-steel leading-relaxed max-w-3xl">
            Not sure which way your site leans? That&apos;s a layout conversation —{" "}
            <a href="#quote" className="text-roi-red font-semibold hover:underline">send us the site and target unit mix</a>{" "}
            and we&apos;ll help you compare.
          </p>
        </div>
      </section>

      {/* What's included and what isn't */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            What&apos;s included — and what isn&apos;t
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-roi-navy mb-4">ROI&apos;s scope</h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Design and engineering of the metal building system for your dimensions, loads, and code environment.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Manufacturing of the steel building package.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Roll-up doors and partition options.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Stamped engineering drawings.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Nationwide delivery.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-roi-navy mb-4">What ROI doesn&apos;t do</h3>
              <p className="text-sm text-roi-steel leading-relaxed">
                ROI doesn&apos;t pour concrete or act as your on-site general contractor.
                Foundations, sitework, and erection are handled by your contractor. We&apos;re
                upfront about that scope because it keeps your budget honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed around unit mix */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            Designed around your unit mix and net rentable square feet
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The building decision and the revenue model are the same conversation. Bay dimensions,
            aisle widths, and the building footprint determine how many units of each size you can
            fit — which sets your net rentable square feet (NRSF) and unit mix, which sets what the
            facility earns. &ldquo;Engineered around your pro forma, not the other way around&rdquo;
            means we size the system to the mix you want to rent rather than forcing your mix into a
            generic box. <a href="#quote" className="text-roi-red font-semibold hover:underline">Send us your target unit mix</a>{" "}
            (or your market&apos;s demand) and the site, and we&apos;ll work the layout against it.
          </p>
        </div>
      </section>

      {/* What drives cost */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            What drives mini storage building cost
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-3xl">
            We don&apos;t publish a single cost-per-square-foot number, because an honest one
            doesn&apos;t exist without your project&apos;s details. As a starting point, standard
            mini storage building packages run about $10-12/sq ft (national average, building
            package only, excluding concrete and sitework). The drivers that move your number:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
            <div className="flex gap-2 text-sm text-roi-steel"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> The steel package — size, spans, heights, bay spacing.</div>
            <div className="flex gap-2 text-sm text-roi-steel"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Load requirements — wind, snow, and live loads.</div>
            <div className="flex gap-2 text-sm text-roi-steel"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Doors and partitions — count and type.</div>
            <div className="flex gap-2 text-sm text-roi-steel"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Region and the steel market.</div>
            <div className="flex gap-2 text-sm text-roi-steel"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Schedule.</div>
          </div>
          <p className="mt-8 text-roi-steel leading-relaxed max-w-3xl text-sm">
            For the full line-item breakdown including erection and concrete ranges, see the{" "}
            <Link href="/#sizes" className="text-roi-red font-semibold hover:underline">pricing guide</Link>{" "}
            and{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">what drives self-storage building cost</Link>.
            For a real number, <a href="#quote" className="text-roi-red font-semibold hover:underline">send your dimensions</a>.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">Timeline</h2>
          <p className="text-roi-steel leading-relaxed">
            Manufacturing lead time typically runs several weeks once drawings are approved,
            followed by delivery and field erection by your contractor. A realistic mini storage
            project — from order to operational — is commonly a few months, depending on sitework
            readiness, permitting, submittals, and install scope. We&apos;ll give you a
            project-specific timeline with your quote. Already own a building? A{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              warehouse conversion
            </Link>{" "}
            can shorten the path further.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Get a custom layout and quote.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Send us your site and target unit mix and we&apos;ll work up a building that fits your
            pro forma — with a real price and timeline.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Get a Custom Layout
            </a>
            <a
              href="tel:8653169009"
              className="inline-flex items-center justify-center border border-gray-300 text-roi-navy font-medium px-7 py-3.5 rounded-md hover:bg-roi-light transition-colors text-sm"
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
