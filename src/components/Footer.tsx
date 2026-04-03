import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-roi-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/roi-logo.png" alt="ROI Metal Buildings" width={48} height={32} className="h-8 w-auto brightness-0 invert" />
              <span className="font-bold text-lg tracking-tight">ROI Self Storage</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pre-engineered metal self storage buildings built for long-term returns.
              A division of ROI Metal Buildings.
            </p>
          </div>

          {/* Building Types */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Building Types
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#buildings" className="hover:text-white transition-colors">Single-Story Drive-Up</a></li>
              <li><a href="#buildings" className="hover:text-white transition-colors">Multi-Story Climate Controlled</a></li>
              <li><a href="#buildings" className="hover:text-white transition-colors">Boat &amp; RV Storage</a></li>
              <li><a href="#buildings" className="hover:text-white transition-colors">Portable Storage Units</a></li>
              <li><a href="#buildings" className="hover:text-white transition-colors">Mixed-Use Commercial</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sizes" className="hover:text-white transition-colors">Size &amp; Pricing Guide</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://roimetalbuildings.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ROI Metal Buildings</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:8653169009" className="hover:text-white transition-colors font-medium">
                  (865) 316-9009
                </a>
              </li>
              <li>
                <a href="mailto:info@roimetalbuildings.com" className="hover:text-white transition-colors">
                  info@roimetalbuildings.com
                </a>
              </li>
              <li>6800 Waller Ferry Rd, Suite B</li>
              <li>Lenoir City, TN 37771</li>
              <li className="pt-1 text-gray-500">Mon-Fri 9am-7pm EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ROI Self Storage. A division of ROI Metal Buildings. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
