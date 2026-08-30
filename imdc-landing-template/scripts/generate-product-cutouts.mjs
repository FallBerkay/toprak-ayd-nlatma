import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src/app/products/toprakProducts.ts");
const outDir = path.join(root, "public/product-cutouts");
const execFileAsync = promisify(execFile);
const onlyCodes = new Set(
  (process.env.CUTOUT_CODES ?? "")
    .split(",")
    .map((code) => code.trim().toLowerCase())
    .filter(Boolean),
);

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

  return [];
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

function buildMask(input, width, height) {
  const count = width * height;
  const candidate = new Uint8Array(count);
  const isBluePixel = new Uint8Array(count);

  for (let i = 0; i < count; i += 1) {
    const p = i * 3;
    const r = input[p];
    const g = input[p + 1];
    const b = input[p + 2];
    const x = i % width;
    const y = Math.floor(i / width);
    const nx = x / width;
    const ny = y / height;
    const l = luminance(r, g, b);
    const s = saturation(r, g, b);
    const inProductBand = ny > 0.15 && ny < 0.92;
    const inMainColumn = nx > 0.22 && nx < 0.78;
    const inArmBand = ny > 0.2 && ny < 0.45 && nx > 0.07 && nx < 0.93;
    const inPoleBand = ny > 0.38 && ny < 0.92 && nx > 0.3 && nx < 0.7;
    const inLikelyProductArea = inProductBand && (inMainColumn || inArmBand || inPoleBand);
    const isOrangeText = r > 150 && r > g * 1.22 && r > b * 1.35;
    const isBlue = b > r + 8 && b > g - 2 && s > 0.08 && l < 230;
    const isDarkMetal = l < 128 && !isOrangeText;

    isBluePixel[i] = isBlue ? 1 : 0;
    candidate[i] = inLikelyProductArea && (isBlue || isDarkMetal) ? 1 : 0;
  }

  const visited = new Uint8Array(count);
  const components = [];
  const stack = new Int32Array(count);

  for (let start = 0; start < count; start += 1) {
    if (!candidate[start] || visited[start]) continue;

    let top = 0;
    let area = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    let bluePixels = 0;
    let centerPixels = 0;
    const pixels = [];

    stack[top++] = start;
    visited[start] = 1;

    while (top > 0) {
      const idx = stack[--top];
      pixels.push(idx);
      area += 1;

      const x = idx % width;
      const y = Math.floor(idx / width);
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      if (isBluePixel[idx]) bluePixels += 1;
      if (x > width * 0.34 && x < width * 0.66) centerPixels += 1;

      const left = idx - 1;
      const right = idx + 1;
      const up = idx - width;
      const down = idx + width;

      if (x > 0 && candidate[left] && !visited[left]) {
        visited[left] = 1;
        stack[top++] = left;
      }
      if (x < width - 1 && candidate[right] && !visited[right]) {
        visited[right] = 1;
        stack[top++] = right;
      }
      if (y > 0 && candidate[up] && !visited[up]) {
        visited[up] = 1;
        stack[top++] = up;
      }
      if (y < height - 1 && candidate[down] && !visited[down]) {
        visited[down] = 1;
        stack[top++] = down;
      }
    }

    if (area > 16) {
      components.push({ area, minX, minY, maxX, maxY, pixels });
    }
  }

  const alpha = new Uint8Array(count);
  const centerMin = width * 0.28;
  const centerMax = width * 0.72;
  const usefulTop = height * 0.16;
  const usefulBottom = height * 0.93;

  for (const component of components) {
    const boxWidth = component.maxX - component.minX + 1;
    const boxHeight = component.maxY - component.minY + 1;
    const centerX = (component.minX + component.maxX) / 2;
    const intersectsCenter = component.maxX >= centerMin && component.minX <= centerMax;
    const inUsefulVerticalBand = component.maxY >= usefulTop && component.minY <= usefulBottom;
    const isWidePosterArtifact = boxWidth > width * 0.74 && boxHeight < height * 0.24;
    const isUpperPosterArtifact = component.maxY < height * 0.34 && boxWidth > width * 0.2 && component.bluePixels < 8;
    const isBottomTextArtifact = component.minY > height * 0.82 && boxWidth > width * 0.08 && component.bluePixels < 6;
    const isTinyNoise = component.area < 18 && component.bluePixels < 3;
    const hasProductSignal =
      component.bluePixels > 4 ||
      component.centerPixels > 20 ||
      boxHeight > height * 0.18;
    const isProductScale =
      component.area > 24 &&
      inUsefulVerticalBand &&
      hasProductSignal &&
      !isTinyNoise &&
      !isWidePosterArtifact &&
      !isUpperPosterArtifact &&
      !isBottomTextArtifact &&
      (
        intersectsCenter ||
        (centerX > width * 0.12 && centerX < width * 0.88 && boxHeight > height * 0.035) ||
        boxWidth > width * 0.16
      );

    if (!isProductScale) continue;

    for (const idx of component.pixels) {
      alpha[idx] = 255;
    }
  }

  return alpha;
}

async function processImage(url, outPath) {
  let response;
  let lastError;

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (response.ok) break;
      lastError = new Error(`Download failed ${response.status}: ${url}`);
    } catch (error) {
      lastError = error;
    }

    if (attempt < 4) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 1200));
    }
  }

  if (!response?.ok) {
    throw lastError ?? new Error(`Download failed: ${url}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  const image = sharp(source).rotate();
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const alpha = buildMask(data, info.width, info.height);
  const softenedAlpha = await sharp(alpha, {
    raw: { width: info.width, height: info.height, channels: 1 },
  })
    .median(1)
    .blur(0.35)
    .raw()
    .toBuffer();

  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i += 1) {
    const src = i * 3;
    const dst = i * 4;
    rgba[dst] = data[src];
    rgba[dst + 1] = data[src + 1];
    rgba[dst + 2] = data[src + 2];
    rgba[dst + 3] = softenedAlpha[i];
  }

  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(outPath);
}

async function processLocalImage(filePath) {
  const image = sharp(filePath).rotate();
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const alpha = buildMask(data, info.width, info.height);
  const softenedAlpha = await sharp(alpha, {
    raw: { width: info.width, height: info.height, channels: 1 },
  })
    .median(1)
    .blur(0.35)
    .raw()
    .toBuffer();

  const tmpPath = `${filePath}.tmp`;
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i += 1) {
    const src = i * 3;
    const dst = i * 4;
    rgba[dst] = data[src];
    rgba[dst + 1] = data[src + 1];
    rgba[dst + 2] = data[src + 2];
    rgba[dst + 3] = softenedAlpha[i];
  }

  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(tmpPath);
  await fs.rename(tmpPath, filePath);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const source = await fs.readFile(dataPath, "utf8");
  const products = toProducts(source);
  const sourceProducts = products.some((product) => product.image.startsWith("http"))
    ? products
    : await productsFromGitHead();
  const imageJobs = new Map();

  for (const product of sourceProducts) {
    if (onlyCodes.size > 0 && !onlyCodes.has(product.code.toLowerCase())) continue;
    if (!product.image.startsWith("http")) continue;
    const outputName = `${slugify(product.id)}.png`;
    imageJobs.set(product.id, { url: product.image, outputName });
  }

  let processed = 0;
  if (imageJobs.size > 0) {
    for (const { url, outputName } of imageJobs.values()) {
      const outPath = path.join(outDir, outputName);
      await processImage(url, outPath);

      processed += 1;
      if (processed % 25 === 0 || processed === imageJobs.size) {
        console.log(`processed ${processed}/${imageJobs.size}`);
      }
    }
  } else {
    const files = (await fs.readdir(outDir))
      .filter((file) => file.endsWith(".png"))
      .sort();
    for (const file of files) {
      await processLocalImage(path.join(outDir, file));
      processed += 1;
      if (processed % 25 === 0 || processed === files.length) {
        console.log(`processed local ${processed}/${files.length}`);
      }
    }
  }

  let nextSource = source;
  for (const [id, { outputName }] of imageJobs.entries()) {
    const idPattern = escapeRegExp(`"id": "${id}"`);
    const productPattern = new RegExp(`(${idPattern}[\\s\\S]*?"image":\\s*")[^"]+(")`);
    nextSource = nextSource.replace(productPattern, `$1/product-cutouts/${outputName}$2`);
  }

  for (const product of products) {
    const outputName = imageJobs.get(product.id)?.outputName;
    if (!outputName) continue;
    const idPattern = escapeRegExp(`"id": "${product.id}"`);
    const productPattern = new RegExp(`(${idPattern}[\\s\\S]*?"image":\\s*")[^"]+(")`);
    nextSource = nextSource.replace(productPattern, `$1/product-cutouts/${outputName}$2`);
  }

  await fs.writeFile(dataPath, nextSource);
  console.log(`done ${imageJobs.size} product images`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
