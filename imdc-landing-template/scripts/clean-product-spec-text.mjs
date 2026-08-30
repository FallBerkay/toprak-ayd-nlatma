import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src/app/products/toprakProducts.ts");
const whitebackDir = path.join(root, "public/product-whitebacks");

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

function isDarkTextPixel(r, g, b) {
  return luminance(r, g, b) < 168 && Math.max(r, g, b) - Math.min(r, g, b) < 68;
}

function buildComponents(data, width, height) {
  const count = width * height;
  const candidate = new Uint8Array(count);

  for (let i = 0; i < count; i += 1) {
    const p = i * 3;
    const r = data[p];
    const g = data[p + 1];
    const b = data[p + 2];
    candidate[i] = isDarkTextPixel(r, g, b) ? 1 : 0;
  }

  const visited = new Uint8Array(count);
  const stack = new Int32Array(count);
  const components = [];

  for (let start = 0; start < count; start += 1) {
    if (!candidate[start] || visited[start]) continue;

    let top = 0;
    let area = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
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

    components.push({ area, minX, minY, maxX, maxY, pixels });
  }

  return components;
}

function shouldRemove(component, width, height) {
  const boxWidth = component.maxX - component.minX + 1;
  const boxHeight = component.maxY - component.minY + 1;
  const centerX = (component.minX + component.maxX) / 2;
  const centerY = (component.minY + component.maxY) / 2;

  const awayFromMainPole =
    centerX > width * 0.52 ||
    centerX < width * 0.12 ||
    (width > 650 && (centerX < width * 0.26 || centerX > width * 0.74));
  const likelySpecZone =
    centerY > height * 0.08 &&
    centerY < height * 0.82 &&
    awayFromMainPole;
  const tinyGlyph = component.area <= 180 && boxWidth <= 42 && boxHeight <= 24;
  const labelGlyph = component.area <= 420 && boxWidth <= 80 && boxHeight <= 38;
  const notLongProductPart = boxHeight < height * 0.08 && boxWidth < width * 0.42;

  return likelySpecZone && notLongProductPart && (tinyGlyph || labelGlyph);
}

async function cleanFile(filePath) {
  const image = sharp(filePath);
  const { data, info } = await image
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const output = Buffer.from(data);
  const components = buildComponents(data, info.width, info.height);
  let removedComponents = 0;

  for (const component of components) {
    if (!shouldRemove(component, info.width, info.height)) continue;

    removedComponents += 1;
    for (const idx of component.pixels) {
      const p = idx * 3;
      output[p] = 255;
      output[p + 1] = 255;
      output[p + 2] = 255;
    }
  }

  if (removedComponents === 0) return 0;

  const tmpPath = `${filePath}.tmp`;
  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(tmpPath);
  await fs.rename(tmpPath, filePath);
  return removedComponents;
}

async function main() {
  const source = await fs.readFile(dataPath, "utf8");
  const products = toProducts(source);
  const targets = products.filter((product) => {
    return product.image.startsWith("/product-whitebacks/") && product.category !== "gloplar";
  });

  let processed = 0;
  let touched = 0;
  let removed = 0;

  for (const product of targets) {
    const filePath = path.join(root, "public", product.image);
    const count = await cleanFile(filePath);
    processed += 1;
    if (count > 0) {
      touched += 1;
      removed += count;
    }
    if (processed % 50 === 0 || processed === targets.length) {
      console.log(`processed ${processed}/${targets.length}, touched ${touched}, removed ${removed}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
