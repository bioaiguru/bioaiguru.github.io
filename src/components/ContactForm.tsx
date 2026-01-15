"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { value: "bioinformatics", label: "Bioinformatics" },
  { value: "data-analysis", label: "Data Analysis" },
  { value: "genomics", label: "Genomics" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other / Not Sure" },
];

const industries = [
  { value: "pharma", label: "Pharmaceutical" },
  { value: "agriculture", label: "Agriculture" },
  { value: "academia", label: "Academic Research" },
  { value: "healthcare", label: "Healthcare" },
  { value: "biotech", label: "Biotech Startup" },
  { value: "other", label: "Other" },
];

// Web3Forms access key - get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    industry: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // If no Web3Forms key, use mailto fallback
    if (!WEB3FORMS_ACCESS_KEY) {
      const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organisation || "N/A"}\nIndustry: ${formData.industry || "N/A"}\nService: ${formData.service || "N/A"}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:bioaiguru@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry from ${formData.name}${formData.organisation ? ` (${formData.organisation})` : ""}`,
          from_name: "BioAIguru Website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly at bioaiguru@gmail.com");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly at bioaiguru@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-primary-950">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-semibold text-primary-800 dark:text-white mb-4">
            Message Sent!
          </h1>
          <p className="text-primary-600 dark:text-primary-300 mb-8">
            Thank you for reaching out. We will get back to you within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Tell us about your research and data. We will get back to you within 24 hours 
              with how we can help.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-primary-600 dark:text-primary-300 mb-8">
                Fill out the form and we will reach out to discuss your project in detail.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-1">Email</h3>
                    <a href="mailto:bioaiguru@gmail.com" className="text-primary-600 dark:text-primary-300 hover:text-accent-500 transition-colors">
                      bioaiguru@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-1">Phone</h3>
                    <a href="tel:+919466101466" className="text-primary-600 dark:text-primary-300 hover:text-accent-500 transition-colors">
                      +91 94661 01466
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919466101466" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-300 hover:text-accent-500 transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-1">Address</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      MA227 Sector 26, MAPSKO GARDEN ESTATE,<br />
                      Sonipat, Haryana 131001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-800 text-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-primary-600 dark:text-primary-300">
                      Mon-Fri 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-10 pt-8 border-t border-primary-100 dark:border-primary-800">
                <p className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-4">
                  Quick Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919466101466"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href="tel:+919466101466"
                    className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 hover:text-accent-500 hover:bg-primary-200 dark:hover:bg-primary-700 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:bioaiguru@gmail.com"
                    className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 hover:text-accent-500 hover:bg-primary-200 dark:hover:bg-primary-700 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                      placeholder="Dr. Sharma"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                      placeholder="you@institution.edu"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                      placeholder="IISc, AIIMS, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind.value} value={ind.value}>
                          {ind.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                  >
                    <option value="">Select service</option>
                    {services.map((svc) => (
                      <option key={svc.value} value={svc.value}>
                        {svc.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                    placeholder="Describe your data, research questions, and what you hope to achieve..."
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-primary-500 dark:text-primary-400">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 disabled:bg-accent-400 disabled:cursor-not-allowed rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
