import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getBlogPost, getBlogPosts } from "../blogData";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderMarkdown(body: string) {
  const lines = body.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={index}>{renderInline(line.replace(/^##\s+/, ""))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines = [];
      while (lines[index]?.trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      const rows = tableLines
        .filter((row) => !/^\|\s*-/.test(row))
        .map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
      const [head, ...bodyRows] = rows;

      blocks.push(
        <table key={index}>
          <thead>
            <tr>{head.map((cell) => <th key={cell}>{renderInline(cell)}</th>)}</tr>
          </thead>
          <tbody>
            {bodyRows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => <td key={cell}>{renderInline(cell)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];
      while (lines[index]?.trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^-\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ul key={index}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (/^\d+\.\s+/.test(lines[index]?.trim() ?? "")) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ol key={index}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ol>,
      );
      continue;
    }

    const paragraph = [];
    while (
      lines[index]?.trim() &&
      !lines[index].trim().startsWith("## ") &&
      !lines[index].trim().startsWith("- ") &&
      !lines[index].trim().startsWith("|") &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(<p key={index}>{renderInline(paragraph.join(" "))}</p>);
  }

  return blocks;
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı | Toprak Aydınlatma",
    };
  }

  return {
    title: `${post.title} | Toprak Aydınlatma Blog`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      <article className="blog-detail-page">
        <div className="container-inner">
          <Link href="/blog" className="blog-back-link">
            <ArrowLeft size={16} />
            Bloga Dön
          </Link>

          <header className="blog-detail-header">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="blog-meta">
              <span className="blog-meta-item"><User size={13} /> {post.author}</span>
              <span className="blog-meta-item"><Clock size={13} /> {post.readTime}</span>
              <span className="blog-meta-item">{post.date}</span>
            </div>
          </header>

          <div className="blog-detail-image">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1180px"
              priority
            />
          </div>

          <div className="blog-detail-content">
            {renderMarkdown(post.body)}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
