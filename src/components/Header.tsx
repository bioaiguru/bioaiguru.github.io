"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const services = [
  {
    name: "Omics",
    href: "/services/omics",
    description: "Genomics, Transcriptomics & Proteomics",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  },
  {
    name: "Data and ML",
    href: "/services/data-and-ml",
    description: "AI models & Statistical analysis",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    name: "Resource Development",
    href: "/services/resource-development",
    description: "Webservers, Databases & Tools",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  {
    name: "Consultation",
    href: "/services/consulting",
    description: "Experiment design & Grant writing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    )
  },
];

const solutions = [
  { name: "Pharmaceutical", href: "/solutions/pharma", description: "Drug discovery & development" },
  { name: "Agriculture", href: "/solutions/agriculture", description: "Crop genomics & breeding" },
  { name: "Academic Research", href: "/solutions/academia", description: "Research & education support" },
  { name: "Healthcare", href: "/solutions/healthcare", description: "Clinical & diagnostic solutions" },
  { name: "Biotech Startups", href: "/solutions/biotech-startups", description: "End-to-end support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setSolutionsOpen(false);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimeout.current) clearTimeout(solutionsTimeout.current);
    setServicesOpen(false);
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeout.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/95 dark:bg-primary-950/95 backdrop-blur-md shadow-sm shadow-primary-200/50 dark:shadow-primary-900/50"
          : "bg-transparent"
        }`}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Logo mark */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                {/* DNA helix icon */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2-3 3-5 3m10 0c-2 0-3.5-1-5-3m0 0v18m0 0c1.5-2 3-3 5-3m-10 0c2 0 3.5 1 5 3M7 9h10M7 15h10" />
                </svg>
              </div>
              {/* Accent dot */}
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-500 rounded-full border-2 border-white dark:border-primary-950" />
            </div>

            {/* Logo text */}
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-primary-800 dark:text-white leading-none">
                BioAI<span className="text-accent-500">guru</span>
              </span>
              <span className="text-[10px] font-medium text-primary-500 dark:text-primary-400 tracking-widest uppercase">
                Bioinformatics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <Link
              href="/"
              className="relative px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group"
            >
              Home
              <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {/* Services Mega Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="w-[480px] rounded-2xl bg-white dark:bg-primary-900 shadow-2xl shadow-primary-900/10 dark:shadow-black/30 border border-primary-100 dark:border-primary-800 overflow-hidden">
                  {/* Header */}
                  <div className="px-6 py-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-800 dark:to-primary-800 border-b border-primary-100 dark:border-primary-700">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                      Our Services
                    </h3>
                  </div>

                  {/* Services Grid */}
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors group/item"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-700 text-primary-600 dark:text-primary-300 flex items-center justify-center group-hover/item:bg-primary-600 group-hover/item:text-white dark:group-hover/item:bg-accent-500 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-primary-800 dark:text-white group-hover/item:text-primary-900 dark:group-hover/item:text-white">
                            {item.name}
                          </span>
                          <span className="block text-xs text-primary-500 dark:text-primary-400 mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-primary-50 dark:bg-primary-800/50 border-t border-primary-100 dark:border-primary-700">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                    >
                      View all services
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group">
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {/* Solutions Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="w-72 rounded-2xl bg-white dark:bg-primary-900 shadow-2xl shadow-primary-900/10 dark:shadow-black/30 border border-primary-100 dark:border-primary-800 overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-3 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-800 dark:to-primary-800 border-b border-primary-100 dark:border-primary-700">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                      Industry Solutions
                    </h3>
                  </div>

                  {/* Solutions List */}
                  <div className="p-2">
                    {solutions.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors group/item"
                      >
                        <div>
                          <span className="block text-sm font-medium text-primary-800 dark:text-white group-hover/item:text-primary-900 dark:group-hover/item:text-white">
                            {item.name}
                          </span>
                          <span className="block text-xs text-primary-500 dark:text-primary-400">
                            {item.description}
                          </span>
                        </div>
                        <svg
                          className="w-4 h-4 text-primary-300 dark:text-primary-600 group-hover/item:text-accent-500 group-hover/item:translate-x-0.5 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="relative px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group"
            >
              About
              <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <Link
              href="/blog"
              className="relative px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group"
            >
              Blog
              <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <Link
              href="/contact"
              className="relative px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-white transition-colors group"
            >
              Contact
              <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25 active:scale-[0.98]"
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden relative w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-800 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 border-t border-primary-100 dark:border-primary-800">
            <div className="space-y-1">
              <Link
                href="/"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                >
                  Services
                  <svg
                    className={`h-5 w-5 text-primary-400 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-4 py-2 space-y-1">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-primary-800 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-700 flex items-center justify-center text-primary-500 dark:text-primary-400">
                          {item.icon}
                        </span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                >
                  Solutions
                  <svg
                    className={`h-5 w-5 text-primary-400 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${solutionsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-4 py-2 space-y-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-primary-800 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/blog"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-primary-800 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
