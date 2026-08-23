import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const origin = "https://fk-solutions.aiarabic362.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryRoutes = ["", "/products", "/services", "/labs", "/about", "/contact"];
  return [
    ...primaryRoutes.map((route) => ({ url: `${origin}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${origin}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
