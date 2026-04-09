import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Mini Storage Buildings | ROI Self Storage",
  description:
    "Pre-engineered mini storage buildings from ROI. Standard drive-up units starting at $10-$12/sq ft. Custom sizes, nationwide delivery. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What is the most common mini storage building size?",
    a: "The most popular configurations are 30\u2019\u00d7150\u2019 and 40\u2019\u00d7100\u2019. These sizes balance unit count with cost efficiency and fit most standard lot configurations.",
  },
  {
    q: "How many units can I fit in a mini storage building?",
    a: "It depends on your unit mix. A 40\u2019\u00d7100\u2019 building typically holds 20-30 units with a standard mix of 5\u00d710, 10\u00d710, and 10\u00d720 sizes. We\u2019ll help you optimize the layout for your market.",
  },
  {
    q: "What unit sizes should I offer?",
    a: "The most in-demand sizes are 5\u00d710, 10\u00d710, 10\u00d715, and 10\u00d720. Your ideal mix depends on your local market. We recommend a blend of small and mid-size units to maximize occupancy and revenue per square foot.",
  },
  {
    q: "Do mini storage buildings come with roll-up doors?",
    a: "Yes. Standard configurations include commercial-grade roll-up doors on every unit. We offer multiple door sizes and styles to match your unit mix and operational needs.",
  },
  {
    q: "Can I expand a mini storage facility later?",
    a: "Absolutely. We engineer buildings with future expansion in mind. Additional buildings can tie into your existing facility seamlessly, letting you grow as demand increases.",
  },
  {
    q: "How long does it take to get a mini storage building operational?",
    a: "Building packages ship in 8-14 weeks. With site prep running in parallel, most facilities are operational within 4-6 months of placing the order.",
  },
];

export default function MiniStoragePage() {
  return (
    <SubPageLayout
      title="Mini Storage Buildings"
      subtitle="The most popular self storage format in the industry. Simple drive-up access, roll-up doors, and low operating costs. Engineered for first-time and experienced operators alike."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Built for predictable occupancy and smooth operations
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Mini storage buildings are the backbone of the self storage industry. Single-story,
                drive-up access with individual roll-up doors on every unit. No elevators, no hallways,
                no common areas to maintain. Tenants drive up, open their unit, and go.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Every detail — from hallway layout to door spacing — influences how efficiently
                your facility runs. Our buildings are designed for fast move-ins, fast turnovers,
                and minimal downtime between tenants.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                A structure that protects your revenue
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Steel buildings resist moisture, pests, and weather shifts — reducing maintenance
                calls and keeping your rentable square footage performing year-round. Fire-resistant
                construction with minimum 26ga 80KSI exterior panels and 40-year paint warranties.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Building orientation, sun exposure, wind direction, and driveway alignment all
                influence tenant satisfaction and traffic flow. We engineer every facility with
                these operational details in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            What&apos;s included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pre-Engineered Steel Frame", desc: "Red iron structural framing custom designed for your site\u2019s wind, snow, and seismic loads." },
              { title: "Min. 26ga 80KSI Exterior Panels", desc: "Commercial-grade galvanized steel wall and roof panels with 40-year paint warranties." },
              { title: "Commercial Roll-Up Doors", desc: "Individual roll-up doors on every unit. Standard and custom sizes available." },
              { title: "Interior Partition Walls", desc: "Steel partitions to divide the building into individual rental units. Single or double-sided options." },
              { title: "Stamped Engineering", desc: "PE-stamped drawings for your permit application. Engineered to local building codes." },
              { title: "Erection Guide", desc: "Detailed assembly instructions and anchor bolt plans for your erection crew or general contractor." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-roi-navy mb-2">{f.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Band */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            Mini storage pricing
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-2xl mb-10">
            Building package pricing for standard mini storage starts at $10–$12 per square foot.
            Estimated total build cost including erection and concrete runs $23.50–$33.00/sf
            (national average ~$28.25/sf).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Building Package</div>
              <div className="text-2xl font-bold text-roi-navy">$10–$12/sf</div>
            </div>
            <div className="bg-roi-light rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">+ Erection &amp; Concrete</div>
              <div className="text-2xl font-bold text-roi-navy">$13.50–$21/sf</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Est. Total Build</div>
              <div className="text-2xl font-bold text-white">$23.50–$33/sf</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Estimates include building package + steel erection + concrete/site work (national averages).
            Does not include land, permits, utilities, or other soft costs. ROI does not perform concrete
            services. Actual costs vary by location, zoning, wind and snow loads.
          </p>
        </div>
      </section>

      {/* Upgrades */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            Available upgrades
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-2xl mb-8">
            Every building can be customized to match your market, climate, and operational strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Standing seam roofing",
              "Moisture barriers",
              "Insulated metal panels",
              "Double-sided partitions",
              "Climate control prep",
              "Gutters & downspouts",
              "Canopy / awning extensions",
              "Custom color matching",
            ].map((u) => (
              <div key={u} className="flex items-center gap-2.5 bg-white rounded-md border border-gray-200 px-4 py-3">
                <span className="text-roi-red shrink-0">&#10003;</span>
                <span className="text-sm text-roi-navy font-medium">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Mini storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
