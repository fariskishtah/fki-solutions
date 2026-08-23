"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [notice, setNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
      <div className="form-row">
        <label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
      </div>
      <label>Company / organization<input name="company" autoComplete="organization" placeholder="Optional" /></label>
      <label>What are you interested in?
        <select required name="interest" defaultValue="">
          <option value="" disabled>Select an option</option>
          {siteConfig.inquiryTypes.map((interest) => <option key={interest}>{interest}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label>Message<textarea required name="message" rows={6} placeholder="Tell us about the problem, workflow, or opportunity." /></label>
      <button className="button button-primary form-button" type="submit">Prepare inquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note" id="form-note">V1 preview: form delivery is not connected yet. Your information stays in this browser.</p>
      {notice ? <p className="form-feedback" role="status">Your inquiry is ready, but it has not been sent. Connect an email or form service before launch.</p> : null}
    </form>
  );
}
