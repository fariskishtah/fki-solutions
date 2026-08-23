import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand" href="/"><span className="brand-mark">FK</span><span>Solutions</span></Link>
          <p>AI &amp; software solutions built for real problems.</p>
        </div>
        <div className="footer-nav">
          <div><span>Company</span><Link href="/about">About</Link><Link href="/labs">Labs</Link><Link href="/contact">Contact</Link></div>
          <div><span>Explore</span><Link href="/products">Products</Link><Link href="/services">Services</Link></div>
          <div><span>Connect</span><SocialLinks compact /></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} FK Solutions</span><span>Cairo, Egypt · Building globally</span></div>
    </footer>
  );
}
