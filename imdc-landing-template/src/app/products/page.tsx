"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { type ToprakProduct, toprakCategories, toprakProducts } from "./toprakProducts";

function getGrayProductImage(image: string) {
  if (image.startsWith("/product-whitebacks/3545-") && image.endsWith(".png")) {
    return image.replace("/product-whitebacks/", "/product-gray-clean/");
  }

  return null;
}

function getProductImage(product: ToprakProduct) {
  const grayProductImage = getGrayProductImage(product.image);

  if (grayProductImage) {
    return grayProductImage;
  }

  return product.image;
}

function getProductImageClass(product: ToprakProduct) {
  return getGrayProductImage(product.image) ? "toprak-product-gray-img" : "";
}

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
      <Navbar />

      <section className="toprak-products-hero">
        <div>
          <span className="toprak-products-eyebrow">Ürün Kataloğu</span>
          <h1>Ürünler</h1>
          <p>
            Yol, cadde, park, bahçe ve mimari dış mekan projeleri için
            geliştirilen Toprak Aydınlatma ürün gruplarını inceleyin.
          </p>
        </div>

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
              <img
                src={getProductImage(product)}
                alt={product.alt}
                loading="lazy"
                className={getProductImageClass(product)}
              />
            </span>
            {product.name !== "TOPRAK SERİSİ" && (
              <span className="toprak-product-name">{product.name}</span>
            )}
            <span className="toprak-product-code">{product.code}</span>
          </a>
        ))}
      </section>

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
