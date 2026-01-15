import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BioAIguru privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | BioAIguru",
    description: "Learn how we collect, use, and protect your personal information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-200">
            Last updated: January 2026
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Content */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-custom space-y-8">
            <div>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                BioAIguru (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                We may collect information about you in various ways:
              </p>
              <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">
                Personal Data
              </h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                When you contact us, request our services, or subscribe to our newsletter, we may collect:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1 mb-4">
                <li>Name and job title</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Organisation name</li>
                <li>Information about your research or project</li>
              </ul>
              <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">
                Usage Data
              </h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We may automatically collect certain information when you visit our website, including your 
                IP address, browser type, operating system, referring URLs, and pages viewed. This information 
                helps us understand how visitors use our website and improve our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1">
                <li>Respond to your enquiries and provide customer support</li>
                <li>Deliver the services you have requested</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Data Security
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal 
                information against unauthorised access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We may use third-party services such as analytics providers and email marketing platforms. 
                These services may collect information sent by your browser as part of a web page request, 
                such as cookies or your IP address. We encourage you to review the privacy policies of 
                any third-party services you interact with.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Cookies
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Our website may use cookies to enhance your browsing experience. Cookies are small files 
                stored on your device that help us remember your preferences and understand how you use 
                our website. You can configure your browser to refuse cookies, but some features of our 
                website may not function properly without them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Your Rights
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                Under applicable data protection laws, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request transfer of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Data Retention
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfil the purposes 
                for which we collected it, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
                <a href="mailto:bioaiguru@gmail.com" className="text-accent-500 hover:text-accent-600">
                  bioaiguru@gmail.com
                </a>.
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-primary-100 dark:border-primary-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
