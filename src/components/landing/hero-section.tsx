"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Particles from "../magicui/particles";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import { useSignUpDialog } from "../SignUpProvider";

export default function HeroSection() {
  const { mainText, subText } = siteConfig.copyWrite.hero;
  const cta = siteConfig.copyWrite.cta;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const { setIsOpen } = useSignUpDialog();

  return (
    <section
      id="hero"
      className="flex items-center relative mx-auto mt-32 px-6 text-center md:px-8 h-[calc(100vh-12rem)]"
    >
      <div className={cn("h-full")}>
        <Image
          src="/hc200.png"
          alt="Hero background"
          fill
          className={cn(
            "object-cover opacity-100 z-0 object-center",
            isMobile && "opacity-40 object-[70%_center]"
          )}
          priority
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-transparent via-15% to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent via-15% to-transparent" />
        {/* <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/90 via-20% to-60% to-transparent" /> */}
        <div
          className={cn(
            "absolute inset-0 z-[1] ",
            !isMobile &&
              "bg-gradient-to-r from-background via-background/30 via-40% to-transparent"
          )}
        />
      </div>
      <div
        className={cn(
          "relative z-10 text-left",
          isMobile && "text-center w-full"
        )}
      >
        <h1 className="py-6 text-5xl font-medium leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {mainText}
        </h1>
        <p className="mb-12 text-2xl font-semibold tracking-wide md:tracking-tight text-gray-200 md:text-3xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {subText}
        </p>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]"
        >
          <span>{cta}</span>
          <Logo width={20} height={20} />
        </Button>
      </div>
      <div className="absolute bottom-2 right-8 text-xs z-10 font-extralight">
        {siteConfig.copyWrite.hero.disclaimer}
      </div>
    </section>
  );
}
