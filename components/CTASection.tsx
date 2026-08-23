import Link from "next/link";
import { siteConfig, type CTAConfig } from "@/data/site";

export function CTASection({
  eyebrow = siteConfig.defaultCTA.eyebrow,
  title = siteConfig.defaultCTA.title,
  copy = siteConfig.defaultCTA.copy,
  label = siteConfig.defaultCTA.label,
  href = siteConfig.defaultCTA.href,
}: Partial<CTAConfig>) {
  return (
    <section className="cta-band">
      <div className="cta-grid" aria-hidden="true" />
      <div className="cta-copy">
        <span className="section-kicker">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button button-primary" href={href}>{label} <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
