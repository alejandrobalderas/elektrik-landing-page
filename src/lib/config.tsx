export const siteConfig = {
  name: "Elektrik",
  description: "Empowering the future of mobility. ",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["List of keywords here"],
  links: {
    email: "hello@elektrik.now",
  },
  copyWrite: {
    hero: {
      mainText: "Get Your Electric Motorcycle Today!",
      subText: "Just 3999 RM Upfront + 99 RM/month*",
      disclaimer: "*subject to mariicas approval",
    },
    cta: "Start Riding Elektrik",
  },
};

export type SiteConfig = typeof siteConfig;
