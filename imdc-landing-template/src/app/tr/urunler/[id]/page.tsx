/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers3, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getProductDisplayImage, getProductImageClass } from "@/app/products/productImages";
import { type ToprakProduct, toprakCategories, toprakProducts } from "@/app/products/toprakProducts";
import { notFound } from "next/navigation";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const categoryLabels = new Map<string, string>(
  toprakCategories
    .filter((category) => category.slug !== "all")
    .map((category) => [category.slug, category.label]),
);

function getProductById(id: string) {
  return toprakProducts.find((product) => product.id === id);
}

function getCategoryLabel(product: ToprakProduct) {
  return categoryLabels.get(product.category) ?? "Toprak Aydınlatma Ürünü";
}

function getProductSummary(product: ToprakProduct) {
  const category = getCategoryLabel(product).toLocaleLowerCase("tr-TR");

  return `${product.code} kodlu ${product.name} modeli ${category} kategorisinde yer alır. Proje ölçeği, uygulama alanı ve teknik ihtiyaçlara göre teklif sürecinde değerlendirilebilir.`;
}

export function generateStaticParams() {
  return toprakProducts.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Toprak Aydınlatma",
    };
  }

  return {
    title: `${product.code} | Toprak Aydınlatma`,
    description: getProductSummary(product),
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const categoryLabel = getCategoryLabel(product);
  const summary = getProductSummary(product);
  const productImage = getProductDisplayImage(product);
  const productImageClass = getProductImageClass(product);
  const relatedProducts = toprakProducts
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <main className="toprak-product-detail-page">
      <Navbar />

      <section className="toprak-product-detail-hero">
        <div className="toprak-product-detail-media">
          <img src={productImage} alt={product.alt} className={productImageClass} />
        </div>

        <div className="toprak-product-detail-copy">
          <Link href="/products" className="toprak-product-back-link">
            <ArrowLeft size={16} />
            Ürünlere Dön
          </Link>

          <span className="toprak-products-eyebrow">{categoryLabel}</span>
          <h1>{product.name}</h1>
          <p className="toprak-product-detail-code">{product.code}</p>
          <p className="toprak-product-detail-summary">{summary}</p>

          <dl className="toprak-product-detail-specs">
            <div>
              <dt>Kategori</dt>
              <dd>{categoryLabel}</dd>
            </div>
            <div>
              <dt>Ürün Kodu</dt>
              <dd>{product.code}</dd>
            </div>
            <div>
              <dt>Seri</dt>
              <dd>{product.name}</dd>
            </div>
          </dl>

          <div className="toprak-product-detail-actions">
            <Link href="/contact" className="toprak-product-primary-action">
              Teklif Al
              <ArrowRight size={17} />
            </Link>
            <a
              href={`https://wa.me/902125550123?text=${encodeURIComponent(`${product.code} ürünü hakkında bilgi almak istiyorum.`)}`}
              className="toprak-product-secondary-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="toprak-product-related">
          <div className="toprak-product-related-header">
            <div>
              <span className="toprak-products-eyebrow">Aynı Kategori</span>
              <h2>{categoryLabel}</h2>
            </div>
            <Link href="/products" className="toprak-product-related-all">
              Tüm Ürünler
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="toprak-product-related-grid">
            {relatedProducts.map((item) => (
              <Link href={item.href} className="toprak-product-related-card" key={item.id}>
                <span>
                  <img
                    src={getProductDisplayImage(item)}
                    alt={item.alt}
                    loading="lazy"
                    className={getProductImageClass(item)}
                  />
                </span>
                <strong>{item.name}</strong>
                <small>{item.code}</small>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="toprak-product-detail-note">
        <Layers3 size={18} />
        <p>
          Ürün ölçüleri, renk ve uygulama seçenekleri proje ihtiyacına göre teklif
          aşamasında netleştirilir.
        </p>
      </section>
    </main>
  );
}
