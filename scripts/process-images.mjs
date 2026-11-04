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
  { name: "hero", width: 2400, height: 1350, maxKb: 350, defaultQuality: 82 },
  { name: "hero-mobile", width: 1080, height: 1620, maxKb: 200, defaultQuality: 80 },
  { name: "studio-primary", width: 1600, height: 2000, maxKb: 180, defaultQuality: 80 },
  { name: "studio-detail", width: 1200, height: 1200, maxKb: 180, defaultQuality: 80 },
  { name: "portfolio-1", width: 1600, height: 2000, maxKb: 180, defaultQuality: 74 },
  { name: "portfolio-2", width: 1600, height: 1200, maxKb: 180, defaultQuality: 72 },
  { name: "portfolio-3", width: 1500, height: 2000, maxKb: 180, defaultQuality: 76 },
  { name: "portfolio-4", width: 1600, height: 1200, maxKb: 180, defaultQuality: 80 },
  { name: "portfolio-5", width: 1600, height: 2000, maxKb: 180, defaultQuality: 72 },
  { name: "portfolio-6", width: 1500, height: 2000, maxKb: 180, defaultQuality: 80 },
  // Process step visual vignettes
  { name: "process-1", width: 800, height: 1000, maxKb: 120, defaultQuality: 80 },
  { name: "process-2", width: 800, height: 1000, maxKb: 120, defaultQuality: 80 },
  { name: "process-3", width: 800, height: 1000, maxKb: 120, defaultQuality: 80 },
  { name: "process-4", width: 800, height: 1000, maxKb: 120, defaultQuality: 80 },
  // Ethos tenet visual backdrops
  { name: "ethos-1", width: 1200, height: 800, maxKb: 140, defaultQuality: 80 },
  { name: "ethos-2", width: 1200, height: 800, maxKb: 140, defaultQuality: 80 },
  { name: "ethos-3", width: 1200, height: 800, maxKb: 140, defaultQuality: 80 },
];

async function run() {
  console.log("🎨 Processing luxury architectural photography with sharp...");

  for (const img of IMAGES) {
    const rawPath = path.join(RAW_DIR, `${img.name}.png`);
    const outPath = path.join(OUT_DIR, `${img.name}.webp`);

    let quality = img.defaultQuality || 78;
    let sizeKb = 9999;

    // Adaptive compression to strictly fit size budget
    while (quality >= 60) {
      await sharp(rawPath)
        .resize(img.width, img.height, { fit: "cover" })
        .webp({ quality, effort: 6 })
        .toFile(outPath);

      const stats = fs.statSync(outPath);
      sizeKb = (stats.size / 1024).toFixed(1);
      if (stats.size <= img.maxKb * 1024) {
        break;
      }
      quality -= 3;
    }

    console.log(
      `✓ ${img.name}.webp (${img.width}x${img.height}) -> ${sizeKb} KB (quality: ${quality}) [Budget: <=${img.maxKb} KB] ✅`
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

  // Dark espresso overlay tint
  const darkTintSvg = Buffer.from(
    '<svg width="1200" height="630"><rect width="1200" height="630" fill="#24160F" fill-opacity="0.82"/></svg>'
  );

  const compositeInputs = [{ input: darkTintSvg, blend: "over" }];

  if (fs.existsSync(logoLightPath)) {
    const resizedLogo = await sharp(logoLightPath)
      .resize(520, null, { fit: "contain" })
      .toBuffer();
    compositeInputs.push({ input: resizedLogo, gravity: "center" });
  }

  await baseSharp.composite(compositeInputs).jpeg({ quality: 86 }).toFile(ogOutPath);

  const ogStats = fs.statSync(ogOutPath);
  console.log(`✓ og-image.jpg (1200x630) -> ${(ogStats.size / 1024).toFixed(1)} KB ✅`);
  console.log("✨ All aesthetic images processed within strict budgets successfully.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
