"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { FilterControls } from "./FilterControls";
import { ProductCard } from "./ProductCard";

function statusLabel(product: Product) {
  return product.status.includes("Beta") ? "Beta" : product.status;
}

export function ProductExplorer({ products }: { products: Product[] }) {
  const options = useMemo(() => ["All", ...new Set(products.map(statusLabel))], [products]);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((product) => statusLabel(product) === active);

  return (
    <div className="interactive-catalogue">
      <div className="catalogue-tools">
        <span>{filtered.length} {filtered.length === 1 ? "product" : "products"}</span>
        <FilterControls label="Filter products by status" options={options} active={active} onChange={setActive} />
      </div>
      <div className="products-grid catalogue-grid products-grid-featured filtered-grid" aria-live="polite">
        {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </div>
  );
}
