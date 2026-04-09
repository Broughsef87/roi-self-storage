import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "The Basic: 40x100 Self Storage Building | ROI Self Storage",
  description:
    "40x100 self storage building special. 20 units (10x20), 26ga color walls, premium doors. $35,417. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "How many rentable units are included?",
    a: "This model includes 20 individual 10×20 units, each with its own premium mini-storage door.",
  },
  {
    q: "Are the doors included in the base price?",
    a: "Yes. Premium roll-up mini-storage doors are included, available in 12 color options.",
  },
  {
    q: "Can I change the unit mix (e.g., add 5×10 or 10×10 units)?",
    a: "This special is pre-engineered with fixed unit sizes for cost efficiency. Custom mixes are available through a separate design request.",
  },
  {
    q: "Are partitions included between units?",
    a: "Yes. 29-gauge Galvalume partitions are included for clean, durable separation between units.",
  },
  {
    q: "How long does installation typically take?",
    a: "A 20-unit building can often be erected in several days to a couple of weeks, depending on crew size, weather, and site prep.",
  },
  {
    q: "Can I add insulation or climate control?",
    a: "Yes. Insulation and HVAC are optional upgrades. Climate-controlled units require additional interior framing and mechanical planning.",
  },
];

export default function Special40x100Page() {
  return (
    <SubPageLayout
      title={`"The Basic" — 40' × 100' Self Storage`}
      subtitle="Designed for the 10×20 enthusiast. 20 back-to-back units optimized for maximum rentable square footage with minimal wasted space."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">40&apos; &times; 100&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Units</div>
              <div className="text-2xl font-bold text-roi-navy">20 &times; 10&apos;&times;20&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Roof</div>
              <div className="text-2xl font-bold text-roi-navy">Gable 0.5:12</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Price</div>
              <div className="text-2xl font-bold text-white">$35,417</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">What&apos;s included</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> All building kit materials: roof, walls, trim, wedge anchors, screws</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 20 units (10&apos;&times;20&apos;) with back-to-back layout</li>
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
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 40&apos; clear span — no interior columns</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Not included</h2>
              <ul className="space-y-2 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Freight</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Gutters &amp; downspouts</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Taxes</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Moisture barrier</li>
                <li className="flex gap-2"><span className="text-gray-300 shrink-0">&mdash;</span> Door locks</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Pricing is for immediate sale and subject to change based on material availability. Custom loadings and designs available on request.
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
