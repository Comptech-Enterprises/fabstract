import { NextRequest, NextResponse } from "next/server";
import { appendContactSubmission } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await appendContactSubmission({ name, email, company: company || "", message });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to append contact submission", err);
    if (process.env.NODE_ENV === "development" || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
