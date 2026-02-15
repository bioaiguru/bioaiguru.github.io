"use client";

import { useState } from "react";

interface WorkflowStep {
    number: number;
    title: string;
    description: string;
    tools: string[];
    duration?: string;
    outputs?: string[];
}

interface WorkflowDiagramProps {
    steps: WorkflowStep[];
}

export default function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    return (
        <div className="relative">
            {/* Desktop: Horizontal Flow */}
            <div className="hidden lg:block">
                <div className="flex items-start justify-between gap-4">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex-1 flex flex-col items-center">
                            {/* Step Node */}
                            <button
                                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                                className="group relative w-full"
                            >
                                {/* Node Box */}
                                <div className={`
                  relative p-6 rounded-2xl border-2 transition-all duration-300
                  ${expandedStep === index
                                        ? 'bg-gradient-to-br from-accent-500 to-primary-600 border-accent-500 shadow-xl shadow-accent-500/25'
                                        : 'bg-white dark:bg-primary-900 border-primary-200 dark:border-primary-700 hover:border-accent-400 hover:shadow-lg'
                                    }
                `}>
                                    {/* Step Number */}
                                    <div className={`
                    absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${expandedStep === index
                                            ? 'bg-white text-accent-600'
                                            : 'bg-gradient-to-br from-accent-500 to-accent-600 text-white'
                                        }
                  `}>
                                        {step.number}
                                    </div>

                                    {/* Content */}
                                    <h4 className={`
                    text-sm font-semibold mb-2 mt-2
                    ${expandedStep === index ? 'text-white' : 'text-primary-800 dark:text-white'}
                  `}>
                                        {step.title}
                                    </h4>

                                    {step.duration && (
                                        <p className={`
                      text-xs mb-2
                      ${expandedStep === index ? 'text-white/80' : 'text-primary-500 dark:text-primary-400'}
                    `}>
                                            ⏱️ {step.duration}
                                        </p>
                                    )}

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-1 mt-3">
                                        {step.tools.slice(0, 2).map((tool, idx) => (
                                            <span
                                                key={idx}
                                                className={`
                          px-2 py-1 text-xs rounded-md font-medium
                          ${expandedStep === index
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300'
                                                    }
                        `}
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                        {step.tools.length > 2 && (
                                            <span className={`
                        px-2 py-1 text-xs rounded-md
                        ${expandedStep === index ? 'text-white/70' : 'text-primary-500'}
                      `}>
                                                +{step.tools.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Arrow (except last) */}
                                {index < steps.length - 1 && (
                                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                                        <svg className="w-8 h-8 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Expanded Details */}
                            {expandedStep === index && (
                                <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-800 rounded-xl border border-primary-200 dark:border-primary-700 w-full animate-[fadeIn_0.3s_ease-in]">
                                    <p className="text-sm text-primary-700 dark:text-primary-300 mb-3">
                                        {step.description}
                                    </p>

                                    {step.outputs && step.outputs.length > 0 && (
                                        <div>
                                            <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                                                📊 Outputs:
                                            </p>
                                            <ul className="text-xs text-primary-600 dark:text-primary-400 space-y-1">
                                                {step.outputs.map((output, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-accent-500">•</span>
                                                        <span>{output}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile: Vertical Flow */}
            <div className="lg:hidden space-y-4">
                {steps.map((step, index) => (
                    <div key={step.number}>
                        <button
                            onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                            className="w-full"
                        >
                            <div className={`
                relative p-6 rounded-2xl border-2 transition-all
                ${expandedStep === index
                                    ? 'bg-gradient-to-br from-accent-500 to-primary-600 border-accent-500 shadow-xl'
                                    : 'bg-white dark:bg-primary-900 border-primary-200 dark:border-primary-700'
                                }
              `}>
                                <div className={`
                  absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                  ${expandedStep === index ? 'bg-white text-accent-600' : 'bg-gradient-to-br from-accent-500 to-accent-600 text-white'}
                `}>
                                    {step.number}
                                </div>

                                <h4 className={`text-base font-semibold mb-2 mt-2 ${expandedStep === index ? 'text-white' : 'text-primary-800 dark:text-white'}`}>
                                    {step.title}
                                </h4>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {step.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                        px-2 py-1 text-xs rounded-md font-medium
                        ${expandedStep === index ? 'bg-white/20 text-white' : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300'}
                      `}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {expandedStep === index && (
                                    <div className="mt-4 pt-4 border-t border-white/20">
                                        <p className="text-sm text-white/90 mb-3">{step.description}</p>
                                        {step.outputs && (
                                            <div>
                                                <p className="text-xs font-semibold text-white/80 mb-2">📊 Outputs:</p>
                                                <ul className="text-xs text-white/80 space-y-1">
                                                    {step.outputs.map((output, idx) => (
                                                        <li key={idx}>• {output}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </button>

                        {/* Arrow down (except last) */}
                        {index < steps.length - 1 && (
                            <div className="flex justify-center py-2">
                                <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
