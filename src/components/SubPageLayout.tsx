import Header from "./Header";
import Footer from "./Footer";
import QuoteForm from "./QuoteForm";

interface SubPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SubPageLayout({ title, subtitle, children }: SubPageLayoutProps) {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-roi-navy overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-xl">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Page Content */}
      {children}

      {/* Quote CTA */}
      <section id="quote" className="py-20 lg:py-28 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
            <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-roi-navy mb-6">Request a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
