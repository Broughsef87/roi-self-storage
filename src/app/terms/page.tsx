import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | ROI Self Storage",
  description:
    "The terms governing your use of the ROI Self Storage website, including pricing-estimate disclaimers and limitations of liability.",
  path: "/terms",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Terms of Service" },
]);

const EFFECTIVE = "June 16, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd id="terms-breadcrumb" data={breadcrumb} />
      <Header />

      <main className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-roi-navy tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-gray-400">Effective {EFFECTIVE}</p>

          <div className="mt-10 space-y-8 text-roi-steel leading-relaxed text-sm">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              roiselfstoragebuildings.com (the &ldquo;Site&rdquo;), operated by ROI Self Storage, a
              division of ROI Metal Buildings (&ldquo;ROI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
              By using the Site, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Use of the Site</h2>
              <p>
                You may use the Site for lawful purposes related to learning about and requesting our
                products and services. You agree not to misuse the Site, interfere with its operation,
                or attempt to access it in any unauthorized way.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Pricing and estimates</h2>
              <p>
                Any prices, ranges, cost-per-square-foot figures, and timelines shown on the Site are
                non-binding estimates based on national averages and are provided for general
                information only. They are not an offer or a quote. Actual pricing depends on your
                site, dimensions, loads, building type, scope, region, and current material markets,
                and is confirmed only in a written quote for your specific project. Building-package
                figures exclude concrete, sitework, and other items unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Scope of work</h2>
              <p>
                ROI engineers, manufactures, and supplies pre-engineered metal building systems and
                provides stamped engineering drawings. ROI does not pour concrete or act as your
                on-site general contractor. Foundations, sitework, permitting, code approval, and
                construction are the responsibility of you and your contractor, engineer, and local
                authority having jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Intellectual property</h2>
              <p>
                The content on the Site — text, graphics, logos, images, and drawings — is owned by
                ROI or its licensors and is protected by applicable laws. You may not reproduce or
                redistribute it without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Disclaimers</h2>
              <p>
                The Site and its content are provided &ldquo;as is&rdquo; without warranties of any
                kind, whether express or implied, including fitness for a particular purpose and
                accuracy of information. Engineering, code, and load requirements are project-specific
                and must be confirmed by a licensed engineer and your local authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, ROI is not liable for any indirect,
                incidental, or consequential damages arising from your use of the Site or reliance on
                its content. Your sole remedy for dissatisfaction with the Site is to stop using it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Tennessee, without regard to its
                conflict-of-laws rules. Any dispute will be subject to the courts located in
                Tennessee.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. Changes take effect when posted, and the
                &ldquo;Effective&rdquo; date above will be updated. Continued use of the Site means you
                accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Contact us</h2>
              <p>
                Questions about these Terms? Contact ROI Self Storage at{" "}
                <a href="mailto:info@roimetalbuildings.com" className="text-roi-red font-semibold hover:underline">
                  info@roimetalbuildings.com
                </a>{" "}
                or (865) 316-9009, 6800 Waller Ferry Rd, Suite B, Lenoir City, TN 37771.
              </p>
            </section>

            <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
              See also our{" "}
              <Link href="/privacy" className="text-roi-red font-semibold hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
