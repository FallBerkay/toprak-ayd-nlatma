import Image from "next/image";

const municipalityLogos = [
  { name: "Muğla Belediyesi", logo: "/municipality-logos/mugla.jpg", slug: "mugla" },
  { name: "Aydın Belediyesi", logo: "/municipality-logos/aydin-yatay.png", slug: "aydin", tone: "dark" },
  { name: "Gördes Belediyesi", logo: "/municipality-logos/gordes.png", slug: "gordes" },
  { name: "Hisarcık Belediyesi", logo: "/municipality-logos/hisarcik.jpg", slug: "hisarcik" },
  { name: "Ürgüp Belediyesi", logo: "/municipality-logos/urgup.svg", slug: "urgup", tone: "dark" },
  { name: "Karaburun Belediyesi", logo: "/municipality-logos/karaburun.svg", slug: "karaburun" },
  { name: "Gediz Belediyesi", logo: "/municipality-logos/gediz.jpg", slug: "gediz" },
  { name: "Sarıgöl Belediyesi", logo: "/municipality-logos/sarigol.png", slug: "sarigol" },
  { name: "Yunusemre Belediyesi", logo: "/municipality-logos/yunusemre.svg", slug: "yunusemre" },
  { name: "Seferihisar Belediyesi", logo: "/municipality-logos/seferihisar.jpg", slug: "seferihisar" },
  { name: "Tunçbilek Belediyesi", logo: "/municipality-logos/tuncbilek.png", slug: "tuncbilek" },
  { name: "Köşk Belediyesi", logo: "/municipality-logos/kosk.png", slug: "kosk" },
  { name: "Eyüpsultan Belediyesi", logo: "/municipality-logos/eyupsultan.png", slug: "eyupsultan" },
];

export default function MunicipalityPartners() {
  return (
    <section className="section-references" aria-label="Belediye referansları">
      <span className="references-label">Projelerde Güvenilen Çözüm Ortağı</span>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[0, 1].map((groupIndex) => (
            <div className="marquee-group" aria-hidden={groupIndex === 1} key={groupIndex}>
              {municipalityLogos.map((municipality) => (
                <div
                  className={`ref-logo logo-${municipality.slug} ${municipality.tone === "dark" ? "is-dark" : ""}`}
                  key={`${municipality.name}-${groupIndex}`}
                  title={municipality.name}
                >
                  <Image
                    className="ref-logo-image"
                    src={municipality.logo}
                    alt={`${municipality.name} logosu`}
                    width={132}
                    height={72}
                    loading="eager"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
