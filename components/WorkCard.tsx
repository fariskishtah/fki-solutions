import type { SelectedWork } from "@/data/work";

export function WorkCard({ project }: { project: SelectedWork }) {
  return (
    <article className="work-card">
      <div className="work-card-head"><span>{project.index}</span><i>{project.status}</i></div>
      <div className="work-pattern" aria-hidden="true"><b /><b /><b /><b /></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="capability-list compact-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      {project.repositoryUrl ? <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">View technical project <span aria-hidden="true">↗</span></a> : <span className="work-project-label">Technical project profile</span>}
    </article>
  );
}
