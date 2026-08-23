import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryRoutes = ["", "/products", "/services", "/labs", "/about", "/contact"];
  return [
    ...primaryRoutes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${siteUrl}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
