import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

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

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL("https://smbcloud.xyz"),
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage(props: PostProps) {
  const params = await props.params;
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      {post.lastmod && (
        <p className="italic text-base text-gray-500 mt-2 mb-0">
          Last updated: {new Date(post.lastmod).toLocaleDateString()}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
