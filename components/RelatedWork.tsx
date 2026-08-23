import Link from "next/link";
import type { RelatedItem } from "@/data/relations";

export function RelatedWork({ items }: { items: RelatedItem[] }) {
  if (!items.length) return null;
  return (
    <section className="section-shell related-section">
      <div className="section-row"><div><span className="section-kicker">Related work</span><h2>Connected by technology and domain.</h2></div><p>Generated automatically from shared categories and technology tags.</p></div>
      <div className="related-grid">
        {items.map((item) => <article key={item.id}><span>{item.kind}</span><h3>{item.name}</h3><p>{item.summary}</p><Link className="text-link" href={item.href}>Explore <span aria-hidden="true">↗</span></Link></article>)}
      </div>
    </section>
  );
}
