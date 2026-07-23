"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import { countryCallingCodes } from "@/data/form-options";

type RecruitmentFormProps = {
  roleTitle: string;
};

export function RecruitmentForm({ roleTitle }: RecruitmentFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    try {
      const formData = new FormData(form);
      const resume = formData.get("resume");
      const payload = Object.fromEntries([...formData.entries()].filter(([key]) => key !== "resume"));
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          resumeFileName: resume instanceof File && resume.name ? resume.name : "No file selected",
          formType: "career",
        }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit the application.");
      setStatus("success");
      setMessage(result.message || "Your application details have been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please email info@charitr.in.");
    }
  }

  return (
    <form className="professional-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>Name <input name="name" autoComplete="name" required minLength={2} /></label>
        <label>Email <input name="email" type="email" autoComplete="email" required /></label>
        <fieldset className="phone-field">
          <legend>Phone</legend>
          <div className="phone-control">
            <select name="phoneCountryCode" defaultValue="+91" required aria-label="Phone country code">
              {countryCallingCodes.map(({ country, code }) => <option key={`${country}-${code}`} value={code}>{country} ({code})</option>)}
            </select>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              minLength={7}
              maxLength={18}
              aria-label="Phone number"
              placeholder="98765 43210"
              onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/[^0-9 ()-]/g, ""); }}
            />
          </div>
        </fieldset>
        <label>Current location <input name="location" autoComplete="address-level2" required /></label>
        <label>Role applied for <input name="role" value={roleTitle} readOnly /></label>
        <label>Years of experience <input name="experience" type="number" min="0" max="50" required /></label>
        <label>Notice period <input name="noticePeriod" required placeholder="For example: 30 days" /></label>
        <label>Résumé <input name="resume" type="file" accept=".pdf,.doc,.docx" aria-describedby="resume-note" /></label>
      </div>
      <p id="resume-note" className="form-note">Local preview only: the résumé file is not uploaded or stored. Secure application delivery must be configured before launch.</p>
      <label>Message <textarea name="message" rows={6} required minLength={20} placeholder="Share your relevant experience, current and expected compensation, and why you are interested." /></label>
      <label className="honeypot" aria-hidden="true">Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent-field"><input name="privacyConsent" type="checkbox" value="accepted" required /> <span>I consent to Charitr processing my details for recruitment. See the <a href="/privacy-policy">Privacy Policy</a>.</span></label>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <><LoaderCircle className="spin" size={18} /> Sending…</> : "Submit application details"}
      </button>
      {status !== "idle" && status !== "sending" && (
        <p className={`form-message form-message--${status}`} role="status">
          {status === "success" ? <CheckCircle2 size={19} /> : <AlertCircle size={19} />}{message}
        </p>
      )}
    </form>
  );
}
