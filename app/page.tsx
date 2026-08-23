import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { getFeaturedProducts } from "@/data/products";
import { selectedWork, technicalCapabilities } from "@/data/work";

const buildAreas = [
  ["AI", "AI Products", "Purpose-built AI applications designed around real workflows."],
  ["AX", "Intelligent Automation", "Systems that automate complex operational and business processes."],
  ["DX", "Data & Decision Systems", "Platforms that transform data into actionable intelligence."],
  ["SW", "Custom Software", "Scalable web applications and technology solutions built around client requirements."],
];

const principles = [
  ["01", "Built Around Real Problems", "We start with operational problems, not technology trends."],
  ["02", "AI Where It Matters", "AI is used when it produces measurable value, not simply as a feature."],
  ["03", "From Idea to Product", "Research, architecture, development, testing, and deployment."],
  ["04", "Designed to Scale", "Products are built with long-term architecture and security in mind."],
];

const industries = ["Legal", "Manufacturing", "Knowledge Systems", "Business Operations", "Data & Analytics"];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> AI &amp; software solutions</div>
              <h1>Building intelligent solutions for <em>real-world problems.</em></h1>
              <p>FK Solutions designs and builds AI-powered platforms, intelligent automation systems, and scalable software products for industries where technology can create measurable impact.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/products">Explore our products <span aria-hidden="true">↗</span></Link>
                <Link className="button button-secondary" href="/contact">Work with us</Link>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-orbit orbit-three" />
              <div className="visual-core"><span>FK</span><small>Intelligence</small></div>
              <div className="visual-node node-one">01</div><div className="visual-node node-two">AI</div><div className="visual-node node-three">∞</div>
              <div className="visual-caption caption-one"><span>Systems online</span><i /></div>
              <div className="visual-caption caption-two"><span>Signal / Active</span></div>
            </div>
          </div>
          <div className="hero-foot"><span>Strategy</span><span>Artificial intelligence</span><span>Product engineering</span><span>Scalable systems</span></div>
        </section>

        <section className="section-shell build-section">
          <SectionHeading eyebrow="What we build" title="Intelligence, engineered into the workflow." copy="Focused systems that reduce complexity, improve decisions, and create room for better work." />
          <div className="build-grid">
            {buildAreas.map(([code, title, copy]) => (
              <article className="feature-card" key={code}>
                <span className="feature-code">{code}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell product-section">
          <div className="section-row">
            <SectionHeading eyebrow="Selected products" title="Products with a clear job to do." copy="Each starts with a specific operational challenge and is shaped around the people solving it." />
            <Link className="text-link" href="/products">View all products <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="products-grid products-grid-featured">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </section>

        <section className="selected-work-section">
          <div className="section-shell">
            <div className="section-row">
              <SectionHeading eyebrow="Selected work" title="Engineering depth beyond the product catalogue." copy="Verified AI, platform, and research systems—presented as technical work, not commercial FK Solutions products." />
              <Link className="text-link" href="/labs">Explore FK Labs <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="work-grid">{selectedWork.slice(0, 4).map((project) => <WorkCard key={project.slug} project={project} />)}</div>
          </div>
        </section>

        <section className="section-shell expertise-section">
          <SectionHeading eyebrow="Technology expertise" title="Built across the full AI product stack." copy="A restrained view of the capabilities behind FK Solutions products and engineering work." />
          <div className="expertise-grid">{technicalCapabilities.map((category) => <article key={category.group}><h3>{category.group}</h3><div>{category.items.slice(0, 7).map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-shell leadership-strip">
          <div><span className="section-kicker">Founder &amp; technical leadership</span><h2>Product direction grounded in hands-on engineering.</h2></div>
          <div><p>FK Solutions is led by Faris Mohamed Kishtah, an AI/ML engineer working across RAG, generative AI systems, full-stack Python, and MLOps.</p><Link className="text-link" href="/about">About the company <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section-shell why-section">
          <div className="why-copy">
            <SectionHeading eyebrow="Why FK Solutions" title="Practical by design. Ambitious by nature." />
            <p>Strong technology is not defined by complexity. It is defined by what it helps people understand, decide, and accomplish.</p>
          </div>
          <div className="principles-list">
            {principles.map(([index, title, copy]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </section>

        <section className="industry-section">
          <div className="section-shell industry-inner">
            <SectionHeading eyebrow="Industry focus" title="Deep workflows. Tangible impact." copy="We explore domains where better systems can change the quality and speed of everyday decisions." />
            <div className="industry-list">
              {industries.map((industry, index) => <div key={industry}><span>0{index + 1}</span><strong>{industry}</strong><i aria-hidden="true">↗</i></div>)}
            </div>
          </div>
        </section>

        <section className="section-shell philosophy-section">
          <div className="philosophy-orbit" aria-hidden="true"><span>FK</span></div>
          <div className="philosophy-copy">
            <span className="section-kicker">Product philosophy</span>
            <blockquote>“Technology should make complicated work <em>simpler.</em>”</blockquote>
            <p>We build systems that understand workflows, organize information, surface important insights, and help people make better decisions.</p>
          </div>
        </section>

        <div className="section-shell"><CTASection /></div>
      </main>
    </>
  );
}
