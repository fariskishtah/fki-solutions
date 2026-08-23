import type { ProductStatus } from "@/data/products";

export function StatusBadge({ status }: { status: ProductStatus }) {
  const tone = status === "In Development" ? "development" : "live";
  return <span className={`status-badge status-${tone}`}><i aria-hidden="true" />{status}</span>;
}
