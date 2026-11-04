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
  themeColor: "#F2E8DC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} — Interior Design Studio`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "interior design studio",
    "interior design Sri Lanka",
    "Colombo interior designer",
    "home renovation Colombo",
    "custom furniture Colombo",
    "residential interior design",
  ],
  authors: [{ name: "VELOURA" }],
  creator: "VELOURA",
  openGraph: {
    title: `${siteConfig.shortName} — Interior Design Studio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VELOURA Interior Design Studio Colombo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — Interior Design Studio`,
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
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body className="bg-[#F2E8DC] text-[#3B2417] selection:bg-[#E2C196] selection:text-[#24160F] antialiased min-h-screen flex flex-col font-sans">
        {/* Semantic Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#3B2417] focus:text-[#F6E7D0] focus:font-medium focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E2C196]"
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
