import Link from "next/link";

export function CTASection({
  eyebrow = "Start a conversation",
  title = "Have a problem worth solving?",
  copy = "Let’s explore how software and AI can turn it into a scalable product.",
  label = "Work with us",
  href = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  label?: string;
  href?: string;
}) {
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
