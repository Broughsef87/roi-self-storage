import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Self Storage Doors | ROI Self Storage",
  description:
    "Commercial-grade self storage roll-up doors in all standard sizes. Sheet doors, roll-up doors, and swing doors for every storage application. Call (865) 316-9009.",
};

const faqs = [
  {
    q: "What types of storage doors do you offer?",
    a: "We supply commercial-grade roll-up doors (the industry standard), sheet curtain doors, swing doors, and overhead sectional doors. The right choice depends on your unit size, access needs, and budget.",
  },
  {
    q: "What are the standard self storage door sizes?",
    a: "Common widths are 3\u2019, 4\u2019, 5\u2019, 6\u2019, 8\u2019, 10\u2019, and 12\u2019. Standard heights are 7\u2019 to 8\u2019 for standard units and 10\u2019 to 14\u2019+ for vehicle/boat/RV storage. Custom sizes are available.",
  },
  {
    q: "What\u2019s the difference between roll-up and sheet doors?",
    a: "Roll-up doors coil into a drum above the opening and are the most common for self storage. Sheet curtain doors use corrugated steel panels and roll up similarly but are typically more economical. Both are commercial-grade and built for daily use.",
  },
  {
    q: "Do doors come with locks?",
    a: "Doors include the patented S2F Latch system which supports dual padlocks for added security. Cylinder lock options and smart lock integrations are available as upgrades for facilities that want centralized access control.",
  },
  {
    q: "Can I order replacement doors for an existing facility?",
    a: "Yes. We supply replacement doors in all standard sizes to fit existing frames. If you\u2019re upgrading or replacing worn doors on an existing facility, we can match your current configuration.",
  },
  {
    q: "Are insulated doors available?",
    a: "Yes. Insulated door options are available for climate controlled units. They help maintain temperature consistency and reduce energy costs in heated/cooled buildings.",
  },
];

export default function StorageDoorsPage() {
  return (
    <SubPageLayout
      title="Self Storage Doors"
      subtitle="Commercial-grade roll-up doors, sheet doors, and specialty doors for every self storage application. The door is the most-used component in your building — we don't cut corners."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Doors built for thousands of cycles
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Self storage doors get opened and closed thousands of times over the life of
                a facility. Every door we supply is commercial-grade, built for daily tenant
                use, and backed by manufacturer warranties.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                From standard 4&apos;×7&apos; unit doors to oversized 14&apos;×16&apos; vehicle bays,
                we supply the right door for every unit type in your facility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-roi-navy tracking-tight">
                Every size, every application
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Standard self storage units, climate controlled hallway units, drive-up bays,
                boat storage, RV storage — each application has specific door requirements.
                We supply doors matched to your unit mix and building design.
              </p>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Doors are included in every new building package. We also supply standalone
                door orders for retrofits, expansions, and replacement projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Door types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roll-Up Doors", desc: "The industry standard. Open drum concept with worm screw tensioning for simplified maintenance. Available in all standard widths and heights. 2–3 week lead times." },
              { title: "Sheet Curtain Doors", desc: "Corrugated steel panel doors. Economical option for large facilities. Durable, easy to maintain, and available in custom colors." },
              { title: "Swing Doors", desc: "Hinged doors for units where roll-up isn\u2019t practical. Common for hallway-access climate controlled units and specialty applications." },
              { title: "Overhead Sectional Doors", desc: "Paneled doors that rise on tracks. Ideal for vehicle storage with wide, tall openings. Insulated options available." },
              { title: "Insulated Doors", desc: "Temperature-rated doors for climate controlled units. Maintain thermal envelope integrity and reduce HVAC costs." },
              { title: "Replacement Doors", desc: "Drop-in replacements for existing facilities. We match your current frame dimensions and mounting configuration." },
            ].map((d) => (
              <div key={d.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-roi-navy mb-2">{d.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Storage door FAQ
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>
    </SubPageLayout>
  );
}
