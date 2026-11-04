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
  yearStatus: string;
  materials: Array<{
    name: string;
    description: string;
  }>;
  gallery: Array<{
    src: string;
    caption: string;
    aspectRatio: string;
  }>;
  architecturalQuote: string;
}

export const projects: Project[] = [
  {
    id: "monolith-residence",
    slug: "monolith-residence",
    title: "The Monolith Residence",
    subtitle: "A Sanctuary of Fluted Limestone & Diffused Light",
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
    overview:
      "Commissioned as a secluded urban sanctuary within Colombo's historic Cinnamon Gardens, The Monolith Residence reinterprets the traditional courtyard typology through monolithic masonry and controlled natural illumination. The residence turns inward, using double-height fluted limestone portals to buffer the vibrant city exterior while welcoming filtered equatorial light into a serene subterranean reflecting basin.",
    scope: "Complete Interior Architecture, Custom Furniture & Lighting Fabrication",
    area: "6,800 sq.ft",
    yearStatus: "Concept Project · Private Residence",
    materials: [
      { name: "Honed Silver Travertine", description: "Seamless floor-to-ceiling bookmatched wall slabs and hearth plinths." },
      { name: "Smoked Jackfruit Timber", description: "Custom architectural fluting, floorboards, and concealed joinery." },
      { name: "Patinated Brushed Bronze", description: "Bespoke architectural ironmongery, linear luminaires, and portal frames." },
      { name: "Raw Belgian Linen", description: "Floor-to-ceiling sheer drapery diffusing tropical midday sunlight." },
    ],
    gallery: [
      { src: "/images/portfolio-1.webp", caption: "The central living volume facing the internal light court", aspectRatio: "4/5" },
      { src: "/images/studio-detail.webp", caption: "Smoked timber cabinetry meeting honed stone transitions", aspectRatio: "1/1" },
      { src: "/images/hero.webp", caption: "Golden hour illumination through the fluted arch colonnade", aspectRatio: "16/9" },
    ],
    architecturalQuote:
      "Space is not merely defined by what we erect, but by the quietness we preserve between the stone.",
  },
  {
    id: "atelier-noir",
    slug: "atelier-noir",
    title: "Atelier Noir",
    subtitle: "High Jewellery Salon within Historic Ramparts",
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
      "A bespoke high-jewellery private salon set within historic coral-stone ramparts, finished in blackened timber and raw silk.",
    overview:
      "Nestled within a 17th-century coral-stone colonial bastion in Galle Fort, Atelier Noir was conceived as an intimate, darkened vault for bespoke high-jewellery viewings. Restrained blackened timber millwork contrasts sharply against preserved historic lime-mortar walls, creating an atmosphere of reverent stillness where sapphire gemstones and rare Ceylon gems take center stage under surgical micro-pin illumination.",
    scope: "Conservation Interior Architecture, Display Vitrines & Lighting Engineering",
    area: "2,400 sq.ft",
    yearStatus: "Concept Project · Fine Jewellery Salon",
    materials: [
      { name: "Scorched Local Teak", description: "Shou Sugi Ban treated solid timber partitions and monolithic consultation tables." },
      { name: "Historic Coral Stone", description: "Preserved 300-year-old masonry treated with breathable mineral washes." },
      { name: "Deep Charcoal Raw Silk", description: "Acoustic wall upholstery absorbing ambient echoes." },
      { name: "Hand-Blown Smoked Glass", description: "Anti-reflective vitrines with concealed fiber-optic gemstone lighting." },
    ],
    gallery: [
      { src: "/images/portfolio-2.webp", caption: "The main gallery vault with bespoke floating display vitrines", aspectRatio: "4/3" },
      { src: "/images/ethos-1.webp", caption: "Tactile junction of blackened timber against mineral-washed plaster", aspectRatio: "16/10" },
      { src: "/images/process-3.webp", caption: "Precision metalwork joinery details on the consultation desks", aspectRatio: "4/5" },
    ],
    architecturalQuote:
      "To display light and precious stones, one must first master the dignity of complete shadow.",
  },
  {
    id: "solarium-villa",
    slug: "solarium-villa",
    title: "Solarium Villa",
    subtitle: "A Coastal Sanctuary of Ocean Air & Aged Teak",
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
    overview:
      "Set along the coastal estuary of Bentota, Solarium Villa is a tribute to Sri Lanka's tropical modernist legacy. Generous eaves, deep verandahs, and floor-to-ceiling pivoting louvres allow the coastal monsoon trade winds to circulate continuously without mechanical intervention. Tactile lime plaster walls temper the humid ocean air, while low-slung woven rattan seating honors native artisanal heritage.",
    scope: "Full Interior Design, Custom Joinery & Bespoke FF&E Curation",
    area: "8,500 sq.ft",
    yearStatus: "Concept Project · Coastal Estate",
    materials: [
      { name: "Reclaimed Aged Teak", description: "Heavy timber portals salvaged from colonial warehouse trusses." },
      { name: "Hand-Applied Lime Plaster", description: "Breathable chalk-white mineral plaster regulating tropical humidity." },
      { name: "Local River Pebble Terrazzo", description: "Honed continuous flooring flowing seamlessly from indoor to verandah." },
      { name: "Hand-Woven Natural Cane", description: "Bespoke screens and headboards crafted by southern artisans." },
    ],
    gallery: [
      { src: "/images/portfolio-3.webp", caption: "The seaside loggia with custom daybeds and aged teak pivots", aspectRatio: "3/4" },
      { src: "/images/studio-primary.webp", caption: "Sculptural niche framing ceramic artifacts against lime plaster", aspectRatio: "4/5" },
      { src: "/images/ethos-3.webp", caption: "Filtered light patterns sweeping across the terrazzo floors", aspectRatio: "16/10" },
    ],
    architecturalQuote:
      "A dwelling by the sea should not confront the elements, but breathe in unison with the tide.",
  },
  {
    id: "stonebridge-apartment",
    slug: "stonebridge-apartment",
    title: "Stonebridge Apartment",
    subtitle: "Monolithic Geometry Above the Indian Ocean Horizon",
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
    overview:
      "Hovering high above the Kollupitiya shoreline, this 4,200 sq.ft apartment redefines penthouse living through architectural austerity. Instead of clutter, the floor plan is anchored by a massive single-block travertine kitchen island weighing over four tonnes. Seamless wall paneling hides all utilitarian functions, leaving only uninterrupted panoramic ocean horizons and sculptural monolithic forms.",
    scope: "Complete Space Planning, Interior Architecture & Custom Stonework",
    area: "4,200 sq.ft",
    yearStatus: "Concept Project · Urban Residence",
    materials: [
      { name: "Roman Navona Travertine", description: "Honed open-pore monolithic surfaces with bookmatched veining." },
      { name: "Muted Smoked Oak Paneling", description: "Full-height vertical fluting with integrated flush door pivots." },
      { name: "Brushed Gunmetal Bronze", description: "Concealed shadowlines, recessed handles, and minimalist taps." },
      { name: "Cast Architectural Mortar", description: "Seamless micro-topping floors extending through living and dining zones." },
    ],
    gallery: [
      { src: "/images/portfolio-4.webp", caption: "The sculpted travertine island framing the endless ocean horizon", aspectRatio: "4/3" },
      { src: "/images/studio-detail.webp", caption: "Micro-shadow gap detailing between smoked oak and bronze", aspectRatio: "1/1" },
      { src: "/images/process-2.webp", caption: "Material mood sample board developed during design development", aspectRatio: "4/5" },
    ],
    architecturalQuote:
      "Luxury in the sky is the absence of visual noise. True elevation is clarity.",
  },
  {
    id: "haven-penthouse",
    slug: "haven-penthouse",
    title: "Haven Penthouse",
    subtitle: "Tactile Warmth & Low-Slung Silhouette over the Harbor",
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
    overview:
      "Spanning two uppermost floors overlooking Beira Lake and the historic Colombo port, Haven Penthouse was crafted for a seasoned art collector. The design introduces rich, grounding dark-roast teak ceilings that visually lower the expansive volume, creating an atmosphere of warm intimacy. Tactile bouclé, raw silks, and low-slung modular seating encourage languid contemplation.",
    scope: "Interior Architecture, Art Advisory & Bespoke Furniture Procurement",
    area: "5,600 sq.ft",
    yearStatus: "Concept Project · Duplex Penthouse",
    materials: [
      { name: "Dark Roast Teak", description: "Acoustic slotted ceiling baffles and architectural library shelving." },
      { name: "Honed Nero Marquina Marble", description: "Monolithic bathroom vanity basins and fireplace surrounds." },
      { name: "Textured Wool & Bouclé", description: "Bespoke tactile upholstery designed exclusively for the salon." },
      { name: "Antiqued Copper Inlays", description: "Subtle 2mm floor expansion strips and cabinet surrounds." },
    ],
    gallery: [
      { src: "/images/portfolio-5.webp", caption: "The lakeside salon with custom low-slung modular seating", aspectRatio: "4/5" },
      { src: "/images/ethos-2.webp", caption: "Acoustic timber ceiling integration with hidden ambient light troughs", aspectRatio: "16/10" },
      { src: "/images/process-4.webp", caption: "Final styling layer: bespoke ceramic vessels and curated monographs", aspectRatio: "4/5" },
    ],
    architecturalQuote:
      "To inhabit a home is to feel held by its materials, never overwhelmed by its scale.",
  },
  {
    id: "umbra-pavilion",
    slug: "umbra-pavilion",
    title: "Umbra Pavilion",
    subtitle: "Highland Tea Tasting Lounge of Scorched Timber & Stone",
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
    overview:
      "Set amidst the mist-shrouded tea plantations of Kandy, Umbra Pavilion is an experiential tea tasting sanctuary. Drawing inspiration from Japanese chashitsu tea architecture and Sri Lankan mountain craftsmanship, the interior utilizes charred jackfruit wood and raw hand-split granite plinths. Water trickles gently through an indoor stone channel, establishing a contemplative cadence.",
    scope: "Turnkey Interior Architecture, Custom Furniture & Acoustic Design",
    area: "3,100 sq.ft",
    yearStatus: "Concept Project · Hospitality Pavilion",
    materials: [
      { name: "Scorched Mountain Timber", description: "Locally sourced wood finished with natural beeswax and charring." },
      { name: "Hand-Split Graphite Granite", description: "Rough-hewn monolithic water features and tasting plinths." },
      { name: "Unlacquered Warm Copper", description: "Hand-hammered kettle stands and lighting shrouds that age with tea steam." },
      { name: "Woven Rice Paper Screens", description: "Translucent sliding shoji panels filtering mist-dappled daylight." },
    ],
    gallery: [
      { src: "/images/portfolio-6.webp", caption: "The central tea tasting hearth with rough-hewn granite plinths", aspectRatio: "3/4" },
      { src: "/images/process-1.webp", caption: "Initial site sketches and acoustic orientation in the highland valley", aspectRatio: "4/5" },
      { src: "/images/ethos-1.webp", caption: "The honesty of raw stone meeting patinated copper", aspectRatio: "16/10" },
    ],
    architecturalQuote:
      "When tea and architecture meet, every gesture becomes an exercise in mindfulness.",
  },
];
