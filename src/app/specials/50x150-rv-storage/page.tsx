import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import Flipbook from "@/components/Flipbook";

export const metadata: Metadata = {
  title: "The RV Starter: 50x150x16 RV Storage | ROI Self Storage",
  description:
    "50x150x16 RV storage building special. 10 units (15x50), 12x14 Janus doors, 16' eave. $66,937. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What size RVs fit in a 15×50 unit with a 12×14 door?",
    a: "Most Class A motorhomes, fifth wheels, travel trailers, and commercial vans fit comfortably. The 50' depth supports long-body RVs with room for accessories.",
  },
  {
    q: "Are the 12×14 Janus doors included?",
    a: "Yes. This special includes 12×14 Janus Model 1000 roll-up doors, designed for high-clearance RV access.",
  },
  {
    q: "Can I add electrical service for trickle chargers?",
    a: "Yes. Electrical service can be added during interior buildout. Plan conduit runs and outlet placement before pouring the slab.",
  },
  {
    q: "Can I add insulation or climate control?",
    a: "Yes. Insulation and HVAC can be added. Climate-controlled RV storage often commands higher rental rates.",
  },
  {
    q: "Can I convert some bays into boat or trailer storage?",
    a: "Absolutely. The 15×50 footprint supports mixed-use storage as long as the vehicle fits through the 12×14 opening.",
  },
];

export default function Special50x150RVPage() {
  return (
    <SubPageLayout
      title={`"The RV Starter" — 50' × 150' × 16'`}
      subtitle="Room for everything that matters. 10 oversized 15×50 bays with 12×14 Janus Model 1000 doors. Built for Class A motorhomes, fifth wheels, and large trailers."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">50&apos;×150&apos;×16&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Units</div>
              <div className="text-2xl font-bold text-roi-navy">10 × 15&apos;×50&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Doors</div>
              <div className="text-2xl font-bold text-roi-navy">12&apos;×14&apos; Janus</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</div>
              <div className="text-2xl font-bold text-white">$66,937</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">What&apos;s included</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> All building kit materials: roof, walls, trim, wedge anchors, screws</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 10 units (15&apos;×50&apos;) with 12&apos;×14&apos; framed openings</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 12&apos;×14&apos; Janus Model 1000 roll-up doors</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 16&apos; eave height — fits Class A motorhomes</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 26ga color walls</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 26ga Galvalume roof (painted upgrade optional)</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 29ga Galvalume partitions</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Long-life fasteners</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Engineering specs</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Wind speed: 115 mph</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Exposure: C</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Roof snow load: 30 lb</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Gable roof with 0.5:12 optimized pitch</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 50&apos; clear span — no interior columns</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Not included</h2>
              <ul className="space-y-2 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Freight</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Gutters &amp; downspouts</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Taxes, moisture barrier, door locks</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Pricing is for immediate sale and subject to change based on material availability.
          </p>
        </div>
      </section>

      {/* =================== BLUEPRINTS FLIPBOOK (full-bleed) =================== */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <div className="text-center">
            <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
              Engineering Drawings
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Browse the actual blueprints
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Flip through every page of the engineering package — structural notes, framing,
              slab plan, floor plan. This is the same drawing set we deliver with every order.
            </p>
          </div>
        </div>

        {/* Full-bleed wrapper so the book can grow to ~95vw */}
        <div className="w-full px-2 sm:px-4 text-white">
          <Flipbook
            folder="50x150-rv-storage"
            pageCount={7}
            aspectRatio={1.55}
            title="50' × 150' × 16' RV Storage — Drawing Set"
            downloadHref="/blueprints/50x150-rv-storage/blueprint.pdf"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="mt-8 text-center text-xs text-gray-500">
            For approval only — not for construction. Final stamped drawings are issued with your order.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">FAQ</h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
