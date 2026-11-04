export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  year: string;
  image: string;
  width: number;
  height: number;
  aspectRatio: string;
  spanDesktop: string;
  isArchCropped?: boolean;
  synopsis: string;
}

export const projects: Project[] = [
  {
    id: "monolith-residence",
    title: "The Monolith Residence",
    category: "Residential",
    location: "Kensington, Melbourne",
    year: "2025",
    image: "/images/portfolio-1-monolith-residence.jpg",
    width: 1200,
    height: 1500,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    synopsis:
      "A monumental family residence sculpted in fluted limestone, brushed bronze joinery, and subterranean light courts.",
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir",
    category: "Commercial",
    location: "Le Marais, Paris",
    year: "2024",
    image: "/images/portfolio-2-atelier-noir.jpg",
    width: 1500,
    height: 1000,
    aspectRatio: "3/2",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    synopsis:
      "A high-jewelry private gallery characterized by blackened timber, raw silk acoustic panels, and precision spotlighting.",
  },
  {
    id: "solarium-villa",
    title: "Solarium Villa",
    category: "Residential",
    location: "Deià, Mallorca",
    year: "2024",
    image: "/images/portfolio-3-solarium-villa.jpg",
    width: 1200,
    height: 1500,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    synopsis:
      "A terraced coastal sanctuary harmonizing hand-applied lime plaster, aged olive wood, and seamless indoor-outdoor vistas.",
  },
  {
    id: "palazzo-minimal",
    title: "Palazzo Minimal",
    category: "Residential",
    location: "Brera, Milan",
    year: "2024",
    image: "/images/portfolio-4-palazzo-minimal.jpg",
    width: 1500,
    height: 1000,
    aspectRatio: "3/2",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    synopsis:
      "A 19th-century noble apartment reimagined through deep espresso portals, monolithic travertine islands, and restored frescoes.",
  },
  {
    id: "haven-penthouse",
    title: "Haven Penthouse",
    category: "Residential",
    location: "Tribeca, New York",
    year: "2023",
    image: "/images/portfolio-5-haven-penthouse.jpg",
    width: 1200,
    height: 1500,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-6",
    isArchCropped: true,
    synopsis:
      "An ethereal duplex loft wrapped in Belgian linen drapery, dark roast oak ceilings, and low-slung Italian seating.",
  },
  {
    id: "umbra-pavilion",
    title: "Umbra Pavilion",
    category: "Commercial",
    location: "Higashiyama, Kyoto",
    year: "2023",
    image: "/images/portfolio-6-umbra-pavilion.jpg",
    width: 1500,
    height: 1000,
    aspectRatio: "3/2",
    spanDesktop: "lg:col-span-6",
    isArchCropped: false,
    synopsis:
      "An intimate tea lounge and boutique hotel lobby blending scorched cedar, honed granite, and subdued warm illumination.",
  },
];
