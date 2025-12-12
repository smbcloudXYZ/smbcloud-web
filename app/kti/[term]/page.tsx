import { allKtis } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import { genPageMetadata } from "../../seo";
import siteMetadata from "@/content/siteMetadata";

export async function generateStaticParams() {
  return allKtis.map((kti) => ({
    term: kti.term,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const kti = allKtis.find((kti) => kti.term === term);

  if (!kti) {
    return {};
  }

  return {
    ...genPageMetadata({
      title: `${kti.title} - Kamus Teknologi Informasi`,
      description: kti.description,
    }),
    keywords: [
      kti.term,
      kti.englishTerm,
      kti.category,
      ...(kti.tags || []),
      "kamus teknologi informasi",
      "istilah IT",
      "bahasa Indonesia",
    ].filter(Boolean),
    openGraph: {
      title: `${kti.title} - KTI`,
      description: kti.description,
      url: `${siteMetadata.siteUrl}/kti/${kti.term}`,
      siteName: siteMetadata.title,
      locale: "id_ID",
      type: "article",
      publishedTime: kti.lastmod,
      modifiedTime: kti.lastmod,
      authors: [siteMetadata.author],
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/kti/${kti.term}`,
    },
  };
}

export default async function KtiTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const kti = allKtis.find((kti) => kti.term === term);

  if (!kti || !kti.published) {
    notFound();
  }

  // Get related terms
  const relatedKtis = kti.relatedTerms
    ? allKtis.filter(
        (k) =>
          k.published &&
          k.term !== kti.term &&
          kti.relatedTerms?.includes(k.term),
      )
    : [];

  // Get same category terms
  const sameCategoryKtis = allKtis
    .filter(
      (k) =>
        k.published &&
        k.term !== kti.term &&
        k.category === kti.category &&
        !kti.relatedTerms?.includes(k.term),
    )
    .slice(0, 6);

  const difficultyColor = {
    pemula: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    menengah: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    lanjut:
      "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
  };

  const difficultyLabel = {
    pemula: "🌱 Pemula",
    menengah: "📈 Menengah",
    lanjut: "🚀 Lanjut",
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6 not-prose">
        <ol className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/kti"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              KTI
            </Link>
          </li>
          <li>/</li>
          <li className="text-slate-900 dark:text-slate-100 font-medium">
            {kti.term}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="mb-2">{kti.title}</h1>
            {kti.englishTerm && (
              <p className="text-lg text-slate-600 dark:text-slate-400 italic mt-0">
                {kti.englishTerm}
              </p>
            )}
            {kti.acronym && (
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                Akronim:{" "}
                <span className="font-mono font-bold">{kti.acronym}</span>
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 not-prose">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor[kti.difficulty]}`}
            >
              {difficultyLabel[kti.difficulty]}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {kti.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-0">
            {kti.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      {kti.tags && kti.tags.length > 0 && (
        <div className="mb-8 not-prose">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              Tags:
            </span>
            {kti.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <article className="mb-12">
        <Mdx code={kti.body.code} />
      </article>

      {/* Related Terms */}
      {relatedKtis.length > 0 && (
        <div className="mb-8 border-t border-slate-200 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold mb-4">🔗 Istilah Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            {relatedKtis.map((relatedKti) => (
              <Link
                key={relatedKti.term}
                href={relatedKti.slug}
                className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                      {relatedKti.title}
                    </h3>
                    {relatedKti.englishTerm && (
                      <p className="text-xs text-slate-500 mb-2">
                        {relatedKti.englishTerm}
                      </p>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {relatedKti.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${difficultyColor[relatedKti.difficulty]}`}
                  >
                    {relatedKti.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Same Category Terms */}
      {sameCategoryKtis.length > 0 && (
        <div className="mb-8 border-t border-slate-200 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold mb-4">
            📚 Istilah Lainnya dalam {kti.category}
          </h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {sameCategoryKtis.map((categoryKti) => (
              <Link
                key={categoryKti.term}
                href={categoryKti.slug}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {categoryKti.term}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 not-prose">
        <Link
          href="/kti"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          ← Kembali ke Daftar Istilah
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg not-prose">
        <h3 className="text-xl font-bold mb-2 text-white">
          Deploy Aplikasi Anda dengan smbCloud
        </h3>
        <p className="mb-4 text-blue-50">
          Platform cloud terbaik untuk developer Indonesia. Deploy NodeJS,
          Swift, dan Ruby dengan mudah.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
        >
          Pelajari Lebih Lanjut →
        </Link>
      </div>

      {/* Metadata Footer */}
      <div className="mt-8 text-xs text-slate-500 dark:text-slate-500 not-prose">
        <p>
          Terakhir diperbarui:{" "}
          {new Date(kti.lastmod).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
