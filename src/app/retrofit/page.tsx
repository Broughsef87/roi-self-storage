import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Retrofit & Conversion Storage Buildings | ROI Self Storage",
  description:
    "Convert existing buildings into self storage at $7-$10/sq ft. The most cost-effective path to a storage facility. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What types of buildings can be converted to self storage?",
    a: "Warehouses, retail spaces, manufacturing buildings, barns, and other large-footprint structures are all candidates. The key factors are clear height, column spacing, floor condition, and roof integrity. We\u2019ll assess your structure and tell you what\u2019s feasible.",
  },
  {
    q: "How much does a retrofit cost compared to new construction?",
    a: "Retrofit building packages start at $7-$10 per square foot — roughly 30-50% less than new construction. Total costs depend on the condition of your existing structure and how much modification is needed.",
  },
  {
    q: "Can I add climate control to a retrofit?",
    a: "Yes. Existing buildings can be insulated and fitted for HVAC. The cost depends on the current insulation level and building envelope condition. In many cases, the existing shell provides a head start on thermal performance.",
  },
  {
    q: "Do I need a new foundation for a retrofit?",
    a: "Usually not. Most retrofits work with the existing slab and foundation. We\u2019ll evaluate the floor condition and load-bearing capacity as part of the design process.",
  },
  {
    q: "How long does a retrofit project take?",
    a: "Retrofit timelines are typically shorter than new construction since the shell is already standing. Building package lead time is 8-14 weeks, and interior buildout can often be completed faster than ground-up projects.",
  },
  {
    q: "Will the converted building meet current building codes?",
    a: "We engineer all retrofit packages to meet current local codes. Change-of-use permits may require additional upgrades (fire suppression, ADA access, etc.) depending on your jurisdiction.",
  },
];

export default function RetrofitPage() {
  return (
    <SubPageLayout
      title="Retrofit &amp; Conversion Storage Buildings"
      subtitle="Convert existing structures into profitable self storage facilities. The lowest cost per square foot entry point in the industry — ideal for owners with an existing building or shell."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Turn an existing structure into revenue
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Got a warehouse, retail building, or industrial space that&apos;s underperforming?
                Self storage conversion is one of the fastest-growing trends in the industry.
                Lower build costs, shorter timelines, and existing infrastructure give retrofit
                projects a significant advantage over ground-up construction.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Our retrofit packages include interior partition walls, roll-up doors, hallway
                systems, and all the components needed to transform your existing building into
                a fully functional self storage facility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Best value in self storage
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                At $7–$10 per square foot for the building package, retrofits are the most
                cost-effective way to enter the self storage market. When the shell, foundation,
                and roof are already in place, you&apos;re cutting out the most expensive components
                of a new build.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                We&apos;ll evaluate your existing structure, design a unit layout that maximizes
                revenue, and deliver a complete building package engineered to fit your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            Retrofit pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Building Package</div>
              <div className="text-2xl font-bold text-roi-navy">$7–$10/sf</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">+ Erection</div>
              <div className="text-2xl font-bold text-roi-navy">$3.50–$6/sf</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Est. Total</div>
              <div className="text-2xl font-bold text-white">$10.50–$16+/sf</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Concrete/site work varies for retrofits since the existing slab is typically reused.
            Total costs depend on existing structure condition. Does not include permits, HVAC, or other soft costs.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Retrofit storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
