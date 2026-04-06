import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";

/* ------------------------------------------------------------------ */
/*  SVG icons used inline to avoid dependency                          */
/* ------------------------------------------------------------------ */
function IconShield() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}
function IconTruck() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-1.5l-1.72-4.592A1.125 1.125 0 0015.922 9H14.25m-9.375 9V6.375c0-.621.504-1.125 1.125-1.125h7.5c.621 0 1.125.504 1.125 1.125v12" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.82 5.82a2.121 2.121 0 01-3-3l5.82-5.82m4.24-4.24l2.12 2.12M15.66 8.34l4.24-4.24a2.121 2.121 0 013 3L18.66 11.34" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const buildingTypes = [
  {
    name: "Standard Storage",
    desc: "The workhorse of the industry. Roll-up doors, simple access, low operating costs. Most popular for first-time facility owners.",
    price: "$10\u2013$12 / sq ft",
    tag: "Most Popular",
  },
  {
    name: "Climate Controlled",
    desc: "Insulated, HVAC-equipped buildings that command premium rents. Ideal for markets with temperature-sensitive demand.",
    price: "$17\u2013$20 / sq ft",
    tag: "Premium Revenue",
  },
  {
    name: "Boat & RV Storage",
    desc: "Tall clear-span structures with extra-wide doors and high eave heights. Covered or enclosed configurations available.",
    price: "$12\u2013$15 / sq ft",
    tag: "High Margin",
  },
  {
    name: "Flex Spaces",
    desc: "Higher-finish or specialized fit-out spaces. Ideal for mixed-use, workshop, or commercial storage applications.",
    price: "$16+ / sq ft",
    tag: "Versatile",
  },
  {
    name: "Retrofit / Conversion",
    desc: "Convert or expand existing structures into self storage. The most cost-effective path for owners with an existing building or shell.",
    price: "$7\u2013$10 / sq ft",
    tag: "Best Value",
  },
];

const stats = [
  { value: "90+", label: "Years Combined Experience" },
  { value: "48", label: "States Delivered" },
  { value: "8-14", label: "Week Lead Times" },
  { value: "100%", label: "Custom Engineered" },
];

const benefits = [
  { icon: <IconChart />, title: "Built for ROI", desc: "We engineer buildings around your pro forma, not the other way around. Every design decision maps to your revenue model." },
  { icon: <IconShield />, title: "Min. 26ga 80KSI Exterior Panels", desc: "Commercial-grade Galvalume steel panels with 40-year paint warranties. Built to last decades with minimal maintenance." },
  { icon: <IconBolt />, title: "Upgrades Available", desc: "Standing seam roofing, moisture barriers, insulated metal panels, double-sided partitions, and more. Customize to your market." },
  { icon: <IconTruck />, title: "Nationwide Delivery", desc: "We ship to 48 states and engineer for all 50. Freight is a line item on your quote — no hidden costs, no surprises." },
  { icon: <IconWrench />, title: "Turnkey Engineering", desc: "Stamped drawings, foundation plans, and erection guides included. Your contractor builds from our blueprints." },
  { icon: <IconClock />, title: "Fast Turnaround", desc: "8-14 week manufacturing. Site prep runs in parallel. Most facilities are operational within 6 months of order." },
];

const pricingData = [
  { type: "Standard Storage", building: "$10\u2013$12", erection: "$3.50\u2013$6.00", concrete: "$10\u2013$15", total: "$23.50\u2013$33.00", avg: "$28.25" },
  { type: "Climate Controlled", building: "$17\u2013$20", erection: "$3.50\u2013$6.00", concrete: "$10\u2013$15", total: "$30.50\u2013$41.00", avg: "$35.75" },
  { type: "Boat & RV Storage", building: "$12\u2013$15", erection: "$3.50\u2013$6.00", concrete: "$10\u2013$15", total: "$25.50\u2013$36.00", avg: "$30.75" },
  { type: "Flex Spaces", building: "$16+", erection: "$3.50\u2013$6.00", concrete: "$10\u2013$15", total: "$29.50\u2013$37.00+", avg: "$33.25+" },
  { type: "Retrofit / Conversion", building: "$7\u2013$10", erection: "$3.50\u2013$6.00", concrete: "Varies", total: "$10.50\u2013$16.00+", avg: "~$13.25+" },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn about your site, market, budget, and timeline. No sales pitch — just questions." },
  { num: "02", title: "Custom Design", desc: "Our engineers spec a building around your unit mix and revenue targets. You get drawings and a detailed quote." },
  { num: "03", title: "Manufacturing", desc: "Your building is fabricated at our facility. 8-14 weeks depending on complexity. Site work can start now." },
  { num: "04", title: "Delivery & Erection", desc: "Building ships on flatbeds to your site. Your crew or our recommended erectors handle the install." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Header />

      {/* =================== HERO =================== */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-roi-navy overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              A division of ROI Metal Buildings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Metal Storage Buildings<br />
              <span className="text-roi-red">Engineered for Profit</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Pre-engineered steel self storage facilities custom-designed around your
              business plan. From 20-unit starter facilities to 400+ unit complexes.
              Delivered nationwide.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center bg-roi-red text-white font-semibold px-7 py-3.5 rounded-md hover:bg-roi-darkred transition-colors text-sm"
              >
                Get Your Free Quote
              </a>
              <a
                href="tel:8653169009"
                className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-7 py-3.5 rounded-md hover:bg-white/5 transition-colors text-sm"
              >
                Call (865) 316-9009
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-roi-red pl-4">
                <div className="text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== BUILDING TYPES =================== */}
      <section id="buildings" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
              Storage buildings for every business model
            </h2>
            <p className="mt-4 text-roi-steel leading-relaxed">
              Whether you&apos;re building your first 20-unit facility or expanding a portfolio,
              we engineer the right structure for your market and revenue goals.
            </p>
          </div>

          <div className="space-y-4">
            {buildingTypes.map((b) => (
              <div
                key={b.name}
                className="group border border-gray-150 rounded-lg p-6 lg:p-8 hover:border-roi-red/30 hover:bg-roi-light/50 transition-all flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-roi-navy">{b.name}</h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-roi-red bg-roi-red/8 px-2.5 py-0.5 rounded-full">
                      {b.tag}
                    </span>
                  </div>
                  <p className="text-sm text-roi-steel leading-relaxed">{b.desc}</p>
                </div>
                <div className="shrink-0 text-right lg:text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Building Package</div>
                  <div className="text-sm font-semibold text-roi-navy mt-0.5">{b.price}</div>
                </div>
                <a
                  href="#quote"
                  className="shrink-0 inline-flex items-center text-sm font-semibold text-roi-red group-hover:underline"
                >
                  Get pricing &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== WHY ROI =================== */}
      <section className="py-20 lg:py-28 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
              Why owners choose ROI
            </h2>
            <p className="mt-4 text-roi-steel leading-relaxed">
              90 years of combined experience building metal structures. No gimmicks,
              no upsells — just honest engineering and straight pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="shrink-0 text-roi-red mt-0.5">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-roi-navy mb-1.5">{b.title}</h3>
                  <p className="text-sm text-roi-steel leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== PRICING GUIDE =================== */}
      <section id="sizes" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
              Pricing guide
            </h2>
            <p className="mt-4 text-roi-steel leading-relaxed">
              All prices per square foot. Estimated total includes building package + steel
              erection + concrete/site work. Every project is custom quoted.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-roi-navy text-white">
                  <th className="text-left font-semibold px-5 py-4">Building Type</th>
                  <th className="text-center font-semibold px-5 py-4">Building Package</th>
                  <th className="text-center font-semibold px-5 py-4">Steel Erection</th>
                  <th className="text-center font-semibold px-5 py-4">Concrete / Site</th>
                  <th className="text-center font-semibold px-5 py-4">Est. Total Range</th>
                  <th className="text-right font-semibold px-5 py-4">Avg. Total</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-roi-navy">{row.type}</td>
                    <td className="px-5 py-4 text-center text-roi-steel">{row.building}</td>
                    <td className="px-5 py-4 text-center text-roi-steel">{row.erection}</td>
                    <td className="px-5 py-4 text-center text-roi-steel">{row.concrete}</td>
                    <td className="px-5 py-4 text-center font-medium text-roi-navy">{row.total}</td>
                    <td className="px-5 py-4 text-right font-semibold text-roi-navy">{row.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {pricingData.map((row) => (
              <div key={row.type} className="border border-gray-200 rounded-lg p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="font-bold text-roi-navy">{row.type}</div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Avg. Total</div>
                    <div className="font-semibold text-roi-navy">{row.avg}/sf</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400 mb-0.5">Building</div>
                    <div className="font-medium text-roi-steel">{row.building}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-0.5">Erection</div>
                    <div className="font-medium text-roi-steel">{row.erection}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-0.5">Concrete</div>
                    <div className="font-medium text-roi-steel">{row.concrete}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs">
                  <span className="text-gray-400">Total range: </span>
                  <span className="font-medium text-roi-navy">{row.total}/sf</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-roi-light rounded-lg p-5 text-xs text-roi-steel leading-relaxed space-y-1.5">
            <p><strong className="text-roi-navy">What&apos;s included:</strong> Building package (metal building kit) + steel erection + concrete/site work. All figures are per square foot, based on national averages.</p>
            <p><strong className="text-roi-navy">What&apos;s not included:</strong> Land, permits, utilities, design fees, financing, landscaping, or other soft costs. ROI does not perform concrete services — concrete figures are based on national averages for reference.</p>
            <p><strong className="text-roi-navy">Note:</strong> Actual costs vary by location, zoning, wind loads, snow loads, and current steel market. Flex space pricing ($16+) increases with finish level and specialization. Request a quote for your specific project.</p>
          </div>
        </div>
      </section>

      {/* =================== PROCESS =================== */}
      <section id="process" className="py-20 lg:py-28 bg-roi-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              From phone call to facility
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              A straightforward four-step process. No runaround, no committee of
              salespeople. You talk to the people who actually design your building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="text-5xl font-bold text-white/10 mb-3">{s.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== SOCIAL PROOF BAND =================== */}
      <section className="py-14 bg-roi-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center md:text-left">
              <p className="text-roi-steel text-sm leading-relaxed italic">
                &ldquo;They didn&apos;t try to oversell us. Just gave us the numbers and
                let the project speak for itself. Building went up in 4 months.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-roi-navy">
                &mdash; Facility Owner, Nashville TN
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-roi-steel text-sm leading-relaxed italic">
                &ldquo;Third facility we&apos;ve built with ROI. The engineering is
                dialed in and the pricing is always competitive.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-roi-navy">
                &mdash; Portfolio Operator, Charlotte NC
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-roi-steel text-sm leading-relaxed italic">
                &ldquo;We came in under budget and ahead of schedule. Occupancy hit
                85% within six months of opening.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-roi-navy">
                &mdash; First-Time Investor, Knoxville TN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FAQ =================== */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* =================== QUOTE CTA =================== */}
      <section id="quote" className="py-20 lg:py-28 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — pitch */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
                Ready to run the numbers?
              </h2>
              <p className="mt-4 text-roi-steel leading-relaxed">
                Tell us about your project and we&apos;ll send you a detailed quote
                with engineering specs, pricing breakdown, and estimated timeline.
                No obligation, no follow-up spam.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-roi-red mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-sm text-roi-steel">Custom engineering for your site and local codes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-roi-red mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-sm text-roi-steel">Transparent line-item pricing — no hidden fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-roi-red mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-sm text-roi-steel">Response within one business day</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-roi-steel mb-1">Prefer to talk?</p>
                <a href="tel:8653169009" className="text-xl font-bold text-roi-navy hover:text-roi-red transition-colors">
                  (865) 316-9009
                </a>
                <p className="text-xs text-gray-400 mt-1">Mon-Fri 9am-7pm EST</p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-roi-navy mb-6">
                Request a Free Quote
              </h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
