import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-inner"><span className="section-kicker">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div>
    </section>
  );
}
