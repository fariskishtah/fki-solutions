import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { LabExplorer } from "@/components/LabExplorer";
import { WorkCard } from "@/components/WorkCard";
import { labProjects } from "@/data/labs";
import { selectedWork } from "@/data/work";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "FK Labs", description: "Research, experimental engineering, and verified technical projects from FK Labs." };

export default function LabsPage() {
  return <main>
    <PageHero eyebrow="FK Labs / Research & Experimental Engineering" title={<>Where promising ideas get <em>tested.</em></>} copy="FK Labs is the home for experiments, prototypes, and applied research—clearly separated from commercial FK Solutions products." />
    <section className="section-shell labs-intro"><div className="lab-signal" aria-hidden="true"><i /><span>Research signal active</span></div><div><span className="section-kicker">Purpose</span><h2>Explore first. Productize what proves useful.</h2><p>Labs gives emerging capabilities room to become working prototypes. Successful concepts may inform future products; others remain valuable technical experiments without being presented as commercial offerings.</p></div></section>

    <section className="selected-work-section labs-work-section">
      <div className="section-shell">
        <div className="section-row"><div><span className="section-kicker">Engineering portfolio</span><h2>Selected technical systems</h2></div><p>Verified projects across knowledge intelligence, medical AI research, operations software, and autonomous agents.</p></div>
        <div className="work-grid work-grid-labs">{selectedWork.filter((project) => project.featured).map((project) => <WorkCard key={project.slug} project={project} />)}</div>
      </div>
    </section>

    <section className="section-shell experiments-section"><div className="section-row"><div><span className="section-kicker">Active explorations</span><h2>Research notes &amp; experiments</h2></div><span className="demo-label">Experimental work</span></div>
      <LabExplorer projects={labProjects} />
    </section>
    <div className="section-shell"><CTASection {...siteConfig.labsCTA} /></div>
  </main>;
}
