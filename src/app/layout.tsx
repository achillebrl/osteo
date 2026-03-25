import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vincent Magoni — Ostéopathe à La Possession (La Réunion)",
  description:
    "Cabinet d'ostéopathie à La Possession. Vincent Magoni, ostéopathe D.O. Consultations adultes, enfants, sportifs, femmes enceintes. Prise de RDV en ligne sur Doctolib.",
  keywords: [
    "ostéopathe",
    "La Possession",
    "La Réunion",
    "Vincent Magoni",
    "ostéopathie",
    "consultation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
