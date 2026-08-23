import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ProductVisual } from "@/components/ProductVisual";
import { StatusBadge } from "@/components/StatusBadge";
import { getProduct, products } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    openGraph: { title: `${product.name} — FK Solutions`, description: product.summary, images: [] },
    twitter: { card: "summary", title: `${product.name} — FK Solutions`, description: product.summary, images: [] },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main>
      <section className="product-detail-hero">
        <div className="detail-hero-copy">
          <Link className="back-link" href="/products">← All products</Link>
          <div className="detail-meta"><span>{product.industry}</span><StatusBadge status={product.status} /></div>
          <h1>{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <p className="detail-summary">{product.summary}</p>
          <Link className="button button-primary" href={product.cta.href}>{product.cta.label} <span aria-hidden="true">↗</span></Link>
        </div>
        <ProductVisual index={product.index} accent={product.accent} />
      </section>

      <section className="section-shell problem-solution-grid">
        <article><span className="section-kicker">The problem</span><h2>Complexity hides the signal.</h2><p>{product.problem}</p></article>
        <article><span className="section-kicker">The solution</span><h2>A system built around the work.</h2><p>{product.solution}</p></article>
      </section>

      <section className="detail-dark-section">
        <div className="section-shell detail-capabilities">
          <div><span className="section-kicker">Core capabilities</span><h2>Focused tools for a connected workflow.</h2></div>
          <div className="capability-detail-grid">{product.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><p>{capability}</p></div>)}</div>
        </div>
      </section>

      <section className="section-shell workflow-section">
        <div className="section-row"><div><span className="section-kicker">How it works</span><h2>From raw context to useful action.</h2></div><p>A simple system view. Specific workflows will continue to evolve with the product.</p></div>
        <div className="workflow-grid">{product.workflow.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </section>

      <section className="section-shell technology-section">
        <div><span className="section-kicker">Architecture / Technology</span><h2>High-level technical foundations.</h2><p className="architecture-note">A credibility-focused overview without exposing private infrastructure or security-sensitive implementation details.</p></div>
        <div className="technology-list">{product.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </section>

      <section className="preview-section">
        <div className="section-shell">
          <div className="section-row"><div><span className="section-kicker">Product preview</span><h2>Interface &amp; media</h2></div><span className="demo-label">Coming soon</span></div>
          <div className={`media-empty-state accent-${product.accent}`}><div className="media-radar" aria-hidden="true"><i /><i /><i /></div><div><span>Preview material in preparation</span><p>Verified screenshots, product video, demos, and case-study links can be added here through the product data model when they are ready for public release.</p></div></div>
        </div>
      </section>

      <section className="section-shell status-section"><span className="section-kicker">Current status</span><div><StatusBadge status={product.status} /><p>{product.currentStatus}</p></div></section>
      <section className="section-shell roadmap-section"><div><span className="section-kicker">Roadmap</span><h2>Measured progress toward wider use.</h2></div><div>{product.roadmap.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
      <div className="section-shell"><CTASection eyebrow="Interested in this product?" title={`Explore ${product.name}.`} copy="Start a conversation about access, collaboration, or the problem this product is designed to solve." label={product.cta.label} href={product.cta.href} /></div>
    </main>
  );
}
