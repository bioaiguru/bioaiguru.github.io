import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bioaiguru.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BioAIguru | Bioinformatics Services in India",
    template: "%s | BioAIguru",
  },
  description: "BioAIguru provides bioinformatics, genomics, and data analysis services for pharma, healthcare, agriculture, and academic research across India.",
  keywords: ["bioinformatics", "genomics", "data analysis", "life sciences", "India", "biotech", "NGS", "RNA-Seq", "Haryana"],
  authors: [{ name: "BioAIguru" }],
  creator: "BioAIguru",
  publisher: "BioAIguru",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "BioAIguru",
    title: "BioAIguru | Bioinformatics Services in India",
    description: "Bioinformatics, genomics, and data analysis services for pharma, healthcare, agriculture, and academic research across India.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "BioAIguru - Bioinformatics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioAIguru | Bioinformatics Services in India",
    description: "Bioinformatics, genomics, and data analysis services for pharma, healthcare, agriculture, and academic research across India.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
