import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 *
 * Receives the QuoteForm payload, validates it, and:
 *   1. Pushes a Contact (with Lead notes) into Method CRM via REST API.
 *   2. Optionally emails a notification to NOTIFY_EMAIL through Resend
 *      (only if RESEND_API_KEY env var is configured).
 *
 * The Method push is the hard requirement. The email is a nice-to-have
 * backup — Method itself can also be configured to send notifications
 * internally on new Contact creation.
 *
 * Env vars consumed:
 *   METHOD_API_KEY     (required)  — Method CRM API key
 *   METHOD_TABLE       (optional)  — defaults to "Contacts"
 *   RESEND_API_KEY     (optional)  — enables backup email
 *   RESEND_FROM        (optional)  — e.g. "leads@roiselfstoragebuildings.com"
 *   NOTIFY_EMAIL       (optional)  — defaults to info@roimetalbuildings.com
 */

const METHOD_API_BASE = "https://rest.method.me/api/v1";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  buildingType?: string;
  size?: string;
  location?: string;
  details?: string;
};

function buildNotes(p: Payload): string {
  const lines = [
    p.buildingType ? `Building type: ${p.buildingType}` : null,
    p.size ? `Approximate size: ${p.size}` : null,
    p.location ? `Project location: ${p.location}` : null,
    p.details ? `Details: ${p.details}` : null,
    "",
    "Submitted from roiselfstoragebuildings.com quote form",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = (full || "").trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";
  return { firstName, lastName };
}

async function pushToMethod(p: Payload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.METHOD_API_KEY;
  if (!apiKey) return { ok: false, error: "METHOD_API_KEY not configured" };

  const table = process.env.METHOD_TABLE || "Contacts";
  const { firstName, lastName } = splitName(p.name ?? "");

  // Method's Contacts schema: FirstName / LastName / Email / Phone / Note (singular).
  // Lead-only entries set IsLeadStatusOnly=true and EntityType="Customer Lead" so
  // they show up in the Leads view rather than as full Customers.
  const body: Record<string, unknown> = {
    FirstName: firstName,
    LastName: lastName,
    Email: p.email ?? "",
    Phone: p.phone ?? "",
    Note: buildNotes(p),
    LeadSource: "Website",
    LeadStatus: "1 - New",
    IsLeadStatusOnly: true,
    EntityType: "Customer Lead",
    IsActive: true,
  };

  try {
    const res = await fetch(`${METHOD_API_BASE}/tables/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: {
        Authorization: `APIKey ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      // Method can be slow on a cold call — give it 15s before bailing.
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, error: `Method ${res.status}: ${text.slice(0, 500)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

async function sendBackupEmail(p: Payload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "skipped (no RESEND_API_KEY)" };

  const from = process.env.RESEND_FROM || "ROI Self Storage <leads@roiselfstoragebuildings.com>";
  const to = process.env.NOTIFY_EMAIL || "info@roimetalbuildings.com";
  const { firstName, lastName } = splitName(p.name ?? "");

  const subject = `New Quote Request — ${p.name || "Unknown"}${p.buildingType ? ` (${p.buildingType})` : ""}`;
  const text =
    `New website quote request\n\n` +
    `Name: ${p.name || "—"}\n` +
    `Email: ${p.email || "—"}\n` +
    `Phone: ${p.phone || "—"}\n\n` +
    `Building type: ${p.buildingType || "—"}\n` +
    `Approximate size: ${p.size || "—"}\n` +
    `Project location: ${p.location || "—"}\n\n` +
    `Details:\n${p.details || "—"}\n\n` +
    `— roiselfstoragebuildings.com`;

  const html =
    `<div style="font-family:system-ui,sans-serif;max-width:600px;color:#1a1a2e">` +
    `<h2 style="margin:0 0 16px;color:#E40C19">New Quote Request</h2>` +
    `<table style="border-collapse:collapse;width:100%;font-size:14px">` +
    [
      ["Name", p.name],
      ["Email", p.email],
      ["Phone", p.phone],
      ["Building type", p.buildingType],
      ["Approximate size", p.size],
      ["Project location", p.location],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#4a4a5a;width:160px">${k}</td><td style="padding:6px 0"><strong>${escape(v) || "—"}</strong></td></tr>`
      )
      .join("") +
    `</table>` +
    `<div style="margin-top:20px;padding:16px;background:#f5f5f7;border-radius:8px">` +
    `<div style="font-weight:600;margin-bottom:6px">Details</div>` +
    `<div style="white-space:pre-wrap;font-size:14px">${escape(p.details) || "—"}</div>` +
    `</div>` +
    `<p style="margin-top:24px;font-size:12px;color:#6b7280">Submitted from roiselfstoragebuildings.com — also pushed into Method CRM (Contact: ${escape(firstName)} ${escape(lastName)}).</p>` +
    `</div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], subject, text, html, reply_to: p.email || undefined }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, error: `Resend ${res.status}: ${text.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

function escape(s: string | undefined): string {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Validation
  if (!payload?.name || !payload?.email || !payload?.phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, email, phone)" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  // Fire Method CRM push and (optional) email in parallel.
  const [methodRes, emailRes] = await Promise.all([
    pushToMethod(payload),
    sendBackupEmail(payload),
  ]);

  // We treat the request as successful as long as Method CRM accepted it.
  // The email is best-effort; if it fails we still log it and move on.
  if (!methodRes.ok) {
    console.error("[quote] Method push failed:", methodRes.error);
    console.error("[quote] Payload was:", { ...payload, details: payload.details?.slice(0, 100) });
    if (!emailRes.ok) console.error("[quote] Email also failed:", emailRes.error);
    return NextResponse.json(
      { ok: false, error: "Could not save your request. Please call (865) 316-9009." },
      { status: 502 }
    );
  }

  if (!emailRes.ok) {
    // Method captured the lead; we just couldn't send the email. Log and continue.
    console.warn("[quote] Email skipped/failed (Method push succeeded):", emailRes.error);
  }

  return NextResponse.json({ ok: true });
}
