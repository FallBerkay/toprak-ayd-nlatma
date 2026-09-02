"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MunicipalityPartners from "@/components/MunicipalityPartners";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Lightbulb,
  LightbulbOff,
} from "lucide-react";

const PROJECT_COUNTRY_MARKERS: GlobeMarker[] = [
  {
    lat: 39.9334,
    lng: 32.8597,
    src: "https://flagcdn.com/w80/tr.png",
    label: "Türkiye",
    offset: { lift: 0.18 },
  },
  {
    lat: 52.52,
    lng: 13.405,
    src: "https://flagcdn.com/w80/de.png",
    label: "Almanya",
    offset: { lift: 0.18 },
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://flagcdn.com/w80/gb.png",
    label: "İngiltere",
    offset: { lift: 0.2 },
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    src: "https://flagcdn.com/w80/it.png",
    label: "İtalya",
    offset: { lift: 0.2 },
  },
  {
    lat: 41.9981,
    lng: 21.4254,
    src: "https://flagcdn.com/w80/mk.png",
    label: "Makedonya",
    size: 0.14,
    offset: { lift: 0.23 },
  },
  {
    lat: 45.815,
    lng: 15.9819,
    src: "https://flagcdn.com/w80/hr.png",
    label: "Hırvatistan",
    size: 0.14,
    offset: { lift: 0.21 },
  },
  {
    lat: 42.4304,
    lng: 19.2594,
    src: "https://flagcdn.com/w80/me.png",
    label: "Karadağ",
    size: 0.14,
    offset: { lift: 0.25 },
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://flagcdn.com/w80/jp.png",
    label: "Japonya",
    offset: { lift: 0.18 },
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    src: "https://flagcdn.com/w80/us.png",
    label: "Amerika",
    offset: { lift: 0.18 },
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://flagcdn.com/w80/ae.png",
    label: "Birleşik Arap Emirlikleri",
    offset: { lift: 0.18 },
  },
  {
    lat: 24.7136,
    lng: 46.6753,
    src: "https://flagcdn.com/w80/sa.png",
    label: "Suudi Arabistan",
    offset: { lift: 0.21 },
  },
  {
    lat: 33.3152,
    lng: 44.3661,
    src: "https://flagcdn.com/w80/iq.png",
    label: "Irak",
    size: 0.14,
    offset: { lift: 0.23 },
  },
  {
    lat: 35.6892,
    lng: 51.389,
    src: "https://flagcdn.com/w80/ir.png",
    label: "İran",
    size: 0.14,
    offset: { lift: 0.2 },
  },
  {
    lat: 25.2854,
    lng: 51.531,
    src: "https://flagcdn.com/w80/qa.png",
    label: "Katar",
    size: 0.14,
    offset: { lift: 0.25 },
  },
];

const PROJECT_GLOBE_CONFIG = {
  atmosphereColor: "#c5a880",
  atmosphereIntensity: 0.45,
  bumpScale: 3,
  autoRotateSpeed: 0.1,
  initialRotation: { x: -0.08, y: -2.45 },
  showAtmosphere: false,
  markerSize: 0.15,
};

const HERO_SLIDE_INTERVAL_MS = 8000;

const faqItems = [
  {
    question: "Glob aydınlatma nedir?",
    answer: "Top şeklinde, her yöne eşit ışık veren bahçe ve yol aydınlatma armatürüdür.",
  },
  {
    question: "Dış mekân aydınlatması yağmurdan, sudan etkilenir mi?",
    answer: "Kaliteli su geçirmez armatürler yağmura, neme ve dış hava koşullarına dayanıklıdır; sorun çıkarmaz.",
  },
  {
    question: "Villa bahçesinde direkler arasına ne kadar mesafe olmalı?",
    answer: "Direk boyuna göre değişir ama genel olarak her 3-4 metrede bir direk konulması yeterli ve dengeli bir görüntü verir.",
  },
  {
    question: "Otel ve villa bahçesinde nasıl bir ışık rengi tercih edilmeli?",
    answer: "Sıcak, sarıya yakın beyaz ışık tercih edilmeli; bu ton göze rahat gelir ve bahçeyi daha sıcak, davetkâr gösterir.",
  },
  {
    question: "Sahil kenarındaki otellerde aydınlatma neden daha çabuk bozulur?",
    answer: "Deniz tuzu ve nem, kaliteli malzemeyle yapılmamış armatürlerde zamanla paslanmaya yol açar; bu yüzden sahil projelerinde paslanmaz malzeme şart.",
  },
  {
    question: "İzmir, İstanbul ve Manisa'da aydınlatma seçimi neden farklı olur?",
    answer: "İzmir'de deniz kenarı için tuza dayanıklı, İstanbul'da nemli havaya uygun, Manisa'da ise geniş bahçeleri kaplayan direkli sistemler tercih edilir.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [lightStates, setLightStates] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isScrolledRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Track mouse position without re-rendering the full page/globe on every move.
  useEffect(() => {
    const updateSpotlight = () => {
      animationFrameRef.current = null;
      const { x, y } = mousePositionRef.current;
      const color = isScrolledRef.current
        ? "rgba(197, 168, 128, 0.03)"
        : "rgba(197, 168, 128, 0.08)";

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at ${x}px ${y}px, ${color}, transparent 80%)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Track window scroll position to toggle navbar theme state
  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 60;
      if (isScrolledRef.current !== nextScrolled) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateWhatsappVisibility = () => {
      const productsTop = productsSectionRef.current?.offsetTop ?? Number.POSITIVE_INFINITY;
      setShowWhatsapp(window.scrollY + window.innerHeight * 0.55 >= productsTop);
    };

    updateWhatsappVisibility();
    window.addEventListener("scroll", updateWhatsappVisibility, { passive: true });
    window.addEventListener("resize", updateWhatsappVisibility);
    return () => {
      window.removeEventListener("scroll", updateWhatsappVisibility);
      window.removeEventListener("resize", updateWhatsappVisibility);
    };
  }, []);

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

  const heroSlides = [
    {
      highlight: "Dayanıklılık",
      rest: "her detayda hissedilir.",
      subtitle: "Dış mekan şartlarına uygun, uzun ömürlü üretim ve malzeme kalitesi.",
      image: "/hero3.png",
    },
    {
      highlight: "Işık",
      rest: "mekanınızı tanımlar.",
      subtitle: "Yol, cadde, park ve bahçe projeleri için güvenilir aydınlatma çözümleri.",
      image: "/hero-bg.jpg",
    },
    {
      highlight: "Tasarım",
      rest: "mühendislikle buluşur.",
      subtitle: "Estetik, dayanıklılık ve verimliliği aynı üründe birleştiren sistemler.",
      image: "/hero-slide-2.webp",
    }
  ];
  const totalSlides = heroSlides.length;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, totalSlides]);

  // Featured products for homepage (6 items)
  const featuredProducts = [
    {
      id: "p1",
      title: "Küre Glop GL-34-9063",
      category: "GLOP",
      desc: "Bahçe ve peyzaj alanları için opal küre glop aydınlatma çözümü.",
      price: "Teklif Al",
      img: "/product-states/opal-off.png",
      litImg: "/product-states/opal-on.png",
      versions: ["GL-9063 (20cm)", "GL-9066 (25cm)", "GL-9070 (30cm)", "GL-9074 (40cm)"]
    },
    {
      id: "p2",
      title: "Küre Glop GL-34-9067",
      category: "PRİZMATİK",
      desc: "Prizmatik yüzeyiyle dengeli ışık dağılımı sağlayan dış mekan glopu.",
      price: "Teklif Al",
      img: "/product-states/prismatic-off.png",
      litImg: "/product-states/prismatic-on.png",
      versions: ["GL-9062 (20cm)", "GL-9067 (25cm)", "GL-9071 (30cm)", "GL-9075 (40cm)"]
    },
    {
      id: "p3",
      title: "Küre Glop GL-34-9065",
      category: "FÜME",
      desc: "Modern peyzaj uygulamaları için füme görünümlü dekoratif glop.",
      price: "Teklif Al",
      img: "/product-states/fume-off.png",
      litImg: "/product-states/fume-on.png",
      versions: ["GL-9065 (25cm)", "GL-9069 (30cm)", "GL-9073 (40cm)"]
    },
    {
      id: "p4",
      title: "Toprak Serisi 3545",
      category: "YOL VE CADDE",
      desc: "Dış mekan projeleri için dairesel form ve çift yönlü aydınlatma çözümü.",
      price: "Teklif Al",
      img: "/product-states/toprak-series-ring-gray-off.png",
      litImg: "/product-states/toprak-series-ring-gray-on.png",
      versions: ["Toprak Serisi", "Çift Konsol", "LED"],
      renderFit: true
    },
    {
      id: "p5",
      title: "Toprak Serisi 3545-016",
      category: "YOL VE CADDE",
      desc: "Dekoratif orta paneliyle cadde ve peyzaj aksları için mimari direk sistemi.",
      price: "Teklif Al",
      img: "/product-states/toprak-series-016-gray-off.png",
      litImg: "/product-states/toprak-series-016-gray-on.png",
      versions: ["3545-016", "Dekoratif", "LED"],
      renderFit: true
    },
    {
      id: "p6",
      title: "Toprak Serisi 3545-036",
      category: "YOL VE CADDE",
      desc: "Akıcı kavisli gövdesiyle modern dış mekan projeleri için çift armatürlü sistem.",
      price: "Teklif Al",
      img: "/product-states/toprak-series-036-gray-off.png",
      litImg: "/product-states/toprak-series-036-gray-on.png",
      versions: ["3545-036", "Dekoratif", "LED"],
      renderFit: true
    }
  ];

  const aboutFeatures = [
    {
      label: "Kamu Projeleri",
      title: "Belediye ve Kamu Kuruluşları",
      image: "/project-images/about/park-bahce-belediye.png",
    },
    {
      label: "Proje Ekipleri",
      title: "İnşaat ve Mimarlık Firmaları",
      image: "/project-images/about/insaat-mimarlik.png",
    },
    {
      label: "Kurumsal Alanlar",
      title: "Firmalar İçin Dış Aydınlatma",
      image: "/project-images/about/dis-aydinlatma.png",
    },
    {
      label: "Özel Yaşam Alanları",
      title: "Otel ve Lüks Villa",
      image: "/hero-bg.jpg",
    },
  ];

  return (
    <div className="site-wrapper">
      {/* Ambient spotlight overlay */}
      <div 
        ref={spotlightRef}
        className="spotlight"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 5,
          background: "radial-gradient(800px circle at 0px 0px, rgba(197, 168, 128, 0.08), transparent 80%)",
          transition: "background 0.3s ease",
        }}
      />

      {/* 1. Shared Navbar */}
      <Navbar />

      {/* 2. Hero Frame (Full Screen) */}
      <div
        className="hero-frame"
        id="home"
      >
        <div className="hero-background-stack" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero-background-layer ${index === activeIndex ? "is-active" : ""}`}
              key={slide.image}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>

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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="hero-title">
                <span className="hero-title-highlight">{heroSlides[activeIndex].highlight}</span>{" "}
                {heroSlides[activeIndex].rest}
              </h1>
              
              <p className="hero-subtitle">
                {heroSlides[activeIndex].subtitle}
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

      <MunicipalityPartners />

      {/* 3. Section: FEATURED PRODUCTS */}
      <section className="section-products" id="products" ref={productsSectionRef}>
        <div className="container-inner">
          <span className="section-tag">Öne Çıkan Ürünler</span>
          <h2 className="section-title">Mimari Aydınlatma Sistemleri</h2>
          <p className="section-subtitle">
            Yol, cadde, park, bahçe ve peyzaj projeleri için geliştirilen dayanıklı dış mekan aydınlatma ürünleri.
          </p>

          {/* Featured Products Grid - 3 columns, static cards */}
          <div className="featured-grid">
            {featuredProducts.map((product, index) => {
              const isLit = lightStates[product.id] || false;
              return (
                <div
                  key={product.id}
                  className={`featured-card ${index === 0 ? "has-light-hint" : ""} ${product.renderFit ? "render-card" : ""} ${isLit ? "lit" : ""}`}
                >
                  {/* Image Area — fills entire top half of card */}
                  <div className="featured-lamp-area">
                    {/* Warm ambient glow — covers top half when light is ON */}
                    {!product.renderFit && (
                      <div className={`lamp-glow ${isLit ? "active" : ""}`} />
                    )}
                    <Image
                      src={isLit ? product.litImg : product.img}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`featured-lamp-img ${product.renderFit ? "render-fit" : ""}`}
                      style={{ objectFit: product.renderFit ? "contain" : "cover" }}
                    />
                  </div>

                  {/* Light Toggle Button */}
                  <button
                    className={`light-toggle ${isLit ? "on" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLight(product.id);
                    }}
                    aria-label={isLit ? "Işığı kapat" : "Işığı aç"}
                  >
                    {isLit ? <Lightbulb size={16} /> : <LightbulbOff size={16} />}
                  </button>
                  {index === 0 && !isLit && (
                    <div className="light-hint" aria-hidden="true">
                      <span>Işığı aç</span>
                      <svg viewBox="0 0 92 44" fill="none">
                        <path
                          d="M4 35C22 12 48 7 78 21"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeDasharray="5 7"
                        />
                        <path
                          d="M73 12L83 24L67 27"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

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
              {aboutFeatures.map((feature) => (
                <Link className="feature-box" href="/projects" key={feature.title}>
                  <div className="feature-image">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="feature-content">
                    <span className="feature-label">{feature.label}</span>
                    <div className="feature-heading-row">
                      <h3 className="feature-title">{feature.title}</h3>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Project Countries */}
      <section className="section-project-countries" aria-label="Proje kurduğumuz ülkeler">
        <div className="container-inner project-countries-layout">
          <div className="project-countries-copy">
            <span className="section-tag">Projelerimiz</span>
            <h2 className="section-title">Projelerimiz</h2>
            <p className="section-subtitle">
              Türkiye ve dünyada dış mekan aydınlatma projeleri için ürün seçimi,
              teknik planlama ve uygulama ihtiyaçlarına göre çözüm geliştiriyoruz.
            </p>
            <p className="section-subtitle">
              Belediye, peyzaj, cadde ve özel yaşam alanlarında güvenilir,
              sürdürülebilir ve estetik aydınlatma sistemleri sunuyoruz.
            </p>
          </div>

          <div className="project-countries-stats" aria-label="Proje istatistikleri">
            <div className="project-countries-stat">
              <strong>15+</strong>
              <span>Ülkede proje</span>
            </div>
            <div className="project-countries-stat">
              <strong>75</strong>
              <span>Proje tamamlandı</span>
            </div>
          </div>

          <div className="project-countries-globe" aria-hidden="true">
            <div className="project-countries-map-badge">15+ ülkede proje</div>
            <div className="project-countries-map-legend">
              <span><i />Tamamlanan</span>
              <span><i />Devam eden</span>
            </div>
            <Globe3D
              className="project-countries-globe__canvas"
              markers={PROJECT_COUNTRY_MARKERS}
              config={PROJECT_GLOBE_CONFIG}
            />
          </div>
        </div>
      </section>

      {/* 6. Section: CTA Banner */}
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

      {/* 7. Section: FAQ */}
      <section className="section-faq" aria-labelledby="faq-title">
        <div className="container-inner faq-layout">
          <div className="faq-copy">
            <span className="section-tag">SSS</span>
            <h2 className="section-title" id="faq-title">
              Sık Sorulan Sorular
            </h2>
            <p className="section-subtitle">
              Dış mekan aydınlatması, glob armatürler ve proje seçimleri hakkında en çok gelen sorular.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={20} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        className="faq-answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Shared Footer */}
      <Footer />

      <a
        className={`whatsapp-float ${showWhatsapp ? "is-visible" : ""}`}
        href="https://wa.me/902125550123"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile bizimle iletişime geçin"
      >
        <span>Bizimle iletişime geçin</span>
        <span className="whatsapp-float-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img">
            <path d="M16 3.4c-6.94 0-12.58 5.43-12.58 12.12 0 2.31.68 4.47 1.86 6.31L3.4 28.6l7.05-1.78A12.97 12.97 0 0 0 16 28.08c6.94 0 12.58-5.43 12.58-12.12S22.94 3.4 16 3.4Zm0 22.45c-1.75 0-3.45-.43-4.95-1.25l-.35-.19-4.18 1.06 1.11-4-.23-.37a9.73 9.73 0 0 1-1.56-5.58c0-5.46 4.56-9.89 10.15-9.89s10.15 4.43 10.15 9.89S21.59 25.85 16 25.85Zm5.57-7.42c-.3-.15-1.78-.85-2.06-.94-.28-.1-.48-.15-.68.15-.2.29-.78.94-.96 1.13-.18.2-.35.22-.65.07-.3-.15-1.27-.45-2.42-1.45-.89-.78-1.49-1.75-1.67-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.68-1.59-.93-2.18-.25-.57-.5-.49-.68-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1-1.05 2.43 0 1.43 1.08 2.82 1.23 3.01.15.2 2.13 3.15 5.16 4.42.72.3 1.28.48 1.72.61.72.22 1.38.19 1.9.12.58-.08 1.78-.7 2.03-1.38.25-.68.25-1.26.18-1.38-.08-.12-.28-.2-.58-.34Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
