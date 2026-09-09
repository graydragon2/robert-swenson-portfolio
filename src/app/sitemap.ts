import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/infrastructure",
    "/about",
    "/resume",
    "/contact",
  ];

  const projectRoutes = projects.map((p) => `/projects/${p.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
