import Link from "next/link";

interface ServiceCardProps {
    service: {
        id: string;
        name: string;
        slug: string;
        description: string;
        features: string[];
        useCases?: string[];
        solutionsSectors?: string[];
    };
    basePath: string;
}

export default function ServiceCard({ service, basePath }: ServiceCardProps) {
    return (
        <Link
            href={`${basePath}/${service.slug}`}
            className="group relative p-8 bg-white dark:bg-primary-900 rounded-2xl border border-primary-100 dark:border-primary-800 hover:border-accent-500 dark:hover:border-accent-500 transition-all hover:shadow-2xl hover:shadow-accent-500/10 overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
                {/* Icon/Visual */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-primary-800 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {service.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-800 rounded-full"
                        >
                            {feature}
                        </span>
                    ))}
                    {service.features.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-primary-500 dark:text-primary-400">
                            +{service.features.length - 3} more
                        </span>
                    )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
