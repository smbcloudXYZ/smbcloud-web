import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import TabbedRunner from "./components/TabbedRunner";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

const features = [
  {
    icon: "⚡",
    title: "One-command deploys",
    description:
      "Run `smb` in your project directory. That’s it. Your app is live in seconds.",
  },
  {
    icon: "🔐",
    title: "SSH-based security",
    description:
      "No agents, no tokens. Pure SSH key auth for every deployment. Zero attack surface.",
  },
  {
    icon: "🔄",
    title: "Roll back fast",
    description: "Each deploy is versioned, so going back is one command too.",
  },
  {
    icon: "📊",
    title: "Watch deploys live",
    description:
      "See logs, health checks, and deploy status while the release runs.",
  },
  {
    icon: "🌐",
    title: "Built for multiple runtimes",
    description:
      "Deploy Rust, Node.js, Swift/Vapor, and Ruby on Rails apps on one platform.",
  },
  {
    icon: "⚙️",
    title: "Less setup",
    description:
      "We detect the runtime for you. No YAML maze. No Dockerfiles unless you want them.",
  },
];

export default function Home() {
  let publishedPosts = allPosts.filter((post) => post.published);
  publishedPosts = publishedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-36 sm:pb-28 lg:px-8">
        {/* Soft radial glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl text-center">
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
              Cloud infrastructure for developers
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl leading-[1.05]">
            Deploy your app with{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              one command.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            The unified cloud platform for{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Rust
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              NodeJS
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Swift
            </span>
            , and{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Ruby
            </span>{" "}
            apps.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              className="w-full rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98] sm:w-auto"
            >
              Open the console →
            </Link>
            <Link
              href="/posts"
              className="flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white sm:w-auto"
            >
              Read docs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Terminal Demo ─────────────────────────────────────────────── */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            One CLI. Multiple runtimes.
          </p>
          <TabbedRunner />
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              The deploy flow, without the usual mess.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
              Deploy, roll back, and watch logs without wiring up half your
              stack first.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
              >
                <div className="mb-4 text-2xl">{feature.icon}</div>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────────────── */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-14 text-center shadow-2xl shadow-indigo-500/20">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white">
              Try smbCloud with a real app.
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Start free, deploy something small, and see if it fits your
              workflow. No credit card required.
            </p>
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              className="relative mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Create your free account →
            </Link>
          </div>
        </div>
      </section>

      {/* ── siGit CTA ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-white/[0.04] border border-slate-800 dark:border-white/[0.08] px-8 py-12">
            {/* Subtle top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Also from smbCloud
            </p>

            <div className="mb-4 flex items-center gap-3">
              {/* siGit mark */}
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

            {/* Platform buttons */}
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

      {/* ── Blog Posts ───────────────────────────────────────────────────────── */}
      {publishedPosts.length > 0 && (
        <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              From the blog
            </p>
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
    </div>
  );
}
