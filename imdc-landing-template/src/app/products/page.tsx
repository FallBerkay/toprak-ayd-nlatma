"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronUp, Sun } from "lucide-react";
import { toprakCategories, toprakProducts } from "./toprakProducts";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") {
      return toprakProducts;
    }

    return toprakProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="toprak-products-page">
      <header className="toprak-products-nav">
        <Link href="/" className="toprak-products-logo" aria-label="Toprak Aydınlatma">
          <img
            src="https://toprakaydinlatma.vercel.app/images/logo-white.png"
            alt="Toprak Aydınlatma"
          />
        </Link>

        <nav className="toprak-products-links" aria-label="Ana navigasyon">
          <Link href="/">Anasayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/products" aria-current="page">Ürünler</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">İletişim</Link>
        </nav>

        <button className="toprak-products-lang" type="button" aria-label="Dil seçimi">
          TR
          <span aria-hidden="true">⌄</span>
        </button>
      </header>

      <section className="toprak-products-hero">
        <h1>
          Ürünler<span>.</span>
        </h1>
        <p>Aydınlatma çözümlerinde yanınızdayız — tüm ürün gruplarımızı inceleyin.</p>

        <div className="toprak-products-filters" aria-label="Ürün kategorileri">
          {toprakCategories.map((category) => (
            <button
              key={category.slug}
              type="button"
              className={activeCategory === category.slug ? "active" : ""}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="toprak-products-grid" aria-live="polite">
        {visibleProducts.map((product) => (
          <a
            key={`${product.category}-${product.id}`}
            className="toprak-product-card"
            href={`https://toprakaydinlatma.vercel.app${product.href}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="toprak-product-image-wrap">
              <img src={product.image} alt={product.alt} loading="lazy" />
            </span>
            <span className="toprak-product-name">{product.name}</span>
            <span className="toprak-product-code">{product.code}</span>
          </a>
        ))}
      </section>

      <button
        className="toprak-theme-button"
        type="button"
        aria-label="Tema"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Sun size={18} />
      </button>

      <button
        className="toprak-scroll-top"
        type="button"
        aria-label="Yukari cik"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={18} />
      </button>
    </main>
  );
}
