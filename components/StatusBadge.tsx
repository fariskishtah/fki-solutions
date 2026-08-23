import type { ProductStatus } from "@/data/products";

export function StatusBadge({ status }: { status: ProductStatus }) {
  const tone = status === "Live / Beta" ? "live" : status === "In Development" ? "development" : "research";
  return <span className={`status-badge status-${tone}`}><i aria-hidden="true" />{status}</span>;
}
