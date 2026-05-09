import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import AboutMedia from "@/components/about-media";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "@/app/seo";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPageFromParams(params: Awaited<PageProps["params"]>) {
  const slug = params?.slug?.join("/");
  return allPages.find((page) => page.slugAsParams === slug) ?? null;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return genPageMetadata({
    title: page.title,
    description: page.description,
    path: page.slug,
  });
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage(props: PageProps) {
  const params = await props.params;
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl(page.slug),
        url: absoluteUrl(page.slug),
        name: page.title,
        description: page.description,
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        breadcrumb: {
          "@id": `${absoluteUrl(page.slug)}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(page.slug)}#breadcrumb`,
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
            name: page.title,
            item: absoluteUrl(page.slug),
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <StructuredData data={pageStructuredData} />

      <nav className="mb-10 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
        <Link
          href="/"
          className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">{page.title}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            {page.description}
          </p>
        )}
      </div>

      {page.slugAsParams === "about" && (
        <div className="mb-12">
          <AboutMedia />
        </div>
      )}

      <article className="prose dark:prose-invert prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-slate-100 dark:prose-code:bg-white/[0.06] prose-code:px-1 prose-code:py-0.5 prose-code:text-slate-800 dark:prose-code:text-slate-200 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-white/[0.06] prose-pre:bg-[#0D1117] prose-hr:border-slate-200 dark:prose-hr:border-white/[0.06] prose-strong:text-slate-900 dark:prose-strong:text-white">
        <Mdx code={page.body.code} />
      </article>

      <p className="mt-16 border-t border-slate-200 dark:border-white/[0.06] pt-6 text-xs text-slate-400 dark:text-slate-600">
        Last updated{" "}
        {new Date(page.lastmod).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
