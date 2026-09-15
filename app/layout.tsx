import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteName, siteUrl } from "@/lib/metadata";
import "./globals.css";

const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | Charitr" },
  description: "Charitr provides software development, UI/UX design, AI automation and technology consulting.",
  applicationName: "Charitr",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/charitr-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10233F",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    email: "info@charitr.in",
    telephone: "+91 99112 20198",
    areaServed: ["India", "International"],
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    email: "info@charitr.in",
    telephone: "+91 99112 20198",
    description: "Software development, UI/UX design, AI automation and technology consulting.",
    areaServed: ["India", "International"],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
