import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User } from "lucide-react";
import { getBlogPosts } from "./blogData";

export default function BlogPage() {
  const blogPosts = getBlogPosts();
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>Blog</span>
          <h1 className="page-hero-title">Bilgiler ve Güncellemeler</h1>
          <p className="page-hero-subtitle">
            Dış mekan aydınlatma dünyasından teknik rehberler, sektör eğilimleri ve proje notları.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="blog-featured-section">
          <div className="container-inner">
            <Link href={`/blog/${featuredPost.slug}`} className="blog-featured">
              <div className="blog-featured-media">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="blog-featured-content">
                <span className="blog-category">{featuredPost.category}</span>
                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-meta-item"><User size={13} /> {featuredPost.author}</span>
                  <span className="blog-meta-item"><Clock size={13} /> {featuredPost.readTime}</span>
                  <span className="blog-meta-item">{featuredPost.date}</span>
                </div>
                <span className="blog-read-more">
                  Yazıyı Oku <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="blog-grid-section">
        <div className="container-inner">
          <div className="blog-grid">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-media">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-meta-item"><Clock size={12} /> {post.readTime}</span>
                    <span className="blog-meta-item">{post.date}</span>
                  </div>
                  <span className="blog-read-more" style={{ fontSize: "0.85rem" }}>
                    Devamını Oku <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
