import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data and ML Services",
  description: "Advanced data analysis, machine learning, and statistical modelling for biological datasets. Expert AI/ML services from BioAIguru.",
  keywords: ["data analysis", "machine learning", "ML", "AI", "statistics", "biological data", "predictive modeling"],
  openGraph: {
    title: "Data and ML Services | BioAIguru",
    description: "Unlock patterns in your biological data with advanced statistical and machine learning approaches.",
    url: "/services/data-and-ml",
  },
};

const features = [
  {
    title: "Statistical Analysis",
    description: "Rigorous statistical methods including hypothesis testing, regression, and multivariate analysis.",
  },
  {
    title: "Differential Expression",
    description: "Identify genes or proteins that are significantly up or down-regulated between conditions.",
  },
  {
    title: "Machine Learning",
    description: "Classification, clustering, and predictive models using state-of-the-art algorithms.",
  },
  {
    title: "Dimensionality Reduction",
    description: "PCA, t-SNE, UMAP, and other techniques to visualise high-dimensional data.",
  },
  {
    title: "Clustering Analysis",
    description: "Group samples or features based on similarity using hierarchical and k-means clustering.",
  },
  {
    title: "Biomarker Discovery",
    description: "Identify potential biomarkers for disease diagnosis, prognosis, or treatment response.",
  },
];

const tools = [
  "R/Bioconductor", "Python/scikit-learn", "DESeq2", "edgeR", "limma",
  "TensorFlow", "XGBoost", "Random Forest", "WGCNA", "Seurat"
];

const dataTypes = [
  { name: "RNA-Seq", description: "Transcriptome analysis" },
  { name: "Proteomics", description: "Protein expression data" },
  { name: "Metabolomics", description: "Metabolite profiles" },
  { name: "Microarray", description: "Gene expression arrays" },
  { name: "Single-cell", description: "scRNA-seq analysis" },
  { name: "Multi-omics", description: "Integrated analysis" },
];

export default function DataAnalysisPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-2 text-emerald-200 text-sm mb-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Data and ML</span>
          </div>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Data and ML Services
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Patterns in complexity. We apply advanced statistical methods and machine learning
              algorithms to interpret your data and predict biological outcomes.
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
              Advanced Analytics Capabilities
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              From basic statistics to sophisticated machine learning models.
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

      {/* Data Types Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Data Types
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                We Analyse All Omics Data
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                Our team has deep experience with diverse biological data types, from
                traditional microarrays to cutting-edge single-cell technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {dataTypes.map((type) => (
                <div
                  key={type.name}
                  className="p-5 bg-white dark:bg-primary-800 rounded-xl border border-primary-100 dark:border-primary-700"
                >
                  <h3 className="font-semibold text-primary-800 dark:text-white mb-1">
                    {type.name}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              Tools & Technologies
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white">
              Powered by Best-in-Class Tools
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900 rounded-lg border border-primary-200 dark:border-primary-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Let Us Analyse Your Data
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed mb-10">
              Whether you need differential expression analysis, machine learning models,
              or custom statistical pipelines, we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-emerald-800 bg-white hover:bg-emerald-50 rounded-xl transition-colors"
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
