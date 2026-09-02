import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources";

// NOTE ON JSON-LD ENTITIES (FOR-162): JsonLd renders via
// dangerouslySetInnerHTML, so it does NOT HTML-escape. Every string that
// reaches a schema builder must contain a PLAIN "&", never "&amp;".
// JSX-escaped entities belong in visible markup only. The literal below uses
// a plain ampersand on purpose.
const TITLE = "Self-Storage Resources: Cost Guides, Calculators & Build Planning | ROI";
const DESCRIPTION =
  "Free guides and tools for planning a self-storage build — what it costs, whether it pencils, which footprint to pick, and which doors to spec. No email gate.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

// Two-level breadcrumb (Home -> Resources). No pathless mid-crumb — that
// reintroduces the GSC BreadcrumbList error fixed in FOR-66.
const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: PATH },
]);

interface Resource {
  href: string;
  title: string;
  blurb: string;
  use: string;
}

const startHere: Resource[] = [
  {
    href: "/resources/is-self-storage-a-good-investment",
    title: "Is self-storage a good investment?",
    blurb:
      "The honest version. What actually determines whether a specific project returns — local demand, your cost basis, achievable rents — and the conditions under which it doesn't.",
    use: "Read this before you spend money on anything else.",
  },
];

const costs: Resource[] = [
  {
    href: "/resources/self-storage-building-cost",
    title: "What drives self-storage building cost",
    blurb:
      "Every line item that moves your number: building package, loads, doors, foundations, coatings, region, schedule. Plus what sits in ROI's scope and what belongs to your contractor.",
    use: "Use it to build a budget you can defend to a lender.",
  },
  {
    href: "/resources/cost-calculator",
    title: "Cost & ROI calculator",
    blurb:
      "Put in your dimensions, building type, and your own market rent. Get an all-in cost range and a rough simple payback. Every assumption is labeled and editable — we don't inject rent or occupancy as if it were our data.",
    use: "Use it for a starting range in about a minute.",
  },
];

const design: Resource[] = [
  {
    href: "/resources/self-storage-building-sizes",
    title: "Building sizes and what each footprint yields",
    blurb:
      "What the common footprints typically give you in rentable units, what each one suits, and how much land each actually needs once drive aisles and turning space are counted.",
    use: "Use it when you're choosing dimensions or sizing up a parcel.",
  },
  {
    href: "/resources/self-storage-doors-buyers-guide",
    title: "Storage doors buyer's guide",
    blurb:
      "Roll-up versus sheet curtain, sizing doors to your unit mix, what fails first and why, and what's involved in replacing doors on an existing facility.",
    use: "Use it before you sign off on a door schedule.",
  },
  {
    href: "/resources/converting-retail-to-self-storage",
    title: "Converting retail & big-box to self-storage",
    blurb:
      "Why vacant retail converts well, the zoning catch that kills otherwise-good deals, and how to tell early whether a specific building is worth pursuing.",
    use: "Use it if you're looking at an existing building rather than raw land.",
  },
];

function ResourceCard({ r }: { r: Resource }) {
  return (
    <li className="rounded-lg border border-gray-200 bg-white p-6 hover:border-roi-red/40 transition-colors">
      <h3 className="text-lg font-bold text-roi-navy tracking-tight">
        <Link href={r.href} className="hover:text-roi-red transition-colors">
          {r.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-roi-steel leading-relaxed">{r.blurb}</p>
      <p className="mt-3 text-sm text-gray-500 italic">{r.use}</p>
      <Link
        href={r.href}
        className="mt-4 inline-flex items-center text-sm text-roi-red font-semibold hover:underline"
      >
        Read the guide &rarr;
      </Link>
    </li>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <JsonLd id="resources-hub-schema" data={[breadcrumb]} />
      <SubPageLayout
        title="Self-Storage Resources"
        subtitle="Everything we know about planning a self-storage build, written down and given away. No email gate, no drip sequence — just the guides we would walk you through on the phone anyway."
      >
        {/* Intro */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-lg text-roi-steel leading-relaxed">
              Most self-storage projects go wrong at the planning stage, not the building stage.
              People anchor on a cost-per-square-foot number they read somewhere, buy a parcel that
              can&apos;t fit the drive aisles, or spec a unit mix their market doesn&apos;t want.
            </p>
            <p className="mt-4 text-roi-steel leading-relaxed">
              These guides exist because we&apos;d rather you catch those problems now than after
              the concrete is poured. They&apos;re the same explanations we give on the phone. If
              one of them talks you out of a bad project, it did its job.
            </p>
          </div>
        </section>

        {/* Start here */}
        <section className="py-16 lg:py-24 bg-roi-light">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight">Start here</h2>
            <p className="mt-3 text-roi-steel leading-relaxed">
              If you&apos;re still deciding whether to do this at all, read this one first.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-5">
              {startHere.map((r) => (
                <ResourceCard key={r.href} r={r} />
              ))}
            </ul>
          </div>
        </section>

        {/* Cost and returns */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
              What it costs, and whether it pencils
            </h2>
            <p className="mt-3 text-roi-steel leading-relaxed">
              One explains the model. The other runs your numbers through it.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-5">
              {costs.map((r) => (
                <ResourceCard key={r.href} r={r} />
              ))}
            </ul>
          </div>
        </section>

        {/* Design decisions */}
        <section className="py-16 lg:py-24 bg-roi-light">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
              Deciding what to build
            </h2>
            <p className="mt-3 text-roi-steel leading-relaxed">
              Once the project makes sense on paper, these are the decisions that shape it.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-5">
              {design.map((r) => (
                <ResourceCard key={r.href} r={r} />
              ))}
            </ul>
          </div>
        </section>

        {/* Where to go next */}
        <section className="py-16 lg:py-24 bg-roi-navy">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Past the reading stage?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              The guides cover the thinking. These cover the buildings themselves.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
              <li>
                <Link href="/specials" className="text-white font-semibold hover:text-roi-red transition-colors">
                  Current building specials
                </Link>
                <span className="block text-gray-400 mt-0.5">
                  Packaged sizes with published pricing and spec sheets.
                </span>
              </li>
              <li>
                <Link href="/case-studies" className="text-white font-semibold hover:text-roi-red transition-colors">
                  Case studies
                </Link>
                <span className="block text-gray-400 mt-0.5">
                  Facilities we&apos;ve built, and what the owners were solving for.
                </span>
              </li>
              <li>
                <Link href="/mini-storage" className="text-white font-semibold hover:text-roi-red transition-colors">
                  Building types
                </Link>
                <span className="block text-gray-400 mt-0.5">
                  Standard drive-up, climate-controlled, boat and RV, conversions.
                </span>
              </li>
              <li>
                <Link href="/#sizes" className="text-white font-semibold hover:text-roi-red transition-colors">
                  Pricing guide
                </Link>
                <span className="block text-gray-400 mt-0.5">
                  Published starting ranges by building type.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </SubPageLayout>
    </>
  );
}
