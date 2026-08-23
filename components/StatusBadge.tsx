import type { ProductStatus } from "@/data/products";

export function StatusBadge({ status }: { status: ProductStatus }) {
  const tone = status === "Controlled Pilot / Beta" ? "live" : "development";
  return <span className={`status-badge status-${tone}`}><i aria-hidden="true" />{status}</span>;
}
