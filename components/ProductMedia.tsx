/* eslint-disable @next/next/no-img-element */
import type { Product } from "@/data/products";

export function ProductMedia({ product }: { product: Product }) {
  const { screenshots, videos, architectureDiagram } = product.media;
  if (!screenshots.length && !videos.length && !architectureDiagram) return null;

  return (
    <section className="preview-section">
      <div className="section-shell">
        <div className="section-row"><div><span className="section-kicker">Product media</span><h2>Interface &amp; architecture</h2></div></div>
        <div className="media-gallery">
          {screenshots.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}
          {videos.map((video) => <figure key={video.src}><video controls preload="metadata" poster={video.poster}><source src={video.src} /><track kind="captions" src={video.captionsSrc} srcLang="en" label="English" default /></video><figcaption>{video.title}</figcaption></figure>)}
          {architectureDiagram ? <figure><img src={architectureDiagram.src} alt={architectureDiagram.alt} loading="lazy" /></figure> : null}
        </div>
      </div>
    </section>
  );
}
