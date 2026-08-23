import { labProjects } from "./labs";
import { products } from "./products";
import { services } from "./services";
import { selectedWork } from "./work";

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "Product" | "Selected Work" | "Labs" | "Service";
  keywords: string[];
};

export const searchIndex: SearchItem[] = [
  ...products.map((product) => ({
    id: `product:${product.slug}`,
    title: product.name,
    description: product.summary,
    href: `/products/${product.slug}`,
    type: "Product" as const,
    keywords: [product.industry, product.status, ...product.categories, ...product.technologies, ...product.capabilities],
  })),
  ...selectedWork.map((project) => ({
    id: `work:${project.slug}`,
    title: project.name,
    description: project.summary,
    href: `/work/${project.slug}`,
    type: "Selected Work" as const,
    keywords: [project.status, project.category, ...project.categories, ...project.technologies],
  })),
  ...labProjects.map((project) => ({
    id: `lab:${project.slug}`,
    title: project.name,
    description: project.summary,
    href: `/labs/${project.slug}`,
    type: "Labs" as const,
    keywords: [project.status, project.category, ...project.categories, ...project.technologies],
  })),
  ...services.map((service) => ({
    id: `service:${service.slug}`,
    title: service.name,
    description: service.summary,
    href: `/services#${service.slug}`,
    type: "Service" as const,
    keywords: [...service.categories, ...service.capabilities],
  })),
];
