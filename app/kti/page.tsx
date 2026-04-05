import { allKtis } from "@/.contentlayer/generated";
import Link from "next/link";
import { genPageMetadata } from "../seo";
import siteMetadata from "@/content/siteMetadata";

export const metadata = {
  ...genPageMetadata({
    title: "KTI - Kamus Teknologi Informasi",
    description:
      "Kamus Teknologi Informasi lengkap untuk tenaga kerja muda Indonesia. Pelajari istilah-istilah IT, pemrograman, cloud computing, dan teknologi terkini dengan penjelasan dalam Bahasa Indonesia.",
  }),
  keywords: [
    "kamus teknologi informasi",
    "istilah IT",
    "glosarium teknologi",
    "bahasa Indonesia",
    "pembelajaran IT",
    "karir IT Indonesia",
    "cloud computing",
    "pemrograman",
    "software development",
    "teknologi informasi",
  ],
  openGraph: {
    title: "KTI - Kamus Teknologi Informasi untuk Profesional IT Indonesia",
    description:
      "Panduan lengkap istilah teknologi informasi dalam Bahasa Indonesia untuk membantu karir IT Anda",
    url: `${siteMetadata.siteUrl}/kti`,
    siteName: siteMetadata.title,
    locale: "id_ID",
    type: "website",
  },
};

const difficultyConfig = {
  pemula: {
    label: "Pemula",
    badge:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
    bar: "bg-emerald-500",
    tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20",
  },
  menengah: {
    label: "Menengah",
    badge:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20",
    bar: "bg-amber-500",
    tag: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20",
  },
  lanjut: {
    label: "Lanjut",
    badge:
      "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20",
    bar: "bg-indigo-500",
    tag: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20",
  },
} as const;

type Difficulty = keyof typeof difficultyConfig;

export default function KtiPage() {
  let publishedKtis = allKtis.filter((kti) => kti.published);

  publishedKtis = publishedKtis.sort((a, b) =>
    a.term.toLowerCase().localeCompare(b.term.toLowerCase()),
  );

  const categories = Array.from(
    new Set(publishedKtis.map((kti) => kti.category)),
  ).sort();

  const difficultyGroups = {
    pemula: publishedKtis.filter((kti) => kti.difficulty === "pemula"),
    menengah: publishedKtis.filter((kti) => kti.difficulty === "menengah"),
    lanjut: publishedKtis.filter((kti) => kti.difficulty === "lanjut"),
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      {/* ── Page header ─────────────────────────────────── */}
      <div className="mb-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          Referensi
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Kamus Teknologi Informasi
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          Panduan lengkap istilah teknologi informasi dalam Bahasa Indonesia
          untuk tenaga kerja muda dan profesional IT.
        </p>
      </div>

      {/* ── Stats row ───────────────────────────────────── */}
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: publishedKtis.length, label: "Total Istilah" },
          { value: categories.length, label: "Kategori" },
          { value: difficultyGroups.pemula.length, label: "Level Pemula" },
          { value: difficultyGroups.lanjut.length, label: "Level Lanjut" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5"
          >
            <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Browse by category ──────────────────────────── */}
      <section className="mb-16">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          Berdasarkan Kategori
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => {
            const categoryKtis = publishedKtis.filter(
              (kti) => kti.category === category,
            );
            return (
              <div
                key={category}
                className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {category}
                  </h3>
                  <span className="text-xs text-slate-400 dark:text-slate-600">
                    {categoryKtis.length} istilah
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {categoryKtis.slice(0, 6).map((kti) => (
                    <Link
                      key={kti.term}
                      href={kti.slug}
                      className="rounded-md bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 text-xs text-slate-600 dark:text-slate-400 transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-700 dark:hover:text-indigo-400"
                    >
                      {kti.term}
                    </Link>
                  ))}
                  {categoryKtis.length > 6 && (
                    <span className="px-2.5 py-1 text-xs text-slate-400 dark:text-slate-600">
                      +{categoryKtis.length - 6} lainnya
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Browse by difficulty ────────────────────────── */}
      <section className="mb-16">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          Berdasarkan Level
        </p>
        <div className="space-y-6">
          {(["pemula", "menengah", "lanjut"] as Difficulty[]).map((level) => {
            const config = difficultyConfig[level];
            const group = difficultyGroups[level];
            return (
              <div
                key={level}
                className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.badge}`}
                  >
                    {config.label}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-600">
                    {group.length} istilah
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.slice(0, 12).map((kti) => (
                    <Link
                      key={kti.term}
                      href={kti.slug}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${config.tag}`}
                    >
                      {kti.term}
                    </Link>
                  ))}
                  {group.length > 12 && (
                    <span className="px-2.5 py-1 text-xs text-slate-400 dark:text-slate-600">
                      +{group.length - 12} lainnya
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── All terms A–Z ───────────────────────────────── */}
      <section className="mb-16">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          Semua Istilah (A–Z)
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {publishedKtis.map((kti) => {
            const config =
              difficultyConfig[kti.difficulty as Difficulty] ??
              difficultyConfig.pemula;
            return (
              <Link
                key={kti.term}
                href={kti.slug}
                className="group rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-4 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {kti.term}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${config.badge}`}
                  >
                    {config.label}
                  </span>
                </div>
                {kti.englishTerm && (
                  <p className="mb-1.5 text-xs text-slate-400 dark:text-slate-600">
                    {kti.englishTerm}
                  </p>
                )}
                <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {kti.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section>
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-14 text-center shadow-2xl shadow-indigo-500/20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="relative text-2xl font-bold tracking-tight text-white">
            Siap membangun dengan smbCloud?
          </h2>
          <p className="relative mt-3 text-indigo-200">
            Deploy aplikasi NodeJS, Swift, dan Ruby dengan satu perintah.
          </p>
          <Link
            href="https://console.smbcloud.xyz/login"
            target="_blank"
            className="relative mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
          >
            Mulai dengan smbCloud →
          </Link>
        </div>
      </section>
    </div>
  );
}
