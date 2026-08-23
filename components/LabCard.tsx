import Link from "next/link";
import type { LabProject } from "@/data/labs";

export function LabCard({ project }: { project: LabProject }) {
  return (
    <article className="experiment-card data-card">
      <div className="experiment-head"><span>{project.code}</span><i>{project.status}</i></div>
      <div className="experiment-graphic" aria-hidden="true"><b /><b /><b /></div>
      <span className="experiment-category">{project.category}</span>
      <h3><Link href={`/labs/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.summary}</p>
      <div className="lab-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <Link className="text-link card-detail-link" href={`/labs/${project.slug}`}>Explore experiment <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
