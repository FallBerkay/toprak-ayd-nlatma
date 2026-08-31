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
    "label": "Şehir Görselleri",
    "slug": "sehir-gorselleri"
  },
  {
    "label": "Galvanizli Çelik Aydınlatma",
    "slug": "galvanizli-yol-aydinlatma"
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
    "image": "/product-whitebacks/3545-001.png",
    "alt": "TOPRAK SERİSİ 3545-001"
  },
  {
    "id": "3545-004",
    "name": "TOPRAK SERİSİ",
    "code": "3545-004",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-004",
    "image": "/product-whitebacks/3545-004.png",
    "alt": "TOPRAK SERİSİ 3545-004"
  },
  {
    "id": "3545-007",
    "name": "TOPRAK SERİSİ",
    "code": "3545-007",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-007",
    "image": "/product-whitebacks/3545-007.png",
    "alt": "TOPRAK SERİSİ 3545-007"
  },
  {
    "id": "3545-010",
    "name": "TOPRAK SERİSİ",
    "code": "3545-010",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-010",
    "image": "/product-whitebacks/3545-010.png",
    "alt": "TOPRAK SERİSİ 3545-010"
  },
  {
    "id": "3545-013",
    "name": "TOPRAK SERİSİ",
    "code": "3545-013",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-013",
    "image": "/product-whitebacks/3545-013.png",
    "alt": "TOPRAK SERİSİ 3545-013"
  },
  {
    "id": "3545-016",
    "name": "TOPRAK SERİSİ",
    "code": "3545-016",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-016",
    "image": "/product-whitebacks/3545-016.png",
    "alt": "TOPRAK SERİSİ 3545-016"
  },
  {
    "id": "3545-019",
    "name": "TOPRAK SERİSİ",
    "code": "3545-019",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-019",
    "image": "/product-whitebacks/3545-019.png",
    "alt": "TOPRAK SERİSİ 3545-019"
  },
  {
    "id": "3545-022",
    "name": "TOPRAK SERİSİ",
    "code": "3545-022",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-022",
    "image": "/product-whitebacks/3545-022.png",
    "alt": "TOPRAK SERİSİ 3545-022"
  },
  {
    "id": "3545-025",
    "name": "TOPRAK SERİSİ",
    "code": "3545-025",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-025",
    "image": "/product-whitebacks/3545-025.png",
    "alt": "TOPRAK SERİSİ 3545-025"
  },
  {
    "id": "3545-028",
    "name": "TOPRAK SERİSİ",
    "code": "3545-028",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-028",
    "image": "/product-whitebacks/3545-028.png",
    "alt": "TOPRAK SERİSİ 3545-028"
  },
  {
    "id": "3545-031",
    "name": "TOPRAK SERİSİ",
    "code": "3545-031",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-031",
    "image": "/product-whitebacks/3545-031.png",
    "alt": "TOPRAK SERİSİ 3545-031"
  },
  {
    "id": "3545-034",
    "name": "TOPRAK SERİSİ",
    "code": "3545-034",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-034",
    "image": "/product-whitebacks/3545-034.png",
    "alt": "TOPRAK SERİSİ 3545-034"
  },
  {
    "id": "3545-036",
    "name": "TOPRAK SERİSİ",
    "code": "3545-036",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-036",
    "image": "/product-whitebacks/3545-036.png",
    "alt": "TOPRAK SERİSİ 3545-036"
  },
  {
    "id": "3545-039",
    "name": "TOPRAK SERİSİ",
    "code": "3545-039",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-039",
    "image": "/product-whitebacks/3545-039.png",
    "alt": "TOPRAK SERİSİ 3545-039"
  },
  {
    "id": "3545-041",
    "name": "TOPRAK SERİSİ",
    "code": "3545-041",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-041",
    "image": "/product-whitebacks/3545-041.png",
    "alt": "TOPRAK SERİSİ 3545-041"
  },
  {
    "id": "3545-044",
    "name": "TOPRAK SERİSİ",
    "code": "3545-044",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-044",
    "image": "/product-whitebacks/3545-044.png",
    "alt": "TOPRAK SERİSİ 3545-044"
  },
  {
    "id": "3545-047",
    "name": "TOPRAK SERİSİ",
    "code": "3545-047",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-047",
    "image": "/product-whitebacks/3545-047.png",
    "alt": "TOPRAK SERİSİ 3545-047"
  },
  {
    "id": "3545-050",
    "name": "TOPRAK SERİSİ",
    "code": "3545-050",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-050",
    "image": "/product-whitebacks/3545-050.png",
    "alt": "TOPRAK SERİSİ 3545-050"
  },
  {
    "id": "3545-053",
    "name": "TOPRAK SERİSİ",
    "code": "3545-053",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-053",
    "image": "/product-whitebacks/3545-053.png",
    "alt": "TOPRAK SERİSİ 3545-053"
  },
  {
    "id": "3545-056",
    "name": "TOPRAK SERİSİ",
    "code": "3545-056",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-056",
    "image": "/product-whitebacks/3545-056.png",
    "alt": "TOPRAK SERİSİ 3545-056"
  },
  {
    "id": "3545-059",
    "name": "TOPRAK SERİSİ",
    "code": "3545-059",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-059",
    "image": "/product-whitebacks/3545-059.png",
    "alt": "TOPRAK SERİSİ 3545-059"
  },
  {
    "id": "3545-062",
    "name": "TOPRAK SERİSİ",
    "code": "3545-062",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-062",
    "image": "/product-whitebacks/3545-062.png",
    "alt": "TOPRAK SERİSİ 3545-062"
  },
  {
    "id": "3545-065",
    "name": "TOPRAK SERİSİ",
    "code": "3545-065",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-065",
    "image": "/product-whitebacks/3545-065.png",
    "alt": "TOPRAK SERİSİ 3545-065"
  },
  {
    "id": "3545-067",
    "name": "TOPRAK SERİSİ",
    "code": "3545-067",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-067",
    "image": "/product-whitebacks/3545-067.png",
    "alt": "TOPRAK SERİSİ 3545-067"
  },
  {
    "id": "3545-071",
    "name": "TOPRAK SERİSİ",
    "code": "3545-071",
    "category": "dekoratif",
    "href": "/tr/urunler/3545-071",
    "image": "/product-whitebacks/3545-071.png",
    "alt": "TOPRAK SERİSİ 3545-071"
  },
  {
    "id": "3545-142",
    "name": "LİNA TEK KONSOLLU",
    "code": "3545-142",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-142",
    "image": "/product-whitebacks/3545-142.png",
    "alt": "LİNA TEK KONSOLLU 3545-142"
  },
  {
    "id": "3545-001-p73",
    "name": "LİNA ÇİFT KONSOLLU",
    "code": "3545-001",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-001-p73",
    "image": "/product-whitebacks/3545-001-p73.png",
    "alt": "LİNA ÇİFT KONSOLLU 3545-001"
  },
  {
    "id": "3545-162",
    "name": "LİNA PARK",
    "code": "3545-162",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-162",
    "image": "/product-whitebacks/3545-162.png",
    "alt": "LİNA PARK 3545-162"
  },
  {
    "id": "3545-172",
    "name": "LİNA-İKİLİ",
    "code": "3545-172",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-172",
    "image": "/product-whitebacks/3545-172.png",
    "alt": "LİNA-İKİLİ 3545-172"
  },
  {
    "id": "3545-182",
    "name": "Park & Bahçe Direği",
    "code": "3545-182",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-182",
    "image": "/product-whitebacks/3545-182.png",
    "alt": "Park & Bahçe Direği 3545-182"
  },
  {
    "id": "3545-192",
    "name": "Park & Bahçe Direği",
    "code": "3545-192",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-192",
    "image": "/product-whitebacks/3545-192.png",
    "alt": "Park & Bahçe Direği 3545-192"
  },
  {
    "id": "3545-202",
    "name": "Park & Bahçe Direği",
    "code": "3545-202",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-202",
    "image": "/product-whitebacks/3545-202.png",
    "alt": "Park & Bahçe Direği 3545-202"
  },
  {
    "id": "3545-212",
    "name": "Park & Bahçe Direği",
    "code": "3545-212",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-212",
    "image": "/product-whitebacks/3545-212.png",
    "alt": "Park & Bahçe Direği 3545-212"
  },
  {
    "id": "3545-222",
    "name": "Park & Bahçe Direği",
    "code": "3545-222",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-222",
    "image": "/product-whitebacks/3545-222.png",
    "alt": "Park & Bahçe Direği 3545-222"
  },
  {
    "id": "3545-232",
    "name": "Park & Bahçe Direği",
    "code": "3545-232",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-232",
    "image": "/product-whitebacks/3545-232.png",
    "alt": "Park & Bahçe Direği 3545-232"
  },
  {
    "id": "3545-242",
    "name": "Park & Bahçe Direği",
    "code": "3545-242",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-242",
    "image": "/product-whitebacks/3545-242.png",
    "alt": "Park & Bahçe Direği 3545-242"
  },
  {
    "id": "3545-262",
    "name": "Park & Bahçe Direği",
    "code": "3545-262",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-262",
    "image": "/product-whitebacks/3545-262.png",
    "alt": "Park & Bahçe Direği 3545-262"
  },
  {
    "id": "3545-272",
    "name": "Park & Bahçe Direği",
    "code": "3545-272",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-272",
    "image": "/product-whitebacks/3545-272.png",
    "alt": "Park & Bahçe Direği 3545-272"
  },
  {
    "id": "3545-282",
    "name": "Park & Bahçe Direği",
    "code": "3545-282",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-282",
    "image": "/product-whitebacks/3545-282.png",
    "alt": "Park & Bahçe Direği 3545-282"
  },
  {
    "id": "3545-292",
    "name": "Park & Bahçe Direği",
    "code": "3545-292",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-292",
    "image": "/product-whitebacks/3545-292.png",
    "alt": "Park & Bahçe Direği 3545-292"
  },
  {
    "id": "3545-302",
    "name": "Park & Bahçe Direği",
    "code": "3545-302",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-302",
    "image": "/product-whitebacks/3545-302.png",
    "alt": "Park & Bahçe Direği 3545-302"
  },
  {
    "id": "3545-312",
    "name": "Park & Bahçe Direği",
    "code": "3545-312",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-312",
    "image": "/product-whitebacks/3545-312.png",
    "alt": "Park & Bahçe Direği 3545-312"
  },
  {
    "id": "3545-322",
    "name": "Park & Bahçe Direği",
    "code": "3545-322",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-322",
    "image": "/product-whitebacks/3545-322.png",
    "alt": "Park & Bahçe Direği 3545-322"
  },
  {
    "id": "3545-332",
    "name": "Park & Bahçe Direği",
    "code": "3545-332",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-332",
    "image": "/product-whitebacks/3545-332.png",
    "alt": "Park & Bahçe Direği 3545-332"
  },
  {
    "id": "3545-342",
    "name": "Park & Bahçe Direği",
    "code": "3545-342",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-342",
    "image": "/product-whitebacks/3545-342.png",
    "alt": "Park & Bahçe Direği 3545-342"
  },
  {
    "id": "3545-352",
    "name": "Park & Bahçe Direği",
    "code": "3545-352",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-352",
    "image": "/product-whitebacks/3545-352.png",
    "alt": "Park & Bahçe Direği 3545-352"
  },
  {
    "id": "3545-362",
    "name": "Park & Bahçe Direği",
    "code": "3545-362",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-362",
    "image": "/product-whitebacks/3545-362.png",
    "alt": "Park & Bahçe Direği 3545-362"
  },
  {
    "id": "3545-372",
    "name": "Park & Bahçe Direği",
    "code": "3545-372",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-372",
    "image": "/product-whitebacks/3545-372.png",
    "alt": "Park & Bahçe Direği 3545-372"
  },
  {
    "id": "3545-382",
    "name": "Park & Bahçe Direği",
    "code": "3545-382",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-382",
    "image": "/product-whitebacks/3545-382.png",
    "alt": "Park & Bahçe Direği 3545-382"
  },
  {
    "id": "3545-392",
    "name": "Park & Bahçe Direği",
    "code": "3545-392",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-392",
    "image": "/product-whitebacks/3545-392.png",
    "alt": "Park & Bahçe Direği 3545-392"
  },
  {
    "id": "3545-402",
    "name": "Park & Bahçe Direği",
    "code": "3545-402",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-402",
    "image": "/product-whitebacks/3545-402.png",
    "alt": "Park & Bahçe Direği 3545-402"
  },
  {
    "id": "3545-412",
    "name": "Park & Bahçe Direği",
    "code": "3545-412",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-412",
    "image": "/product-whitebacks/3545-412.png",
    "alt": "Park & Bahçe Direği 3545-412"
  },
  {
    "id": "3545-422",
    "name": "Park & Bahçe Direği",
    "code": "3545-422",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-422",
    "image": "/product-whitebacks/3545-422.png",
    "alt": "Park & Bahçe Direği 3545-422"
  },
  {
    "id": "3545-426",
    "name": "Park & Bahçe Direği",
    "code": "3545-426",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-426",
    "image": "/product-whitebacks/3545-426.png",
    "alt": "Park & Bahçe Direği 3545-426"
  },
  {
    "id": "3545-429",
    "name": "Park & Bahçe Direği",
    "code": "3545-429",
    "category": "park-bahce",
    "href": "/tr/urunler/3545-429",
    "image": "/product-whitebacks/3545-429.png",
    "alt": "Park & Bahçe Direği 3545-429"
  },
  {
    "id": "3545-432",
    "name": "Kamera Direği",
    "code": "3545-432",
    "category": "kamera-direkleri",
    "href": "/tr/urunler/3545-432",
    "image": "/product-whitebacks/3545-432.png",
    "alt": "Kamera Direği 3545-432"
  },
  {
    "id": "3545-442",
    "name": "Şehir Görseli",
    "code": "3545-442",
    "category": "sehir-gorselleri",
    "href": "/tr/urunler/3545-442",
    "image": "/product-whitebacks/3545-442.png",
    "alt": "Şehir Görseli 3545-442"
  },
  {
    "id": "3545-452",
    "name": "Şehir Görseli",
    "code": "3545-452",
    "category": "sehir-gorselleri",
    "href": "/tr/urunler/3545-452",
    "image": "/product-whitebacks/3545-452.png",
    "alt": "Şehir Görseli 3545-452"
  },
  {
    "id": "3545-462",
    "name": "Şehir Görseli",
    "code": "3545-462",
    "category": "sehir-gorselleri",
    "href": "/tr/urunler/3545-462",
    "image": "/product-whitebacks/3545-462.png",
    "alt": "Şehir Görseli 3545-462"
  },
  {
    "id": "3545-472",
    "name": "Şehir Görseli",
    "code": "3545-472",
    "category": "sehir-gorselleri",
    "href": "/tr/urunler/3545-472",
    "image": "/product-whitebacks/3545-472.png",
    "alt": "Şehir Görseli 3545-472"
  },
  {
    "id": "3545-482",
    "name": "Şehir Görseli",
    "code": "3545-482",
    "category": "sehir-gorselleri",
    "href": "/tr/urunler/3545-482",
    "image": "/product-whitebacks/3545-482.png",
    "alt": "Şehir Görseli 3545-482"
  },
  {
    "id": "3545-492",
    "name": "Galvanizli Çelik Aydınlatma",
    "code": "3545-492",
    "category": "galvanizli-yol-aydinlatma",
    "href": "/tr/urunler/3545-492",
    "image": "/product-whitebacks/3545-492.png",
    "alt": "Galvanizli Çelik Aydınlatma 3545-492"
  },
  {
    "id": "3545-502",
    "name": "Galvanizli Çelik Aydınlatma",
    "code": "3545-502",
    "category": "galvanizli-yol-aydinlatma",
    "href": "/tr/urunler/3545-502",
    "image": "/product-whitebacks/3545-502.png",
    "alt": "Galvanizli Çelik Aydınlatma 3545-502"
  },
  {
    "id": "3545-512",
    "name": "Galvanizli Çelik Aydınlatma",
    "code": "3545-512",
    "category": "galvanizli-yol-aydinlatma",
    "href": "/tr/urunler/3545-512",
    "image": "/product-whitebacks/3545-512.png",
    "alt": "Galvanizli Çelik Aydınlatma 3545-512"
  },
  {
    "id": "3545-522",
    "name": "Galvanizli Çelik Aydınlatma",
    "code": "3545-522",
    "category": "galvanizli-yol-aydinlatma",
    "href": "/tr/urunler/3545-522",
    "image": "/product-whitebacks/3545-522.png",
    "alt": "Galvanizli Çelik Aydınlatma 3545-522"
  },
  {
    "id": "3545-532",
    "name": "Galvanizli Çelik Aydınlatma",
    "code": "3545-532",
    "category": "galvanizli-yol-aydinlatma",
    "href": "/tr/urunler/3545-532",
    "image": "/product-whitebacks/3545-532.png",
    "alt": "Galvanizli Çelik Aydınlatma 3545-532"
  },
  {
    "id": "3545-542",
    "name": "Solar Aydınlatma",
    "code": "3545-542",
    "category": "solar",
    "href": "/tr/urunler/3545-542",
    "image": "/product-whitebacks/3545-542.png",
    "alt": "Solar Aydınlatma 3545-542"
  },
  {
    "id": "3545-552",
    "name": "SOLAR B",
    "code": "3545-552",
    "category": "solar",
    "href": "/tr/urunler/3545-552",
    "image": "/product-whitebacks/3545-552.png",
    "alt": "SOLAR B 3545-552"
  },
  {
    "id": "3545-562",
    "name": "Solar Aydınlatma",
    "code": "3545-562",
    "category": "solar",
    "href": "/tr/urunler/3545-562",
    "image": "/product-whitebacks/3545-562.png",
    "alt": "Solar Aydınlatma 3545-562"
  },
  {
    "id": "3545-572",
    "name": "SEDİR A",
    "code": "3545-572",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-572",
    "image": "/product-whitebacks/3545-572.png",
    "alt": "SEDİR A 3545-572"
  },
  {
    "id": "3545-582",
    "name": "SEDİR B",
    "code": "3545-582",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-582",
    "image": "/product-whitebacks/3545-582.png",
    "alt": "SEDİR B 3545-582"
  },
  {
    "id": "3545-592",
    "name": "SEDİR C",
    "code": "3545-592",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-592",
    "image": "/product-whitebacks/3545-592.png",
    "alt": "SEDİR C 3545-592"
  },
  {
    "id": "3545-602",
    "name": "SEDİR D",
    "code": "3545-602",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-602",
    "image": "/product-whitebacks/3545-602.png",
    "alt": "SEDİR D 3545-602"
  },
  {
    "id": "3545-612",
    "name": "SEDİR E",
    "code": "3545-612",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-612",
    "image": "/product-whitebacks/3545-612.png",
    "alt": "SEDİR E 3545-612"
  },
  {
    "id": "3545-622",
    "name": "SEDİR F",
    "code": "3545-622",
    "category": "yol-ve-cadde",
    "href": "/tr/urunler/3545-622",
    "image": "/product-whitebacks/3545-622.png",
    "alt": "SEDİR F 3545-622"
  },
  {
    "id": "3545-1001",
    "name": "ERA C",
    "code": "3545-1001",
    "category": "bollard",
    "href": "/tr/urunler/3545-1001",
    "image": "/product-whitebacks/3545-1001.png",
    "alt": "ERA C 3545-1001"
  },
  {
    "id": "3545-1005",
    "name": "ERA D",
    "code": "3545-1005",
    "category": "bollard",
    "href": "/tr/urunler/3545-1005",
    "image": "/product-whitebacks/3545-1005.png",
    "alt": "ERA D 3545-1005"
  },
  {
    "id": "3545-1010",
    "name": "ERA S",
    "code": "3545-1010",
    "category": "bollard",
    "href": "/tr/urunler/3545-1010",
    "image": "/product-whitebacks/3545-1010.png",
    "alt": "ERA S 3545-1010"
  },
  {
    "id": "3545-1015",
    "name": "ERA T",
    "code": "3545-1015",
    "category": "bollard",
    "href": "/tr/urunler/3545-1015",
    "image": "/product-whitebacks/3545-1015.png",
    "alt": "ERA T 3545-1015"
  },
  {
    "id": "3545-1020",
    "name": "RİGEL B",
    "code": "3545-1020",
    "category": "bollard",
    "href": "/tr/urunler/3545-1020",
    "image": "/product-whitebacks/3545-1020.png",
    "alt": "RİGEL B 3545-1020"
  },
  {
    "id": "3545-1025",
    "name": "RİGEL C",
    "code": "3545-1025",
    "category": "bollard",
    "href": "/tr/urunler/3545-1025",
    "image": "/product-whitebacks/3545-1025.png",
    "alt": "RİGEL C 3545-1025"
  },
  {
    "id": "3545-1030",
    "name": "RİGEL K",
    "code": "3545-1030",
    "category": "bollard",
    "href": "/tr/urunler/3545-1030",
    "image": "/product-whitebacks/3545-1030.png",
    "alt": "RİGEL K 3545-1030"
  },
  {
    "id": "3545-1035",
    "name": "RİGEL S",
    "code": "3545-1035",
    "category": "bollard",
    "href": "/tr/urunler/3545-1035",
    "image": "/product-whitebacks/3545-1035.png",
    "alt": "RİGEL S 3545-1035"
  },
  {
    "id": "3545-1040",
    "name": "RİGEL Y",
    "code": "3545-1040",
    "category": "bollard",
    "href": "/tr/urunler/3545-1040",
    "image": "/product-whitebacks/3545-1040.png",
    "alt": "RİGEL Y 3545-1040"
  },
  {
    "id": "3545-1045",
    "name": "RİGEL W",
    "code": "3545-1045",
    "category": "bollard",
    "href": "/tr/urunler/3545-1045",
    "image": "/product-whitebacks/3545-1045.png",
    "alt": "RİGEL W 3545-1045"
  },
  {
    "id": "3545-1050",
    "name": "RECTA Y",
    "code": "3545-1050",
    "category": "bollard",
    "href": "/tr/urunler/3545-1050",
    "image": "/product-whitebacks/3545-1050.png",
    "alt": "RECTA Y 3545-1050"
  },
  {
    "id": "3545-1055",
    "name": "ATLAS T/S",
    "code": "3545-1055",
    "category": "bollard",
    "href": "/tr/urunler/3545-1055",
    "image": "/product-whitebacks/3545-1055.png",
    "alt": "ATLAS T/S 3545-1055"
  },
  {
    "id": "3545-1060",
    "name": "ATLAS T/Y",
    "code": "3545-1060",
    "category": "bollard",
    "href": "/tr/urunler/3545-1060",
    "image": "/product-whitebacks/3545-1060.png",
    "alt": "ATLAS T/Y 3545-1060"
  },
  {
    "id": "3545-1065",
    "name": "ATLAS Ç/S",
    "code": "3545-1065",
    "category": "bollard",
    "href": "/tr/urunler/3545-1065",
    "image": "/product-whitebacks/3545-1065.png",
    "alt": "ATLAS Ç/S 3545-1065"
  },
  {
    "id": "3545-1070",
    "name": "ATLAS S",
    "code": "3545-1070",
    "category": "bollard",
    "href": "/tr/urunler/3545-1070",
    "image": "/product-whitebacks/3545-1070.png",
    "alt": "ATLAS S 3545-1070"
  },
  {
    "id": "3545-1075",
    "name": "COBRA C",
    "code": "3545-1075",
    "category": "bollard",
    "href": "/tr/urunler/3545-1075",
    "image": "/product-whitebacks/3545-1075.png",
    "alt": "COBRA C 3545-1075"
  },
  {
    "id": "3545-1080",
    "name": "COBRA S",
    "code": "3545-1080",
    "category": "bollard",
    "href": "/tr/urunler/3545-1080",
    "image": "/product-whitebacks/3545-1080.png",
    "alt": "COBRA S 3545-1080"
  },
  {
    "id": "3545-1085",
    "name": "MİNA S",
    "code": "3545-1085",
    "category": "bollard",
    "href": "/tr/urunler/3545-1085",
    "image": "/product-whitebacks/3545-1085.png",
    "alt": "MİNA S 3545-1085"
  },
  {
    "id": "3545-1090",
    "name": "MİNA Y",
    "code": "3545-1090",
    "category": "bollard",
    "href": "/tr/urunler/3545-1090",
    "image": "/product-whitebacks/3545-1090.png",
    "alt": "MİNA Y 3545-1090"
  },
  {
    "id": "3545-1095",
    "name": "FLORA S",
    "code": "3545-1095",
    "category": "bollard",
    "href": "/tr/urunler/3545-1095",
    "image": "/product-whitebacks/3545-1095.png",
    "alt": "FLORA S 3545-1095"
  },
  {
    "id": "gl-34-2006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2006",
    "image": "/product-whitebacks/gl-34-2006.png",
    "alt": "Park & Bahçe Direği GL-34-2006"
  },
  {
    "id": "gl-34-2007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2007",
    "image": "/product-whitebacks/gl-34-2007.png",
    "alt": "Park & Bahçe Direği GL-34-2007"
  },
  {
    "id": "gl-34-2008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2008",
    "image": "/product-whitebacks/gl-34-2008.png",
    "alt": "Park & Bahçe Direği GL-34-2008"
  },
  {
    "id": "gl-34-2009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2009",
    "image": "/product-whitebacks/gl-34-2009.png",
    "alt": "Park & Bahçe Direği GL-34-2009"
  },
  {
    "id": "gl-34-2010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2010",
    "image": "/product-whitebacks/gl-34-2010.png",
    "alt": "Park & Bahçe Direği GL-34-2010"
  },
  {
    "id": "gl-34-2011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2011",
    "image": "/product-whitebacks/gl-34-2011.png",
    "alt": "Park & Bahçe Direği GL-34-2011"
  },
  {
    "id": "gl-34-2012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2012",
    "image": "/product-whitebacks/gl-34-2012.png",
    "alt": "Park & Bahçe Direği GL-34-2012"
  },
  {
    "id": "gl-34-2013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2013",
    "image": "/product-whitebacks/gl-34-2013.png",
    "alt": "Park & Bahçe Direği GL-34-2013"
  },
  {
    "id": "gl-34-2014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2014",
    "image": "/product-whitebacks/gl-34-2014.png",
    "alt": "Park & Bahçe Direği GL-34-2014"
  },
  {
    "id": "gl-34-2015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2015",
    "image": "/product-whitebacks/gl-34-2015.png",
    "alt": "Park & Bahçe Direği GL-34-2015"
  },
  {
    "id": "gl-34-2016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2016",
    "image": "/product-whitebacks/gl-34-2016.png",
    "alt": "Park & Bahçe Direği GL-34-2016"
  },
  {
    "id": "gl-34-2017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2017",
    "image": "/product-whitebacks/gl-34-2017.png",
    "alt": "Park & Bahçe Direği GL-34-2017"
  },
  {
    "id": "gl-34-2018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2018",
    "image": "/product-whitebacks/gl-34-2018.png",
    "alt": "Park & Bahçe Direği GL-34-2018"
  },
  {
    "id": "gl-34-2019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2019",
    "image": "/product-whitebacks/gl-34-2019.png",
    "alt": "Park & Bahçe Direği GL-34-2019"
  },
  {
    "id": "gl-34-2020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2020",
    "image": "/product-whitebacks/gl-34-2020.png",
    "alt": "Park & Bahçe Direği GL-34-2020"
  },
  {
    "id": "gl-34-2021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-2021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-2021",
    "image": "/product-whitebacks/gl-34-2021.png",
    "alt": "Park & Bahçe Direği GL-34-2021"
  },
  {
    "id": "gl-34-3007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3007",
    "image": "/product-whitebacks/gl-34-3007.png",
    "alt": "Park & Bahçe Direği GL-34-3007"
  },
  {
    "id": "gl-34-3008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3008",
    "image": "/product-whitebacks/gl-34-3008.png",
    "alt": "Park & Bahçe Direği GL-34-3008"
  },
  {
    "id": "gl-34-3009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3009",
    "image": "/product-whitebacks/gl-34-3009.png",
    "alt": "Park & Bahçe Direği GL-34-3009"
  },
  {
    "id": "gl-34-3010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3010",
    "image": "/product-whitebacks/gl-34-3010.png",
    "alt": "Park & Bahçe Direği GL-34-3010"
  },
  {
    "id": "gl-34-3011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3011",
    "image": "/product-whitebacks/gl-34-3011.png",
    "alt": "Park & Bahçe Direği GL-34-3011"
  },
  {
    "id": "gl-34-3012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3012",
    "image": "/product-whitebacks/gl-34-3012.png",
    "alt": "Park & Bahçe Direği GL-34-3012"
  },
  {
    "id": "gl-34-3013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3013",
    "image": "/product-whitebacks/gl-34-3013.png",
    "alt": "Park & Bahçe Direği GL-34-3013"
  },
  {
    "id": "gl-34-3014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3014",
    "image": "/product-whitebacks/gl-34-3014.png",
    "alt": "Park & Bahçe Direği GL-34-3014"
  },
  {
    "id": "gl-34-3015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3015",
    "image": "/product-whitebacks/gl-34-3015.png",
    "alt": "Park & Bahçe Direği GL-34-3015"
  },
  {
    "id": "gl-34-3016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3016",
    "image": "/product-whitebacks/gl-34-3016.png",
    "alt": "Park & Bahçe Direği GL-34-3016"
  },
  {
    "id": "gl-34-3017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3017",
    "image": "/product-whitebacks/gl-34-3017.png",
    "alt": "Park & Bahçe Direği GL-34-3017"
  },
  {
    "id": "gl-34-3018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3018",
    "image": "/product-whitebacks/gl-34-3018.png",
    "alt": "Park & Bahçe Direği GL-34-3018"
  },
  {
    "id": "gl-34-3019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3019",
    "image": "/product-whitebacks/gl-34-3019.png",
    "alt": "Park & Bahçe Direği GL-34-3019"
  },
  {
    "id": "gl-34-3020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3020",
    "image": "/product-whitebacks/gl-34-3020.png",
    "alt": "Park & Bahçe Direği GL-34-3020"
  },
  {
    "id": "gl-34-3021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3021",
    "image": "/product-whitebacks/gl-34-3021.png",
    "alt": "Park & Bahçe Direği GL-34-3021"
  },
  {
    "id": "gl-34-3022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3022",
    "image": "/product-whitebacks/gl-34-3022.png",
    "alt": "Park & Bahçe Direği GL-34-3022"
  },
  {
    "id": "gl-34-3023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3023",
    "image": "/product-whitebacks/gl-34-3023.png",
    "alt": "Park & Bahçe Direği GL-34-3023"
  },
  {
    "id": "gl-34-3024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3024",
    "image": "/product-whitebacks/gl-34-3024.png",
    "alt": "Park & Bahçe Direği GL-34-3024"
  },
  {
    "id": "gl-34-3025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3025",
    "image": "/product-whitebacks/gl-34-3025.png",
    "alt": "Park & Bahçe Direği GL-34-3025"
  },
  {
    "id": "gl-34-3026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3026",
    "image": "/product-whitebacks/gl-34-3026.png",
    "alt": "Park & Bahçe Direği GL-34-3026"
  },
  {
    "id": "gl-34-3027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3027",
    "image": "/product-whitebacks/gl-34-3027.png",
    "alt": "Park & Bahçe Direği GL-34-3027"
  },
  {
    "id": "gl-34-3028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3028",
    "image": "/product-whitebacks/gl-34-3028.png",
    "alt": "Park & Bahçe Direği GL-34-3028"
  },
  {
    "id": "gl-34-3029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3029",
    "image": "/product-whitebacks/gl-34-3029.png",
    "alt": "Park & Bahçe Direği GL-34-3029"
  },
  {
    "id": "gl-34-3030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3030",
    "image": "/product-whitebacks/gl-34-3030.png",
    "alt": "Park & Bahçe Direği GL-34-3030"
  },
  {
    "id": "gl-34-3032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3032",
    "image": "/product-whitebacks/gl-34-3032.png",
    "alt": "Park & Bahçe Direği GL-34-3032"
  },
  {
    "id": "gl-34-3031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3031",
    "image": "/product-whitebacks/gl-34-3031.png",
    "alt": "Park & Bahçe Direği GL-34-3031"
  },
  {
    "id": "gl-34-3033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3033",
    "image": "/product-whitebacks/gl-34-3033.png",
    "alt": "Park & Bahçe Direği GL-34-3033"
  },
  {
    "id": "gl-34-3034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3034",
    "image": "/product-whitebacks/gl-34-3034.png",
    "alt": "Park & Bahçe Direği GL-34-3034"
  },
  {
    "id": "gl-34-3035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3035",
    "image": "/product-whitebacks/gl-34-3035.png",
    "alt": "Park & Bahçe Direği GL-34-3035"
  },
  {
    "id": "gl-34-3037",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3037",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3037",
    "image": "/product-whitebacks/gl-34-3037.png",
    "alt": "Park & Bahçe Direği GL-34-3037"
  },
  {
    "id": "gl-34-3038",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3038",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3038",
    "image": "/product-whitebacks/gl-34-3038.png",
    "alt": "Park & Bahçe Direği GL-34-3038"
  },
  {
    "id": "gl-34-3039",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3039",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3039",
    "image": "/product-whitebacks/gl-34-3039.png",
    "alt": "Park & Bahçe Direği GL-34-3039"
  },
  {
    "id": "gl-34-3036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3036",
    "image": "/product-whitebacks/gl-34-3036.png",
    "alt": "Park & Bahçe Direği GL-34-3036"
  },
  {
    "id": "gl-34-3040",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3040",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3040",
    "image": "/product-whitebacks/gl-34-3040.png",
    "alt": "Park & Bahçe Direği GL-34-3040"
  },
  {
    "id": "gl-34-3041",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3041",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3041",
    "image": "/product-whitebacks/gl-34-3041.png",
    "alt": "Park & Bahçe Direği GL-34-3041"
  },
  {
    "id": "gl-34-3042",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3042",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3042",
    "image": "/product-whitebacks/gl-34-3042.png",
    "alt": "Park & Bahçe Direği GL-34-3042"
  },
  {
    "id": "gl-34-3043",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3043",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3043",
    "image": "/product-whitebacks/gl-34-3043.png",
    "alt": "Park & Bahçe Direği GL-34-3043"
  },
  {
    "id": "gl-34-3044",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3044",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3044",
    "image": "/product-whitebacks/gl-34-3044.png",
    "alt": "Park & Bahçe Direği GL-34-3044"
  },
  {
    "id": "gl-34-3045",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3045",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3045",
    "image": "/product-whitebacks/gl-34-3045.png",
    "alt": "Park & Bahçe Direği GL-34-3045"
  },
  {
    "id": "gl-34-3046",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3046",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3046",
    "image": "/product-whitebacks/gl-34-3046.png",
    "alt": "Park & Bahçe Direği GL-34-3046"
  },
  {
    "id": "gl-34-3047",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3047",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3047",
    "image": "/product-whitebacks/gl-34-3047.png",
    "alt": "Park & Bahçe Direği GL-34-3047"
  },
  {
    "id": "gl-34-3048",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3048",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3048",
    "image": "/product-whitebacks/gl-34-3048.png",
    "alt": "Park & Bahçe Direği GL-34-3048"
  },
  {
    "id": "gl-34-3049",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3049",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3049",
    "image": "/product-whitebacks/gl-34-3049.png",
    "alt": "Park & Bahçe Direği GL-34-3049"
  },
  {
    "id": "gl-34-3050",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3050",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3050",
    "image": "/product-whitebacks/gl-34-3050.png",
    "alt": "Park & Bahçe Direği GL-34-3050"
  },
  {
    "id": "gl-34-3051",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3051",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3051",
    "image": "/product-whitebacks/gl-34-3051.png",
    "alt": "Park & Bahçe Direği GL-34-3051"
  },
  {
    "id": "gl-34-3052",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3052",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3052",
    "image": "/product-whitebacks/gl-34-3052.png",
    "alt": "Park & Bahçe Direği GL-34-3052"
  },
  {
    "id": "gl-34-3053",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3053",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3053",
    "image": "/product-whitebacks/gl-34-3053.png",
    "alt": "Park & Bahçe Direği GL-34-3053"
  },
  {
    "id": "gl-34-3054",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3054",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3054",
    "image": "/product-whitebacks/gl-34-3054.png",
    "alt": "Park & Bahçe Direği GL-34-3054"
  },
  {
    "id": "gl-34-3055",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3055",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3055",
    "image": "/product-whitebacks/gl-34-3055.png",
    "alt": "Park & Bahçe Direği GL-34-3055"
  },
  {
    "id": "gl-34-3056",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3056",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3056",
    "image": "/product-whitebacks/gl-34-3056.png",
    "alt": "Park & Bahçe Direği GL-34-3056"
  },
  {
    "id": "gl-34-3058",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3058",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3058",
    "image": "/product-whitebacks/gl-34-3058.png",
    "alt": "Park & Bahçe Direği GL-34-3058"
  },
  {
    "id": "gl-34-3060",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3060",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3060",
    "image": "/product-whitebacks/gl-34-3060.png",
    "alt": "Park & Bahçe Direği GL-34-3060"
  },
  {
    "id": "gl-34-3061",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3061",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3061",
    "image": "/product-whitebacks/gl-34-3061.png",
    "alt": "Park & Bahçe Direği GL-34-3061"
  },
  {
    "id": "gl-34-3064",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3064",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3064",
    "image": "/product-whitebacks/gl-34-3064.png",
    "alt": "Park & Bahçe Direği GL-34-3064"
  },
  {
    "id": "gl-34-3057",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3057",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3057",
    "image": "/product-whitebacks/gl-34-3057.png",
    "alt": "Park & Bahçe Direği GL-34-3057"
  },
  {
    "id": "gl-34-3059",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3059",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3059",
    "image": "/product-whitebacks/gl-34-3059.png",
    "alt": "Park & Bahçe Direği GL-34-3059"
  },
  {
    "id": "gl-34-3062",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3062",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3062",
    "image": "/product-whitebacks/gl-34-3062.png",
    "alt": "Park & Bahçe Direği GL-34-3062"
  },
  {
    "id": "gl-34-3063",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3063",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3063",
    "image": "/product-whitebacks/gl-34-3063.png",
    "alt": "Park & Bahçe Direği GL-34-3063"
  },
  {
    "id": "gl-34-3066",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-3066",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-3066",
    "image": "/product-whitebacks/gl-34-3066.png",
    "alt": "Park & Bahçe Direği GL-34-3066"
  },
  {
    "id": "gl-34-4001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4001",
    "image": "/product-whitebacks/gl-34-4001.png",
    "alt": "Park & Bahçe Direği GL-34-4001"
  },
  {
    "id": "gl-34-4002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4002",
    "image": "/product-whitebacks/gl-34-4002.png",
    "alt": "Park & Bahçe Direği GL-34-4002"
  },
  {
    "id": "gl-34-4003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4003",
    "image": "/product-whitebacks/gl-34-4003.png",
    "alt": "Park & Bahçe Direği GL-34-4003"
  },
  {
    "id": "gl-34-4005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4005",
    "image": "/product-whitebacks/gl-34-4005.png",
    "alt": "Park & Bahçe Direği GL-34-4005"
  },
  {
    "id": "gl-34-4006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4006",
    "image": "/product-whitebacks/gl-34-4006.png",
    "alt": "Park & Bahçe Direği GL-34-4006"
  },
  {
    "id": "gl-34-4007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4007",
    "image": "/product-whitebacks/gl-34-4007.png",
    "alt": "Park & Bahçe Direği GL-34-4007"
  },
  {
    "id": "gl-34-4004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4004",
    "image": "/product-whitebacks/gl-34-4004.png",
    "alt": "Park & Bahçe Direği GL-34-4004"
  },
  {
    "id": "gl-34-4008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4008",
    "image": "/product-whitebacks/gl-34-4008.png",
    "alt": "Park & Bahçe Direği GL-34-4008"
  },
  {
    "id": "gl-34-4009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4009",
    "image": "/product-whitebacks/gl-34-4009.png",
    "alt": "Park & Bahçe Direği GL-34-4009"
  },
  {
    "id": "gl-34-4010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4010",
    "image": "/product-whitebacks/gl-34-4010.png",
    "alt": "Park & Bahçe Direği GL-34-4010"
  },
  {
    "id": "gl-34-4011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4011",
    "image": "/product-whitebacks/gl-34-4011.png",
    "alt": "Park & Bahçe Direği GL-34-4011"
  },
  {
    "id": "gl-34-4013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4013",
    "image": "/product-whitebacks/gl-34-4013.png",
    "alt": "Park & Bahçe Direği GL-34-4013"
  },
  {
    "id": "gl-34-4014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4014",
    "image": "/product-whitebacks/gl-34-4014.png",
    "alt": "Park & Bahçe Direği GL-34-4014"
  },
  {
    "id": "gl-34-4015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4015",
    "image": "/product-whitebacks/gl-34-4015.png",
    "alt": "Park & Bahçe Direği GL-34-4015"
  },
  {
    "id": "gl-34-4012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4012",
    "image": "/product-whitebacks/gl-34-4012.png",
    "alt": "Park & Bahçe Direği GL-34-4012"
  },
  {
    "id": "gl-34-4016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4016",
    "image": "/product-whitebacks/gl-34-4016.png",
    "alt": "Park & Bahçe Direği GL-34-4016"
  },
  {
    "id": "gl-34-4017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4017",
    "image": "/product-whitebacks/gl-34-4017.png",
    "alt": "Park & Bahçe Direği GL-34-4017"
  },
  {
    "id": "gl-34-4018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4018",
    "image": "/product-whitebacks/gl-34-4018.png",
    "alt": "Park & Bahçe Direği GL-34-4018"
  },
  {
    "id": "gl-34-4019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4019",
    "image": "/product-whitebacks/gl-34-4019.png",
    "alt": "Park & Bahçe Direği GL-34-4019"
  },
  {
    "id": "gl-34-4021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4021",
    "image": "/product-whitebacks/gl-34-4021.png",
    "alt": "Park & Bahçe Direği GL-34-4021"
  },
  {
    "id": "gl-34-4022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4022",
    "image": "/product-whitebacks/gl-34-4022.png",
    "alt": "Park & Bahçe Direği GL-34-4022"
  },
  {
    "id": "gl-34-4023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4023",
    "image": "/product-whitebacks/gl-34-4023.png",
    "alt": "Park & Bahçe Direği GL-34-4023"
  },
  {
    "id": "gl-34-4020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4020",
    "image": "/product-whitebacks/gl-34-4020.png",
    "alt": "Park & Bahçe Direği GL-34-4020"
  },
  {
    "id": "gl-34-4024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4024",
    "image": "/product-whitebacks/gl-34-4024.png",
    "alt": "Park & Bahçe Direği GL-34-4024"
  },
  {
    "id": "gl-34-4025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4025",
    "image": "/product-whitebacks/gl-34-4025.png",
    "alt": "Park & Bahçe Direği GL-34-4025"
  },
  {
    "id": "gl-34-4026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4026",
    "image": "/product-whitebacks/gl-34-4026.png",
    "alt": "Park & Bahçe Direği GL-34-4026"
  },
  {
    "id": "gl-34-4027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4027",
    "image": "/product-whitebacks/gl-34-4027.png",
    "alt": "Park & Bahçe Direği GL-34-4027"
  },
  {
    "id": "gl-34-4028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4028",
    "image": "/product-whitebacks/gl-34-4028.png",
    "alt": "Park & Bahçe Direği GL-34-4028"
  },
  {
    "id": "gl-34-4029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4029",
    "image": "/product-whitebacks/gl-34-4029.png",
    "alt": "Park & Bahçe Direği GL-34-4029"
  },
  {
    "id": "gl-34-4030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4030",
    "image": "/product-whitebacks/gl-34-4030.png",
    "alt": "Park & Bahçe Direği GL-34-4030"
  },
  {
    "id": "gl-34-4031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4031",
    "image": "/product-whitebacks/gl-34-4031.png",
    "alt": "Park & Bahçe Direği GL-34-4031"
  },
  {
    "id": "gl-34-4032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4032",
    "image": "/product-whitebacks/gl-34-4032.png",
    "alt": "Park & Bahçe Direği GL-34-4032"
  },
  {
    "id": "gl-34-4036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4036",
    "image": "/product-whitebacks/gl-34-4036.png",
    "alt": "Park & Bahçe Direği GL-34-4036"
  },
  {
    "id": "gl-34-5001",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5001",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5001",
    "image": "/product-whitebacks/gl-34-5001.png",
    "alt": "Park & Bahçe Direği GL-34-5001"
  },
  {
    "id": "gl-34-4033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4033",
    "image": "/product-whitebacks/gl-34-4033.png",
    "alt": "Park & Bahçe Direği GL-34-4033"
  },
  {
    "id": "gl-34-4034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4034",
    "image": "/product-whitebacks/gl-34-4034.png",
    "alt": "Park & Bahçe Direği GL-34-4034"
  },
  {
    "id": "gl-34-4035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-4035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-4035",
    "image": "/product-whitebacks/gl-34-4035.png",
    "alt": "Park & Bahçe Direği GL-34-4035"
  },
  {
    "id": "gl-34-5002",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5002",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5002",
    "image": "/product-whitebacks/gl-34-5002.png",
    "alt": "Park & Bahçe Direği GL-34-5002"
  },
  {
    "id": "gl-34-5003",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5003",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5003",
    "image": "/product-whitebacks/gl-34-5003.png",
    "alt": "Park & Bahçe Direği GL-34-5003"
  },
  {
    "id": "gl-34-5004",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5004",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5004",
    "image": "/product-whitebacks/gl-34-5004.png",
    "alt": "Park & Bahçe Direği GL-34-5004"
  },
  {
    "id": "gl-34-5016",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5016",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5016",
    "image": "/product-whitebacks/gl-34-5016.png",
    "alt": "Park & Bahçe Direği GL-34-5016"
  },
  {
    "id": "gl-34-5013",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5013",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5013",
    "image": "/product-whitebacks/gl-34-5013.png",
    "alt": "Park & Bahçe Direği GL-34-5013"
  },
  {
    "id": "gl-34-5014",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5014",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5014",
    "image": "/product-whitebacks/gl-34-5014.png",
    "alt": "Park & Bahçe Direği GL-34-5014"
  },
  {
    "id": "gl-34-5015",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5015",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5015",
    "image": "/product-whitebacks/gl-34-5015.png",
    "alt": "Park & Bahçe Direği GL-34-5015"
  },
  {
    "id": "gl-34-5017",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5017",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5017",
    "image": "/product-whitebacks/gl-34-5017.png",
    "alt": "Park & Bahçe Direği GL-34-5017"
  },
  {
    "id": "gl-34-5018",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5018",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5018",
    "image": "/product-whitebacks/gl-34-5018.png",
    "alt": "Park & Bahçe Direği GL-34-5018"
  },
  {
    "id": "gl-34-5019",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5019",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5019",
    "image": "/product-whitebacks/gl-34-5019.png",
    "alt": "Park & Bahçe Direği GL-34-5019"
  },
  {
    "id": "gl-34-5020",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5020",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5020",
    "image": "/product-whitebacks/gl-34-5020.png",
    "alt": "Park & Bahçe Direği GL-34-5020"
  },
  {
    "id": "gl-34-5005",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5005",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5005",
    "image": "/product-whitebacks/gl-34-5005.png",
    "alt": "Park & Bahçe Direği GL-34-5005"
  },
  {
    "id": "gl-34-5008",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5008",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5008",
    "image": "/product-whitebacks/gl-34-5008.png",
    "alt": "Park & Bahçe Direği GL-34-5008"
  },
  {
    "id": "gl-34-5006",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5006",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5006",
    "image": "/product-whitebacks/gl-34-5006.png",
    "alt": "Park & Bahçe Direği GL-34-5006"
  },
  {
    "id": "gl-34-5007",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5007",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5007",
    "image": "/product-whitebacks/gl-34-5007.png",
    "alt": "Park & Bahçe Direği GL-34-5007"
  },
  {
    "id": "gl-34-5009",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5009",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5009",
    "image": "/product-whitebacks/gl-34-5009.png",
    "alt": "Park & Bahçe Direği GL-34-5009"
  },
  {
    "id": "gl-34-5010",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5010",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5010",
    "image": "/product-whitebacks/gl-34-5010.png",
    "alt": "Park & Bahçe Direği GL-34-5010"
  },
  {
    "id": "gl-34-5011",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5011",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5011",
    "image": "/product-whitebacks/gl-34-5011.png",
    "alt": "Park & Bahçe Direği GL-34-5011"
  },
  {
    "id": "gl-34-5012",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5012",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5012",
    "image": "/product-whitebacks/gl-34-5012.png",
    "alt": "Park & Bahçe Direği GL-34-5012"
  },
  {
    "id": "gl-34-5021",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5021",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5021",
    "image": "/product-whitebacks/gl-34-5021.png",
    "alt": "Park & Bahçe Direği GL-34-5021"
  },
  {
    "id": "gl-34-5022",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5022",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5022",
    "image": "/product-whitebacks/gl-34-5022.png",
    "alt": "Park & Bahçe Direği GL-34-5022"
  },
  {
    "id": "gl-34-5023",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5023",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5023",
    "image": "/product-whitebacks/gl-34-5023.png",
    "alt": "Park & Bahçe Direği GL-34-5023"
  },
  {
    "id": "gl-34-5024",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5024",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5024",
    "image": "/product-whitebacks/gl-34-5024.png",
    "alt": "Park & Bahçe Direği GL-34-5024"
  },
  {
    "id": "gl-34-5025",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5025",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5025",
    "image": "/product-whitebacks/gl-34-5025.png",
    "alt": "Park & Bahçe Direği GL-34-5025"
  },
  {
    "id": "gl-34-5026",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5026",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5026",
    "image": "/product-whitebacks/gl-34-5026.png",
    "alt": "Park & Bahçe Direği GL-34-5026"
  },
  {
    "id": "gl-34-5027",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5027",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5027",
    "image": "/product-whitebacks/gl-34-5027.png",
    "alt": "Park & Bahçe Direği GL-34-5027"
  },
  {
    "id": "gl-34-5028",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5028",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5028",
    "image": "/product-whitebacks/gl-34-5028.png",
    "alt": "Park & Bahçe Direği GL-34-5028"
  },
  {
    "id": "gl-34-5029",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5029",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5029",
    "image": "/product-whitebacks/gl-34-5029.png",
    "alt": "Park & Bahçe Direği GL-34-5029"
  },
  {
    "id": "gl-34-5030",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5030",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5030",
    "image": "/product-whitebacks/gl-34-5030.png",
    "alt": "Park & Bahçe Direği GL-34-5030"
  },
  {
    "id": "gl-34-5031",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5031",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5031",
    "image": "/product-whitebacks/gl-34-5031.png",
    "alt": "Park & Bahçe Direği GL-34-5031"
  },
  {
    "id": "gl-34-5032",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5032",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5032",
    "image": "/product-whitebacks/gl-34-5032.png",
    "alt": "Park & Bahçe Direği GL-34-5032"
  },
  {
    "id": "gl-34-5034",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5034",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5034",
    "image": "/product-whitebacks/gl-34-5034.png",
    "alt": "Park & Bahçe Direği GL-34-5034"
  },
  {
    "id": "gl-34-5035",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5035",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5035",
    "image": "/product-whitebacks/gl-34-5035.png",
    "alt": "Park & Bahçe Direği GL-34-5035"
  },
  {
    "id": "gl-34-5033",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5033",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5033",
    "image": "/product-whitebacks/gl-34-5033.png",
    "alt": "Park & Bahçe Direği GL-34-5033"
  },
  {
    "id": "gl-34-5036",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5036",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5036",
    "image": "/product-whitebacks/gl-34-5036.png",
    "alt": "Park & Bahçe Direği GL-34-5036"
  },
  {
    "id": "gl-34-5037",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5037",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5037",
    "image": "/product-whitebacks/gl-34-5037.png",
    "alt": "Park & Bahçe Direği GL-34-5037"
  },
  {
    "id": "gl-34-5038",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5038",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5038",
    "image": "/product-whitebacks/gl-34-5038.png",
    "alt": "Park & Bahçe Direği GL-34-5038"
  },
  {
    "id": "gl-34-5039",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5039",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5039",
    "image": "/product-whitebacks/gl-34-5039.png",
    "alt": "Park & Bahçe Direği GL-34-5039"
  },
  {
    "id": "gl-34-5040",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5040",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5040",
    "image": "/product-whitebacks/gl-34-5040.png",
    "alt": "Park & Bahçe Direği GL-34-5040"
  },
  {
    "id": "gl-34-5041",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5041",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5041",
    "image": "/product-whitebacks/gl-34-5041.png",
    "alt": "Park & Bahçe Direği GL-34-5041"
  },
  {
    "id": "gl-34-5042",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5042",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5042",
    "image": "/product-whitebacks/gl-34-5042.png",
    "alt": "Park & Bahçe Direği GL-34-5042"
  },
  {
    "id": "gl-34-5043",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5043",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5043",
    "image": "/product-whitebacks/gl-34-5043.png",
    "alt": "Park & Bahçe Direği GL-34-5043"
  },
  {
    "id": "gl-34-5044",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5044",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5044",
    "image": "/product-whitebacks/gl-34-5044.png",
    "alt": "Park & Bahçe Direği GL-34-5044"
  },
  {
    "id": "gl-34-5045",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5045",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5045",
    "image": "/product-whitebacks/gl-34-5045.png",
    "alt": "Park & Bahçe Direği GL-34-5045"
  },
  {
    "id": "gl-34-5046",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5046",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5046",
    "image": "/product-whitebacks/gl-34-5046.png",
    "alt": "Park & Bahçe Direği GL-34-5046"
  },
  {
    "id": "gl-34-5049",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5049",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5049",
    "image": "/product-whitebacks/gl-34-5049.png",
    "alt": "Park & Bahçe Direği GL-34-5049"
  },
  {
    "id": "gl-34-5047",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5047",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5047",
    "image": "/product-whitebacks/gl-34-5047.png",
    "alt": "Park & Bahçe Direği GL-34-5047"
  },
  {
    "id": "gl-34-5051",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5051",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5051",
    "image": "/product-whitebacks/gl-34-5051.png",
    "alt": "Park & Bahçe Direği GL-34-5051"
  },
  {
    "id": "gl-34-5050",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5050",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5050",
    "image": "/product-whitebacks/gl-34-5050.png",
    "alt": "Park & Bahçe Direği GL-34-5050"
  },
  {
    "id": "gl-34-5048",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5048",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5048",
    "image": "/product-whitebacks/gl-34-5048.png",
    "alt": "Park & Bahçe Direği GL-34-5048"
  },
  {
    "id": "gl-34-5052",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5052",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5052",
    "image": "/product-whitebacks/gl-34-5052.png",
    "alt": "Park & Bahçe Direği GL-34-5052"
  },
  {
    "id": "gl-34-5053",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5053",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5053",
    "image": "/product-whitebacks/gl-34-5053.png",
    "alt": "Park & Bahçe Direği GL-34-5053"
  },
  {
    "id": "gl-34-5054",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5054",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5054",
    "image": "/product-whitebacks/gl-34-5054.png",
    "alt": "Park & Bahçe Direği GL-34-5054"
  },
  {
    "id": "gl-34-5055",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5055",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5055",
    "image": "/product-whitebacks/gl-34-5055.png",
    "alt": "Park & Bahçe Direği GL-34-5055"
  },
  {
    "id": "gl-34-5058",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5058",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5058",
    "image": "/product-whitebacks/gl-34-5058.png",
    "alt": "Park & Bahçe Direği GL-34-5058"
  },
  {
    "id": "gl-34-5057",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5057",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5057",
    "image": "/product-whitebacks/gl-34-5057.png",
    "alt": "Park & Bahçe Direği GL-34-5057"
  },
  {
    "id": "gl-34-5059",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5059",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5059",
    "image": "/product-whitebacks/gl-34-5059.png",
    "alt": "Park & Bahçe Direği GL-34-5059"
  },
  {
    "id": "gl-34-5056",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5056",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5056",
    "image": "/product-whitebacks/gl-34-5056.png",
    "alt": "Park & Bahçe Direği GL-34-5056"
  },
  {
    "id": "gl-34-5060",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5060",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5060",
    "image": "/product-whitebacks/gl-34-5060.png",
    "alt": "Park & Bahçe Direği GL-34-5060"
  },
  {
    "id": "gl-34-5061",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5061",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5061",
    "image": "/product-whitebacks/gl-34-5061.png",
    "alt": "Park & Bahçe Direği GL-34-5061"
  },
  {
    "id": "gl-34-5062",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5062",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5062",
    "image": "/product-whitebacks/gl-34-5062.png",
    "alt": "Park & Bahçe Direği GL-34-5062"
  },
  {
    "id": "gl-34-5063",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5063",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5063",
    "image": "/product-whitebacks/gl-34-5063.png",
    "alt": "Park & Bahçe Direği GL-34-5063"
  },
  {
    "id": "gl-34-5064",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5064",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5064",
    "image": "/product-whitebacks/gl-34-5064.png",
    "alt": "Park & Bahçe Direği GL-34-5064"
  },
  {
    "id": "gl-34-5065",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5065",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5065",
    "image": "/product-whitebacks/gl-34-5065.png",
    "alt": "Park & Bahçe Direği GL-34-5065"
  },
  {
    "id": "gl-34-5066",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5066",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5066",
    "image": "/product-whitebacks/gl-34-5066.png",
    "alt": "Park & Bahçe Direği GL-34-5066"
  },
  {
    "id": "gl-34-5067",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5067",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5067",
    "image": "/product-whitebacks/gl-34-5067.png",
    "alt": "Park & Bahçe Direği GL-34-5067"
  },
  {
    "id": "gl-34-5068",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5068",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5068",
    "image": "/product-whitebacks/gl-34-5068.png",
    "alt": "Park & Bahçe Direği GL-34-5068"
  },
  {
    "id": "gl-34-5069",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5069",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5069",
    "image": "/product-whitebacks/gl-34-5069.png",
    "alt": "Park & Bahçe Direği GL-34-5069"
  },
  {
    "id": "gl-34-5070",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5070",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5070",
    "image": "/product-whitebacks/gl-34-5070.png",
    "alt": "Park & Bahçe Direği GL-34-5070"
  },
  {
    "id": "gl-34-5071",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5071",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5071",
    "image": "/product-whitebacks/gl-34-5071.png",
    "alt": "Park & Bahçe Direği GL-34-5071"
  },
  {
    "id": "gl-34-5072",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5072",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5072",
    "image": "/product-whitebacks/gl-34-5072.png",
    "alt": "Park & Bahçe Direği GL-34-5072"
  },
  {
    "id": "gl-34-5073",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5073",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5073",
    "image": "/product-whitebacks/gl-34-5073.png",
    "alt": "Park & Bahçe Direği GL-34-5073"
  },
  {
    "id": "gl-34-50714",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-50714",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-50714",
    "image": "/product-whitebacks/gl-34-50714.png",
    "alt": "Park & Bahçe Direği GL-34-50714"
  },
  {
    "id": "gl-34-5075",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5075",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5075",
    "image": "/product-whitebacks/gl-34-5075.png",
    "alt": "Park & Bahçe Direği GL-34-5075"
  },
  {
    "id": "gl-34-5076",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5076",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5076",
    "image": "/product-whitebacks/gl-34-5076.png",
    "alt": "Park & Bahçe Direği GL-34-5076"
  },
  {
    "id": "gl-34-5077",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5077",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5077",
    "image": "/product-whitebacks/gl-34-5077.png",
    "alt": "Park & Bahçe Direği GL-34-5077"
  },
  {
    "id": "gl-34-5078",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5078",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5078",
    "image": "/product-whitebacks/gl-34-5078.png",
    "alt": "Park & Bahçe Direği GL-34-5078"
  },
  {
    "id": "gl-34-5079",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5079",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5079",
    "image": "/product-whitebacks/gl-34-5079.png",
    "alt": "Park & Bahçe Direği GL-34-5079"
  },
  {
    "id": "gl-34-5080",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5080",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5080",
    "image": "/product-whitebacks/gl-34-5080.png",
    "alt": "Park & Bahçe Direği GL-34-5080"
  },
  {
    "id": "gl-34-5084",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5084",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5084",
    "image": "/product-whitebacks/gl-34-5084.png",
    "alt": "Park & Bahçe Direği GL-34-5084"
  },
  {
    "id": "gl-34-5081",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5081",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5081",
    "image": "/product-whitebacks/gl-34-5081.png",
    "alt": "Park & Bahçe Direği GL-34-5081"
  },
  {
    "id": "gl-34-5082",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5082",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5082",
    "image": "/product-whitebacks/gl-34-5082.png",
    "alt": "Park & Bahçe Direği GL-34-5082"
  },
  {
    "id": "gl-34-5083",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5083",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5083",
    "image": "/product-whitebacks/gl-34-5083.png",
    "alt": "Park & Bahçe Direği GL-34-5083"
  },
  {
    "id": "gl-34-5085",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5085",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5085",
    "image": "/product-whitebacks/gl-34-5085.png",
    "alt": "Park & Bahçe Direği GL-34-5085"
  },
  {
    "id": "gl-34-5086",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5086",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5086",
    "image": "/product-whitebacks/gl-34-5086.png",
    "alt": "Park & Bahçe Direği GL-34-5086"
  },
  {
    "id": "gl-34-5087",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5087",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5087",
    "image": "/product-whitebacks/gl-34-5087.png",
    "alt": "Park & Bahçe Direği GL-34-5087"
  },
  {
    "id": "gl-34-5090",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5090",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5090",
    "image": "/product-whitebacks/gl-34-5090.png",
    "alt": "Park & Bahçe Direği GL-34-5090"
  },
  {
    "id": "gl-34-5089",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5089",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5089",
    "image": "/product-whitebacks/gl-34-5089.png",
    "alt": "Park & Bahçe Direği GL-34-5089"
  },
  {
    "id": "gl-34-5091",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5091",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5091",
    "image": "/product-whitebacks/gl-34-5091.png",
    "alt": "Park & Bahçe Direği GL-34-5091"
  },
  {
    "id": "gl-34-5088",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5088",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5088",
    "image": "/product-whitebacks/gl-34-5088.png",
    "alt": "Park & Bahçe Direği GL-34-5088"
  },
  {
    "id": "gl-34-5092",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5092",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5092",
    "image": "/product-whitebacks/gl-34-5092.png",
    "alt": "Park & Bahçe Direği GL-34-5092"
  },
  {
    "id": "gl-34-5093",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5093",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5093",
    "image": "/product-whitebacks/gl-34-5093.png",
    "alt": "Park & Bahçe Direği GL-34-5093"
  },
  {
    "id": "gl-34-5094",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5094",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5094",
    "image": "/product-whitebacks/gl-34-5094.png",
    "alt": "Park & Bahçe Direği GL-34-5094"
  },
  {
    "id": "gl-34-5095",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5095",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5095",
    "image": "/product-whitebacks/gl-34-5095.png",
    "alt": "Park & Bahçe Direği GL-34-5095"
  },
  {
    "id": "gl-34-5096",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5096",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5096",
    "image": "/product-whitebacks/gl-34-5096.png",
    "alt": "Park & Bahçe Direği GL-34-5096"
  },
  {
    "id": "gl-34-5097",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5097",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5097",
    "image": "/product-whitebacks/gl-34-5097.png",
    "alt": "Park & Bahçe Direği GL-34-5097"
  },
  {
    "id": "gl-34-5098",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5098",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5098",
    "image": "/product-whitebacks/gl-34-5098.png",
    "alt": "Park & Bahçe Direği GL-34-5098"
  },
  {
    "id": "gl-34-5099",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5099",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5099",
    "image": "/product-whitebacks/gl-34-5099.png",
    "alt": "Park & Bahçe Direği GL-34-5099"
  },
  {
    "id": "gl-34-5100",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5100",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5100",
    "image": "/product-whitebacks/gl-34-5100.png",
    "alt": "Park & Bahçe Direği GL-34-5100"
  },
  {
    "id": "gl-34-5101",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5101",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5101",
    "image": "/product-whitebacks/gl-34-5101.png",
    "alt": "Park & Bahçe Direği GL-34-5101"
  },
  {
    "id": "gl-34-5102",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5102",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5102",
    "image": "/product-whitebacks/gl-34-5102.png",
    "alt": "Park & Bahçe Direği GL-34-5102"
  },
  {
    "id": "gl-34-5103",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5103",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5103",
    "image": "/product-whitebacks/gl-34-5103.png",
    "alt": "Park & Bahçe Direği GL-34-5103"
  },
  {
    "id": "gl-34-5104",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5104",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5104",
    "image": "/product-whitebacks/gl-34-5104.png",
    "alt": "Park & Bahçe Direği GL-34-5104"
  },
  {
    "id": "gl-34-5105",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5105",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5105",
    "image": "/product-whitebacks/gl-34-5105.png",
    "alt": "Park & Bahçe Direği GL-34-5105"
  },
  {
    "id": "gl-34-5106",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5106",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5106",
    "image": "/product-whitebacks/gl-34-5106.png",
    "alt": "Park & Bahçe Direği GL-34-5106"
  },
  {
    "id": "gl-34-5107",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5107",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5107",
    "image": "/product-whitebacks/gl-34-5107.png",
    "alt": "Park & Bahçe Direği GL-34-5107"
  },
  {
    "id": "gl-34-5108",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5108",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5108",
    "image": "/product-whitebacks/gl-34-5108.png",
    "alt": "Park & Bahçe Direği GL-34-5108"
  },
  {
    "id": "gl-34-5109",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5109",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5109",
    "image": "/product-whitebacks/gl-34-5109.png",
    "alt": "Park & Bahçe Direği GL-34-5109"
  },
  {
    "id": "gl-34-5110",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5110",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5110",
    "image": "/product-whitebacks/gl-34-5110.png",
    "alt": "Park & Bahçe Direği GL-34-5110"
  },
  {
    "id": "gl-34-5113",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5113",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5113",
    "image": "/product-whitebacks/gl-34-5113.png",
    "alt": "Park & Bahçe Direği GL-34-5113"
  },
  {
    "id": "gl-34-5112",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5112",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5112",
    "image": "/product-whitebacks/gl-34-5112.png",
    "alt": "Park & Bahçe Direği GL-34-5112"
  },
  {
    "id": "gl-34-5111",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5111",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5111",
    "image": "/product-whitebacks/gl-34-5111.png",
    "alt": "Park & Bahçe Direği GL-34-5111"
  },
  {
    "id": "gl-34-5114",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5114",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5114",
    "image": "/product-whitebacks/gl-34-5114.png",
    "alt": "Park & Bahçe Direği GL-34-5114"
  },
  {
    "id": "gl-34-5115",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5115",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5115",
    "image": "/product-whitebacks/gl-34-5115.png",
    "alt": "Park & Bahçe Direği GL-34-5115"
  },
  {
    "id": "gl-34-5116",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5116",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5116",
    "image": "/product-whitebacks/gl-34-5116.png",
    "alt": "Park & Bahçe Direği GL-34-5116"
  },
  {
    "id": "gl-34-5120",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5120",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5120",
    "image": "/product-whitebacks/gl-34-5120.png",
    "alt": "Park & Bahçe Direği GL-34-5120"
  },
  {
    "id": "gl-34-5121",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5121",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5121",
    "image": "/product-whitebacks/gl-34-5121.png",
    "alt": "Park & Bahçe Direği GL-34-5121"
  },
  {
    "id": "gl-34-5122",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5122",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5122",
    "image": "/product-whitebacks/gl-34-5122.png",
    "alt": "Park & Bahçe Direği GL-34-5122"
  },
  {
    "id": "gl-34-5123",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5123",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5123",
    "image": "/product-whitebacks/gl-34-5123.png",
    "alt": "Park & Bahçe Direği GL-34-5123"
  },
  {
    "id": "gl-34-5124",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5124",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5124",
    "image": "/product-whitebacks/gl-34-5124.png",
    "alt": "Park & Bahçe Direği GL-34-5124"
  },
  {
    "id": "gl-34-5117",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5117",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5117",
    "image": "/product-whitebacks/gl-34-5117.png",
    "alt": "Park & Bahçe Direği GL-34-5117"
  },
  {
    "id": "gl-34-5118",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5118",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5118",
    "image": "/product-whitebacks/gl-34-5118.png",
    "alt": "Park & Bahçe Direği GL-34-5118"
  },
  {
    "id": "gl-34-5119",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5119",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5119",
    "image": "/product-whitebacks/gl-34-5119.png",
    "alt": "Park & Bahçe Direği GL-34-5119"
  },
  {
    "id": "gl-34-5128",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5128",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5128",
    "image": "/product-whitebacks/gl-34-5128.png",
    "alt": "Park & Bahçe Direği GL-34-5128"
  },
  {
    "id": "gl-34-5126",
    "name": "Park & Bahçe Direği",
    "code": "GL-34-5126",
    "category": "park-bahce",
    "href": "/tr/urunler/gl-34-5126",
    "image": "/product-whitebacks/gl-34-5126.png",
    "alt": "Park & Bahçe Direği GL-34-5126"
  },
  {
    "id": "gl-34-9063",
    "name": "Küre Glop",
    "code": "GL-34-9063",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9063",
    "image": "/product-whitebacks/gl-34-9063.png",
    "alt": "Küre Glop GL-34-9063"
  },
  {
    "id": "gl-34-9062",
    "name": "Küre Glop",
    "code": "GL-34-9062",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9062",
    "image": "/product-whitebacks/gl-34-9062.png",
    "alt": "Küre Glop GL-34-9062"
  },
  {
    "id": "gl-34-9061",
    "name": "Küre Glop",
    "code": "GL-34-9061",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9061",
    "image": "/product-whitebacks/gl-34-9061.png",
    "alt": "Küre Glop GL-34-9061"
  },
  {
    "id": "gl-34-9064",
    "name": "Küre Glop",
    "code": "GL-34-9064",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9064",
    "image": "/product-whitebacks/gl-34-9064.png",
    "alt": "Küre Glop GL-34-9064"
  },
  {
    "id": "gl-34-9066",
    "name": "Küre Glop",
    "code": "GL-34-9066",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9066",
    "image": "/product-whitebacks/gl-34-9066.png",
    "alt": "Küre Glop GL-34-9066"
  },
  {
    "id": "gl-34-9067",
    "name": "Küre Glop",
    "code": "GL-34-9067",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9067",
    "image": "/product-whitebacks/gl-34-9067.png",
    "alt": "Küre Glop GL-34-9067"
  },
  {
    "id": "gl-34-9065",
    "name": "Küre Glop",
    "code": "GL-34-9065",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9065",
    "image": "/product-whitebacks/gl-34-9065.png",
    "alt": "Küre Glop GL-34-9065"
  },
  {
    "id": "gl-34-9068",
    "name": "Küre Glop",
    "code": "GL-34-9068",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9068",
    "image": "/product-whitebacks/gl-34-9068.png",
    "alt": "Küre Glop GL-34-9068"
  },
  {
    "id": "gl-34-9070",
    "name": "Küre Glop",
    "code": "GL-34-9070",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9070",
    "image": "/product-whitebacks/gl-34-9070.png",
    "alt": "Küre Glop GL-34-9070"
  },
  {
    "id": "gl-34-9071",
    "name": "Küre Glop",
    "code": "GL-34-9071",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9071",
    "image": "/product-whitebacks/gl-34-9071.png",
    "alt": "Küre Glop GL-34-9071"
  },
  {
    "id": "gl-34-9069",
    "name": "Küre Glop",
    "code": "GL-34-9069",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9069",
    "image": "/product-whitebacks/gl-34-9069.png",
    "alt": "Küre Glop GL-34-9069"
  },
  {
    "id": "gl-34-9072",
    "name": "Küre Glop",
    "code": "GL-34-9072",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9072",
    "image": "/product-whitebacks/gl-34-9072.png",
    "alt": "Küre Glop GL-34-9072"
  },
  {
    "id": "gl-34-9074",
    "name": "Küre Glop",
    "code": "GL-34-9074",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9074",
    "image": "/product-whitebacks/gl-34-9074.png",
    "alt": "Küre Glop GL-34-9074"
  },
  {
    "id": "gl-34-9075",
    "name": "Küre Glop",
    "code": "GL-34-9075",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9075",
    "image": "/product-whitebacks/gl-34-9075.png",
    "alt": "Küre Glop GL-34-9075"
  },
  {
    "id": "gl-34-9073",
    "name": "Küre Glop",
    "code": "GL-34-9073",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9073",
    "image": "/product-whitebacks/gl-34-9073.png",
    "alt": "Küre Glop GL-34-9073"
  },
  {
    "id": "gl-34-9076",
    "name": "Küre Glop",
    "code": "GL-34-9076",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9076",
    "image": "/product-whitebacks/gl-34-9076.png",
    "alt": "Küre Glop GL-34-9076"
  },
  {
    "id": "gl-34-9078",
    "name": "Küre Glop",
    "code": "GL-34-9078",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9078",
    "image": "/product-whitebacks/gl-34-9078.png",
    "alt": "Küre Glop GL-34-9078"
  },
  {
    "id": "gl-34-9077",
    "name": "Küre Glop",
    "code": "GL-34-9077",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9077",
    "image": "/product-whitebacks/gl-34-9077.png",
    "alt": "Küre Glop GL-34-9077"
  },
  {
    "id": "gl-34-9081",
    "name": "Küre Glop",
    "code": "GL-34-9081",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9081",
    "image": "/product-whitebacks/gl-34-9081.png",
    "alt": "Küre Glop GL-34-9081"
  },
  {
    "id": "gl-34-9079",
    "name": "Küre Glop",
    "code": "GL-34-9079",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9079",
    "image": "/product-whitebacks/gl-34-9079.png",
    "alt": "Küre Glop GL-34-9079"
  },
  {
    "id": "gl-34-9080",
    "name": "Küre Glop",
    "code": "GL-34-9080",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9080",
    "image": "/product-whitebacks/gl-34-9080.png",
    "alt": "Küre Glop GL-34-9080"
  },
  {
    "id": "gl-34-9084",
    "name": "Küre Glop",
    "code": "GL-34-9084",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9084",
    "image": "/product-whitebacks/gl-34-9084.png",
    "alt": "Küre Glop GL-34-9084"
  },
  {
    "id": "gl-34-9082",
    "name": "Küre Glop",
    "code": "GL-34-9082",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9082",
    "image": "/product-whitebacks/gl-34-9082.png",
    "alt": "Küre Glop GL-34-9082"
  },
  {
    "id": "gl-34-9083",
    "name": "Küre Glop",
    "code": "GL-34-9083",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9083",
    "image": "/product-whitebacks/gl-34-9083.png",
    "alt": "Küre Glop GL-34-9083"
  },
  {
    "id": "gl-34-9087",
    "name": "Küre Glop",
    "code": "GL-34-9087",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9087",
    "image": "/product-whitebacks/gl-34-9087.png",
    "alt": "Küre Glop GL-34-9087"
  },
  {
    "id": "gl-34-9085",
    "name": "Küre Glop",
    "code": "GL-34-9085",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9085",
    "image": "/product-whitebacks/gl-34-9085.png",
    "alt": "Küre Glop GL-34-9085"
  },
  {
    "id": "gl-34-9086",
    "name": "Küre Glop",
    "code": "GL-34-9086",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9086",
    "image": "/product-whitebacks/gl-34-9086.png",
    "alt": "Küre Glop GL-34-9086"
  },
  {
    "id": "gl-34-9090",
    "name": "Küre Glop",
    "code": "GL-34-9090",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9090",
    "image": "/product-whitebacks/gl-34-9090.png",
    "alt": "Küre Glop GL-34-9090"
  },
  {
    "id": "gl-34-9088",
    "name": "Küre Glop",
    "code": "GL-34-9088",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9088",
    "image": "/product-whitebacks/gl-34-9088.png",
    "alt": "Küre Glop GL-34-9088"
  },
  {
    "id": "gl-34-9089",
    "name": "Küre Glop",
    "code": "GL-34-9089",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9089",
    "image": "/product-whitebacks/gl-34-9089.png",
    "alt": "Küre Glop GL-34-9089"
  },
  {
    "id": "gl-34-9093",
    "name": "Küre Glop",
    "code": "GL-34-9093",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9093",
    "image": "/product-whitebacks/gl-34-9093.png",
    "alt": "Küre Glop GL-34-9093"
  },
  {
    "id": "gl-34-9091",
    "name": "Küre Glop",
    "code": "GL-34-9091",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9091",
    "image": "/product-whitebacks/gl-34-9091.png",
    "alt": "Küre Glop GL-34-9091"
  },
  {
    "id": "gl-34-9092",
    "name": "Küre Glop",
    "code": "GL-34-9092",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9092",
    "image": "/product-whitebacks/gl-34-9092.png",
    "alt": "Küre Glop GL-34-9092"
  },
  {
    "id": "gl-34-9094",
    "name": "Küre Glop",
    "code": "GL-34-9094",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9094",
    "image": "/product-whitebacks/gl-34-9094.png",
    "alt": "Küre Glop GL-34-9094"
  },
  {
    "id": "gl-34-9096",
    "name": "Küre Glop",
    "code": "GL-34-9096",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9096",
    "image": "/product-whitebacks/gl-34-9096.png",
    "alt": "Küre Glop GL-34-9096"
  },
  {
    "id": "gl-34-9095",
    "name": "Küre Glop",
    "code": "GL-34-9095",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9095",
    "image": "/product-whitebacks/gl-34-9095.png",
    "alt": "Küre Glop GL-34-9095"
  },
  {
    "id": "gl-34-9097",
    "name": "Küre Glop",
    "code": "GL-34-9097",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9097",
    "image": "/product-whitebacks/gl-34-9097.png",
    "alt": "Küre Glop GL-34-9097"
  },
  {
    "id": "gl-34-9099",
    "name": "Küre Glop",
    "code": "GL-34-9099",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9099",
    "image": "/product-whitebacks/gl-34-9099.png",
    "alt": "Küre Glop GL-34-9099"
  },
  {
    "id": "gl-34-9098",
    "name": "Küre Glop",
    "code": "GL-34-9098",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9098",
    "image": "/product-whitebacks/gl-34-9098.png",
    "alt": "Küre Glop GL-34-9098"
  },
  {
    "id": "gl-34-9004",
    "name": "Küre Glop",
    "code": "GL-34-9004",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9004",
    "image": "/product-whitebacks/gl-34-9004.png",
    "alt": "Küre Glop GL-34-9004"
  },
  {
    "id": "gl-34-9102",
    "name": "Küre Glop",
    "code": "GL-34-9102",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9102",
    "image": "/product-whitebacks/gl-34-9102.png",
    "alt": "Küre Glop GL-34-9102"
  },
  {
    "id": "gl-34-9101",
    "name": "Küre Glop",
    "code": "GL-34-9101",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9101",
    "image": "/product-whitebacks/gl-34-9101.png",
    "alt": "Küre Glop GL-34-9101"
  },
  {
    "id": "gl-34-9105",
    "name": "Küre Glop",
    "code": "GL-34-9105",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9105",
    "image": "/product-whitebacks/gl-34-9105.png",
    "alt": "Küre Glop GL-34-9105"
  },
  {
    "id": "gl-34-9103",
    "name": "Küre Glop",
    "code": "GL-34-9103",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9103",
    "image": "/product-whitebacks/gl-34-9103.png",
    "alt": "Küre Glop GL-34-9103"
  },
  {
    "id": "gl-34-9109",
    "name": "Küre Glop",
    "code": "GL-34-9109",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9109",
    "image": "/product-whitebacks/gl-34-9109.png",
    "alt": "Küre Glop GL-34-9109"
  },
  {
    "id": "gl-34-9107",
    "name": "Küre Glop",
    "code": "GL-34-9107",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9107",
    "image": "/product-whitebacks/gl-34-9107.png",
    "alt": "Küre Glop GL-34-9107"
  },
  {
    "id": "gl-34-9106",
    "name": "Küre Glop",
    "code": "GL-34-9106",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9106",
    "image": "/product-whitebacks/gl-34-9106.png",
    "alt": "Küre Glop GL-34-9106"
  },
  {
    "id": "gl-34-9104",
    "name": "Küre Glop",
    "code": "GL-34-9104",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9104",
    "image": "/product-whitebacks/gl-34-9104.png",
    "alt": "Küre Glop GL-34-9104"
  },
  {
    "id": "gl-34-9110",
    "name": "Küre Glop",
    "code": "GL-34-9110",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9110",
    "image": "/product-whitebacks/gl-34-9110.png",
    "alt": "Küre Glop GL-34-9110"
  },
  {
    "id": "gl-34-9108",
    "name": "Küre Glop",
    "code": "GL-34-9108",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9108",
    "image": "/product-whitebacks/gl-34-9108.png",
    "alt": "Küre Glop GL-34-9108"
  },
  {
    "id": "gl-34-9115",
    "name": "Küre Glop",
    "code": "GL-34-9115",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9115",
    "image": "/product-whitebacks/gl-34-9115.png",
    "alt": "Küre Glop GL-34-9115"
  },
  {
    "id": "gl-34-9117",
    "name": "Küre Glop",
    "code": "GL-34-9117",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9117",
    "image": "/product-whitebacks/gl-34-9117.png",
    "alt": "Küre Glop GL-34-9117"
  },
  {
    "id": "gl-34-9116",
    "name": "Küre Glop",
    "code": "GL-34-9116",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9116",
    "image": "/product-whitebacks/gl-34-9116.png",
    "alt": "Küre Glop GL-34-9116"
  },
  {
    "id": "gl-34-9112",
    "name": "Küre Glop",
    "code": "GL-34-9112",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9112",
    "image": "/product-whitebacks/gl-34-9112.png",
    "alt": "Küre Glop GL-34-9112"
  },
  {
    "id": "gl-34-9114",
    "name": "Küre Glop",
    "code": "GL-34-9114",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9114",
    "image": "/product-whitebacks/gl-34-9114.png",
    "alt": "Küre Glop GL-34-9114"
  },
  {
    "id": "gl-34-9111",
    "name": "Küre Glop",
    "code": "GL-34-9111",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9111",
    "image": "/product-whitebacks/gl-34-9111.png",
    "alt": "Küre Glop GL-34-9111"
  },
  {
    "id": "gl-34-9113",
    "name": "Küre Glop",
    "code": "GL-34-9113",
    "category": "gloplar",
    "href": "/tr/urunler/gl-34-9113",
    "image": "/product-whitebacks/gl-34-9113.png",
    "alt": "Küre Glop GL-34-9113"
  },
  {
    "id": "gl-100s",
    "name": "Küre Glop",
    "code": "GL-100S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100s",
    "image": "/product-whitebacks/gl-100s.png",
    "alt": "Küre Glop GL-100S"
  },
  {
    "id": "gl-100o",
    "name": "Küre Glop",
    "code": "GL-100O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100o",
    "image": "/product-whitebacks/gl-100o.png",
    "alt": "Küre Glop GL-100O"
  },
  {
    "id": "gl-100f",
    "name": "Küre Glop",
    "code": "GL-100F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-100f",
    "image": "/product-whitebacks/gl-100f.png",
    "alt": "Küre Glop GL-100F"
  },
  {
    "id": "gl-101s",
    "name": "Küre Glop",
    "code": "GL-101S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101s",
    "image": "/product-whitebacks/gl-101s.png",
    "alt": "Küre Glop GL-101S"
  },
  {
    "id": "gl-101o",
    "name": "Küre Glop",
    "code": "GL-101O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101o",
    "image": "/product-whitebacks/gl-101o.png",
    "alt": "Küre Glop GL-101O"
  },
  {
    "id": "gl-101f",
    "name": "Küre Glop",
    "code": "GL-101F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101f",
    "image": "/product-whitebacks/gl-101f.png",
    "alt": "Küre Glop GL-101F"
  },
  {
    "id": "gl-121s",
    "name": "Küre Glop",
    "code": "GL-121S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-121s",
    "image": "/product-whitebacks/gl-121s.png",
    "alt": "Küre Glop GL-121S"
  },
  {
    "id": "gl-101t-o",
    "name": "Küre Glop",
    "code": "GL-101T-O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o",
    "image": "/product-whitebacks/gl-101t-o.png",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-s",
    "name": "Küre Glop",
    "code": "GL-101T-S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-s",
    "image": "/product-whitebacks/gl-101t-s.png",
    "alt": "Küre Glop GL-101T-S"
  },
  {
    "id": "gl-101t-s-2-2",
    "name": "Küre Glop",
    "code": "GL-101T-S-2-2",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-s-2-2",
    "image": "/product-whitebacks/gl-101t-s-2-2.png",
    "alt": "Küre Glop GL-101T-S"
  },
  {
    "id": "gl-101t-o-3-2",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-2",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-2",
    "image": "/product-whitebacks/gl-101t-o-3-2.png",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-3",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-3",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-3",
    "image": "/product-whitebacks/gl-101t-o-3-3.png",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-4",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-4",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-4",
    "image": "/product-whitebacks/gl-101t-o-3-4.png",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-101t-o-3-5",
    "name": "Küre Glop",
    "code": "GL-101T-O-3-5",
    "category": "gloplar",
    "href": "/tr/urunler/gl-101t-o-3-5",
    "image": "/product-whitebacks/gl-101t-o-3-5.png",
    "alt": "Küre Glop GL-101T-O"
  },
  {
    "id": "gl-103s",
    "name": "Küre Glop",
    "code": "GL-103S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103s",
    "image": "/product-whitebacks/gl-103s.png",
    "alt": "Küre Glop GL-103S"
  },
  {
    "id": "gl-103o",
    "name": "Küre Glop",
    "code": "GL-103O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103o",
    "image": "/product-whitebacks/gl-103o.png",
    "alt": "Küre Glop GL-103O"
  },
  {
    "id": "gl-103f",
    "name": "Küre Glop",
    "code": "GL-103F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103f",
    "image": "/product-whitebacks/gl-103f.png",
    "alt": "Küre Glop GL-103F"
  },
  {
    "id": "gl-123s",
    "name": "Küre Glop",
    "code": "GL-123S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-123s",
    "image": "/product-whitebacks/gl-123s.png",
    "alt": "Küre Glop GL-123S"
  },
  {
    "id": "gl-105s",
    "name": "Küre Glop",
    "code": "GL-105S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105s",
    "image": "/product-whitebacks/gl-105s.png",
    "alt": "Küre Glop GL-105S"
  },
  {
    "id": "gl-105o",
    "name": "Küre Glop",
    "code": "GL-105O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105o",
    "image": "/product-whitebacks/gl-105o.png",
    "alt": "Küre Glop GL-105O"
  },
  {
    "id": "gl-125s",
    "name": "Küre Glop",
    "code": "GL-125S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-125s",
    "image": "/product-whitebacks/gl-125s.png",
    "alt": "Küre Glop GL-125S"
  },
  {
    "id": "gl-105f",
    "name": "Küre Glop",
    "code": "GL-105F",
    "category": "gloplar",
    "href": "/tr/urunler/gl-105f",
    "image": "/product-whitebacks/gl-105f.png",
    "alt": "Küre Glop GL-105F"
  },
  {
    "id": "gl-135o",
    "name": "Küre Glop",
    "code": "GL-135O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-135o",
    "image": "/product-whitebacks/gl-135o.png",
    "alt": "Küre Glop GL-135O"
  },
  {
    "id": "gl-133o",
    "name": "Küre Glop",
    "code": "GL-133O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-133o",
    "image": "/product-whitebacks/gl-133o.png",
    "alt": "Küre Glop GL-133O"
  },
  {
    "id": "gl-131o",
    "name": "Küre Glop",
    "code": "GL-131O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-131o",
    "image": "/product-whitebacks/gl-131o.png",
    "alt": "Küre Glop GL-131O"
  },
  {
    "id": "gl-132o",
    "name": "Küre Glop",
    "code": "GL-132O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-132o",
    "image": "/product-whitebacks/gl-132o.png",
    "alt": "Küre Glop GL-132O"
  },
  {
    "id": "gl-141s",
    "name": "Küre Glop",
    "code": "GL-141S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-141s",
    "image": "/product-whitebacks/gl-141s.png",
    "alt": "Küre Glop GL-141S"
  },
  {
    "id": "gl-141o",
    "name": "Küre Glop",
    "code": "GL-141O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-141o",
    "image": "/product-whitebacks/gl-141o.png",
    "alt": "Küre Glop GL-141O"
  },
  {
    "id": "gl-151s",
    "name": "Küre Glop",
    "code": "GL-151S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-151s",
    "image": "/product-whitebacks/gl-151s.png",
    "alt": "Küre Glop GL-151S"
  },
  {
    "id": "gl-142o",
    "name": "Küre Glop",
    "code": "GL-142O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-142o",
    "image": "/product-whitebacks/gl-142o.png",
    "alt": "Küre Glop GL-142O"
  },
  {
    "id": "gl-142s",
    "name": "Küre Glop",
    "code": "GL-142S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-142s",
    "image": "/product-whitebacks/gl-142s.png",
    "alt": "Küre Glop GL-142S"
  },
  {
    "id": "gl-152s",
    "name": "Küre Glop",
    "code": "GL-152S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-152s",
    "image": "/product-whitebacks/gl-152s.png",
    "alt": "Küre Glop GL-152S"
  },
  {
    "id": "gl-161s",
    "name": "Küre Glop",
    "code": "GL-161S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-161s",
    "image": "/product-whitebacks/gl-161s.png",
    "alt": "Küre Glop GL-161S"
  },
  {
    "id": "gl-161o",
    "name": "Küre Glop",
    "code": "GL-161O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-161o",
    "image": "/product-whitebacks/gl-161o.png",
    "alt": "Küre Glop GL-161O"
  },
  {
    "id": "gl-171s",
    "name": "Küre Glop",
    "code": "GL-171S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-171s",
    "image": "/product-whitebacks/gl-171s.png",
    "alt": "Küre Glop GL-171S"
  },
  {
    "id": "gl-181s",
    "name": "Küre Glop",
    "code": "GL-181S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181s",
    "image": "/product-whitebacks/gl-181s.png",
    "alt": "Küre Glop GL-181S"
  },
  {
    "id": "gl-181o",
    "name": "Küre Glop",
    "code": "GL-181O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181o",
    "image": "/product-whitebacks/gl-181o.png",
    "alt": "Küre Glop GL-181O"
  },
  {
    "id": "gl-181sf",
    "name": "Küre Glop",
    "code": "GL-181SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-181sf",
    "image": "/product-whitebacks/gl-181sf.png",
    "alt": "Küre Glop GL-181SF"
  },
  {
    "id": "gl-191s",
    "name": "Küre Glop",
    "code": "GL-191S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191s",
    "image": "/product-whitebacks/gl-191s.png",
    "alt": "Küre Glop GL-191S"
  },
  {
    "id": "gl-191o",
    "name": "Küre Glop",
    "code": "GL-191O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191o",
    "image": "/product-whitebacks/gl-191o.png",
    "alt": "Küre Glop GL-191O"
  },
  {
    "id": "gl-191sf",
    "name": "Küre Glop",
    "code": "GL-191SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-191sf",
    "image": "/product-whitebacks/gl-191sf.png",
    "alt": "Küre Glop GL-191SF"
  },
  {
    "id": "gl-201s",
    "name": "Küre Glop",
    "code": "GL-201S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201s",
    "image": "/product-whitebacks/gl-201s.png",
    "alt": "Küre Glop GL-201S"
  },
  {
    "id": "gl-201o",
    "name": "Küre Glop",
    "code": "GL-201O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201o",
    "image": "/product-whitebacks/gl-201o.png",
    "alt": "Küre Glop GL-201O"
  },
  {
    "id": "gl-201sf",
    "name": "Küre Glop",
    "code": "GL-201SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-201sf",
    "image": "/product-whitebacks/gl-201sf.png",
    "alt": "Küre Glop GL-201SF"
  },
  {
    "id": "gl-211s",
    "name": "Küre Glop",
    "code": "GL-211S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211s",
    "image": "/product-whitebacks/gl-211s.png",
    "alt": "Küre Glop GL-211S"
  },
  {
    "id": "gl-211o",
    "name": "Küre Glop",
    "code": "GL-211O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211o",
    "image": "/product-whitebacks/gl-211o.png",
    "alt": "Küre Glop GL-211O"
  },
  {
    "id": "gl-211sf",
    "name": "Küre Glop",
    "code": "GL-211SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-211sf",
    "image": "/product-whitebacks/gl-211sf.png",
    "alt": "Küre Glop GL-211SF"
  },
  {
    "id": "gl-221s",
    "name": "Küre Glop",
    "code": "GL-221S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221s",
    "image": "/product-whitebacks/gl-221s.png",
    "alt": "Küre Glop GL-221S"
  },
  {
    "id": "gl-221o",
    "name": "Küre Glop",
    "code": "GL-221O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221o",
    "image": "/product-whitebacks/gl-221o.png",
    "alt": "Küre Glop GL-221O"
  },
  {
    "id": "gl-221sf",
    "name": "Küre Glop",
    "code": "GL-221SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-221sf",
    "image": "/product-whitebacks/gl-221sf.png",
    "alt": "Küre Glop GL-221SF"
  },
  {
    "id": "gl-222o",
    "name": "Küre Glop",
    "code": "GL-222O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222o",
    "image": "/product-whitebacks/gl-222o.png",
    "alt": "Küre Glop GL-222O"
  },
  {
    "id": "gl-222s",
    "name": "Küre Glop",
    "code": "GL-222S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222s",
    "image": "/product-whitebacks/gl-222s.png",
    "alt": "Küre Glop GL-222S"
  },
  {
    "id": "gl-222sf",
    "name": "Küre Glop",
    "code": "GL-222SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222sf",
    "image": "/product-whitebacks/gl-222sf.png",
    "alt": "Küre Glop GL-222SF"
  },
  {
    "id": "gl-222bs",
    "name": "Küre Glop",
    "code": "GL-222BS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-222bs",
    "image": "/product-whitebacks/gl-222bs.png",
    "alt": "Küre Glop GL-222BS"
  },
  {
    "id": "gl-223o",
    "name": "Küre Glop",
    "code": "GL-223O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223o",
    "image": "/product-whitebacks/gl-223o.png",
    "alt": "Küre Glop GL-223O"
  },
  {
    "id": "gl-223s",
    "name": "Küre Glop",
    "code": "GL-223S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223s",
    "image": "/product-whitebacks/gl-223s.png",
    "alt": "Küre Glop GL-223S"
  },
  {
    "id": "gl-223sf",
    "name": "Küre Glop",
    "code": "GL-223SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223sf",
    "image": "/product-whitebacks/gl-223sf.png",
    "alt": "Küre Glop GL-223SF"
  },
  {
    "id": "gl-223bs",
    "name": "Küre Glop",
    "code": "GL-223BS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-223bs",
    "image": "/product-whitebacks/gl-223bs.png",
    "alt": "Küre Glop GL-223BS"
  },
  {
    "id": "gl-225o",
    "name": "Küre Glop",
    "code": "GL-225O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225o",
    "image": "/product-whitebacks/gl-225o.png",
    "alt": "Küre Glop GL-225O"
  },
  {
    "id": "gl-225s",
    "name": "Küre Glop",
    "code": "GL-225S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225s",
    "image": "/product-whitebacks/gl-225s.png",
    "alt": "Küre Glop GL-225S"
  },
  {
    "id": "gl-225sf",
    "name": "Küre Glop",
    "code": "GL-225SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-225sf",
    "image": "/product-whitebacks/gl-225sf.png",
    "alt": "Küre Glop GL-225SF"
  },
  {
    "id": "gl-224o",
    "name": "Küre Glop",
    "code": "GL-224O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224o",
    "image": "/product-whitebacks/gl-224o.png",
    "alt": "Küre Glop GL-224O"
  },
  {
    "id": "gl-224s",
    "name": "Küre Glop",
    "code": "GL-224S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224s",
    "image": "/product-whitebacks/gl-224s.png",
    "alt": "Küre Glop GL-224S"
  },
  {
    "id": "gl-224sf",
    "name": "Küre Glop",
    "code": "GL-224SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-224sf",
    "image": "/product-whitebacks/gl-224sf.png",
    "alt": "Küre Glop GL-224SF"
  },
  {
    "id": "gl-232s",
    "name": "Küre Glop",
    "code": "GL-232S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232s",
    "image": "/product-whitebacks/gl-232s.png",
    "alt": "Küre Glop GL-232S"
  },
  {
    "id": "gl-232sf",
    "name": "Küre Glop",
    "code": "GL-232SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232sf",
    "image": "/product-whitebacks/gl-232sf.png",
    "alt": "Küre Glop GL-232SF"
  },
  {
    "id": "gl-232o",
    "name": "Küre Glop",
    "code": "GL-232O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232o",
    "image": "/product-whitebacks/gl-232o.png",
    "alt": "Küre Glop GL-232O"
  },
  {
    "id": "gl-232ss",
    "name": "Küre Glop",
    "code": "GL-232SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-232ss",
    "image": "/product-whitebacks/gl-232ss.png",
    "alt": "Küre Glop GL-232SS"
  },
  {
    "id": "gl-233o",
    "name": "Küre Glop",
    "code": "GL-233O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233o",
    "image": "/product-whitebacks/gl-233o.png",
    "alt": "Küre Glop GL-233O"
  },
  {
    "id": "gl-233sf",
    "name": "Küre Glop",
    "code": "GL-233SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233sf",
    "image": "/product-whitebacks/gl-233sf.png",
    "alt": "Küre Glop GL-233SF"
  },
  {
    "id": "gl-233s",
    "name": "Küre Glop",
    "code": "GL-233S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-233s",
    "image": "/product-whitebacks/gl-233s.png",
    "alt": "Küre Glop GL-233S"
  },
  {
    "id": "gl-234s",
    "name": "Küre Glop",
    "code": "GL-234S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234s",
    "image": "/product-whitebacks/gl-234s.png",
    "alt": "Küre Glop GL-234S"
  },
  {
    "id": "gl-234sf",
    "name": "Küre Glop",
    "code": "GL-234SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234sf",
    "image": "/product-whitebacks/gl-234sf.png",
    "alt": "Küre Glop GL-234SF"
  },
  {
    "id": "gl-234o",
    "name": "Küre Glop",
    "code": "GL-234O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234o",
    "image": "/product-whitebacks/gl-234o.png",
    "alt": "Küre Glop GL-234O"
  },
  {
    "id": "gl-234ss",
    "name": "Küre Glop",
    "code": "GL-234SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-234ss",
    "image": "/product-whitebacks/gl-234ss.png",
    "alt": "Küre Glop GL-234SS"
  },
  {
    "id": "gl-243o",
    "name": "Küre Glop",
    "code": "GL-243O",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243o",
    "image": "/product-whitebacks/gl-243o.png",
    "alt": "Küre Glop GL-243O"
  },
  {
    "id": "gl-243sf",
    "name": "Küre Glop",
    "code": "GL-243SF",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243sf",
    "image": "/product-whitebacks/gl-243sf.png",
    "alt": "Küre Glop GL-243SF"
  },
  {
    "id": "gl-243s",
    "name": "Küre Glop",
    "code": "GL-243S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-243s",
    "image": "/product-whitebacks/gl-243s.png",
    "alt": "Küre Glop GL-243S"
  },
  {
    "id": "gl-244ss",
    "name": "Küre Glop",
    "code": "GL-244SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244ss",
    "image": "/product-whitebacks/gl-244ss.png",
    "alt": "Küre Glop GL-244SS"
  },
  {
    "id": "gl-244sb",
    "name": "Küre Glop",
    "code": "GL-244SB",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244sb",
    "image": "/product-whitebacks/gl-244sb.png",
    "alt": "Küre Glop GL-244SB"
  },
  {
    "id": "gl-244s",
    "name": "Küre Glop",
    "code": "GL-244S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-244s",
    "image": "/product-whitebacks/gl-244s.png",
    "alt": "Küre Glop GL-244S"
  },
  {
    "id": "gl-245ss",
    "name": "Küre Glop",
    "code": "GL-245SS",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245ss",
    "image": "/product-whitebacks/gl-245ss.png",
    "alt": "Küre Glop GL-245SS"
  },
  {
    "id": "gl-245sb",
    "name": "Küre Glop",
    "code": "GL-245SB",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245sb",
    "image": "/product-whitebacks/gl-245sb.png",
    "alt": "Küre Glop GL-245SB"
  },
  {
    "id": "gl-245s",
    "name": "Küre Glop",
    "code": "GL-245S",
    "category": "gloplar",
    "href": "/tr/urunler/gl-245s",
    "image": "/product-whitebacks/gl-245s.png",
    "alt": "Küre Glop GL-245S"
  },
  {
    "id": "gl-121r",
    "name": "Küre Glop",
    "code": "GL-121R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-121r",
    "image": "/product-whitebacks/gl-121r.png",
    "alt": "Küre Glop GL-121R"
  },
  {
    "id": "gl-122r",
    "name": "Küre Glop",
    "code": "GL-122R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-122r",
    "image": "/product-whitebacks/gl-122r.png",
    "alt": "Küre Glop GL-122R"
  },
  {
    "id": "gl-103r",
    "name": "Küre Glop",
    "code": "GL-103R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-103r",
    "image": "/product-whitebacks/gl-103r.png",
    "alt": "Küre Glop GL-103R"
  },
  {
    "id": "gl-135r",
    "name": "Küre Glop",
    "code": "GL-135R",
    "category": "gloplar",
    "href": "/tr/urunler/gl-135r",
    "image": "/product-whitebacks/gl-135r.png",
    "alt": "Küre Glop GL-135R"
  },
  {
    "id": "gl-301",
    "name": "Aksesuar",
    "code": "GL-301",
    "category": "gloplar",
    "href": "/tr/urunler/gl-301",
    "image": "/product-whitebacks/gl-301.png",
    "alt": "Aksesuar GL-301"
  },
  {
    "id": "gl-302",
    "name": "Aksesuar",
    "code": "GL-302",
    "category": "gloplar",
    "href": "/tr/urunler/gl-302",
    "image": "/product-whitebacks/gl-302.png",
    "alt": "Aksesuar GL-302"
  },
  {
    "id": "gl-351",
    "name": "Aksesuar",
    "code": "GL-351",
    "category": "gloplar",
    "href": "/tr/urunler/gl-351",
    "image": "/product-whitebacks/gl-351.png",
    "alt": "Aksesuar GL-351"
  },
  {
    "id": "gl-352",
    "name": "Aksesuar",
    "code": "GL-352",
    "category": "gloplar",
    "href": "/tr/urunler/gl-352",
    "image": "/product-whitebacks/gl-352.png",
    "alt": "Aksesuar GL-352"
  },
  {
    "id": "gl-401",
    "name": "Aksesuar",
    "code": "GL-401",
    "category": "gloplar",
    "href": "/tr/urunler/gl-401",
    "image": "/product-whitebacks/gl-401.png",
    "alt": "Aksesuar GL-401"
  },
  {
    "id": "gl-451",
    "name": "Aksesuar",
    "code": "GL-451",
    "category": "gloplar",
    "href": "/tr/urunler/gl-451",
    "image": "/product-whitebacks/gl-451.png",
    "alt": "Aksesuar GL-451"
  },
  {
    "id": "gl-452",
    "name": "Aksesuar",
    "code": "GL-452",
    "category": "gloplar",
    "href": "/tr/urunler/gl-452",
    "image": "/product-whitebacks/gl-452.png",
    "alt": "Aksesuar GL-452"
  },
  {
    "id": "gl-501",
    "name": "Aksesuar",
    "code": "GL-501",
    "category": "gloplar",
    "href": "/tr/urunler/gl-501",
    "image": "/product-whitebacks/gl-501.png",
    "alt": "Aksesuar GL-501"
  },
  {
    "id": "gl-551",
    "name": "Aksesuar",
    "code": "GL-551",
    "category": "gloplar",
    "href": "/tr/urunler/gl-551",
    "image": "/product-whitebacks/gl-551.png",
    "alt": "Aksesuar GL-551"
  },
  {
    "id": "gl-601",
    "name": "Aksesuar",
    "code": "GL-601",
    "category": "gloplar",
    "href": "/tr/urunler/gl-601",
    "image": "/product-whitebacks/gl-601.png",
    "alt": "Aksesuar GL-601"
  },
  {
    "id": "gl-605",
    "name": "Aksesuar",
    "code": "GL-605",
    "category": "gloplar",
    "href": "/tr/urunler/gl-605",
    "image": "/product-whitebacks/gl-605.png",
    "alt": "Aksesuar GL-605"
  },
  {
    "id": "gl-701",
    "name": "Aksesuar",
    "code": "GL-701",
    "category": "gloplar",
    "href": "/tr/urunler/gl-701",
    "image": "/product-whitebacks/gl-701.png",
    "alt": "Aksesuar GL-701"
  }
] as const satisfies readonly ToprakProduct[];
