import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://al-amin-pi.vercel.app"),
  title: {
    default: "MD. Al Amin Bhuiyan – CFO & Corporate Finance Consultant",
    template: "%s | MD. Al Amin Bhuiyan",
  },
  description:
    "MD. Al Amin Bhuiyan is an accomplished CFO and finance consultant in Bangladesh offering Fractional CFO, Corporate Governance, and Treasury Advisory services.",
  keywords: [
    "CFO Consultant Bangladesh",
    "Fractional CFO",
    "Corporate Governance Expert",
    "Financial Management",
    "Treasury Advisory",
    "MD Al Amin Bhuiyan",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://al-amin-pi.vercel.app",
    title: "MD. Al Amin Bhuiyan – CFO & Corporate Finance Consultant",
    description:
      "Accomplished CFO and finance consultant offering strategic advisory, governance, and financial management services in Bangladesh.",
    siteName: "MD. Al Amin Bhuiyan",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Al Amin Bhuiyan – CFO & Corporate Finance Consultant",
    description:
      "Accomplished CFO and finance consultant offering strategic advisory, governance, and financial management services in Bangladesh.",
    creator: "@placeholder",
  },
  alternates: {
    canonical: "https://al-amin-pi.vercel.app",
  },
};

import AuthProvider from "@/Components/Providers/AuthProvider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://al-amin-pi.vercel.app/#person",
        name: "MD. Al Amin Bhuiyan",
        jobTitle: "CFO & Corporate Finance Consultant",
        url: "https://al-amin-pi.vercel.app",
        sameAs: [
          "https://www.linkedin.com/in/md-al-amin-bhuiyan-b8517933/",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://al-amin-pi.vercel.app/#service",
        name: "MD. Al Amin Bhuiyan Finance Consulting",
        url: "https://al-amin-pi.vercel.app",
        description: "Fractional CFO and corporate finance advisory services.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BD",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
