import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bioinformatics Services",
  description: "Sequence alignment, genome annotation, phylogenetic analysis, and protein structure prediction. Expert bioinformatics services from BioAIguru.",
  keywords: ["bioinformatics", "sequence alignment", "genome annotation", "BLAST", "phylogenetics", "protein structure"],
  openGraph: {
    title: "Bioinformatics Services | BioAIguru",
    description: "Comprehensive bioinformatics services including sequence analysis, genome annotation, and functional analysis.",
    url: "/services/bioinformatics",
  },
};

const features = [
  {
    title: "Sequence Alignment",
    description: "Pairwise and multiple sequence alignments using industry-standard tools like BLAST, Clustal, and MUSCLE.",
  },
  {
    title: "Genome Annotation",
    description: "Comprehensive annotation of genes, regulatory elements, and functional regions.",
  },
  {
    title: "Homology Analysis",
    description: "Identify evolutionary relationships and conserved sequences across species.",
  },
  {
    title: "Phylogenetic Analysis",
    description: "Construct evolutionary trees to understand relationships between sequences.",
  },
  {
    title: "Protein Analysis",
    description: "Structure prediction, domain identification, and functional characterisation.",
  },
  {
    title: "Functional Annotation",
    description: "Gene ontology, pathway mapping, and functional enrichment analysis.",
  },
];

const tools = [
  "BLAST", "HMMER", "Clustal Omega", "MUSCLE", "MAFFT", "RAxML",
  "IQ-TREE", "InterProScan", "Pfam", "UniProt", "KEGG", "GO"
];

const useCases = [
  {
    title: "Gene Discovery",
    description: "Identify novel genes and their functions in your organism of interest.",
  },
  {
    title: "Comparative Analysis",
    description: "Compare sequences across species to understand evolution and function.",
  },
  {
    title: "Protein Characterisation",
    description: "Understand protein structure, domains, and functional properties.",
  },
];

export default function BioinformaticsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="dna-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-pattern)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Bioinformatics</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Bioinformatics Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From sequences to insights. Comprehensive analysis of DNA, RNA, and protein 
              sequences to help you understand your molecular data.
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
              Core Bioinformatics Capabilities
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Our bioinformatics services cover the full spectrum of sequence analysis needs.
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

      {/* Tools Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Tools & Technologies
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Industry-Standard Software
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                We use established, peer-reviewed tools to ensure reliable and reproducible results. 
                Our pipelines are continuously updated with the latest versions and best practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              Applications
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Common Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl text-white"
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-primary-100 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Analyse Your Sequences?
            </h2>
            <p className="text-lg text-primary-200 leading-relaxed mb-10">
              Share your data and research questions with us. We will design the right 
              analysis workflow for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-800 bg-white hover:bg-primary-50 rounded-xl transition-colors"
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
