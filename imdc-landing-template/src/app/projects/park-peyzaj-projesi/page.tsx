import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Grid2X2, Layers3, MapPin, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const usedProducts = [
  {
    name: "Toprak Serisi 3545",
    spec: "3000K · LED · IP66",
    count: "24 Adet",
    image: "/product-gray-clean/3545-019.png",
  },
  {
    name: "Toprak Serisi 3545",
    spec: "3000K · LED · IP66",
    count: "18 Adet",
    image: "/product-gray-clean/3545-016.png",
  },
  {
    name: "Toprak Serisi 3545",
    spec: "4000K · LED · IP66",
    count: "12 Adet",
    image: "/product-gray-clean/3545-013.png",
  },
];

const detailImages = [
  {
    src: "/project-images/park-peyzaj.png",
    alt: "Park yürüyüş yolunda bollard ve peyzaj aydınlatmaları",
  },
  {
    src: "/project-images/about/park-bahce-belediye.png",
    alt: "Gündüz park yolu ve dış mekan aydınlatma direkleri",
  },
  {
    src: "/project-images/about/dis-aydinlatma.png",
    alt: "Modern yapıda dış mekan aydınlatma uygulaması",
  },
];

export default function ParkLandscapeProjectPage() {
  return (
    <div className="site-wrapper project-detail-page">
      <Navbar />

      <main>
        <section className="project-detail-hero">
          <nav className="project-breadcrumb" aria-label="Proje yolu">
            <Link href="/projects">Projeler</Link>
            <span>/</span>
            <span>Park ve Peyzaj Projesi</span>
          </nav>

          <div className="project-detail-intro">
            <div className="project-detail-copy">
              <span className="project-detail-kicker">Türkiye - Manisa - 2024</span>
              <h1>Park ve Peyzaj Projesi</h1>
              <p>
                Yeşil alanlar ve yürüyüş yolları için dekoratif dış mekan
                aydınlatma çözümleri.
              </p>
            </div>

            <div className="project-detail-main-image">
              <Image
                src="/project-images/park-peyzaj.png"
                alt="Gece aydınlatılmış park yürüyüş yolu ve peyzaj alanı"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="project-detail-panel" aria-label="Proje detayları">
          <div className="project-detail-about">
            <h2>Proje Hakkında</h2>
            <p>
              Manisa&apos;da yer alan bu park projesinde, gece kullanım konforunu
              artırmak ve peyzajın doğal dokusunu ön plana çıkarmak amacıyla
              bütüncül bir aydınlatma yaklaşımı benimsendi.
            </p>
            <p>
              Yaya yolları, dinlenme alanları ve bitki dokusu; enerji verimliliği
              yüksek armatürler ile katmanlı ve dengeli bir şekilde aydınlatıldı.
            </p>

            <div className="project-detail-facts">
              <div>
                <MapPin size={24} />
                <span>Konum</span>
                <strong>Manisa</strong>
              </div>
              <div>
                <CalendarDays size={24} />
                <span>Uygulama Yılı</span>
                <strong>2024</strong>
              </div>
              <div>
                <Grid2X2 size={24} />
                <span>Proje Türü</span>
                <strong>Park & Peyzaj</strong>
              </div>
            </div>
          </div>

          <aside className="project-detail-products">
            <h2>Kullanılan Ürünler</h2>
            <div className="project-detail-product-list">
              {usedProducts.map((product) => (
                <div className="project-detail-product" key={`${product.name}-${product.count}`}>
                  <div className="project-detail-product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={86}
                      height={86}
                      sizes="86px"
                    />
                  </div>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.spec}</span>
                  </div>
                  <b>{product.count}</b>
                </div>
              ))}
            </div>

            <div className="project-detail-summary">
              <div>
                <Package size={22} />
                <span>Toplam</span>
                <strong>54</strong>
                <span>Armatür</span>
              </div>
              <div>
                <Layers3 size={22} />
                <strong>3</strong>
                <span>Ürün Grubu</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="project-detail-gallery" aria-label="Uygulama detayları">
          <h2>Uygulama Detayları</h2>
          <div className="project-detail-gallery-grid">
            {detailImages.map((image) => (
              <div className="project-detail-gallery-item" key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 31vw" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
