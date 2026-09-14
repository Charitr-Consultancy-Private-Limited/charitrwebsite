import type { MetadataRoute } from "next";
import { capabilities, caseStudies } from "@/data/site";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/capabilities", "/solutions", "/work", "/contact", "/privacy-policy", "/cookie-policy", "/terms-of-use"];
  const routes = [
    ...staticRoutes,
    ...capabilities.map((item) => `/capabilities/${item.slug}`),
    ...caseStudies.map((item) => `/work/${item.slug}`),
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("privacy") || route.includes("cookie") || route.includes("terms") ? 0.3 : 0.7,
  }));
}
