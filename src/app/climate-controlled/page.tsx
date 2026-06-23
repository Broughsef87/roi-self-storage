import type { Metadata } from "next";
import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { PRICING } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Climate-Controlled Storage Buildings | ROI Self Storage",
  description:
    "Build climate-controlled self storage — insulated shell, condensation control, hallway systems, and HVAC coordination. Engineered steel, building package from $15-20/sf.",
  path: "/climate-controlled",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Climate Controlled", path: "/climate-controlled" },
]);

const service = serviceSchema({
  serviceType: "Climate Controlled Self Storage Building Manufacturing",
  name: "Climate-Controlled Self Storage Buildings",
  description:
    "Conditioned self-storage building systems — insulated, sealed envelope with interior hallway systems, partitions, and HVAC coordination. ROI engineers and supplies the metal building system with stamped drawings. Building package $15-$20 per sq ft (excludes concrete, sitework, and HVAC).",
  minPricePerSqFt: 15,
});

const faqs = [
  {
    q: "How much do climate-controlled storage buildings cost?",
    a: "Building packages typically start higher than standard drive-up — on the order of $15-20/sq ft (national average, building package only, excluding concrete, sitework, and HVAC). Your real cost depends on insulation, interior layout, loads, and region — send your project for a range.",
  },
  {
    q: "What's different about building climate-controlled vs. drive-up?",
    a: "Climate-controlled adds an insulated, sealed envelope, condensation/vapor management, HVAC coordination, and interior hallway systems with interior-access units — versus standard drive-up's exterior roll-up doors. More scope, higher cost, higher revenue per square foot.",
  },
  {
    q: "How do you handle condensation in a metal building?",
    a: "Condensation and vapor control are design coordination items — the insulated envelope and conditioning are designed together for your climate and dew-point conditions. It's project-specific and coordinated with your mechanical engineer; ROI supplies the building system engineered to that scope.",
  },
  {
    q: "Do climate-controlled facilities need sprinklers?",
    a: "Often, depending on size, occupancy, stories, and local code — fire, sprinkler, and life-safety requirements are determined by your AHJ and a licensed engineer, not a generic rule. We coordinate the building with those requirements.",
  },
  {
    q: "Can I mix climate-controlled and drive-up on one site?",
    a: "Yes — many facilities do, with the split set by market demand and the pro forma.",
  },
];

export default function ClimateControlledPage() {
  return (
    <>
      <JsonLd id="climate-schema" data={[breadcrumb, service, faqPageSchema([...faqs])]} />
    <SubPageLayout
      title="Climate-Controlled Storage Buildings: Shell, Insulation, Hallways, and Code"
      subtitle="A conditioned, insulated, sealed self-storage facility with interior hallway systems instead of drive-up doors — a premium product that lifts revenue per square foot in the markets that demand it."
    >
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            A climate-controlled storage building is a conditioned self-storage facility —
            insulated, sealed, and temperature- (and sometimes humidity-) managed, with interior
            hallway systems instead of{" "}
            <Link href="/storage-doors" className="text-roi-red font-semibold hover:underline">
              drive-up doors
            </Link>
            . It&apos;s a premium product: tenants pay more for it, and it costs more to build and
            operate. For developers in markets that demand it, climate-controlled units lift revenue
            per square foot — but the build is more complex than standard drive-up, and the details
            matter. ROI engineers and supplies the metal building system; the conditioning,
            insulation, and interior systems have to be coordinated as a whole.
          </p>
          <p className="mt-6 text-roi-steel leading-relaxed">
            A note on terms: it&apos;s still an engineered metal building system — primary frames,
            secondary framing, cladding, bracing — but the climate-controlled version adds an
            insulated, sealed envelope and interior buildout (hallways, doors, partitions) designed
            to hold a conditioned space.
          </p>
        </div>
      </section>

      {/* Best for / not best for */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Best for / not best for
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">
                Climate-controlled is a strong fit when:
              </h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> Your market has demonstrated demand and will pay the premium (humid or hot climates, higher-value stored goods).</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> You want higher revenue per square foot and a differentiated product.</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-roi-red shrink-0">&#10003;</span> A multi-story or interior-hallway layout suits the site.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-roi-navy mb-4">
                Standard drive-up may be the better call when:
              </h3>
              <ul className="space-y-3 text-sm text-roi-steel">
                <li className="flex gap-2"><span aria-hidden="true" className="text-gray-300 shrink-0">&#10007;</span> The market won&apos;t pay the premium and standard units lease fine.</li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="text-gray-300 shrink-0">&#10007;</span>
                  <span>You want the lowest build and operating cost. (See{" "}
                    <Link href="/mini-storage" className="text-roi-red font-semibold hover:underline">mini storage buildings</Link>.)</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-roi-steel leading-relaxed max-w-3xl">
            It&apos;s common to mix both on one site. The right split is a market and pro forma
            question. Already have a building? A climate-controlled{" "}
            <Link href="/retrofit" className="text-roi-red font-semibold hover:underline">
              conversion
            </Link>{" "}
            follows the same coordination.
          </p>
        </div>
      </section>

      {/* What has to be coordinated */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            What has to be coordinated
          </h2>
          <p className="text-roi-steel leading-relaxed mb-6">
            Climate-controlled is where the building, the envelope, and the mechanical systems all
            have to work together:
          </p>
          <ul className="space-y-5 text-roi-steel text-sm leading-relaxed">
            <li>
              <strong className="text-roi-navy">Insulation and the sealed envelope</strong> — walls
              and roof insulated to hold the conditioned space.
            </li>
            <li>
              <strong className="text-roi-navy">Condensation and vapor control</strong> — a
              conditioned metal building in a humid climate has to manage moisture and dew point;
              it&apos;s a design coordination item, not an afterthought.
            </li>
            <li>
              <strong className="text-roi-navy">HVAC coordination</strong> — the conditioning system
              has to be sized and integrated with the shell; ROI coordinates the building with your
              mechanical scope.
            </li>
            <li>
              <strong className="text-roi-navy">Interior hallway systems, doors, and partitions</strong> —
              interior-access units instead of drive-up, which changes layout and circulation.
            </li>
            <li>
              <strong className="text-roi-navy">Fire, sprinkler, and life-safety</strong> —
              conditioned and multi-story storage often carries additional code, egress, and
              sprinkler requirements, determined by your local code and AHJ.
            </li>
          </ul>
          <p className="mt-6 text-roi-steel leading-relaxed text-sm">
            ROI provides stamped engineering drawings for the building system; HVAC design,
            fire/life-safety, foundations, and code approval are determined by your mechanical
            engineer, a licensed engineer, and your AHJ.
          </p>
        </div>
      </section>

      {/* What drives cost */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-4">
            What drives climate-controlled cost
          </h2>
          <p className="text-roi-steel leading-relaxed max-w-3xl">
            Climate-controlled costs more than standard drive-up because of the insulated envelope,
            the interior buildout (hallways, partitions, interior doors), and the mechanical scope.
            As a starting point, climate-controlled building packages run higher than standard — on
            the order of $15-20/sq ft for the building package (national average, building package
            only, excluding concrete, sitework, and HVAC). Your number depends on insulation level,
            interior layout, loads, region, and schedule. National-average starting points, not a
            quote — <a href="#quote" className="text-roi-red font-semibold hover:underline">send your project</a> for
            a real range. (See the{" "}
            <Link href="/#sizes" className="text-roi-red font-semibold hover:underline">pricing guide</Link>{" "}
            and{" "}
            <Link href="/resources/self-storage-building-cost" className="text-roi-red font-semibold hover:underline">what drives self-storage building cost</Link>.)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Building Package</div>
              <div className="text-2xl font-bold text-roi-navy">{PRICING.climate.buildingPackageLabel}</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">+ Erection &amp; Concrete</div>
              <div className="text-2xl font-bold text-roi-navy">{PRICING.climate.erectionConcreteLabel}</div>
            </div>
            <div className="bg-roi-navy rounded-lg p-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Est. Total Build</div>
              <div className="text-2xl font-bold text-white">{PRICING.climate.estTotalLabel}</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Building package only excludes concrete, sitework, and HVAC. Does not include land,
            permits, utilities, or other soft costs. ROI does not perform concrete services. Actual
            costs vary by location and climate zone.
          </p>
        </div>
      </section>

      {/* Operating-cost tradeoff */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-6">
            The operating-cost tradeoff
          </h2>
          <p className="text-roi-steel leading-relaxed">
            Climate-controlled earns more per square foot but costs more to run (conditioning,
            maintenance). That tradeoff belongs in the pro forma — the question isn&apos;t just
            &ldquo;can we build it&rdquo; but &ldquo;does the premium clear the added operating cost
            in this market.&rdquo; We can help you work through the building side of that decision.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-roi-navy tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <PageFAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-roi-navy tracking-tight">
            Climate-controlled coordination check.
          </h2>
          <p className="mt-4 text-roi-steel leading-relaxed">
            Send us your site, target unit mix, and market, and we&apos;ll work up the building
            side — insulation, layout, and how it coordinates with your mechanical and code scope —
            with a real range.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
            >
              Start the Coordination Check
            </a>
            <a
              href="tel:8653169009"
              className="inline-flex items-center justify-center border border-gray-300 text-roi-navy font-medium px-7 py-3.5 rounded-md hover:bg-roi-light transition-colors text-sm"
            >
              Call (865) 316-9009
            </a>
          </div>
        </div>
      </section>
    </SubPageLayout>
    </>
  );
}
