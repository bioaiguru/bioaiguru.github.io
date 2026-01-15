import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "BioAIguru is a Sonipat-based bioinformatics company providing scientific rigour, transparency, and collaborative research support for life sciences across India.",
  openGraph: {
    title: "About BioAIguru",
    description: "Learn about our mission, values, and expertise in bioinformatics and computational biology.",
    url: "/about",
  },
};

const values = [
  {
    title: "Scientific Rigour",
    description: "Every analysis follows established best practices with thorough documentation and reproducible workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "Clear communication at every step. You will always know what we are doing and why.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "We work as an extension of your team, understanding your goals and adapting to your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Continuously exploring new methods and technologies to deliver better results for your research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const expertise = [
  "Next-Generation Sequencing (NGS)",
  "RNA-Seq & Transcriptomics",
  "Whole Genome Sequencing",
  "Metagenomics & Microbiome",
  "Variant Calling & Annotation",
  "Pathway & Network Analysis",
  "Machine Learning for Biology",
  "Custom Pipeline Development",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Advancing Life Sciences Through Data
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              BioAIguru is a bioinformatics company based in Bangalore, India. We help 
              researchers and life sciences organisations transform complex biological 
              data into meaningful discoveries.
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Making Bioinformatics Accessible
              </h2>
              <div className="space-y-4 text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                <p>
                  We believe that advanced computational analysis should not be a barrier 
                  to scientific discovery. Our mission is to provide world-class bioinformatics 
                  services that are accessible, affordable, and tailored to the Indian research ecosystem.
                </p>
                <p>
                  Whether you are a PhD student working on your thesis, a startup developing 
                  the next breakthrough therapy, or an established research institution, we are 
                  here to help you make sense of your data.
                </p>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-3xl p-8 lg:p-12">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-6xl lg:text-7xl font-display font-bold text-primary-300 dark:text-primary-700 mb-4">
                    &ldquo;
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-display text-primary-700 dark:text-primary-200 leading-relaxed">
                    Data is the new language of biology. We help you speak it fluently.
                  </blockquote>
                </div>
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-tl-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              What Guides Our Work
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              These principles shape how we approach every project and every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative p-8 bg-white dark:bg-primary-800 rounded-2xl border border-primary-100 dark:border-primary-700"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-600 dark:bg-primary-700 text-white flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                  {value.description}
                </p>
                {/* Number decoration */}
                <div className="absolute top-4 right-4 text-6xl font-display font-bold text-primary-100 dark:text-primary-700/50">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-primary-800 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-400 mb-4">
                Our Expertise
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
                Technical Capabilities
              </h2>
              <p className="text-lg text-primary-200 leading-relaxed mb-8">
                Our team brings deep expertise across the full spectrum of computational 
                biology and bioinformatics, from classical sequence analysis to cutting-edge 
                machine learning applications.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-800 bg-white hover:bg-primary-50 rounded-xl transition-colors"
              >
                Explore Our Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-primary-700/50 rounded-xl border border-primary-600/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-400 flex items-center justify-center text-sm font-mono flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm text-primary-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* India Focus Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 p-8 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase text-accent-600 dark:text-accent-400 mb-4">
                  Built in India
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                  For the Indian Research Ecosystem
                </h2>
                <div className="space-y-4 text-primary-600 dark:text-primary-300 leading-relaxed">
                  <p>
                    We understand the unique challenges and opportunities in the Indian life 
                    sciences landscape. From navigating funding constraints to meeting 
                    publication timelines, we have been there.
                  </p>
                  <p>
                    Our pricing is designed for Indian research budgets, our communication 
                    is in your timezone, and we understand the institutional context you work in.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-sm">
                  <div className="text-3xl font-display font-bold text-primary-700 dark:text-primary-300 mb-2">IST</div>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Timezone Aligned</p>
                </div>
                <div className="p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-sm">
                  <div className="text-3xl font-display font-bold text-primary-700 dark:text-primary-300 mb-2">INR</div>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Local Pricing</p>
                </div>
                <div className="p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-sm">
                  <div className="text-3xl font-display font-bold text-accent-500 mb-2">UGC</div>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Grant Compatible</p>
                </div>
                <div className="p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-sm">
                  <div className="text-3xl font-display font-bold text-accent-500 mb-2">24h</div>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Quick Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-10">
              Let us discuss how we can help you achieve your research goals. 
              We would love to learn about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 dark:text-primary-200 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 rounded-xl transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
