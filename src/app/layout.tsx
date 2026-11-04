import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
  themeColor: "#1A100B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "interior design studio",
    "luxury interior design",
    "architectural atelier",
    "minimalist interior",
    "curated spaces",
    "bespoke residences",
    "editorial interior",
    "Colombo interior design",
    "Sri Lanka architecture",
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
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
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
    images: ["/images/og-image.jpg"],
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
      <body className="bg-[#1A100B] text-[#F6E7D0] selection:bg-[#E2C196] selection:text-[#1A100B] antialiased min-h-screen flex flex-col">
        {/* Semantic Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#E2C196] focus:text-[#1A100B] focus:font-medium focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F6E7D0]"
        >
          Skip to main content
        </a>

        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1 w-full overflow-hidden">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
