import type { Metadata } from "next";
import Link from "next/link";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { getBulkRNAContent } from "@/lib/content";

export const metadata: Metadata = {
    title: "Bulk RNA-seq Analysis Services",
    description: "End-to-end bulk RNA-seq analysis from raw reads to biological insights. Differential expression, pathway analysis, and publication-ready visualizations.",
    keywords: ["bulk RNA-seq", "differential expression", "DESeq2", "pathway analysis", "gene expression"],
    openGraph: {
        title: "Bulk RNA-seq Analysis | BioAIguru",
        description: "Comprehensive transcriptome profiling and differential expression analysis services.",
        url: "/services/omics/transcriptomics/bulk-rna",
    },
};

export default async function BulkRNAPage() {
    const content = await getBulkRNAContent();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 via-teal-600 to-primary-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
                        <defs>
                            <pattern id="data-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#data-pattern)" />
                    </svg>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-purple-200 text-sm mb-6 flex-wrap">
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <Link href="/services/omics" className="hover:text-white transition-colors">Omics</Link>
                        <span>/</span>
                        <Link href="/services/omics/transcriptomics" className="hover:text-white transition-colors">Transcriptomics</Link>
                        <span>/</span>
                        <span className="text-white">Bulk RNA-seq</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>
                            </div>

                            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl text-purple-100 leading-relaxed mb-8">
                                {content.hero.subtitle}
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-purple-800 bg-white hover:bg-purple-50 rounded-xl transition-colors"
                            >
                                Get Started
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {content.hero.stats.map((stat: any, index: number) => (
                                <div key={index} className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-purple-200">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
            </section>

            {/* Overview Section */}
            <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                                What We Do
                            </p>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-6">
                                Comprehensive RNA-seq Analysis
                            </h2>
                            <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-8">
                                {content.overview.whatWeDo}
                            </p>

                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-primary-700 dark:text-primary-400 mb-3">
                                    When to Use Bulk RNA-seq:
                                </p>
                                {content.overview.whenToUse.map((use: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-primary-700 dark:text-primary-300">{use}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
                            <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-6">
                                📦 Deliverables
                            </h3>
                            <ul className="space-y-3">
                                {content.overview.deliverables.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-accent-500 font-bold">•</span>
                                        <span className="text-primary-700 dark:text-primary-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                            Our Process
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Bulk RNA-seq Analysis Workflow
                        </h2>
                        <p className="text-lg text-primary-600 dark:text-primary-300">
                            From raw reads to biological insights in 6 comprehensive steps. Click on any step to view details.
                        </p>
                    </div>

                    <WorkflowDiagram steps={content.workflow.steps} />
                </div>
            </section>

            {/* Best Practices Section */}
            <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl mb-16">
                        <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                            Best Practices
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Ensuring High-Quality Results
                        </h2>
                        <p className="text-lg text-primary-600 dark:text-primary-300">
                            We follow industry best practices to ensure your RNA-seq data is analyzed with the highest rigor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.bestPractices.map((practice: any, index: number) => (
                            <div
                                key={index}
                                className="p-8 bg-primary-50 dark:bg-primary-900 rounded-2xl border border-primary-100 dark:border-primary-800"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-lg font-bold mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                                    {practice.title}
                                </h3>
                                <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
                                    {practice.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                            Applications
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Real-World Use Cases
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {content.useCases.map((useCase: any, index: number) => (
                            <div
                                key={index}
                                className="p-8 bg-white dark:bg-primary-800 rounded-2xl border border-primary-100 dark:border-primary-700"
                            >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {useCase.tags.map((tag: string, tagIndex: number) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium text-accent-700 dark:text-accent-300 bg-accent-50 dark:bg-accent-900/30 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-primary-600 dark:text-primary-400 leading-relaxed mb-4">
                                    {useCase.description}
                                </p>
                                <div className="text-sm text-primary-500 dark:text-primary-500">
                                    Sector: <span className="font-semibold capitalize">{useCase.sector}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Timeline Section */}
            <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="p-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900/30 rounded-3xl border border-primary-200 dark:border-primary-700">
                        <h3 className="text-2xl font-semibold text-primary-800 dark:text-white mb-6">
                            💰 Pricing & Timeline
                        </h3>
                        <p className="text-primary-700 dark:text-primary-300 mb-4 leading-relaxed">
                            {content.pricing.note}
                        </p>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                            <span className="font-semibold">Estimated Timeline:</span> {content.pricing.estimatedTimeline}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-600 via-teal-600 to-primary-700 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
                            {content.cta.title}
                        </h2>
                        <p className="text-lg text-purple-100 leading-relaxed mb-10">
                            {content.cta.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={content.cta.primaryButton.link}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-purple-800 bg-white hover:bg-purple-50 rounded-xl transition-colors"
                            >
                                {content.cta.primaryButton.text}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                            <Link
                                href={content.cta.secondaryButton.link}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-colors"
                            >
                                {content.cta.secondaryButton.text}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
