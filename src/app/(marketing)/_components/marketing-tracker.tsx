"use client";

import { trackPageView } from "@/app/actions";
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
    const trackVisit =
      searchParams.has("utm_source") ||
      searchParams.has("utm_campaign") ||
      searchParams.has("utm_medium");

    const trackMarketing = async () => {
      if (trackVisit) {
        const trackingParams = {
          source: searchParams.get("utm_source") || undefined,
          campaign: searchParams.get("utm_campaign") || undefined,
          medium: searchParams.get("utm_medium") || undefined,
        };

        setIsOpen(true);
        const uuid = await setTrackingCookies(trackingParams);
        await trackPageView({ uuid, ...trackingParams });
        router.replace("/", { scroll: false });
      }
    };
    trackMarketing();
  }, [setTrackingCookies, setIsOpen, router, searchParams]);

  return null;
};

export default MarketingTracker;
