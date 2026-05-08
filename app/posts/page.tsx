import type { Metadata } from "next";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "../seo";

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Blog",
    description:
      "Product updates, deployment guides, and infrastructure notes from the smbCloud team.",
    path: "/posts",
    keywords: [
      "smbCloud blog",
      "deployment guides",
      "Node.js deployment guide",
      "Rails deployment guide",
      "Vapor deployment guide",
    ],
  }),
};

const blogStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": absoluteUrl("/posts#webpage"),
      url: absoluteUrl("/posts"),
      name: "smbCloud Blog",
      description:
        "Product updates, deployment guides, and infrastructure notes from the smbCloud team.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
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
          name: "Blog",
          item: absoluteUrl("/posts"),
        },
      ],
    },
    {
      "@type": "Blog",
      name: "smbCloud Blog",
      url: absoluteUrl("/posts"),
      description:
        "Product updates, deployment guides, and infrastructure notes from the smbCloud team.",
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: siteMetadata.language,
    },
  ],
};

export default function PostsPage() {
  let publishedPosts = allPosts.filter((post) => post.published);
  publishedPosts = publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <StructuredData data={blogStructuredData} />

      <div className="mb-14">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          Blog
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          smbCloud Blog
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Product updates, deployment guides, and infrastructure notes from the
          smbCloud team.
        </p>
      </div>

      {publishedPosts.length === 0 ? (
        <p className="text-sm text-slate-400 dark:text-slate-600">
          No posts published yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-0">
          {publishedPosts.map((post) => (
            <article
              key={post._id}
              className="group border-b border-slate-200 dark:border-white/[0.06] py-8 first:pt-0 last:border-0"
            >
              <Link href={post.slug} className="block">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    {post.date && (
                      <time
                        dateTime={post.date}
                        className="mb-2 block text-xs text-slate-400 dark:text-slate-600 tabular-nums"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                    <h2 className="font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </div>
                  <span className="mt-1 shrink-0 text-slate-300 dark:text-slate-700 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-500">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
