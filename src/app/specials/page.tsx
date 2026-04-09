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
    name: "40\u2019 \u00d7 100\u2019 Self Storage",
    sqft: "4,000 sq ft",
    desc: "Popular mid-size facility. Great for first-time operators or expanding an existing site.",
    tag: "Best Seller",
  },
  {
    href: "/specials/30x150-self-storage",
    name: "30\u2019 \u00d7 150\u2019 Self Storage",
    sqft: "4,500 sq ft",
    desc: "Narrow-lot friendly. Long building with drive-up access on both sides. Efficient for tight sites.",
    tag: "Narrow Lot",
  },
  {
    href: "/specials/35x120-boat-storage",
    name: "35\u2019 \u00d7 120\u2019 Boat Storage",
    sqft: "4,200 sq ft",
    desc: "Tall eave heights and wide bays designed for boat and marine storage.",
    tag: "Marine",
  },
  {
    href: "/specials/50x150-rv-storage",
    name: "50\u2019 \u00d7 150\u2019 RV Storage",
    sqft: "7,500 sq ft",
    desc: "Extra-wide bays with 16\u2019+ eave heights. Built for Class A motorhomes and large trailers.",
    tag: "Oversized",
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
                  <span className="text-xs text-gray-400">{s.sqft}</span>
                  <span className="text-sm font-semibold text-roi-red group-hover:underline">
                    View details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
