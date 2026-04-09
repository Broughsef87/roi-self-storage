import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "The Beginner: 30x150 Self Storage Building | ROI Self Storage",
  description:
    "30x150 self storage building special. 30 mixed units (10x20, 10x15, 10x10). $39,779. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "How many total units are included?",
    a: "This model includes 30 rentable units: ten 10×20s, ten 10×15s, and ten 10×10s.",
  },
  {
    q: "Why use a mixed-unit layout instead of all 10×20 units?",
    a: "Mixed layouts attract a broader tenant base, reduce vacancy, and increase revenue per square foot by offering multiple price points.",
  },
  {
    q: "Are the mini-storage doors included?",
    a: "Yes. Premium roll-up mini-storage doors in 12 color options are included.",
  },
  {
    q: "Can I change the unit mix or add different sizes?",
    a: "This special is pre-engineered with fixed unit sizes. Custom mixes are available through a separate design request.",
  },
  {
    q: "What foundation type is recommended?",
    a: "A level concrete slab is most common. Follow the included foundation guidance and confirm local frost depth and drainage requirements.",
  },
  {
    q: "How long does installation usually take?",
    a: "A 30-unit building can often be erected in one to two weeks, depending on crew size, weather, and site prep.",
  },
];

export default function Special30x150Page() {
  return (
    <SubPageLayout
      title={`"The Beginner" — 30' × 150' Self Storage`}
      subtitle="New to self storage, or just have a good market for the basics? Mixed-unit layout captures a wider tenant base and reduces vacancy risk."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">30&apos; &times; 150&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Units</div>
              <div className="text-2xl font-bold text-roi-navy">30 units</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Roof</div>
              <div className="text-2xl font-bold text-roi-navy">Gable 0.5:12</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</div>
              <div className="text-2xl font-bold text-white">$39,779</div>
            </div>
          </div>

          {/* Unit mix breakdown */}
          <div className="mb-12 bg-roi-light rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-roi-navy mb-4">Unit mix</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-roi-navy">10</div>
                <div className="text-sm text-roi-steel">10&apos;&times;20&apos; units</div>
                <div className="text-xs text-gray-400">Vehicle + large household</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-roi-navy">10</div>
                <div className="text-sm text-roi-steel">10&apos;&times;15&apos; units</div>
                <div className="text-xs text-gray-400">Contractor + mid-size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-roi-navy">10</div>
                <div className="text-sm text-roi-steel">10&apos;&times;10&apos; units</div>
                <div className="text-xs text-gray-400">Everyday residential</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">What&apos;s included</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> All building kit materials: roof, walls, trim, wedge anchors, screws</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 30 units in optimized mixed layout</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 26ga color walls (your choice)</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 26ga Galvalume roof (painted upgrade optional)</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 29ga Galvalume partitions</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Long-life fasteners</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Premium mini storage doors — 12 color choices</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> PE-stamped engineering drawings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Engineering specs</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Wind speed: 115 mph</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Exposure: C</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Roof snow load: 30 lb</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Gable roof with 0.5:12 optimized pitch</li>
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
