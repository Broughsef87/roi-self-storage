import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, articleSchema } from "@/lib/schema";

const PATH = "/resources/self-storage-doors-buyers-guide";

export const metadata: Metadata = pageMetadata({
  title: "Self-Storage Doors: Types, Sizing & Replacement Guide | ROI",
  description:
    "How to choose self-storage doors — roll-up vs. sheet curtain, insulated options, sizing, and replacing doors on an existing facility. A practical buyer's guide.",
  path: PATH,
});

// Two-level breadcrumb (Home -> this page). No pathless "Resources" middle
// crumb — there's no /resources index page, and a pathless mid-list crumb
// reintroduces the exact GSC BreadcrumbList error fixed in FOR-66. Matches
// the precedent set on /resources/self-storage-building-cost.
const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Self-Storage Doors Buyer's Guide", path: PATH },
]);

const article = articleSchema({
  headline: "Self-Storage Doors: How to Choose (and Replace) Them",
  description:
    "How to choose self-storage doors — roll-up vs. sheet curtain, insulated options, sizing, and replacing doors on an existing facility. A practical buyer's guide.",
  path: PATH,
  datePublished: "2026-07-08",
});

const faqs = [
  {
    q: "Can I replace roll-up doors on an existing storage facility?",
    a: "Yes. Measure the framed opening (clear width and height), record the mounting configuration, group by unit size, and order drop-in replacement doors matched to the existing openings.",
  },
  {
    q: "Do you repair storage doors, or only replace them?",
    a: "ROI supplies new and replacement doors — complete door units — not repair parts or on-site repair service. When a door is past its life or damaged, the solution is a replacement door matched to your opening.",
  },
  {
    q: "What are insulated self-storage doors, and do I need them?",
    a: "Insulated doors are temperature-rated doors for climate-controlled units, where the door is part of the sealed, conditioned envelope. They're typically specified on conditioned buildings and skipped on standard drive-up units.",
  },
  {
    q: "What sizes do self-storage doors come in?",
    a: "Door size is set by the unit dimensions and required access, so it's matched to your unit schedule rather than a fixed catalog size. Width and height follow the unit mix.",
  },
];

export default function SelfStorageDoorsBuyersGuidePage() {
  return (
    <>
      <JsonLd id="doors-guide-schema" data={[breadcrumb, article, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Self-Storage Doors: How to Choose (and Replace) Them"
      subtitle="The door is the single most-used component in a self-storage facility — one per unit, cycled thousands of times over the building's life. Here's how to choose the right type, size it correctly, and replace it when the time comes."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            The door is the single most-used component in a self-storage facility. There&apos;s one
            on every unit, and each one gets cycled thousands of times over the building&apos;s
            life. Yet doors are usually the last thing a developer thinks about and the first thing
            an operator regrets getting wrong. This guide walks through the door types, how
            they&apos;re sized, and what&apos;s involved in replacing them on an existing facility —
            so you can spec them deliberately instead of by default.
          </p>
        </div>
      </section>

      {/* Main door types */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The main door types — and when each one fits
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            Not every unit wants the same door. Three types cover almost every facility:
          </p>
          <ul className="space-y-5 text-roi-steel text-sm leading-relaxed">
            <li>
              <strong className="text-roi-navy">Roll-up doors.</strong> The industry standard, and
              the door on virtually every drive-up unit. The tenant lifts the door and loads
              straight from their vehicle. An open-drum design with worm-screw tensioning keeps
              maintenance simple, which matters when you&apos;re maintaining hundreds of them. If
              you picture a self-storage door, this is it.
            </li>
            <li>
              <strong className="text-roi-navy">Sheet curtain doors.</strong> Corrugated steel panel
              doors — the economical choice at scale. Durable, low-maintenance, and available in
              custom colors, they&apos;re common on large facilities where the per-door cost adds up
              fast across a big unit count.
            </li>
            <li>
              <strong className="text-roi-navy">Overhead sectional doors.</strong> Paneled doors
              that rise on tracks, built for the wide, tall openings that vehicle, boat, and RV
              storage need. Insulated versions are available where the space is conditioned.
            </li>
          </ul>
        </div>
      </section>

      {/* Roll-up vs sheet curtain */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Roll-up vs. sheet curtain: the short version
          </h2>
          <p className="text-roi-steel leading-relaxed">
            The practical choice on most facilities is between the roll-up door and the sheet
            curtain door — and it usually comes down to scale and budget.{" "}
            <strong className="text-roi-navy">Roll-up doors</strong> are the default: the
            open-drum, worm-screw design is simple to operate and maintain, one unit at a time,
            which is why they&apos;re on virtually every drive-up unit.{" "}
            <strong className="text-roi-navy">Sheet curtain doors</strong> — corrugated steel
            panels — are the economical option when the unit count gets large and per-door cost
            starts to drive the budget. Both are steel, both seal against weather; the decision is
            mostly cost-per-door at volume versus the familiarity and easy servicing of a standard
            roll-up.
          </p>
        </div>
      </section>

      {/* Insulated vs non-insulated */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Insulated vs. non-insulated
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Insulation is a climate-control question. On a standard drive-up building, a
            non-insulated door is the norm — there&apos;s no conditioned air to hold. On{" "}
            <Link href="/climate-controlled" className="text-roi-red font-semibold hover:underline">
              climate-controlled units
            </Link>
            , the door is part of the sealed, conditioned envelope, so an insulated door earns its
            cost by holding the conditioned space and reducing HVAC load. The rule of thumb:
            insulate the doors on conditioned buildings, skip it on standard drive-up, and match the
            insulation level to the building rather than over-speccing every opening.
          </p>
        </div>
      </section>

      {/* How doors get sized */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            How doors get sized
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Door width and height aren&apos;t a catalog pick — they&apos;re set by the unit
            dimensions and the access the unit needs. A 10×10 unit and a 10×30 unit call for
            different openings, and the door schedule follows the unit mix. That&apos;s why doors
            should be planned alongside{" "}
            <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">
              how the unit mix is laid out
            </Link>
            : door width and placement interact with unit dimensions and drive-aisle geometry, which
            determines how many units of each size actually fit. Get the schedule right and the
            layout works; get it wrong and you lose rentable units. Gauge, coating, and latching
            then follow from your climate and your access-control setup.
          </p>
        </div>
      </section>

      {/* Replacing doors */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            Replacing doors on an existing facility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Plenty of door demand isn&apos;t new construction at all — it&apos;s operators replacing
            doors that have aged out, been damaged, or need to change as units get remixed.
            Replacement is straightforward if you measure correctly:
          </p>
          <ol className="space-y-4 text-gray-300 text-sm leading-relaxed list-decimal pl-5">
            <li>
              <strong className="text-white">Measure the opening, not the old door.</strong> Get
              the clear width and height of the framed opening, plus the side-room and headroom
              around it.
            </li>
            <li>
              <strong className="text-white">Record the current configuration.</strong> Door type
              (roll-up, sheet), mounting, and your current latch or lock setup — especially if it
              ties into access control.
            </li>
            <li>
              <strong className="text-white">Count by unit size.</strong> Group the replacements by
              opening size so the order matches your actual unit schedule.
            </li>
            <li>
              <strong className="text-white">Order drop-in replacements.</strong> With frame
              dimensions and mounting in hand, replacement doors are matched to the existing
              openings and your current mounting configuration.
            </li>
          </ol>
          <p className="mt-6 text-gray-300 leading-relaxed">
            The same measurements apply whether you&apos;re re-dooring a handful of aged-out units
            or a facility during a unit remix. If you have your current door sizes and counts,
            that&apos;s enough to{" "}
            <Link href="/storage-doors" className="text-roi-red font-semibold hover:underline">
              get a component or replacement quote
            </Link>
            .
          </p>
          <p className="mt-6 text-sm text-gray-400 italic">
            A note on scope: ROI supplies new and replacement doors — complete door units matched to
            your openings — not repair parts or on-site repair service. When a door has reached the
            end of its life or been damaged, the fix is a replacement door, not a repair.
          </p>
        </div>
      </section>

      {/* Doors, layout, budget */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            Doors, layout, and the budget
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Because door count and type ripple into both the layout and the build cost, they belong
            in the budget conversation early. Doors are a real line item — one per unit, plus the
            specialty openings — and they move with the unit count and the insulation spec. If
            you&apos;re pricing a facility, it&apos;s worth understanding{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">
              what drives self-storage building cost
            </Link>{" "}
            so the door schedule is budgeted rather than discovered later. The same holds if
            you&apos;re{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              converting an existing warehouse
            </Link>
            , where the existing structure sets the openings you have to work with.
          </p>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The bottom line
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Doors look like a commodity and behave like a design decision. Match the door type to
            your unit count and budget — roll-up by default, sheet curtain when per-door cost
            drives the number at scale — insulate only where the building is conditioned, size to
            the unit schedule, and — for replacements — measure the opening and match the mounting.
            Do that, and the doors quietly do their job for the life of the building.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed">
            Building new or re-dooring an existing facility? ROI supplies{" "}
            <Link href="/storage-doors" className="text-roi-red font-semibold hover:underline">
              roll-up doors and storage door systems
            </Link>{" "}
            for new builds and as replacements, matched to your unit schedule.
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

      {/* CTA — points to /storage-doors, not a competing quote flow here */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            See door options and get a component quote.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Whether you&apos;re specifying doors for a new facility or replacing doors on an
            existing one, the door options and quote request live on our storage doors page.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/storage-doors"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              See Door Options &amp; Get a Quote
            </Link>
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
