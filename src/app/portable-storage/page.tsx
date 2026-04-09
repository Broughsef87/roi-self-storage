import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Portable Self Storage Containers | ROI Self Storage",
  description:
    "Pre-constructed portable self storage containers. Relocatable, quick to deploy, no foundation required. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What sizes of portable storage containers are available?",
    a: "Standard sizes include 8\u2019\u00d710\u2019, 8\u2019\u00d720\u2019, and 8\u2019\u00d740\u2019. Custom dimensions are available depending on your needs and transport requirements.",
  },
  {
    q: "Do portable containers require a foundation?",
    a: "No. Portable storage containers can be placed on compacted gravel, asphalt, or concrete. No permanent foundation is required, which makes them ideal for temporary or quick-start storage operations.",
  },
  {
    q: "Can I relocate the containers later?",
    a: "Yes. That\u2019s the primary advantage. Portable containers can be picked up and moved to a new site as your business needs change. They\u2019re delivered by truck and can be repositioned with standard equipment.",
  },
  {
    q: "Are portable containers suitable for permanent storage facilities?",
    a: "They can serve as a permanent solution for smaller operations or as a bridge while a permanent facility is being built. Some operators use them to test a market before committing to a full build.",
  },
  {
    q: "How quickly can I get portable containers deployed?",
    a: "Portable containers have the fastest deployment time of any storage option. Delivery and placement can happen within days of order, depending on availability and your site readiness.",
  },
];

export default function PortableStoragePage() {
  return (
    <SubPageLayout
      title="Portable Self Storage Containers"
      subtitle="Pre-constructed, relocatable storage containers. No foundation required. The fastest path from order to revenue in the storage industry."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Storage you can move
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Portable self storage containers are pre-constructed units that arrive ready
                to rent. No foundation, no erection crew, no months of construction. Place
                them on any level surface and start generating revenue immediately.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Ideal for testing a new market, supplementing an existing facility during
                peak demand, or operating on leased land where permanent construction isn&apos;t
                practical.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Rapid deployment, zero foundation cost
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Skip the site work. Portable containers sit on compacted gravel, asphalt,
                or existing concrete. They can be delivered, placed, and rented within days —
                not months.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                If your business outgrows a location or you find a better site, pick them up
                and move them. The flexibility to relocate your inventory is a powerful
                advantage that permanent buildings can&apos;t offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Portable storage FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
