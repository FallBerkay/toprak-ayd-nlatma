"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMap from "@/components/ui/world-map";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo form submission state.
    setSubmitted(true);
  };

  return (
    <div className="site-wrapper" style={{ background: "#ffffff" }}>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero contact-map-hero">
        <div className="contact-hero-map" aria-hidden="true">
          <WorldMap
            dots={[
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 51.5074, lng: -0.1278 },
              },
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 48.8566, lng: 2.3522 },
              },
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 25.2048, lng: 55.2708 },
              },
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 40.7128, lng: -74.006 },
              },
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 24.7136, lng: 46.6753 },
              },
              {
                start: { lat: 41.0082, lng: 28.9784 },
                end: { lat: 35.6895, lng: 139.6917 },
              },
            ]}
          />
        </div>
        <div className="page-hero-inner">
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>İletişime Geçin</span>
          <h1 className="page-hero-title">Satış ve Proje Ekibimizle Görüşün</h1>
          <p className="page-hero-subtitle">
            Ürünlerimiz hakkında bilgi almak veya projeniz için teklif istemek isterseniz ekibimiz size yardımcı olmaya hazır.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ width: "100vw", background: "#ffffff", padding: "6rem 5vw", display: "flex", justifyContent: "center" }}>
        <div className="container-inner">
          <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem" }}>
            
            {/* Left: Contact Info */}
            <div className="contact-info-col" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <span className="section-tag">Doğrudan İletişim</span>
                <h2 className="section-title" style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>İstanbul Merkez</h2>
                <p style={{ color: "rgba(12, 12, 13, 0.6)", lineHeight: 1.6 }}>
                  Satış, proje planlama ve üretim süreçlerimiz İstanbul merkezli yürütülür. Showroom ziyareti veya teklif talepleri için bize ulaşabilirsiniz.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0c0c0d", marginBottom: "0.25rem" }}>Ofis ve Showroom</h4>
                    <p style={{ color: "rgba(12, 12, 13, 0.55)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                      İkitelli OSB, Mutfakçılar Sanayi Sitesi M1 Blok No: 24,<br />
                      Başakşehir, İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0c0c0d", marginBottom: "0.25rem" }}>Telefon</h4>
                    <p style={{ color: "rgba(12, 12, 13, 0.55)", fontSize: "0.9rem" }}>
                      Satış: +90 (212) 555 0123<br />
                      Destek: +90 (212) 555 0124
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0c0c0d", marginBottom: "0.25rem" }}>E-posta</h4>
                    <p style={{ color: "rgba(12, 12, 13, 0.55)", fontSize: "0.9rem" }}>
                      Satış ve Teklif: satis@toprakaydinlatma.com<br />
                      Genel: info@toprakaydinlatma.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0c0c0d", marginBottom: "0.25rem" }}>Çalışma Saatleri</h4>
                    <p style={{ color: "rgba(12, 12, 13, 0.55)", fontSize: "0.9rem" }}>
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-col" style={{
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "16px",
              padding: "3rem",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.02)"
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div className="feature-icon" style={{ margin: "0 auto 1.5rem", width: "50px", height: "50px" }}>
                    <Send size={24} style={{ color: "var(--color-gold)" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "#0c0c0d", marginBottom: "0.75rem" }}>Mesajınız Gönderildi!</h3>
                  <p style={{ color: "rgba(12, 12, 13, 0.5)", fontSize: "0.95rem" }}>
                    Talebiniz için teşekkür ederiz. Proje ekibimiz en kısa sürede sizinle iletişime geçecek.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-explore" 
                    style={{ marginTop: "2rem", display: "inline-flex" }}
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label htmlFor="name" style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(12,12,13,0.7)" }}>Adınız Soyadınız</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          padding: "0.85rem 1rem",
                          border: "1px solid rgba(0,0,0,0.08)",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "var(--font-body)",
                          outline: "none"
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label htmlFor="email" style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(12,12,13,0.7)" }}>E-posta Adresi</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          padding: "0.85rem 1rem",
                          border: "1px solid rgba(0,0,0,0.08)",
                          borderRadius: "8px",
                          fontSize: "0.95rem",
                          fontFamily: "var(--font-body)",
                          outline: "none"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="subject" style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(12,12,13,0.7)" }}>Konu</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      value={formData.subject} 
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        padding: "0.85rem 1rem",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: "8px",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="message" style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(12,12,13,0.7)" }}>Proje Detayları / Mesajınız</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={5}
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        padding: "0.85rem 1rem",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: "8px",
                        fontSize: "0.95rem",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                        resize: "none"
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-explore" 
                    style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
                  >
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
