import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Climate Controlled Storage Buildings | ROI Self Storage",
  description:
    "Insulated, HVAC-ready climate controlled self storage buildings. $17-$20/sq ft building packages. Premium rents, premium returns. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "How much more can I charge for climate controlled units?",
    a: "Climate controlled units typically command 25-50% higher rents than standard drive-up storage. In strong markets, the premium can be even higher, making the added building cost a strong ROI play.",
  },
  {
    q: "What insulation options are available?",
    a: "We offer insulated metal panels (IMPs), fiberglass batt insulation, and spray foam options. IMPs provide the best thermal performance and cleanest interior finish. We\u2019ll recommend the right option for your climate zone and budget.",
  },
  {
    q: "Can I design buildings that support both climate and standard units on the same site?",
    a: "Yes. Separate building envelopes, insulated corridors, and zoned mechanical systems make mixed-environment facilities easy to manage. Many operators run climate controlled interior units alongside standard drive-up buildings.",
  },
  {
    q: "What R-value do your climate controlled buildings achieve?",
    a: "Depending on the insulation system, our buildings achieve R-25 to R-40 thermal performance. Higher R-values reduce HVAC operating costs and improve tenant comfort year-round.",
  },
  {
    q: "Do you install the HVAC system?",
    a: "We supply the building engineered and prepped for HVAC installation — penetrations, curbs, and structural support are included in the design. Your mechanical contractor handles the HVAC installation.",
  },
  {
    q: "How do I reduce moisture complaints in climate controlled units?",
    a: "Proper vapor barriers, roof pitch, ventilation design, and dehumidification planning are all engineered into our climate controlled buildings. We design for dry, stable interior conditions from day one.",
  },
];

export default function ClimateControlledPage() {
  return (
    <SubPageLayout
      title="Climate Controlled Storage Buildings"
      subtitle="Insulated, HVAC-equipped self storage buildings that command 25-50% premium rents. The highest revenue-per-square-foot option in the self storage market."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Premium product, premium returns
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Climate controlled storage is the fastest-growing segment of the self storage industry.
                Temperature and humidity-regulated units protect sensitive items — electronics, furniture,
                documents, wine, pharmaceuticals — and tenants pay a significant premium for the peace of mind.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Our climate controlled buildings are fully insulated with energy-efficient building envelopes
                designed for your specific climate zone. HVAC-ready engineering means your mechanical
                contractor can install systems without structural modifications.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Sustainability built in
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Our buildings incorporate energy-saving features including high-performance insulation
                (R-25 to R-40), natural lighting options, and efficient ventilation design.
                Lower energy costs mean better operating margins and a more sustainable facility.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Recyclable steel construction, strategic window placement, and efficient mechanical
                design minimize your carbon footprint while maximizing thermal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            Climate controlled pricing
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-2xl mb-10">
            Higher upfront cost, significantly higher rental income. Climate controlled
            is the strongest ROI play in self storage for the right market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Building Package</div>
              <div className="text-2xl font-bold text-roi-navy">$17–$20/sf</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">+ Erection &amp; Concrete</div>
              <div className="text-2xl font-bold text-roi-navy">$13.50–$21/sf</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Est. Total Build</div>
              <div className="text-2xl font-bold text-white">$30.50–$41/sf</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Does not include HVAC system, land, permits, utilities, or other soft costs.
            ROI does not perform concrete services. Actual costs vary by location and climate zone.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            What makes our climate controlled buildings different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Insulated Building Envelope", desc: "Full insulation system — walls, roof, and floors. Multiple insulation types available to match your climate and budget." },
              { title: "HVAC-Ready Engineering", desc: "Mechanical penetrations, equipment curbs, and structural support designed in from the start. No retrofitting needed." },
              { title: "Vapor & Moisture Control", desc: "Integrated vapor barriers and ventilation design to prevent condensation and maintain stable interior humidity." },
              { title: "Interior Hallway Systems", desc: "Conditioned corridors with interior-access units. Clean, well-lit spaces that justify premium rents." },
              { title: "Energy Efficient Design", desc: "R-25 to R-40 thermal performance reduces HVAC operating costs and improves margins on every unit." },
              { title: "Customizable Layout", desc: "From unit mix to door configurations, insulation type, and more — every aspect is customized to your market." },
            ].map((f) => (
              <div key={f.title} className="bg-roi-light rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-roi-navy mb-2">{f.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Climate controlled storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
