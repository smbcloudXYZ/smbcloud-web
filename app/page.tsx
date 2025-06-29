import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { genPageMetadata } from "./seo";
import siteMetadata from "@/content/siteMetadata";
import TabbedRunner from "./components/TabbedRunner";

export const metadata = {
  ...genPageMetadata({ title: `${siteMetadata.title}` }),
  metadataBase: new URL("https://smbcloud.xyz"),
};

export default function Home() {
  let publishedPosts = allPosts.filter((post) => post.published);
  publishedPosts = publishedPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return (
    <div className="prose dark:prose-invert">
      <h1>smbCloud</h1>
      <div className="mb-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl shadow-lg">
          The unified cloud platform for modern app deployment.
        </div>
      </div>
      <p className="text-lg">
        Deploy your{" "}
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          NodeJS
        </a>{" "}
        <em>
          (with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>{" "}
          or{" "}
          <a
            href="https://astro.build/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astro
          </a>
          )
        </em>
        ,{" "}
        <a href="https://swift.org/" target="_blank" rel="noopener noreferrer">
          Swift
        </a>{" "}
        <em>
          (via{" "}
          <a
            href="https://vapor.codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vapor
          </a>
          )
        </em>
        , and{" "}
        <a
          href="https://www.ruby-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruby
        </a>{" "}
        <em>
          (on{" "}
          <a
            href="https://rubyonrails.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rails
          </a>
          )
        </em>{" "}
        app with one command:{" "}
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
