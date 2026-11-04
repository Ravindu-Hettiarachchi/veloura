export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  themeColor: string;
  whatsApp: {
    number: string;
    isPlaceholder: boolean;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    email: string;
    studio: string;
    city: string;
    hours: string;
  };
}

/**
 * Site configuration.
 * IMPORTANT: Replace WHATSAPP_NUMBER with your actual international phone number
 * format (e.g. "94771234567" without leading '+' or dashes).
 */
export const WHATSAPP_NUMBER_PLACEHOLDER: string = "94XXXXXXXXX";
export const ACTUAL_WHATSAPP_NUMBER: string = "94XXXXXXXXX"; // Replace with your WhatsApp number

export const siteConfig: SiteConfig = {
  name: "VELOURA Interior Design Studio",
  shortName: "VELOURA",
  tagline: "Architecture of Quiet Luxury",
  description:
    "An editorial interior design atelier crafting bespoke residential and commercial sanctuaries through timeless materiality, architectural restraint, and warm minimalism.",
  url: "https://veloura.pixbeelabs.com",
  ogImage: "/images/hero.jpg",
  themeColor: "#24160F",
  whatsApp: {
    number: ACTUAL_WHATSAPP_NUMBER,
    isPlaceholder:
      ACTUAL_WHATSAPP_NUMBER === WHATSAPP_NUMBER_PLACEHOLDER ||
      (ACTUAL_WHATSAPP_NUMBER as string).indexOf("X") !== -1,
  },
  navigation: [
    { label: "Studio", href: "#studio" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Enquiry", href: "#enquiry" },
  ],
  contact: {
    email: "atelier@veloura.pixbeelabs.com",
    studio: "14 Ward Place, Cinnamon Gardens",
    city: "Colombo 07, Sri Lanka",
    hours: "Monday – Friday: By Appointment",
  },
};
