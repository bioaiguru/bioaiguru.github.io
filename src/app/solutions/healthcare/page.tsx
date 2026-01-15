import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Solutions",
  description: "Clinical genomics services: variant interpretation, oncology genomics, pharmacogenomics, and diagnostic support. Expert healthcare bioinformatics from BioAIguru.",
  keywords: ["clinical genomics", "oncology genomics", "pharmacogenomics", "variant interpretation", "precision medicine"],
  openGraph: {
    title: "Healthcare Solutions | BioAIguru",
    description: "Clinical genomics and precision medicine support for healthcare providers.",
    url: "/solutions/healthcare",
  },
};

const applications = [
  {
    title: "Clinical Variant Interpretation",
    description: "Expert analysis of genomic variants for clinical decision-making.",
  },
  {
    title: "Oncology Genomics",
    description: "Tumour profiling, mutation analysis, and therapy matching.",
  },
  {
    title: "Rare Disease Diagnosis",
    description: "Whole exome and genome analysis for undiagnosed patients.",
  },
  {
    title: "Diagnostic Panel Analysis",
    description: "Analysis of targeted gene panels for clinical testing.",
  },
  {
    title: "Pharmacogenomics",
    description: "Genetic testing to guide medication selection and dosing.",
  },
  {
    title: "Infectious Disease Genomics",
    description: "Pathogen identification and antimicrobial resistance profiling.",
  },
];

const compliance = [
  "ACMG/AMP guidelines",
  "Quality-controlled workflows",
  "Audit trails",
  "Secure data handling",
  "Reproducible analysis",
  "Clinical-grade reporting",
];

export default function HealthcarePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 via-rose-600 to-primary-800 overflow-hidden">
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
          <div className="flex items-center gap-2 text-red-200 text-sm mb-6">
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white">Healthcare</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Healthcare Solutions
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Clinical genomics support for hospitals, diagnostic laboratories, and 
              healthcare providers. Rigorous analysis for patient care.
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
              Clinical Applications
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Genomics for Patient Care
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Clinical-grade bioinformatics analysis to support diagnostic and therapeutic decisions.
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

      {/* Compliance Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Quality & Compliance
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Clinical-Grade Standards
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                Our clinical workflows follow established guidelines and best practices 
                for healthcare genomics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-primary-800 rounded-xl border border-primary-100 dark:border-primary-700"
                >
                  <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-sm text-primary-700 dark:text-primary-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-500 to-rose-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Partner for Clinical Excellence
            </h2>
            <p className="text-lg text-red-100 leading-relaxed mb-10">
              Bring genomics into your clinical practice with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-red-800 bg-white hover:bg-red-50 rounded-xl transition-colors"
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
