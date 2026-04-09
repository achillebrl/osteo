import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Conseils ostéopathie | Vincent Magoni, La Réunion",
  description:
    "Articles et conseils de votre ostéopathe à La Possession (La Réunion 974). Sciatique, lombalgie, nourrisson, grossesse : les réponses à vos questions sur l'ostéopathie.",
  alternates: {
    canonical: "https://www.vincentmagoni-osteopathe.fr/blog",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "var(--creme)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--bordeaux)" }}
            >
              Ressources
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--noir)" }}
            >
              Blog & Conseils
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Articles rédigés par Vincent Magoni, ostéopathe D.O. à La Possession
              (La Réunion), pour vous aider à mieux comprendre vos douleurs et
              prendre soin de votre corps.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{formatDate(article.date)}</span>
                  <span>·</span>
                  <span>{article.readTime} min de lecture</span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--noir)",
                  }}
                >
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--bordeaux)" }}
                >
                  Lire l&apos;article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
