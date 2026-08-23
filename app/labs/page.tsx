import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "FK Labs — FK Solutions", description: "Experiments, prototypes, and applied AI research from FK Labs." };

const experiments = [
  ["EXP—001", "Document relationship mapping", "Exploring how long, connected document sets can be mapped into navigable knowledge structures.", "Knowledge systems"],
  ["EXP—002", "Visual operations sensing", "Testing lightweight computer-vision patterns for observing physical workflows without adding operational friction.", "Computer vision"],
  ["EXP—003", "Decision trace interfaces", "Prototyping interfaces that make AI-supported recommendations easier to inspect and challenge.", "Human–AI systems"],
];

export default function LabsPage() {
  return <main>
    <PageHero eyebrow="FK Labs / Explore early" title={<>Where promising ideas get <em>tested.</em></>} copy="FK Labs is our space for experiments, prototypes, and applied research—before a concept is mature enough to become a product." />
    <section className="section-shell labs-intro"><div className="lab-signal" aria-hidden="true"><i /><span>Research signal active</span></div><div><span className="section-kicker">Purpose</span><h2>Explore first. Productize what proves useful.</h2><p>Labs lets us investigate emerging capabilities through working prototypes. Successful concepts can move forward into focused FK Solutions products; others remain documented experiments.</p></div></section>
    <section className="section-shell experiments-section"><div className="section-row"><div><span className="section-kicker">Current explorations</span><h2>Research notes &amp; prototypes</h2></div><span className="demo-label">Illustrative placeholder concepts</span></div>
      <div className="experiment-grid">{experiments.map(([code, title, copy, category]) => <article className="experiment-card" key={code}><div className="experiment-head"><span>{code}</span><i>Concept</i></div><div className="experiment-graphic" aria-hidden="true"><b /><b /><b /></div><span className="experiment-category">{category}</span><h3>{title}</h3><p>{copy}</p><small>Placeholder research example — not an announced product.</small></article>)}</div>
    </section>
    <div className="section-shell"><CTASection eyebrow="Explore together" title="Have a research problem worth testing?" copy="We’re interested in practical experiments with a credible path to useful software." label="Start a conversation" /></div>
  </main>;
}
