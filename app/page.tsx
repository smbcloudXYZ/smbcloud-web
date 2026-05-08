import type { Metadata } from "next";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import TabbedRunner from "./components/TabbedRunner";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "./seo";

const proofPoints = [
  {
    title: "One command",
    description: "Deploy from your project with the `smb` CLI.",
  },
  {
    title: "SSH-first",
    description: "Keep the deploy flow closer to how developers already work.",
  },
  {
    title: "Live logs",
    description:
      "Watch deploy progress, app checks, and runtime feedback in real time.",
  },
  {
    title: "Fast rollbacks",
    description: "Go back quickly when a release needs to be reversed.",
  },
];

const reasonsToChoose = [
  {
    title: "No platform maze",
    description:
      "We built smbCloud so deploys would feel boring again. Run `smb`, watch the release, move on.",
  },
  {
    title: "Built for real stacks",
    description:
      "Node.js, Rails, and Vapor are the stacks we actually care about. This product is shaped around them on purpose.",
  },
  {
    title: "Closer to normal ops",
    description:
      "If your team already likes SSH and straightforward deploys, smbCloud will make sense fast.",
  },
];

const bestFit = [
  "Small product teams shipping web apps and APIs",
  "Agencies and consultants managing client deployments",
  "Founders who miss when deploys felt simple",
  "Teams that already like SSH and fewer moving parts",
];

const deployComparisonPages = [
  {
    href: "/heroku-alternative",
    eyebrow: "Deploy comparison",
    title: "Heroku alternative",
    description:
      "If you still want simplicity, but with less platform in the middle.",
    bullets: [
      "Why some Rails, Node.js, and Vapor teams leave Heroku",
      "Where smbCloud fits, and where it does not",
    ],
  },
  {
    href: "/railway-alternative",
    eyebrow: "Deploy comparison",
    title: "Railway alternative",
    description:
      "If Railway feels a bit too broad and you want a calmer deploy flow.",
    bullets: [
      "What you gain from a narrower platform",
      "Why some teams prefer less surface area",
    ],
  },
];

const mailComparisonPages = [
  {
    href: "/resend-alternative",
    eyebrow: "Mail comparison",
    title: "Resend alternative",
    description:
      "If your problem starts with the inbox, not just the send API.",
    bullets: [
      "Compare inbox-first mail workflows against sending-first tools",
      "See where smbCloud Mail fits for routing, forwarding, and stored inbound mail",
    ],
  },
  {
    href: "/usesend-alternative",
    eyebrow: "Mail comparison",
    title: "useSend alternative",
    description:
      "If you want managed mail workflows instead of running the email stack yourself.",
    bullets: [
      "A cleaner fit for domain inbox routes and forwarding",
      "Honest tradeoffs between hosted mail and open-source sending infrastructure",
    ],
  },
  {
    href: "/sendgrid-alternative",
    eyebrow: "Mail comparison",
    title: "SendGrid alternative",
    description:
      "If you need domain inboxes and inbound routing more than a giant email suite.",
    bullets: [
      "Compare inbox routes, forwarding, and stored inbound mail against send-heavy tooling",
      "See when smbCloud Mail is the better bet and when it is not",
    ],
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Deploy Node.js, Rails, and Vapor apps with one command",
    description:
      "smbCloud is an SSH-first deploy platform for small teams shipping Node.js, Ruby on Rails, and Swift/Vapor apps. Deploy with one command, live logs, fast rollbacks, and a clean console.",
    path: "/",
    keywords: [
      "SSH-first deploy platform",
      "deploy Node.js app",
      "deploy Ruby on Rails app",
      "deploy Vapor app",
      "Heroku alternative",
      "Railway alternative",
      "small team deployment platform",
    ],
  }),
};

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: absoluteUrl("/"),
      name: "smbCloud homepage",
      description: siteMetadata.description,
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    {
      "@type": "Service",
      name: "smbCloud Deploy",
      serviceType: "SSH-first application deployment platform",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: "Worldwide",
      url: absoluteUrl("/"),
      description:
        "Deploy Node.js, Ruby on Rails, and Swift/Vapor apps with one command, live logs, and fast rollbacks.",
      audience: {
        "@type": "Audience",
        audienceType: "Developers and small software teams",
      },
    },
  ],
};

export default function Home() {
  let publishedPosts = allPosts.filter((post) => post.published);
  publishedPosts = publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <StructuredData data={homepageStructuredData} />

      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-36 sm:pb-28 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
            Enterprise Power at Startup Velocity
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl leading-[1.05]">
            Deploy your app without the{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              platform maze.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            smbCloud is an SSH-first deploy platform for small teams shipping{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Node.js
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Ruby on Rails
            </span>
            , and{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Swift/Vapor
            </span>{" "}
            apps. Run one command, watch the logs, and roll back fast when you
            need to.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98] sm:w-auto"
            >
              Start deploying →
            </Link>
            <Link
              href="/posts/cli"
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 dark:border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04] sm:w-auto"
            >
              Install the CLI
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <Link
              href="/heroku-alternative"
              className="font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
            >
              Heroku alternative
            </Link>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <Link
              href="/railway-alternative"
              className="font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
            >
              Railway alternative
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-500">
            <span>Built by Splitfire AB</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">
              •
            </span>
            <Link
              href="https://github.com/smbcloudXYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate-800 dark:hover:text-slate-300"
            >
              Open source on GitHub
            </Link>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">
              •
            </span>
            <span>Stockholm, Sweden</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {point.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            One CLI. Multiple runtimes.
          </p>
          <TabbedRunner />
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why smbCloud
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Most teams do not need more platform.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              We kept coming back to the same idea: deploys should be easy to
              explain and hard to mess up. That is where smbCloud fits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {reasonsToChoose.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Who it fits best
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              This is for teams like ours.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {bestFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Stack focus
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              The stacks we care about.
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Node.js
                </p>
                <p className="mt-1 leading-7">
                  A strong fit for web apps, APIs, dashboards, and backend
                  services.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Ruby on Rails
                </p>
                <p className="mt-1 leading-7">
                  Still one of my favorite stacks when I want to ship fast
                  without arguing with the tooling.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Swift / Vapor
                </p>
                <p className="mt-1 leading-7">
                  A good fit if you like Vapor and do not want to be treated
                  like an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Compare services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Start with the service you are actually choosing.
            </h2>
          </div>

          <div className="space-y-16">
            <div>
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  smbCloud Deploy
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Looking at Heroku or Railway?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  Fair enough. We wrote the comparison pages I would actually
                  want to read before switching: direct, specific, and honest
                  about fit.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {deployComparisonPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-8 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                      {page.eyebrow}
                    </p>
                    <h4 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {page.title}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {page.description}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {page.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      Read comparison →
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-16 dark:border-white/[0.06]">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  smbCloud Mail
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Looking at Resend, useSend, or SendGrid?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  That is the smbCloud Mail side of the business. Most email
                  tools start with sending. We started with the inbox: domain
                  routes, forwarding, and keeping the messages that actually
                  came in.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {mailComparisonPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-8 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                      {page.eyebrow}
                    </p>
                    <h4 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {page.title}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {page.description}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {page.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      Read comparison →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-14 text-center shadow-2xl shadow-indigo-500/20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white">
              Ready to ship?
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Create an account, install the CLI, and see if it feels better on
              a real project.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://console.smbcloud.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
              >
                Create free account →
              </Link>
              <Link
                href="/services"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {publishedPosts.length > 0 && (
        <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                From the blog
              </p>
              <Link
                href="/posts"
                className="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
              >
                View all posts
              </Link>
            </div>
            <div className="space-y-6">
              {publishedPosts.slice(0, 3).map((post) => (
                <article
                  key={post._id}
                  className="group border-b border-slate-200 dark:border-white/[0.06] pb-6 last:border-0"
                >
                  <Link href={post.slug} className="block">
                    <h3 className="font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {post.description}
                      </p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 px-8 py-12 dark:border-white/[0.08] dark:bg-white/[0.04]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Also from smbCloud
            </p>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900">
                <span className="text-xs font-black tracking-tighter leading-none">
                  si
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                siGit Code & Deploy
              </h2>
            </div>

            <p className="mb-2 max-w-md text-sm leading-relaxed text-slate-300 dark:text-slate-400">
              <span className="font-semibold text-white">smbcloud-cli</span>,
              turned into a native app. Review changes, make quick edits, and
              trigger deploys when you are away from your laptop.
            </p>
            <p className="mb-8 text-xs italic text-slate-500">
              Available on iPhone, Android, and Windows.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/se/app/sigit-git-client-code-editor/id6753018849"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <FaApple className="h-4 w-4" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=xyz.smbcloud.SiGit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <FaGooglePlay className="h-4 w-4" />
                Google Play
              </a>
              <a
                href="https://apps.microsoft.com/detail/xp9k321rf5mzsz?ocid=webpdpshare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <FaWindows className="h-4 w-4" />
                Microsoft Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
