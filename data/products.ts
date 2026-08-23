export type ProductStatus = "Controlled Pilot / Beta" | "In Development";

export type Product = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  industry: string;
  status: ProductStatus;
  featured: boolean;
  capabilities: string[];
  technologies: string[];
  problem: string;
  solution: string;
  currentStatus: string;
  roadmap: string[];
  cta: { label: string; href: string };
  accent: "lime" | "violet";
  workflow: { step: string; title: string; detail: string }[];
  media: {
    screenshots: string[];
    videoUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    caseStudyUrl?: string;
  };
};

export const products: Product[] = [
  {
    slug: "legal-intelligence",
    index: "01",
    name: "Legal Intelligence Platform",
    tagline: "Legal work, organized around intelligence.",
    summary:
      "AI-powered legal intelligence and case-management infrastructure for Egyptian lawyers and law firms.",
    description:
      "A focused workspace being developed to organize case material, support legal research, and build a clearer view of facts, evidence, citations, and strategy.",
    industry: "Legal",
    status: "In Development",
    featured: true,
    capabilities: [
      "Secure case workspaces",
      "Legal document intelligence",
      "Legal research",
      "Fact provenance",
      "Case analysis",
      "Egyptian legal knowledge retrieval",
      "Citation verification",
      "AI-assisted legal workflows",
    ],
    technologies: [
      "Document intelligence",
      "Retrieval-augmented generation",
      "Knowledge retrieval",
      "Citation-aware workflows",
      "Secure application architecture",
    ],
    problem:
      "Legal casework spans documents, facts, research, citations, evidence, and evolving strategy. Important context is easily fragmented across files and disconnected tools, making critical relationships harder to trace and verify.",
    solution:
      "The platform is being designed as a structured intelligence layer for casework—bringing documents, legal knowledge, facts, and citations into one workspace while keeping professional judgment at the center of every workflow.",
    currentStatus:
      "The platform is in active development and is not yet production launched. The capabilities shown represent the current product direction and development scope, not a claim of general availability.",
    roadmap: [
      "Validate core case and document workflows",
      "Strengthen citation and source-verification patterns",
      "Refine Egyptian legal knowledge retrieval",
      "Prepare controlled evaluation with legal professionals",
    ],
    cta: { label: "Discuss the platform", href: "/contact" },
    accent: "lime",
    workflow: [
      { step: "01", title: "Organize", detail: "Structure case documents, facts, and supporting material." },
      { step: "02", title: "Retrieve", detail: "Find relevant knowledge and source-linked context." },
      { step: "03", title: "Analyze", detail: "Examine relationships, gaps, and lines of inquiry." },
      { step: "04", title: "Review", detail: "Keep conclusions traceable for professional judgment." },
    ],
    media: { screenshots: [] },
  },
  {
    slug: "factorymind",
    index: "02",
    name: "FactoryMind",
    tagline: "Enterprise intelligence for modern manufacturing.",
    summary:
      "An enterprise AI and manufacturing intelligence platform for operational visibility, model-driven analysis, and controlled decision support.",
    description:
      "A production-oriented manufacturing platform combining operational software, asynchronous machine-learning workflows, model governance, and monitoring.",
    industry: "Manufacturing",
    status: "Controlled Pilot / Beta",
    featured: true,
    capabilities: [
      "Production and operational monitoring",
      "Asynchronous ML training",
      "MLflow model governance",
      "Model and drift monitoring",
      "Role-based operational access",
      "Decision-support dashboards",
    ],
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT / RBAC",
      "Asynchronous ML training",
      "MLflow",
      "Model monitoring",
      "Drift monitoring",
    ],
    problem:
      "Manufacturing intelligence depends on operational data, models, people, and decisions working as one governed system. Fragmented tools make it difficult to maintain visibility across production, model behavior, and access responsibilities.",
    solution:
      "FactoryMind brings application workflows, operational data, asynchronous model training, governance, and monitoring into a unified enterprise platform designed for controlled manufacturing use.",
    currentStatus:
      "FactoryMind is positioned for controlled pilot and beta use. Capabilities and operational workflows continue to be evaluated and refined before broader availability.",
    roadmap: [
      "Expand controlled operational evaluation",
      "Refine model-governance workflows",
      "Strengthen monitoring and drift visibility",
      "Prepare deployment patterns for broader environments",
    ],
    cta: { label: "Discuss a pilot", href: "/contact" },
    accent: "violet",
    workflow: [
      { step: "01", title: "Connect", detail: "Bring relevant operational signals into a governed data flow." },
      { step: "02", title: "Train", detail: "Run asynchronous machine-learning workflows with tracked models." },
      { step: "03", title: "Monitor", detail: "Observe operations, model behavior, and drift indicators." },
      { step: "04", title: "Decide", detail: "Support role-aware operational review and action." },
    ],
    media: { screenshots: [] },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
