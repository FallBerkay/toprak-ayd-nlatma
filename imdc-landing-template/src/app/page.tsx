"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Lightbulb,
  LightbulbOff,
  Globe,
  Shield,
  Palette,
  Award
} from "lucide-react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightStates, setLightStates] = useState<Record<string, boolean>>({});

  // Track mouse position for the ambient spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Track window scroll position to toggle navbar theme state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalSlides = 5;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const toggleLight = (productId: string) => {
    setLightStates(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const slideContent = [
    {
      highlight: "Işık",
      rest: "mekanınızı tanımlar.",
      subtitle: "Yol, cadde, park ve bahçe projeleri için güvenilir aydınlatma çözümleri.",
    },
    {
      highlight: "Tasarım",
      rest: "mühendislikle buluşur.",
      subtitle: "Estetik, dayanıklılık ve verimliliği aynı üründe birleştiren sistemler.",
    },
    {
      highlight: "Dayanıklılık",
      rest: "her detayda hissedilir.",
      subtitle: "Dış mekan şartlarına uygun, uzun ömürlü üretim ve malzeme kalitesi.",
    },
    {
      highlight: "Atmosfer",
      rest: "projenize göre şekillenir.",
      subtitle: "Peyzaj, site, belediye ve özel projeler için esnek ürün seçenekleri.",
    },
    {
      highlight: "Üretim",
      rest: "tecrübeyle güçlenir.",
      subtitle: "Toprak Aydınlatma kalitesiyle modern ve güvenilir aydınlatma ürünleri.",
    }
  ];

  // Featured products for homepage (6 items)
  const featuredProducts = [
    {
      id: "p1",
      title: "Küre Glop GL-34-9063",
      category: "GLOP",
      desc: "Bahçe ve peyzaj alanları için opal küre glop aydınlatma çözümü.",
      price: "Teklif Al",
      img: "/globe-opal.jpg",
      versions: ["GL-9063 (20cm)", "GL-9066 (25cm)", "GL-9070 (30cm)", "GL-9074 (40cm)"]
    },
    {
      id: "p2",
      title: "Küre Glop GL-34-9067",
      category: "PRİZMATİK",
      desc: "Prizmatik yüzeyiyle dengeli ışık dağılımı sağlayan dış mekan glopu.",
      price: "Teklif Al",
      img: "/globe-prismatic.jpg",
      versions: ["GL-9062 (20cm)", "GL-9067 (25cm)", "GL-9071 (30cm)", "GL-9075 (40cm)"]
    },
    {
      id: "p3",
      title: "Küre Glop GL-34-9065",
      category: "FÜME",
      desc: "Modern peyzaj uygulamaları için füme görünümlü dekoratif glop.",
      price: "Teklif Al",
      img: "/globe-fume.jpg",
      versions: ["GL-9065 (25cm)", "GL-9069 (30cm)", "GL-9073 (40cm)"]
    },
    {
      id: "p4",
      title: "Çift Dome Glop GL-34-1350",
      category: "DOME",
      desc: "Işığı kontrollü dağıtan, dış mekan projeleri için özel dome sistem.",
      price: "Teklif Al",
      img: "/globe-dualdome.jpg",
      versions: ["GL-1320 (25cm)", "GL-1330 (30cm)", "GL-1350 (40cm)"]
    },
    {
      id: "p5",
      title: "Küre Glop GL-34-9076",
      category: "OPAL",
      desc: "Park, bahçe ve yürüyüş yollarında kullanılabilen opal glop modeli.",
      price: "Teklif Al",
      img: "/globe-opal.jpg",
      versions: ["GL-9076 (20cm)", "GL-9078 (20cm Prismatic)"]
    },
    {
      id: "p6",
      title: "Dome Glop GL-34-9081",
      category: "DOME",
      desc: "Peyzaj ve bahçe uygulamalarında güçlü görsel etki sunan dome glop.",
      price: "Teklif Al",
      img: "/globe-dualdome.jpg",
      versions: ["GL-9079 (20cm Clear)", "GL-9080 (20cm Prismatic)", "GL-9081 (20cm Opal)"]
    }
  ];

  return (
    <div className="site-wrapper">
      {/* Ambient spotlight overlay */}
      <div 
        className="spotlight"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 5,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isScrolled ? 'rgba(197, 168, 128, 0.03)' : 'rgba(197, 168, 128, 0.08)'}, transparent 80%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* 1. Shared Navbar */}
      <Navbar />

      {/* 2. Hero Frame (Full Screen) */}
      <div className="hero-frame" id="home">
        {/* Architectural Grid lines */}
        <div className="grid-line-vertical-left" />
        <div className="grid-line-vertical-right" />
        <div className="grid-line-horizontal-bottom" />

        {/* Side Panels */}
        <div className="side-panel-left">
          <span className="scroll-text">Aşağı Kaydır</span>
          <div className="scroll-line" />
          <div className="mouse-indicator">
            <div className="mouse-wheel" />
          </div>
        </div>

        <div className="side-panel-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <Facebook size={15} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <Instagram size={15} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
        </div>

        {/* Top spacer */}
        <div style={{ height: "6rem", flexShrink: 0 }} />

        {/* Hero Content Area */}
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="hero-title">
                <span className="hero-title-highlight">{slideContent[activeIndex].highlight}</span>{" "}
                {slideContent[activeIndex].rest}
              </h1>
              
              <p className="hero-subtitle">
                {slideContent[activeIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#products" className="btn-explore">
              Koleksiyonları İncele
              <div className="btn-explore-arrow">
                <ArrowRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Carousel Slider Dot Navigation */}
        <div className="slider-dots">
          <button className="slider-arrow" onClick={handlePrev} aria-label="Önceki slayt">
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              aria-label={`${index + 1}. slayta git`}
            />
          ))}

          <button className="slider-arrow" onClick={handleNext} aria-label="Sonraki slayt">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* REFERENCES — Scrolling Logo Marquee on White */}
      <section className="section-references">
        <span className="references-label">Projelerde Güvenilen Çözüm Ortağı</span>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* First set */}
            <div className="ref-logo">LOGO 1</div>
            <div className="ref-logo">LOGO 2</div>
            <div className="ref-logo">LOGO 3</div>
            <div className="ref-logo">LOGO 4</div>
            <div className="ref-logo">LOGO 5</div>
            <div className="ref-logo">LOGO 6</div>
            {/* Duplicate for seamless loop */}
            <div className="ref-logo">LOGO 1</div>
            <div className="ref-logo">LOGO 2</div>
            <div className="ref-logo">LOGO 3</div>
            <div className="ref-logo">LOGO 4</div>
            <div className="ref-logo">LOGO 5</div>
            <div className="ref-logo">LOGO 6</div>
          </div>
        </div>
      </section>

      {/* 3. Section: FEATURED PRODUCTS */}
      <section className="section-products" id="products">
        <div className="container-inner">
          <span className="section-tag">Öne Çıkan Ürünler</span>
          <h2 className="section-title">Mimari Aydınlatma Sistemleri</h2>
          <p className="section-subtitle">
            Yol, cadde, park, bahçe ve peyzaj projeleri için geliştirilen dayanıklı dış mekan aydınlatma ürünleri.
          </p>

          {/* Featured Products Grid - 3 columns, static cards */}
          <div className="featured-grid">
            {featuredProducts.map((product) => {
              const isLit = lightStates[product.id] || false;
              return (
                <div
                  key={product.id}
                  className={`featured-card ${isLit ? "lit" : ""}`}
                >
                  {/* Image Area — fills entire top half of card */}
                  <div className="featured-lamp-area">
                    {/* Warm ambient glow — covers top half when light is ON */}
                    <div className={`lamp-glow ${isLit ? "active" : ""}`} />
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="featured-lamp-img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Light Toggle Button */}
                  <button
                    className={`light-toggle ${isLit ? "on" : ""}`}
                    onClick={(e) => { e.stopPropagation(); toggleLight(product.id); }}
                    aria-label={isLit ? "Işığı kapat" : "Işığı aç"}
                  >
                    {isLit ? <Lightbulb size={16} /> : <LightbulbOff size={16} />}
                  </button>

                  {/* Info Area */}
                  <div className="featured-info">
                    <span className="product-cat">{product.category}</span>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-desc">{product.desc}</p>

                    {product.versions && (
                      <div className="product-versions">
                        {product.versions.slice(0, 3).map((ver, idx) => (
                          <span key={idx} className="version-badge">
                            {ver}
                          </span>
                        ))}
                        {product.versions.length > 3 && (
                          <span className="version-badge">+{product.versions.length - 3}</span>
                        )}
                      </div>
                    )}

                    <div className="product-footer">
                      <span className="product-price">{product.price}</span>
                      <span className="product-action">
                        Detayları Gör <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Products CTA */}
          <div className="view-all-cta">
            <Link href="/products" className="btn-view-all">
              Tüm Ürünleri Gör
              <div className="btn-view-all-arrow">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Section: ABOUT */}
      <section className="section-about" id="about">
        <div className="container-inner">
          {/* Stats Band */}
          <div className="stats-band">
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

          <div className="about-layout">
            <div className="about-left">
              <span className="section-tag">Toprak Aydınlatma Hakkında</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Dış mekan mimarisi için ışığı mühendislikle tasarlıyoruz.
              </h2>
              <p className="about-para">
                Toprak Aydınlatma; yol, cadde, park, bahçe, peyzaj ve kamusal alan projeleri için dekoratif ve teknik aydınlatma ürünleri geliştirir.
              </p>
              <p className="about-para" style={{ marginTop: "1rem" }}>
                Ürünlerimiz dış mekan koşullarına dayanıklı malzeme yapısı, dengeli ışık dağılımı ve mimari çizgisiyle uzun ömürlü kullanım sunar.
              </p>
              <p className="about-para" style={{ marginTop: "1rem", fontSize: "1rem" }}>
                Mimarlar, peyzaj tasarımcıları, belediyeler ve proje ekipleriyle çalışarak ihtiyaca uygun aydınlatma çözümleri üretiriz.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-icon">
                  <Globe size={22} />
                </div>
                <h3 className="feature-title">Geniş Ürün Yelpazesi</h3>
                <p className="feature-desc">Yol, cadde, park, bahçe, glop ve aksesuar gruplarında kapsamlı çözümler.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <Shield size={22} />
                </div>
                <h3 className="feature-title">Dış Mekana Uygun</h3>
                <p className="feature-desc">Yağmur, toz ve zorlu çevre koşullarına uygun dayanıklı ürün yapısı.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <Palette size={22} />
                </div>
                <h3 className="feature-title">Kaliteli Malzeme</h3>
                <p className="feature-desc">Uzun süreli kullanım için seçilmiş gövde, glop ve bağlantı bileşenleri.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <Award size={22} />
                </div>
                <h3 className="feature-title">Proje Desteği</h3>
                <p className="feature-desc">Ürün seçimi, teknik detaylar ve teklif süreçlerinde hızlı destek.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: CTA Banner */}
      <section className="section-cta">
        <div className="container-inner" style={{ textAlign: "center", maxWidth: "700px" }}>
          <span className="section-tag" style={{ color: "rgba(197, 168, 128, 0.9)" }}>Projenize Başlayın</span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 500,
            color: "#ffffff",
            marginBottom: "1.5rem",
            lineHeight: 1.2
          }}>
            Dış mekan projenizi aydınlatmaya hazır mısınız?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem"
          }}>
            Ürün seçimi, toplu teklif ve teknik detaylar için ekibimizle iletişime geçin.
          </p>
          <Link href="/contact" className="btn-explore" style={{ margin: "0 auto", display: "inline-flex" }}>
            İletişime Geç
            <div className="btn-explore-arrow">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 6. Shared Footer */}
      <Footer />
    </div>
  );
}
