import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema, productSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Self Storage Doors — Roll-Up, Swing & Insulated | New & Replacement | ROI",
  description:
    "Self storage doors — roll-up, swing, and insulated, plus drop-in replacements — matched to your unit schedule. New builds and existing facilities. Get a component quote.",
  path: "/storage-doors",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Storage Doors", path: "/storage-doors" },
]);

const service = serviceSchema({
  serviceType: "Self Storage Door Supply",
  name: "Self Storage Roll-Up Doors & Commercial Storage Doors",
  description:
    "Commercial roll-up doors, sheet curtain doors, swing doors, and overhead sectional doors for self storage facilities — supplied as part of a complete building package and for component or replacement orders. Patented S2F Latch system with dual padlock support.",
});

const product = productSchema({
  name: "Self Storage Roll-Up Door",
  description:
    "Commercial-grade steel roll-up door for self storage units. Sized to your unit schedule, available in galvanized or painted finishes, insulated or non-insulated, with latching specified for access-control and smart-lock compatibility. Supplied for new construction and as replacement doors for existing facilities.",
});

const faqs = [
  {
    q: "What types of storage doors do you offer?",
    a: "We supply commercial-grade roll-up doors (the industry standard), sheet curtain doors, swing doors, and overhead sectional doors. The right choice depends on your unit size, access needs, and budget.",
  },
  {
    q: "What sizes do self storage roll-up doors come in?",
    a: "Door width and height are set by your unit dimensions and the access you need, so they're specified to your project rather than sold in fixed sizes. Common widths run 3′ to 12′ with standard heights of 7′–8′ for standard units and 10′–14′+ for vehicle, boat, and RV storage. Send your unit schedule and we'll match doors to it.",
  },
  {
    q: "What's the difference between roll-up and sheet doors?",
    a: "Roll-up doors coil into a drum above the opening and are the most common for self storage. Sheet curtain doors use corrugated steel panels and roll up similarly but are typically more economical. Both are commercial-grade and built for daily use.",
  },
  {
    q: "What are drive-up storage doors?",
    a: "They're the steel roll-up doors on standard drive-up units — the tenant pulls up, lifts the door, and loads directly from their vehicle. It's the most common self-storage door type; sizing and options are under Roll-Up Doors above.",
  },
  {
    q: "Can I replace roll-up doors on an existing facility?",
    a: "Yes — we supply replacement doors for existing facilities, whether you're upgrading aging doors, repairing damage, or remixing unit sizes. We match your current frame dimensions and mounting configuration. Send your current door sizes and counts for a quote.",
  },
  {
    q: "Do you sell replacement swing doors for storage units?",
    a: "Yes — we supply drop-in replacement swing doors for existing facilities. Send your opening dimensions and current hinge/latch configuration and we'll match a replacement. (Same for roll-up replacements.)",
  },
  {
    q: "What are insulated self storage doors, and do I need them?",
    a: "Insulated doors are temperature-rated doors used on climate-controlled (conditioned) buildings, where the door has to hold the conditioned envelope. You need them on conditioned units; standard drive-up units use non-insulated doors. We spec the right one for your build.",
  },
  {
    q: "Do your doors work with smart locks and access control?",
    a: "Doors include the patented S2F Latch system which supports dual padlocks, and latching can be specified with access-control and smart-lock compatibility in mind. Tell us the access system you're planning and we'll account for it.",
  },
];

export default function StorageDoorsPage() {
  return (
    <>
      <JsonLd id="doors-schema" data={[breadcrumb, service, product, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Self Storage Roll-Up Doors & Storage Door Systems"
      subtitle="Roll-up doors are the most-used component in a self storage facility — one per unit, cycled thousands of times over the building's life. We supply them for new builds and as replacements, matched to your unit schedule."
    >
      {/* Overview / roll-up doors intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            Roll-up doors are the most-used component in a self storage facility — one per unit,
            opened and closed thousands of times over the building&apos;s life. Whether you&apos;re
            building new or upgrading an existing facility, the doors you choose affect your unit
            layout, your tenant experience, and your operating costs. ROI supplies roll-up doors as
            part of a complete building package and for component or replacement orders.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed">
            Two kinds of buyers land here: developers and GCs specifying doors for new
            construction, and owner-operators replacing or upgrading doors on an existing facility.
            Both paths are below.
          </p>
        </div>
      </section>

      {/* Door options */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Door options
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-3xl mb-8">
            Self storage roll-up doors vary by:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-roi-navy mb-2">Size</h3>
              <p className="text-sm text-roi-steel leading-relaxed">Door width and height are set by the unit dimensions and the access you need.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-roi-navy mb-2">Material &amp; coating</h3>
              <p className="text-sm text-roi-steel leading-relaxed">Steel doors in galvanized or painted finishes; coating choices relate to corrosion exposure in your climate.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-roi-navy mb-2">Insulated vs. non-insulated</h3>
              <p className="text-sm text-roi-steel leading-relaxed">
                Insulated doors are typically specified for{" "}
                <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">climate-controlled units</Link>;
                non-insulated for standard drive-up.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-roi-navy mb-2">Latching &amp; security</h3>
              <p className="text-sm text-roi-steel leading-relaxed">Latch and locking options, including compatibility with access-control and smart-lock systems.</p>
            </div>
          </div>
          <p className="mt-8 text-roi-steel leading-relaxed max-w-3xl text-sm">
            Specific door sizes, gauges, ratings, and performance characteristics are
            project-dependent — we match doors to your unit schedule and code environment rather
            than promising universal numbers.
          </p>
        </div>
      </section>

      {/* How doors affect layout and revenue */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            How doors affect layout and revenue
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Doors aren&apos;t just a part — they shape the facility. Door width and placement
            interact with unit dimensions and drive-aisle geometry, which affects how many units of
            each size fit in the building, which affects your net rentable square feet and unit
            mix. Get the door schedule right and the layout works; get it wrong and you lose
            rentable units or create access problems. That&apos;s why we plan doors as part of the{" "}
            <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">building layout</Link>,
            not as an afterthought. Door count and type also move the budget — see{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">what drives self-storage building cost</Link>.
          </p>
        </div>
      </section>

      {/* New construction vs replacement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            New construction vs. replacement
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-roi-light rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-3">New construction</h3>
              <p className="text-sm text-roi-steel leading-relaxed">
                Doors are specified as part of the building package, matched to your unit mix and
                engineered openings. Ask for a package quote that includes the door schedule —
                whether you&apos;re planning{" "}
                <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">mini storage</Link> or a{" "}
                <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">building conversion</Link>.
              </p>
            </div>
            <div className="bg-roi-light rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-3">Replacement &amp; upgrades</h3>
              <p className="text-sm text-roi-steel leading-relaxed">
                Facilities replace roll-up doors as they age, after damage, or when remixing units
                (changing unit sizes to match demand). We supply replacement doors for existing
                facilities —{" "}
                <a href="#quote" className="text-roi-red font-semibold hover:underline">send your current door sizes and counts</a>{" "}
                for a replacement quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types (hub content) */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Door types we supply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roll-Up Doors", desc: "The industry standard — and the door on virtually every drive-up storage unit, where the tenant lifts the door and loads straight from their vehicle. Open-drum design with worm-screw tensioning for simple maintenance. Available in all standard widths and heights; 2–3 week lead times." },
              { title: "Sheet Curtain Doors", desc: "Corrugated steel panel doors. Economical option for large facilities. Durable, easy to maintain, and available in custom colors." },
              { title: "Swing Doors", desc: "Hinged steel doors for units where a roll-up isn’t practical — common on interior, hallway-access climate-controlled units and smaller specialty units. We also supply replacement swing doors for existing storage units: send the opening size and your current hinge/latch setup and we’ll match a drop-in replacement." },
              { title: "Overhead Sectional Doors", desc: "Paneled doors that rise on tracks. Ideal for vehicle storage with wide, tall openings. Insulated options available." },
              {
                title: "Insulated Self Storage Doors",
                desc: (
                  <>
                    Temperature-rated doors for{" "}
                    <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">climate-controlled</Link>{" "}
                    units, where the door is part of the sealed, conditioned envelope. Insulated doors
                    help hold the conditioned space and reduce HVAC load — typically specified on
                    conditioned buildings and skipped on standard drive-up. We match the insulation
                    level to your build.
                  </>
                ),
              },
              { title: "Replacement Doors", desc: "Drop-in replacements for existing facilities. We match your current frame dimensions and mounting configuration." },
            ].map((d) => (
              <div key={d.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-roi-navy mb-2">{d.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{d.desc}</p>
              </div>
            ))}
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Get a door quote — new build or replacement.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Specifying doors for a new facility, or replacing doors on an existing one? Send your
            unit schedule (or current door sizes and counts) and we&apos;ll get you a component
            quote.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Get a Door Quote
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
