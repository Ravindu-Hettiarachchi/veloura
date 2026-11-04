export interface HeroAnnotation {
  id: string;
  label: string;
  xPercent: number; // Percentage from left of arch image container (0-100)
  yPercent: number; // Percentage from top of arch image container (0-100)
  lineLength: number; // Length of 1px copper line in pixels
  lineDirection: "left" | "right"; // Direction the pill extends relative to the dot
}

/**
 * Editorial material annotations overlaid on the hero arch image.
 * Percentages are relative to the arch image viewport.
 * On screens under 640px, only the first annotation ('Teak, oiled') is shown.
 */
export const heroAnnotations: HeroAnnotation[] = [
  {
    id: "teak",
    label: "Teak, oiled",
    xPercent: 54,
    yPercent: 80,
    lineLength: 32,
    lineDirection: "left",
  },
  {
    id: "plaster",
    label: "Lime plaster wall",
    xPercent: 38,
    yPercent: 24,
    lineLength: 32,
    lineDirection: "left",
  },
  {
    id: "linen",
    label: "Linen, washed",
    xPercent: 68,
    yPercent: 62,
    lineLength: 38,
    lineDirection: "right",
  },
];
