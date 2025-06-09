import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { genPageMetadata } from "./seo";
import siteMetadata from '@/content/siteMetadata'

export const metadata = genPageMetadata({ title: `${siteMetadata.title}` })

export default function Home() {
  const publishedPosts = allPosts.filter((post) => post.published)
  return (
    <div className="prose dark:prose-invert">
      <h1>smbCloud</h1>
      <p className="text-lg">Deploy your NextJS app with one command: </p>
      <pre>
        {
          `$ smb
✔ Valid config
✔ Valid project
✔ Valid deployment setup
☱ Deploying > Use key path: ~/.ssh/id_11@smbcloud
☱ Deploying > Building the app ✔
☲ Deploying > App restart ✔
☱ Deploying > App is running ✔
✔ Deployment complete.`
            .split('\n')
            .map((line, idx) => (
              <span key={idx}>
                {line.split('✔').reduce((acc, part, i, arr) => {
                  if (i === arr.length - 1) return [...acc, part];
                  return [
                    ...acc,
                    part,
                    <span key={`check-${i}`} style={{ color: 'green' }}>✔</span>
                  ];
                }, [] as (string | JSX.Element)[])}
                {'\n'}
              </span>
            ))
        }
      </pre>
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
