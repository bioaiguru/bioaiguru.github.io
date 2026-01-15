import Link from "next/link";

const services = [
  { name: "Bioinformatics", href: "/services/bioinformatics" },
  { name: "Data Analysis", href: "/services/data-analysis" },
  { name: "Genomics", href: "/services/genomics" },
  { name: "Consulting", href: "/services/consulting" },
];

const solutions = [
  { name: "Pharmaceutical", href: "/solutions/pharma" },
  { name: "Agriculture", href: "/solutions/agriculture" },
  { name: "Academic Research", href: "/solutions/academia" },
  { name: "Healthcare", href: "/solutions/healthcare" },
  { name: "Biotech Startups", href: "/solutions/biotech-startups" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 dark:bg-primary-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
          <path
            d="M0 300 Q 200 150, 400 300 T 800 300 T 1200 300"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M0 300 Q 200 450, 400 300 T 800 300 T 1200 300"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600" />

      {/* Newsletter/CTA Section */}
      <div className="relative border-b border-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-primary-300">
                Get the latest insights on bioinformatics, AI in life sciences, and industry news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-72 px-5 py-3 rounded-xl bg-primary-800 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                />
              </div>
              <button className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-accent-500/25 active:scale-[0.98]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column - Takes 2 cols on large */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2-3 3-5 3m10 0c-2 0-3.5-1-5-3m0 0v18m0 0c1.5-2 3-3 5-3m-10 0c2 0 3.5 1 5 3M7 9h10M7 15h10" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-500 rounded-full border-2 border-primary-900" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  BioAI<span className="text-accent-400">guru</span>
                </span>
              </div>
            </Link>

            <p className="text-primary-300 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering life sciences research with advanced computational analysis 
              and AI-driven insights. Built in India, for India.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href="https://wa.me/919466101466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-600 hover:bg-green-500 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="tel:+919466101466"
                className="w-10 h-10 rounded-lg bg-primary-800 hover:bg-primary-700 flex items-center justify-center text-primary-400 hover:text-accent-400 transition-colors"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <a
                href="mailto:bioaiguru@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary-800 hover:bg-primary-700 flex items-center justify-center text-primary-400 hover:text-accent-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:bioaiguru@gmail.com" 
                  className="flex items-center gap-3 text-sm text-primary-300 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary-800 group-hover:bg-primary-700 flex items-center justify-center text-accent-400 flex-shrink-0 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  bioaiguru@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919466101466" 
                  className="flex items-center gap-3 text-sm text-primary-300 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary-800 group-hover:bg-primary-700 flex items-center justify-center text-accent-400 flex-shrink-0 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  +91 94661 01466
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <span className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center text-accent-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span>
                  Sonipat, Haryana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-400">
              © {currentYear} BioAIguru. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {legal.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-primary-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/5 rounded-tl-full pointer-events-none" />
    </footer>
  );
}
