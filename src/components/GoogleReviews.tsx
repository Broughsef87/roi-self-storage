"use client";

import { useState, useEffect, useRef } from "react";

interface Review {
  name: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
  project?: string;
  color: string;
}

const reviews: Review[] = [
  {
    name: "Chelsea Stigall",
    initials: "CS",
    date: "April 2026",
    rating: 5,
    text: "As a repeat customer, Puri-T Welding & Fabrication in Richland, WA rely heavily on dependable suppliers, and this team at ROI continues to deliver. We've had the pleasure of working with Lisa, who has been great—always responsive, organized, and easy to work with. Communication has been consistent, turnaround times are solid, and the metal building packages arrive accurate and complete.",
    project: "Repeat Customer • Richland, WA",
    color: "bg-blue-500",
  },
  {
    name: "Securit-Storage",
    initials: "SS",
    date: "March 2026",
    rating: 5,
    text: "We had a great experience with ROI in putting up some new storage units. The buildings were erected within 3 months from our first conversation. Dave and the team were prompt in answering any questions. They also assisted us in finding a crew to install who completed the whole install in 4 days during the bitter cold of January. We will use them again.",
    project: "Self Storage • Anderson, IN",
    color: "bg-roi-red",
  },
  {
    name: "Kevin Burkhead",
    initials: "KB",
    date: "December 2025",
    rating: 5,
    text: "Working with Blaise was absolutely amazing. He is extremely courteous and is willing to go the extra mile. Absolutely the best experience I've had purchasing a metal building.",
    project: "Metal Building",
    color: "bg-emerald-500",
  },
  {
    name: "Jeremy Edward",
    initials: "JE",
    date: "November 2025",
    rating: 5,
    text: "I had ROI provide the steel building for a new hangar installation. Dave was great to work with and made navigating the options easy. Price-wise it was definitely the best value for the dollar spent. I had a custom opening for a hangar door and their engineers accommodated the special request.",
    project: "Aircraft Hangar",
    color: "bg-amber-500",
  },
  {
    name: "Billy Bennett",
    initials: "BB",
    date: "August 2025",
    rating: 5,
    text: "Dave and all ROI employees were great. The best price for our project, it made everything look better. Great job.",
    project: "Commercial Project",
    color: "bg-purple-500",
  },
  {
    name: "WAY FOODS",
    initials: "WF",
    date: "July 2025",
    rating: 5,
    text: "We had an excellent experience with ROI Metal Buildings — everything was delivered as promised, down to better-quality screws than we've had from others! She and her team made the whole process smooth and easy.",
    project: "Commercial Building",
    color: "bg-pink-500",
  },
  {
    name: "Leigh Fairhead",
    initials: "LF",
    date: "Spring 2025",
    rating: 5,
    text: "Working with Dave & ROI was a great experience for me. Everything was just as Dave described and my involvement was very limited which suited me fine. Building was delivered promptly & the crew that erected building was very professional also. If I were to build again I would definitely contact Dave & ROI.",
    project: "Metal Building • Nebraska",
    color: "bg-teal-500",
  },
  {
    name: "Travis S.",
    initials: "TS",
    date: "April 2024",
    rating: 5,
    text: "I worked with Dave on my storage facility project that included 2 buildings with 120 new units next to our older facility. The service level and attention to detail was much appreciated. We went through two other building manufacturers prior to working with Dave Maxe. Needless to say the two other manufacturers dropped the ball, which cost us thousands of dollars in expenses and lost potential revenue. Dave job well done. Thank you.",
    project: "Self Storage Expansion",
    color: "bg-orange-500",
  },
  {
    name: "Aaron S.",
    initials: "AS",
    date: "Featured",
    rating: 5,
    text: "Lisa Wirth is the most straightforward and knowledgeable professional I have ever worked with in the metal building industry. Her candid approach from design to delivery, and attention to detail, saved us tens of thousands of dollars. I've vetted dozens of suppliers and consider her the best choice.",
    project: "Featured Testimonial",
    color: "bg-indigo-500",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 5s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  // Determine visible cards (3 on desktop, 1 on mobile — handled via CSS)
  return (
    <section className="py-16 lg:py-24 bg-roi-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <GoogleLogo />
              <span className="text-sm font-semibold text-roi-steel uppercase tracking-wider">
                Google Reviews
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
              What our customers say
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-roi-navy">5.0</span>
                <StarRow rating={5} />
              </div>
              <div className="text-sm text-roi-steel mt-1">Based on 20 Google reviews</div>
            </div>
            <a
              href="https://www.google.com/search?q=ROI+Metal+Buildings+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center text-sm font-semibold text-roi-red hover:underline"
            >
              See all reviews &rarr;
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-4 lg:gap-6"
              style={{
                transform: `translateX(calc(-${active} * (100% / 1) - ${active} * 1rem))`,
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white rounded-xl border border-gray-200 p-6 lg:p-7 shadow-sm"
                  aria-hidden={i !== active}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-semibold text-roi-navy truncate">{r.name}</div>
                        <GoogleLogo />
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{r.date}</div>
                    </div>
                  </div>
                  <StarRow rating={r.rating} />
                  <p className="mt-3 text-sm text-roi-steel leading-relaxed line-clamp-6">
                    {r.text}
                  </p>
                  {r.project && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-roi-red uppercase tracking-wider">
                        {r.project}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setActive((a) => (a - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-roi-navy hover:bg-roi-navy hover:text-white hover:border-roi-navy transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full cursor-pointer ${
                    i === active ? "w-8 h-2 bg-roi-red" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((a) => (a + 1) % reviews.length)}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-roi-navy hover:bg-roi-navy hover:text-white hover:border-roi-navy transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
