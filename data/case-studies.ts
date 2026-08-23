export type CaseStudy = {
  slug: string;
  title: string;
  projectSlug: string;
  problem: string;
  approach: string;
  architecture?: string;
  technologies: string[];
  outcome?: string;
  screenshots?: string[];
  demoUrl?: string;
  status: "Draft" | "Published";
};

// Intentionally empty until a real, approved case study is available.
export const caseStudies: CaseStudy[] = [];
