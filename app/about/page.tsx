import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "About", description: "FK Solutions builds practical AI and software products around real operational problems." };

const values = [
  ["01", "Practical innovation", "New technology matters when it improves a real workflow, decision, or outcome."],
  ["02", "Product thinking", "We consider the complete system: people, process, interface, data, and long-term operation."],
  ["03", "Technical clarity", "Good architecture should make a product easier to evolve, secure, and understand."],
  ["04", "Continuous experiments", "Research stays connected to working prototypes and testable assumptions."],
];

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About FK Solutions" title={<>A product company for <em>practical intelligence.</em></>} copy="We build AI-powered software around the operational problems that deserve better systems." />
    <section className="section-shell about-manifesto"><span className="section-kicker">Our point of view</span><div><h2>Technology earns its place when it makes work clearer.</h2><p>FK Solutions focuses on understanding the real structure of a problem before choosing the technology. That means studying workflows, decisions, constraints, and information—then building the smallest coherent system that can create meaningful value.</p><p>Our work sits at the intersection of AI-driven product development, scalable software, and ongoing experimentation.</p></div></section>
    <section className="section-shell values-section">{values.map(([index, title, copy]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>
    <section className="about-statement"><div className="section-shell"><p>Research deliberately.<br />Build responsibly.<br /><em>Ship what matters.</em></p></div></section>
    <div className="section-shell"><CTASection /></div>
  </main>;
}
