import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DOCTOLIB_URL } from "@/lib/data";

const BASE_URL = "https://www.vincentmagoni-osteopathe.fr";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Vincent Magoni Ostéopathe La Réunion`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "Vincent Magoni" }],
    alternates: {
      canonical: `${BASE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Vincent Magoni"],
      locale: "fr_FR",
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Vincent Magoni",
      jobTitle: "Ostéopathe D.O.",
      url: BASE_URL,
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Vincent Magoni — Ostéopathe D.O.",
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/${article.slug}`,
    mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--creme)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Accueil
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <span>›</span>
            <span className="text-gray-500 truncate">{article.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readTime} min de lecture</span>
              <span>·</span>
              <span>Par Vincent Magoni, Ostéopathe D.O.</span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--noir)" }}
            >
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 pl-4"
              style={{ borderColor: "var(--bordeaux)" }}>
              {article.excerpt}
            </p>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ backgroundColor: "var(--bordeaux)" }}
          >
            <p
              className="text-white text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Besoin d&apos;une consultation ?
            </p>
            <p className="text-white/80 text-sm mb-6">
              Prenez rendez-vous avec Vincent Magoni, ostéopathe D.O. à La Possession,
              La Réunion.
            </p>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--bordeaux)" }}
            >
              Prendre RDV sur Doctolib
            </a>
          </div>

          {/* Back */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--bordeaux)" }}
            >
              ← Tous les articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
