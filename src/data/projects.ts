export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  image: string;
  width: number;
  height: number;
  aspectRatio: string;
  spanDesktop: string;
  isArchCropped?: boolean;
  isSample: boolean;
  synopsis: string;
}

export const projects: Project[] = [
  {
    id: "monolith-residence",
    title: "The Monolith Residence",
    category: "Residential",
    location: "Colombo 07",
    image: "/images/portfolio-1.webp",
    width: 1600,
    height: 2000,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    isSample: true,
    synopsis:
      "A subterranean light court and monolithic fluted limestone volume framing secluded tropical courtyards.",
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir",
    category: "Commercial",
    location: "Galle Fort",
    image: "/images/portfolio-2.webp",
    width: 1600,
    height: 1200,
    aspectRatio: "4/3",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    isSample: true,
    synopsis:
      "A bespoke high-jewellery private salon set within historic coral-stone ramparts, finished in blackened jackfruit timber and raw silk.",
  },
  {
    id: "solarium-villa",
    title: "Solarium Villa",
    category: "Residential",
    location: "Bentota",
    image: "/images/portfolio-3.webp",
    width: 1500,
    height: 2000,
    aspectRatio: "3/4",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    isSample: true,
    synopsis:
      "A coastal sanctuary merging hand-applied lime plaster, aged teak portals, and unhurried ocean breeze passages.",
  },
  {
    id: "stonebridge-apartment",
    title: "Stonebridge Apartment",
    category: "Residential",
    location: "Colombo 03",
    image: "/images/portfolio-4.webp",
    width: 1600,
    height: 1200,
    aspectRatio: "4/3",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    isSample: true,
    synopsis:
      "A sky-level residence centered on a sculpted monolithic travertine island, brushed bronze joints, and quiet city vistas.",
  },
  {
    id: "haven-penthouse",
    title: "Haven Penthouse",
    category: "Residential",
    location: "Colombo 02",
    image: "/images/portfolio-5.webp",
    width: 1600,
    height: 2000,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-6",
    isArchCropped: true,
    isSample: true,
    synopsis:
      "A panoramic duplex wrapped in natural Belgian linen drapery, dark roast teak ceilings, and low-slung tactile upholstery.",
  },
  {
    id: "umbra-pavilion",
    title: "Umbra Pavilion",
    category: "Commercial",
    location: "Kandy",
    image: "/images/portfolio-6.webp",
    width: 1500,
    height: 2000,
    aspectRatio: "3/4",
    spanDesktop: "lg:col-span-6",
    isArchCropped: false,
    isSample: true,
    synopsis:
      "An intimate highland tea lounge pairing scorched timber joinery, local graphite granite hearths, and subdued warm illumination.",
  },
];
