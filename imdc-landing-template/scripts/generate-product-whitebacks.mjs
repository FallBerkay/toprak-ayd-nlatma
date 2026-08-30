import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src/app/products/toprakProducts.ts");
const outDir = path.join(root, "public/product-whitebacks");

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

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9-]/g, "-");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function saturation(r, g, b) {
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  if (max === 0) return 0;
  return (max - min) / max;
}

async function download(url) {
  let lastError;

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (response.ok) {
        return Buffer.from(await response.arrayBuffer());
      }
      lastError = new Error(`Download failed ${response.status}: ${url}`);
    } catch (error) {
      lastError = error;
    }

    if (attempt < 4) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 1200));
    }
  }

  throw lastError ?? new Error(`Download failed: ${url}`);
}

async function normalizeWhiteBackground(url, outPath) {
  const source = await download(url);
  const image = sharp(source).rotate();
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const output = Buffer.from(data);

  for (let i = 0; i < output.length; i += 3) {
    const r = output[i];
    const g = output[i + 1];
    const b = output[i + 2];
    const l = luminance(r, g, b);
    const s = saturation(r, g, b);

    const isNearWhite = l > 214 && s < 0.18;
    const isSoftGrayBackdrop = l > 162 && s < 0.075;
    const isFaintPosterShadow = l > 178 && Math.abs(r - g) < 10 && Math.abs(g - b) < 10;

    if (isNearWhite || isSoftGrayBackdrop || isFaintPosterShadow) {
      output[i] = 255;
      output[i + 1] = 255;
      output[i + 2] = 255;
    }
  }

  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const source = await fs.readFile(dataPath, "utf8");
  const products = toProducts(source);
  const jobs = [];

  for (const product of products) {
    if (!product.image.startsWith("http")) continue;
    jobs.push({
      id: product.id,
      url: product.image,
      outputName: `${slugify(product.id)}.png`,
    });
  }

  let processed = 0;
  for (const job of jobs) {
    await normalizeWhiteBackground(job.url, path.join(outDir, job.outputName));
    processed += 1;
    if (processed % 25 === 0 || processed === jobs.length) {
      console.log(`processed ${processed}/${jobs.length}`);
    }
  }

  let nextSource = source;
  for (const job of jobs) {
    const idPattern = escapeRegExp(`"id": "${job.id}"`);
    const productPattern = new RegExp(`(${idPattern}[\\s\\S]*?"image":\\s*")[^"]+(")`);
    nextSource = nextSource.replace(productPattern, `$1/product-whitebacks/${job.outputName}$2`);
  }

  await fs.writeFile(dataPath, nextSource);
  console.log(`done ${jobs.length} white-background product images`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
