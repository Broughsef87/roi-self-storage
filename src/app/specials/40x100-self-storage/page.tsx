import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "40x100 Self Storage Building | ROI Self Storage",
  description:
    "40' x 100' pre-engineered self storage building package. 4,000 sq ft, 20-30 units. One of our most popular configurations. Call (865) 316-9009.",
};

export default function Special40x100Page() {
  return (
    <SubPageLayout
      title="40&apos; &times; 100&apos; Self Storage Building"
      subtitle="One of our most popular self storage configurations. 4,000 square feet of rentable space with room for 20-30 units depending on your mix."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Dimensions</div>
              <div className="text-2xl font-bold text-roi-navy">40&apos; &times; 100&apos;</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Area</div>
              <div className="text-2xl font-bold text-roi-navy">4,000 sq ft</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Typical Unit Count</div>
              <div className="text-2xl font-bold text-roi-navy">20–30 units</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Building details</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 40&apos; clear span width — no interior columns</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> 100&apos; length with drive-up access</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Standard 10&apos; eave height (customizable)</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Min. 26ga 80KSI galvanized exterior panels</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Commercial roll-up doors on every unit</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Steel partition walls</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> PE-stamped engineering drawings</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Erection guide and anchor bolt plan</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-roi-navy mb-4">Ideal for</h2>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> First-time self storage operators</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Adding storage to an existing commercial property</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Small-to-mid market facilities</li>
                <li className="flex gap-2"><span className="text-roi-red shrink-0">&#10003;</span> Phase 1 of a multi-building development</li>
              </ul>

              <h2 className="text-2xl font-bold text-roi-navy mb-4 mt-8">Estimated pricing</h2>
              <p className="text-sm text-roi-steel leading-relaxed">
                Building package: <strong>$40,000–$48,000</strong> (at $10–$12/sf)<br />
                Estimated total build: <strong>$94,000–$132,000</strong> (at $23.50–$33/sf)
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
