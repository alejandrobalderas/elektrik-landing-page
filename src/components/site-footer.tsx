import { siteConfig } from "@/lib/config";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

// const footerNavs = [
//   {
//     label: "Product",
//     items: [
//       {
//         href: "/",
//         name: "Email Collection",
//       },
//       {
//         href: "/pricing",
//         name: "Pricing",
//       },
//       {
//         href: "/faq",
//         name: "FAQ",
//       },
//     ],
//   },

//   {
//     label: "Community",
//     items: [
//       {
//         href: "/",
//         name: "Discord",
//       },
//       {
//         href: "/",
//         name: "Twitter",
//       },
//       {
//         href: "mailto:hello@chatcollect.com",
//         name: "Email",
//       },
//     ],
//   },
//   {
//     label: "Legal",
//     items: [
//       {
//         href: "/terms",
//         name: "Terms",
//       },

//       {
//         href: "/privacy",
//         name: "Privacy",
//       },
//     ],
//   },
// ];

const footerSocials = [
  {
    href: "",
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: "",
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer className="h-14">
      <div className="flex flex-row mx-auto w-full max-w-screen-2xl justify-between ">
        <div className="px-8 p-4 py-2 gap-4">
          <Link href="/" className="flex items-center justify-center gap-2">
            <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-end rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <span className=" text-right text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Elektrik
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
