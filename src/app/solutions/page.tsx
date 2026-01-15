import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description: "Industry-specific bioinformatics solutions for pharmaceutical, agriculture, academia, healthcare, and biotech startups. Tailored services from BioAIguru.",
  openGraph: {
    title: "Industry Solutions | BioAIguru",
    description: "Tailored bioinformatics solutions for pharma, agriculture, academia, healthcare, and biotech startups.",
    url: "/solutions",
  },
};

const solutions = [
  {
    id: "pharma",
    title: "Pharmaceutical",
    tagline: "Drug discovery & development",
    description: "Accelerate your drug discovery pipeline with genomics-driven insights, target identification, and biomarker discovery.",
    challenges: [
      "Target identification & validation",
      "Biomarker discovery",
      "Pharmacogenomics",
      "Clinical trial support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    tagline: "Crop genomics & breeding",
    description: "Leverage genomics for crop improvement, trait discovery, and sustainable agriculture solutions.",
    challenges: [
      "Marker-assisted selection",
      "Trait mapping",
      "Pathogen detection",
      "Biodiversity analysis",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: "from-lime-500 to-green-600",
  },
  {
    id: "academia",
    title: "Academic Research",
    tagline: "Publications & grants",
    description: "Supporting researchers from PhD students to PIs with publication-quality analysis and grant support.",
    challenges: [
      "Thesis projects",
      "Grant applications",
      "Publication support",
      "Collaborative research",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    tagline: "Clinical & diagnostics",
    description: "Clinical genomics support for hospitals, diagnostic labs, and healthcare providers.",
    challenges: [
      "Clinical variant interpretation",
      "Diagnostic panel analysis",
      "Oncology genomics",
      "Rare disease analysis",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "from-red-500 to-rose-600",
  },
  {
    id: "biotech-startups",
    title: "Biotech Startups",
    tagline: "End-to-end support",
    description: "Flexible bioinformatics partnership for early-stage companies without in-house computational teams.",
    challenges: [
      "Rapid prototyping",
      "Scalable pipelines",
      "Investor-ready data",
      "Regulatory support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="hex" width="50" height="43.4" patternUnits="userSpaceOnUse">
                <path d="M25 0 L50 14.4 L50 38.4 L25 52.8 L0 38.4 L0 14.4 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-4">
              Industry Solutions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Tailored for Your Industry
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We understand that each sector has unique challenges and requirements. 
              Our solutions are designed to address the specific needs of your industry.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Solutions Grid */}
      <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={solution.id}
                href={`/solutions/${solution.id}`}
                className="group relative grid md:grid-cols-2 gap-8 p-8 lg:p-12 bg-primary-50 dark:bg-primary-900 rounded-3xl border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all hover:shadow-xl overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Number decoration */}
                <div className="absolute top-6 right-6 text-8xl font-display font-bold text-primary-100 dark:text-primary-800 group-hover:text-primary-200 dark:group-hover:text-primary-700 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>

                  <p className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-2">
                    {solution.tagline}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-primary-800 dark:text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Key Challenges */}
                <div className="relative flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-4">
                    Key Applications
                  </p>
                  <div className="space-y-3">
                    {solution.challenges.map((challenge, i) => (
                      <div
                        key={challenge}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-primary-800 rounded-xl border border-primary-100 dark:border-primary-700"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-700 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm font-mono">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <span className="text-primary-700 dark:text-primary-200">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-10">
              We work with organisations across the life sciences spectrum. 
              Get in touch to discuss how we can help with your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
            >
              Contact Us
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
