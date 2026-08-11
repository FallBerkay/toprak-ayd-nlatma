export type ToprakCategory = {
  label: string;
  slug: string;
};

export type ToprakProduct = {
  id: string;
  name: string;
  code: string;
  category: string;
  href: string;
  image: string;
  alt: string;
};

export const toprakCategories = [
  {
    "label": "Tümü",
    "slug": "all"
  },
  {
    "label": "Yol ve Cadde Aydınlatması",
    "slug": "yol-ve-cadde"
  },
  {
    "label": "Dekoratif Aydınlatma Direkleri",
    "slug": "dekoratif"
  },
  {
    "label": "Bollard Aydınlatma",
    "slug": "bollard"
  },
  {
    "label": "Solar Aydınlatma",
    "slug": "solar"
  },
  {
    "label": "Kamera Direkleri",
    "slug": "kamera-direkleri"
  },
  {
    "label": "Park, Bahçe ve Direkler",
    "slug": "park-bahce"
  },
  {
    "label": "Gloplar ve Aksesuarlar",
    "slug": "gloplar"
  }
] as const satisfies readonly ToprakCategory[];

export const toprakProducts = [
  {
    "id": "3545-001",
    "name": "TOPRAK SERİSİ",
    "code": "3545-001",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m010.jpg",
    "alt": "TOPRAK SERİSİ 3545-001"
  },
  {
    "id": "3545-004",
    "name": "TOPRAK SERİSİ",
    "code": "3545-004",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m012.jpg",
    "alt": "TOPRAK SERİSİ 3545-004"
  },
  {
    "id": "3545-007",
    "name": "TOPRAK SERİSİ",
    "code": "3545-007",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-007",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m014.jpg",
    "alt": "TOPRAK SERİSİ 3545-007"
  },
  {
    "id": "3545-010",
    "name": "TOPRAK SERİSİ",
    "code": "3545-010",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m016.jpg",
    "alt": "TOPRAK SERİSİ 3545-010"
  },
  {
    "id": "3545-013",
    "name": "TOPRAK SERİSİ",
    "code": "3545-013",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-013",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m018.jpg",
    "alt": "TOPRAK SERİSİ 3545-013"
  },
  {
    "id": "3545-016",
    "name": "TOPRAK SERİSİ",
    "code": "3545-016",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-016",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m022.jpg",
    "alt": "TOPRAK SERİSİ 3545-016"
  },
  {
    "id": "3545-019",
    "name": "TOPRAK SERİSİ",
    "code": "3545-019",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-019",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m024.jpg",
    "alt": "TOPRAK SERİSİ 3545-019"
  },
  {
    "id": "3545-022",
    "name": "TOPRAK SERİSİ",
    "code": "3545-022",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-022",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m026.jpg",
    "alt": "TOPRAK SERİSİ 3545-022"
  },
  {
    "id": "3545-025",
    "name": "TOPRAK SERİSİ",
    "code": "3545-025",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m028.jpg",
    "alt": "TOPRAK SERİSİ 3545-025"
  },
  {
    "id": "3545-028",
    "name": "TOPRAK SERİSİ",
    "code": "3545-028",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-028",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m030.jpg",
    "alt": "TOPRAK SERİSİ 3545-028"
  },
  {
    "id": "3545-031",
    "name": "TOPRAK SERİSİ",
    "code": "3545-031",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-031",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m034.jpg",
    "alt": "TOPRAK SERİSİ 3545-031"
  },
  {
    "id": "3545-034",
    "name": "TOPRAK SERİSİ",
    "code": "3545-034",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-034",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m036.jpg",
    "alt": "TOPRAK SERİSİ 3545-034"
  },
  {
    "id": "3545-036",
    "name": "TOPRAK SERİSİ",
    "code": "3545-036",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-036",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m038.jpg",
    "alt": "TOPRAK SERİSİ 3545-036"
  },
  {
    "id": "3545-039",
    "name": "TOPRAK SERİSİ",
    "code": "3545-039",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-039",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m040.jpg",
    "alt": "TOPRAK SERİSİ 3545-039"
  },
  {
    "id": "3545-041",
    "name": "TOPRAK SERİSİ",
    "code": "3545-041",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-041",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m042.jpg",
    "alt": "TOPRAK SERİSİ 3545-041"
  },
  {
    "id": "3545-044",
    "name": "TOPRAK SERİSİ",
    "code": "3545-044",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-044",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m046.jpg",
    "alt": "TOPRAK SERİSİ 3545-044"
  },
  {
    "id": "3545-047",
    "name": "TOPRAK SERİSİ",
    "code": "3545-047",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-047",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m048.jpg",
    "alt": "TOPRAK SERİSİ 3545-047"
  },
  {
    "id": "3545-050",
    "name": "TOPRAK SERİSİ",
    "code": "3545-050",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-050",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m050.jpg",
    "alt": "TOPRAK SERİSİ 3545-050"
  },
  {
    "id": "3545-053",
    "name": "TOPRAK SERİSİ",
    "code": "3545-053",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-053",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m052.jpg",
    "alt": "TOPRAK SERİSİ 3545-053"
  },
  {
    "id": "3545-056",
    "name": "TOPRAK SERİSİ",
    "code": "3545-056",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-056",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m054.jpg",
    "alt": "TOPRAK SERİSİ 3545-056"
  },
  {
    "id": "3545-059",
    "name": "TOPRAK SERİSİ",
    "code": "3545-059",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-059",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m058.jpg",
    "alt": "TOPRAK SERİSİ 3545-059"
  },
  {
    "id": "3545-062",
    "name": "TOPRAK SERİSİ",
    "code": "3545-062",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-062",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m060.jpg",
    "alt": "TOPRAK SERİSİ 3545-062"
  },
  {
    "id": "3545-065",
    "name": "TOPRAK SERİSİ",
    "code": "3545-065",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-065",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m062.jpg",
    "alt": "TOPRAK SERİSİ 3545-065"
  },
  {
    "id": "3545-067",
    "name": "TOPRAK SERİSİ",
    "code": "3545-067",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-067",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m064.jpg",
    "alt": "TOPRAK SERİSİ 3545-067"
  },
  {
    "id": "3545-071",
    "name": "TOPRAK SERİSİ",
    "code": "3545-071",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-071",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m066.jpg",
    "alt": "TOPRAK SERİSİ 3545-071"
  },
  {
    "id": "3545-142",
    "name": "LİNA TEK KONSOLLU",
    "code": "3545-142",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-142",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m070.jpg",
    "alt": "LİNA TEK KONSOLLU 3545-142"
  },
  {
    "id": "3545-001-p73",
    "name": "LİNA ÇİFT KONSOLLU",
    "code": "3545-001",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-001-p73",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m072.jpg",
    "alt": "LİNA ÇİFT KONSOLLU 3545-001"
  },
  {
    "id": "3545-162",
    "name": "LİNA PARK",
    "code": "3545-162",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-162",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m074.jpg",
    "alt": "LİNA PARK 3545-162"
  },
  {
    "id": "3545-172",
    "name": "LİNA-İKİLİ",
    "code": "3545-172",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-172",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m076.jpg",
    "alt": "LİNA-İKİLİ 3545-172"
  },
  {
    "id": "3545-182",
    "name": "RAIN",
    "code": "3545-182",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-182",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m078.jpg",
    "alt": "RAIN 3545-182"
  },
  {
    "id": "3545-192",
    "name": "COBRA",
    "code": "3545-192",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-192",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m080.jpg",
    "alt": "COBRA 3545-192"
  },
  {
    "id": "3545-202",
    "name": "ATLAS",
    "code": "3545-202",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-202",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m082.jpg",
    "alt": "ATLAS 3545-202"
  },
  {
    "id": "3545-212",
    "name": "ATLAS CENTER",
    "code": "3545-212",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-212",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m084.jpg",
    "alt": "ATLAS CENTER 3545-212"
  },
  {
    "id": "3545-222",
    "name": "ATLAS SİTE",
    "code": "3545-222",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-222",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m086.jpg",
    "alt": "ATLAS SİTE 3545-222"
  },
  {
    "id": "3545-232",
    "name": "ATLAS İKİLİ",
    "code": "3545-232",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-232",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m088.jpg",
    "alt": "ATLAS İKİLİ 3545-232"
  },
  {
    "id": "3545-242",
    "name": "ATLAS CITY",
    "code": "3545-242",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-242",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m090.jpg",
    "alt": "ATLAS CITY 3545-242"
  },
  {
    "id": "3545-262",
    "name": "ATLAS PARK",
    "code": "3545-262",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-262",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m092.jpg",
    "alt": "ATLAS PARK 3545-262"
  },
  {
    "id": "3545-272",
    "name": "ATLAS CITY",
    "code": "3545-272",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-272",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m094.jpg",
    "alt": "ATLAS CITY 3545-272"
  },
  {
    "id": "3545-282",
    "name": "RİGEL",
    "code": "3545-282",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-282",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m096.jpg",
    "alt": "RİGEL 3545-282"
  },
  {
    "id": "3545-292",
    "name": "RİGEL ÇİFTLİ",
    "code": "3545-292",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-292",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m098.jpg",
    "alt": "RİGEL ÇİFTLİ 3545-292"
  },
  {
    "id": "3545-302",
    "name": "MİNA",
    "code": "3545-302",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-302",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m100.jpg",
    "alt": "MİNA 3545-302"
  },
  {
    "id": "3545-312",
    "name": "FLORA",
    "code": "3545-312",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-312",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m102.jpg",
    "alt": "FLORA 3545-312"
  },
  {
    "id": "3545-322",
    "name": "DORA",
    "code": "3545-322",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-322",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m104.jpg",
    "alt": "DORA 3545-322"
  },
  {
    "id": "3545-332",
    "name": "ALFA",
    "code": "3545-332",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-332",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m106.jpg",
    "alt": "ALFA 3545-332"
  },
  {
    "id": "3545-342",
    "name": "ALFA 3",
    "code": "3545-342",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-342",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m108.jpg",
    "alt": "ALFA 3 3545-342"
  },
  {
    "id": "3545-352",
    "name": "SUN",
    "code": "3545-352",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-352",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m110.jpg",
    "alt": "SUN 3545-352"
  },
  {
    "id": "3545-362",
    "name": "SUN 3",
    "code": "3545-362",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-362",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m112.jpg",
    "alt": "SUN 3 3545-362"
  },
  {
    "id": "3545-372",
    "name": "ALDO",
    "code": "3545-372",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-372",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m114.jpg",
    "alt": "ALDO 3545-372"
  },
  {
    "id": "3545-382",
    "name": "HEKTOR",
    "code": "3545-382",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-382",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m116.jpg",
    "alt": "HEKTOR 3545-382"
  },
  {
    "id": "3545-392",
    "name": "EGE",
    "code": "3545-392",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-392",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m118.jpg",
    "alt": "EGE 3545-392"
  },
  {
    "id": "3545-402",
    "name": "UFO",
    "code": "3545-402",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-402",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m120.jpg",
    "alt": "UFO 3545-402"
  },
  {
    "id": "3545-412",
    "name": "EVA",
    "code": "3545-412",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-412",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m122.jpg",
    "alt": "EVA 3545-412"
  },
  {
    "id": "3545-422",
    "name": "RUSTIK",
    "code": "3545-422",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-422",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m124.jpg",
    "alt": "RUSTIK 3545-422"
  },
  {
    "id": "3545-426",
    "name": "RUSTIK A",
    "code": "3545-426",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-426",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m126.jpg",
    "alt": "RUSTIK A 3545-426"
  },
  {
    "id": "3545-429",
    "name": "RUSTIK B",
    "code": "3545-429",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-429",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m128.jpg",
    "alt": "RUSTIK B 3545-429"
  },
  {
    "id": "3545-432",
    "name": "STORM",
    "code": "3545-432",
    "category": "kamera-direkleri",
    "href": "/tr/urunler/3545-432",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m130.jpg",
    "alt": "STORM 3545-432"
  },
  {
    "id": "3545-442",
    "name": "MAIA",
    "code": "3545-442",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-442",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m132.jpg",
    "alt": "MAIA 3545-442"
  },
  {
    "id": "3545-452",
    "name": "STAR",
    "code": "3545-452",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-452",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m134.jpg",
    "alt": "STAR 3545-452"
  },
  {
    "id": "3545-462",
    "name": "NOVA",
    "code": "3545-462",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-462",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m136.jpg",
    "alt": "NOVA 3545-462"
  },
  {
    "id": "3545-472",
    "name": "ALYA",
    "code": "3545-472",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-472",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m138.jpg",
    "alt": "ALYA 3545-472"
  },
  {
    "id": "3545-482",
    "name": "MEYDAN",
    "code": "3545-482",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-482",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m140.jpg",
    "alt": "MEYDAN 3545-482"
  },
  {
    "id": "3545-492",
    "name": "RİGA",
    "code": "3545-492",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-492",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m142.jpg",
    "alt": "RİGA 3545-492"
  },
  {
    "id": "3545-502",
    "name": "MATA",
    "code": "3545-502",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-502",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m144.jpg",
    "alt": "MATA 3545-502"
  },
  {
    "id": "3545-512",
    "name": "KİT",
    "code": "3545-512",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-512",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m146.jpg",
    "alt": "KİT 3545-512"
  },
  {
    "id": "3545-522",
    "name": "HEKA",
    "code": "3545-522",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-522",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m148.jpg",
    "alt": "HEKA 3545-522"
  },
  {
    "id": "3545-532",
    "name": "ALKES",
    "code": "3545-532",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-532",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m150.jpg",
    "alt": "ALKES 3545-532"
  },
  {
    "id": "3545-542",
    "name": "SOLAR A",
    "code": "3545-542",
    "category": "solar",
    "href": "/tr/urunler/3545-542",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m152.jpg",
    "alt": "SOLAR A 3545-542"
  },
  {
    "id": "3545-552",
    "name": "SOLAR B",
    "code": "3545-552",
    "category": "solar",
    "href": "/tr/urunler/3545-552",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m154.jpg",
    "alt": "SOLAR B 3545-552"
  },
  {
    "id": "3545-562",
    "name": "SOLAR C",
    "code": "3545-562",
    "category": "solar",
    "href": "/tr/urunler/3545-562",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m156.jpg",
    "alt": "SOLAR C 3545-562"
  },
  {
    "id": "3545-572",
    "name": "SEDİR A",
    "code": "3545-572",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-572",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m158.jpg",
    "alt": "SEDİR A 3545-572"
  },
  {
    "id": "3545-582",
    "name": "SEDİR B",
    "code": "3545-582",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-582",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m160.jpg",
    "alt": "SEDİR B 3545-582"
  },
  {
    "id": "3545-592",
    "name": "SEDİR C",
    "code": "3545-592",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-592",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m162.jpg",
    "alt": "SEDİR C 3545-592"
  },
  {
    "id": "3545-602",
    "name": "SEDİR D",
    "code": "3545-602",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-602",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m164.jpg",
    "alt": "SEDİR D 3545-602"
  },
  {
    "id": "3545-612",
    "name": "SEDİR E",
    "code": "3545-612",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-612",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m166.jpg",
    "alt": "SEDİR E 3545-612"
  },
  {
    "id": "3545-622",
    "name": "SEDİR F",
    "code": "3545-622",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-622",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m168.jpg",
    "alt": "SEDİR F 3545-622"
  },
  {
    "id": "3545-1001",
    "name": "ERA C",
    "code": "3545-1001",
    "category": "bollard",
    "href": "/tr/urunler/3545-1001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m172.jpg",
    "alt": "ERA C 3545-1001"
  },
  {
    "id": "3545-1005",
    "name": "ERA D",
    "code": "3545-1005",
    "category": "bollard",
    "href": "/tr/urunler/3545-1005",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m173.jpg",
    "alt": "ERA D 3545-1005"
  },
  {
    "id": "3545-1010",
    "name": "ERA S",
    "code": "3545-1010",
    "category": "bollard",
    "href": "/tr/urunler/3545-1010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m174.jpg",
    "alt": "ERA S 3545-1010"
  },
  {
    "id": "3545-1015",
    "name": "ERA T",
    "code": "3545-1015",
    "category": "bollard",
    "href": "/tr/urunler/3545-1015",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m175.jpg",
    "alt": "ERA T 3545-1015"
  },
  {
    "id": "3545-1020",
    "name": "RİGEL B",
    "code": "3545-1020",
    "category": "bollard",
    "href": "/tr/urunler/3545-1020",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m176.jpg",
    "alt": "RİGEL B 3545-1020"
  },
  {
    "id": "3545-1025",
    "name": "RİGEL C",
    "code": "3545-1025",
    "category": "bollard",
    "href": "/tr/urunler/3545-1025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m177.jpg",
    "alt": "RİGEL C 3545-1025"
  },
  {
    "id": "3545-1030",
    "name": "RİGEL K",
    "code": "3545-1030",
    "category": "bollard",
    "href": "/tr/urunler/3545-1030",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m178.jpg",
    "alt": "RİGEL K 3545-1030"
  },
  {
    "id": "3545-1035",
    "name": "RİGEL S",
    "code": "3545-1035",
    "category": "bollard",
    "href": "/tr/urunler/3545-1035",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m179.jpg",
    "alt": "RİGEL S 3545-1035"
  },
  {
    "id": "3545-1040",
    "name": "RİGEL Y",
    "code": "3545-1040",
    "category": "bollard",
    "href": "/tr/urunler/3545-1040",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m180.jpg",
    "alt": "RİGEL Y 3545-1040"
  },
  {
    "id": "3545-1045",
    "name": "RİGEL W",
    "code": "3545-1045",
    "category": "bollard",
    "href": "/tr/urunler/3545-1045",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m181.jpg",
    "alt": "RİGEL W 3545-1045"
  },
  {
    "id": "3545-1050",
    "name": "RECTA Y",
    "code": "3545-1050",
    "category": "bollard",
    "href": "/tr/urunler/3545-1050",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m182.jpg",
    "alt": "RECTA Y 3545-1050"
  },
  {
    "id": "3545-1055",
    "name": "ATLAS T/S",
    "code": "3545-1055",
    "category": "bollard",
    "href": "/tr/urunler/3545-1055",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m183.jpg",
    "alt": "ATLAS T/S 3545-1055"
  },
  {
    "id": "3545-1060",
    "name": "ATLAS T/Y",
    "code": "3545-1060",
    "category": "bollard",
    "href": "/tr/urunler/3545-1060",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m184.jpg",
    "alt": "ATLAS T/Y 3545-1060"
  },
  {
    "id": "3545-1065",
    "name": "ATLAS Ç/S",
    "code": "3545-1065",
    "category": "bollard",
    "href": "/tr/urunler/3545-1065",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m185.jpg",
    "alt": "ATLAS Ç/S 3545-1065"
  },
  {
    "id": "3545-1070",
    "name": "ATLAS S",
    "code": "3545-1070",
    "category": "bollard",
    "href": "/tr/urunler/3545-1070",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m186.jpg",
    "alt": "ATLAS S 3545-1070"
  },
  {
    "id": "3545-1075",
    "name": "COBRA C",
    "code": "3545-1075",
    "category": "bollard",
    "href": "/tr/urunler/3545-1075",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m187.jpg",
    "alt": "COBRA C 3545-1075"
  },
  {
    "id": "3545-1080",
    "name": "COBRA S",
    "code": "3545-1080",
    "category": "bollard",
    "href": "/tr/urunler/3545-1080",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m188.jpg",
    "alt": "COBRA S 3545-1080"
  },
  {
    "id": "3545-1085",
    "name": "MİNA S",
    "code": "3545-1085",
    "category": "bollard",
    "href": "/tr/urunler/3545-1085",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m189.jpg",
    "alt": "MİNA S 3545-1085"
  },
  {
    "id": "3545-1090",
    "name": "MİNA Y",
    "code": "3545-1090",
    "category": "bollard",
    "href": "/tr/urunler/3545-1090",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m190.jpg",
    "alt": "MİNA Y 3545-1090"
  },
  {
    "id": "3545-1095",
    "name": "FLORA S",
    "code": "3545-1095",
    "category": "bollard",
    "href": "/tr/urunler/3545-1095",
    "image": "https://toprakaydinlatma.vercel.app/images/models/m191.jpg",
    "alt": "FLORA S 3545-1095"
  },
  {
    "id": "gl-34-2001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2001.jpg",
    "alt": "Park & Bahçe Direği GL-34-2001"
  },
  {
    "id": "gl-34-2002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2002",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2002.jpg",
    "alt": "Park & Bahçe Direği GL-34-2002"
  },
  {
    "id": "gl-34-2003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2003",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2003.jpg",
    "alt": "Park & Bahçe Direği GL-34-2003"
  },
  {
    "id": "gl-34-2004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2004.jpg",
    "alt": "Park & Bahçe Direği GL-34-2004"
  },
  {
    "id": "gl-34-2006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2006",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2006.jpg",
    "alt": "Park & Bahçe Direği GL-34-2006"
  },
  {
    "id": "gl-34-2007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2007",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2007.jpg",
    "alt": "Park & Bahçe Direği GL-34-2007"
  },
  {
    "id": "gl-34-2008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2008",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2008.jpg",
    "alt": "Park & Bahçe Direği GL-34-2008"
  },
  {
    "id": "gl-34-2005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2005",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2005.jpg",
    "alt": "Park & Bahçe Direği GL-34-2005"
  },
  {
    "id": "gl-34-2009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2009",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2009.jpg",
    "alt": "Park & Bahçe Direği GL-34-2009"
  },
  {
    "id": "gl-34-2010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2010.jpg",
    "alt": "Park & Bahçe Direği GL-34-2010"
  },
  {
    "id": "gl-34-2011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2011",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2011.jpg",
    "alt": "Park & Bahçe Direği GL-34-2011"
  },
  {
    "id": "gl-34-2012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2012",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2012.jpg",
    "alt": "Park & Bahçe Direği GL-34-2012"
  },
  {
    "id": "gl-34-2013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2013",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2013.jpg",
    "alt": "Park & Bahçe Direği GL-34-2013"
  },
  {
    "id": "gl-34-2014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2014",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2014.jpg",
    "alt": "Park & Bahçe Direği GL-34-2014"
  },
  {
    "id": "gl-34-2015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2015",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2015.jpg",
    "alt": "Park & Bahçe Direği GL-34-2015"
  },
  {
    "id": "gl-34-2016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2016",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2016.jpg",
    "alt": "Park & Bahçe Direği GL-34-2016"
  },
  {
    "id": "gl-34-2017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2017",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2017.jpg",
    "alt": "Park & Bahçe Direği GL-34-2017"
  },
  {
    "id": "gl-34-2018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2018",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2018.jpg",
    "alt": "Park & Bahçe Direği GL-34-2018"
  },
  {
    "id": "gl-34-2019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2019",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2019.jpg",
    "alt": "Park & Bahçe Direği GL-34-2019"
  },
  {
    "id": "gl-34-2020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2020",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2020.jpg",
    "alt": "Park & Bahçe Direği GL-34-2020"
  },
  {
    "id": "gl-34-2021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2021",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2021.jpg",
    "alt": "Park & Bahçe Direği GL-34-2021"
  },
  {
    "id": "gl-34-2022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2022",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2022.jpg",
    "alt": "Park & Bahçe Direği GL-34-2022"
  },
  {
    "id": "gl-34-2023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2023",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2023.jpg",
    "alt": "Park & Bahçe Direği GL-34-2023"
  },
  {
    "id": "gl-34-2024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2024",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2024.jpg",
    "alt": "Park & Bahçe Direği GL-34-2024"
  },
  {
    "id": "gl-34-2025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2025.jpg",
    "alt": "Park & Bahçe Direği GL-34-2025"
  },
  {
    "id": "gl-34-2026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2026",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2026.jpg",
    "alt": "Park & Bahçe Direği GL-34-2026"
  },
  {
    "id": "gl-34-2027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2027",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2027.jpg",
    "alt": "Park & Bahçe Direği GL-34-2027"
  },
  {
    "id": "gl-34-2028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2028",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-2028.jpg",
    "alt": "Park & Bahçe Direği GL-34-2028"
  },
  {
    "id": "gl-34-3001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3001.jpg",
    "alt": "Park & Bahçe Direği GL-34-3001"
  },
  {
    "id": "gl-34-3002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3002",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3002.jpg",
    "alt": "Park & Bahçe Direği GL-34-3002"
  },
  {
    "id": "gl-34-3003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3003",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3003.jpg",
    "alt": "Park & Bahçe Direği GL-34-3003"
  },
  {
    "id": "gl-34-3004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3004.jpg",
    "alt": "Park & Bahçe Direği GL-34-3004"
  },
  {
    "id": "gl-34-3005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3005",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3005.jpg",
    "alt": "Park & Bahçe Direği GL-34-3005"
  },
  {
    "id": "gl-34-3006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3006",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3006.jpg",
    "alt": "Park & Bahçe Direği GL-34-3006"
  },
  {
    "id": "gl-34-3007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3007",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3007.jpg",
    "alt": "Park & Bahçe Direği GL-34-3007"
  },
  {
    "id": "gl-34-3008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3008",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3008.jpg",
    "alt": "Park & Bahçe Direği GL-34-3008"
  },
  {
    "id": "gl-34-3009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3009",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3009.jpg",
    "alt": "Park & Bahçe Direği GL-34-3009"
  },
  {
    "id": "gl-34-3010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3010.jpg",
    "alt": "Park & Bahçe Direği GL-34-3010"
  },
  {
    "id": "gl-34-3011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3011",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3011.jpg",
    "alt": "Park & Bahçe Direği GL-34-3011"
  },
  {
    "id": "gl-34-3012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3012",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3012.jpg",
    "alt": "Park & Bahçe Direği GL-34-3012"
  },
  {
    "id": "gl-34-3013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3013",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3013.jpg",
    "alt": "Park & Bahçe Direği GL-34-3013"
  },
  {
    "id": "gl-34-3014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3014",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3014.jpg",
    "alt": "Park & Bahçe Direği GL-34-3014"
  },
  {
    "id": "gl-34-3015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3015",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3015.jpg",
    "alt": "Park & Bahçe Direği GL-34-3015"
  },
  {
    "id": "gl-34-3016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3016",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3016.jpg",
    "alt": "Park & Bahçe Direği GL-34-3016"
  },
  {
    "id": "gl-34-3017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3017",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3017.jpg",
    "alt": "Park & Bahçe Direği GL-34-3017"
  },
  {
    "id": "gl-34-3018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3018",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3018.jpg",
    "alt": "Park & Bahçe Direği GL-34-3018"
  },
  {
    "id": "gl-34-3019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3019",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3019.jpg",
    "alt": "Park & Bahçe Direği GL-34-3019"
  },
  {
    "id": "gl-34-3020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3020",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3020.jpg",
    "alt": "Park & Bahçe Direği GL-34-3020"
  },
  {
    "id": "gl-34-3021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3021",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3021.jpg",
    "alt": "Park & Bahçe Direği GL-34-3021"
  },
  {
    "id": "gl-34-3022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3022",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3022.jpg",
    "alt": "Park & Bahçe Direği GL-34-3022"
  },
  {
    "id": "gl-34-3023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3023",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3023.jpg",
    "alt": "Park & Bahçe Direği GL-34-3023"
  },
  {
    "id": "gl-34-3024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3024",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3024.jpg",
    "alt": "Park & Bahçe Direği GL-34-3024"
  },
  {
    "id": "gl-34-3025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3025.jpg",
    "alt": "Park & Bahçe Direği GL-34-3025"
  },
  {
    "id": "gl-34-3026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3026",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3026.jpg",
    "alt": "Park & Bahçe Direği GL-34-3026"
  },
  {
    "id": "gl-34-3027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3027",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3027.jpg",
    "alt": "Park & Bahçe Direği GL-34-3027"
  },
  {
    "id": "gl-34-3028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3028",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3028.jpg",
    "alt": "Park & Bahçe Direği GL-34-3028"
  },
  {
    "id": "gl-34-3029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3029",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3029.jpg",
    "alt": "Park & Bahçe Direği GL-34-3029"
  },
  {
    "id": "gl-34-3030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3030",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3030.jpg",
    "alt": "Park & Bahçe Direği GL-34-3030"
  },
  {
    "id": "gl-34-3032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3032",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3032.jpg",
    "alt": "Park & Bahçe Direği GL-34-3032"
  },
  {
    "id": "gl-34-3031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3031",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3031.jpg",
    "alt": "Park & Bahçe Direği GL-34-3031"
  },
  {
    "id": "gl-34-3033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3033",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3033.jpg",
    "alt": "Park & Bahçe Direği GL-34-3033"
  },
  {
    "id": "gl-34-3034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3034",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3034.jpg",
    "alt": "Park & Bahçe Direği GL-34-3034"
  },
  {
    "id": "gl-34-3035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3035",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3035.jpg",
    "alt": "Park & Bahçe Direği GL-34-3035"
  },
  {
    "id": "gl-34-3037",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3037",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3037",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3037.jpg",
    "alt": "Park & Bahçe Direği GL-34-3037"
  },
  {
    "id": "gl-34-3038",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3038",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3038",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3038.jpg",
    "alt": "Park & Bahçe Direği GL-34-3038"
  },
  {
    "id": "gl-34-3039",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3039",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3039",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3039.jpg",
    "alt": "Park & Bahçe Direği GL-34-3039"
  },
  {
    "id": "gl-34-3036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3036",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3036.jpg",
    "alt": "Park & Bahçe Direği GL-34-3036"
  },
  {
    "id": "gl-34-3040",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3040",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3040",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3040.jpg",
    "alt": "Park & Bahçe Direği GL-34-3040"
  },
  {
    "id": "gl-34-3041",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3041",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3041",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3041.jpg",
    "alt": "Park & Bahçe Direği GL-34-3041"
  },
  {
    "id": "gl-34-3042",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3042",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3042",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3042.jpg",
    "alt": "Park & Bahçe Direği GL-34-3042"
  },
  {
    "id": "gl-34-3043",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3043",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3043",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3043.jpg",
    "alt": "Park & Bahçe Direği GL-34-3043"
  },
  {
    "id": "gl-34-3044",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3044",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3044",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3044.jpg",
    "alt": "Park & Bahçe Direği GL-34-3044"
  },
  {
    "id": "gl-34-3045",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3045",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3045",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3045.jpg",
    "alt": "Park & Bahçe Direği GL-34-3045"
  },
  {
    "id": "gl-34-3046",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3046",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3046",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3046.jpg",
    "alt": "Park & Bahçe Direği GL-34-3046"
  },
  {
    "id": "gl-34-3047",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3047",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3047",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3047.jpg",
    "alt": "Park & Bahçe Direği GL-34-3047"
  },
  {
    "id": "gl-34-3048",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3048",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3048",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3048.jpg",
    "alt": "Park & Bahçe Direği GL-34-3048"
  },
  {
    "id": "gl-34-3049",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3049",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3049",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3049.jpg",
    "alt": "Park & Bahçe Direği GL-34-3049"
  },
  {
    "id": "gl-34-3050",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3050",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3050",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3050.jpg",
    "alt": "Park & Bahçe Direği GL-34-3050"
  },
  {
    "id": "gl-34-3051",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3051",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3051",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3051.jpg",
    "alt": "Park & Bahçe Direği GL-34-3051"
  },
  {
    "id": "gl-34-3052",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3052",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3052",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3052.jpg",
    "alt": "Park & Bahçe Direği GL-34-3052"
  },
  {
    "id": "gl-34-3053",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3053",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3053",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3053.jpg",
    "alt": "Park & Bahçe Direği GL-34-3053"
  },
  {
    "id": "gl-34-3054",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3054",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3054",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3054.jpg",
    "alt": "Park & Bahçe Direği GL-34-3054"
  },
  {
    "id": "gl-34-3055",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3055",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3055",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3055.jpg",
    "alt": "Park & Bahçe Direği GL-34-3055"
  },
  {
    "id": "gl-34-3056",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3056",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3056",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3056.jpg",
    "alt": "Park & Bahçe Direği GL-34-3056"
  },
  {
    "id": "gl-34-3058",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3058",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3058",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3058.jpg",
    "alt": "Park & Bahçe Direği GL-34-3058"
  },
  {
    "id": "gl-34-3060",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3060",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3060",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3060.jpg",
    "alt": "Park & Bahçe Direği GL-34-3060"
  },
  {
    "id": "gl-34-3061",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3061",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3061",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3061.jpg",
    "alt": "Park & Bahçe Direği GL-34-3061"
  },
  {
    "id": "gl-34-3064",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3064",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3064",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3064.jpg",
    "alt": "Park & Bahçe Direği GL-34-3064"
  },
  {
    "id": "gl-34-3057",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3057",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3057",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3057.jpg",
    "alt": "Park & Bahçe Direği GL-34-3057"
  },
  {
    "id": "gl-34-3059",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3059",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3059",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3059.jpg",
    "alt": "Park & Bahçe Direği GL-34-3059"
  },
  {
    "id": "gl-34-3062",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3062",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3062",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3062.jpg",
    "alt": "Park & Bahçe Direği GL-34-3062"
  },
  {
    "id": "gl-34-3063",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3063",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3063",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3063.jpg",
    "alt": "Park & Bahçe Direği GL-34-3063"
  },
  {
    "id": "gl-34-3065",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3065",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3065",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3065.jpg",
    "alt": "Park & Bahçe Direği GL-34-3065"
  },
  {
    "id": "gl-34-3066",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3066",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3066",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3066.jpg",
    "alt": "Park & Bahçe Direği GL-34-3066"
  },
  {
    "id": "gl-34-3067",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3067",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3067",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3067.jpg",
    "alt": "Park & Bahçe Direği GL-34-3067"
  },
  {
    "id": "gl-34-3068",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3068",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3068",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-3068.jpg",
    "alt": "Park & Bahçe Direği GL-34-3068"
  },
  {
    "id": "gl-34-4001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4001.jpg",
    "alt": "Park & Bahçe Direği GL-34-4001"
  },
  {
    "id": "gl-34-4002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4002",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4002.jpg",
    "alt": "Park & Bahçe Direği GL-34-4002"
  },
  {
    "id": "gl-34-4003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4003",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4003.jpg",
    "alt": "Park & Bahçe Direği GL-34-4003"
  },
  {
    "id": "gl-34-4005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4005",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4005.jpg",
    "alt": "Park & Bahçe Direği GL-34-4005"
  },
  {
    "id": "gl-34-4006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4006",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4006.jpg",
    "alt": "Park & Bahçe Direği GL-34-4006"
  },
  {
    "id": "gl-34-4007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4007",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4007.jpg",
    "alt": "Park & Bahçe Direği GL-34-4007"
  },
  {
    "id": "gl-34-4004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4004.jpg",
    "alt": "Park & Bahçe Direği GL-34-4004"
  },
  {
    "id": "gl-34-4008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4008",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4008.jpg",
    "alt": "Park & Bahçe Direği GL-34-4008"
  },
  {
    "id": "gl-34-4009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4009",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4009.jpg",
    "alt": "Park & Bahçe Direği GL-34-4009"
  },
  {
    "id": "gl-34-4010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4010.jpg",
    "alt": "Park & Bahçe Direği GL-34-4010"
  },
  {
    "id": "gl-34-4011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4011",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4011.jpg",
    "alt": "Park & Bahçe Direği GL-34-4011"
  },
  {
    "id": "gl-34-4013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4013",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4013.jpg",
    "alt": "Park & Bahçe Direği GL-34-4013"
  },
  {
    "id": "gl-34-4014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4014",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4014.jpg",
    "alt": "Park & Bahçe Direği GL-34-4014"
  },
  {
    "id": "gl-34-4015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4015",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4015.jpg",
    "alt": "Park & Bahçe Direği GL-34-4015"
  },
  {
    "id": "gl-34-4012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4012",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4012.jpg",
    "alt": "Park & Bahçe Direği GL-34-4012"
  },
  {
    "id": "gl-34-4016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4016",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4016.jpg",
    "alt": "Park & Bahçe Direği GL-34-4016"
  },
  {
    "id": "gl-34-4017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4017",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4017.jpg",
    "alt": "Park & Bahçe Direği GL-34-4017"
  },
  {
    "id": "gl-34-4018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4018",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4018.jpg",
    "alt": "Park & Bahçe Direği GL-34-4018"
  },
  {
    "id": "gl-34-4019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4019",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4019.jpg",
    "alt": "Park & Bahçe Direği GL-34-4019"
  },
  {
    "id": "gl-34-4021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4021",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4021.jpg",
    "alt": "Park & Bahçe Direği GL-34-4021"
  },
  {
    "id": "gl-34-4022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4022",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4022.jpg",
    "alt": "Park & Bahçe Direği GL-34-4022"
  },
  {
    "id": "gl-34-4023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4023",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4023.jpg",
    "alt": "Park & Bahçe Direği GL-34-4023"
  },
  {
    "id": "gl-34-4020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4020",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4020.jpg",
    "alt": "Park & Bahçe Direği GL-34-4020"
  },
  {
    "id": "gl-34-4024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4024",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4024.jpg",
    "alt": "Park & Bahçe Direği GL-34-4024"
  },
  {
    "id": "gl-34-4025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4025.jpg",
    "alt": "Park & Bahçe Direği GL-34-4025"
  },
  {
    "id": "gl-34-4026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4026",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4026.jpg",
    "alt": "Park & Bahçe Direği GL-34-4026"
  },
  {
    "id": "gl-34-4027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4027",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4027.jpg",
    "alt": "Park & Bahçe Direği GL-34-4027"
  },
  {
    "id": "gl-34-4028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4028",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4028.jpg",
    "alt": "Park & Bahçe Direği GL-34-4028"
  },
  {
    "id": "gl-34-4029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4029",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4029.jpg",
    "alt": "Park & Bahçe Direği GL-34-4029"
  },
  {
    "id": "gl-34-4030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4030",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4030.jpg",
    "alt": "Park & Bahçe Direği GL-34-4030"
  },
  {
    "id": "gl-34-4031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4031",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4031.jpg",
    "alt": "Park & Bahçe Direği GL-34-4031"
  },
  {
    "id": "gl-34-4032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4032",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4032.jpg",
    "alt": "Park & Bahçe Direği GL-34-4032"
  },
  {
    "id": "gl-34-4036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4036",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4036.jpg",
    "alt": "Park & Bahçe Direği GL-34-4036"
  },
  {
    "id": "gl-34-5001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5001",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5001.jpg",
    "alt": "Park & Bahçe Direği GL-34-5001"
  },
  {
    "id": "gl-34-4033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4033",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4033.jpg",
    "alt": "Park & Bahçe Direği GL-34-4033"
  },
  {
    "id": "gl-34-4034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4034",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4034.jpg",
    "alt": "Park & Bahçe Direği GL-34-4034"
  },
  {
    "id": "gl-34-4035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4035",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-4035.jpg",
    "alt": "Park & Bahçe Direği GL-34-4035"
  },
  {
    "id": "gl-34-5002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5002",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5002.jpg",
    "alt": "Park & Bahçe Direği GL-34-5002"
  },
  {
    "id": "gl-34-5003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5003",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5003.jpg",
    "alt": "Park & Bahçe Direği GL-34-5003"
  },
  {
    "id": "gl-34-5004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5004.jpg",
    "alt": "Park & Bahçe Direği GL-34-5004"
  },
  {
    "id": "gl-34-5016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5016",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5016.jpg",
    "alt": "Park & Bahçe Direği GL-34-5016"
  },
  {
    "id": "gl-34-5013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5013",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5013.jpg",
    "alt": "Park & Bahçe Direği GL-34-5013"
  },
  {
    "id": "gl-34-5014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5014",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5014.jpg",
    "alt": "Park & Bahçe Direği GL-34-5014"
  },
  {
    "id": "gl-34-5015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5015",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5015.jpg",
    "alt": "Park & Bahçe Direği GL-34-5015"
  },
  {
    "id": "gl-34-5017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5017",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5017.jpg",
    "alt": "Park & Bahçe Direği GL-34-5017"
  },
  {
    "id": "gl-34-5018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5018",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5018.jpg",
    "alt": "Park & Bahçe Direği GL-34-5018"
  },
  {
    "id": "gl-34-5019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5019",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5019.jpg",
    "alt": "Park & Bahçe Direği GL-34-5019"
  },
  {
    "id": "gl-34-5020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5020",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5020.jpg",
    "alt": "Park & Bahçe Direği GL-34-5020"
  },
  {
    "id": "gl-34-5005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5005",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5005.jpg",
    "alt": "Park & Bahçe Direği GL-34-5005"
  },
  {
    "id": "gl-34-5008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5008",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5008.jpg",
    "alt": "Park & Bahçe Direği GL-34-5008"
  },
  {
    "id": "gl-34-5006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5006",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5006.jpg",
    "alt": "Park & Bahçe Direği GL-34-5006"
  },
  {
    "id": "gl-34-5007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5007",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5007.jpg",
    "alt": "Park & Bahçe Direği GL-34-5007"
  },
  {
    "id": "gl-34-5009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5009",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5009.jpg",
    "alt": "Park & Bahçe Direği GL-34-5009"
  },
  {
    "id": "gl-34-5010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5010",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5010.jpg",
    "alt": "Park & Bahçe Direği GL-34-5010"
  },
  {
    "id": "gl-34-5011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5011",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5011.jpg",
    "alt": "Park & Bahçe Direği GL-34-5011"
  },
  {
    "id": "gl-34-5012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5012",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5012.jpg",
    "alt": "Park & Bahçe Direği GL-34-5012"
  },
  {
    "id": "gl-34-5021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5021",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5021.jpg",
    "alt": "Park & Bahçe Direği GL-34-5021"
  },
  {
    "id": "gl-34-5022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5022",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5022.jpg",
    "alt": "Park & Bahçe Direği GL-34-5022"
  },
  {
    "id": "gl-34-5023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5023",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5023.jpg",
    "alt": "Park & Bahçe Direği GL-34-5023"
  },
  {
    "id": "gl-34-5024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5024",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5024.jpg",
    "alt": "Park & Bahçe Direği GL-34-5024"
  },
  {
    "id": "gl-34-5025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5025",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5025.jpg",
    "alt": "Park & Bahçe Direği GL-34-5025"
  },
  {
    "id": "gl-34-5026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5026",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5026.jpg",
    "alt": "Park & Bahçe Direği GL-34-5026"
  },
  {
    "id": "gl-34-5027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5027",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5027.jpg",
    "alt": "Park & Bahçe Direği GL-34-5027"
  },
  {
    "id": "gl-34-5028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5028",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5028.jpg",
    "alt": "Park & Bahçe Direği GL-34-5028"
  },
  {
    "id": "gl-34-5029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5029",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5029.jpg",
    "alt": "Park & Bahçe Direği GL-34-5029"
  },
  {
    "id": "gl-34-5030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5030",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5030.jpg",
    "alt": "Park & Bahçe Direği GL-34-5030"
  },
  {
    "id": "gl-34-5031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5031",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5031.jpg",
    "alt": "Park & Bahçe Direği GL-34-5031"
  },
  {
    "id": "gl-34-5032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5032",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5032.jpg",
    "alt": "Park & Bahçe Direği GL-34-5032"
  },
  {
    "id": "gl-34-5034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5034",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5034.jpg",
    "alt": "Park & Bahçe Direği GL-34-5034"
  },
  {
    "id": "gl-34-5035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5035",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5035.jpg",
    "alt": "Park & Bahçe Direği GL-34-5035"
  },
  {
    "id": "gl-34-5033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5033",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5033.jpg",
    "alt": "Park & Bahçe Direği GL-34-5033"
  },
  {
    "id": "gl-34-5036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5036",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5036.jpg",
    "alt": "Park & Bahçe Direği GL-34-5036"
  },
  {
    "id": "gl-34-5037",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5037",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5037",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5037.jpg",
    "alt": "Park & Bahçe Direği GL-34-5037"
  },
  {
    "id": "gl-34-5038",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5038",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5038",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5038.jpg",
    "alt": "Park & Bahçe Direği GL-34-5038"
  },
  {
    "id": "gl-34-5039",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5039",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5039",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5039.jpg",
    "alt": "Park & Bahçe Direği GL-34-5039"
  },
  {
    "id": "gl-34-5040",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5040",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5040",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5040.jpg",
    "alt": "Park & Bahçe Direği GL-34-5040"
  },
  {
    "id": "gl-34-5041",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5041",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5041",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5041.jpg",
    "alt": "Park & Bahçe Direği GL-34-5041"
  },
  {
    "id": "gl-34-5042",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5042",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5042",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5042.jpg",
    "alt": "Park & Bahçe Direği GL-34-5042"
  },
  {
    "id": "gl-34-5043",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5043",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5043",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5043.jpg",
    "alt": "Park & Bahçe Direği GL-34-5043"
  },
  {
    "id": "gl-34-5044",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5044",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5044",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5044.jpg",
    "alt": "Park & Bahçe Direği GL-34-5044"
  },
  {
    "id": "gl-34-5045",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5045",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5045",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5045.jpg",
    "alt": "Park & Bahçe Direği GL-34-5045"
  },
  {
    "id": "gl-34-5046",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5046",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5046",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5046.jpg",
    "alt": "Park & Bahçe Direği GL-34-5046"
  },
  {
    "id": "gl-34-5049",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5049",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5049",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5049.jpg",
    "alt": "Park & Bahçe Direği GL-34-5049"
  },
  {
    "id": "gl-34-5047",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5047",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5047",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5047.jpg",
    "alt": "Park & Bahçe Direği GL-34-5047"
  },
  {
    "id": "gl-34-5051",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5051",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5051",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5051.jpg",
    "alt": "Park & Bahçe Direği GL-34-5051"
  },
  {
    "id": "gl-34-5050",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5050",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5050",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5050.jpg",
    "alt": "Park & Bahçe Direği GL-34-5050"
  },
  {
    "id": "gl-34-5048",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5048",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5048",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5048.jpg",
    "alt": "Park & Bahçe Direği GL-34-5048"
  },
  {
    "id": "gl-34-5052",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5052",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5052",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5052.jpg",
    "alt": "Park & Bahçe Direği GL-34-5052"
  },
  {
    "id": "gl-34-5053",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5053",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5053",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5053.jpg",
    "alt": "Park & Bahçe Direği GL-34-5053"
  },
  {
    "id": "gl-34-5054",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5054",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5054",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5054.jpg",
    "alt": "Park & Bahçe Direği GL-34-5054"
  },
  {
    "id": "gl-34-5055",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5055",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5055",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5055.jpg",
    "alt": "Park & Bahçe Direği GL-34-5055"
  },
  {
    "id": "gl-34-5058",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5058",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5058",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5058.jpg",
    "alt": "Park & Bahçe Direği GL-34-5058"
  },
  {
    "id": "gl-34-5057",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5057",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5057",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5057.jpg",
    "alt": "Park & Bahçe Direği GL-34-5057"
  },
  {
    "id": "gl-34-5059",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5059",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5059",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5059.jpg",
    "alt": "Park & Bahçe Direği GL-34-5059"
  },
  {
    "id": "gl-34-5056",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5056",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5056",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5056.jpg",
    "alt": "Park & Bahçe Direği GL-34-5056"
  },
  {
    "id": "gl-34-5060",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5060",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5060",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5060.jpg",
    "alt": "Park & Bahçe Direği GL-34-5060"
  },
  {
    "id": "gl-34-5061",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5061",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5061",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5061.jpg",
    "alt": "Park & Bahçe Direği GL-34-5061"
  },
  {
    "id": "gl-34-5062",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5062",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5062",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5062.jpg",
    "alt": "Park & Bahçe Direği GL-34-5062"
  },
  {
    "id": "gl-34-5063",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5063",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5063",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5063.jpg",
    "alt": "Park & Bahçe Direği GL-34-5063"
  },
  {
    "id": "gl-34-5064",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5064",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5064",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5064.jpg",
    "alt": "Park & Bahçe Direği GL-34-5064"
  },
  {
    "id": "gl-34-5065",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5065",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5065",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5065.jpg",
    "alt": "Park & Bahçe Direği GL-34-5065"
  },
  {
    "id": "gl-34-5066",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5066",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5066",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5066.jpg",
    "alt": "Park & Bahçe Direği GL-34-5066"
  },
  {
    "id": "gl-34-5067",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5067",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5067",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5067.jpg",
    "alt": "Park & Bahçe Direği GL-34-5067"
  },
  {
    "id": "gl-34-5068",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5068",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5068",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5068.jpg",
    "alt": "Park & Bahçe Direği GL-34-5068"
  },
  {
    "id": "gl-34-5069",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5069",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5069",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5069.jpg",
    "alt": "Park & Bahçe Direği GL-34-5069"
  },
  {
    "id": "gl-34-5070",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5070",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5070",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5070.jpg",
    "alt": "Park & Bahçe Direği GL-34-5070"
  },
  {
    "id": "gl-34-5071",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5071",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5071",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5071.jpg",
    "alt": "Park & Bahçe Direği GL-34-5071"
  },
  {
    "id": "gl-34-5072",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5072",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5072",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5072.jpg",
    "alt": "Park & Bahçe Direği GL-34-5072"
  },
  {
    "id": "gl-34-5073",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5073",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5073",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5073.jpg",
    "alt": "Park & Bahçe Direği GL-34-5073"
  },
  {
    "id": "gl-34-50714",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-50714",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-50714",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-50714.jpg",
    "alt": "Park & Bahçe Direği GL-34-50714"
  },
  {
    "id": "gl-34-5075",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5075",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5075",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5075.jpg",
    "alt": "Park & Bahçe Direği GL-34-5075"
  },
  {
    "id": "gl-34-5076",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5076",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5076",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5076.jpg",
    "alt": "Park & Bahçe Direği GL-34-5076"
  },
  {
    "id": "gl-34-5077",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5077",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5077",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5077.jpg",
    "alt": "Park & Bahçe Direği GL-34-5077"
  },
  {
    "id": "gl-34-5078",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5078",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5078",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5078.jpg",
    "alt": "Park & Bahçe Direği GL-34-5078"
  },
  {
    "id": "gl-34-5079",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5079",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5079",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5079.jpg",
    "alt": "Park & Bahçe Direği GL-34-5079"
  },
  {
    "id": "gl-34-5080",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5080",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5080",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5080.jpg",
    "alt": "Park & Bahçe Direği GL-34-5080"
  },
  {
    "id": "gl-34-5084",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5084",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5084",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5084.jpg",
    "alt": "Park & Bahçe Direği GL-34-5084"
  },
  {
    "id": "gl-34-5081",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5081",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5081",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5081.jpg",
    "alt": "Park & Bahçe Direği GL-34-5081"
  },
  {
    "id": "gl-34-5082",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5082",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5082",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5082.jpg",
    "alt": "Park & Bahçe Direği GL-34-5082"
  },
  {
    "id": "gl-34-5083",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5083",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5083",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5083.jpg",
    "alt": "Park & Bahçe Direği GL-34-5083"
  },
  {
    "id": "gl-34-5085",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5085",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5085",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5085.jpg",
    "alt": "Park & Bahçe Direği GL-34-5085"
  },
  {
    "id": "gl-34-5086",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5086",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5086",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5086.jpg",
    "alt": "Park & Bahçe Direği GL-34-5086"
  },
  {
    "id": "gl-34-5087",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5087",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5087",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5087.jpg",
    "alt": "Park & Bahçe Direği GL-34-5087"
  },
  {
    "id": "gl-34-5090",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5090",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5090",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5090.jpg",
    "alt": "Park & Bahçe Direği GL-34-5090"
  },
  {
    "id": "gl-34-5089",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5089",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5089",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5089.jpg",
    "alt": "Park & Bahçe Direği GL-34-5089"
  },
  {
    "id": "gl-34-5091",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5091",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5091",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5091.jpg",
    "alt": "Park & Bahçe Direği GL-34-5091"
  },
  {
    "id": "gl-34-5088",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5088",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5088",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5088.jpg",
    "alt": "Park & Bahçe Direği GL-34-5088"
  },
  {
    "id": "gl-34-5092",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5092",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5092",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5092.jpg",
    "alt": "Park & Bahçe Direği GL-34-5092"
  },
  {
    "id": "gl-34-5093",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5093",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5093",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5093.jpg",
    "alt": "Park & Bahçe Direği GL-34-5093"
  },
  {
    "id": "gl-34-5094",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5094",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5094",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5094.jpg",
    "alt": "Park & Bahçe Direği GL-34-5094"
  },
  {
    "id": "gl-34-5095",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5095",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5095",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5095.jpg",
    "alt": "Park & Bahçe Direği GL-34-5095"
  },
  {
    "id": "gl-34-5096",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5096",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5096",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5096.jpg",
    "alt": "Park & Bahçe Direği GL-34-5096"
  },
  {
    "id": "gl-34-5097",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5097",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5097",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5097.jpg",
    "alt": "Park & Bahçe Direği GL-34-5097"
  },
  {
    "id": "gl-34-5098",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5098",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5098",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5098.jpg",
    "alt": "Park & Bahçe Direği GL-34-5098"
  },
  {
    "id": "gl-34-5099",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5099",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5099",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5099.jpg",
    "alt": "Park & Bahçe Direği GL-34-5099"
  },
  {
    "id": "gl-34-5100",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5100",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5100",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5100.jpg",
    "alt": "Park & Bahçe Direği GL-34-5100"
  },
  {
    "id": "gl-34-5101",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5101",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5101",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5101.jpg",
    "alt": "Park & Bahçe Direği GL-34-5101"
  },
  {
    "id": "gl-34-5102",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5102",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5102",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5102.jpg",
    "alt": "Park & Bahçe Direği GL-34-5102"
  },
  {
    "id": "gl-34-5103",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5103",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5103",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5103.jpg",
    "alt": "Park & Bahçe Direği GL-34-5103"
  },
  {
    "id": "gl-34-5104",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5104",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5104",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5104.jpg",
    "alt": "Park & Bahçe Direği GL-34-5104"
  },
  {
    "id": "gl-34-5105",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5105",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5105",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5105.jpg",
    "alt": "Park & Bahçe Direği GL-34-5105"
  },
  {
    "id": "gl-34-5106",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5106",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5106",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5106.jpg",
    "alt": "Park & Bahçe Direği GL-34-5106"
  },
  {
    "id": "gl-34-5107",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5107",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5107",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5107.jpg",
    "alt": "Park & Bahçe Direği GL-34-5107"
  },
  {
    "id": "gl-34-5108",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5108",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5108",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5108.jpg",
    "alt": "Park & Bahçe Direği GL-34-5108"
  },
  {
    "id": "gl-34-5109",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5109",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5109",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5109.jpg",
    "alt": "Park & Bahçe Direği GL-34-5109"
  },
  {
    "id": "gl-34-5110",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5110",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5110",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5110.jpg",
    "alt": "Park & Bahçe Direği GL-34-5110"
  },
  {
    "id": "gl-34-5113",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5113",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5113",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5113.jpg",
    "alt": "Park & Bahçe Direği GL-34-5113"
  },
  {
    "id": "gl-34-5112",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5112",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5112",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5112.jpg",
    "alt": "Park & Bahçe Direği GL-34-5112"
  },
  {
    "id": "gl-34-5111",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5111",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5111",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5111.jpg",
    "alt": "Park & Bahçe Direği GL-34-5111"
  },
  {
    "id": "gl-34-5114",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5114",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5114",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5114.jpg",
    "alt": "Park & Bahçe Direği GL-34-5114"
  },
  {
    "id": "gl-34-5115",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5115",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5115",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5115.jpg",
    "alt": "Park & Bahçe Direği GL-34-5115"
  },
  {
    "id": "gl-34-5116",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5116",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5116",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5116.jpg",
    "alt": "Park & Bahçe Direği GL-34-5116"
  },
  {
    "id": "gl-34-5120",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5120",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5120",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5120.jpg",
    "alt": "Park & Bahçe Direği GL-34-5120"
  },
  {
    "id": "gl-34-5121",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5121",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5121",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5121.jpg",
    "alt": "Park & Bahçe Direği GL-34-5121"
  },
  {
    "id": "gl-34-5122",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5122",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5122",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5122.jpg",
    "alt": "Park & Bahçe Direği GL-34-5122"
  },
  {
    "id": "gl-34-5123",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5123",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5123",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5123.jpg",
    "alt": "Park & Bahçe Direği GL-34-5123"
  },
  {
    "id": "gl-34-5124",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5124",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5124",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5124.jpg",
    "alt": "Park & Bahçe Direği GL-34-5124"
  },
  {
    "id": "gl-34-5117",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5117",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5117",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5117.jpg",
    "alt": "Park & Bahçe Direği GL-34-5117"
  },
  {
    "id": "gl-34-5118",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5118",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5118",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5118.jpg",
    "alt": "Park & Bahçe Direği GL-34-5118"
  },
  {
    "id": "gl-34-5119",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5119",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5119",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5119.jpg",
    "alt": "Park & Bahçe Direği GL-34-5119"
  },
  {
    "id": "gl-34-5128",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5128",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5128",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5128.jpg",
    "alt": "Park & Bahçe Direği GL-34-5128"
  },
  {
    "id": "gl-34-5125",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5125",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5125",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5125.jpg",
    "alt": "Park & Bahçe Direği GL-34-5125"
  },
  {
    "id": "gl-34-5126",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5126",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5126",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5126.jpg",
    "alt": "Park & Bahçe Direği GL-34-5126"
  },
  {
    "id": "gl-34-5127",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5127",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5127",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-5127.jpg",
    "alt": "Park & Bahçe Direği GL-34-5127"
  },
  {
    "id": "gl-34-9063",
    "name": "Küre Glop",
    "code": "GL-34-9063",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9063",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9063.jpg",
    "alt": "Küre Glop GL-34-9063"
  },
  {
    "id": "gl-34-9062",
    "name": "Küre Glop",
    "code": "GL-34-9062",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9062",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9062.jpg",
    "alt": "Küre Glop GL-34-9062"
  },
  {
    "id": "gl-34-9061",
    "name": "Küre Glop",
    "code": "GL-34-9061",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9061",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9061.jpg",
    "alt": "Küre Glop GL-34-9061"
  },
  {
    "id": "gl-34-9064",
    "name": "Küre Glop",
    "code": "GL-34-9064",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9064",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9064.jpg",
    "alt": "Küre Glop GL-34-9064"
  },
  {
    "id": "gl-34-9066",
    "name": "Küre Glop",
    "code": "GL-34-9066",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9066",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9066.jpg",
    "alt": "Küre Glop GL-34-9066"
  },
  {
    "id": "gl-34-9067",
    "name": "Küre Glop",
    "code": "GL-34-9067",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9067",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9067.jpg",
    "alt": "Küre Glop GL-34-9067"
  },
  {
    "id": "gl-34-9065",
    "name": "Küre Glop",
    "code": "GL-34-9065",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9065",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9065.jpg",
    "alt": "Küre Glop GL-34-9065"
  },
  {
    "id": "gl-34-9068",
    "name": "Küre Glop",
    "code": "GL-34-9068",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9068",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9068.jpg",
    "alt": "Küre Glop GL-34-9068"
  },
  {
    "id": "gl-34-9070",
    "name": "Küre Glop",
    "code": "GL-34-9070",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9070",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9070.jpg",
    "alt": "Küre Glop GL-34-9070"
  },
  {
    "id": "gl-34-9071",
    "name": "Küre Glop",
    "code": "GL-34-9071",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9071",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9071.jpg",
    "alt": "Küre Glop GL-34-9071"
  },
  {
    "id": "gl-34-9069",
    "name": "Küre Glop",
    "code": "GL-34-9069",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9069",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9069.jpg",
    "alt": "Küre Glop GL-34-9069"
  },
  {
    "id": "gl-34-9072",
    "name": "Küre Glop",
    "code": "GL-34-9072",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9072",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9072.jpg",
    "alt": "Küre Glop GL-34-9072"
  },
  {
    "id": "gl-34-9074",
    "name": "Küre Glop",
    "code": "GL-34-9074",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9074",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9074.jpg",
    "alt": "Küre Glop GL-34-9074"
  },
  {
    "id": "gl-34-9075",
    "name": "Küre Glop",
    "code": "GL-34-9075",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9075",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9075.jpg",
    "alt": "Küre Glop GL-34-9075"
  },
  {
    "id": "gl-34-9073",
    "name": "Küre Glop",
    "code": "GL-34-9073",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9073",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9073.jpg",
    "alt": "Küre Glop GL-34-9073"
  },
  {
    "id": "gl-34-9076",
    "name": "Küre Glop",
    "code": "GL-34-9076",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9076",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9076.jpg",
    "alt": "Küre Glop GL-34-9076"
  },
  {
    "id": "gl-34-9078",
    "name": "Küre Glop",
    "code": "GL-34-9078",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9078",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9078.jpg",
    "alt": "Küre Glop GL-34-9078"
  },
  {
    "id": "gl-34-9077",
    "name": "Küre Glop",
    "code": "GL-34-9077",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9077",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9077.jpg",
    "alt": "Küre Glop GL-34-9077"
  },
  {
    "id": "gl-34-9081",
    "name": "Küre Glop",
    "code": "GL-34-9081",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9081",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9081.jpg",
    "alt": "Küre Glop GL-34-9081"
  },
  {
    "id": "gl-34-9079",
    "name": "Küre Glop",
    "code": "GL-34-9079",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9079",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9079.jpg",
    "alt": "Küre Glop GL-34-9079"
  },
  {
    "id": "gl-34-9080",
    "name": "Küre Glop",
    "code": "GL-34-9080",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9080",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9080.jpg",
    "alt": "Küre Glop GL-34-9080"
  },
  {
    "id": "gl-34-9084",
    "name": "Küre Glop",
    "code": "GL-34-9084",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9084",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9084.jpg",
    "alt": "Küre Glop GL-34-9084"
  },
  {
    "id": "gl-34-9082",
    "name": "Küre Glop",
    "code": "GL-34-9082",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9082",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9082.jpg",
    "alt": "Küre Glop GL-34-9082"
  },
  {
    "id": "gl-34-9083",
    "name": "Küre Glop",
    "code": "GL-34-9083",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9083",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9083.jpg",
    "alt": "Küre Glop GL-34-9083"
  },
  {
    "id": "gl-34-9087",
    "name": "Küre Glop",
    "code": "GL-34-9087",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9087",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9087.jpg",
    "alt": "Küre Glop GL-34-9087"
  },
  {
    "id": "gl-34-9085",
    "name": "Küre Glop",
    "code": "GL-34-9085",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9085",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9085.jpg",
    "alt": "Küre Glop GL-34-9085"
  },
  {
    "id": "gl-34-9086",
    "name": "Küre Glop",
    "code": "GL-34-9086",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9086",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9086.jpg",
    "alt": "Küre Glop GL-34-9086"
  },
  {
    "id": "gl-34-9090",
    "name": "Küre Glop",
    "code": "GL-34-9090",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9090",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9090.jpg",
    "alt": "Küre Glop GL-34-9090"
  },
  {
    "id": "gl-34-9088",
    "name": "Küre Glop",
    "code": "GL-34-9088",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9088",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9088.jpg",
    "alt": "Küre Glop GL-34-9088"
  },
  {
    "id": "gl-34-9089",
    "name": "Küre Glop",
    "code": "GL-34-9089",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9089",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9089.jpg",
    "alt": "Küre Glop GL-34-9089"
  },
  {
    "id": "gl-34-9093",
    "name": "Küre Glop",
    "code": "GL-34-9093",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9093",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9093.jpg",
    "alt": "Küre Glop GL-34-9093"
  },
  {
    "id": "gl-34-9091",
    "name": "Küre Glop",
    "code": "GL-34-9091",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9091",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9091.jpg",
    "alt": "Küre Glop GL-34-9091"
  },
  {
    "id": "gl-34-9092",
    "name": "Küre Glop",
    "code": "GL-34-9092",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9092",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9092.jpg",
    "alt": "Küre Glop GL-34-9092"
  },
  {
    "id": "gl-34-9094",
    "name": "Küre Glop",
    "code": "GL-34-9094",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9094",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9094.jpg",
    "alt": "Küre Glop GL-34-9094"
  },
  {
    "id": "gl-34-9096",
    "name": "Küre Glop",
    "code": "GL-34-9096",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9096",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9096.jpg",
    "alt": "Küre Glop GL-34-9096"
  },
  {
    "id": "gl-34-9095",
    "name": "Küre Glop",
    "code": "GL-34-9095",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9095",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9095.jpg",
    "alt": "Küre Glop GL-34-9095"
  },
  {
    "id": "gl-34-9097",
    "name": "Küre Glop",
    "code": "GL-34-9097",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9097",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9097.jpg",
    "alt": "Küre Glop GL-34-9097"
  },
  {
    "id": "gl-34-9099",
    "name": "Küre Glop",
    "code": "GL-34-9099",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9099",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9099.jpg",
    "alt": "Küre Glop GL-34-9099"
  },
  {
    "id": "gl-34-9098",
    "name": "Küre Glop",
    "code": "GL-34-9098",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9098",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9098.jpg",
    "alt": "Küre Glop GL-34-9098"
  },
  {
    "id": "gl-34-9004",
    "name": "Küre Glop",
    "code": "GL-34-9004",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9004",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9004.jpg",
    "alt": "Küre Glop GL-34-9004"
  },
  {
    "id": "gl-34-9102",
    "name": "Küre Glop",
    "code": "GL-34-9102",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9102",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9102.jpg",
    "alt": "Küre Glop GL-34-9102"
  },
  {
    "id": "gl-34-9101",
    "name": "Küre Glop",
    "code": "GL-34-9101",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9101",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9101.jpg",
    "alt": "Küre Glop GL-34-9101"
  },
  {
    "id": "gl-34-9105",
    "name": "Küre Glop",
    "code": "GL-34-9105",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9105",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9105.jpg",
    "alt": "Küre Glop GL-34-9105"
  },
  {
    "id": "gl-34-9103",
    "name": "Küre Glop",
    "code": "GL-34-9103",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9103",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9103.jpg",
    "alt": "Küre Glop GL-34-9103"
  },
  {
    "id": "gl-34-9109",
    "name": "Küre Glop",
    "code": "GL-34-9109",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9109",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9109.jpg",
    "alt": "Küre Glop GL-34-9109"
  },
  {
    "id": "gl-34-9107",
    "name": "Küre Glop",
    "code": "GL-34-9107",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9107",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9107.jpg",
    "alt": "Küre Glop GL-34-9107"
  },
  {
    "id": "gl-34-9106",
    "name": "Küre Glop",
    "code": "GL-34-9106",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9106",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9106.jpg",
    "alt": "Küre Glop GL-34-9106"
  },
  {
    "id": "gl-34-9104",
    "name": "Küre Glop",
    "code": "GL-34-9104",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9104",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9104.jpg",
    "alt": "Küre Glop GL-34-9104"
  },
  {
    "id": "gl-34-9110",
    "name": "Küre Glop",
    "code": "GL-34-9110",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9110",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9110.jpg",
    "alt": "Küre Glop GL-34-9110"
  },
  {
    "id": "gl-34-9108",
    "name": "Küre Glop",
    "code": "GL-34-9108",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9108",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9108.jpg",
    "alt": "Küre Glop GL-34-9108"
  },
  {
    "id": "gl-34-9115",
    "name": "Küre Glop",
    "code": "GL-34-9115",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9115",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9115.jpg",
    "alt": "Küre Glop GL-34-9115"
  },
  {
    "id": "gl-34-9117",
    "name": "Küre Glop",
    "code": "GL-34-9117",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9117",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9117.jpg",
    "alt": "Küre Glop GL-34-9117"
  },
  {
    "id": "gl-34-9116",
    "name": "Küre Glop",
    "code": "GL-34-9116",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9116",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9116.jpg",
    "alt": "Küre Glop GL-34-9116"
  },
  {
    "id": "gl-34-9112",
    "name": "Küre Glop",
    "code": "GL-34-9112",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9112",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9112.jpg",
    "alt": "Küre Glop GL-34-9112"
  },
  {
    "id": "gl-34-9114",
    "name": "Küre Glop",
    "code": "GL-34-9114",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9114",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9114.jpg",
    "alt": "Küre Glop GL-34-9114"
  },
  {
    "id": "gl-34-9111",
    "name": "Küre Glop",
    "code": "GL-34-9111",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9111",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9111.jpg",
    "alt": "Küre Glop GL-34-9111"
  },
  {
    "id": "gl-34-9113",
    "name": "Küre Glop",
    "code": "GL-34-9113",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9113",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-34-9113.jpg",
    "alt": "Küre Glop GL-34-9113"
  },
  {
    "id": "gl-100s",
    "name": "Küre Glop",
    "code": "GL-100S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-100s.jpg",
    "alt": "Küre Glop GL-100S"
  },
  {
    "id": "gl-100o",
    "name": "Küre Glop",
    "code": "GL-100O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-100o.jpg",
    "alt": "Küre Glop GL-100O"
  },
  {
    "id": "gl-100f",
    "name": "Küre Glop",
    "code": "GL-100F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100f",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-100f.jpg",
    "alt": "Küre Glop GL-100F"
  },
  {
    "id": "gl-101s",
    "name": "Küre Glop",
    "code": "GL-101S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101s.jpg",
    "alt": "Küre Glop GL-101S"
  },
  {
    "id": "gl-101o",
    "name": "Küre Glop",
    "code": "GL-101O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101o.jpg",
    "alt": "Küre Glop GL-101O"
  },
  {
    "id": "gl-101f",
    "name": "Küre Glop",
    "code": "GL-101F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101f",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101f.jpg",
    "alt": "Küre Glop GL-101F"
  },
  {
    "id": "gl-121s",
    "name": "Küre Glop",
    "code": "GL-121S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-121s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-121s.jpg",
    "alt": "Küre Glop GL-121S"
  },
  {
    "id": "gl-101t-o",
    "name": "Küre Glop",
    "code": "GL-101T-O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-o.jpg",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-s",
    "name": "Küre Glop",
    "code": "GL-101T-S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-s.jpg",
    "alt": "Küre Glop GL-101T-S"
  },
  {
    "id": "gl-101t-s-2-2",
    "name": "Küre Glop",
    "code": "GL-101T-S-2-2",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-s-2-2",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-s.jpg",
    "alt": "Küre Glop GL-101T-S"
  },
  {
    "id": "gl-101t-o-3-2",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-2",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-2",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-o.jpg",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-3",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-3",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-3",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-o.jpg",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-4",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-4",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-4",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-o.jpg",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-5",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-5",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-5",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-101t-o.jpg",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-103s",
    "name": "Küre Glop",
    "code": "GL-103S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-103s.jpg",
    "alt": "Küre Glop GL-103S"
  },
  {
    "id": "gl-103o",
    "name": "Küre Glop",
    "code": "GL-103O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-103o.jpg",
    "alt": "Küre Glop GL-103O"
  },
  {
    "id": "gl-103f",
    "name": "Küre Glop",
    "code": "GL-103F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103f",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-103f.jpg",
    "alt": "Küre Glop GL-103F"
  },
  {
    "id": "gl-123s",
    "name": "Küre Glop",
    "code": "GL-123S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-123s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-123s.jpg",
    "alt": "Küre Glop GL-123S"
  },
  {
    "id": "gl-105s",
    "name": "Küre Glop",
    "code": "GL-105S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-105s.jpg",
    "alt": "Küre Glop GL-105S"
  },
  {
    "id": "gl-105o",
    "name": "Küre Glop",
    "code": "GL-105O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-105o.jpg",
    "alt": "Küre Glop GL-105O"
  },
  {
    "id": "gl-125s",
    "name": "Küre Glop",
    "code": "GL-125S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-125s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-125s.jpg",
    "alt": "Küre Glop GL-125S"
  },
  {
    "id": "gl-105f",
    "name": "Küre Glop",
    "code": "GL-105F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105f",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-105f.jpg",
    "alt": "Küre Glop GL-105F"
  },
  {
    "id": "gl-135o",
    "name": "Küre Glop",
    "code": "GL-135O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-135o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-135o.jpg",
    "alt": "Küre Glop GL-135O"
  },
  {
    "id": "gl-133o",
    "name": "Küre Glop",
    "code": "GL-133O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-133o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-133o.jpg",
    "alt": "Küre Glop GL-133O"
  },
  {
    "id": "gl-131o",
    "name": "Küre Glop",
    "code": "GL-131O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-131o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-131o.jpg",
    "alt": "Küre Glop GL-131O"
  },
  {
    "id": "gl-132o",
    "name": "Küre Glop",
    "code": "GL-132O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-132o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-132o.jpg",
    "alt": "Küre Glop GL-132O"
  },
  {
    "id": "gl-141s",
    "name": "Küre Glop",
    "code": "GL-141S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-141s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-141s.jpg",
    "alt": "Küre Glop GL-141S"
  },
  {
    "id": "gl-141o",
    "name": "Küre Glop",
    "code": "GL-141O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-141o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-141o.jpg",
    "alt": "Küre Glop GL-141O"
  },
  {
    "id": "gl-151s",
    "name": "Küre Glop",
    "code": "GL-151S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-151s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-151s.jpg",
    "alt": "Küre Glop GL-151S"
  },
  {
    "id": "gl-142o",
    "name": "Küre Glop",
    "code": "GL-142O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-142o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-142o.jpg",
    "alt": "Küre Glop GL-142O"
  },
  {
    "id": "gl-142s",
    "name": "Küre Glop",
    "code": "GL-142S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-142s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-142s.jpg",
    "alt": "Küre Glop GL-142S"
  },
  {
    "id": "gl-152s",
    "name": "Küre Glop",
    "code": "GL-152S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-152s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-152s.jpg",
    "alt": "Küre Glop GL-152S"
  },
  {
    "id": "gl-161s",
    "name": "Küre Glop",
    "code": "GL-161S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-161s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-161s.jpg",
    "alt": "Küre Glop GL-161S"
  },
  {
    "id": "gl-161o",
    "name": "Küre Glop",
    "code": "GL-161O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-161o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-161o.jpg",
    "alt": "Küre Glop GL-161O"
  },
  {
    "id": "gl-171s",
    "name": "Küre Glop",
    "code": "GL-171S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-171s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-171s.jpg",
    "alt": "Küre Glop GL-171S"
  },
  {
    "id": "gl-181s",
    "name": "Küre Glop",
    "code": "GL-181S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-181s.jpg",
    "alt": "Küre Glop GL-181S"
  },
  {
    "id": "gl-181o",
    "name": "Küre Glop",
    "code": "GL-181O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-181o.jpg",
    "alt": "Küre Glop GL-181O"
  },
  {
    "id": "gl-181sf",
    "name": "Küre Glop",
    "code": "GL-181SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-181sf.jpg",
    "alt": "Küre Glop GL-181SF"
  },
  {
    "id": "gl-191s",
    "name": "Küre Glop",
    "code": "GL-191S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-191s.jpg",
    "alt": "Küre Glop GL-191S"
  },
  {
    "id": "gl-191o",
    "name": "Küre Glop",
    "code": "GL-191O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-191o.jpg",
    "alt": "Küre Glop GL-191O"
  },
  {
    "id": "gl-191sf",
    "name": "Küre Glop",
    "code": "GL-191SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-191sf.jpg",
    "alt": "Küre Glop GL-191SF"
  },
  {
    "id": "gl-201s",
    "name": "Küre Glop",
    "code": "GL-201S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-201s.jpg",
    "alt": "Küre Glop GL-201S"
  },
  {
    "id": "gl-201o",
    "name": "Küre Glop",
    "code": "GL-201O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-201o.jpg",
    "alt": "Küre Glop GL-201O"
  },
  {
    "id": "gl-201sf",
    "name": "Küre Glop",
    "code": "GL-201SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-201sf.jpg",
    "alt": "Küre Glop GL-201SF"
  },
  {
    "id": "gl-211s",
    "name": "Küre Glop",
    "code": "GL-211S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-211s.jpg",
    "alt": "Küre Glop GL-211S"
  },
  {
    "id": "gl-211o",
    "name": "Küre Glop",
    "code": "GL-211O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-211o.jpg",
    "alt": "Küre Glop GL-211O"
  },
  {
    "id": "gl-211sf",
    "name": "Küre Glop",
    "code": "GL-211SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-211sf.jpg",
    "alt": "Küre Glop GL-211SF"
  },
  {
    "id": "gl-221s",
    "name": "Küre Glop",
    "code": "GL-221S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-221s.jpg",
    "alt": "Küre Glop GL-221S"
  },
  {
    "id": "gl-221o",
    "name": "Küre Glop",
    "code": "GL-221O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-221o.jpg",
    "alt": "Küre Glop GL-221O"
  },
  {
    "id": "gl-221sf",
    "name": "Küre Glop",
    "code": "GL-221SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-221sf.jpg",
    "alt": "Küre Glop GL-221SF"
  },
  {
    "id": "gl-222o",
    "name": "Küre Glop",
    "code": "GL-222O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-222o.jpg",
    "alt": "Küre Glop GL-222O"
  },
  {
    "id": "gl-222s",
    "name": "Küre Glop",
    "code": "GL-222S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-222s.jpg",
    "alt": "Küre Glop GL-222S"
  },
  {
    "id": "gl-222sf",
    "name": "Küre Glop",
    "code": "GL-222SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-222sf.jpg",
    "alt": "Küre Glop GL-222SF"
  },
  {
    "id": "gl-222bs",
    "name": "Küre Glop",
    "code": "GL-222BS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222bs",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-222bs.jpg",
    "alt": "Küre Glop GL-222BS"
  },
  {
    "id": "gl-223o",
    "name": "Küre Glop",
    "code": "GL-223O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-223o.jpg",
    "alt": "Küre Glop GL-223O"
  },
  {
    "id": "gl-223s",
    "name": "Küre Glop",
    "code": "GL-223S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-223s.jpg",
    "alt": "Küre Glop GL-223S"
  },
  {
    "id": "gl-223sf",
    "name": "Küre Glop",
    "code": "GL-223SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-223sf.jpg",
    "alt": "Küre Glop GL-223SF"
  },
  {
    "id": "gl-223bs",
    "name": "Küre Glop",
    "code": "GL-223BS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223bs",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-223bs.jpg",
    "alt": "Küre Glop GL-223BS"
  },
  {
    "id": "gl-225o",
    "name": "Küre Glop",
    "code": "GL-225O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-225o.jpg",
    "alt": "Küre Glop GL-225O"
  },
  {
    "id": "gl-225s",
    "name": "Küre Glop",
    "code": "GL-225S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-225s.jpg",
    "alt": "Küre Glop GL-225S"
  },
  {
    "id": "gl-225sf",
    "name": "Küre Glop",
    "code": "GL-225SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-225sf.jpg",
    "alt": "Küre Glop GL-225SF"
  },
  {
    "id": "gl-224o",
    "name": "Küre Glop",
    "code": "GL-224O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-224o.jpg",
    "alt": "Küre Glop GL-224O"
  },
  {
    "id": "gl-224s",
    "name": "Küre Glop",
    "code": "GL-224S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-224s.jpg",
    "alt": "Küre Glop GL-224S"
  },
  {
    "id": "gl-224sf",
    "name": "Küre Glop",
    "code": "GL-224SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-224sf.jpg",
    "alt": "Küre Glop GL-224SF"
  },
  {
    "id": "gl-232s",
    "name": "Küre Glop",
    "code": "GL-232S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-232s.jpg",
    "alt": "Küre Glop GL-232S"
  },
  {
    "id": "gl-232sf",
    "name": "Küre Glop",
    "code": "GL-232SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-232sf.jpg",
    "alt": "Küre Glop GL-232SF"
  },
  {
    "id": "gl-232o",
    "name": "Küre Glop",
    "code": "GL-232O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-232o.jpg",
    "alt": "Küre Glop GL-232O"
  },
  {
    "id": "gl-232ss",
    "name": "Küre Glop",
    "code": "GL-232SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232ss",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-232ss.jpg",
    "alt": "Küre Glop GL-232SS"
  },
  {
    "id": "gl-233o",
    "name": "Küre Glop",
    "code": "GL-233O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-233o.jpg",
    "alt": "Küre Glop GL-233O"
  },
  {
    "id": "gl-233sf",
    "name": "Küre Glop",
    "code": "GL-233SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-233sf.jpg",
    "alt": "Küre Glop GL-233SF"
  },
  {
    "id": "gl-233s",
    "name": "Küre Glop",
    "code": "GL-233S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-233s.jpg",
    "alt": "Küre Glop GL-233S"
  },
  {
    "id": "gl-234s",
    "name": "Küre Glop",
    "code": "GL-234S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-234s.jpg",
    "alt": "Küre Glop GL-234S"
  },
  {
    "id": "gl-234sf",
    "name": "Küre Glop",
    "code": "GL-234SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-234sf.jpg",
    "alt": "Küre Glop GL-234SF"
  },
  {
    "id": "gl-234o",
    "name": "Küre Glop",
    "code": "GL-234O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-234o.jpg",
    "alt": "Küre Glop GL-234O"
  },
  {
    "id": "gl-234ss",
    "name": "Küre Glop",
    "code": "GL-234SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234ss",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-234ss.jpg",
    "alt": "Küre Glop GL-234SS"
  },
  {
    "id": "gl-243o",
    "name": "Küre Glop",
    "code": "GL-243O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243o",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-243o.jpg",
    "alt": "Küre Glop GL-243O"
  },
  {
    "id": "gl-243sf",
    "name": "Küre Glop",
    "code": "GL-243SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243sf",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-243sf.jpg",
    "alt": "Küre Glop GL-243SF"
  },
  {
    "id": "gl-243s",
    "name": "Küre Glop",
    "code": "GL-243S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-243s.jpg",
    "alt": "Küre Glop GL-243S"
  },
  {
    "id": "gl-244ss",
    "name": "Küre Glop",
    "code": "GL-244SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244ss",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-244ss.jpg",
    "alt": "Küre Glop GL-244SS"
  },
  {
    "id": "gl-244sb",
    "name": "Küre Glop",
    "code": "GL-244SB",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244sb",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-244sb.jpg",
    "alt": "Küre Glop GL-244SB"
  },
  {
    "id": "gl-244s",
    "name": "Küre Glop",
    "code": "GL-244S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-244s.jpg",
    "alt": "Küre Glop GL-244S"
  },
  {
    "id": "gl-245ss",
    "name": "Küre Glop",
    "code": "GL-245SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245ss",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-245ss.jpg",
    "alt": "Küre Glop GL-245SS"
  },
  {
    "id": "gl-245sb",
    "name": "Küre Glop",
    "code": "GL-245SB",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245sb",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-245sb.jpg",
    "alt": "Küre Glop GL-245SB"
  },
  {
    "id": "gl-245s",
    "name": "Küre Glop",
    "code": "GL-245S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245s",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-245s.jpg",
    "alt": "Küre Glop GL-245S"
  },
  {
    "id": "gl-121r",
    "name": "Küre Glop",
    "code": "GL-121R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-121r",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-121r.jpg",
    "alt": "Küre Glop GL-121R"
  },
  {
    "id": "gl-122r",
    "name": "Küre Glop",
    "code": "GL-122R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-122r",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-122r.jpg",
    "alt": "Küre Glop GL-122R"
  },
  {
    "id": "gl-103r",
    "name": "Küre Glop",
    "code": "GL-103R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103r",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-103r.jpg",
    "alt": "Küre Glop GL-103R"
  },
  {
    "id": "gl-135r",
    "name": "Küre Glop",
    "code": "GL-135R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-135r",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-135r.jpg",
    "alt": "Küre Glop GL-135R"
  },
  {
    "id": "gl-301",
    "name": "Aksesuar",
    "code": "GL-301",
    "category": "gloplar",
    "href": "/tr/urunler/gl-301",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-301.jpg",
    "alt": "Aksesuar GL-301"
  },
  {
    "id": "gl-302",
    "name": "Aksesuar",
    "code": "GL-302",
    "category": "gloplar",
    "href": "/tr/urunler/gl-302",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-302.jpg",
    "alt": "Aksesuar GL-302"
  },
  {
    "id": "gl-351",
    "name": "Aksesuar",
    "code": "GL-351",
    "category": "gloplar",
    "href": "/tr/urunler/gl-351",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-351.jpg",
    "alt": "Aksesuar GL-351"
  },
  {
    "id": "gl-352",
    "name": "Aksesuar",
    "code": "GL-352",
    "category": "gloplar",
    "href": "/tr/urunler/gl-352",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-352.jpg",
    "alt": "Aksesuar GL-352"
  },
  {
    "id": "gl-401",
    "name": "Aksesuar",
    "code": "GL-401",
    "category": "gloplar",
    "href": "/tr/urunler/gl-401",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-401.jpg",
    "alt": "Aksesuar GL-401"
  },
  {
    "id": "gl-451",
    "name": "Aksesuar",
    "code": "GL-451",
    "category": "gloplar",
    "href": "/tr/urunler/gl-451",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-451.jpg",
    "alt": "Aksesuar GL-451"
  },
  {
    "id": "gl-452",
    "name": "Aksesuar",
    "code": "GL-452",
    "category": "gloplar",
    "href": "/tr/urunler/gl-452",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-452.jpg",
    "alt": "Aksesuar GL-452"
  },
  {
    "id": "gl-501",
    "name": "Aksesuar",
    "code": "GL-501",
    "category": "gloplar",
    "href": "/tr/urunler/gl-501",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-501.jpg",
    "alt": "Aksesuar GL-501"
  },
  {
    "id": "gl-551",
    "name": "Aksesuar",
    "code": "GL-551",
    "category": "gloplar",
    "href": "/tr/urunler/gl-551",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-551.jpg",
    "alt": "Aksesuar GL-551"
  },
  {
    "id": "gl-601",
    "name": "Aksesuar",
    "code": "GL-601",
    "category": "gloplar",
    "href": "/tr/urunler/gl-601",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-601.jpg",
    "alt": "Aksesuar GL-601"
  },
  {
    "id": "gl-605",
    "name": "Aksesuar",
    "code": "GL-605",
    "category": "gloplar",
    "href": "/tr/urunler/gl-605",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-605.jpg",
    "alt": "Aksesuar GL-605"
  },
  {
    "id": "gl-701",
    "name": "Aksesuar",
    "code": "GL-701",
    "category": "gloplar",
    "href": "/tr/urunler/gl-701",
    "image": "https://toprakaydinlatma.vercel.app/images/models/gl-gl-701.jpg",
    "alt": "Aksesuar GL-701"
  }
] as const satisfies readonly ToprakProduct[];
