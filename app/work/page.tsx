import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { WorkExplorer } from "@/components/WorkExplorer";
import { siteConfig } from "@/data/site";
import { selectedWork } from "@/data/work";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected AI, software engineering, research, and experimental systems from FK Solutions.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero eyebrow={`Selected Work / ${String(selectedWork.length).padStart(2, "0")}`} title={<>Technical systems built with <em>purpose.</em></>} copy="A data-driven portfolio of engineering, research, and experimental work. Commercial FK Solutions products remain in the product catalogue." />
      <section className="section-shell catalogue-section">
        <div className="catalogue-tools"><span>Project catalogue</span><p>Filter by the categories present in the current portfolio.</p></div>
        <WorkExplorer projects={selectedWork} />
      </section>
      <div className="section-shell"><CTASection {...siteConfig.defaultCTA} /></div>
    </main>
  );
}
