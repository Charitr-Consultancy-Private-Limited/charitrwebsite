import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://charitr.in";
export const siteName = "Charitr Consultancy Private Limited";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: `/${string}`): string {
  return `${basePath}${path}`;
}

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
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Charitr — digital products built for practical progress" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}
