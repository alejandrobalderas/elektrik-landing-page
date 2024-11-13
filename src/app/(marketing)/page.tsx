import HeroSection from "@/components/landing/hero-section";
import SignUpDialog from "@/components/SignUpDialog";
import WaitingListDialog from "@/components/WaitingListDialog";
import MarketingTracker from "./_components/marketing-tracker";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();

  const isLeadTracked = cookieStore.get("lead_tracked");
  return (
    <>
      <HeroSection />
      <MarketingTracker />
      <SignUpDialog />
      <WaitingListDialog open={!!isLeadTracked?.value} />
    </>
  );
}
