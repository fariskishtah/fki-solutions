import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand" href="/"><span className="brand-mark">FK</span><span>Solutions</span></Link>
          <p>{siteConfig.footerCopy}</p>
        </div>
        <div className="footer-nav">
          <div><span>Company</span>{siteConfig.navigation.filter((item) => ["/about", "/contact"].includes(item.href)).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
          <div><span>Explore</span>{siteConfig.footerExplore.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
          <div><span>Connect</span><SocialLinks compact /></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>{siteConfig.location} · Building globally</span></div>
    </footer>
  );
}
