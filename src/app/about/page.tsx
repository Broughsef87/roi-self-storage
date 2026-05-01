import type { Metadata } from "next";
import Image from "next/image";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "About | ROI Self Storage",
  description:
    "ROI Self Storage is a division of ROI Metal Buildings. Over 100 years of combined expertise transforming the metal building and self storage industry through transparency, quality, and unparalleled customer service.",
};

const values = [
  { title: "Quality", desc: "We source only the highest quality materials and value quality relationships based on honesty and integrity." },
  { title: "Service", desc: "Your needs are our priority. We promise to serve your account with diligence, integrity, and transparency." },
  { title: "Dedication", desc: "Our dedicated metal building specialists will guide you from start to finish, turning your vision into reality." },
  { title: "Fairness", desc: "Expect nothing but fair pricing for exceptional quality. We serve every customer with passion and excellence." },
  { title: "Connection", desc: "We leverage our connections for your benefit, aiming to build partnerships based on trust and shared triumphs." },
];

const team = [
  { name: "Ryan Cox", title: "Founder / Chief Executive Officer", img: "/team/ryan-cox.jpg", linkedin: null },
  { name: "Lisa Wirth", title: "Founder / Senior Account Manager", img: "/team/lisa-wirth.jpg", linkedin: "https://www.linkedin.com/in/wirthlisa/" },
  { name: "Dave Maxe", title: "Founder / Senior Account Manager", img: "/team/dave-maxe.jpg", linkedin: "https://www.linkedin.com/in/dave-maxe-14a581108/" },
  { name: "Taylor Fatheree", title: "Chief Operating Officer", img: "/team/taylor-fatheree.jpg", linkedin: "https://www.linkedin.com/in/tcfatheree/" },
  { name: "Doug Kiser", title: "Vice President of Sales", img: "/team/doug-kiser.jpg", linkedin: "https://www.linkedin.com/in/dougkiser1/" },
  { name: "Jamie Lawson", title: "Senior Building Consultant", img: "/team/jamie-lawson.jpg", linkedin: "https://www.linkedin.com/in/jamie-lawson-4a04b2325/" },
  { name: "Blaise Roper", title: "Building Consultant", img: "/team/blaise-roper.jpg", linkedin: "https://www.linkedin.com/in/blaise-roper/" },
  { name: "D'Artagnan Jackson", title: "Marketing / Administration", img: "/team/dartagnan-jackson.jpg", linkedin: "https://www.linkedin.com/in/d-artagnan-jackson/" },
];

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <SubPageLayout
      title="About ROI Self Storage"
      subtitle="Our journey began with a simple yet powerful vision: to transform the metal building and self storage industry through transparency, quality, and unparalleled customer service."
    >
      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-roi-steel leading-relaxed">
            With over 100 years of combined expertise, we&apos;ve dedicated ourselves to making
            quality steel buildings and development not just accessible, but profitable for our
            clients. Our mission is to guide you through every step of the process, ensuring
            your venture into the metal building and self storage industry is as profitable
            and pain-free as possible.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-roi-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3 text-center">
            Our Experience
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight mb-12 text-center">
            Five values that drive every project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-roi-red/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-roi-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-roi-navy mb-2">{v.title}</h3>
                <p className="text-sm text-roi-steel leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight mb-6">
                Quality, accessible, customizable, profitable.
              </h2>
              <p className="text-roi-steel leading-relaxed mb-4">
                Our mission is clear: to make quality metal buildings accessible, affordable,
                customizable, and most importantly, profitable. We are committed to serving our
                customers with the utmost transparency and honesty, ensuring every decision made
                is informed and every investment is sound.
              </p>
              <p className="text-roi-steel leading-relaxed font-semibold text-roi-navy">
                At ROI, your success is our success.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/case-studies/uncasville-ct/01.jpg"
                alt="ROI metal storage building project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24 bg-roi-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 order-2 lg:order-1">
              <Image
                src="/case-studies/tennessee-golf/hero.jpg"
                alt="ROI golf course storage units"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
                Our Vision
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                The cornerstone of the self storage industry.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our vision is to be the cornerstone of the metal building and self storage
                industry, where every mom and pop, first-timer, and seasoned developer can
                turn their storage business dreams into reality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We see a future where entering the self storage industry is not daunting but
                empowering, with ROI as your trusted partner. Through our expertise, strategic
                partnerships, and commitment to quality, we aim to lead the industry towards a
                standard of integrity, profitability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
              The Team
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight">
              The people behind every project
            </h2>
            <p className="mt-4 text-roi-steel max-w-2xl mx-auto">
              When you work with ROI, you talk to the people who actually design, build, and
              deliver your project. No layers of account managers or middlemen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-bold text-roi-navy text-sm uppercase tracking-wider">{person.name}</h3>
                <p className="text-xs text-roi-steel mt-1 uppercase tracking-wider">{person.title}</p>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-7 h-7 mt-3 bg-roi-red text-white rounded-sm hover:bg-roi-darkred transition-colors"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-roi-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold text-roi-red uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-roi-navy tracking-tight mb-6">
            Not just a provider — a partner in your success.
          </h2>
          <p className="text-lg text-roi-steel leading-relaxed mb-4">
            ROI isn&apos;t just a provider; we&apos;re your partner in success. With decades of
            experience, a commitment to quality, and a heart for service, we&apos;re here to
            ensure your metal building purchase is not just successful but a smooth and simple
            experience.
          </p>
          <p className="text-lg text-roi-steel leading-relaxed">
            Let us help turn your investment into something you will be proud of for years to come.
          </p>
        </div>
      </section>
    </SubPageLayout>
  );
}
