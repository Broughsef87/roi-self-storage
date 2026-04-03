"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/roi-logo.png" alt="ROI Metal Buildings" width={48} height={32} className="h-8 w-auto" />
            <span className="text-roi-navy font-bold text-lg tracking-tight">
              ROI Self Storage
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#buildings" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Buildings
            </a>
            <a href="#sizes" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Sizes &amp; Pricing
            </a>
            <a href="#process" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Our Process
            </a>
            <a href="#faq" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8653169009"
              className="text-sm font-semibold text-roi-navy hover:text-roi-red transition-colors"
            >
              (865) 316-9009
            </a>
            <a
              href="#quote"
              className="bg-roi-red text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-roi-navy transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-roi-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-3">
            <a href="#buildings" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Buildings</a>
            <a href="#sizes" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Sizes &amp; Pricing</a>
            <a href="#process" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Our Process</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">FAQ</a>
            <div className="pt-3 border-t border-gray-100">
              <a href="tel:8653169009" className="block text-sm font-semibold text-roi-navy py-2">(865) 316-9009</a>
              <a href="#quote" onClick={() => setMobileOpen(false)} className="mt-2 block bg-roi-red text-white text-sm font-semibold px-5 py-2.5 rounded-md text-center">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
