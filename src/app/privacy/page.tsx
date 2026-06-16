import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | ROI Self Storage",
  description:
    "How ROI Self Storage collects, uses, and protects the information you provide through our website and quote request form.",
  path: "/privacy",
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Privacy Policy" },
]);

const EFFECTIVE = "June 16, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd id="privacy-breadcrumb" data={breadcrumb} />
      <Header />

      <main className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-roi-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-400">Effective {EFFECTIVE}</p>

          <div className="mt-10 space-y-8 text-roi-steel leading-relaxed text-sm">
            <p>
              This Privacy Policy explains how ROI Self Storage, a division of ROI Metal Buildings
              (&ldquo;ROI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), handles information collected
              through roiselfstoragebuildings.com (the &ldquo;Site&rdquo;). By using the Site or
              submitting a request, you agree to the practices described here.
            </p>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Information we collect</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-roi-navy">Information you provide.</strong> When you submit
                  a quote request or contact us, we collect the details you enter — typically your
                  name, email address, phone number, project location, building type, size, and any
                  details you choose to share.
                </li>
                <li>
                  <strong className="text-roi-navy">Usage information.</strong> Like most websites,
                  we automatically collect standard analytics data (pages visited, referring source,
                  device and browser type, and approximate location) through cookies and similar
                  technologies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">How we use your information</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>To respond to your quote request and communicate with you about your project.</li>
                <li>To prepare estimates, engineering, and proposals you ask for.</li>
                <li>To operate, maintain, and improve the Site and our services.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">How your information is shared</h2>
              <p>
                We do not sell your personal information. We share it only as needed to run our
                business: with our customer relationship management (CRM) and email providers that
                help us process and respond to your request, and where required by law. Quote
                requests submitted through the Site are routed into our CRM so our team can follow up.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Analytics and cookies</h2>
              <p>
                We use Google Analytics to understand how visitors use the Site. Google Analytics
                sets cookies and may process usage data on our behalf. You can opt out of Google
                Analytics with the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-roi-red font-semibold hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                , and you can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Data retention &amp; security</h2>
              <p>
                We keep the information you provide for as long as needed to respond to your request
                and for legitimate business or legal purposes. We use reasonable safeguards to
                protect your information, but no method of transmission or storage is completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Your choices</h2>
              <p>
                You may request that we update or delete the information you submitted, or ask us to
                stop contacting you, by emailing{" "}
                <a href="mailto:info@roimetalbuildings.com" className="text-roi-red font-semibold hover:underline">
                  info@roimetalbuildings.com
                </a>
                . We will respond to reasonable requests consistent with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Third-party links</h2>
              <p>
                The Site links to other sites, including our parent company ROI Metal Buildings.
                We are not responsible for the privacy practices of sites we do not operate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes take effect when posted,
                and the &ldquo;Effective&rdquo; date above will be updated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-roi-navy mb-3">Contact us</h2>
              <p>
                Questions about this policy? Contact ROI Self Storage at{" "}
                <a href="mailto:info@roimetalbuildings.com" className="text-roi-red font-semibold hover:underline">
                  info@roimetalbuildings.com
                </a>{" "}
                or (865) 316-9009, 6800 Waller Ferry Rd, Suite B, Lenoir City, TN 37771.
              </p>
            </section>

            <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
              See also our{" "}
              <Link href="/terms" className="text-roi-red font-semibold hover:underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
