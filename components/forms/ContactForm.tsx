"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import { countryCallingCodes, interestOptions, organisationTypes, timeframeOptions } from "@/data/form-options";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
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
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType: "contact" }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit the form.");
      setStatus("success");
      setMessage(result.message || "Thank you. Your enquiry has been received.");
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
        <label>Organisation <input name="organisation" autoComplete="organization" required /></label>
        <label>Work email <input name="email" type="email" autoComplete="email" required /></label>
        <fieldset className="phone-field">
          <legend>Telephone</legend>
          <div className="phone-control">
            <select name="telephoneCountryCode" defaultValue="+91" required aria-label="Telephone country code">
              {countryCallingCodes.map(({ country, code }) => <option key={`${country}-${code}`} value={code}>{country} ({code})</option>)}
            </select>
            <input
              name="telephone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              minLength={7}
              maxLength={18}
              aria-label="Telephone number"
              placeholder="98765 43210"
              onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/[^0-9 ()-]/g, ""); }}
            />
          </div>
        </fieldset>
        <label>Organisation type
          <select name="organisationType" required defaultValue="">
            <option value="" disabled>Select one</option>
            {organisationTypes.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Location <input name="location" autoComplete="address-level2" required /></label>
        <label>Area of interest
          <select name="interest" required defaultValue="">
            <option value="" disabled>Select one</option>
            {interestOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Expected timeframe
          <select name="timeframe" required defaultValue="">
            <option value="" disabled>Select one</option>
            {timeframeOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <label>Brief requirement <textarea name="requirement" rows={6} required minLength={20} placeholder="What are you trying to build, improve or understand?" /></label>
      <label className="honeypot" aria-hidden="true">Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent-field"><input name="privacyConsent" type="checkbox" value="accepted" required /> <span>I consent to Charitr using this information to respond to my enquiry. See the <a href="/privacy-policy">Privacy Policy</a>.</span></label>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <><LoaderCircle className="spin" size={18} /> Sending…</> : "Send enquiry"}
      </button>
      {status !== "idle" && status !== "sending" && (
        <p className={`form-message form-message--${status}`} role="status">
          {status === "success" ? <CheckCircle2 size={19} /> : <AlertCircle size={19} />}{message}
        </p>
      )}
      <p className="form-note">When server-side email delivery is configured, this information is sent to Charitr as a structured plain-text email. It is not written to a website database.</p>
    </form>
  );
}
