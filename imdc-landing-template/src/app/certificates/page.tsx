"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const iso9001Document = {
  title: "ANILCAN Yönetim Sistemi Sertifikaları",
  code: "ISO 9001 / ISO 14001 / ISO 45001",
  description: "Kalite, çevre ve iş sağlığı güvenliği yönetim sistemi belgeleri 3 sayfa olarak görüntülenebilir.",
  pdf: "/certificates/anilcan-9001-2026/anilcan-iso-9001-2026.pdf",
  pages: [
    {
      src: "/certificates/anilcan-9001-2026/page-1.png",
      alt: "ANILCAN ISO 9001:2015 kalite yönetim sistemi sertifikası",
    },
    {
      src: "/certificates/anilcan-9001-2026/page-2.png",
      alt: "ANILCAN ISO 14001:2015 çevre yönetim sistemi sertifikası",
    },
    {
      src: "/certificates/anilcan-9001-2026/page-3.png",
      alt: "ANILCAN ISO 45001:2018 iş sağlığı ve güvenliği yönetim sistemi sertifikası",
    },
  ],
};

export default function CertificatesPage() {
  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>Belgeler ve Standartlar</span>
          <h1 className="page-hero-title">Sertifikalar</h1>
          <p className="page-hero-subtitle">
            Toprak Aydınlatma ürünleri için kalite, uygunluk ve teknik güvence belgelerini tek noktada sunuyoruz.
          </p>
        </div>
      </section>

      <section className="certificate-document-section">
        <div className="container-inner">
          <div className="certificate-document-header">
            <div>
              <span className="section-tag">{iso9001Document.code}</span>
              <h2>{iso9001Document.title}</h2>
              <p>{iso9001Document.description}</p>
            </div>
            <a
              className="certificate-document-link"
              href={iso9001Document.pdf}
              target="_blank"
              rel="noreferrer"
            >
              PDF&apos;i Aç
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="certificate-pages-grid">
            {iso9001Document.pages.map((page, index) => (
              <article className="certificate-page-card" key={page.src}>
                <div className="certificate-page-media">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <span>Sayfa {index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
