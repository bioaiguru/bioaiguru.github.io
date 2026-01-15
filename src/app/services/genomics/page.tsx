import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Genomics Services",
  description: "Genome assembly, variant calling, structural variant detection, and comparative genomics. Expert genomics analysis from BioAIguru.",
  keywords: ["genomics", "genome assembly", "variant calling", "NGS", "whole genome sequencing", "structural variants"],
  openGraph: {
    title: "Genomics Services | BioAIguru",
    description: "Comprehensive genomics services from assembly to variant interpretation.",
    url: "/services/genomics",
  },
};

const features = [
  {
    title: "Genome Assembly",
    description: "De novo and reference-guided assembly from short and long-read sequencing data.",
  },
  {
    title: "Variant Calling",
    description: "Detect SNPs, indels, and small variants with high sensitivity and specificity.",
  },
  {
    title: "Structural Variants",
    description: "Identify large deletions, insertions, inversions, and translocations.",
  },
  {
    title: "Copy Number Analysis",
    description: "Detect copy number variations and aneuploidies across the genome.",
  },
  {
    title: "Comparative Genomics",
    description: "Compare genomes across species or strains to identify evolutionary changes.",
  },
  {
    title: "Population Genetics",
    description: "Analyse genetic variation within and between populations.",
  },
];

const applications = [
  { name: "Whole Genome Sequencing", desc: "Complete genome analysis" },
  { name: "Exome Sequencing", desc: "Coding region focus" },
  { name: "Targeted Panels", desc: "Gene panel analysis" },
  { name: "Metagenomics", desc: "Community genomics" },
  { name: "Resequencing", desc: "Variant discovery" },
  { name: "De Novo Assembly", desc: "Novel genome assembly" },
];

export default function GenomicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="helix" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40 Q 20 20, 40 40 T 80 40" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M0 40 Q 20 60, 40 40 T 80 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#helix)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Genomics</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Genomics Services
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Decoding genomes. End-to-end genome analysis from raw reads to annotated 
              assemblies and actionable variant interpretation.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Comprehensive Genomics Analysis
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              From assembly to annotation, variant calling to population analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-8 bg-primary-50 dark:bg-primary-900 rounded-2xl border border-primary-100 dark:border-primary-800"
              >
                <div className="absolute top-4 right-4 text-4xl font-display font-bold text-primary-100 dark:text-primary-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Applications
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Diverse Sequencing Applications
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                Whether you are sequencing a new genome for the first time or looking for 
                disease-causing variants, we have the expertise to help.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {applications.map((app) => (
                <div
                  key={app.name}
                  className="p-5 bg-white dark:bg-primary-800 rounded-xl border border-primary-100 dark:border-primary-700"
                >
                  <h3 className="font-semibold text-primary-800 dark:text-white mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Decode Your Genome?
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed mb-10">
              From raw FASTQ files to publication-ready results, we handle the entire 
              genomics analysis workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-purple-800 bg-white hover:bg-purple-50 rounded-xl transition-colors"
              >
                Get a Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
