import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "30x150 Self Storage Building | ROI Self Storage",
  description:
    "30' x 150' pre-engineered self storage building. 4,500 sq ft narrow-lot design with back-to-back units. Call (865) 316-9009.",
};

export default function Special30x150Page() {
  return (
    <SubPageLayout
      title="30&apos; &times; 150&apos; Self Storage Building"
      subtitle="A narrow-lot configuration that maximizes unit count on tight sites. 4,500 square feet with back-to-back units and drive-up access on both sides."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">30&apos; &times; 150&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Area</div>
              <div className="text-2xl font-bold text-roi-navy">4,500 sq ft</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Layout</div>
              <div className="text-2xl font-bold text-roi-navy">Back-to-back</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Building details</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 30&apos; width — fits narrow lots and setback requirements</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 150&apos; length with units on both sides</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Back-to-back unit configuration maximizes density</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Drive-up access on both long sides</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Min. 26ga 80KSI galvanized exterior panels</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Commercial roll-up doors on every unit</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> PE-stamped engineering drawings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Ideal for</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Narrow or irregularly shaped lots</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Sites with tight setback requirements</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Multi-building facility layouts</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Maximizing unit count per linear foot</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Estimated pricing</h2>
              <p className="text-sm text-roi-steel leading-relaxed">
                Building package: <strong>$45,000–$54,000</strong> (at $10–$12/sf)<br />
                Estimated total build: <strong>$105,750–$148,500</strong> (at $23.50–$33/sf)
              </p>
              <p className="text-xs text-gray-400 mt-2">
                National averages. Actual costs vary by location. Request a quote for accurate pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
