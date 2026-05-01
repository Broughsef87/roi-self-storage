import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Case Studies | ROI Self Storage",
  description:
    "Real self storage projects delivered by ROI. From 5,500 sq ft drive-up facilities to 27,600 sq ft multi-building installations. Call (865) 316-9009.",
};

const studies = [
  {
    href: "/case-studies/uncasville-ct",
    name: "Uncasville, CT — 27,600 sq ft Self Storage",
    location: "Uncasville, Connecticut",
    size: "27,600 sq ft • 159 units",
    image: "/case-studies/uncasville-ct/01.jpg",
    desc: "Three-building turnkey self storage installation with standing seam roofing and factory-applied moisture barriers. Project managed by Lisa Wirth.",
    tag: "Largest Build",
  },
  {
    href: "/case-studies/securit-storage",
    name: "Securit-Storage — Anderson, IN",
    location: "Anderson, Indiana",
    size: "5,500 sq ft • 47 units",
    image: "/case-studies/securit-storage/01.jpg",
    desc: "Two-building drive-up facility with mixed unit sizes. 4-day on-site erection in January cold. Sales rep: Dave Maxe.",
    tag: "Fast Erection",
  },
  {
    href: "/case-studies/tennessee-golf-course",
    name: "Gallatin, TN — Golf Course Storage",
    location: "Gallatin, Tennessee",
    size: "10' × 294' × 8.5' • 28 units",
    image: "/case-studies/tennessee-golf/hero.jpg",
    desc: "Country club golf course replaced deteriorating wooden storage with 28 steel-framed units. Drip-X roof insulation, LED lighting, mono slab foundation.",
    tag: "Specialty Use",
  },
];

export default function CaseStudiesPage() {
  return (
    <SubPageLayout
      title="Case Studies"
      subtitle="Real projects, real results. From small drive-up facilities to multi-building complexes — see what ROI has delivered for self storage operators across the country."
    >
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {studies.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-200 rounded-lg overflow-hidden hover:border-roi-red/30 hover:shadow-lg transition-all"
              >
                <div className="lg:col-span-2 relative h-64 lg:h-auto bg-gray-100">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-roi-red bg-roi-red/8 px-2.5 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                    <span className="text-xs text-gray-400">{s.location}</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-roi-navy group-hover:text-roi-red transition-colors mb-2">
                    {s.name}
                  </h2>
                  <p className="text-sm text-roi-steel leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-roi-navy">{s.size}</span>
                    <span className="text-sm font-semibold text-roi-red group-hover:underline">
                      View project &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}
