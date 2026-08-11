"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-footer" id="contact-section">
      <div className="container-inner">
        <div className="footer-layout">
          <div className="footer-col">
            <span className="footer-logo" aria-label="Toprak Aydınlatma" />
            <p className="footer-desc">
              Bahçeler, peyzaj alanları, yollar ve kamusal mekanlar için dayanıklı dış mekan aydınlatma çözümleri.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <span>info@imdesignconcepts.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-title">Ürünler</span>
            <div className="footer-links">
              <Link href="/products" className="footer-link">Tüm Ürünler</Link>
              <Link href="/products" className="footer-link">Yol ve Cadde Aydınlatması</Link>
              <Link href="/products" className="footer-link">Dekoratif Direkler</Link>
              <Link href="/products" className="footer-link">Park ve Bahçe Direkleri</Link>
              <Link href="/products" className="footer-link">Gloplar ve Aksesuarlar</Link>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-title">Kurumsal</span>
            <div className="footer-links">
              <Link href="/about" className="footer-link">Hakkımızda</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
              <Link href="/contact" className="footer-link">İletişim</Link>
              <a href="#" className="footer-link">Katalog İndir</a>
              <a href="#" className="footer-link">Bayi Ağı</a>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-title">Bülten</span>
            <p className="footer-desc" style={{ fontSize: "0.8rem" }}>
              Yeni ürünler ve koleksiyon duyuruları için e-posta listenize katılın.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-wrapper">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="newsletter-input" 
                  aria-label="Bülten için e-posta"
                />
                <button type="submit" className="newsletter-btn" aria-label="Bülten kaydı gönder">
                  <Send size={15} />
                </button>
              </div>
            </form>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Toprak Aydınlatma. Tüm hakları saklıdır.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" className="footer-link" style={{ fontSize: "0.8rem" }}>Şartlar</a>
            <a href="#" className="footer-link" style={{ fontSize: "0.8rem" }}>Gizlilik</a>
            <a href="#" className="footer-link" style={{ fontSize: "0.8rem" }}>Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
