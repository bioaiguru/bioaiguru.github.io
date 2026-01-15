import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Start your bioinformatics project with BioAIguru. Choose from starting a new project or booking a free consultation.",
  openGraph: {
    title: "Get Started with BioAIguru",
    description: "Start your bioinformatics project or book a free consultation with our experts.",
    url: "/get-started",
  },
};

export default function GetStartedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-500 via-accent-600 to-primary-800 overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Ready to Get Started?
            </h1>
            <p className="text-xl text-accent-100 leading-relaxed">
              Choose how you would like to begin your journey with BioAIguru.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      {/* Options Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Start a Project */}
            <div className="relative p-8 lg:p-10 bg-primary-50 dark:bg-primary-900 rounded-3xl border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Start a Project
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-6">
                Have data ready to analyse? Tell us about your project and we will 
                provide a detailed proposal and timeline.
              </p>

              <ul className="space-y-3 mb-8">
                {["Get a custom quote", "Define project scope", "Agree on timeline", "Begin analysis"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-600 dark:text-primary-400">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                Submit Project
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Book a Consultation */}
            <div className="relative p-8 lg:p-10 bg-primary-50 dark:bg-primary-900 rounded-3xl border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Book a Consultation
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-6">
                Not sure what you need? Schedule a free consultation to discuss your 
                research goals and explore options.
              </p>

              <ul className="space-y-3 mb-8">
                {["30-minute call", "Discuss your needs", "Get expert advice", "No commitment"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-600 dark:text-primary-400">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:hover:bg-amber-500/30 rounded-xl transition-colors"
              >
                Schedule Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Explore First */}
          <div className="mt-12 text-center">
            <p className="text-primary-600 dark:text-primary-400 mb-4">
              Want to explore our services first?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
              >
                View Services
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
              >
                Industry Solutions
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 rounded-lg transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
