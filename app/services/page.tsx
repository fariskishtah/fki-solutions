import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Services", description: "AI product development, custom platforms, automation, data intelligence, and AI integration from FK Solutions." };

export default function ServicesPage() {
  return <main>
    <PageHero eyebrow="Capabilities / Services" title={<>Technical depth from <em>idea to system.</em></>} copy="We work across product thinking, AI architecture, software engineering, and deployment—focused on the parts that make a solution genuinely useful." />
    <section className="section-shell services-list">
      {services.map((service) => <article className="service-row" id={service.slug} key={service.slug}>
        <span className="service-index">{service.index}</span><div className="service-main"><span className="service-category">{service.categories.join(" · ")}</span><h2>{service.name}</h2><p>{service.summary}</p></div>
        <div className="service-points">{service.capabilities.map((point) => <span key={point}>{point}</span>)}</div>
      </article>)}
    </section>
    <section className="section-shell engagement-section"><div><span className="section-kicker">How we engage</span><h2>Clear scope. Useful milestones. Working software.</h2></div><div className="engagement-copy"><p>Engagements can begin with a focused discovery phase, a product prototype, or a defined build. The approach follows the problem—not a fixed agency package.</p><Link className="text-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div></section>
    <div className="section-shell"><CTASection {...siteConfig.defaultCTA} /></div>
  </main>;
}
