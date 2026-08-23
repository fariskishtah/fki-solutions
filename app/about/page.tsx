import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SocialLinks } from "@/components/SocialLinks";
import { technicalCapabilities } from "@/data/work";

export const metadata: Metadata = { title: "About", description: "FK Solutions builds practical AI and software products around real operational problems, led by AI/ML engineer Faris Mohamed Kishtah." };

const values = [
  ["01", "Practical innovation", "New technology matters when it improves a real workflow, decision, or outcome."],
  ["02", "Product thinking", "We consider the complete system: people, process, interface, data, and long-term operation."],
  ["03", "Technical clarity", "Good architecture should make a product easier to evolve, secure, and understand."],
  ["04", "Continuous experiments", "Research stays connected to working prototypes and testable assumptions."],
];

const experience = [
  {
    organization: "Samsung Innovation Campus",
    role: "AI & Machine Learning",
    period: "2026–Present",
    detail: "Applied machine learning, statistics and data visualization, regression, classification, clustering, deep learning, NLP, RAG, and agentic AI.",
  },
  {
    organization: "EDRAK Software Company",
    role: "Generative AI & RAG Intern",
    period: "2026",
    detail: "Multimodal RAG, FAISS, LangChain / LCEL, audio and video transcription, timestamped Q&A, and backend, integration, and end-to-end testing.",
  },
];

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About FK Solutions" title={<>A product company for <em>practical intelligence.</em></>} copy="We build AI-powered software around operational problems that deserve clearer, more capable systems." />

    <section className="section-shell about-manifesto"><span className="section-kicker">Our point of view</span><div><h2>Technology earns its place when it makes work clearer.</h2><p>FK Solutions focuses on understanding the real structure of a problem before choosing the technology. That means studying workflows, decisions, constraints, and information—then building the smallest coherent system that can create meaningful value.</p><p>Our work sits at the intersection of AI-driven product development, scalable software, and continuous experimentation.</p></div></section>

    <section className="section-shell values-section">{values.map(([index, title, copy]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>

    <section className="founder-section">
      <div className="section-shell founder-grid">
        <div className="founder-identity"><span className="section-kicker">Founder &amp; Technical Lead</span><div className="founder-monogram" aria-hidden="true"><span>FK</span><i>AI / ML</i></div></div>
        <div className="founder-profile"><h2>Faris Mohamed Kishtah</h2><p className="founder-role">AI/ML Engineer · RAG &amp; Generative AI Systems · Full-Stack Python · MLOps</p><p>Faris is a Computer and Intelligent Systems Engineering student and AI/ML engineer focused on building production-oriented RAG, LLM, MLOps, and full-stack AI platforms. His work spans generative AI, document intelligence, manufacturing systems, medical AI, autonomous agents, and business software.</p><div className="founder-location"><span>Cairo, Egypt</span><SocialLinks /></div></div>
      </div>
    </section>

    <section className="section-shell experience-section">
      <div className="section-heading"><span className="section-kicker">Experience highlights</span><h2>Applied learning. Production-oriented practice.</h2></div>
      <div className="experience-list">{experience.map((item, index) => <article key={item.organization}><span>0{index + 1}</span><div><h3>{item.organization}</h3><p>{item.role}</p></div><time>{item.period}</time><p>{item.detail}</p></article>)}</div>
    </section>

    <section className="capabilities-section">
      <div className="section-shell">
        <div className="section-row"><div><span className="section-kicker">Technical capabilities</span><h2>A connected engineering toolkit.</h2></div><p>Capabilities are grouped by the systems they help build—not presented as a logo wall.</p></div>
        <div className="capability-groups">{technicalCapabilities.map((category, index) => <article key={category.group}><span>0{index + 1}</span><h3>{category.group}</h3><div>{category.items.map((item) => <i key={item}>{item}</i>)}</div></article>)}</div>
      </div>
    </section>

    <section className="section-shell education-section"><span className="section-kicker">Education</span><div><h2>B.Sc. in Computer and Intelligent Systems Engineering</h2><p>Faculty of Engineering &amp; Technology · Future University in Egypt</p></div><time>Expected 2027</time></section>

    <section className="about-statement"><div className="section-shell"><p>Research deliberately.<br />Build responsibly.<br /><em>Ship what matters.</em></p></div></section>
    <div className="section-shell"><CTASection /></div>
  </main>;
}
