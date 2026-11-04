export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
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
  overview: string;
  scope: string;
  area: string;
  materials: Array<{
    name: string;
    description: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "monolith-residence",
    slug: "monolith-residence",
    title: "The Monolith Residence",
    subtitle: "A home centered around soft daylight and limestone",
    category: "Residential",
    location: "Colombo 07",
    image: "/images/portfolio-1.webp",
    width: 1600,
    height: 2000,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    isSample: true,
    synopsis: "A private family home built around a central courtyard with fluted limestone and warm timber doors.",
    overview: "Set in Cinnamon Gardens, this family home centers around an open courtyard that catches the morning breeze. High ceilings, fluted limestone walls, and large sliding timber doors create a peaceful retreat from the surrounding city.",
    scope: "Full interior design, custom joinery, lighting plan, and styling",
    area: "6,800 sq ft",
    materials: [
      { name: "Honed limestone", description: "Smooth floor slabs and custom fireplace hearths that stay cool underfoot." },
      { name: "Smoked jackfruit wood", description: "Warm local hardwood used for custom wall shelving and pivot doors." },
      { name: "Brushed bronze", description: "Cabinet handles and lighting fixtures that develop a natural patina over time." },
      { name: "Belgian linen", description: "Full-height curtains that soften afternoon sunlight." },
    ],
  },
  {
    id: "atelier-noir",
    slug: "atelier-noir",
    title: "Atelier Noir",
    subtitle: "A private jewellery viewing gallery in the historic fort",
    category: "Commercial",
    location: "Galle Fort",
    image: "/images/portfolio-2.webp",
    width: 1600,
    height: 1200,
    aspectRatio: "4/3",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    isSample: true,
    synopsis: "A jewellery gallery inside a 300-year-old stone building, finished in blackened timber and linen.",
    overview: "Located within the ramparts of Galle Fort, this private viewing room preserves original coral stone walls while introducing blackened timber display cases and focused spotlighting for gemstones.",
    scope: "Space planning, custom display cases, and precision lighting",
    area: "2,400 sq ft",
    materials: [
      { name: "Blackened local teak", description: "Solid timber tables treated with a natural charring technique." },
      { name: "Historic coral stone", description: "Carefully exposed stone walls sealed with breathable lime wash." },
      { name: "Charcoal raw silk", description: "Wall panels that absorb ambient sound." },
      { name: "Smoked glass", description: "Custom display cases with hidden warm LED lighting." },
    ],
  },
  {
    id: "solarium-villa",
    slug: "solarium-villa",
    title: "Solarium Villa",
    subtitle: "A light-filled coastal home with wide teak verandas",
    category: "Residential",
    location: "Bentota",
    image: "/images/portfolio-3.webp",
    width: 1500,
    height: 2000,
    aspectRatio: "3/4",
    spanDesktop: "lg:col-span-5",
    isArchCropped: false,
    isSample: true,
    synopsis: "A coastal home with wide verandas, lime plaster walls, and pivoting shutters that catch the ocean breeze.",
    overview: "Designed for easy coastal living, this holiday villa opens directly onto lush gardens. Hand-applied lime plaster walls keep rooms cool throughout the tropical midday heat.",
    scope: "Full interior design, custom furniture, and outdoor living spaces",
    area: "8,500 sq ft",
    materials: [
      { name: "Reclaimed teak", description: "Salvaged structural beams repurposed into dining tables and verandas." },
      { name: "Lime plaster", description: "Off-white wall finish that breathes naturally in coastal humidity." },
      { name: "River stone terrazzo", description: "Hand-cast terrazzo floors running smoothly from living room to garden." },
      { name: "Woven natural cane", description: "Bespoke lounge chairs made by southern Sri Lankan weavers." },
    ],
  },
  {
    id: "stonebridge-apartment",
    slug: "stonebridge-apartment",
    title: "Stonebridge Apartment",
    subtitle: "A sea-facing apartment centered around a carved stone kitchen",
    category: "Residential",
    location: "Colombo 03",
    image: "/images/portfolio-4.webp",
    width: 1600,
    height: 1200,
    aspectRatio: "4/3",
    spanDesktop: "lg:col-span-7",
    isArchCropped: true,
    isSample: true,
    synopsis: "An oceanfront city home featuring a large travertine island and hidden timber storage.",
    overview: "Looking out across the Indian Ocean, this apartment maximizes light and openness. A single solid travertine island anchors the living and kitchen area, while floor-to-ceiling timber panels conceal all appliances.",
    scope: "Space planning, interior renovation, and custom stone fabrication",
    area: "4,200 sq ft",
    materials: [
      { name: "Silver travertine", description: "Honed stone island with soft warm veining." },
      { name: "Smoked oak paneling", description: "Vertical wall fluting with seamless integrated doors." },
      { name: "Warm bronze hardware", description: "Minimalist recessed cabinet handles." },
      { name: "Cast mineral floors", description: "Seamless off-white floors throughout all open living zones." },
    ],
  },
  {
    id: "haven-penthouse",
    slug: "haven-penthouse",
    title: "Haven Penthouse",
    subtitle: "Warm timber ceilings and low-slung seating above the lake",
    category: "Residential",
    location: "Colombo 02",
    image: "/images/portfolio-5.webp",
    width: 1600,
    height: 2000,
    aspectRatio: "4/5",
    spanDesktop: "lg:col-span-6",
    isArchCropped: true,
    isSample: true,
    synopsis: "A two-storey city penthouse wrapped in linen curtains, dark teak ceilings, and soft upholstery.",
    overview: "Overlooking Beira Lake, this two-level home balances expansive city views with warm, grounded materials. Dark teak ceiling slats create a warm, sheltered feeling inside the double-height living room.",
    scope: "Interior architecture, custom furniture, and art placement",
    area: "5,600 sq ft",
    materials: [
      { name: "Dark roast teak", description: "Ceiling slats that improve acoustics and warm up the living space." },
      { name: "Black marble", description: "Honed bathroom sinks and low living room plinths." },
      { name: "Textured wool", description: "Custom modular sofa upholstered in soft, durable woven fabric." },
      { name: "Aged copper inlays", description: "Fine floor transition strips set flush with timber floorboards." },
    ],
  },
  {
    id: "umbra-pavilion",
    slug: "umbra-pavilion",
    title: "Umbra Pavilion",
    subtitle: "A highland tea lounge with dark timber and local stone",
    category: "Commercial",
    location: "Kandy",
    image: "/images/portfolio-6.webp",
    width: 1500,
    height: 2000,
    aspectRatio: "3/4",
    spanDesktop: "lg:col-span-6",
    isArchCropped: false,
    isSample: true,
    synopsis: "An intimate tea tasting lounge in the hills, combining charred timber and natural granite hearths.",
    overview: "Surrounded by tea hills, this tasting room invites visitors to slow down. Rough-hewn granite plinths hold hot water kettles, while charred jackfruit wood creates a warm, grounded atmosphere.",
    scope: "Interior architecture, custom furniture, and lighting design",
    area: "3,100 sq ft",
    materials: [
      { name: "Charred timber", description: "Locally sourced wood finished with beeswax and light charring." },
      { name: "Split gray granite", description: "Naturally textured stone hearths and water features." },
      { name: "Unlacquered copper", description: "Custom pendant lamps that reflect warm low-level light." },
      { name: "Paper screens", description: "Sliding panels that filter misty mountain daylight." },
    ],
  },
];
