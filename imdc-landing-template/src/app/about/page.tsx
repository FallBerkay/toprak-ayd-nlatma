"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  Factory,
  Globe,
  Handshake,
  Palette,
  Shield,
  Truck,
  UsersRound,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>Toprak Aydınlatma Hakkında</span>
          <h1 className="page-hero-title">Dış Mekanlar İçin Aydınlatma Mühendisliği</h1>
          <p className="page-hero-subtitle">
            Yol, cadde, park, bahçe ve mimari projeler için estetik, dayanıklı ve uygulanabilir aydınlatma çözümleri geliştiriyoruz.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ width: "100vw", background: "#ffffff", padding: "5rem 5vw", display: "flex", justifyContent: "center" }}>
        <div className="container-inner">
          <div className="stats-band" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Yıllık Tecrübe</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Ülke</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Proje</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Ürün Satışı</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-about">
        <div className="container-inner">
          <div className="about-layout">
            <div className="about-left">
              <span className="section-tag">Hikayemiz</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Üretimden Projeye Uzanan Güçlü Bir Aydınlatma Yaklaşımı
              </h2>
              <p className="about-para">
                Toprak Aydınlatma, dış mekan aydınlatmasını yalnızca bir ihtiyaç değil, mekanın kimliğini güçlendiren mimari bir unsur olarak ele alır.
              </p>
              <p className="about-para" style={{ marginTop: "1rem" }}>
                Ürün gruplarımız; yol ve cadde aydınlatması, dekoratif direkler, bollard sistemleri, solar çözümler, park-bahçe direkleri, gloplar ve aksesuarları kapsar.
              </p>
              <p className="about-para" style={{ marginTop: "1rem" }}>
                Her projede doğru ürün seçimi, dayanıklı malzeme, düzgün ışık dağılımı ve uygulanabilir teknik detaylarla uzun ömürlü çözümler sunmayı hedefleriz.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-icon"><Globe size={22} /></div>
                <h3 className="feature-title">Geniş Ürün Yelpazesi</h3>
                <p className="feature-desc">Farklı ölçeklerdeki dış mekan projeleri için çok sayıda ürün grubu.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon"><Shield size={22} /></div>
                <h3 className="feature-title">Dış Mekan Dayanımı</h3>
                <p className="feature-desc">Yağmur, toz ve zorlu çevre koşullarına uygun ürün yapısı.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon"><Palette size={22} /></div>
                <h3 className="feature-title">Kaliteli Malzeme</h3>
                <p className="feature-desc">Uzun ömürlü kullanım için seçilmiş gövde, glop ve bağlantı bileşenleri.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon"><Award size={22} /></div>
                <h3 className="feature-title">Proje Desteği</h3>
                <p className="feature-desc">Teknik bilgi, ürün seçimi ve teklif süreçlerinde hızlı destek.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container-inner">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">Değerlerimiz</span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>Bizi Ne Güçlendirir?</h2>
          </div>
          <div className="about-values-grid">
            <div className="feature-box about-value-card">
              <div className="feature-icon about-value-icon"><Factory size={36} /></div>
              <h3 className="feature-title">Üretim Kalitesi</h3>
              <p className="feature-desc">Standart, tekrarlanabilir ve kontrollü üretim anlayışı.</p>
            </div>
            <div className="feature-box about-value-card">
              <div className="feature-icon about-value-icon"><Handshake size={36} /></div>
              <h3 className="feature-title">Müşteri Odaklılık</h3>
              <p className="feature-desc">Proje ihtiyacına göre ürün ve çözüm önerisi sunan destek ekibi.</p>
            </div>
            <div className="feature-box about-value-card">
              <div className="feature-icon about-value-icon"><Truck size={36} /></div>
              <h3 className="feature-title">Zamanında Teslimat</h3>
              <p className="feature-desc">Planlı üretim ve sevkiyat süreçleriyle projelere uyum.</p>
            </div>
            <div className="feature-box about-value-card">
              <div className="feature-icon about-value-icon"><UsersRound size={36} /></div>
              <h3 className="feature-title">Uzman Ekip</h3>
              <p className="feature-desc">Teknik detay, tasarım ve uygulama süreçlerinde deneyimli ekip.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
