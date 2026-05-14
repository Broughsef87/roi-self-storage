"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(
          data.error ||
            "Something went wrong on our end. Please call (865) 316-9009 or try again in a moment."
        );
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Couldn't reach our server. Check your connection and try again, or call (865) 316-9009."
      );
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-4xl mb-3">&#10003;</div>
        <h3 className="text-xl font-bold text-roi-navy mb-2">Quote Request Received</h3>
        <p className="text-roi-steel text-sm">
          We&apos;ll be in touch within one business day. For immediate help, call{" "}
          <a href="tel:8653169009" className="font-semibold text-roi-red">(865) 316-9009</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-roi-navy mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={submitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-roi-navy mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={submitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-400"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-roi-navy mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={submitting}
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-400"
          placeholder="john@company.com"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="buildingType" className="block text-sm font-medium text-roi-navy mb-1">
            Building Type
          </label>
          <select
            id="buildingType"
            name="buildingType"
            disabled={submitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">Select a type...</option>
            <option value="standard">Standard Storage</option>
            <option value="climate">Climate Controlled</option>
            <option value="boat-rv">Boat &amp; RV Storage</option>
            <option value="flex">Flex Spaces</option>
            <option value="retrofit">Retrofit / Conversion</option>
            <option value="other">Not Sure / Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-roi-navy mb-1">
            Approximate Size
          </label>
          <select
            id="size"
            name="size"
            disabled={submitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors bg-white disabled:bg-gray-50 disabled:text-gray-400"
          >
            <option value="">Select size range...</option>
            <option value="small">Under 5,000 sq ft</option>
            <option value="medium">5,000 - 15,000 sq ft</option>
            <option value="large">15,000 - 50,000 sq ft</option>
            <option value="xlarge">50,000+ sq ft</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-roi-navy mb-1">
          Project Location (City, State)
        </label>
        <input
          type="text"
          id="location"
          name="location"
          disabled={submitting}
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-400"
          placeholder="Nashville, TN"
        />
      </div>
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-roi-navy mb-1">
          Project Details <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          disabled={submitting}
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:border-roi-red focus:ring-1 focus:ring-roi-red outline-none transition-colors resize-none disabled:bg-gray-50 disabled:text-gray-400"
          placeholder="Number of units, timeline, special requirements..."
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-roi-red text-white font-semibold py-3.5 px-6 rounded-md hover:bg-roi-navy transition-colors text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                className="opacity-75"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Request My Free Quote"
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        No pressure. No obligation. Just straight numbers.
      </p>
    </form>
  );
}
