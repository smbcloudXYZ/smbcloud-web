import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const publishedPosts = allPosts.filter((post) => post.published)
  return (
    <div className="prose dark:prose-invert">
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
