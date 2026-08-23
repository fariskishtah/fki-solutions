"use client";

import { useMemo, useState } from "react";
import type { SelectedWork } from "@/data/work";
import { FilterControls } from "./FilterControls";
import { WorkCard } from "./WorkCard";

export function WorkExplorer({ projects }: { projects: SelectedWork[] }) {
  const options = useMemo(() => ["All", ...new Set(projects.flatMap((project) => project.categories))], [projects]);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.categories.includes(active));

  return (
    <div className="interactive-catalogue">
      <div className="catalogue-tools"><span>{filtered.length} projects</span><FilterControls label="Filter selected work" options={options} active={active} onChange={setActive} /></div>
      <div className="work-grid filtered-grid" aria-live="polite">{filtered.map((project) => <WorkCard key={project.slug} project={project} />)}</div>
    </div>
  );
}
