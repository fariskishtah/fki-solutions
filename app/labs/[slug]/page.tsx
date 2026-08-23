import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { RelatedWork } from "@/components/RelatedWork";
import { getLabProject, labProjects } from "@/data/labs";
import { getRelatedItems } from "@/data/relations";
import { siteConfig } from "@/data/site";

type LabPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return labProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: LabPageProps): Promise<Metadata> {
  const project = getLabProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name} — FK Labs`,
    description: project.summary,
    openGraph: { title: `${project.name} — FK Labs`, description: project.summary, images: [{ url: project.image ?? "/og.png", alt: project.name }] },
  };
}

export default async function LabDetailPage({ params }: LabPageProps) {
  const project = getLabProject((await params).slug);
  if (!project) notFound();
  return <main>
    <section className="project-detail-hero section-shell">
      <div><Link className="back-link" href="/labs">← All experiments</Link><div className="detail-meta"><span>{project.category}</span><span>{project.status}</span></div><h1>{project.name}</h1><p className="detail-summary">{project.summary}</p>
        <div className="project-actions">{project.demoUrl ? <a className="button button-primary" href={project.demoUrl}>View demo <span aria-hidden="true">↗</span></a> : null}{project.githubVisible && project.githubUrl ? <a className="button button-secondary" href={project.githubUrl}>GitHub <span aria-hidden="true">↗</span></a> : null}</div>
      </div>
      <aside className="project-facts"><span>{project.code}</span><div><small>Categories</small><strong>{project.categories.join(" · ")}</strong></div>{project.year ? <div><small>Year</small><strong>{project.year}</strong></div> : null}</aside>
    </section>
    <section className="section-shell detail-copy-section"><div><span className="section-kicker">Research note</span><h2>A focused technical exploration.</h2></div><p>{project.description}</p></section>
    {project.technologies.length ? <section className="section-shell technology-section"><div><span className="section-kicker">Technology</span><h2>Tools behind the experiment.</h2></div><div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section> : null}
    {project.stats?.length ? <section className="section-shell metric-grid">{project.stats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</section> : null}
    <RelatedWork items={getRelatedItems(`lab:${project.slug}`)} />
    <div className="section-shell"><CTASection {...siteConfig.labsCTA} /></div>
  </main>;
}
