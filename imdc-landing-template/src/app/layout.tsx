import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Toprak Aydınlatma | Dış Mekan Aydınlatma Çözümleri",
  description: "Yol, cadde, park, bahçe ve mimari projeler için dayanıklı dış mekan aydınlatma ürünleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
