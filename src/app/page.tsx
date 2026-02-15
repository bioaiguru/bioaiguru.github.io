import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BioAIguru | Bioinformatics Services in India",
  description: "Expert bioinformatics, genomics, and data analysis services for life sciences research. Based in Sonipat, serving pharma, healthcare, agriculture, and academia across India.",
  openGraph: {
    title: "BioAIguru | Bioinformatics Services in India",
    description: "Expert bioinformatics, genomics, and data analysis services for life sciences research across India.",
    url: "/",
  },
};

const services = [
  {
    title: "Bioinformatics",
    description: "Sequence analysis, genome annotation, and biological data interpretation for your research",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    href: "/services/bioinformatics",
  },
  {
    title: "Data Analysis",
    description: "Statistical modelling and machine learning to extract meaningful patterns from complex datasets",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    href: "/services/data-analysis",
  },
  {
    title: "Genomics",
    description: "End-to-end genome sequencing, assembly, and variant analysis with publication-ready outputs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    href: "/services/genomics",
  },
  {
    title: "Consulting",
    description: "Expert guidance on research design, data strategy, and computational infrastructure",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    href: "/services/consulting",
  },
];

const industries = [
  {
    name: "Pharmaceutical",
    description: "Drug discovery and development",
    href: "/solutions/pharma",
  },
  {
    name: "Agriculture",
    description: "Crop genomics and breeding",
    href: "/solutions/agriculture",
  },
  {
    name: "Academic Research",
    description: "Publications and grants",
    href: "/solutions/academia",
  },
  {
    name: "Healthcare",
    description: "Clinical diagnostics",
    href: "/solutions/healthcare",
  },
  {
    name: "Biotech Startups",
    description: "End-to-end support",
    href: "/solutions/biotech-startups",
  },
];

const capabilities = [
  "NGS Data Processing",
  "Transcriptomics",
  "Metagenomics",
  "Variant Calling",
  "Pathway Analysis",
  "Custom Pipelines",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with Yale Blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
        
        {/* DNA Helix Pattern - Subtle background element */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
            {/* Double helix curves */}
            <path
              d="M-100 400 Q 150 200, 400 400 T 900 400 T 1400 400"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M-100 400 Q 150 600, 400 400 T 900 400 T 1400 400"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            {/* Connecting rungs */}
            {[...Array(30)].map((_, i) => (
              <line
                key={i}
                x1={-50 + i * 50}
                y1="350"
                x2={-50 + i * 50}
                y2="450"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>

        {/* Accent decoration */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-accent-500 opacity-20 rounded-tr-full" />
        <div className="absolute top-20 right-10 w-4 h-4 bg-accent-400 rounded-full opacity-60" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-accent-300 rounded-full opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Main Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium text-primary-100">
                  Bioinformatics Services from India
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6">
                Bioinformatics Made
                <span className="block text-accent-300 mt-2">Simple & Accessible</span>
              </h1>

              <p className="text-lg lg:text-xl text-primary-100 max-w-xl mb-10 leading-relaxed">
                Skip the technical hurdles and stay focused on your research. We deliver reliable, 
                high-quality analysis and dedicated support to help you reach your next milestone without the headache.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-primary-700 bg-white hover:bg-primary-50 rounded-lg transition-all hover:shadow-lg"
                >
                  Discuss Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3.5 text-base font-medium text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-all"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-3 text-primary-200 font-medium tracking-wide text-sm sm:text-base">
                <span>Understand</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 opacity-60" />
                <span>Analyse</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 opacity-60" />
                <span>Deliver</span>
              </div>
            </div>

            {/* Right Panel - Capabilities */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-6">
                  What We Do
                </h3>
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div
                      key={capability}
                      className="flex items-center group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-accent-300 text-sm font-mono mr-4 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span className="text-white text-base group-hover:text-accent-200 transition-colors">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-primary-200">
                    Building an AI platform for natural language data analysis.
                    <span className="text-accent-300 font-medium ml-1">Coming soon.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-3">
              Our Services
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Comprehensive Bioinformatics Solutions
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
              From raw sequencing data to publication-ready results, we provide end-to-end 
              computational biology services tailored to your research needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative p-8 rounded-2xl bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all hover:shadow-lg"
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-600 dark:bg-primary-700 text-white flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-primary-800 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-100 transition-colors">
                        {service.title}
                      </h3>
                      <svg
                        className="w-5 h-5 text-primary-300 dark:text-primary-600 group-hover:text-accent-500 group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-3">
                Industries We Serve
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Tailored Solutions for Every Sector
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-10">
                We understand that each industry has unique challenges and regulatory requirements. 
                Our team brings domain expertise to deliver solutions that truly fit your needs.
              </p>

              <div className="grid gap-4">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-primary-800 border border-primary-100 dark:border-primary-700 hover:border-accent-300 dark:hover:border-accent-500 transition-all hover:shadow-md"
                  >
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-primary-500 dark:text-primary-400">
                        {industry.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-primary-300 dark:text-primary-600 group-hover:text-accent-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Visual Panel */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 opacity-90" />
                
                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
                    Built in India
                  </h3>
                  <p className="text-primary-100 text-sm lg:text-base leading-relaxed">
                    Deep understanding of local research ecosystem, institutions, and regulatory landscape
                  </p>
                </div>

                {/* Accent decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-tl-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-primary-800 dark:bg-primary-900 py-24 lg:py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-primary-200 leading-relaxed">
              A collaborative approach focused on understanding your research goals 
              and delivering results that advance your science.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="text-7xl font-display font-bold text-primary-700 dark:text-primary-800 mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">Understand</h3>
              <p className="text-primary-300 leading-relaxed">
                We begin with a detailed discussion of your research questions, data characteristics, 
                and desired outcomes to design the optimal approach.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-primary-600 to-primary-700" />
            </div>

            <div className="relative">
              <div className="text-7xl font-display font-bold text-primary-700 dark:text-primary-800 mb-4">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analyse</h3>
              <p className="text-primary-300 leading-relaxed">
                Our team applies rigorous computational methods with thorough quality control, 
                keeping you informed throughout the process.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-primary-600 to-primary-700" />
            </div>

            <div>
              <div className="text-7xl font-display font-bold text-accent-500/50 mb-4">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">Deliver</h3>
              <p className="text-primary-300 leading-relaxed">
                You receive comprehensive reports with clear visualisations, interpreted results, 
                and actionable insights ready for publication or decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 p-8 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/20 rounded-full blur-2xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/30 mb-6">
                  <span className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                  Analyse Data with Natural Language
                </h2>
                <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-8">
                  We are building an AI-powered platform that lets you query and analyse 
                  biological data using plain language. No coding required - just ask questions 
                  and get insights.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Natural Language Queries", "Automated Pipelines", "Interactive Visualisations", "Export Ready Results"].map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 bg-white dark:bg-primary-700 rounded-lg shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl p-6 border border-primary-200 dark:border-primary-700">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent-400" />
                    <div className="w-3 h-3 rounded-full bg-primary-300" />
                    <div className="w-3 h-3 rounded-full bg-primary-200" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900 text-sm text-primary-600 dark:text-primary-400 font-mono">
                      &quot;Show me differentially expressed genes in treatment vs control&quot;
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-500">
                      <svg className="w-4 h-4 text-accent-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Processing your query...
                    </div>
                  </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-10">
              Whether you have a specific analysis in mind or want to explore how bioinformatics 
              can accelerate your research, we would be glad to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 dark:text-primary-200 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 rounded-xl transition-all hover:shadow-md"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
