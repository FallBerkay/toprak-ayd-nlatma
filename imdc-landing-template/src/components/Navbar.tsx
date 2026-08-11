"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isHomeScrolled, setIsHomeScrolled] = useState(false);
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
          <Link href="/about" className={`navbar-link ${isActive("/about") ? "active-link" : ""}`}>Hakkımızda</Link>
          <span className="navbar-divider">|</span>
          <Link href="/blog" className={`navbar-link ${isActive("/blog") ? "active-link" : ""}`}>Blog</Link>
          <span className="navbar-divider">|</span>
          <Link href="/contact" className={`navbar-link ${isActive("/contact") ? "active-link" : ""}`}>İletişim</Link>
        </nav>

        <Link href="/contact" className="btn-contact">
          İletişim
          <div className="btn-contact-arrow">
            <ArrowRight size={14} />
          </div>
        </Link>
      </header>
    </div>
  );
}
