export type NavItem = { label: string; href: string };
export type CTAConfig = { eyebrow: string; title: string; copy: string; label: string; href: string };

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://fk-solutions.aiarabic362.chatgpt.site";

export const siteConfig = {
  name: "FK Solutions",
  email: "fkishtah@gmail.com",
  location: "Cairo, Egypt",
  portfolioUrl: "https://fariskishtah.github.io",
  phone: null as string | null,
  renderPhone: false,
  footerCopy: "AI & software solutions built for real problems.",
  inquiryTypes: [
    "AI product development",
    "Custom web platform",
    "AI automation",
    "Data intelligence",
    "AI integration",
    "Research collaboration",
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Labs", href: "/labs" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footerExplore: [
    { label: "Products", href: "/products" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Labs", href: "/labs" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "AI & software solutions",
    title: "Building intelligent solutions for",
    emphasis: "real-world problems.",
    copy: "FK Solutions designs and builds AI-powered platforms, intelligent automation systems, and scalable software products for industries where technology can create measurable impact.",
    primaryCTA: { label: "Explore our products", href: "/products" },
    secondaryCTA: { label: "Work with us", href: "/contact" },
    supportingPhrases: ["AI Products", "Intelligent Automation", "Data Intelligence", "Scalable Software"],
  },
  buildAreas: [
    { code: "AI", title: "AI Products", copy: "Purpose-built AI applications designed around real workflows." },
    { code: "AX", title: "Intelligent Automation", copy: "Systems that automate complex operational and business processes." },
    { code: "DX", title: "Data & Decision Systems", copy: "Platforms that transform data into actionable intelligence." },
    { code: "SW", title: "Custom Software", copy: "Scalable web applications and technology solutions built around client requirements." },
  ],
  principles: [
    { index: "01", title: "Built Around Real Problems", copy: "We start with operational problems, not technology trends." },
    { index: "02", title: "AI Where It Matters", copy: "AI is used when it produces measurable value, not simply as a feature." },
    { index: "03", title: "From Idea to Product", copy: "Research, architecture, development, testing, and deployment." },
    { index: "04", title: "Designed to Scale", copy: "Products are built with long-term architecture and security in mind." },
  ],
  industries: ["Legal", "Manufacturing", "Knowledge Systems", "Business Operations", "Data & Analytics"],
  founder: {
    name: "Faris Mohamed Kishtah",
    role: "AI/ML Engineer · RAG & Generative AI Systems · Full-Stack Python · MLOps",
    shortRole: "AI/ML engineer working across RAG, generative AI systems, full-stack Python, and MLOps.",
    bio: "Faris is a Computer and Intelligent Systems Engineering student and AI/ML engineer focused on building production-oriented RAG, LLM, MLOps, and full-stack AI platforms. His work spans generative AI, document intelligence, manufacturing systems, medical AI, autonomous agents, and business software.",
    location: "Cairo, Egypt",
  },
  values: [
    { index: "01", title: "Practical innovation", copy: "New technology matters when it improves a real workflow, decision, or outcome." },
    { index: "02", title: "Product thinking", copy: "We consider the complete system: people, process, interface, data, and long-term operation." },
    { index: "03", title: "Technical clarity", copy: "Good architecture should make a product easier to evolve, secure, and understand." },
    { index: "04", title: "Continuous experiments", copy: "Research stays connected to working prototypes and testable assumptions." },
  ],
  experience: [
    {
      organization: "Samsung Innovation Campus",
      role: "AI & Machine Learning",
      period: "2026–Present",
      detail: "Applied machine learning, statistics and data visualization, regression, classification, clustering, deep learning, NLP, RAG, and agentic AI.",
    },
    {
      organization: "EDRAK Software Company",
      role: "Generative AI & RAG Intern",
      period: "2026",
      detail: "Multimodal RAG, FAISS, LangChain / LCEL, audio and video transcription, timestamped Q&A, and backend, integration, and end-to-end testing.",
    },
  ],
  education: {
    degree: "B.Sc. in Computer and Intelligent Systems Engineering",
    institution: "Faculty of Engineering & Technology · Future University in Egypt",
    period: "Expected 2027",
  },
  defaultCTA: {
    eyebrow: "Start a conversation",
    title: "Have a problem worth solving?",
    copy: "Let’s explore how software and AI can turn it into a scalable product.",
    label: "Work with us",
    href: "/contact",
  } satisfies CTAConfig,
  servicesCTA: {
    eyebrow: "Start a conversation",
    title: "Looking for a specific kind of solution?",
    copy: "Tell us where the workflow breaks down. We’ll explore what a focused system could change.",
    label: "Work with us",
    href: "/contact",
  } satisfies CTAConfig,
  labsCTA: {
    eyebrow: "Explore together",
    title: "Have a research problem worth testing?",
    copy: "We’re interested in practical experiments with a credible path to useful software.",
    label: "Start a conversation",
    href: "/contact",
  } satisfies CTAConfig,
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/faris-kishtah-59370b367",
  github: "https://github.com/fariskishtah",
  portfolio: "https://fariskishtah.github.io",
  facebook: null,
  instagram: null,
  youtube: null,
  x: null,
  tiktok: null,
} as const;

export const visibleSocialLinks = Object.entries(socialLinks).filter(
  ([, href]) => href !== null,
) as [keyof typeof socialLinks, string][];
