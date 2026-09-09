import { MetadataRoute } from "next";
import { articles } from "@/Components/Insights/insightsData";

const BASE_URL = "https://al-amin-pi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/achievements",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const dynamicRoutes = articles.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
