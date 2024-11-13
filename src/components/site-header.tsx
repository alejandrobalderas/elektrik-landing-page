"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Logo from "./logo";
import SiteIcon from "./site-icon";
import { useSignUpDialog } from "./SignUpProvider";

export function SiteHeader() {
  const { setIsOpen } = useSignUpDialog();
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-none opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-20 items-center justify-between">
          <Link className="" href="/">
            <SiteIcon />
          </Link>

          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {siteConfig.copyWrite.cta}
            <Logo width={20} height={20} />
          </Button>
        </div>
      </header>
    </>
  );
}
