import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/packages",
    "/case-studies",
    "/blogs",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const contentRoutes: MetadataRoute.Sitemap = [
    ...caseStudies.map((c) => ({
      url: `${siteConfig.url}/case-studies/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${siteConfig.url}/blogs/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...routes, ...serviceRoutes, ...contentRoutes];
}
