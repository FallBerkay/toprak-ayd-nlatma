import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src/app/products/toprakProducts.ts");

function productArraySource(source) {
  const match = source.match(/export const toprakProducts = ([\s\S]*?) as const satisfies/);
  if (!match) {
    throw new Error("Could not find toprakProducts array.");
  }

  return match[1];
}

function toProducts(source) {
  return Function(`return ${productArraySource(source)}`)();
}

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function cleanEdgeBars(filePath) {
  const image = sharp(filePath);
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const output = Buffer.from(data);
  let changed = 0;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const edgeZone = x < info.width * 0.12 || x > info.width * 0.88;
      if (!edgeZone) continue;

      const p = (y * info.width + x) * 3;
      const l = luminance(output[p], output[p + 1], output[p + 2]);
      if (l < 52) {
        output[p] = 255;
        output[p + 1] = 255;
        output[p + 2] = 255;
        changed += 1;
      }
    }
  }

  if (changed === 0) return 0;

  const tmpPath = `${filePath}.tmp`;
  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(tmpPath);
  await fs.rename(tmpPath, filePath);
  return changed;
}

async function main() {
  const source = await fs.readFile(dataPath, "utf8");
  const products = toProducts(source).filter((product) => product.category === "gloplar");
  let touched = 0;
  let changed = 0;

  for (const product of products) {
    if (!product.image.startsWith("/product-whitebacks/")) continue;

    const filePath = path.join(root, "public", product.image);
    const count = await cleanEdgeBars(filePath);
    if (count > 0) {
      touched += 1;
      changed += count;
    }
  }

  console.log(`cleaned ${touched} glop images, changed ${changed} edge pixels`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
