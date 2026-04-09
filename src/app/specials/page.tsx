import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Self Storage Specials | ROI Self Storage",
  description:
    "Pre-designed self storage building packages at competitive prices. 40x100, 30x150, 35x120 boat, and 50x150 RV configurations. Call (865) 316-9009.",
};

const specials = [
  {
    href: "/specials/40x100-self-storage",
    name: "\"The Basic\" \u2014 40\u2032\u00d7100\u2032",
    sqft: "20 units (10\u00d720) \u2022 4,000 sq ft",
    price: "$35,417",
    desc: "Designed for the 10\u00d720 enthusiast. Back-to-back 10\u00d720 units. Ideal when you know the 10\u00d720 is your go-to for ROI.",
    tag: "Going Fast",
  },
  {
    href: "/specials/30x150-self-storage",
    name: "\"The Beginner\" \u2014 30\u2032\u00d7150\u2032",
    sqft: "30 units (mixed) \u2022 4,500 sq ft",
    price: "$39,779",
    desc: "Mixed unit layout: 10\u00d720, 10\u00d715, and 10\u00d710 units. Great for testing which unit mixes bring the most ROI.",
    tag: "Limited Inventory",
  },
  {
    href: "/specials/35x120-boat-storage",
    name: "\"The Small Boat\" \u2014 35\u2032\u00d7120\u2032\u00d712\u2032",
    sqft: "12\u00d735 bays \u2022 4,200 sq ft",
    price: "$32,800",
    desc: "10\u00d710 doors with extra 3.5\u2032 of height for larger boats and toys. Single slope roof, optimized for marine storage.",
    tag: "Won\u2019t Last Long",
  },
  {
    href: "/specials/50x150-rv-storage",
    name: "\"The RV Starter\" \u2014 50\u2032\u00d7150\u2032\u00d716\u2032",
    sqft: "10 units (15\u00d750) \u2022 7,500 sq ft",
    price: "$66,937",
    desc: "12\u00d714 Janus Model 1000 doors. Fits Class A motorhomes, fifth wheels, and travel trailers.",
    tag: "Low Stock",
  },
];

export default function SpecialsPage() {
  return (
    <SubPageLayout
      title="Self Storage Specials"
      subtitle="Pre-designed building packages at competitive prices. These are our most requested configurations — engineered, priced, and ready to customize for your site."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specials.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-gray-200 rounded-lg p-8 hover:border-roi-red/30 hover:bg-roi-light/50 transition-all block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-bold text-roi-navy group-hover:text-roi-red transition-colors">
                    {s.name}
                  </h2>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-roi-red bg-roi-red/8 px-2.5 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <p className="text-sm text-roi-steel leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">{s.sqft}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-roi-navy">{s.price}</div>
                    <span className="text-sm font-semibold text-roi-red group-hover:underline">
                      View details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Shared specs */}
          <div className="mt-10 bg-roi-light rounded-lg p-6 text-xs text-roi-steel leading-relaxed space-y-1.5">
            <p><strong className="text-roi-navy">All specials include:</strong> 26ga color walls, 26ga Galvalume roof (painted upgrade optional), long-life fasteners, 29ga Galvalume partitions, premium mini storage doors (12 color choices), PE-stamped engineering.</p>
            <p><strong className="text-roi-navy">Not included:</strong> Freight, gutters &amp; downspouts, taxes, moisture barrier, door locks.</p>
            <p><strong className="text-roi-navy">Wind:</strong> 115 mph &bull; <strong className="text-roi-navy">Exposure:</strong> C &bull; <strong className="text-roi-navy">Snow Load:</strong> 30 lb roof</p>
            <p>All specials are priced for immediate sale. Pricing subject to change based on material availability. Installation available in over 25 states.</p>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
