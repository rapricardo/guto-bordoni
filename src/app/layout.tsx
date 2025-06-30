import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Guto Bordoni - Fotógrafo Profissional | Campinas - SP",
  description: "Fotógrafo profissional em Campinas com mais de 20 anos de experiência. Especialista em fotografia com inteligência artificial, ensaios, moda, produto e publicidade.",
  keywords: "fotografo campinas, fotografia profissional, ensaio fotografico campinas, fotografo moda, fotografia produto, fotografo publicidade campinas",
  authors: [{ name: "Guto Bordoni" }],
  creator: "Guto Bordoni",
  publisher: "Guto Bordoni Fotografia",
  robots: "index, follow",
  verification: {
    google: "google-site-verification-code", // Adicionar código do Google Search Console
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gutobordoni.com.br",
    title: "Guto Bordoni - Fotógrafo Profissional | Campinas - SP",
    description: "Fotógrafo profissional em Campinas com mais de 20 anos de experiência. Especialista em fotografia com inteligência artificial.",
    siteName: "Guto Bordoni Fotografia",
    images: [
      {
        url: "https://gutobordoni.com.br/imgs/fotografo-guto-bordoni.webp",
        width: 1200,
        height: 630,
        alt: "Guto Bordoni - Fotógrafo Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guto Bordoni - Fotógrafo Profissional | Campinas - SP",
    description: "Fotógrafo profissional em Campinas com mais de 20 anos de experiência.",
    images: ["https://gutobordoni.com.br/imgs/fotografo-guto-bordoni.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} font-montserrat antialiased bg-[#6c605b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
