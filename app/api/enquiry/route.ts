import { NextResponse } from "next/server";

type Submission = Record<string, unknown> & {
  formType?: "contact" | "career";
  name?: string;
  email?: string;
  privacyConsent?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as Submission;

    if (body.website) {
      return NextResponse.json({ message: "Submission declined." }, { status: 400 });
    }

    if (
      !body.name ||
      typeof body.name !== "string" ||
      body.name.trim().length < 2 ||
      !body.email ||
      typeof body.email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
      body.privacyConsent !== "accepted"
    ) {
      return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 422 });
    }

    // SERVER-SIDE INTEGRATION PLACEHOLDER:
    // Connect a verified CRM/email endpoint through environment variables.
    // Do not log personal information or add credentials to source control.
    const isConfigured = Boolean(process.env.FORM_DELIVERY_ENDPOINT);

    return NextResponse.json({
      message: isConfigured
        ? "Thank you. Your details have been received."
        : "Thank you. The form is valid. Secure delivery must be configured before public launch; please also email info@charitr.in.",
      deliveryConfigured: isConfigured,
    });
  } catch {
    return NextResponse.json({ message: "We could not process the submission. Please email info@charitr.in." }, { status: 400 });
  }
}

