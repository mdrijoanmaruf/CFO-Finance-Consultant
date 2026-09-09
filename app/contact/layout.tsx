import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Request a CFO Consultation",
  description:
    "Get in touch with MD. Al Amin Bhuiyan to discuss your business challenges. Request a consultation for fractional CFO advisory, governance review, or strategic financial assessment.",
  keywords: [
    "Hire a CFO consultant",
    "Contact MD Al Amin Bhuiyan",
    "Financial advisory consultation Bangladesh",
    "Fractional CFO contact",
  ],
  alternates: {
    canonical: "https://al-amin-pi.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
