import HeroSection from "@/components/landing/hero-section";
import { setTrackingCookies } from "@/lib/marketing-tracking";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const trackingParams = {
    source: searchParams.utm_source,
    campaign: searchParams.utm_campaign,
    medium: searchParams.utm_medium,
  };

  // Set tracking cookies if parameters exist
  if (Object.values(trackingParams).some(Boolean)) {
    setTrackingCookies(trackingParams);
  }

  return (
    <>
      <HeroSection />
    </>
  );
}
