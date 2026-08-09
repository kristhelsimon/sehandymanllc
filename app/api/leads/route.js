import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROJECT_DESCRIPTION_FIELD_ID = "22KM3TB0PyjrvfT0b76h";
const SERVICES = new Set([
  "Finish Carpentry",
  "Electrical & Lighting",
  "Installations",
  "Maintenance & Repairs",
  "Drywall & Painting",
  "Flooring",
  "Remodeling",
  "Not sure yet",
]);

function parseContact(value) {
  const contact = String(value || "").trim();

  if (EMAIL_PATTERN.test(contact)) {
    return { email: contact.toLowerCase() };
  }

  const digits = contact.replace(/\D/g, "");
  if (digits.length === 10) return { phone: `+1${digits}` };
  if (digits.length === 11 && digits.startsWith("1")) return { phone: `+${digits}` };

  return null;
}

function apiError(message, status) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim().slice(0, 120);
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim().slice(0, 4000);
    const contact = parseContact(body.contact);

    if (!name || !service || !message) {
      return apiError("Please complete every field.", 400);
    }
    if (!SERVICES.has(service)) {
      return apiError("Please select a valid service.", 400);
    }
    if (!contact) {
      return apiError("Enter a valid email address or 10-digit phone number.", 400);
    }

    const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!token || !locationId) {
      console.error("GHL_PRIVATE_INTEGRATION_TOKEN or GHL_LOCATION_ID is not configured.");
      return apiError("Online requests are being configured. Please call (206) 670-3045.", 503);
    }

    const nameParts = name.split(/\s+/);
    const firstName = nameParts.shift() || name;
    const lastName = nameParts.join(" ");
    const projectDetails = [
      `Requested service: ${service}`,
      "",
      message,
      body.pageUrl ? `\nSubmitted from: ${String(body.pageUrl).slice(0, 500)}` : "",
    ].join("\n");

    const ghlResponse = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        name,
        ...contact,
        source: "S & E Handyman website",
        country: "US",
        customFields: [
          {
            id: PROJECT_DESCRIPTION_FIELD_ID,
            fieldValue: projectDetails,
          },
        ],
      }),
      cache: "no-store",
    });

    if (!ghlResponse.ok) {
      const responseBody = await ghlResponse.text();
      console.error("GHL contact upsert failed:", ghlResponse.status, responseBody.slice(0, 1000));
      return apiError("I couldn't send your request. Please call (206) 670-3045.", 502);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Website lead submission failed:", error);
    return apiError("I couldn't send your request. Please call (206) 670-3045.", 500);
  }
}
