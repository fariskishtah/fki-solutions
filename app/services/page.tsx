import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "Services — FK Solutions", description: "AI product development, custom platforms, automation, data intelligence, and AI integration from FK Solutions." };

const services = [
  ["01", "AI Product Development", "From opportunity definition and system architecture to production AI applications.", ["Product strategy", "AI architecture", "Application engineering", "Evaluation & iteration"]],
  ["02", "Custom Web Platforms", "Modern, secure, and scalable business applications shaped around real operational requirements.", ["Workflow design", "Technical architecture", "Frontend & systems", "Deployment foundations"]],
  ["03", "AI Automation", "Automation for repetitive, document-heavy, or decision-intensive operational workflows.", ["Process mapping", "Agentic workflows", "Human review loops", "System integration"]],
  ["04", "Data Intelligence", "Dashboards, analytics, and decision-support systems that turn data into usable context.", ["Data modeling", "Operational analytics", "Decision systems", "Clear reporting"]],
  ["05", "AI Integration", "Focused AI capabilities added to existing business systems without forcing a complete rebuild.", ["System assessment", "Model integration", "Retrieval systems", "Safety & evaluation"]],
];

export default function ServicesPage() {
  return <main>
    <PageHero eyebrow="Capabilities / Services" title={<>Technical depth from <em>idea to system.</em></>} copy="We work across product thinking, AI architecture, software engineering, and deployment—focused on the parts that make a solution genuinely useful." />
    <section className="section-shell services-list">
      {services.map(([index, title, copy, points]) => <article className="service-row" key={index as string}>
        <span className="service-index">{index as string}</span><div className="service-main"><h2>{title as string}</h2><p>{copy as string}</p></div>
        <div className="service-points">{(points as string[]).map((point) => <span key={point}>{point}</span>)}</div>
      </article>)}
    </section>
    <section className="section-shell engagement-section"><div><span className="section-kicker">How we engage</span><h2>Clear scope. Useful milestones. Working software.</h2></div><div className="engagement-copy"><p>Engagements can begin with a focused discovery phase, a product prototype, or a defined build. The approach follows the problem—not a fixed agency package.</p><Link className="text-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div></section>
    <div className="section-shell"><CTASection /></div>
  </main>;
}
