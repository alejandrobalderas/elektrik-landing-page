"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItem = [
  {
    id: 1,
    label: "Features",
    href: "/features",
  },
  {
    id: 2,
    label: "Pricing",
    href: "#",
  },
  {
    id: 3,
    label: "Careers",
    href: "#",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "#",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-none opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-14 items-center justify-between">
          <Link className="text-md flex items-center" href="/">
            {siteConfig.name}
          </Link>

          <div className="ml-auto flex h-full items-center">
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "mr-6 text-sm"
              )}
              href="/signup"
            >
              {siteConfig.copyWrite.cta}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}