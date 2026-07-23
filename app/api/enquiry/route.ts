import { NextResponse } from "next/server";
import { formatSubmissionEmail, hasHoneypotValue, validateSubmission } from "@/lib/enquiry";

const maximumBodyBytes = 32_000;
const emailRecipient = "anup.n@charitr.in";
const rateLimitWindowMs = 10 * 60 * 1000;
const maximumRequestsPerWindow = 5;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function clientKey(request: Request): string {
  return request.headers.get("cf-connecting-ip") ?? "local";
}

function isRateLimited(request: Request): boolean {
  const now = Date.now();
  const key = clientKey(request);
  const current = requestCounts.get(key);

  if (requestCounts.size > 1000) {
    for (const [storedKey, value] of requestCounts) {
      if (value.resetAt <= now) requestCounts.delete(storedKey);
    }
  }

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > maximumRequestsPerWindow;
}

export async function POST(request: Request) {
  try {
    if (request.headers.get("content-type")?.split(";")[0] !== "application/json") {
      return NextResponse.json({ message: "The submission format is invalid." }, { status: 415 });
    }

    const declaredLength = Number(request.headers.get("content-length") ?? 0);
    if (declaredLength > maximumBodyBytes) {
      return NextResponse.json({ message: "The submission is too large." }, { status: 413 });
    }

    if (isRateLimited(request)) {
      return NextResponse.json({ message: "Too many attempts. Please wait before trying again." }, { status: 429 });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maximumBodyBytes) {
      return NextResponse.json({ message: "The submission is too large." }, { status: 413 });
    }

    const body: unknown = JSON.parse(rawBody);
    if (hasHoneypotValue(body)) {
      return NextResponse.json({ message: "Thank you. Your enquiry has been received." });
    }

    const validation = validateSubmission(body);
    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: validation.status });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.FORM_FROM_EMAIL?.trim();
    if (!apiKey || !from || from.length > 254 || /[\r\n]/.test(from)) {
      return NextResponse.json(
        {
          message: "Email delivery is not configured in this local environment. Your information was not stored or sent. Please email info@charitr.in.",
          deliveryConfigured: false,
        },
        { status: 503 },
      );
    }

    const email = formatSubmissionEmail(validation.submission);
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "Charitr-Website/1.0",
      },
      body: JSON.stringify({
        from,
        to: [emailRecipient],
        subject: email.subject,
        text: email.text,
        reply_to: validation.submission.email,
      }),
    });

    if (!delivery.ok) {
      return NextResponse.json(
        { message: "We could not deliver the message. Please email info@charitr.in." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: validation.submission.formType === "contact"
        ? "Thank you. Your enquiry has been emailed to Charitr."
        : "Thank you. Your application details have been emailed to Charitr.",
      deliveryConfigured: true,
    });
  } catch {
    return NextResponse.json({ message: "We could not process the submission. Please email info@charitr.in." }, { status: 400 });
  }
}
