import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import { Mdx } from "@/components/mdx-components";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "@/app/seo";

interface PostProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: Awaited<PostProps["params"]>) {
  const slug = params?.slug?.join("/");
  const post = allPosts
    .filter((post) => post.published)
    .find((post) => post.slugAsParams === slug);

  return post ?? null;
}

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return genPageMetadata({
    title: post.title,
    description: post.description,
    path: post.slug,
    type: "article",
    openGraph: {
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastmod,
      authors: [siteMetadata.author],
    },
  });
}

export async function generateStaticParams() {
  return allPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slugAsParams.split("/"),
    }));
}

export default async function PostPage(props: PostProps) {
  const params = await props.params;
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const postStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: absoluteUrl(post.slug),
        datePublished: post.date,
        dateModified: post.lastmod,
        author: {
          "@type": "Organization",
          name: siteMetadata.author,
        },
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": absoluteUrl(post.slug),
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(post.slug),
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <StructuredData data={postStructuredData} />

      <nav className="mb-8 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
        <Link
          href="/"
          className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          Home
        </Link>
        <span>/</span>
        <Link
          href="/posts"
          className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          Blog
        </Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">{post.title}</span>
      </nav>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="mb-2">{post.title}</h1>
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={post.date}>
            Published{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.lastmod && (
            <time dateTime={post.lastmod}>
              Updated{" "}
              {new Date(post.lastmod).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
