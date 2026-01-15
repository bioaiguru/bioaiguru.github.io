import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agriculture Solutions",
  description: "Agricultural genomics for crop improvement: marker-assisted selection, trait mapping, genome-wide association studies, and pathogen genomics. Expert agriculture bioinformatics from BioAIguru.",
  keywords: ["agricultural genomics", "crop improvement", "marker-assisted selection", "GWAS", "plant genomics", "pathogen genomics"],
  openGraph: {
    title: "Agriculture Solutions | BioAIguru",
    description: "Genomics-driven solutions for crop improvement and agricultural research in India.",
    url: "/solutions/agriculture",
  },
};

const applications = [
  {
    title: "Marker-Assisted Selection",
    description: "Identify and use genetic markers to accelerate breeding programmes.",
  },
  {
    title: "Trait Mapping",
    description: "Discover genes controlling important agronomic traits.",
  },
  {
    title: "Pathogen Detection",
    description: "Molecular identification and tracking of plant pathogens.",
  },
  {
    title: "Biodiversity Analysis",
    description: "Characterise genetic diversity in germplasm collections.",
  },
  {
    title: "Genome Assembly",
    description: "De novo assembly and annotation of crop genomes.",
  },
  {
    title: "Expression Analysis",
    description: "Understand gene expression in response to stress and environment.",
  },
];

const crops = [
  "Rice", "Wheat", "Maize", "Cotton", "Pulses", "Oilseeds",
  "Vegetables", "Fruits", "Sugarcane", "Millets"
];

export default function AgriculturePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-500 via-green-600 to-primary-800 overflow-hidden">
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
          <div className="flex items-center gap-2 text-lime-200 text-sm mb-6">
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white">Agriculture</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Agriculture Solutions
            </h1>
            <p className="text-xl text-lime-100 leading-relaxed">
              Leverage genomics for crop improvement, trait discovery, and sustainable 
              agriculture. Supporting Indian agriculture with cutting-edge bioinformatics.
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
              Applications
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Genomics for Crop Improvement
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300">
              From marker development to genome assembly, supporting the full spectrum of agricultural genomics.
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

      {/* Crops Section */}
      <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                Crop Expertise
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                Crops We Work With
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                Experience with major Indian crops and their genomic resources. We understand 
                the unique challenges of agricultural genomics in the Indian context.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {crops.map((crop) => (
                <span
                  key={crop}
                  className="px-5 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-lime-500 to-green-600 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Advance Your Breeding Programme
            </h2>
            <p className="text-lg text-lime-100 leading-relaxed mb-10">
              Partner with us to bring genomics into your agricultural research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-green-800 bg-white hover:bg-lime-50 rounded-xl transition-colors"
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
