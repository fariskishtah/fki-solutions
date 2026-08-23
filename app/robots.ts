import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://fk-solutions.aiarabic362.chatgpt.site/sitemap.xml",
  };
}
