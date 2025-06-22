import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { genPageMetadata } from "./seo";
import siteMetadata from "@/content/siteMetadata";
import TabbedRunner from "./components/TabbedRunner";

export const metadata = genPageMetadata({ title: `${siteMetadata.title}` });

export default function Home() {
  let publishedPosts = allPosts.filter((post) => post.published);
  publishedPosts = publishedPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return (
    <div className="prose dark:prose-invert">
      <h1>smbCloud</h1>
      <p className="text-lg">
        Deploy your NextJS, Astro, or any NodeJS app with one command:{" "}
      </p>
      <TabbedRunner />
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
