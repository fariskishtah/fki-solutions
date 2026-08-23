import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { LabCard } from "@/components/LabCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { getFeaturedProducts } from "@/data/products";
import { labProjects } from "@/data/labs";
import { siteConfig } from "@/data/site";
import { selectedWork, technicalCapabilities } from "@/data/work";

export default function Home() {
  const featured = getFeaturedProducts();
  const featuredWork = selectedWork.filter((project) => project.featured);
  const featuredLabs = labProjects.filter((project) => project.featured);
  const { hero, founder } = siteConfig;

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> {hero.eyebrow}</div>
              <h1>{hero.title} <em>{hero.emphasis}</em></h1>
              <p>{hero.copy}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href={hero.primaryCTA.href}>{hero.primaryCTA.label} <span aria-hidden="true">↗</span></Link>
                <Link className="button button-secondary" href={hero.secondaryCTA.href}>{hero.secondaryCTA.label}</Link>
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
          <div className="hero-foot">{hero.supportingPhrases.map((phrase) => <span key={phrase}>{phrase}</span>)}</div>
        </section>

        <section className="section-shell build-section">
          <SectionHeading eyebrow="What we build" title="Intelligence, engineered into the workflow." copy="Focused systems that reduce complexity, improve decisions, and create room for better work." />
          <div className="build-grid">
            {siteConfig.buildAreas.map((area) => (
              <article className="feature-card" key={area.code}>
                <span className="feature-code">{area.code}</span><h3>{area.title}</h3><p>{area.copy}</p><i aria-hidden="true">↗</i>
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
              <Link className="text-link" href="/work">View all work <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="work-grid">{featuredWork.map((project) => <WorkCard key={project.slug} project={project} />)}</div>
          </div>
        </section>

        <section className="section-shell homepage-labs-section">
          <div className="section-row">
            <SectionHeading eyebrow="FK Labs" title="Experiments with a credible path to useful software." copy="Research prototypes and applied explorations remain clearly separate from commercial products." />
            <Link className="text-link" href="/labs">Explore FK Labs <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-labs-grid">{featuredLabs.map((project) => <LabCard key={project.slug} project={project} />)}</div>
        </section>

        <section className="section-shell expertise-section">
          <SectionHeading eyebrow="Technology expertise" title="Built across the full AI product stack." copy="A restrained view of the capabilities behind FK Solutions products and engineering work." />
          <div className="expertise-grid">{technicalCapabilities.map((category) => <article key={category.group}><h3>{category.group}</h3><div>{category.items.slice(0, 7).map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-shell leadership-strip">
          <div><span className="section-kicker">Founder &amp; technical leadership</span><h2>Product direction grounded in hands-on engineering.</h2></div>
          <div><p>FK Solutions is led by {founder.name}, {founder.shortRole}</p><Link className="text-link" href="/about">About the company <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section-shell why-section">
          <div className="why-copy">
            <SectionHeading eyebrow="Why FK Solutions" title="Practical by design. Ambitious by nature." />
            <p>Strong technology is not defined by complexity. It is defined by what it helps people understand, decide, and accomplish.</p>
          </div>
          <div className="principles-list">
            {siteConfig.principles.map((principle) => <article key={principle.index}><span>{principle.index}</span><div><h3>{principle.title}</h3><p>{principle.copy}</p></div></article>)}
          </div>
        </section>

        <section className="industry-section">
          <div className="section-shell industry-inner">
            <SectionHeading eyebrow="Industry focus" title="Deep workflows. Tangible impact." copy="We explore domains where better systems can change the quality and speed of everyday decisions." />
            <div className="industry-list">
              {siteConfig.industries.map((industry, index) => <div key={industry}><span>0{index + 1}</span><strong>{industry}</strong><i aria-hidden="true">↗</i></div>)}
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
