import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting Services",
  description: "Experimental design, pipeline architecture, training, and bioinformatics strategy consulting. Expert guidance from BioAIguru.",
  keywords: ["bioinformatics consulting", "experimental design", "pipeline development", "training", "research strategy"],
  openGraph: {
    title: "Consulting Services | BioAIguru",
    description: "Expert bioinformatics consulting for experimental design, pipeline development, and research strategy.",
    url: "/services/consulting",
  },
};

const features = [
  {
    title: "Experimental Design",
    description: "Help you design experiments that will generate meaningful, analysable data.",
  },
  {
    title: "Pipeline Architecture",
    description: "Design and implement custom analysis pipelines tailored to your needs.",
  },
  {
    title: "Tool Selection",
    description: "Navigate the landscape of bioinformatics tools to choose the right ones.",
  },
  {
    title: "Training & Workshops",
    description: "Upskill your team with hands-on training in bioinformatics methods.",
  },
  {
    title: "Grant Support",
    description: "Help write the computational sections of your research proposals.",
  },
  {
    title: "Publication Support",
    description: "Assistance with methods sections, figures, and reviewer responses.",
  },
];

const scenarios = [
  {
    title: "Starting a New Project",
    description: "Get expert input on experimental design and analysis strategy before generating data.",
    icon: "M12 4.5v15m7.5-7.5h-15",
  },
  {
    title: "Stuck with Analysis",
    description: "When your analysis is not giving expected results or you need a fresh perspective.",
    icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
  },
  {
    title: "Building Capacity",
    description: "Train your team to handle routine bioinformatics tasks independently.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="consult-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect x="24" y="24" width="2" height="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#consult-pattern)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-2 text-amber-200 text-sm mb-6">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Consulting</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Consulting Services
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Expert guidance. Strategic advice on research design, data strategy, and 
              computational infrastructure for your projects.
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
              How We Can Help
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Expert Bioinformatics Guidance
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              Sometimes you need advice more than analysis. We are here to help.
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

      {/* When to Consult Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
              When to Reach Out
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Common Consulting Scenarios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="p-8 bg-white dark:bg-primary-800 rounded-2xl border border-primary-100 dark:border-primary-700"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={scenario.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {scenario.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-lg text-amber-100 leading-relaxed mb-10">
              Book a consultation to discuss your research challenges and how we can help 
              you overcome them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-amber-800 bg-white hover:bg-amber-50 rounded-xl transition-colors"
              >
                Book a Consultation
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
