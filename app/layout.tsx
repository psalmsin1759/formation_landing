import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formation Exceptionelle — Empowering Excellence Across Industries",
  description: "The ultimate destination for professionals seeking comprehensive training in law, business, and technical industries. Expert-led courses, real-world case studies, and industry-recognized certifications.",
  keywords: "LMS, legal training, professional development, online courses, certifications, law, business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
