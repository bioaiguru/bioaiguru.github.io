import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BioAIguru for your bioinformatics project. We respond within 24 hours. Based in Sonipat, Haryana, serving clients across India.",
  openGraph: {
    title: "Contact BioAIguru",
    description: "Start your bioinformatics project. Tell us about your research and data.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
