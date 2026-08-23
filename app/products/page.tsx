import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

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
        <ProductExplorer products={products} />
        <div className="catalogue-note"><span>Clear product boundary</span><p>Research and engineering portfolio work is documented in FK Labs without being presented as commercial FK Solutions products.</p></div>
      </section>
      <div className="section-shell"><CTASection {...siteConfig.servicesCTA} /></div>
    </main>
  );
}
