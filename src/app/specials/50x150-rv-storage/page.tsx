import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "50x150 RV Storage Building | ROI Self Storage",
  description:
    "50' x 150' RV storage building with 16'+ eave heights and extra-wide bays. 7,500 sq ft. Built for Class A motorhomes. Call (865) 316-9009.",
};

export default function Special50x150RVPage() {
  return (
    <SubPageLayout
      title="50&apos; &times; 150&apos; RV Storage Building"
      subtitle="Our largest pre-designed configuration. 7,500 square feet with 16'+ eave heights and wide bays built for Class A motorhomes, fifth wheels, and large trailers."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">50&apos; &times; 150&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Area</div>
              <div className="text-2xl font-bold text-roi-navy">7,500 sq ft</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Eave Height</div>
              <div className="text-2xl font-bold text-roi-navy">16&apos;+</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Building details</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 50&apos; clear span width — room for wide bays and drive aisles</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 150&apos; length for maximum bay count</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 16&apos;+ eave height for Class A motorhomes</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 14\u2019–16\u2019 wide overhead doors</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Drive-through bay option available</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Min. 26ga 80KSI galvanized exterior panels</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> No interior columns — full clear span</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> PE-stamped engineering drawings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Ideal for</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Dedicated RV storage facilities</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Mixed RV/boat storage operations</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Markets near RV dealerships and campgrounds</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> High-demand suburban and rural locations</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Estimated pricing</h2>
              <p className="text-sm text-roi-steel leading-relaxed">
                Building package: <strong>$90,000–$112,500</strong> (at $12–$15/sf)<br />
                Estimated total build: <strong>$191,250–$270,000</strong> (at $25.50–$36/sf)
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
