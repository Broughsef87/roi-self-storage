"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to get a self storage building?",
    a: "Typical lead times run 8-14 weeks from order to delivery, depending on size and complexity. Site prep can happen in parallel. We'll give you an exact timeline with your quote.",
  },
  {
    q: "Do you handle the full build or just the metal shell?",
    a: "We supply the pre-engineered metal building package — framing, panels, trim, fasteners, and doors. We can connect you with certified erectors in your area, or your general contractor can handle the install with our engineering drawings. ROI does not perform concrete services — we provide national average estimates for budgeting purposes.",
  },
  {
    q: "How much does a self storage building cost?",
    a: "Building packages range from $7-$20 per square foot depending on type. Standard storage runs $10-$12/sf, climate controlled is $17-$20/sf, boat & RV is $12-$15/sf, and retrofits start at $7-$10/sf. When you add erection ($3.50-$6.00/sf) and concrete/site work ($10-$15/sf), total estimated build costs range from roughly $23-$41/sf depending on building type. These are national averages — your actual costs will depend on location, zoning, wind and snow loads, and current steel market.",
  },
  {
    q: "Can I add climate control later?",
    a: "Yes. Our buildings are designed to accommodate insulation and HVAC retrofits. We recommend planning for it upfront — the incremental cost at build time is significantly less than a retrofit.",
  },
  {
    q: "Can you retrofit or convert an existing building into self storage?",
    a: "Absolutely. Retrofit and conversion projects are one of the most cost-effective ways to get into self storage, starting at $7-$10 per square foot for the building package. If you have an existing structure, we can engineer a storage conversion that maximizes your unit count and revenue potential.",
  },
  {
    q: "Do your buildings meet local building codes?",
    a: "Every building is engineered to meet your specific local codes including wind, snow, and seismic loads. We provide stamped engineering drawings for your permit application. Costs can vary by area depending on these factors.",
  },
  {
    q: "What kind of ROI can I expect from a self storage facility?",
    a: "Self storage consistently delivers 8-12% cap rates in strong markets. Your ROI depends on location, unit mix, and occupancy. We're happy to walk through the numbers with you — that's literally our name.",
  },
  {
    q: "Do you deliver nationwide?",
    a: "We deliver to 48 states and engineer for all 50. Freight cost varies by distance from our manufacturing facilities, and we'll include it as a line item in your quote so there are no surprises.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left cursor-pointer group"
          >
            <span className="text-base font-medium text-roi-navy pr-4 group-hover:text-roi-red transition-colors">
              {faq.q}
            </span>
            <span className="text-roi-steel mt-0.5 shrink-0 text-xl leading-none">
              {open === i ? "\u2212" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="pb-5 pr-8">
              <p className="text-sm text-roi-steel leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
