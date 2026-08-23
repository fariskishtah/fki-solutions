import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore FK Solutions products for legal intelligence and enterprise manufacturing workflows.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products / 01—02" title={<>Built for the work <em>behind the work.</em></>} copy="Commercial product directions built around consequential workflows. Engineering projects and experiments remain clearly separated in FK Labs." />
      <section className="section-shell catalogue-section">
        <div className="catalogue-tools"><span>Product catalogue</span><div className="status-key"><span><i className="key-pilot" />Controlled Pilot / Beta</span><span><i className="key-development" />In Development</span></div></div>
        <div className="products-grid catalogue-grid products-grid-featured">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <div className="catalogue-note"><span>Clear product boundary</span><p>Research and engineering portfolio work is documented in FK Labs without being presented as commercial FK Solutions products.</p></div>
      </section>
      <div className="section-shell"><CTASection title="Looking for a specific kind of solution?" copy="Tell us where the workflow breaks down. We’ll explore what a focused system could change." /></div>
    </main>
  );
}
