import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact — FK Solutions", description: "Start a conversation with FK Solutions about an AI product, custom software, automation, or partnership." };

export default function ContactPage() {
  return <main className="contact-page">
    <section className="contact-shell">
      <div className="contact-copy"><span className="section-kicker">Contact / Start here</span><h1>Let’s solve something <em>worth solving.</em></h1><p>Tell us about the workflow, product idea, or operational problem. A useful first conversation starts with context—not a sales pitch.</p><div className="contact-guide"><span>Helpful context</span><ul><li>What is difficult today?</li><li>Who experiences the problem?</li><li>What would a better outcome look like?</li></ul></div></div>
      <ContactForm />
    </section>
  </main>;
}
