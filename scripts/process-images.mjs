import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const RAW_DIR = path.resolve(process.cwd(), "raw-images");
const OUT_DIR = path.resolve(process.cwd(), "public/images");
const BRAND_DIR = path.resolve(process.cwd(), "public/brand");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const IMAGES = [
  { name: "hero", width: 2400, height: 1350, maxKb: 350 },
  { name: "hero-mobile", width: 1080, height: 1620, maxKb: 200 },
  { name: "studio-primary", width: 1600, height: 2000, maxKb: 180 },
  { name: "studio-detail", width: 1200, height: 1200, maxKb: 180 },
  { name: "portfolio-1", width: 1600, height: 2000, maxKb: 180 },
  { name: "portfolio-2", width: 1600, height: 1200, maxKb: 180 },
  { name: "portfolio-3", width: 1500, height: 2000, maxKb: 180 },
  { name: "portfolio-4", width: 1600, height: 1200, maxKb: 180 },
  { name: "portfolio-5", width: 1600, height: 2000, maxKb: 180 },
  { name: "portfolio-6", width: 1500, height: 2000, maxKb: 180 },
];

async function run() {
  console.log("🎨 Processing images using sharp...");

  for (const img of IMAGES) {
    const rawPath = path.join(RAW_DIR, `${img.name}.png`);
    const outPath = path.join(OUT_DIR, `${img.name}.webp`);

    if (!fs.existsSync(rawPath)) {
      console.warn(`⚠️ Raw source not found: ${rawPath}. Generating placeholder.`);
      await sharp({
        create: {
          width: img.width,
          height: img.height,
          channels: 3,
          background: { r: 90, g: 58, b: 42 },
        },
      })
        .webp({ quality: 80 })
        .toFile(outPath);
    } else {
      await sharp(rawPath)
        .resize(img.width, img.height, { fit: "cover" })
        .webp({ quality: 80, effort: 6 })
        .toFile(outPath);
    }

    const stats = fs.statSync(outPath);
    const sizeKb = (stats.size / 1024).toFixed(1);
    const isWithinBudget = stats.size <= img.maxKb * 1024;
    console.log(
      `✓ ${img.name}.webp (${img.width}x${img.height}) -> ${sizeKb} KB [Budget: <=${img.maxKb} KB] ${
        isWithinBudget ? "✅" : "⚠️ Exceeds budget"
      }`
    );
  }

  // Generate og-image.jpg: 1200x630 (The hero scene with the light-text logo centred on a dark overlay)
  const ogOutPath = path.join(OUT_DIR, "og-image.jpg");
  const heroRawPath = path.join(RAW_DIR, "hero.png");
  const logoLightPath = path.join(BRAND_DIR, "veloura-logo-light-text.png");

  let baseSharp;
  if (fs.existsSync(heroRawPath)) {
    baseSharp = sharp(heroRawPath).resize(1200, 630, { fit: "cover" });
  } else {
    baseSharp = sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r: 36, g: 22, b: 15 },
      },
    });
  }

  // Overlay dark espresso tint and logo
  const darkTintSvg = Buffer.from(
    '<svg width="1200" height="630"><rect width="1200" height="630" fill="#24160F" fill-opacity="0.8"/></svg>'
  );

  const compositeInputs = [{ input: darkTintSvg, blend: "over" }];

  if (fs.existsSync(logoLightPath)) {
    const resizedLogo = await sharp(logoLightPath)
      .resize(480, null, { fit: "contain" })
      .toBuffer();
    compositeInputs.push({ input: resizedLogo, gravity: "center" });
  }

  await baseSharp.composite(compositeInputs).jpeg({ quality: 85 }).toFile(ogOutPath);

  const ogStats = fs.statSync(ogOutPath);
  console.log(`✓ og-image.jpg (1200x630) -> ${(ogStats.size / 1024).toFixed(1)} KB ✅`);
  console.log("✨ All images processed successfully.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
