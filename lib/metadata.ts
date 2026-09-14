import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://charitr.in";
export const siteName = "Charitr Consultancy Private Limited";

export function createMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  const canonical = `${siteUrl}${path}`;
  const fullTitle = title === siteName ? title : `${title} | Charitr`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName,
      title: fullTitle,
      description,
      url: canonical,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Charitr software development and digital solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}
