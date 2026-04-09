import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Boat Storage Buildings | ROI Self Storage",
  description:
    "Metal boat storage buildings with tall eave heights and extra-wide doors. $12-$15/sq ft building packages. Covered and enclosed options. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What eave heights do you offer for boat storage?",
    a: "Standard boat storage eave heights range from 14\u2019 to 20\u2019+. We\u2019ll engineer the height based on the types of boats you expect to store — pontoons, center consoles, sailboats, or large cruisers all have different clearance needs.",
  },
  {
    q: "What door sizes are available for boat storage?",
    a: "We offer door widths from 10\u2019 to 24\u2019+ and heights to match your eave. Overhead doors and bi-fold doors are both available depending on your bay configuration and budget.",
  },
  {
    q: "Should I offer covered or fully enclosed boat storage?",
    a: "It depends on your market. Fully enclosed bays command higher rents and offer better protection. Covered-only (roof with open sides) is cheaper to build and works well in mild climates. Many operators offer both tiers.",
  },
  {
    q: "How many bays can I fit in a boat storage building?",
    a: "A 50\u2019\u00d7150\u2019 building typically accommodates 10-15 bays depending on door width and drive aisle layout. We\u2019ll optimize the layout for your target boat sizes and maximize revenue per square foot.",
  },
  {
    q: "Can I combine boat storage with standard self storage in one facility?",
    a: "Absolutely. Many operators build a mix of boat/RV bays and standard storage units on the same site. Different building configurations serve different markets and diversify your revenue.",
  },
];

export default function BoatStoragePage() {
  return (
    <SubPageLayout
      title="Boat Storage Buildings"
      subtitle="Tall clear-span structures with extra-wide doors and high eave heights. Protect your customers' boats from weather, UV damage, and theft while generating premium rental income."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                High-margin storage for a growing market
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Boat storage is one of the highest-margin segments in the storage industry.
                Boat owners need covered or enclosed protection year-round and are willing to
                pay premium rates for secure, easy-access facilities.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Our boat storage buildings feature tall eave heights, extra-wide drive-through
                bays, and clear-span construction that eliminates interior columns — maximizing
                usable space and making maneuvering trailers easy for tenants.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Covered or fully enclosed
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Choose the configuration that fits your market. Fully enclosed bays with
                individual overhead doors offer maximum protection and the highest rents.
                Open-sided canopy structures provide economical UV and weather coverage at
                a lower build cost.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Both options are engineered to handle the wide bays and tall clearances that
                boat storage requires — from 20-foot pontoons to 40-foot cabin cruisers on trailers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            Boat storage pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Building Package</div>
              <div className="text-2xl font-bold text-roi-navy">$12–$15/sf</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">+ Erection &amp; Concrete</div>
              <div className="text-2xl font-bold text-roi-navy">$13.50–$21/sf</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Est. Total Build</div>
              <div className="text-2xl font-bold text-white">$25.50–$36/sf</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Estimates include building package + steel erection + concrete/site work (national averages).
            Does not include land, permits, utilities, or other soft costs. Actual costs vary by location.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Boat storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
