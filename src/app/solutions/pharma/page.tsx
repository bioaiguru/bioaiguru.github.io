import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pharmaceutical Solutions",
  description: "Bioinformatics for drug discovery: target identification, biomarker discovery, clinical genomics, and pharmacogenomics. Expert pharmaceutical services from BioAIguru.",
  keywords: ["pharmaceutical bioinformatics", "drug discovery", "target identification", "biomarker discovery", "pharmacogenomics"],
  openGraph: {
    title: "Pharmaceutical Solutions | BioAIguru",
    description: "Accelerate drug discovery with genomics-driven target identification and biomarker discovery.",
    url: "/solutions/pharma",
  },
};

const applications = [
  {
    title: "Target Identification",
    description: "Use genomics and transcriptomics to identify and validate drug targets.",
  },
  {
    title: "Biomarker Discovery",
    description: "Discover molecular signatures for patient stratification and treatment response.",
  },
  {
    title: "Pharmacogenomics",
    description: "Understand genetic factors affecting drug metabolism and efficacy.",
  },
  {
    title: "Companion Diagnostics",
    description: "Develop genomic tests to guide treatment decisions.",
  },
  {
    title: "Clinical Trial Support",
    description: "Bioinformatics analysis for clinical studies and regulatory submissions.",
  },
  {
    title: "Safety Assessment",
    description: "Toxicogenomics and off-target effect prediction.",
  },
];

const dataTypes = [
  "Whole Genome Sequencing",
  "RNA-Seq / Transcriptomics",
  "Single-cell RNA-Seq",
  "CRISPR Screens",
  "Proteomics",
  "Metabolomics",
];

export default function PharmaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-primary-800 overflow-hidden">
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
          <div className="flex items-center gap-2 text-rose-200 text-sm mb-6">
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white">Pharmaceutical</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Pharmaceutical Solutions
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed">
              Accelerate drug discovery and development with genomics-driven insights, 
              from target identification to clinical biomarkers.
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
              Applications
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              How We Support Pharma R&D
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Bioinformatics solutions across the drug discovery and development pipeline.
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

      {/* Data Types Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Data Expertise
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Data Types We Work With
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                Our team has experience analysing diverse data types commonly generated 
                in pharmaceutical research.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {dataTypes.map((type) => (
                <span
                  key={type}
                  className="px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-rose-500 to-pink-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Accelerate Your Drug Discovery
            </h2>
            <p className="text-lg text-rose-100 leading-relaxed mb-10">
              Partner with us to leverage genomics and bioinformatics in your R&D pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-rose-800 bg-white hover:bg-rose-50 rounded-xl transition-colors"
              >
                Contact Us
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
