"use server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

type TrackingParams = {
  source?: string;
  campaign?: string;
  medium?: string;
};

export const setTrackingCookies = async (
  params: TrackingParams
): Promise<string> => {
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

  if (params.source) {
    cookieStore.set("utm_source", params.source, { expires });
  }
  if (params.campaign) {
    cookieStore.set("utm_campaign", params.campaign, { expires });
  }
  if (params.medium) {
    cookieStore.set("utm_medium", params.medium, { expires });
  }
  const uuid = cookieStore.get("uuid")?.value || uuidv4();
  cookieStore.set("uuid", uuidv4(), { expires });

  return uuid;
};
