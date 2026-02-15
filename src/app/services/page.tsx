import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Bioinformatics, data analysis, genomics, and consulting services for life sciences research. Expert computational biology support from BioAIguru.",
  openGraph: {
    title: "Our Services | BioAIguru",
    description: "Comprehensive bioinformatics, data analysis, genomics, and consulting services for life sciences research.",
    url: "/services",
  },
};

const services = [
  {
    id: "omics",
    title: "Omics",
    tagline: "Genomics, Transcriptomics & Proteomics",
    description: "Comprehensive analysis for genomics, transcriptomics, proteomics, and multi-omics data to uncover biological insights.",
    features: [
      "Genome Assembly",
      "Differential Expression",
      "Variant Calling",
      "Pathway Enrichment",
      "Single-cell Analysis",
      "Metagenomics",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: "from-blue-500 to-primary-600",
  },
  {
    id: "data-and-ml",
    title: "Data and ML",
    tagline: "AI models & Statistical analysis",
    description: "Advanced machine learning models and statistical frameworks to interpret complex biological datasets and predict outcomes.",
    features: [
      "Predictive Modeling",
      "Deep Learning",
      "Survival Analysis",
      "Clustering & PCA",
      "Biomarker Discovery",
      "Image Analysis",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "resource-development",
    title: "Resource Development",
    tagline: "Webservers, Databases & Tools",
    description: "Custom development of biological databases, web servers, and analysis tools to make your data accessible and actionable.",
    features: [
      "Custom Databases",
      "Web Portals",
      "Analysis Pipelines",
      "Cloud Deployment",
      "API Development",
      "Data Visualization Tools",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "consulting",
    title: "Consultation",
    tagline: "Experiment design & Grant writing",
    description: "Expert scientific consulting to guide your research strategy, experimental design, and funding applications.",
    features: [
      "Experimental Design",
      "Grant Proposal Support",
      "Manuscript Preparation",
      "Bioinformatics Training",
      "Project Feasibility",
      "Technology Selection",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your research goals, data types, and expected outcomes.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Design the optimal analysis workflow with clear milestones and deliverables.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Rigorous analysis with quality control and regular progress updates.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Comprehensive reports with visualisations and actionable insights.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-4">
              Our Services
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Comprehensive Bioinformatics Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From raw sequencing data to publication-ready results, we provide end-to-end
              computational biology services tailored to your research needs.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative p-8 lg:p-10 bg-primary-50 dark:bg-primary-900 rounded-3xl border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all hover:shadow-xl overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Number decoration */}
                <div className="absolute top-6 right-6 text-7xl font-display font-bold text-primary-100 dark:text-primary-800 group-hover:text-primary-200 dark:group-hover:text-primary-700 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-2">
                      {service.tagline}
                    </p>
                    <h3 className="text-2xl font-semibold text-primary-800 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-primary-800 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-primary-500 dark:text-primary-400">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary-800 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-400 mb-4">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-primary-200">
              A systematic approach focused on delivering quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary-600 to-primary-700" />
                )}

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white text-xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Data We Work With
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                All Major Sequencing Platforms
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-8">
                We have experience with data from all major sequencing platforms and can
                handle diverse data types and formats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Illumina", desc: "Short-read sequencing" },
                { name: "Oxford Nanopore", desc: "Long-read sequencing" },
                { name: "PacBio", desc: "HiFi sequencing" },
                { name: "Ion Torrent", desc: "Semiconductor sequencing" },
                { name: "BGI/MGI", desc: "DNBSEQ technology" },
                { name: "10x Genomics", desc: "Single-cell & spatial" },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="p-5 bg-primary-50 dark:bg-primary-900 rounded-xl border border-primary-100 dark:border-primary-800"
                >
                  <h3 className="font-semibold text-primary-800 dark:text-white mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400">
                    {platform.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-10">
              Tell us about your data and research goals. We will help you figure out
              the best approach for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
            >
              Discuss Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
