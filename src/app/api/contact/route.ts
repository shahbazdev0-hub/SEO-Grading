import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  service?: string;
  keywords?: string;
  market?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire this up to an email/CRM provider (e.g. Resend, SendGrid, HubSpot)
  // using an API key stored in an environment variable. For now this endpoint
  // validates the payload and logs it server-side.
  console.log("New contact form submission:", body);

  return NextResponse.json({ success: true });
}
