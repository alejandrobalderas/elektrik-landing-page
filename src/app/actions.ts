"use server";

import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function trackLead({
  firstName,
  lastName,
  email,
  telephone,
}: {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}) {
  const cookieStore = await cookies();
  const source = cookieStore.get("utm_source");
  const campaign = cookieStore.get("utm_campaign");
  const medium = cookieStore.get("utm_medium");

  try {
    await db.lead.create({
      data: {
        firstName,
        lastName,
        email,
        telephone,
        source: source?.value,
        campaign: campaign?.value,
        medium: medium?.value,
      },
    });

    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    cookieStore.set("lead_tracked", "true", { expires });
  } catch (error) {
    console.error("Failed to track lead:", error);
  }
}
