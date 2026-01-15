import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BioAIguru terms of service. Terms and conditions governing the use of our bioinformatics services.",
  openGraph: {
    title: "Terms of Service | BioAIguru",
    description: "Terms and conditions governing the use of our bioinformatics services.",
    url: "/terms",
  },
};

export default function TermsPage() {
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
            Terms of Service
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
                Welcome to BioAIguru. These Terms of Service (&quot;Terms&quot;) govern your use of our 
                website and bioinformatics services. By accessing our website or engaging our services, 
                you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                1. Services
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                BioAIguru provides bioinformatics consulting, data analysis, genomics analysis, and 
                related computational biology services. The specific scope, deliverables, timeline, 
                and pricing for each project will be defined in a separate written agreement or 
                statement of work between BioAIguru and the client.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                2. Data and Confidentiality
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                We understand the sensitive nature of research data. We commit to:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1 mb-4">
                <li>Treating all client data as confidential</li>
                <li>Using client data only for the purposes of delivering agreed services</li>
                <li>Implementing appropriate security measures to protect data</li>
                <li>Not disclosing data to third parties without explicit consent</li>
                <li>Returning or deleting client data upon project completion as requested</li>
              </ul>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Clients retain ownership of their data. BioAIguru does not claim any ownership rights 
                over client data or research results.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                <strong className="text-primary-800 dark:text-white">Client IP:</strong> All data, 
                results, and findings derived from client data remain the property of the client.
              </p>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                <strong className="text-primary-800 dark:text-white">BioAIguru IP:</strong> We retain 
                ownership of our proprietary methods, pipelines, software tools, and general know-how 
                developed independently or prior to the engagement.
              </p>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                <strong className="text-primary-800 dark:text-white">Publications:</strong> If you 
                wish to acknowledge BioAIguru in publications, please discuss the appropriate form 
                of acknowledgement with us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                4. Payment Terms
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Payment terms, including amounts, milestones, and due dates, will be specified in 
                the project agreement. Unless otherwise agreed, invoices are payable within 30 days 
                of issue. We reserve the right to suspend work on projects with outstanding payments.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                5. Warranties and Disclaimers
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                We endeavour to provide high-quality services using established bioinformatics methods 
                and best practices. However:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1">
                <li>Bioinformatics analysis involves inherent uncertainties and limitations</li>
                <li>Results are based on the data and information provided by the client</li>
                <li>We cannot guarantee specific research outcomes or discoveries</li>
                <li>Our analysis should be interpreted alongside other evidence</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                To the maximum extent permitted by law, BioAIguru shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of or related to 
                our services. Our total liability shall not exceed the fees paid for the specific 
                services giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                7. Termination
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Either party may terminate a project agreement with written notice. Upon termination, 
                the client shall pay for all work completed and expenses incurred up to the termination 
                date. We will provide all completed deliverables and return client data as requested.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                8. Website Use
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300 space-y-1">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Reproduce or distribute content without permission</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                9. Governing Law
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these Terms or our services shall be subject to the 
                exclusive jurisdiction of the courts in Sonipat, Haryana.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We may update these Terms from time to time. Continued use of our website or services 
                after changes are posted constitutes acceptance of the modified Terms. We encourage 
                you to review these Terms periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                11. Contact
              </h2>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
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
