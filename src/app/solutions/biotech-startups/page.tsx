import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biotech Startup Solutions",
  description: "Bioinformatics for biotech startups: rapid prototyping, scalable pipelines, outsourced R&D, and investor-ready analysis. Expert startup support from BioAIguru.",
  keywords: ["biotech startup", "bioinformatics startup", "pipeline development", "R&D outsourcing", "investor pitch"],
  openGraph: {
    title: "Biotech Startup Solutions | BioAIguru",
    description: "Agile bioinformatics support to help your biotech startup move fast and scale.",
    url: "/solutions/biotech-startups",
  },
};

const applications = [
  {
    title: "Rapid Prototyping",
    description: "Quick analysis to validate hypotheses and inform product decisions.",
  },
  {
    title: "Scalable Pipelines",
    description: "Build production-ready analysis pipelines that grow with your company.",
  },
  {
    title: "Investor Materials",
    description: "Generate compelling data visualisations and analyses for fundraising.",
  },
  {
    title: "Regulatory Support",
    description: "Documentation and analysis to support regulatory submissions.",
  },
  {
    title: "Platform Development",
    description: "Help build bioinformatics components for your product.",
  },
  {
    title: "Ongoing Partnership",
    description: "Flexible engagement models that adapt to your growth stage.",
  },
];

const benefits = [
  { title: "No Hiring Overhead", description: "Access expertise without building a team" },
  { title: "Flexible Engagement", description: "Scale up or down as needed" },
  { title: "Fast Turnaround", description: "Move quickly to meet milestones" },
  { title: "Startup-Friendly", description: "We understand your constraints" },
];

export default function BiotechStartupsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-primary-800 overflow-hidden">
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
          <div className="flex items-center gap-2 text-violet-200 text-sm mb-6">
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white">Biotech Startups</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Biotech Startups
            </h1>
            <p className="text-xl text-violet-100 leading-relaxed">
              Flexible bioinformatics partnership for early-stage companies. Get expert 
              analysis without building an in-house team.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Applications Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              How We Help Startups
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Your Bioinformatics Partner
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              From seed stage to Series A and beyond, we provide the computational 
              expertise you need at each stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="relative p-8 bg-primary-50 dark:bg-primary-900 rounded-2xl border border-primary-100 dark:border-primary-800"
              >
                <div className="absolute top-4 right-4 text-4xl font-display font-bold text-primary-100 dark:text-primary-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {app.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              Why Partner With Us
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Built for Startups
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white dark:bg-primary-800 rounded-2xl border border-primary-100 dark:border-primary-700 text-center"
              >
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-violet-500 to-purple-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Move Fast With Confidence
            </h2>
            <p className="text-lg text-violet-100 leading-relaxed mb-10">
              Get the bioinformatics expertise you need to hit your milestones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-violet-800 bg-white hover:bg-violet-50 rounded-xl transition-colors"
              >
                Let&apos;s Talk
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
