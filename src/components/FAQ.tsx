"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to get a self storage building?",
    a: "Typical lead times run 8-14 weeks from order to delivery, depending on size and complexity. Site prep can happen in parallel. We'll give you an exact timeline with your quote.",
  },
  {
    q: "Do you handle the full build or just the metal shell?",
    a: "We supply the pre-engineered metal building package — framing, panels, trim, fasteners, and doors. We can connect you with certified erectors in your area, or your general contractor can handle the install with our engineering drawings.",
  },
  {
    q: "What sizes of storage buildings do you offer?",
    a: "From small 2,400 sq ft facilities with 20 units up to 100,000+ sq ft multi-story complexes. Clear-span widths up to 200 feet. Every building is custom engineered to your site and business plan.",
  },
  {
    q: "Can I add climate control later?",
    a: "Yes. Our buildings are designed to accommodate insulation and HVAC retrofits. We recommend planning for it upfront — the incremental cost at build time is significantly less than a retrofit.",
  },
  {
    q: "Do your buildings meet local building codes?",
    a: "Every building is engineered to meet your specific local codes including wind, snow, and seismic loads. We provide stamped engineering drawings for your permit application.",
  },
  {
    q: "What kind of ROI can I expect from a self storage facility?",
    a: "Self storage consistently delivers 8-12% cap rates in strong markets. Your ROI depends on location, unit mix, and occupancy. We're happy to walk through the numbers with you — that's literally our name.",
  },
  {
    q: "Do you deliver nationwide?",
    a: "Yes. We deliver to all 50 states. Freight cost varies by distance from our manufacturing facilities, and we'll include it as a line item in your quote so there are no surprises.",
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
