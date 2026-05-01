import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Uncasville, CT Case Study — 27,600 sq ft | ROI Self Storage",
  description:
    "27,600 sq ft three-building self storage project in Uncasville, Connecticut. 159 units, standing seam roofing, factory-applied moisture barriers. Call (865) 316-9009.",
};

const buildings = [
  { type: "Gable", dims: "30 × 280 × 9.5", pitch: "0.25", roof: "Standing seam", doors: "9 × 8 roll-up" },
  { type: "Single Slope", dims: "30 × 350 × 9.5", pitch: "0.25", roof: "Standing seam", doors: "9 × 8 roll-up" },
  { type: "Gable", dims: "30 × 290 × 9.5", pitch: "0.25", roof: "Standing seam", doors: "9 × 8 roll-up" },
];

const features = [
  "Factory-applied moisture barrier on all buildings — improved interior protection, reduced on-site labor",
  "Standing seam roofing for enhanced weather resistance and a clean, modern appearance",
  "9 × 8 roll-up doors on each unit bank for standard self storage access",
  "Consistent 0.25 pitch across all buildings for simplified drainage and uniform aesthetics",
  "Complete metal building packages including structural components and accessories",
  "Experienced erector provided by ROI for on-site assembly and proper fit-up",
];

export default function UncasvillePage() {
  return (
    <SubPageLayout
      title="Uncasville, CT — 27,600 sq ft Self Storage"
      subtitle="Three-building turnkey self storage installation delivering 27,600 sq ft of secure, low-maintenance storage space across 159 units."
    >
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/case-studies/uncasville-ct/01.jpg"
              alt="Uncasville Connecticut self storage project"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
                Project Summary
              </div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
                A turnkey installation built for long-term performance
              </h2>
              <p className="text-roi-steel leading-relaxed mb-4">
                ROI Metal Buildings supplied engineered metal building systems, factory-applied
                moisture barriers, premium standing seam roofing, and on-site erection support
                to accelerate the schedule and ensure long-term performance.
              </p>
              <p className="text-roi-steel leading-relaxed">
                The combination of factory-applied barriers, standing seam roofing, and
                professional erection maximized uptime and minimized future maintenance costs.
                The owner received a durable, low-maintenance facility with fast installation
                and long-term protection against moisture and weather.
              </p>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200 h-fit">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Facts
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Location</dt>
                  <dd className="font-semibold text-roi-navy">Uncasville, Connecticut</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Total Size</dt>
                  <dd className="font-semibold text-roi-navy">27,600 sq ft</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Total Units</dt>
                  <dd className="font-semibold text-roi-navy">159 units</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Buildings</dt>
                  <dd className="font-semibold text-roi-navy">3 (2 Gable, 1 Single Slope)</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Project Manager</dt>
                  <dd className="font-semibold text-roi-navy">Lisa Wirth</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Building specs table */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Building specifications
          </h2>
          <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-roi-navy text-white">
                  <th className="text-left font-semibold px-5 py-4">Building Type</th>
                  <th className="text-left font-semibold px-5 py-4">Dimensions (ft)</th>
                  <th className="text-center font-semibold px-5 py-4">Roof Pitch</th>
                  <th className="text-left font-semibold px-5 py-4">Roof Type</th>
                  <th className="text-left font-semibold px-5 py-4">Doors</th>
                </tr>
              </thead>
              <tbody>
                {buildings.map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-roi-navy">{b.type}</td>
                    <td className="px-5 py-4 text-roi-steel">{b.dims}</td>
                    <td className="px-5 py-4 text-center text-roi-steel">{b.pitch}</td>
                    <td className="px-5 py-4 text-roi-steel">{b.roof}</td>
                    <td className="px-5 py-4 text-roi-steel">{b.doors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {buildings.map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="font-bold text-roi-navy mb-2">{b.type} — {b.dims}</div>
                <div className="text-sm text-roi-steel space-y-1">
                  <div>Pitch: {b.pitch}</div>
                  <div>Roof: {b.roof}</div>
                  <div>Doors: {b.doors}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Key features &amp; inclusions
          </h2>
          <ul className="space-y-4 max-w-3xl">
            {features.map((f, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
                <span className="text-roi-steel leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["01", "02", "03"].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={`/case-studies/uncasville-ct/${n}.jpg`}
                  alt={`Uncasville CT project image ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-xl font-bold text-roi-navy mb-6">More case studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/case-studies/securit-storage" className="group p-5 border border-gray-200 rounded-lg hover:border-roi-red/30 transition-colors">
              <div className="text-xs text-gray-400 mb-1">Anderson, IN</div>
              <div className="font-semibold text-roi-navy group-hover:text-roi-red transition-colors">Securit-Storage 5,500 sq ft &rarr;</div>
            </Link>
            <Link href="/case-studies/tennessee-golf-course" className="group p-5 border border-gray-200 rounded-lg hover:border-roi-red/30 transition-colors">
              <div className="text-xs text-gray-400 mb-1">Gallatin, TN</div>
              <div className="font-semibold text-roi-navy group-hover:text-roi-red transition-colors">Golf Course Storage &rarr;</div>
            </Link>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
