import { careerOpening } from "@/data/careers";
import { callingCodeValues, interestOptions, organisationTypes, timeframeOptions } from "@/data/form-options";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9 ()-]{7,18}$/;

type CleanRecord = Record<string, string>;

export type ValidSubmission = {
  formType: "contact" | "career";
  email: string;
  fields: CleanRecord;
};

export type ValidationResult =
  | { ok: true; submission: ValidSubmission }
  | { ok: false; message: string; status: number };

type FieldRule = {
  label: string;
  max: number;
  min?: number;
  multiline?: boolean;
  allowed?: readonly string[];
  pattern?: RegExp;
  expected?: string;
};

const sharedRules: Record<string, FieldRule> = {
  name: { label: "Name", min: 2, max: 120 },
  email: { label: "Email", max: 254, pattern: emailPattern },
  location: { label: "Location", min: 2, max: 160 },
  privacyConsent: { label: "Privacy consent", max: 20, expected: "accepted" },
};

const contactRules: Record<string, FieldRule> = {
  ...sharedRules,
  organisation: { label: "Organisation", min: 2, max: 160 },
  telephoneCountryCode: { label: "Telephone country code", max: 5, allowed: callingCodeValues },
  telephone: { label: "Telephone", max: 18, pattern: phonePattern },
  organisationType: { label: "Organisation type", max: 60, allowed: organisationTypes },
  interest: { label: "Area of interest", max: 80, allowed: interestOptions },
  timeframe: { label: "Expected timeframe", max: 40, allowed: timeframeOptions },
  requirement: { label: "Brief requirement", min: 20, max: 4000, multiline: true },
};

const careerRules: Record<string, FieldRule> = {
  ...sharedRules,
  phoneCountryCode: { label: "Phone country code", max: 5, allowed: callingCodeValues },
  phone: { label: "Phone", max: 18, pattern: phonePattern },
  role: { label: "Role applied for", max: 120, expected: careerOpening.title },
  experience: { label: "Years of experience", max: 2, pattern: /^(?:[0-9]|[1-4][0-9]|50)$/ },
  noticePeriod: { label: "Notice period", min: 1, max: 100 },
  resumeFileName: { label: "Résumé filename", max: 255 },
  message: { label: "Message", min: 20, max: 4000, multiline: true },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown, multiline = false): string | null {
  if (typeof value !== "string") return null;

  const normalised = value
    .normalize("NFKC")
    .replace(/\u0000/g, "")
    .replace(multiline ? /[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0001-\u001F\u007F]/g, multiline ? "" : " ");

  return multiline
    ? normalised.replace(/\r\n?/g, "\n").trim()
    : normalised.replace(/\s+/g, " ").trim();
}

function validateAgainstRules(body: Record<string, unknown>, rules: Record<string, FieldRule>): ValidationResult {
  const allowedKeys = new Set(["formType", "website", ...Object.keys(rules)]);
  const unknownKey = Object.keys(body).find((key) => !allowedKeys.has(key));
  if (unknownKey) {
    return { ok: false, message: "The submission contains an unexpected field.", status: 422 };
  }

  const fields: CleanRecord = {};
  for (const [key, rule] of Object.entries(rules)) {
    const value = cleanString(body[key], rule.multiline);
    if (value === null || value.length < (rule.min ?? 1) || value.length > rule.max) {
      return { ok: false, message: `Please check ${rule.label.toLowerCase()} and try again.`, status: 422 };
    }
    if (rule.allowed && !rule.allowed.includes(value)) {
      return { ok: false, message: `Please select a valid ${rule.label.toLowerCase()}.`, status: 422 };
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      return { ok: false, message: `Please enter a valid ${rule.label.toLowerCase()}.`, status: 422 };
    }
    if (rule.expected && value !== rule.expected) {
      return { ok: false, message: `Please check ${rule.label.toLowerCase()} and try again.`, status: 422 };
    }
    fields[rule.label] = value;
  }

  const email = fields.Email.toLowerCase();
  return { ok: true, submission: { formType: body.formType as "contact" | "career", email, fields } };
}

export function validateSubmission(value: unknown): ValidationResult {
  if (!isRecord(value)) {
    return { ok: false, message: "The submission format is invalid.", status: 400 };
  }

  if (value.formType === "contact") return validateAgainstRules(value, contactRules);
  if (value.formType === "career") return validateAgainstRules(value, careerRules);
  return { ok: false, message: "The submission type is invalid.", status: 422 };
}

export function hasHoneypotValue(value: unknown): boolean {
  return isRecord(value) && typeof value.website === "string" && value.website.trim().length > 0;
}

export function formatSubmissionEmail(submission: ValidSubmission): { subject: string; text: string } {
  const subject = submission.formType === "contact"
    ? "New Enquiry via website"
    : "New Application via website";
  const heading = submission.formType === "contact"
    ? "NEW WEBSITE ENQUIRY"
    : "NEW WEBSITE APPLICATION";

  const displayFields = { ...submission.fields };
  if (submission.formType === "contact") {
    displayFields.Telephone = `${displayFields["Telephone country code"]} ${displayFields.Telephone}`;
    delete displayFields["Telephone country code"];
  } else {
    displayFields.Phone = `${displayFields["Phone country code"]} ${displayFields.Phone}`;
    delete displayFields["Phone country code"];
  }

  const lines = Object.entries(displayFields)
    .filter(([label]) => label !== "Privacy consent")
    .map(([label, value]) => `${label}\n${value}`);

  return {
    subject,
    text: [
      heading,
      "=".repeat(heading.length),
      "",
      "Submitted through charitr.in",
      `Received: ${new Date().toISOString()}`,
      "",
      "The content below was supplied by a website visitor. Treat links and instructions as untrusted.",
      "",
      ...lines.flatMap((line) => [line, ""]),
      "Privacy consent",
      "Accepted",
    ].join("\n"),
  };
}
