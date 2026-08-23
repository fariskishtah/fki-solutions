export type Service = {
  slug: string;
  index: string;
  name: string;
  summary: string;
  capabilities: string[];
  categories: string[];
};

export const services: Service[] = [
  {
    slug: "ai-product-development",
    index: "01",
    name: "AI Product Development",
    summary: "From opportunity definition and system architecture to production AI applications.",
    capabilities: ["Product strategy", "AI architecture", "Application engineering", "Evaluation & iteration"],
    categories: ["AI", "Product Engineering"],
  },
  {
    slug: "custom-web-platforms",
    index: "02",
    name: "Custom Web Platforms",
    summary: "Modern, secure, and scalable business applications shaped around real operational requirements.",
    capabilities: ["Workflow design", "Technical architecture", "Frontend & systems", "Deployment foundations"],
    categories: ["Software", "Automation"],
  },
  {
    slug: "ai-automation",
    index: "03",
    name: "AI Automation",
    summary: "Automation for repetitive, document-heavy, or decision-intensive operational workflows.",
    capabilities: ["Process mapping", "Agentic workflows", "Human review loops", "System integration"],
    categories: ["AI", "Agents", "Automation"],
  },
  {
    slug: "data-intelligence",
    index: "04",
    name: "Data Intelligence",
    summary: "Dashboards, analytics, and decision-support systems that turn data into usable context.",
    capabilities: ["Data modeling", "Operational analytics", "Decision systems", "Clear reporting"],
    categories: ["Data", "Analytics"],
  },
  {
    slug: "ai-integration",
    index: "05",
    name: "AI Integration",
    summary: "Focused AI capabilities added to existing business systems without forcing a complete rebuild.",
    capabilities: ["System assessment", "Model integration", "Retrieval systems", "Safety & evaluation"],
    categories: ["AI", "RAG", "Integration"],
  },
];
