export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  themeColor: string;
  whatsappNumber: string;
  isPlaceholderWhatsApp: boolean;
  contact: {
    email: string;
    address: string;
    hours: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
}

/**
 * Placeholder format: international format without leading '+' or dashes.
 * Replace with your actual WhatsApp phone number (e.g. "94XXXXXXXXX").
 */
export const WHATSAPP_PLACEHOLDER = "94XXXXXXXXX";
export const ACTUAL_WHATSAPP_NUMBER: string = "94XXXXXXXXX";

const isPlaceholder =
  ACTUAL_WHATSAPP_NUMBER === WHATSAPP_PLACEHOLDER ||
  ACTUAL_WHATSAPP_NUMBER.includes("X");

// Dev-only console warning when WhatsApp number is still the placeholder
if (typeof window !== "undefined" && process.env.NODE_ENV === "development" && isPlaceholder) {
  console.warn(
    "[VELOURA] WhatsApp number is still set to placeholder '94XXXXXXXXX'. Update `ACTUAL_WHATSAPP_NUMBER` in `src/config/site.ts` with your live number."
  );
}

export const siteConfig: SiteConfig = {
  name: "VELOURA Interior Design Studio",
  shortName: "VELOURA",
  tagline: "Atelier of Architectural Interiors",
  description:
    "An editorial interior design atelier crafting bespoke residential and commercial sanctuaries through timeless materiality, architectural restraint, and warm minimalism.",
  url: "https://veloura.pixbeelabs.com",
  ogImage: "/images/og-image.jpg",
  themeColor: "#24160F",
  whatsappNumber: ACTUAL_WHATSAPP_NUMBER,
  isPlaceholderWhatsApp: isPlaceholder,
  contact: {
    email: "", // One source of truth: empty by default per instructions
    address: "", // Empty by default
    hours: "", // Empty by default
  },
  navigation: [
    { label: "Studio", href: "/studio" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Enquiry", href: "/enquiry" },
  ],
};
