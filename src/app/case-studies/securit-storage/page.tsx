import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Securit-Storage Case Study — Anderson, IN | ROI Self Storage",
  description:
    "5,500 sq ft two-building self storage project in Anderson, Indiana. 47 units, 4-day erection, delivered on time and on budget. Call (865) 316-9009.",
};

const specs = [
  { label: "Project Type", value: "Standard drive-up self storage (new build)" },
  { label: "Total Building Area", value: "5,500 sq ft (two buildings)" },
  { label: "Number of Units", value: "47 total" },
  { label: "Unit Mix", value: "11 × 5×10 • 18 × 10×15 • 9 × 10×10 • 9 × 10×20" },
  { label: "Stories", value: "Single-story" },
  { label: "Delivery Model", value: "Supply + Erect" },
  { label: "Doors", value: "9×7 and 4×7 roll-up" },
  { label: "Building System", value: "26-ga PBR roof & wall panels; drip-stop on roof" },
  { label: "Project Duration", value: "3 months total • 4 days erection" },
];

export default function SecuritStoragePage() {
  return (
    <SubPageLayout
      title="Securit-Storage — Anderson, Indiana"
      subtitle="Two-building self storage development delivering 5,500 sq ft of rentable space across a balanced mix of 5×10, 10×10, 10×15, and 10×20 units. Erected in 4 days."
    >
      {/* Hero image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/case-studies/securit-storage/01.jpg"
              alt="Securit-Storage facility in Anderson, Indiana"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
                Project Summary
              </div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
                On time, on budget, and erected in January cold
              </h2>
              <p className="text-roi-steel leading-relaxed mb-4">
                ROI Metal Buildings designed, built, and supplied the engineered metal building
                systems for Securit-Storage&apos;s two-building development in Anderson, Indiana.
                We coordinated door packages and delivered for a fast, four-day on-site
                installation window to keep the owner&apos;s lease-up schedule on track.
              </p>
              <p className="text-roi-steel leading-relaxed">
                The building specs included 26-gauge PBR roof and wall panels with drip-stop
                moisture barrier on the roof. The optimized unit mix captures multiple price
                points to reduce vacancy risk — a strategy we recommend for first-time and
                growth-stage operators alike.
              </p>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200 h-fit">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Facts
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Location</dt>
                  <dd className="font-semibold text-roi-navy">Anderson, Indiana</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Sales Rep</dt>
                  <dd className="font-semibold text-roi-navy">Dave Maxe</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Owner Contact</dt>
                  <dd className="font-semibold text-roi-navy">Jon Herndon</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Delivered On Budget</dt>
                  <dd className="font-semibold text-roi-navy">Yes</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Delivered On Time</dt>
                  <dd className="font-semibold text-roi-navy">Yes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Project specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {specs.map((s) => (
              <div key={s.label} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-4 border-b border-gray-200">
                <div className="text-sm font-semibold text-roi-navy sm:w-1/3 shrink-0">{s.label}</div>
                <div className="text-sm text-roi-steel">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["01", "02", "03"].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={`/case-studies/securit-storage/${n}.jpg`}
                  alt={`Securit-Storage project image ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-20 bg-roi-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-4">
            Client Testimonial
          </div>
          <blockquote className="text-xl lg:text-2xl text-white leading-relaxed font-medium">
            &ldquo;We had a great experience with ROI in putting up some new storage units.
            The buildings were erected within 3 months from our first conversation. Dave and
            the team were prompt in answering any questions. They also assisted us in finding
            a crew to install who completed the whole install in 4 days during the bitter
            cold of January. We will use them again.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-gray-300">
            — Securit-Storage, Anderson, Indiana
          </p>
        </div>
      </section>

      {/* Other case studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-xl font-bold text-roi-navy mb-6">More case studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/case-studies/uncasville-ct" className="group p-5 border border-gray-200 rounded-lg hover:border-roi-red/30 transition-colors">
              <div className="text-xs text-gray-400 mb-1">Uncasville, CT</div>
              <div className="font-semibold text-roi-navy group-hover:text-roi-red transition-colors">27,600 sq ft Self Storage &rarr;</div>
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
