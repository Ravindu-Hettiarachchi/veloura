import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { MotionProvider } from "@/components/motion/MotionProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#24160F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "interior design",
    "luxury interior design",
    "architectural atelier",
    "minimalist interior",
    "curated spaces",
    "bespoke residences",
    "editorial interior",
    "Colombo interior design",
  ],
  authors: [{ name: "VELOURA Atelier" }],
  creator: "VELOURA",
  openGraph: {
    title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "VELOURA Interior Design Studio Architectural Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body className="bg-[#24160F] text-[#F6E7D0] selection:bg-[#E2C196] selection:text-[#24160F] antialiased">
        {/* Semantic Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#E2C196] focus:text-[#24160F] focus:font-medium focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F6E7D0]"
        >
          Skip to main content
        </a>

        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
