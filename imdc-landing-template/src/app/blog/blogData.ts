import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  body: string;
  featured: boolean;
};

const blogDir = path.join(process.cwd(), "src/content/blog");

const blogImages: Record<string, string> = {
  "luks-villa-projelerinde-aydinlatma-tasarimi": "/blog/luks-villa-projelerinde-aydinlatma-tasarimi.png",
  "otellerde-glob-aydinlatma-kullanimi": "/blog/otellerde-glob-aydinlatma-kullanimi.png",
  "beach-hotel-ve-sahil-projelerinde-aydinlatma": "/blog/beach-hotel-ve-sahil-projelerinde-aydinlatma.png",
  "bahce-ve-peyzaj-tasariminda-dogru-aydinlatma": "/blog/bahce-ve-peyzaj-tasariminda-dogru-aydinlatma.png",
  "mimari-projelerde-aydinlatma-direklerinin-etkisi": "/blog/mimari-projelerde-aydinlatma-direklerinin-etkisi.png",
  "villa-bahcelerinde-direk-ve-bollard-aydinlatma": "/blog/villa-bahcelerinde-direk-ve-bollard-aydinlatma.png",
  "otel-girislerinde-ve-yuruyus-yollarinda-aydinlatma": "/blog/otel-girislerinde-ve-yuruyus-yollarinda-aydinlatma.png",
};

const categories: Record<string, string> = {
  "luks-villa-projelerinde-aydinlatma-tasarimi": "Villa Aydınlatma",
  "otellerde-glob-aydinlatma-kullanimi": "Otel Aydınlatma",
  "beach-hotel-ve-sahil-projelerinde-aydinlatma": "Sahil Projeleri",
  "bahce-ve-peyzaj-tasariminda-dogru-aydinlatma": "Peyzaj",
  "mimari-projelerde-aydinlatma-direklerinin-etkisi": "Mimari Proje",
  "villa-bahcelerinde-direk-ve-bollard-aydinlatma": "Bahçe Aydınlatma",
  "otel-girislerinde-ve-yuruyus-yollarinda-aydinlatma": "Otel Projeleri",
};

const dates = [
  "1 Eylül 2026",
  "30 Ağustos 2026",
  "28 Ağustos 2026",
  "26 Ağustos 2026",
  "24 Ağustos 2026",
  "22 Ağustos 2026",
  "20 Ağustos 2026",
];

function cleanSlug(filename: string) {
  return filename.replace(/^\d+-/, "").replace(/\.md$/, "");
}

function stripMarkdown(value: string) {
  return value.replace(/\*\*/g, "").trim();
}

function estimateReadTime(body: string) {
  const words = body.split(/\s+/).filter(Boolean).length;
  return `${Math.max(4, Math.ceil(words / 180))} dk okuma`;
}

function parsePost(filename: string, index: number): BlogPost {
  const raw = fs.readFileSync(path.join(blogDir, filename), "utf8");
  const slug = cleanSlug(filename);
  const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? slug;
  const excerpt = stripMarkdown(raw.match(/^\*\*Meta Açıklama:\*\*\s*(.+)$/m)?.[1] ?? "");
  const keywords = stripMarkdown(raw.match(/^\*\*Anahtar Kelimeler:\*\*\s*(.+)$/m)?.[1] ?? "")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
  const body = raw.split("---").slice(1).join("---").trim();

  return {
    slug,
    title,
    excerpt,
    keywords,
    category: categories[slug] ?? "Rehber",
    author: "Toprak Aydınlatma",
    date: dates[index] ?? "Eylül 2026",
    readTime: estimateReadTime(body),
    image: blogImages[slug] ?? "/project-images/about/story-product-family.png",
    body,
    featured: index === 0,
  };
}

export function getBlogPosts() {
  return fs
    .readdirSync(blogDir)
    .filter((filename) => filename.endsWith(".md"))
    .sort()
    .map(parsePost);
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}
