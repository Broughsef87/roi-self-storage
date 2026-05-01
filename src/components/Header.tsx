"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const buildingLinks = [
  { href: "/mini-storage", label: "Mini Storage" },
  { href: "/climate-controlled", label: "Climate Controlled" },
  { href: "/boat-storage", label: "Boat Storage" },
  { href: "/rv-storage", label: "RV Storage" },
  { href: "/retrofit", label: "Retrofit / Conversion" },
  { href: "/portable-storage", label: "Portable Containers" },
  { href: "/storage-doors", label: "Storage Doors" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buildingsOpen, setBuildingsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="ROI Self Storage — Home">
            <Image
              src="/brand/logo-horizontal-transparent.png"
              alt="ROI Self Storage"
              width={200}
              height={48}
              className="h-9 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Buildings Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBuildingsOpen(true)}
              onMouseLeave={() => setBuildingsOpen(false)}
            >
              <button className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors flex items-center gap-1 cursor-pointer">
                Buildings
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {buildingsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-56">
                    {buildingLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-roi-steel hover:text-roi-red hover:bg-roi-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/specials" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Specials
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              About
            </Link>
            <Link href="/#sizes" className="text-sm font-medium text-roi-steel hover:text-roi-red transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8653169009"
              className="text-sm font-semibold text-roi-navy hover:text-roi-red transition-colors"
            >
              (865) 316-9009
            </a>
            <Link
              href="/#quote"
              className="bg-roi-red text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-roi-navy transition-colors"
            >
              Get a Quote
            </Link>
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
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            <div className="py-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 mb-2">Buildings</div>
              {buildingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-roi-steel py-2 pl-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-2 space-y-1">
              <Link href="/specials" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Specials</Link>
              <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Case Studies</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">About</Link>
              <Link href="/#sizes" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">Pricing</Link>
              <Link href="/#faq" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-roi-steel py-2">FAQ</Link>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <a href="tel:8653169009" className="block text-sm font-semibold text-roi-navy py-2">(865) 316-9009</a>
              <Link href="/#quote" onClick={() => setMobileOpen(false)} className="mt-2 block bg-roi-red text-white text-sm font-semibold px-5 py-2.5 rounded-md text-center">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
