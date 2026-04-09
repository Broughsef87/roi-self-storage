import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "35x120 Boat Storage Building | ROI Self Storage",
  description:
    "35' x 120' boat storage building with tall eave heights and wide bays. 4,200 sq ft. Pre-engineered for marine storage. Call (865) 316-9009.",
};

export default function Special35x120BoatPage() {
  return (
    <SubPageLayout
      title="35&apos; &times; 120&apos; Boat Storage Building"
      subtitle="Purpose-built for marine storage. Tall eave heights, wide bays, and clear-span construction for easy boat and trailer maneuvering."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">35&apos; &times; 120&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Area</div>
              <div className="text-2xl font-bold text-roi-navy">4,200 sq ft</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Application</div>
              <div className="text-2xl font-bold text-roi-navy">Boat / Marine</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Building details</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 35&apos; clear span width</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 120&apos; length with wide drive-through bays</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 14\u2019–16\u2019+ eave height for tall boats on trailers</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Extra-wide overhead doors (12\u2019–14\u2019+)</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Min. 26ga 80KSI galvanized exterior panels</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> No interior columns — full clear span</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> PE-stamped engineering drawings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Ideal for</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Marinas and lakeside properties</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Coastal and waterway communities</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Mixed boat/RV storage facilities</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Adding marine storage to an existing site</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Estimated pricing</h2>
              <p className="text-sm text-roi-steel leading-relaxed">
                Building package: <strong>$50,400–$63,000</strong> (at $12–$15/sf)<br />
                Estimated total build: <strong>$107,100–$151,200</strong> (at $25.50–$36/sf)
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
