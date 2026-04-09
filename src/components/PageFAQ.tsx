"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function PageFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((faq, i) => (
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
