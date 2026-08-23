import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { labProjects } from "@/data/labs";
import { siteUrl } from "@/data/site";
import { selectedWork } from "@/data/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryRoutes = ["", "/products", "/work", "/services", "/labs", "/about", "/contact"];
  return [
    ...primaryRoutes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${siteUrl}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...selectedWork.map((project) => ({ url: `${siteUrl}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.65 })),
    ...labProjects.map((project) => ({ url: `${siteUrl}/labs/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
