import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

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
    "Vincent Magoni, ostéopathe D.O. à La Possession (La Réunion 974). Consultations adultes, nourrissons, sportifs, femmes enceintes. Remboursable mutuelle. RDV Doctolib.",
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
    images: [
      {
        url: "https://www.magoni-osteopathe.re/images/about-consultation.jpg",
        width: 1200,
        height: 630,
        alt: "Vincent Magoni, ostéopathe D.O. à La Possession, La Réunion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Magoni — Ostéopathe D.O. à La Possession, La Réunion",
    description:
      "Consultations d'ostéopathie à La Possession (974). Adultes, nourrissons, sportifs, femmes enceintes. RDV sur Doctolib.",
    images: ["https://www.magoni-osteopathe.re/images/about-consultation.jpg"],
  },
  alternates: {
    canonical: "https://www.magoni-osteopathe.re",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Vincent Magoni — Ostéopathe D.O.",
  url: "https://www.magoni-osteopathe.re",
  telephone: "+262693992742",
  priceRange: "60–75 €",
  medicalSpecialty: "Osteopathic Medicine",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maison de Santé Sakisoigne, Rue Moulin Joli",
    addressLocality: "La Possession",
    postalCode: "97419",
    addressRegion: "La Réunion",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  employee: {
    "@type": "Person",
    name: "Vincent Magoni",
    jobTitle: "Ostéopathe D.O.",
    identifier: "RPPS 10110390886",
  },
  sameAs: [
    "https://www.doctolib.fr/osteopathe/la-possession/vincent-magoni",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <div className="pb-16 md:pb-0">{children}</div>
        <FloatingCTA />
      </body>
    </html>
  );
}
