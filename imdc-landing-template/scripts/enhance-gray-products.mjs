import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const srcDir = path.join(root, "public/product-clean");
const outDir = path.join(root, "public/product-gray-clean");

const targetSize = 1400;
const nearWhite = 238;

function isNearWhite(data, index) {
  return (
    data[index] >= nearWhite &&
    data[index + 1] >= nearWhite &&
    data[index + 2] >= nearWhite
  );
}

function createEdgeConnectedBackgroundMask(data, width, height) {
  const total = width * height;
  const mask = new Uint8Array(total);
  const queue = new Int32Array(total);
  let head = 0;
  let tail = 0;

  function push(pixel) {
    if (mask[pixel]) return;
    const index = pixel * 3;
    if (!isNearWhite(data, index)) return;
    mask[pixel] = 255;
    queue[tail++] = pixel;
  }

  for (let x = 0; x < width; x += 1) {
    push(x);
    push((height - 1) * width + x);
  }

  for (let y = 0; y < height; y += 1) {
    push(y * width);
    push(y * width + width - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    const y = Math.floor(pixel / width);

    if (x > 0) push(pixel - 1);
    if (x < width - 1) push(pixel + 1);
    if (y > 0) push(pixel - width);
    if (y < height - 1) push(pixel + width);
  }

  return mask;
}

async function enhanceFile(fileName) {
  const sourcePath = path.join(srcDir, fileName);
  const outputPath = path.join(outDir, fileName);
  const source = sharp(sourcePath).rotate().resize(targetSize, targetSize, {
    fit: "contain",
    background: "#ffffff",
    kernel: "lanczos3",
  });

  const { data, info } = await source.raw().toBuffer({ resolveWithObject: true });
  const backgroundMask = createEdgeConnectedBackgroundMask(data, info.width, info.height);

  const output = new Uint8Array(info.width * info.height * 3);
  for (let pixel = 0; pixel < info.width * info.height; pixel += 1) {
    const rgb = pixel * 3;
    if (backgroundMask[pixel]) {
      const x = pixel % info.width;
      const y = Math.floor(pixel / info.width);
      const dx = (x - info.width * 0.5) / (info.width * 0.5);
      const dy = (y - info.height * 0.47) / (info.height * 0.5);
      const distance = Math.min(1, Math.sqrt(dx * dx + dy * dy));
      const tone = Math.round(232 - distance * 52);
      output[rgb] = tone;
      output[rgb + 1] = tone;
      output[rgb + 2] = Math.max(0, tone - 2);
    } else {
      output[rgb] = data[rgb];
      output[rgb + 1] = data[rgb + 1];
      output[rgb + 2] = data[rgb + 2];
    }
  }

  await sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);
}

const files = (await fs.readdir(srcDir))
  .filter((file) => file.startsWith("3545-") && file.endsWith(".png"))
  .sort();

await fs.mkdir(outDir, { recursive: true });
for (const file of files) {
  await enhanceFile(file);
}

console.log(`enhanced ${files.length} gray product images`);
