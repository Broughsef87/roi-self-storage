import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";

const PATH = "/resources/converting-retail-to-self-storage";

export const metadata: Metadata = pageMetadata({
  title: "Converting Retail & Big-Box Stores to Self-Storage | ROI",
  description:
    "Turning a vacant big-box or retail store into a self-storage facility: why it works, what it costs, the zoning catch, and how to check if your building fits.",
  path: PATH,
});

// Two-level breadcrumb (Home -> this page). No pathless "Resources" middle
// crumb — there's no /resources index page, and a pathless mid-list crumb
// reintroduces the GSC BreadcrumbList error fixed in FOR-66. Supersedes the
// 3-level crumb in the dispatch; matches the FOR-123 doors guide.
const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Converting Retail to Self-Storage", path: PATH },
]);

const article = articleSchema({
  headline: "Converting Retail & Big-Box Stores Into Self-Storage",
  description:
    "Turning a vacant big-box or retail store into a self-storage facility: why it works, what it costs, the zoning catch, and how to check if your building fits.",
  path: PATH,
  datePublished: "2026-07-09",
});

const faqs = [
  {
    q: "Can you convert a big-box or retail store into self-storage?",
    a: "Yes. Large-format retail buildings have the open floor plates, sound structure, and good locations that make strong conversion candidates. The main hurdle is usually zoning and change-of-use approval, not the building itself.",
  },
  {
    q: "What's the hardest part of a retail-to-storage conversion?",
    a: "Zoning and change of use. A retail-zoned parcel doesn't automatically permit self-storage, and some municipalities restrict storage in commercial corridors — confirm the zoning path before committing.",
  },
  {
    q: "Is converting retail cheaper than building new?",
    a: "Usually. Reusing an existing shell runs roughly $7–$10/sq ft for the building package vs. $10–$12 for standard ground-up — but retail adds façade and zoning costs, so pressure-test the specific building.",
  },
  {
    q: "Do retail buildings have enough ceiling height for storage?",
    a: "Sometimes. Retail ceilings are often lower than warehouses', which can limit unit types and rule out a mezzanine. Clear height is one of the first things to check.",
  },
  {
    q: "Who handles the construction and permits?",
    a: "ROI supplies the engineered steel components, partitions, doors, and stamped drawings. Concrete, sitework, permitting, and on-site construction are handled by your contractor and a licensed local engineer.",
  },
];

export default function ConvertingRetailToSelfStoragePage() {
  return (
    <>
      <JsonLd id="retail-conversion-schema" data={[breadcrumb, article, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Converting Retail & Big-Box Stores Into Self-Storage"
      subtitle="Vacant big-box and retail space is finding a second life as self-storage. Here's why retail converts well, where it gets tricky, what it costs, and how to tell early whether a specific store is worth pursuing."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            There&apos;s a lot of empty retail in America right now — shuttered big-box stores,
            half-vacant strip centers, dead anchor space in aging malls. For owners and investors, a
            growing share of that square footage is finding a second life as self-storage. The
            reasons are simple: the building is already standing, the footprints are big and open,
            and storage demand keeps climbing in markets where retail has thinned out. This guide
            covers why retail converts well, where it gets tricky, and how to tell early whether a
            specific store is worth pursuing.
          </p>
        </div>
      </section>

      {/* Why retail converts well */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Why retail buildings convert well
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            Big-box and large-format retail buildings share the traits that make any{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              conversion into storage
            </Link>{" "}
            work — with a few advantages of their own:
          </p>
          <ul className="space-y-4 text-roi-steel text-sm leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-roi-navy">Big, open floor plates.</strong> A former big-box
              store is essentially a giant clear-span or wide-column box. Open floor area is exactly
              what you want: it divides efficiently into a mix of unit sizes and drive aisles without
              structure fighting the layout.
            </li>
            <li>
              <strong className="text-roi-navy">Sound structure already in place.</strong> The slab,
              the frame, and a weather-tight envelope are already there and were built to commercial
              standards. Reusing them is the whole cost advantage of converting instead of building
              new.
            </li>
            <li>
              <strong className="text-roi-navy">Good locations.</strong> Retail sits on visible,
              accessible, well-trafficked parcels — often better storage locations than the
              industrial edge where warehouses live. Visibility that sold retail also markets
              storage.
            </li>
            <li>
              <strong className="text-roi-navy">Ample parking and access.</strong> Retail sites come
              with parking and curb cuts that can convert into drive aisles and customer access.
            </li>
          </ul>
        </div>
      </section>

      {/* Where it gets tricky */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Where retail conversions get tricky
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            The catch with retail is rarely the structure — it&apos;s everything around it:
          </p>
          <ul className="space-y-4 text-roi-steel text-sm leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-roi-navy">Zoning and change of use.</strong> This is the big
              one. A parcel zoned for retail doesn&apos;t automatically allow self-storage, and many
              municipalities restrict storage in prime commercial corridors or require a special-use
              permit. Confirm the zoning path before you fall in love with a building.
            </li>
            <li>
              <strong className="text-roi-navy">Storefront glazing and façade rules.</strong> Long
              glass storefronts aren&apos;t ideal for storage security or climate control, and some
              jurisdictions have design standards for what a converted commercial frontage can look
              like. Both are solvable, but they&apos;re line items.
            </li>
            <li>
              <strong className="text-roi-navy">Clear height limits.</strong> Retail ceilings are
              often lower than a warehouse&apos;s, which can cap the unit types you offer and rule
              out a second tier or mezzanine.
            </li>
            <li>
              <strong className="text-roi-navy">Deeper floor plates and interior columns.</strong>{" "}
              Some big-box layouts run very deep or carry interior columns that need thoughtful
              corridor planning so you don&apos;t strand un-rentable interior area.
            </li>
          </ul>
          <p className="mt-6 text-roi-steel leading-relaxed">
            None of these are dealbreakers on their own — but together they&apos;re why a{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              feasibility check on the structure
            </Link>{" "}
            and the zoning has to come before the pro forma.
          </p>
        </div>
      </section>

      {/* What it costs */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            What it costs
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Like any conversion, reusing a retail shell is usually the lowest cost-per-square-foot
            path into self-storage — you&apos;re paying for interior partitions, corridors, doors,
            and the engineered steel components, not a ground-up building. As a national-average
            starting point (building package only; concrete and sitework excluded; your real number
            depends on the building, unit mix, climate control, and local loads):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-8">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Convert / retrofit an existing shell</div>
              <div className="text-3xl font-bold text-white">$7&ndash;$10<span className="text-base font-medium text-gray-400"> / sq ft</span></div>
              <p className="mt-2 text-xs text-gray-400">Building package, starting.</p>
            </div>
            <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-8">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Build new (standard)</div>
              <div className="text-3xl font-bold text-white">$10&ndash;$12<span className="text-base font-medium text-gray-400"> / sq ft</span></div>
              <p className="mt-2 text-xs text-gray-400">Building package, starting.</p>
            </div>
          </div>
          <p className="mt-8 text-gray-300 leading-relaxed">
            Retail-specific costs to budget on top: any façade or storefront work the jurisdiction
            requires, and the zoning/permitting effort itself. For the full line-by-line, see{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
              what drives self-storage building cost
            </Link>
            . If the facility will be conditioned,{" "}
            <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">
              climate-controlled units
            </Link>{" "}
            add insulation and HVAC coordination to the number.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The process, at a glance
          </h2>
          <p className="text-roi-steel leading-relaxed">
            A retail conversion follows the same arc as any building conversion: confirm the building
            and the zoning fit, plan the layout and{" "}
            <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">
              how the unit mix divides up
            </Link>
            , then partition, add corridors, and fit doors. The engineered steel components,
            partitions, and doors — plus stamped drawings — come from a building supplier like ROI;
            permitting, concrete, sitework, and on-site construction stay with your contractor and a
            licensed local engineer. Because a change of use is governed by your local building code
            and your Authority Having Jurisdiction, egress, fire-separation, and sprinkler
            requirements are set by the jurisdiction, not the kit.
          </p>
        </div>
      </section>

      {/* Screening */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            How to know if a store is worth pursuing
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            Before you spend real money on drawings, three quick screens tell you whether a retail
            building is a candidate:
          </p>
          <ol className="space-y-4 text-roi-steel text-sm leading-relaxed list-decimal pl-5">
            <li>
              <strong className="text-roi-navy">Zoning.</strong> Is self-storage a permitted or
              special-permit use on this parcel? If it&apos;s flatly prohibited and unlikely to be
              rezoned, stop here.
            </li>
            <li>
              <strong className="text-roi-navy">The box.</strong> Footprint, clear height, and
              column spacing — enough open, tall, wide-bay area to divide efficiently into your unit
              mix?
            </li>
            <li>
              <strong className="text-roi-navy">The numbers.</strong> Does the building package plus
              façade/zoning work, on top of your contractor&apos;s concrete and sitework, still beat
              building new for your market&apos;s rents?
            </li>
          </ol>
          <p className="mt-6 text-roi-steel leading-relaxed">
            Clear those three and it&apos;s worth a real feasibility pass. Send the footprint, clear
            height, and column spacing and ROI will tell you straight how the structure divides — and
            whether it&apos;s working for you or against you. Browse the{" "}
            <Link href="/case-studies" className="text-roi-red font-semibold hover:underline">
              conversion case studies
            </Link>{" "}
            to see how existing structures became rentable facilities.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed italic">
            A vacant retail or big-box building can be one of the lowest-cost, fastest paths into
            self-storage — when the zoning and the box cooperate. Checking that, honestly and early,
            is the first move.
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

      {/* CTA — funnels up to the parent /retrofit page (informational intent) */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Have a building in mind? Check the conversion.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Send the footprint, clear height, and column spacing and ROI will tell you straight
            whether the structure works — and how it divides into a facility.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/retrofit"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              See How Conversion Works
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
