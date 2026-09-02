"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectFilters = ["Tümü", "Park & Peyzaj", "Cadde & Yol", "Otel & Yaşam", "Kamu"];
const projectScopes = ["Tümü", "Yerel Projeler", "Uluslararası"];

const projects = [
  {
    scope: "Yerel Projeler",
    category: "Park & Peyzaj",
    eyebrow: "Türkiye · Manisa",
    title: "Park ve Peyzaj Projesi",
    description: "Yeşil alanlar ve yürüyüş yolları için dekoratif dış mekan aydınlatma çözümleri.",
    year: "2024",
    type: "Park & Peyzaj Aydınlatması",
    image: "/project-images/park-peyzaj.png",
    alt: "Gece aydınlatılmış park yürüyüş yolu ve peyzaj alanı",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Uluslararası",
    category: "Cadde & Yol",
    eyebrow: "Orta Doğu · Dubai",
    title: "Cadde ve Yol Aydınlatması",
    description: "Ana arterler, site yolları ve kamusal geçiş alanları için dayanıklı direk ve armatür uygulamaları.",
    year: "2023",
    type: "Cadde & Yol Aydınlatması",
    image: "/project-images/cadde-yol.png",
    alt: "Modern şehir caddesinde dış mekan yol aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Uluslararası",
    category: "Otel & Yaşam",
    eyebrow: "Balkanlar · Karadağ",
    title: "Otel ve Yaşam Alanları",
    description: "Bahçe, giriş, cephe çevresi ve yürüyüş aksları için mimari çizgiye uyumlu ürün seçimi.",
    year: "2022",
    type: "Otel & Yaşam Aydınlatması",
    image: "/project-images/otel-yasam.png",
    alt: "Aydınlatılmış lüks otel bahçesi ve yaşam alanı",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Yerel Projeler",
    category: "Park & Peyzaj",
    eyebrow: "Türkiye · Muğla",
    title: "Kıyı Resort Peyzaj Aydınlatması",
    description: "Sahil hattındaki yürüyüş yolları, zeytin ağaçları ve dinlenme alanları için sıcak tonlu peyzaj aydınlatması.",
    year: "2026",
    type: "Park & Peyzaj Aydınlatması",
    image: "/project-images/generated/mugla-resort-peyzaj.png",
    alt: "Muğla kıyı resort bahçesinde yürüyüş yolu ve peyzaj aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Yerel Projeler",
    category: "Otel & Yaşam",
    eyebrow: "Türkiye · Bodrum",
    title: "Bodrum Villa Bahçe Projesi",
    description: "Taş villa, havuz çevresi ve bahçe akslarında mimari dokuyu öne çıkaran düşük parlaklıklı dış mekan çözümü.",
    year: "2026",
    type: "Villa & Bahçe Aydınlatması",
    image: "/project-images/generated/bodrum-villa-bahce.png",
    alt: "Bodrum taş villa bahçesinde sıcak dış mekan aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Yerel Projeler",
    category: "Otel & Yaşam",
    eyebrow: "Türkiye · Çeşme",
    title: "Çeşme Butik Otel Avlusu",
    description: "Butik otel avlusu, havuz kenarı ve geçiş yollarında konforlu, davetkar ve dengeli ışık kurgusu.",
    year: "2025",
    type: "Otel & Yaşam Aydınlatması",
    image: "/project-images/generated/cesme-butik-otel.png",
    alt: "Çeşme butik otel avlusunda glob ve bollard aydınlatmalar",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Yerel Projeler",
    category: "Kamu",
    eyebrow: "Türkiye · Alaçatı",
    title: "Alaçatı Taş Sokak Aydınlatması",
    description: "Taş cepheli yaya akslarında tarihi dokuya uyum sağlayan sıcak duvar, bollard ve glop aydınlatma uygulaması.",
    year: "2025",
    type: "Yaya Aksı Aydınlatması",
    image: "/project-images/generated/alacati-tas-sokak.png",
    alt: "Alaçatı taş sokakta sıcak duvar ve yürüyüş yolu aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Uluslararası",
    category: "Cadde & Yol",
    eyebrow: "Orta Doğu · Dubai",
    title: "Dubai Bulvar Aydınlatması",
    description: "Palmiyeli şehir bulvarı, yaya kaldırımları ve araç yolları için ritmik direkli sistem ve peyzaj ışığı.",
    year: "2025",
    type: "Cadde & Yol Aydınlatması",
    image: "/project-images/generated/dubai-bulvar-aydinlatma.png",
    alt: "Dubai şehir bulvarında modern yol ve peyzaj aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Uluslararası",
    category: "Otel & Yaşam",
    eyebrow: "Orta Doğu · Abu Dhabi",
    title: "Abu Dhabi Sahil Otel Promenadı",
    description: "Sahil oteli promenadı, palmiyeler ve kamusal yürüyüş bandında uzun ömürlü bollard ve direkli uygulama.",
    year: "2024",
    type: "Otel & Promenad Aydınlatması",
    image: "/project-images/generated/abu-dhabi-sahil-otel.png",
    alt: "Abu Dhabi sahil oteli promenadında dış mekan aydınlatması",
    href: "/projects/park-peyzaj-projesi",
  },
  {
    scope: "Uluslararası",
    category: "Kamu",
    eyebrow: "Orta Doğu · Yas Island",
    title: "Yas Island Marina Yürüyüş Aksı",
    description: "Marina kıyısı, otel geçişleri ve peyzaj bantlarında su yansımasını kontrol eden sıcak dış mekan aydınlatması.",
    year: "2024",
    type: "Marina & Kamu Aydınlatması",
    image: "/project-images/generated/yas-island-marina.png",
    alt: "Yas Island marina yürüyüş yolunda bollard ve direk aydınlatmaları",
    href: "/projects/park-peyzaj-projesi",
  },
];

export default function ProjectsPage() {
  const [activeScope, setActiveScope] = useState("Tümü");
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const scopeMatches = activeScope === "Tümü" || project.scope === activeScope;
      const filterMatches = activeFilter === "Tümü" || project.category === activeFilter;
      return scopeMatches && filterMatches;
    });
  }, [activeFilter, activeScope]);

  return (
    <div className="site-wrapper projects-page-shell">
      <Navbar />

      <main>
        <section className="projects-hero">
          <div className="projects-hero-copy">
            <span className="projects-kicker">Projeler</span>
            <h1>Işığın Mekânla Buluştuğu Projeler</h1>
            <p>
              Türkiye ve dünyada, dış mekanları güvenli, estetik ve sürdürülebilir
              aydınlatma çözümleriyle dönüştürdüğümüz seçkin uygulamalar.
            </p>
          </div>

          <div className="projects-hero-controls" aria-label="Proje kapsamı">
            <div className="projects-segmented">
              {projectScopes.map((scope) => (
                <button
                  className={activeScope === scope ? "is-active" : ""}
                  type="button"
                  onClick={() => setActiveScope(scope)}
                  key={scope}
                >
                  {scope}
                </button>
              ))}
            </div>
            <span className="projects-count"><i aria-hidden="true" />{visibleProjects.length} proje</span>
          </div>
        </section>

        <section className="projects-showcase" aria-label="Proje listesi">
          <nav className="projects-filter-tabs" aria-label="Proje kategorileri">
            {projectFilters.map((filter) => (
              <button
                className={activeFilter === filter ? "is-active" : ""}
                type="button"
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </nav>

          <div className="projects-content-row">
            <div className="projects-index-rail" aria-hidden="true">
              <span className="is-active">01</span>
              <i />
              <span>{visibleProjects.length > 1 ? "02" : "--"}</span>
              <span>{visibleProjects.length > 2 ? "03" : "--"}</span>
            </div>

            <div className="projects-card-grid">
              {visibleProjects.length > 0 ? (
                visibleProjects.map((project, index) => (
                  <Link className="project-feature-card" href={project.href} key={project.title}>
                    <div className="project-feature-image">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        priority={index < 3}
                      />
                    </div>

                    <div className="project-feature-body">
                      <span className="project-feature-eyebrow">{project.eyebrow}</span>
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>

                      <div className="project-feature-meta">
                        <span>{project.year}</span>
                        <i aria-hidden="true" />
                        <span>{project.type}</span>
                        <span className="project-feature-arrow" aria-label={`${project.title} detayları`}>
                          <ArrowRight size={24} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="projects-empty-state">
                  Bu kategori için proje görselleri yakında eklenecek.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
