export type WorkStatus =
  | "Engineering Project"
  | "Research / Engineering Project"
  | "Experimental / Labs";

export type SelectedWork = {
  slug: string;
  index: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  categories: string[];
  technologies: string[];
  status: WorkStatus;
  projectType: "Engineering" | "Research" | "Experimental";
  featured: boolean;
  year?: string;
  githubUrl?: string;
  githubVisible: boolean;
  demoUrl?: string;
  image?: string;
  stats?: { label: string; value: string }[];
};

export const selectedWork: SelectedWork[] = [
  {
    slug: "enterprise-rag",
    index: "W01",
    name: "EnterpriseRAG",
    summary: "Multimodal knowledge intelligence with hybrid retrieval and local inference.",
    description:
      "A multimodal AI knowledge intelligence platform supporting documents, audio, and video with hybrid retrieval and local LLM inference.",
    technologies: ["RAG", "LangChain / LCEL", "FAISS", "Hybrid Search", "Local LLMs"],
    category: "RAG",
    categories: ["RAG", "AI", "Data"],
    status: "Engineering Project",
    projectType: "Engineering",
    featured: true,
    githubVisible: false,
  },
  {
    slug: "document-intelligence",
    index: "W02",
    name: "AI Document Intelligence Platform",
    summary: "Arabic–English document intelligence with hybrid retrieval and GraphRAG.",
    description:
      "A multi-document intelligence platform with hybrid retrieval, Arabic–English support, and GraphRAG capabilities.",
    technologies: ["FastAPI", "Streamlit", "ChromaDB", "Neo4j", "GraphRAG", "CI/CD"],
    category: "RAG",
    categories: ["RAG", "AI", "Data"],
    status: "Engineering Project",
    projectType: "Engineering",
    featured: true,
    githubVisible: false,
  },
  {
    slug: "neuroscan-ai",
    index: "W03",
    name: "NeuroScan AI",
    summary: "Explainable AI-assisted brain MRI review research.",
    description:
      "An AI-assisted brain MRI review application with tumor-pattern prediction, Grad-CAM explainability, and clinical-style reporting. It is not a certified medical device.",
    technologies: ["Computer Vision", "Deep Learning", "Grad-CAM", "Clinical-style reporting"],
    category: "AI",
    categories: ["AI", "Data", "Experimental"],
    status: "Research / Engineering Project",
    projectType: "Research",
    featured: true,
    githubVisible: false,
  },
  {
    slug: "coding-agent",
    index: "W04",
    name: "Self-Improving AI Coding Agent",
    summary: "A local autonomous coding agent with iterative reflection and improvement.",
    description:
      "A local autonomous coding agent built around a Plan → Execute → Test → Reflect → Improve workflow.",
    technologies: ["Python", "Pytest", "Ollama", "Agentic AI"],
    category: "Agents",
    categories: ["Agents", "AI", "Automation", "Experimental"],
    status: "Experimental / Labs",
    projectType: "Experimental",
    featured: true,
    githubVisible: false,
  },
  {
    slug: "workflow-orchestration",
    index: "W05",
    name: "Workflow Orchestration Platform",
    summary: "Operations administration with approvals, access control, and audit logging.",
    description:
      "An administration and operations platform with workflow approvals, role-based access, and audit logging.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "RBAC"],
    category: "Automation",
    categories: ["Automation", "Data"],
    status: "Engineering Project",
    projectType: "Engineering",
    featured: false,
    githubVisible: false,
  },
];

export function getWorkProject(slug: string) {
  return selectedWork.find((project) => project.slug === slug);
}

export const technicalCapabilities = [
  { group: "AI / Machine Learning", items: ["Python", "TensorFlow", "scikit-learn", "Deep Learning", "Computer Vision", "Model Evaluation"] },
  { group: "Generative AI", items: ["LLMs", "RAG", "GraphRAG", "LangChain", "Hugging Face", "FAISS", "ChromaDB", "Embeddings", "BM25", "AI Agents", "Ollama", "PEFT / LoRA", "Quantization"] },
  { group: "Backend & MLOps", items: ["FastAPI", "PostgreSQL", "pgvector", "Redis", "MLflow", "Docker", "GitHub Actions", "JWT", "RBAC", "Model Monitoring", "Drift Detection", "Nginx"] },
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Streamlit"] },
];
