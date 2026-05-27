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
 *   METHOD_API_KEY            (required)  — Method CRM API key
 *   METHOD_LEAD_ASSIGNEE_ID   (optional)  — Method user RecordID for default
 *                                            lead assignee. Defaults to 5 (Dave Maxe).
 *                                            4=Lisa, 5=Dave, 10=Blaise, 12=Jamie, 14=Steven.
 *   RESEND_API_KEY            (optional)  — enables backup email
 *   RESEND_FROM               (optional)  — e.g. "leads@roiselfstoragebuildings.com"
 *   NOTIFY_EMAIL              (optional)  — defaults to info@roimetalbuildings.com
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

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = (full || "").trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";
  return { firstName, lastName };
}

function buildActivityComments(p: Payload): string {
  // HTML format to match what Method's existing web-to-lead activities use.
  // Activity Comments are rendered as HTML in Method's UI.
  const escape = (s: string | undefined) =>
    (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const lines = [
    `<p><strong>Review your Quote Lead</strong></p>`,
    p.buildingType ? `<p>Interest in: ${escape(p.buildingType)}</p>` : null,
    p.size ? `<p>Approximate Size: ${escape(p.size)}</p>` : null,
    p.location ? `<p>Project Location: ${escape(p.location)}</p>` : null,
    p.phone ? `<p>Phone: ${escape(p.phone)}</p>` : null,
    p.email ? `<p>Email: ${escape(p.email)}</p>` : null,
    p.details ? `<p>Details: ${escape(p.details)}</p>` : null,
    `<p><em>Submitted from roiselfstoragebuildings.com</em></p>`,
  ];
  return lines.filter(Boolean).join("");
}

/**
 * Push a lead to Method CRM in THREE steps:
 *   1. POST /Customer with EntityType="Customer Lead" + IsActive=true +
 *      IsLeadStatusOnly=true. This creates the LEAD entity that surfaces
 *      in Lisa's Leads view in Method's UI. Method AUTOMATICALLY creates
 *      a linked Primary Contact (Entity_RecordID=<customerId>) as a side
 *      effect — we do NOT create a second one.
 *   2. GET /Contacts?filter=Entity_RecordID eq <customerId> to find the
 *      RecordID of the auto-created Primary Contact. We need this for the
 *      Activity link in step 3.
 *   3. POST /Activity with Contacts=<contactId>, ActivityType="Phone Call
 *      Outgoing", AssignedTo=<salesperson>. This is the actionable task
 *      that surfaces in Dave's (or whoever's) sales workflow.
 *
 * CRITICAL Method API quirks (learned the hard way):
 *   - Method's filter syntax is BARE `filter=` (not OData `$filter=`).
 *     OData-style $filter / $orderby are silently ignored — they appear
 *     to work but actually return the first 10 records by RecordID.
 *   - /Customer auto-spawns a /Contacts record with the same person fields
 *     (FirstName/LastName/Email/Phone). Posting a second /Contacts with
 *     Entity_RecordID=<customerId> creates a DUPLICATE that pollutes the UI.
 *   - Activity.Contacts requires a /Contacts RecordID, not a /Customer one.
 *   - The Primary Contact cannot be deleted without deleting the Customer.
 *
 * If step 1 fails: hard error (lead is lost).
 * If step 2 fails: Customer is in Method (visible in UI) but no Activity —
 *                  log warning, still return ok.
 * If step 3 fails: same as above.
 */
async function pushToMethod(p: Payload): Promise<{
  ok: boolean;
  error?: string;
  customerId?: number;
  contactId?: number;
  activityId?: number;
}> {
  const apiKey = process.env.METHOD_API_KEY;
  if (!apiKey) return { ok: false, error: "METHOD_API_KEY not configured" };

  const { firstName, lastName } = splitName(p.name ?? "");
  const fullName = `${firstName} ${lastName}`.trim() || (p.email ?? "");

  const headers = {
    Authorization: `APIKey ${apiKey}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  /** Posts JSON to Method and returns the new RecordID, or throws. */
  async function postAndReadId(path: string, body: unknown): Promise<number> {
    const res = await fetch(`${METHOD_API_BASE}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`${path} ${res.status}: ${text.slice(0, 400)}`);
    }
    const raw = (await res.text()).trim().replace(/^"|"$/g, "");
    const id = Number(raw);
    if (!Number.isFinite(id)) throw new Error(`${path} returned non-numeric ID: ${raw.slice(0, 100)}`);
    return id;
  }

  /**
   * Look up the auto-created Primary Contact for a Customer. Method spawns
   * this asynchronously, so we retry briefly. Uses Method's BARE `filter=`
   * syntax (NOT OData `$filter=`, which is silently ignored).
   */
  async function findPrimaryContactId(customerRecordId: number): Promise<number | undefined> {
    const url = `${METHOD_API_BASE}/tables/Contacts?filter=${encodeURIComponent(`Entity_RecordID eq ${customerRecordId}`)}`;
    for (let attempt = 0; attempt < 4; attempt++) {
      if (attempt > 0) await new Promise((r) => setTimeout(r, 500 * attempt));
      const res = await fetch(url, { headers, signal: AbortSignal.timeout(10000) });
      if (!res.ok) continue;
      const data = (await res.json().catch(() => null)) as
        | { count?: number; value?: Array<{ RecordID?: number }> }
        | null;
      const hit = data?.value?.find((c) => typeof c?.RecordID === "number");
      if (hit?.RecordID) return hit.RecordID;
    }
    return undefined;
  }

  let customerId: number | undefined;
  let contactId: number | undefined;
  let activityId: number | undefined;

  try {
    // --- Step 1: Create the Customer (lead entity) --------------------
    // LeadStatus/LeadSource use enum values from Method's reference tables:
    //   LeadStatus "1 - Has Need (Warm)" (RecordID 5) — fits a web-form prospect
    //   LeadSource "Web - ROI Self Storage" (RecordID 26) — dedicated tag
    //     Lisa created so self-storage leads are distinguishable from the
    //     parent ROI Metal Buildings web form.
    //   SalesTaxCode "TN-Loudon" — matches Method's existing web-to-lead
    //     pattern. Without this the UI displays leads as "tax exempt".
    const customerBody = {
      Name: fullName,
      FirstName: firstName,
      LastName: lastName,
      Email: p.email ?? "",
      Phone: p.phone ?? "",
      EntityType: "Customer Lead",
      IsActive: true,
      IsLeadStatusOnly: true,
      IsTaxable: true,
      SalesTaxCode: "TN-Loudon",
      LeadStatus: "1 - Has Need (Warm)",
      LeadStatus_RecordID: 5,
      LeadSource: "Web - ROI Self Storage",
      LeadSource_RecordID: 26,
    };
    customerId = await postAndReadId("/tables/Customer", customerBody);
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Customer create failed" };
  }

  // --- Step 2: Look up the Primary Contact Method auto-created -------
  // Method spawns this Contact as a side effect of Customer creation.
  // We must NOT create a second Contact (that's the duplicate Lisa saw).
  contactId = await findPrimaryContactId(customerId);
  if (!contactId) {
    // Lead is visible in Method UI; we just can't attach an Activity to it.
    console.warn(`[quote] Could not locate auto-created Contact for Customer ${customerId} — skipping Activity.`);
    return { ok: true, customerId };
  }

  // --- Step 3: Create the Activity (task for the sales team) ----------
  // ActivityType_RecordID:   2  = "Phone Call Outgoing" (matches Method's existing
  //                              web-to-lead pattern; surfaces in sales workflow)
  // ActivityStatus_RecordID: 1  = "Not Started"
  // AssignedTo_RecordID:     REQUIRED by Method. Configurable via env var.
  //                          Known user RecordIDs:
  //                            4  = Lisa Wirth
  //                            5  = Dave Maxe (default)
  //                            10 = Blaise Roper
  //                            12 = Jamie Lawson
  //                            14 = Steven Braisted
  try {
    const assignedToId = Number(process.env.METHOD_LEAD_ASSIGNEE_ID || 5);
    const activityBody = {
      ActivityType_RecordID: 2,
      ActivityStatus_RecordID: 1,
      AssignedTo_RecordID: assignedToId,
      Contacts: contactId,
      Comments: buildActivityComments(p),
    };
    activityId = await postAndReadId("/tables/Activity", activityBody);
  } catch (err) {
    // Customer + Contact exist (visible in UI). Just no actionable task.
    console.warn(`[quote] Activity create failed (Customer ${customerId} + Contact ${contactId} exist):`, err instanceof Error ? err.message : err);
    return { ok: true, customerId, contactId };
  }

  return { ok: true, customerId, contactId, activityId };
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
