import type { SelectedWork } from "@/data/work";
import Link from "next/link";

export function WorkCard({ project }: { project: SelectedWork }) {
  return (
    <article className="work-card">
      <div className="work-card-head"><span>{project.index}</span><i>{project.status}</i></div>
      <div className="work-pattern" aria-hidden="true"><b /><b /><b /><b /></div>
      <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.summary}</p>
      <div className="capability-list compact-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <div className="card-link-row">
        <Link className="text-link" href={`/work/${project.slug}`}>View project <span aria-hidden="true">↗</span></Link>
        {project.githubVisible && project.githubUrl ? <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
      </div>
    </article>
  );
}
