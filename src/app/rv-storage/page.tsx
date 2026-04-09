import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "RV Storage Buildings | ROI Self Storage",
  description:
    "Metal RV storage buildings with 16'+ eave heights and wide drive-through bays. $12-$15/sq ft. Covered and enclosed options. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What eave height do I need for RV storage?",
    a: "Most Class A motorhomes need 14\u2019-16\u2019 of clearance. We recommend 16\u2019+ eave heights to comfortably accommodate the tallest units with AC units and antennas. We\u2019ll engineer the exact height for your target market.",
  },
  {
    q: "What\u2019s the ideal bay width for RV storage?",
    a: "Standard bays run 12\u2019-15\u2019 wide for individual units. Drive-through configurations with 14\u2019+ wide bays are popular because they eliminate the need for tenants to back in large vehicles.",
  },
  {
    q: "Is covered or enclosed better for RV storage?",
    a: "Both work. Enclosed buildings with individual doors offer the most protection and highest rents. Covered canopy-style structures cost less to build and are easier to fill. Many operators offer both tiers on the same site.",
  },
  {
    q: "Can I mix RV bays with standard storage units?",
    a: "Yes. Most successful facilities combine RV/boat bays with traditional self storage. Different building types serve different markets and create multiple revenue streams on a single site.",
  },
  {
    q: "Do you build drive-through RV storage?",
    a: "Yes. Drive-through configurations with doors on both ends are a popular option for RV and boat storage. Tenants can pull straight through without backing in, which is a significant selling point.",
  },
];

export default function RVStoragePage() {
  return (
    <SubPageLayout
      title="RV Storage Buildings"
      subtitle="Extra-tall, extra-wide metal buildings engineered for Class A motorhomes, fifth wheels, travel trailers, and toy haulers. A high-demand, high-margin storage niche."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                The RV market is booming
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                RV ownership has surged and most homeowners don&apos;t have space to store a 30-40 foot
                vehicle at home. HOA restrictions, city ordinances, and simple space constraints
                drive RV owners to commercial storage in growing numbers.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Our RV storage buildings feature tall eave heights (16&apos;+), wide bays, and
                optional drive-through configurations that make it easy for tenants to store
                and retrieve large vehicles.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Engineered for large vehicles
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Clear-span steel construction eliminates interior columns, giving tenants maximum
                maneuvering room. Heavy-duty concrete floors, wide drive aisles, and
                oversized doors are all standard in our RV storage designs.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Every building is custom engineered to your lot size, target vehicle types,
                and revenue goals. We&apos;ll help you find the right mix of bay sizes and
                configurations to maximize occupancy and income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            RV storage pricing
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
            RV storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
