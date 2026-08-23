import { labProjects } from "./labs";
import { products } from "./products";
import { selectedWork } from "./work";

export type RelatedItem = {
  id: string;
  name: string;
  summary: string;
  href: string;
  kind: "Product" | "Selected Work" | "Labs";
  categories: string[];
  technologies: string[];
};

const relationIndex: RelatedItem[] = [
  ...products.map((product) => ({
    id: `product:${product.slug}`,
    name: product.name,
    summary: product.summary,
    href: `/products/${product.slug}`,
    kind: "Product" as const,
    categories: [...product.categories, product.industry],
    technologies: product.technologies,
  })),
  ...selectedWork.map((project) => ({
    id: `work:${project.slug}`,
    name: project.name,
    summary: project.summary,
    href: `/work/${project.slug}`,
    kind: "Selected Work" as const,
    categories: project.categories,
    technologies: project.technologies,
  })),
  ...labProjects.map((project) => ({
    id: `lab:${project.slug}`,
    name: project.name,
    summary: project.summary,
    href: `/labs/${project.slug}`,
    kind: "Labs" as const,
    categories: project.categories,
    technologies: project.technologies,
  })),
];

function relationTokens(item: RelatedItem) {
  return new Set([...item.categories, ...item.technologies].map((token) => token.toLowerCase()));
}

export function getRelatedItems(id: string, limit = 3) {
  const current = relationIndex.find((item) => item.id === id);
  if (!current) return [];
  const currentTokens = relationTokens(current);

  return relationIndex
    .filter((item) => item.id !== id)
    .map((item) => ({
      item,
      score: [...relationTokens(item)].filter((token) => currentTokens.has(token)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .slice(0, limit)
    .map(({ item }) => item);
}
