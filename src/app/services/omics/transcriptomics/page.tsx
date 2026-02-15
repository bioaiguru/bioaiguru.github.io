import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { getTranscriptomicsContent } from "@/lib/content";

export const metadata: Metadata = {
    title: "Transcriptomics Services",
    description: "Comprehensive transcriptome analysis services including bulk RNA-seq, single-cell RNA-seq, spatial transcriptomics, and small RNA profiling.",
    keywords: ["transcriptomics", "RNA-seq", "gene expression", "single-cell", "spatial transcriptomics"],
    openGraph: {
        title: "Transcriptomics Services | BioAIguru",
        description: "Decode gene expression patterns with state-of-the-art RNA sequencing analysis.",
        url: "/services/omics/transcriptomics",
    },
};

export default async function TranscriptomicsPage() {
    const content = await getTranscriptomicsContent();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-primary-800 overflow-hidden">
                {/* RNA Strand Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
                        <defs>
                            <pattern id="rna-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="1.5" />
                                <circle cx="0" cy="50" r="3" fill="white" />
                                <circle cx="50" cy="50" r="3" fill="white" />
                                <circle cx="100" cy="50" r="3" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#rna-pattern)" />
                    </svg>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-purple-200 text-sm mb-6">
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <Link href="/services/omics" className="hover:text-white transition-colors">Omics</Link>
                        <span>/</span>
                        <span className="text-white">Transcriptomics</span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-8">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                            {content.hero.title}
                        </h1>
                        <p className="text-xl text-purple-100 leading-relaxed">
                            {content.hero.subtitle}
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
            </section>

            {/* Services Grid */}
            <section className="bg-white dark:bg-primary-950 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl mb-16">
                        <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                            Our Capabilities
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Comprehensive Transcriptomics Solutions
                        </h2>
                        <p className="text-lg text-primary-600 dark:text-primary-300">
                            {content.description}
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {content.services.map((service: any) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                basePath="/services/omics/transcriptomics"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-primary-50 dark:bg-primary-900 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm font-semibold tracking-wider uppercase text-accent-500 mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
                            Expert Transcriptomics Analysis
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.whyChooseUs.map((reason: string, index: number) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-primary-800 rounded-2xl border border-primary-100 dark:border-primary-700"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                                    {index + 1}
                                </div>
                                <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                                    {reason}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
                            Ready to Decode Your Transcriptome?
                        </h2>
                        <p className="text-lg text-purple-100 leading-relaxed mb-10">
                            Get in touch with our transcriptomics experts to discuss your project. We offer free consultations to help design the optimal analysis strategy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-purple-800 bg-white hover:bg-purple-50 rounded-xl transition-colors"
                            >
                                Request a Quote
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/services/omics"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-colors"
                            >
                                View All Omics Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
