"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isHomeScrolled, setIsHomeScrolled] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<"tr" | "eng">("tr");
  const isScrolled = !isHome || isHomeScrolled;

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const handleScroll = () => {
      setIsHomeScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isActive = (path: string) => pathname === path;
  const isCertificatesActive = pathname === "/certificates" || pathname === "/tr/sertifikalar";
  const isProjectsActive = pathname === "/projects" || pathname === "/tr/projeler";

  return (
    <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`} style={!isHome ? { top: 0 } : {}}>
      <header className="navbar">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-mark" aria-label="Toprak Aydınlatma" />
        </Link>

        <nav className="navbar-links">
          <Link href="/" className={`navbar-link ${isActive("/") ? "active-link" : ""}`}>Anasayfa</Link>
          <span className="navbar-divider">|</span>
          <Link href="/products" className={`navbar-link ${isActive("/products") ? "active-link" : ""}`}>Ürünler</Link>
          <span className="navbar-divider">|</span>
          <Link href="/projects" className={`navbar-link ${isProjectsActive ? "active-link" : ""}`}>Projeler</Link>
          <span className="navbar-divider">|</span>
          <Link href="/about" className={`navbar-link ${isActive("/about") ? "active-link" : ""}`}>Hakkımızda</Link>
          <span className="navbar-divider">|</span>
          <Link href="/certificates" className={`navbar-link ${isCertificatesActive ? "active-link" : ""}`}>Sertifikalar</Link>
          <span className="navbar-divider">|</span>
          <Link href="/blog" className={`navbar-link ${isActive("/blog") ? "active-link" : ""}`}>Blog</Link>
        </nav>

        <div className="navbar-actions">
          <div className="language-toggle" data-active={activeLanguage} aria-label="Dil seçimi">
            <span className="language-slider" aria-hidden="true" />
            <button
              className={`language-option ${activeLanguage === "tr" ? "active-language" : ""}`}
              type="button"
              aria-pressed={activeLanguage === "tr"}
              onClick={() => setActiveLanguage("tr")}
            >
              TR
            </button>
            <button
              className={`language-option ${activeLanguage === "eng" ? "active-language" : ""}`}
              type="button"
              aria-pressed={activeLanguage === "eng"}
              onClick={() => setActiveLanguage("eng")}
            >
              ENG
            </button>
          </div>

          <Link href="/contact" className="btn-contact">
            İletişim
            <div className="btn-contact-arrow">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}
