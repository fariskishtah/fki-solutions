import Link from "next/link";

const links = [
  ["Products", "/products"],
  ["Services", "/services"],
  ["Labs", "/labs"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="FK Solutions home">
          <span className="brand-mark">FK</span><span>Solutions</span>
        </Link>
        <div className="nav-links">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        <Link className="nav-cta" href="/contact">Work with us <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <div className="mobile-menu-panel">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
