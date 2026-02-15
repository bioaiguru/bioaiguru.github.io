import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Resource Development Services",
    description: "Custom biological databases, webservers, and bioinformatics tool development services from BioAIguru.",
    keywords: ["resource development", "biological database", "web server", "tool development", "bioinformatics software", "API development"],
    openGraph: {
        title: "Resource Development Services | BioAIguru",
        description: "Build custom research tools, databases, and web platforms to accelerate biological discovery.",
        url: "/services/resource-development",
    },
};

const features = [
    {
        title: "Custom Databases",
        description: "Design and implementation of curated biological databases with robust search and filtering capabilities.",
    },
    {
        title: "Web Portals & Servers",
        description: "Interactive web interfaces for data visualization, analysis tools, and community sharing.",
    },
    {
        title: "Analysis Pipelines",
        description: "Development of automated, scalable, and reproducible bioinformatics workflows (Nextflow, Snakemake).",
    },
    {
        title: "API Development",
        description: "RESTful API design to allow programmatic access to your data and tools.",
    },
    {
        title: "Data Visualization",
        description: "Interactive dashboards and charts (D3.js, Plotly) to explore complex datasets intuitively.",
    },
    {
        title: "Cloud Deployment",
        description: "Deployment and management of resources on cloud platforms (AWS, GCP, Azure) for scalability.",
    },
];

const technologies = [
    "Python (Django/Flask)", "JavaScript/TypeScript (React/Next.js)", "SQL (PostgreSQL/MySQL)",
    "NoSQL (MongoDB)", "Docker", "Nextflow", "D3.js", "AWS/GCP"
];

const useCases = [
    {
        title: "Lab Data Management",
        description: "Centralize and organize your lab's experimental data for easy retrieval and collaboration.",
    },
    {
        title: "Public Resource",
        description: "Publish your research data as a searchable, public web resource for the community.",
    },
    {
        title: "Automated Analysis",
        description: "Streamline your repetitive analysis tasks with custom-built software tools.",
    },
];

export default function ResourceDevelopmentPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-primary-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
                        <defs>
                            <pattern id="server-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <rect x="5" y="5" width="30" height="30" rx="5" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M 10 20 L 30 20" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#server-pattern)" />
                    </svg>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
                    <div className="flex items-center gap-2 text-emerald-200 text-sm mb-6">
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">Resource Development</span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                            Resource Development
                        </h1>
                        <p className="text-xl text-emerald-100 leading-relaxed">
                            Building the infrastructure for discovery. We develop custom databases, web servers,
                            and analysis tools to make biological data accessible and actionable.
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
                            Our Services
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Custom Software Solutions
                        </h2>
                        <p className="text-lg text-primary-600 dark:text-primary-300">
                            Tailored development services to meet the unique needs of your research.
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

            {/* Technologies Section */}
            <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                                Tech Stack
                            </p>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                                Modern & Robust Technologies
                            </h2>
                            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed">
                                We build on proven, modern technology stacks to ensure your resources are
                                secure, scalable, and maintainable.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700"
                                >
                                    {tech}
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
                            Value Check
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Drive Discovery with Better Tools
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
                            Need a Custom Tool?
                        </h2>
                        <p className="text-lg text-primary-200 leading-relaxed mb-10">
                            Let's discuss your requirements. We can take your idea from concept to
                            deployed application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-800 bg-white hover:bg-primary-50 rounded-xl transition-colors"
                            >
                                Start Development
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
