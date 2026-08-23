import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteMotion } from "@/components/SiteMotion";
import { siteUrl } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FK Solutions — AI & Software Solutions",
    template: "%s — FK Solutions",
  },
  description:
    "FK Solutions builds intelligent products, AI automation systems, and scalable software for real-world business problems.",
  openGraph: {
    title: "FK Solutions — AI & Software Solutions",
    description: "Intelligent products and scalable software built for real-world business problems.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "FK Solutions — Intelligent Solutions for Real-World Problems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FK Solutions — AI & Software Solutions",
    description: "Intelligent products and scalable software built for real-world business problems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        <SiteMotion />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
