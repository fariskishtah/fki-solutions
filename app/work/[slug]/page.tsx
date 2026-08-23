import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { RelatedWork } from "@/components/RelatedWork";
import { getRelatedItems } from "@/data/relations";
import { getWorkProject, selectedWork } from "@/data/work";

type WorkPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return selectedWork.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const project = getWorkProject((await params).slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: `${project.name} — FK Solutions`, description: project.summary, images: [{ url: project.image ?? "/og.png", alt: project.name }] },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const project = getWorkProject((await params).slug);
  if (!project) notFound();
  return <main>
    <section className="project-detail-hero section-shell">
      <div><Link className="back-link" href="/work">← All selected work</Link><div className="detail-meta"><span>{project.category}</span><span>{project.status}</span></div><h1>{project.name}</h1><p className="detail-summary">{project.summary}</p>
        <div className="project-actions">{project.demoUrl ? <a className="button button-primary" href={project.demoUrl}>View demo <span aria-hidden="true">↗</span></a> : null}{project.githubVisible && project.githubUrl ? <a className="button button-secondary" href={project.githubUrl}>GitHub <span aria-hidden="true">↗</span></a> : null}</div>
      </div>
      <aside className="project-facts"><span>{project.index}</span><div><small>Project type</small><strong>{project.projectType}</strong></div>{project.year ? <div><small>Year</small><strong>{project.year}</strong></div> : null}</aside>
    </section>
    <section className="section-shell detail-copy-section"><div><span className="section-kicker">Project overview</span><h2>Built around a defined technical problem.</h2></div><p>{project.description}</p></section>
    <section className="section-shell technology-section"><div><span className="section-kicker">Technology</span><h2>Core capabilities and foundations.</h2></div><div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {project.stats?.length ? <section className="section-shell metric-grid">{project.stats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</section> : null}
    <RelatedWork items={getRelatedItems(`work:${project.slug}`)} />
    <div className="section-shell"><CTASection /></div>
  </main>;
}
