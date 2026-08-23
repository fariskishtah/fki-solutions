"use client";

import { useMemo, useState } from "react";
import type { LabProject } from "@/data/labs";
import { FilterControls } from "./FilterControls";
import { LabCard } from "./LabCard";

export function LabExplorer({ projects }: { projects: LabProject[] }) {
  const options = useMemo(() => ["All", ...new Set(projects.flatMap((project) => project.categories))], [projects]);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.categories.includes(active as LabProject["category"]));

  return (
    <div className="interactive-catalogue">
      <div className="catalogue-tools"><span>{filtered.length} experiments</span><FilterControls label="Filter Labs projects" options={options} active={active} onChange={setActive} /></div>
      <div className="experiment-grid filtered-grid" aria-live="polite">{filtered.map((project) => <LabCard key={project.slug} project={project} />)}</div>
    </div>
  );
}
