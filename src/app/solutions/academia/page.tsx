import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Research Solutions",
  description: "Bioinformatics support for academic research: thesis projects, grant applications, publication-ready analysis, and collaborative research. Expert academic services from BioAIguru.",
  keywords: ["academic bioinformatics", "thesis support", "grant applications", "research collaboration", "publication support"],
  openGraph: {
    title: "Academic Research Solutions | BioAIguru",
    description: "Supporting researchers with thesis projects, grant applications, and publication-ready analysis.",
    url: "/solutions/academia",
  },
};

const applications = [
  {
    title: "Thesis Projects",
    description: "End-to-end support for PhD and Masters students with their bioinformatics needs.",
  },
  {
    title: "Grant Applications",
    description: "Help writing the computational sections of research proposals.",
  },
  {
    title: "Publication Support",
    description: "Analysis, figures, and methods writing for peer-reviewed publications.",
  },
  {
    title: "Collaborative Research",
    description: "Partner with research groups on long-term collaborative projects.",
  },
  {
    title: "Training Workshops",
    description: "Customised training sessions for lab groups and departments.",
  },
  {
    title: "Pipeline Development",
    description: "Build reproducible analysis pipelines for your research group.",
  },
];

const benefits = [
  { title: "Affordable", description: "Pricing designed for academic budgets" },
  { title: "Flexible", description: "Work with grants and institutional timelines" },
  { title: "Rigorous", description: "Publication-quality analysis and documentation" },
  { title: "Supportive", description: "Patient guidance for students and early-career researchers" },
];

export default function AcademiaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-primary-800 overflow-hidden">
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
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white">Academic Research</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Academic Research
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Supporting researchers from PhD students to Principal Investigators with 
              publication-quality analysis and grant support.
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
              How We Help
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Supporting Academic Research
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              From student projects to large collaborative studies, we provide the computational 
              expertise you need.
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
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Built for Academia
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
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Focus on Your Research
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10">
              Let us handle the bioinformatics while you focus on the science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-800 bg-white hover:bg-blue-50 rounded-xl transition-colors"
              >
                Get in Touch
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
