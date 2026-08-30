import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src/app/products/toprakProducts.ts");
const outDir = path.join(root, "public/product-whitebacks");
const execFileAsync = promisify(execFile);

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

async function productsFromGitHead() {
  const candidates = [
    "HEAD:src/app/products/toprakProducts.ts",
    "HEAD:imdc-landing-template/src/app/products/toprakProducts.ts",
  ];

  for (const candidate of candidates) {
    try {
      const { stdout } = await execFileAsync("git", ["show", candidate], {
        cwd: root,
        maxBuffer: 1024 * 1024 * 8,
      });
      return toProducts(stdout);
    } catch {
      // Try the next repository layout.
    }
  }

  throw new Error("Could not read original products from git.");
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

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const currentSource = await fs.readFile(dataPath, "utf8");
  const currentProducts = toProducts(currentSource);
  const originalProducts = await productsFromGitHead();
  const originalById = new Map(originalProducts.map((product) => [product.id, product]));
  const glops = currentProducts.filter((product) => product.category === "gloplar");

  let processed = 0;
  let failed = 0;
  for (const product of glops) {
    const original = originalById.get(product.id);
    if (!original?.image?.startsWith("http")) continue;

    try {
      const source = await download(original.image);
      const outputName = `${slugify(product.id)}.png`;
      const outPath = path.join(outDir, outputName);

      await sharp(source)
        .rotate()
        .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
        .toFile(outPath);
    } catch (error) {
      failed += 1;
      console.warn(`failed ${product.id}: ${error.message}`);
    }

    processed += 1;
    if (processed % 25 === 0 || processed === glops.length) {
      console.log(`processed ${processed}/${glops.length}, failed ${failed}`);
    }
  }

  console.log(`restored ${processed - failed} glop images, failed ${failed}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
