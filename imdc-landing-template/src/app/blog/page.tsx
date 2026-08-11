"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Dış Mekan Glop Aydınlatma Rehberi",
    excerpt: "Peyzaj projeleri için doğru glop seçimi, malzeme yapısı, ölçü, ışık dağılımı ve montaj detayları hakkında temel bilgiler.",
    category: "Rehber",
    author: "Toprak Aydınlatma",
    date: "15 Temmuz 2026",
    readTime: "8 dk okuma",
    featured: true,
  },
  {
    id: "2",
    title: "Dış Mekanda Malzeme Seçimi Neden Önemlidir?",
    excerpt: "UV dayanımı, darbe direnci ve uzun ömürlü kullanım açısından dış mekan aydınlatma ürünlerinde malzeme seçiminin rolü.",
    category: "Teknik",
    author: "Toprak Teknik Ekip",
    date: "8 Temmuz 2026",
    readTime: "6 dk okuma",
    featured: false,
  },
  {
    id: "3",
    title: "2026 Peyzaj Aydınlatma Eğilimleri",
    excerpt: "Park, bahçe, site ve ticari projelerde öne çıkan dış mekan aydınlatma yaklaşımlarını keşfedin.",
    category: "Trendler",
    author: "Toprak Tasarım",
    date: "28 Haziran 2026",
    readTime: "5 dk okuma",
    featured: false,
  },
  {
    id: "4",
    title: "IP Koruma Sınıfları: Projeniz İçin Hangisi Uygun?",
    excerpt: "Dış mekan aydınlatmada toz ve su koruma sınıflarını, kullanım alanlarına göre nasıl değerlendireceğinizi öğrenin.",
    category: "Teknik",
    author: "Toprak Teknik Ekip",
    date: "20 Haziran 2026",
    readTime: "4 dk okuma",
    featured: false,
  },
  {
    id: "5",
    title: "Proje Notları: Park ve Bahçe Aydınlatması",
    excerpt: "Kamusal alanlarda ürün seçimi, direk yerleşimi ve homojen aydınlatma planlamasında dikkat edilmesi gerekenler.",
    category: "Proje",
    author: "Toprak Proje Ekibi",
    date: "12 Haziran 2026",
    readTime: "7 dk okuma",
    featured: false,
  },
  {
    id: "6",
    title: "Opal, Prizmatik ve Füme Glop Seçimi",
    excerpt: "Mimarlar ve proje ekipleri için farklı glop tiplerinin görsel etkisini ve kullanım alanlarını karşılaştıran kısa rehber.",
    category: "Rehber",
    author: "Toprak Tasarım",
    date: "5 Haziran 2026",
    readTime: "5 dk okuma",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>Blog</span>
          <h1 className="page-hero-title">Bilgiler ve Güncellemeler</h1>
          <p className="page-hero-subtitle">
            Dış mekan aydınlatma dünyasından teknik rehberler, sektör eğilimleri ve proje notları.
          </p>
        </div>
      </section>

      {/* Featured Blog Post */}
      {featuredPost && (
        <section style={{ width: "100vw", background: "#ffffff", padding: "4rem 5vw 2rem", display: "flex", justifyContent: "center" }}>
          <div className="container-inner">
            <div className="blog-featured">
              <div className="blog-featured-content">
                <span className="blog-category">{featuredPost.category}</span>
                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-meta-item"><User size={13} /> {featuredPost.author}</span>
                  <span className="blog-meta-item"><Clock size={13} /> {featuredPost.readTime}</span>
                  <span className="blog-meta-item">{featuredPost.date}</span>
                </div>
                <Link href="#" className="blog-read-more">
                  Yazıyı Oku <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ width: "100vw", background: "#ffffff", padding: "3rem 5vw 7rem", display: "flex", justifyContent: "center" }}>
        <div className="container-inner">
          <div className="blog-grid">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-meta-item"><Clock size={12} /> {post.readTime}</span>
                    <span className="blog-meta-item">{post.date}</span>
                  </div>
                  <Link href="#" className="blog-read-more" style={{ fontSize: "0.85rem" }}>
                    Devamını Oku <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
