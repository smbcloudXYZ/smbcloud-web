import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { genPageMetadata } from "./seo";
import siteMetadata from '@/content/siteMetadata'

export const metadata = genPageMetadata({ title: `${siteMetadata.title}` })

export default function Home() {
  const publishedPosts = allPosts.filter((post) => post.published)
  return (
    <div className="prose dark:prose-invert">
      <h1>smbCloudXYZ</h1>
      <p className="text-xl">A next-gen cloud platform powering small and medium-sized businesses.</p>
      <hr />
      <h2>Resources</h2>
      {publishedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
