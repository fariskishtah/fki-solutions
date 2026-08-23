export const siteConfig = {
  name: "FK Solutions",
  email: "fkishtah@gmail.com",
  location: "Cairo, Egypt",
  portfolioUrl: "https://fariskishtah.github.io",
  phone: null as string | null,
  renderPhone: false,
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://fk-solutions.aiarabic362.chatgpt.site";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/faris-kishtah-59370b367",
  github: "https://github.com/fariskishtah",
  portfolio: "https://fariskishtah.github.io",
  facebook: null,
  instagram: null,
  youtube: null,
  x: null,
  tiktok: null,
} as const;

export const visibleSocialLinks = Object.entries(socialLinks).filter(
  ([, href]) => href !== null,
) as [keyof typeof socialLinks, string][];
