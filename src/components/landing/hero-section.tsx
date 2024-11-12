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

export default function HeroSection() {
  const { mainText, subText } = siteConfig.copyWrite.hero;
  const cta = siteConfig.copyWrite.cta;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  return (
    <section
      id="hero"
      className="flex items-center relative mx-auto mt-32 px-6 text-center md:px-8 h-[calc(100vh-12rem)]"
    >
      <div className={cn("")}>
        <Image
          src="/hc200.svg"
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
        <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {subText}
        </p>
        <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
          <span>{cta}</span>
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
