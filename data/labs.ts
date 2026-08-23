export type LabCategory = "AI" | "Agents" | "RAG" | "Automation" | "Robotics" | "Data" | "Experimental";

export type LabProject = {
  slug: string;
  code: string;
  name: string;
  summary: string;
  category: LabCategory;
  categories: LabCategory[];
  status: "Experimental" | "Research Prototype";
  technologies: string[];
  year?: string;
  description: string;
  githubUrl?: string;
  githubVisible: boolean;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
};

export const labProjects: LabProject[] = [
  {
    slug: "self-improving-coding-agent",
    code: "LAB—001",
    name: "Self-Improving AI Coding Agent",
    summary: "A local agentic system for iterative planning, testing, reflection, and improvement.",
    description: "A local agentic system exploring iterative planning, execution, testing, reflection, and improvement.",
    category: "Agents",
    categories: ["Agents", "AI", "Automation", "Experimental"],
    status: "Experimental",
    technologies: ["Python", "Pytest", "Ollama"],
    githubVisible: false,
    featured: true,
  },
  {
    slug: "jarvis-desktop-assistant",
    code: "LAB—002",
    name: "J.A.R.V.I.S. Desktop AI Assistant",
    summary: "A desktop-assistant experiment for local AI interaction and task execution.",
    description: "An experimental desktop-assistant project exploring local AI interaction and task execution.",
    category: "Agents",
    categories: ["Agents", "AI", "Automation", "Experimental"],
    status: "Experimental",
    technologies: ["Local AI", "Automation"],
    githubVisible: false,
    featured: true,
  },
  {
    slug: "offline-local-ai-chat",
    code: "LAB—003",
    name: "Offline Local AI Chat",
    summary: "Private conversational AI workflows with offline local-model inference.",
    description: "An exploration of private, offline conversational AI workflows using local model inference.",
    category: "AI",
    categories: ["AI", "Experimental"],
    status: "Research Prototype",
    technologies: ["Local LLMs", "Offline AI"],
    githubVisible: false,
    featured: true,
  },
  {
    slug: "ai-video-editing-mvp",
    code: "LAB—004",
    name: "AI-Powered Video Editing MVP",
    summary: "An early product experiment for focused AI-assisted video workflows.",
    description: "An early product experiment investigating how AI can support focused video-editing workflows.",
    category: "Automation",
    categories: ["AI", "Automation", "Experimental"],
    status: "Research Prototype",
    technologies: ["AI workflows", "Video processing"],
    githubVisible: false,
    featured: false,
  },
  {
    slug: "embedded-robotics-experiments",
    code: "LAB—005",
    name: "Embedded & Robotics Experiments",
    summary: "Research builds connecting intelligent software with embedded and physical systems.",
    description: "Small research builds connecting intelligent software with embedded and physical systems.",
    category: "Robotics",
    categories: ["Robotics", "Experimental"],
    status: "Experimental",
    technologies: ["Embedded systems", "Robotics"],
    githubVisible: false,
    featured: false,
  },
];

export function getLabProject(slug: string) {
  return labProjects.find((project) => project.slug === slug);
}
