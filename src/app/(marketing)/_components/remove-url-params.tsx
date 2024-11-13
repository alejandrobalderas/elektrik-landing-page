"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RemoveURLParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we have UTM params
    if (
      searchParams.has("utm_source") ||
      searchParams.has("utm_campaign") ||
      searchParams.has("utm_medium")
    ) {
      // Clean URL by pushing new route without params
      router.replace("/", { scroll: false });
    }
  }, [searchParams, router]);

  return <></>;
};

export default RemoveURLParams;
