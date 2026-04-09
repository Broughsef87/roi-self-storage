import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "The Small Boat: 35x120x12 Boat Storage | ROI Self Storage",
  description:
    "35x120x12 boat storage building special. 10x10 doors, 12' eave height, single slope roof. $32,800. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What types of boats fit in a 10×10 door opening?",
    a: "Most fishing boats, pontoons, jet skis, small sailboats, and trailer-mounted vessels fit through a 10×10 opening. Larger boats may require a custom design request.",
  },
  {
    q: "Can I upgrade to larger or taller doors?",
    a: "This special includes fixed 10×10 doors. Larger openings may be possible through a custom design request.",
  },
  {
    q: "Is this building suitable for coastal or high-humidity environments?",
    a: "Yes. Galvalume roofing, coated steel walls, and long-life fasteners offer strong corrosion resistance. A moisture barrier (not included) is recommended in humid climates.",
  },
  {
    q: "Are partitions included between each bay?",
    a: "Yes. 29ga Galvalume partitions are included for clean, durable separation between storage bays.",
  },
  {
    q: "Can I convert some bays into RV or trailer storage?",
    a: "Yes, the footprint supports mixed-use storage. RVs, trailers, and equipment can be stored as long as they fit through the 10×10 openings.",
  },
];

export default function Special35x120BoatPage() {
  return (
    <SubPageLayout
      title={`"The Small Boat" — 35' × 120' × 12'`}
      subtitle="Have property in a great fishing spot? This building accommodates most small to medium boats with 10×10 doors and an extra 3.5' of height for larger, taller boats."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">35&apos;&times;120&apos;&times;12&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Doors</div>
              <div className="text-2xl font-bold text-roi-navy">10&apos;&times;10&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Roof</div>
              <div className="text-2xl font-bold text-roi-navy">Single Slope</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</div>
              <div className="text-2xl font-bold text-white">$32,800</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">What&apos;s included</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> All building kit materials: roof, walls, trim, wedge anchors, screws</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Single slope roof with 0.5:12 optimized pitch</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 12&apos; eave height — fits larger boats and toys</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Premium 10&apos;&times;10&apos; mini storage doors — 12 color choices</li>
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
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Optimized 12&apos;&times;35&apos; bay layout</li>
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

      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">FAQ</h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
