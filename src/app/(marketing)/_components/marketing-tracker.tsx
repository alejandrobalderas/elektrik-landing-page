"use client";

import { useSignUpDialog } from "@/components/SignUpProvider";
import { setTrackingCookies } from "@/lib/marketing-tracking";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type TrackingParams = {
  source?: string;
  campaign?: string;
  medium?: string;
};

const MarketingTracker = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { setIsOpen } = useSignUpDialog();

  useEffect(() => {
    if (
      searchParams.has("utm_source") ||
      searchParams.has("utm_campaign") ||
      searchParams.has("utm_medium")
    ) {
      const trackingParams = {
        source: searchParams.get("utm_source") || undefined,
        campaign: searchParams.get("utm_campaign") || undefined,
        medium: searchParams.get("utm_medium") || undefined,
      };
      // Clean URL by pushing new route without params
      setTrackingCookies(trackingParams);
      setIsOpen(true);
      router.replace("/", { scroll: false });
    }
  }, [setTrackingCookies, setIsOpen, router, searchParams]);

  return null;
};

export default MarketingTracker;
