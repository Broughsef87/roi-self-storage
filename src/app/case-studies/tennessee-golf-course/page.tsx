import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Gallatin TN Golf Course Storage Case Study | ROI Self Storage",
  description:
    "Tennessee country club golf course replaced deteriorating wooden storage with 28 steel-framed metal storage units. 10×294×8.5 building. Call (865) 316-9009.",
};

const features = [
  { title: "10×294×8.5 Metal Storage Building", desc: "Long, narrow footprint with 0.5/12 optimized roof pitch for drainage." },
  { title: "9 Roll-Up Doors", desc: "Easy access and space-saving operation across all 28 units." },
  { title: "Mono Slab Foundation", desc: "Thickened edges for extra structural integrity and long-term stability." },
  { title: "Drip-X Roof Insulation", desc: "Prevents condensation, protecting golf carts and member equipment from moisture." },
  { title: "Energy-Saving LED Lighting", desc: "Reduces energy usage in storage and maintenance areas." },
  { title: "Weather-Resistant Steel Framing", desc: "Structural integrity in all seasons — wind, snow, heat, humidity." },
];

const galleryImages = ["01", "02", "041", "05", "06", "07", "08", "09", "101", "11", "12"];

export default function GolfCoursePage() {
  return (
    <SubPageLayout
      title="Gallatin, TN — Golf Course Storage"
      subtitle="A Tennessee country club replaced deteriorating wooden storage units with 28 steel-framed metal storage units. The result: a sleek, modern facility that reflects the prestige of the club."
    >
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/case-studies/tennessee-golf/hero.jpg"
              alt="Tennessee golf course storage units in Gallatin"
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
                The Challenge
              </div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
                28 upgraded storage units for a prominent country club
              </h2>
              <p className="text-roi-steel leading-relaxed mb-4">
                Faced with deteriorating wooden storage units that were warped, misaligned, and
                falling apart, a prominent Gallatin, Tennessee country club golf course knew it
                was time for a serious upgrade. The aging structures were no longer suitable
                for securely storing golf carts and member equipment, posing both functional
                and aesthetic issues.
              </p>
              <p className="text-roi-steel leading-relaxed">
                Seeking a long-lasting, low-maintenance alternative, the club turned to ROI
                Metal Buildings to deliver a durable solution that could withstand the elements
                and serve members for years to come.
              </p>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200 h-fit">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Facts
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Location</dt>
                  <dd className="font-semibold text-roi-navy">Gallatin, Tennessee</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Use Case</dt>
                  <dd className="font-semibold text-roi-navy">Golf cart &amp; equipment storage</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Building Size</dt>
                  <dd className="font-semibold text-roi-navy">10&apos; × 294&apos; × 8.5&apos;</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Total Units</dt>
                  <dd className="font-semibold text-roi-navy">28 units</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-xs uppercase tracking-wider">Roof Pitch</dt>
                  <dd className="font-semibold text-roi-navy">0.5/12</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
            Our Custom Build Solution
          </div>
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Built with industry-leading features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-roi-navy mb-2">{f.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">Project gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={`/case-studies/tennessee-golf/${n}.jpg`}
                  alt={`Gallatin TN golf course storage unit image ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-20 bg-roi-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
            Results That Speak Volumes
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            Sleek, modern storage that reflects the prestige of the facility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            The client now has sleek, modern storage units that reflect the prestige of their
            facility. Maintenance headaches are gone, and functionality has improved tenfold.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The upgraded structures offer peace of mind, better aesthetics, and long-term cost
            savings — all thanks to energy efficiency and durable building materials.
          </p>
        </div>
      </section>

      {/* Why metal for golf courses */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-8">
            Why metal buildings for golf courses?
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
              <span className="text-roi-steel leading-relaxed">Withstand extreme temperature fluctuations and moisture</span>
            </li>
            <li className="flex gap-3">
              <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
              <span className="text-roi-steel leading-relaxed">Reduce energy usage with smart lighting and insulation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
              <span className="text-roi-steel leading-relaxed">Stay structurally sound for decades with minimal maintenance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
              <span className="text-roi-steel leading-relaxed">Add value and visual appeal to the grounds</span>
            </li>
            <li className="flex gap-3">
              <span className="text-roi-red shrink-0 mt-1">&#10003;</span>
              <span className="text-roi-steel leading-relaxed">Gradual roof pitch helps drainage and prevents water ingress</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-xl font-bold text-roi-navy mb-6">More case studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/case-studies/securit-storage" className="group p-5 bg-white border border-gray-200 rounded-lg hover:border-roi-red/30 transition-colors">
              <div className="text-xs text-gray-400 mb-1">Anderson, IN</div>
              <div className="font-semibold text-roi-navy group-hover:text-roi-red transition-colors">Securit-Storage 5,500 sq ft &rarr;</div>
            </Link>
            <Link href="/case-studies/uncasville-ct" className="group p-5 bg-white border border-gray-200 rounded-lg hover:border-roi-red/30 transition-colors">
              <div className="text-xs text-gray-400 mb-1">Uncasville, CT</div>
              <div className="font-semibold text-roi-navy group-hover:text-roi-red transition-colors">27,600 sq ft Self Storage &rarr;</div>
            </Link>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
