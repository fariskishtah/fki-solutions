export type ProductStatus =
  | "Live / Beta"
  | "In Development"
  | "Prototype / Research";

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
  cta: { label: string; href: string };
  accent: "lime" | "violet" | "amber";
  workflow: { step: string; title: string; detail: string }[];
};

export const products: Product[] = [
  {
    slug: "legal-intelligence",
    index: "01",
    name: "Legal Intelligence Platform",
    tagline: "Legal work, organized around intelligence.",
    summary:
      "An AI-powered legal intelligence and case-management platform designed for Egyptian lawyers and law firms.",
    description:
      "A focused workspace for organizing case material, retrieving relevant legal knowledge, and building a clearer view of facts, evidence, and strategy.",
    industry: "Legal",
    status: "In Development",
    featured: true,
    capabilities: [
      "Case document intelligence",
      "Legal research",
      "Case weakness analysis",
      "Evidence and fact tracking",
      "Egyptian legal knowledge retrieval",
      "AI-assisted legal strategy",
    ],
    technologies: [
      "Document intelligence",
      "Knowledge retrieval",
      "Natural language processing",
      "Secure case workspaces",
    ],
    problem:
      "Legal casework spans documents, facts, research, evidence, and evolving strategy. Important context is easily fragmented across files and disconnected tools, slowing analysis and making critical relationships harder to see.",
    solution:
      "The platform is designed to bring case material into one structured intelligence layer—helping legal professionals retrieve knowledge, examine weaknesses, track evidence, and develop strategy with AI assistance while keeping human judgment at the center.",
    currentStatus:
      "Core product architecture and legal intelligence workflows are currently in development. Access is not yet generally available.",
    cta: { label: "Discuss the platform", href: "/contact" },
    accent: "lime",
    workflow: [
      { step: "01", title: "Ingest", detail: "Bring case documents and facts into a structured workspace." },
      { step: "02", title: "Connect", detail: "Map people, evidence, claims, and relevant legal knowledge." },
      { step: "03", title: "Analyze", detail: "Surface gaps, contradictions, and lines of inquiry." },
      { step: "04", title: "Decide", detail: "Turn intelligence into an organized case strategy." },
    ],
  },
  {
    slug: "factorymind",
    index: "02",
    name: "FactoryMind",
    tagline: "Operational intelligence for modern manufacturing.",
    summary:
      "An intelligent manufacturing platform designed to help factories monitor operations, analyze production data, and make smarter operational decisions using AI.",
    description:
      "A manufacturing intelligence layer that turns operational signals into clearer visibility and more informed production decisions.",
    industry: "Manufacturing",
    status: "Live / Beta",
    featured: true,
    capabilities: [
      "Production monitoring",
      "Operational data analysis",
      "Decision-support workflows",
      "Issue and trend visibility",
      "AI-assisted analysis",
      "Management dashboards",
    ],
    technologies: [
      "Operational analytics",
      "AI decision support",
      "Data pipelines",
      "Responsive dashboards",
    ],
    problem:
      "Production decisions depend on signals spread across machines, teams, shifts, and reports. When that information stays fragmented, issues are harder to spot and operational decisions arrive late.",
    solution:
      "FactoryMind is designed to consolidate production context, expose meaningful patterns, and support operators and managers with timely, understandable intelligence for day-to-day decisions.",
    currentStatus:
      "A beta version is live. Product capabilities and operational workflows continue to be refined through practical use.",
    cta: { label: "Request beta access", href: "/contact" },
    accent: "violet",
    workflow: [
      { step: "01", title: "Collect", detail: "Bring relevant operational signals into one view." },
      { step: "02", title: "Monitor", detail: "Track production context as operations evolve." },
      { step: "03", title: "Interpret", detail: "Identify trends, exceptions, and emerging issues." },
      { step: "04", title: "Act", detail: "Support faster, better-informed operational decisions." },
    ],
  },
  {
    slug: "kitcheneye",
    index: "03",
    name: "KitchenEye",
    tagline: "See waste. Understand cost. Improve the kitchen.",
    summary:
      "An AI-powered restaurant waste intelligence system that helps businesses identify food waste, understand its cost, and reduce unnecessary losses.",
    description:
      "A research-stage system exploring how computer vision and operational data can make food waste visible, measurable, and actionable.",
    industry: "Hospitality",
    status: "Prototype / Research",
    featured: true,
    capabilities: [
      "Waste event identification",
      "Food category tracking",
      "Cost visibility",
      "Operational waste patterns",
      "Kitchen insight summaries",
      "Reduction opportunity discovery",
    ],
    technologies: [
      "Computer vision",
      "Event classification",
      "Cost analytics",
      "Operational reporting",
    ],
    problem:
      "Restaurant food waste is often recorded inconsistently or not at all. Without a reliable picture of what is discarded, when, and at what cost, teams struggle to address preventable loss.",
    solution:
      "KitchenEye explores a lightweight intelligence system that identifies waste events, organizes them into useful categories, and gives operators a clearer view of cost and reduction opportunities.",
    currentStatus:
      "KitchenEye is a research prototype. The concept and sensing workflows are being explored and are not presented as a generally available product.",
    cta: { label: "Explore a collaboration", href: "/contact" },
    accent: "amber",
    workflow: [
      { step: "01", title: "Observe", detail: "Capture relevant kitchen waste events." },
      { step: "02", title: "Classify", detail: "Organize waste by type and operational context." },
      { step: "03", title: "Value", detail: "Connect recurring waste with its estimated cost." },
      { step: "04", title: "Improve", detail: "Surface practical opportunities to reduce loss." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
