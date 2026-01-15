import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join BioAIguru and help shape the future of bioinformatics in India. View current openings and learn about working with us.",
  openGraph: {
    title: "Careers at BioAIguru",
    description: "Join us and help shape the future of bioinformatics in India.",
    url: "/careers",
  },
};

const openings = [
  {
    id: "bioinformatics-analyst",
    title: "Bioinformatics Analyst",
    type: "Full-time",
    location: "Sonipat / Remote",
    description: "Analyse NGS data, develop analysis pipelines, and work directly with clients on their research projects.",
    requirements: [
      "MSc/PhD in Bioinformatics, Computational Biology, or related field",
      "Experience with NGS data analysis (RNA-Seq, WGS, etc.)",
      "Proficiency in Python or R",
      "Familiarity with Linux command line",
      "Strong communication skills",
    ],
    nice: [
      "Experience with cloud computing (AWS, GCP)",
      "Knowledge of workflow managers (Nextflow, Snakemake)",
      "Publication track record",
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist - Life Sciences",
    type: "Full-time",
    location: "Sonipat / Remote",
    description: "Apply machine learning and statistical methods to solve complex biological problems.",
    requirements: [
      "MSc/PhD in Data Science, Statistics, or Computational Biology",
      "Strong statistical background",
      "Experience with Python (pandas, scikit-learn, PyTorch)",
      "Understanding of biological systems and data",
      "Ability to communicate technical concepts to non-experts",
    ],
    nice: [
      "Experience with single-cell analysis",
      "Knowledge of deep learning frameworks",
      "Familiarity with biological databases",
    ],
  },
];

const values = [
  {
    title: "Scientific Excellence",
    description: "We maintain high standards of scientific rigour and stay current with the latest research and methodologies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Remote-Friendly",
    description: "Work from anywhere in India. We believe in flexibility and trust our team to deliver great work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description: "Access to courses, conferences, and time for personal development. Stay sharp and grow your skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Meaningful Impact",
    description: "Work on projects that matter - from drug discovery to crop improvement to clinical diagnostics.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-200 mb-4">
              Careers
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Help us build the future of bioinformatics in India. We&apos;re looking for curious, 
              passionate people who want to make a real impact in life sciences research.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Why Join Us */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-semibold text-primary-800 dark:text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-primary-600 dark:text-primary-300">
              We&apos;re a small but growing team. Here&apos;s what you can expect when you join.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-900"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-primary-50 dark:bg-primary-900 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-semibold text-primary-800 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-primary-600 dark:text-primary-300">
              Current opportunities to join our team.
            </p>
          </div>

          {openings.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-primary-950 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-400 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                No Open Positions
              </h3>
              <p className="text-primary-600 dark:text-primary-300 max-w-md mx-auto">
                We don&apos;t have any open positions right now, but we&apos;re always interested in hearing 
                from talented people. Send us your CV at{" "}
                <a href="mailto:bioaiguru@gmail.com" className="text-accent-500 hover:text-accent-600">
                  bioaiguru@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {openings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-primary-950 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary-800 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-300">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-300">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:bioaiguru@gmail.com?subject=Application: ${job.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors flex-shrink-0"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-primary-600 dark:text-primary-300 mb-6">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary-600 dark:text-primary-300">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white mb-3">
                        Nice to Have
                      </h4>
                      <ul className="space-y-2">
                        {job.nice.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary-600 dark:text-primary-300">
                            <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* General Application */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
            Don&apos;t See a Fit?
          </h2>
          <p className="text-primary-600 dark:text-primary-300 mb-8">
            We&apos;re always interested in connecting with talented people. Send us your CV and 
            tell us about yourself - we might create a role that&apos;s perfect for you.
          </p>
          <a
            href="mailto:bioaiguru@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-700 hover:bg-primary-800 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
}
