export type WorkStatus =
  | "Engineering Project"
  | "Research / Engineering Project"
  | "Experimental / Labs";

export type SelectedWork = {
  slug: string;
  index: string;
  name: string;
  description: string;
  technologies: string[];
  status: WorkStatus;
  repositoryUrl?: string;
};

export const selectedWork: SelectedWork[] = [
  {
    slug: "enterprise-rag",
    index: "W01",
    name: "EnterpriseRAG",
    description:
      "A multimodal AI knowledge intelligence platform supporting documents, audio, and video with hybrid retrieval and local LLM inference.",
    technologies: ["RAG", "LangChain / LCEL", "FAISS", "Hybrid Search", "Local LLMs"],
    status: "Engineering Project",
  },
  {
    slug: "document-intelligence",
    index: "W02",
    name: "AI Document Intelligence Platform",
    description:
      "A multi-document intelligence platform with hybrid retrieval, Arabic–English support, and GraphRAG capabilities.",
    technologies: ["FastAPI", "Streamlit", "ChromaDB", "Neo4j", "GraphRAG", "CI/CD"],
    status: "Engineering Project",
  },
  {
    slug: "neuroscan-ai",
    index: "W03",
    name: "NeuroScan AI",
    description:
      "An AI-assisted brain MRI review application with tumor-pattern prediction, Grad-CAM explainability, and clinical-style reporting. It is not a certified medical device.",
    technologies: ["Computer Vision", "Deep Learning", "Grad-CAM", "Clinical-style reporting"],
    status: "Research / Engineering Project",
  },
  {
    slug: "coding-agent",
    index: "W04",
    name: "Self-Improving AI Coding Agent",
    description:
      "A local autonomous coding agent built around a Plan → Execute → Test → Reflect → Improve workflow.",
    technologies: ["Python", "Pytest", "Ollama", "Agentic AI"],
    status: "Experimental / Labs",
  },
  {
    slug: "workflow-orchestration",
    index: "W05",
    name: "Workflow Orchestration Platform",
    description:
      "An administration and operations platform with workflow approvals, role-based access, and audit logging.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "RBAC"],
    status: "Engineering Project",
  },
];

export const technicalCapabilities = [
  { group: "AI / Machine Learning", items: ["Python", "TensorFlow", "scikit-learn", "Deep Learning", "Computer Vision", "Model Evaluation"] },
  { group: "Generative AI", items: ["LLMs", "RAG", "GraphRAG", "LangChain", "Hugging Face", "FAISS", "ChromaDB", "Embeddings", "BM25", "AI Agents", "Ollama", "PEFT / LoRA", "Quantization"] },
  { group: "Backend & MLOps", items: ["FastAPI", "PostgreSQL", "pgvector", "Redis", "MLflow", "Docker", "GitHub Actions", "JWT", "RBAC", "Model Monitoring", "Drift Detection", "Nginx"] },
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Streamlit"] },
];
