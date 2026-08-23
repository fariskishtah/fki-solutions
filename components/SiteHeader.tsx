import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SiteSearch } from "./SiteSearch";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="FK Solutions home">
          <span className="brand-mark">FK</span><span>Solutions</span>
        </Link>
        <div className="nav-links">{siteConfig.navigation.filter((item) => item.href !== "/contact").map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <SiteSearch />
        <Link className="nav-cta" href="/contact">Work with us <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <div className="mobile-menu-panel">
            {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </details>
      </nav>
    </header>
  );
}
