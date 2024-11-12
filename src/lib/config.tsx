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
      mainText: "Main Text",
      subText: "Sub Text",
    },
    cta: "CTA",
  },
};

export type SiteConfig = typeof siteConfig;
