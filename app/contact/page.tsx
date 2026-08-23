import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Work with FK Solutions on an AI product, custom software platform, automation, partnership, or technical collaboration." };

const inquiryTypes = ["Product inquiry", "Custom AI solution", "Software development", "AI automation", "Partnership", "Technical collaboration"];

export default function ContactPage() {
  return <main className="contact-page">
    <section className="contact-shell">
      <div className="contact-copy">
        <span className="section-kicker">Work with FK Solutions</span>
        <h1>Let’s solve something <em>worth solving.</em></h1>
        <p>Tell us about the workflow, product idea, or operational problem. A useful first conversation starts with context—not a sales pitch.</p>
        <div className="contact-options"><span>Good reasons to reach out</span><div>{inquiryTypes.map((type) => <i key={type}>{type}</i>)}</div></div>
        <div className="direct-contact">
          <a href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong></a>
          <div><span>Location</span><strong>{siteConfig.location}</strong></div>
        </div>
        <SocialLinks />
      </div>
      <ContactForm />
    </section>
  </main>;
}
