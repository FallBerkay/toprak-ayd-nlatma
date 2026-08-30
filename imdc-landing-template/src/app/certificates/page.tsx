"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";

const certificates = [
  {
    title: "Kalite Yönetimi",
    code: "ISO 9001",
    description: "Üretim, kontrol ve teslimat süreçlerinde standart kalite yönetimi yaklaşımı.",
    icon: BadgeCheck,
  },
  {
    title: "Ürün Uygunluğu",
    code: "CE",
    description: "Avrupa Birliği güvenlik, sağlık ve çevre koruma gerekliliklerine uygun ürün grupları.",
    icon: FileCheck2,
  },
  {
    title: "Dış Mekan Dayanımı",
    code: "IP Koruma",
    description: "Dış mekan koşullarında toz ve suya karşı dayanım beklentilerine uygun armatür yapısı.",
    icon: ShieldCheck,
  },
  {
    title: "Proje Güvencesi",
    code: "Teknik Doküman",
    description: "Ürün seçimi ve uygulama süreçleri için teknik bilgi ve dokümantasyon desteği.",
    icon: Award,
  },
];

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

      <section className="certificates-section">
        <div className="container-inner">
          <div className="certificates-grid">
            {certificates.map((certificate) => {
              const Icon = certificate.icon;

              return (
                <article className="certificate-card" key={certificate.title}>
                  <div className="certificate-icon">
                    <Icon size={24} />
                  </div>
                  <span className="certificate-code">{certificate.code}</span>
                  <h2>{certificate.title}</h2>
                  <p>{certificate.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
