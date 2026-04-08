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
  title: "Vincent Magoni — Ostéopathe D.O. à La Possession, La Réunion",
  description:
    "Vincent Magoni, ostéopathe D.O. à La Possession (La Réunion 974). Consultations pour adultes, nourrissons, enfants, sportifs et femmes enceintes. Remboursement mutuelle. Prise de RDV en ligne sur Doctolib.",
  keywords: [
    "ostéopathe La Possession",
    "ostéopathe La Réunion",
    "ostéopathe 974",
    "Vincent Magoni",
    "ostéopathie",
    "consultation ostéopathe",
    "remboursement mutuelle ostéopathie",
    "ostéopathe nourrisson",
    "ostéopathe sportif",
    "ostéopathe femme enceinte",
    "mal de dos La Réunion",
    "rdv ostéopathe Doctolib",
  ],
  openGraph: {
    title: "Vincent Magoni — Ostéopathe D.O. à La Possession, La Réunion",
    description:
      "Consultations d'ostéopathie à La Possession (974). Adultes, nourrissons, sportifs, femmes enceintes. Remboursable par les mutuelles. RDV sur Doctolib.",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.vincentmagoni-osteopathe.fr",
  },
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
