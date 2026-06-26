import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Warehouse to Self Storage Conversion | Costs & Process | ROI",
  description:
    "Convert an existing warehouse or shell into a self storage facility. Cost drivers, what's involved, and engineered steel from a $7-10/sf building package.",
  path: "/retrofit",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Retrofit / Conversion", path: "/retrofit" },
]);

const service = serviceSchema({
  serviceType: "Self Storage Retrofit and Conversion",
  name: "Warehouse & Building Conversion to Self Storage",
  description:
    "Convert an existing building, warehouse, or bare shell into rentable storage units. ROI engineers and supplies the steel building components — partitions, corridors, and roll-up doors — with stamped drawings. Building package $7-$10 per sq ft.",
  minPricePerSqFt: 7,
});

const faqs = [
  {
    q: "Can you convert a warehouse into self storage?",
    a: "Yes — a clear-span warehouse is often a strong candidate, because open floor area is easier to divide into an efficient unit mix. We engineer the partitions, corridors, and roll-up doors to fit your layout and supply stamped drawings for the components. Whether a specific building works comes down to its clear height, column spacing, slab, and your local code.",
  },
  {
    q: "How much does it cost to convert a building into self storage?",
    a: "Conversion building packages typically start around $7-10/sq ft (national average, excluding concrete and sitework). Your actual cost depends on the building, door count, partitions, and whether it's climate-controlled. Send dimensions and we'll give you a real range.",
  },
  {
    q: "What makes a building a good conversion candidate?",
    a: "Generally: clear span or wide column spacing, adequate clear height for your unit types, a sound slab, and a footprint that fits drive aisles and an efficient unit mix. Interior load-bearing walls, tight columns, or low height work against you. It's project-specific — we'll assess yours.",
  },
  {
    q: "Do I need new permits to convert a building to storage?",
    a: "Usually yes. Changing a building's use is governed by your local building code and AHJ, and can trigger egress, fire-separation, and sprinkler requirements depending on the building. ROI provides stamped engineering drawings for the building components; permitting and code approval run through your jurisdiction and a licensed engineer.",
  },
  {
    q: "Does ROI handle the construction?",
    a: "ROI engineers and manufactures the steel components and provides stamped drawings. Concrete and on-site general contracting are handled by your contractor.",
  },
  {
    q: "Is converting a warehouse to self storage a good investment?",
    a: "It can be — conversions often have a lower cost basis and a faster path to opening than building new, which is why they're a popular play when the right building is available. But it depends entirely on the building fitting your unit mix and your market's rents. A bad-fit structure can wipe out the savings. We help you check the building side; the full investment picture also depends on land, sitework, financing, and local demand. We don't promise returns — we give you honest building numbers to budget around.",
  },
  {
    q: "What kinds of buildings convert well to self storage?",
    a: "Open, clear-span or wide-bay structures with adequate clear height, a sound slab, and a weather-tight envelope — warehouses, distribution buildings, some big-box retail, and existing on-site buildings at a facility you already own. Buildings with lots of interior load-bearing walls, low ceilings, or a slab/envelope needing major work are harder and may not pencil. Send dimensions and we'll tell you straight.",
  },
  {
    q: "How long does a self-storage conversion take?",
    a: "It depends on the building's condition and your contractor's schedule, but conversions are typically faster than ground-up because the structure already exists. On the ROI side, engineered components and doors run on standard lead times once the design is set; sitework, permitting, and interior buildout timelines are set by your contractor and AHJ.",
  },
];

export default function RetrofitPage() {
  return (
    <>
      <JsonLd id="retrofit-schema" data={[breadcrumb, service, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Warehouse &amp; Building Conversions: Retrofit an Existing Structure Into Self Storage"
      subtitle="A self storage conversion — or retrofit — turns an existing building, warehouse, or bare shell into rentable storage units."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            A self storage conversion — or retrofit — turns an existing building, warehouse, or
            bare shell into rentable storage units. Instead of building from the ground up, you
            reuse the structure you already have (the slab, the frame, the envelope) and add the
            partitions, corridors, and doors that turn open floor area into a facility. For an
            owner sitting on an underused building, or an existing facility with room to grow,
            conversion is often the lowest cost-per-square-foot path into self storage. ROI
            engineers and supplies the steel building components that make the conversion work.
          </p>
        </div>
      </section>

      {/* Conversion candidate */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
              Is your building a good conversion candidate?
            </h2>
            <p className="mt-4 text-roi-steel leading-relaxed">
              Not every building converts cleanly. The structures that work best tend to share a
              few traits, and the ones that fight you usually have the same handful of problems.
              The right answer is always project-specific, but here&apos;s what we look at first.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">Works in your favor</h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Clear span or wide column spacing — open floor area is easier to divide into an efficient unit mix and drive aisles.</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Adequate clear height for the unit types you&apos;re planning.</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> A sound slab in reasonable condition.</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> A weather-tight envelope, or one that can be made so economically.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">Works against you</h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&#10007;</span> Interior load-bearing walls or tight column spacing that chop up the floor plate and force an inefficient layout.</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&#10007;</span> Low clear height that limits the unit types you can offer.</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&#10007;</span> A slab or envelope that needs significant remediation.</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-roi-steel leading-relaxed max-w-3xl">
            Whether a specific building pencils depends on its dimensions, condition, the unit mix
            you want, and your local code. <a href="#quote" className="text-roi-red font-semibold hover:underline">Send us the footprint, clear height, and column spacing</a> and
            we&apos;ll tell you straight whether it&apos;s a strong candidate — including when it isn&apos;t.
          </p>
        </div>
      </section>

      {/* Converting a warehouse into self storage (2A) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Converting a warehouse into self storage
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Warehouses are the most common conversion candidate, and usually the friendliest. A
            typical warehouse already has the things a conversion wants: a clear-span or wide-bay
            steel frame, high eaves that give you room for the unit types you want, a large slab,
            and a weather-tight envelope. That means most of the work is interior — partitions,
            corridors, and doors — rather than structural.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            The things to check on a warehouse specifically: clear height (enough for your unit mix,
            and for a mezzanine or second tier if the pro forma wants one), column spacing (wide bays
            divide efficiently; tight columns chop up the plan), slab condition and loading, and how
            the existing dock or drive-in doors fit your access plan. Send us the footprint, clear
            height, and column spacing and we&apos;ll tell you how it divides — and whether the
            structure is working for you or against you. ROI supplies the engineered steel
            components, partitions, and doors; sitework and construction stay with your contractor.
          </p>
        </div>
      </section>

      {/* What's involved */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            What&apos;s involved in a conversion
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            A conversion is mostly about dividing and equipping an open structure:
          </p>
          <ul className="space-y-5 text-roi-steel text-sm leading-relaxed">
            <li>
              <strong className="text-roi-navy">Layout and unit mix:</strong> planning partition
              walls and drive aisles around the unit mix your pro forma needs and the net rentable
              square feet you&apos;re targeting.
            </li>
            <li>
              <strong className="text-roi-navy">Partition walls and corridors:</strong> turning
              open floor area into individual units, plus interior hallway systems if you&apos;re
              going climate-controlled.
            </li>
            <li>
              <strong className="text-roi-navy">Roll-up doors:</strong> framing and fitting door
              openings for each unit.
            </li>
            <li>
              <strong className="text-roi-navy">Climate-controlled conversions:</strong> insulation,
              condensation control, and coordination with HVAC and hallway systems if the facility
              will be conditioned. (See{" "}
              <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">
                climate-controlled storage buildings
              </Link>.)
            </li>
            <li>
              <strong className="text-roi-navy">Code, egress, and fire/life-safety:</strong> a
              change of use is governed by your local building code and your Authority Having
              Jurisdiction (AHJ), and depending on the building&apos;s size, use, and occupancy it
              can involve egress, fire-separation, and sprinkler requirements. ROI provides stamped
              engineering drawings for the building components; permitting, code approval, and
              life-safety design are determined by your jurisdiction and a licensed engineer.
            </li>
            <li>
              <strong className="text-roi-navy">Scope:</strong> ROI engineers and manufactures the
              steel building components and supplies stamped drawings. ROI does not pour concrete
              or act as your on-site general contractor — sitework, foundations, and construction
              are handled by your contractor.
            </li>
          </ul>
        </div>
      </section>

      {/* Convert vs build new */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Convert vs. build new — when each makes sense
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Conversion usually wins on cost when you already have a usable structure. Building
              new usually wins when the existing structure fights the layout, or the numbers stop
              working once remediation is factored in. As a rough starting point (building package
              only, national averages — your real number depends on location, zoning, wind/snow/live
              loads, and the steel market):
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-8">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Convert / retrofit</div>
              <div className="text-3xl font-bold text-white">$7&ndash;$10<span className="text-base font-medium text-gray-400"> / sq ft</span></div>
              <p className="mt-3 text-sm text-gray-400">Building package starting range — steel components, partitions, and doors for an existing shell.</p>
            </div>
            <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-8">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Build new (standard)</div>
              <div className="text-3xl font-bold text-white">$10&ndash;$12<span className="text-base font-medium text-gray-400"> / sq ft</span></div>
              <p className="mt-3 text-sm text-gray-400">Standard storage building package for a ground-up build.</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400 max-w-3xl">
            Concrete and sitework are excluded; ROI doesn&apos;t pour concrete. Climate-controlled and
            boat/RV conversions run higher. See the{" "}
            <Link href="/#sizes" className="text-roi-red font-semibold hover:underline">
              pricing guide
            </Link>{" "}
            and{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
              what drives self-storage building cost
            </Link>{" "}
            for the full breakdown.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Conversion is typically the lowest cost-per-square-foot path into self storage when the
            building cooperates — but a bad-fit structure can erase that advantage fast. Checking
            that is the first thing we do.
          </p>
        </div>
      </section>

      {/* Is a self-storage conversion a good opportunity? (2B) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Is a self-storage conversion a good opportunity?
          </h2>
          <p className="text-roi-steel leading-relaxed">
            When the building cooperates, conversion is often the lowest cost-per-square-foot path
            into self storage — roughly $7&ndash;$10/sq ft for the building package vs. $10&ndash;$12
            for standard ground-up — and it&apos;s usually faster to market because the shell is
            already standing. With vacant retail, warehouse, and big-box space available in a lot of
            markets, owners and investors are increasingly converting existing structures instead of
            building new.
          </p>
          <p className="mt-4 text-roi-steel leading-relaxed">
            The honest caveat: the advantage is real only when the structure fits. Interior
            load-bearing walls, low clear height, or a slab and envelope that need real remediation
            can erase the cost savings fast — which is why a feasibility check on the specific
            building comes first. We&apos;ll help you pressure-test the building side of the numbers;
            pair it with your contractor&apos;s concrete and sitework figures and your market&apos;s
            rents for the full picture. (See{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
              what drives self-storage building cost
            </Link>.)
          </p>
        </div>
      </section>

      {/* What a conversion costs */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            What a conversion costs
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-3xl">
            We don&apos;t quote a flat number sight unseen — conversion cost swings on the building
            you start with. As a starting range, conversion building packages run about $7&ndash;10/sq ft,
            and estimated all-in (excluding concrete and sitework) often lands around $13/sq ft and
            up, depending on door count, partitions, climate control, and how much the existing
            structure needs.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed max-w-3xl text-sm">
            Cost drivers include the steel package, doors, hallway systems and partitions,
            insulation and climate-control coordination, height and spans, load requirements,
            region, and schedule. These are national-average starting points, not a quote —{" "}
            <a href="#quote" className="text-roi-red font-semibold hover:underline">send your dimensions</a>{" "}
            and we&apos;ll give you a real range.
          </p>
        </div>
      </section>

      {/* Expanding an existing facility */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Expanding an existing self storage facility
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Conversion isn&apos;t only for warehouses. If you own a facility with extra land or an
            underused building on site, the same approach adds rentable square footage without
            starting from scratch — often faster and cheaper than a new pad. (See{" "}
            <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">
              mini storage buildings
            </Link>
            , browse our{" "}
            <Link href="/case-studies" className="text-roi-red font-semibold hover:underline">
              case studies
            </Link>
            , or <a href="#quote" className="text-roi-red font-semibold hover:underline">contact us</a> for
            a feasibility assessment.)
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

      {/* Feasibility CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Conversion feasibility check — free.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Send us the dimensions of your existing building (footprint, clear height, and column
            spacing if you have it) and we&apos;ll tell you what it can become and roughly what
            it&apos;ll cost. No charge, no pressure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Start the Feasibility Check
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
