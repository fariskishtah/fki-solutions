import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductVisual } from "./ProductVisual";
import { StatusBadge } from "./StatusBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <ProductVisual index={product.index} accent={product.accent} compact />
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.industry}</span>
          <StatusBadge status={product.status} />
        </div>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="capability-list compact-list">
          {product.capabilities.slice(0, 3).map((capability) => <span key={capability}>{capability}</span>)}
        </div>
        <Link className="text-link" href={`/products/${product.slug}`}>
          View product <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
