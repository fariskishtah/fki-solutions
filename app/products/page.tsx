import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore AI-powered products from FK Solutions across legal, manufacturing, and hospitality workflows.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products / 01—03" title={<>Built for the work <em>behind the work.</em></>} copy="Focused software products designed around real operational systems, complex information, and consequential decisions." />
      <section className="section-shell catalogue-section">
        <div className="catalogue-tools"><span>Product catalogue</span><div><button className="filter-active">All</button><button>Live / Beta</button><button>In Development</button><button>Research</button></div></div>
        <div className="products-grid catalogue-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <div className="catalogue-note"><span>More in development</span><p>New products and experiments will appear here as they move through the FK Labs pipeline.</p></div>
      </section>
      <div className="section-shell"><CTASection title="Looking for a specific kind of solution?" copy="Tell us where the workflow breaks down. We’ll explore what a focused system could change." /></div>
    </main>
  );
}
