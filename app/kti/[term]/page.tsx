import type { Metadata } from "next";
import { allKtis } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "../../seo";

export async function generateStaticParams() {
  return allKtis.map((kti) => ({
    term: kti.term,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const kti = allKtis.find((kti) => kti.term === term);

  if (!kti) return {};

  const keywords = [
    kti.term,
    kti.category,
    ...(kti.tags || []),
    "kamus teknologi informasi",
    "istilah IT",
    "bahasa Indonesia",
  ];

  if (kti.englishTerm) {
    keywords.splice(1, 0, kti.englishTerm);
  }

  return {
    ...genPageMetadata({
      title: `${kti.title} - Kamus Teknologi Informasi`,
      description: kti.description,
      path: kti.slug,
      locale: "id_ID",
      type: "article",
      openGraph: {
        title: `${kti.title} - KTI | ${siteMetadata.title}`,
        description: kti.description,
        url: absoluteUrl(kti.slug),
        siteName: siteMetadata.title,
        locale: "id_ID",
        type: "article",
        publishedTime: kti.lastmod,
        modifiedTime: kti.lastmod,
        authors: [siteMetadata.author],
      },
    }),
    keywords,
  };
}

const difficultyConfig = {
  pemula: {
    label: "Pemula",
    badge:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
    tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20",
  },
  menengah: {
    label: "Menengah",
    badge:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20",
    tag: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20",
  },
  lanjut: {
    label: "Lanjut",
    badge:
      "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20",
    tag: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20",
  },
} as const;

type Difficulty = keyof typeof difficultyConfig;

export default async function KtiTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const kti = allKtis.find((kti) => kti.term === term);

  if (!kti || !kti.published) notFound();

  const relatedKtis = kti.relatedTerms
    ? allKtis.filter(
        (k) =>
          k.published &&
          k.term !== kti.term &&
          kti.relatedTerms?.includes(k.term),
      )
    : [];

  const sameCategoryKtis = allKtis
    .filter(
      (k) =>
        k.published &&
        k.term !== kti.term &&
        k.category === kti.category &&
        !kti.relatedTerms?.includes(k.term),
    )
    .slice(0, 8);

  const difficulty = kti.difficulty as Difficulty;
  const config = difficultyConfig[difficulty] ?? difficultyConfig.pemula;

  const termStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        name: kti.title,
        description: kti.description,
        url: absoluteUrl(kti.slug),
        inLanguage: "id-ID",
        termCode: kti.term,
        alternateName: [kti.englishTerm, kti.acronym].filter(Boolean),
        inDefinedTermSet: absoluteUrl("/kti"),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "KTI",
            item: absoluteUrl("/kti"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: kti.title,
            item: absoluteUrl(kti.slug),
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <StructuredData data={termStructuredData} />
      {/* ── Breadcrumb ──────────────────────────────────── */}
      <nav className="mb-10 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
        <Link
          href="/"
          className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          Home
        </Link>
        <span>/</span>
        <Link
          href="/kti"
          className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          KTI
        </Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">{kti.title}</span>
      </nav>

      {/* ── Page header ─────────────────────────────────── */}
      <div className="mb-10">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.badge}`}
          >
            {config.label}
          </span>
          <span className="rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
            {kti.category}
          </span>
          {kti.acronym && (
            <span className="rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs text-slate-500 dark:text-slate-500">
              {kti.acronym}
            </span>
          )}
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {kti.title}
        </h1>
        {kti.englishTerm && (
          <p className="mt-2 text-lg text-slate-400 dark:text-slate-500">
            {kti.englishTerm}
          </p>
        )}

        {/* Description callout */}
        <div className="mt-6 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5">
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {kti.description}
          </p>
        </div>

        {/* Tags */}
        {kti.tags && kti.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {kti.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 text-xs text-slate-500 dark:text-slate-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── MDX body ────────────────────────────────────── */}
      <article className="prose dark:prose-invert prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-code:rounded prose-code:bg-slate-100 dark:prose-code:bg-white/[0.06] prose-code:px-1 prose-code:py-0.5 prose-code:text-slate-800 dark:prose-code:text-slate-200 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-white/[0.06] prose-pre:bg-[#0D1117] mb-16">
        <Mdx code={kti.body.code} />
      </article>

      {/* ── Related terms ───────────────────────────────── */}
      {relatedKtis.length > 0 && (
        <section className="mb-12 border-t border-slate-200 dark:border-white/[0.06] pt-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            Istilah Terkait
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relatedKtis.map((rel) => {
              const relConfig =
                difficultyConfig[rel.difficulty as Difficulty] ??
                difficultyConfig.pemula;
              return (
                <Link
                  key={rel.term}
                  href={rel.slug}
                  className="group rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-4 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {rel.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${relConfig.badge}`}
                    >
                      {relConfig.label}
                    </span>
                  </div>
                  {rel.englishTerm && (
                    <p className="mb-1 text-xs text-slate-400 dark:text-slate-600">
                      {rel.englishTerm}
                    </p>
                  )}
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {rel.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Same category ───────────────────────────────── */}
      {sameCategoryKtis.length > 0 && (
        <section className="mb-12 border-t border-slate-200 dark:border-white/[0.06] pt-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            Lainnya dalam {kti.category}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {sameCategoryKtis.map((cat) => {
              const catConfig =
                difficultyConfig[cat.difficulty as Difficulty] ??
                difficultyConfig.pemula;
              return (
                <Link
                  key={cat.term}
                  href={cat.slug}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${catConfig.tag}`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Back link ───────────────────────────────────── */}
      <div className="mb-12 border-t border-slate-200 dark:border-white/[0.06] pt-8">
        <Link
          href="/kti"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
        >
          ← Kembali ke Daftar Istilah
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-12 text-center shadow-2xl shadow-indigo-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
        <h2 className="relative text-xl font-bold tracking-tight text-white">
          Siap membangun dengan smbCloud?
        </h2>
        <p className="relative mt-2 text-sm text-indigo-200">
          Deploy NodeJS, Swift, dan Ruby dengan satu perintah.
        </p>
        <Link
          href="https://console.smbcloud.xyz"
          target="_blank"
          className="relative mt-6 inline-block rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
        >
          Mulai dengan smbCloud →
        </Link>
      </div>

      {/* ── Last updated ────────────────────────────────── */}
      <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-600">
        Terakhir diperbarui:{" "}
        {new Date(kti.lastmod).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
