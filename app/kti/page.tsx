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

export default function KtiPage() {
  // Filter published KTI entries
  let publishedKtis = allKtis.filter((kti) => kti.published);

  // Sort alphabetically by term
  publishedKtis = publishedKtis.sort((a, b) =>
    a.term.toLowerCase().localeCompare(b.term.toLowerCase()),
  );

  // Group by category
  const categories = Array.from(
    new Set(publishedKtis.map((kti) => kti.category)),
  ).sort();

  // Group by difficulty
  const difficultyGroups = {
    pemula: publishedKtis.filter((kti) => kti.difficulty === "pemula"),
    menengah: publishedKtis.filter((kti) => kti.difficulty === "menengah"),
    lanjut: publishedKtis.filter((kti) => kti.difficulty === "lanjut"),
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          📚 Kamus Teknologi Informasi (KTI)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Panduan lengkap istilah teknologi informasi dalam Bahasa Indonesia
          untuk tenaga kerja muda dan profesional IT.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="mt-0 text-2xl">Mengapa KTI?</h2>
        <p className="mb-2">
          Dalam era transformasi digital, memahami istilah teknologi informasi
          adalah kunci sukses karir IT Anda. KTI hadir untuk:
        </p>
        <ul className="mb-0">
          <li>
            🎯 <strong>Mempercepat pembelajaran</strong> - Pahami konsep IT
            dengan cepat
          </li>
          <li>
            💼 <strong>Tingkatkan karir</strong> - Kuasai terminologi
            profesional
          </li>
          <li>
            🌐 <strong>Bahasa Indonesia</strong> - Penjelasan mudah dipahami
          </li>
          <li>
            🚀 <strong>Selalu update</strong> - Mengikuti perkembangan teknologi
            terkini
          </li>
        </ul>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 not-prose">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">{publishedKtis.length}</div>
          <div className="text-sm">Total Istilah</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">{categories.length}</div>
          <div className="text-sm">Kategori</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">
            {difficultyGroups.pemula.length}
          </div>
          <div className="text-sm">Level Pemula</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">
            {difficultyGroups.lanjut.length}
          </div>
          <div className="text-sm">Level Lanjut</div>
        </div>
      </div>

      {/* Browse by Category */}
      <div className="mb-12">
        <h2>🗂️ Telusuri berdasarkan Kategori</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          {categories.map((category) => {
            const categoryKtis = publishedKtis.filter(
              (kti) => kti.category === category,
            );
            return (
              <div
                key={category}
                className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {category}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {categoryKtis.length} istilah
                </p>
                <div className="flex flex-wrap gap-2">
                  {categoryKtis.slice(0, 6).map((kti) => (
                    <Link
                      key={kti.term}
                      href={kti.slug}
                      className="text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      {kti.term}
                    </Link>
                  ))}
                  {categoryKtis.length > 6 && (
                    <span className="text-sm text-slate-500 px-3 py-1">
                      +{categoryKtis.length - 6} lainnya
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Browse by Difficulty */}
      <div className="mb-12">
        <h2>📊 Telusuri berdasarkan Level</h2>
        <div className="space-y-6">
          {/* Pemula */}
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-bold text-green-600 dark:text-green-400">
              🌱 Pemula ({difficultyGroups.pemula.length})
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Istilah dasar yang wajib dipahami untuk memulai karir IT
            </p>
            <div className="flex flex-wrap gap-2 not-prose">
              {difficultyGroups.pemula.slice(0, 10).map((kti) => (
                <Link
                  key={kti.term}
                  href={kti.slug}
                  className="text-sm bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 px-3 py-1 rounded-md hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                >
                  {kti.term}
                </Link>
              ))}
            </div>
          </div>

          {/* Menengah */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
              📈 Menengah ({difficultyGroups.menengah.length})
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Konsep intermediate untuk meningkatkan keahlian teknis
            </p>
            <div className="flex flex-wrap gap-2 not-prose">
              {difficultyGroups.menengah.slice(0, 10).map((kti) => (
                <Link
                  key={kti.term}
                  href={kti.slug}
                  className="text-sm bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  {kti.term}
                </Link>
              ))}
            </div>
          </div>

          {/* Lanjut */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">
              🚀 Lanjut ({difficultyGroups.lanjut.length})
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Konsep advanced untuk profesional berpengalaman
            </p>
            <div className="flex flex-wrap gap-2 not-prose">
              {difficultyGroups.lanjut.slice(0, 10).map((kti) => (
                <Link
                  key={kti.term}
                  href={kti.slug}
                  className="text-sm bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                >
                  {kti.term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Terms Alphabetically */}
      <div className="mb-12">
        <h2>📖 Semua Istilah (A-Z)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          {publishedKtis.map((kti) => (
            <Link
              key={kti.term}
              href={kti.slug}
              className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    {kti.term}
                  </h3>
                  {kti.englishTerm && (
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                      {kti.englishTerm}
                    </p>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {kti.description}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                    kti.difficulty === "pemula"
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      : kti.difficulty === "menengah"
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                        : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  }`}
                >
                  {kti.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Siap Tingkatkan Karir IT Anda?
        </h2>
        <p className="mb-6 text-blue-50">
          Bergabunglah dengan ribuan profesional IT Indonesia yang menggunakan
          smbCloud untuk mengembangkan aplikasi mereka.
        </p>
        <Link
          href="https://console.smbcloud.xyz/login"
          target="__blank"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
        >
          Mulai dengan smbCloud →
        </Link>
      </div>

      {/* SEO Content */}
      <div className="mt-12 text-sm text-slate-600 dark:text-slate-400">
        <h3>Tentang Kamus Teknologi Informasi</h3>
        <p>
          Kamus Teknologi Informasi (KTI) adalah sumber referensi komprehensif
          untuk tenaga kerja muda Indonesia yang ingin memahami istilah-istilah
          penting dalam dunia IT. Kami menyediakan penjelasan dalam Bahasa
          Indonesia yang mudah dipahami, mencakup berbagai topik seperti cloud
          computing, pemrograman, DevOps, keamanan siber, dan teknologi terkini
          lainnya.
        </p>
        <p>
          Setiap istilah dilengkapi dengan definisi, contoh penggunaan, dan
          hubungan dengan konsep lainnya untuk membantu Anda membangun pemahaman
          yang mendalam tentang ekosistem teknologi informasi modern.
        </p>
      </div>
    </div>
  );
}
