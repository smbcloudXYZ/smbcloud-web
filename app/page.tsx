import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import TabbedRunner from "./components/TabbedRunner";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "./seo";
import { FrameworkWordCycler } from "@/components/word-cycler";

const proofPoints = [
  {
    title: "One command",
    description: "Run `smb` to deploy.",
  },
  {
    title: "SSH-first",
    description: "No extra layer between you and the server.",
  },
  {
    title: "Live logs",
    description: "Watch the deploy as it happens.",
  },
  {
    title: "Fast rollbacks",
    description: "One command back when something breaks.",
  },
];

const reasonsToChoose = [
  {
    title: "No platform maze",
    description: "Run `smb`, watch the release, move on.",
  },
  {
    title: "Built for real stacks",
    description: "Node.js, Rails, and Vapor. That's it.",
  },
  {
    title: "Closer to normal ops",
    description: "SSH in, deploy out. Nothing new to learn.",
  },
];

const bestFit = [
  "Small teams shipping web apps and APIs",
  "Agencies managing client deployments",
  "Founders who want deploys to be boring",
  "Teams that like SSH and fewer moving parts",
];

const featuredServices = [
  {
    name: "smbCloud Auth",
    eyebrow: "Accounts and access",
    title: "Hosted auth that stays out of the way.",
    description:
      "Handle sign-in, signup, sessions, custom domains, collaborators, and billing without adopting a giant identity platform first.",
    bullets: [
      "Hosted auth apps for end-user accounts",
      "Simple plans from Starter to Business",
      "A calmer alternative to Auth0, Clerk, and bundled platform auth",
    ],
    href: "/auth",
    cta: "Explore Auth",
    accent: "indigo",
  },
  {
    name: "smbCloud Mail",
    eyebrow: "Domain mail routing",
    title: "Mail built around the inbox, not just the send API.",
    description:
      "Route domain email, keep forwarding simple, and store inbound history without stitching together a bigger mail suite than you need.",
    bullets: [
      "One Mail app per project",
      "Inbox routes, forwarding, and stored inbound messages",
      "A cleaner fit for teams comparing Resend, useSend, or SendGrid",
    ],
    href: "/mail",
    cta: "Explore Mail",
    accent: "orange",
  },
];

const deployComparisonPages = [
  {
    href: "/heroku-alternative",
    eyebrow: "Deploy comparison",
    title: "Heroku alternative",
    description: "Simpler deploys, less platform in the middle.",
    bullets: [
      "Why some Rails, Node.js, and Vapor teams leave Heroku",
      "Where smbCloud fits, and where it does not",
    ],
  },
  {
    href: "/railway-alternative",
    eyebrow: "Deploy comparison",
    title: "Railway alternative",
    description: "A calmer deploy flow for teams that want less surface area.",
    bullets: [
      "What you gain from a narrower platform",
      "Why some teams prefer less surface area",
    ],
  },
];

const authComparisonPages = [
  {
    href: "/auth0-alternative",
    eyebrow: "Auth comparison",
    title: "Auth0 alternative",
    description: "Hosted auth without the identity platform overhead.",
    bullets: [
      "Compare hosted sign-in, signup, and session flows against a bigger identity stack",
      "See where smbCloud Auth fits for smaller teams that want less auth sprawl",
    ],
  },
  {
    href: "/clerk-alternative",
    eyebrow: "Auth comparison",
    title: "Clerk alternative",
    description: "Auth that stays out of the way.",
    bullets: [
      "Compare developer-friendly hosted auth against a calmer auth workflow",
      "See when smbCloud Auth is a better fit and when Clerk still makes more sense",
    ],
  },
];

const gresiqComparisonPages = [
  {
    href: "/supabase-alternative",
    eyebrow: "GresIQ comparison",
    title: "Supabase alternative",
    description: "A data layer that doesn't become its own platform.",
    bullets: [
      "Compare focused database management against a full BaaS platform",
      "See when smbCloud GresIQ is the simpler fit and when Supabase still makes sense",
    ],
  },
  {
    href: "/planetscale-alternative",
    eyebrow: "GresIQ comparison",
    title: "PlanetScale alternative",
    description:
      "A database that ships with your app, no branching workflow required.",
    bullets: [
      "Compare database-per-project workflows against branch-based schema management",
      "Honest tradeoffs between simplicity and scale",
    ],
  },
  {
    href: "/neon-alternative",
    eyebrow: "GresIQ comparison",
    title: "Neon alternative",
    description:
      "Always-on Postgres without cold starts or serverless trade-offs.",
    bullets: [
      "Compare always-on managed databases against serverless Postgres",
      "See which fits better for teams that already use smbCloud Deploy or Auth",
    ],
  },
];

const mailComparisonPages = [
  {
    href: "/resend-alternative",
    eyebrow: "Mail comparison",
    title: "Resend alternative",
    description: "Starts with the inbox, not the send API.",
    bullets: [
      "Compare inbox-first mail workflows against sending-first tools",
      "See where smbCloud Mail fits for routing, forwarding, and stored inbound mail",
    ],
  },
  {
    href: "/usesend-alternative",
    eyebrow: "Mail comparison",
    title: "useSend alternative",
    description: "Managed mail without running the stack yourself.",
    bullets: [
      "A cleaner fit for domain inbox routes and forwarding",
      "Honest tradeoffs between hosted mail and open-source sending infrastructure",
    ],
  },
  {
    href: "/sendgrid-alternative",
    eyebrow: "Mail comparison",
    title: "SendGrid alternative",
    description: "Domain inboxes and inbound routing without the giant suite.",
    bullets: [
      "Compare inbox routes, forwarding, and stored inbound mail against send-heavy tooling",
      "See when smbCloud Mail is the better bet and when it is not",
    ],
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Deploy, Auth, Mail, and GresIQ on one platform",
    description:
      "smbCloud Platform brings four services together: ship Node.js, Rails, and Vapor apps with Deploy, handle sign-in and accounts with Auth, route domain email with Mail, and run your database with GresIQ.",
    path: "/",
    keywords: [
      "smbCloud Platform",
      "SSH-first deploy platform",
      "deploy Node.js app",
      "deploy Ruby on Rails app",
      "deploy Vapor app",
      "hosted auth",
      "authentication service",
      "domain mail routing",
      "managed Postgres database",
      "Heroku alternative",
      "Auth0 alternative",
      "Resend alternative",
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
    {
      "@type": "Service",
      name: "smbCloud Auth",
      serviceType: "Hosted authentication service",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: "Worldwide",
      url: absoluteUrl("/auth"),
      description:
        "Hosted auth apps for sign-in, signup, sessions, collaborators, and account management.",
      audience: {
        "@type": "Audience",
        audienceType: "Developers and software teams shipping user accounts",
      },
    },
    {
      "@type": "Service",
      name: "smbCloud Mail",
      serviceType: "Domain mail routing service",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: "Worldwide",
      url: absoluteUrl("/mail"),
      description:
        "Domain inbox routes, forwarding, and stored inbound mail for teams that want calmer mail infrastructure.",
      audience: {
        "@type": "Audience",
        audienceType:
          "Businesses and software teams handling inbound domain email",
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
            Start at the finish line: distribution.
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl leading-[1.05]">
            Enterprise power at{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              startup velocity
            </span>
            .
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            smbCloud Platform brings Deploy, Auth, Mail, and GresIQ together. Ship
            your <FrameworkWordCycler /> app without running four separate
            vendors.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98] sm:w-auto"
            >
              Start free →
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 dark:border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04] sm:w-auto"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Start here
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Auth and Mail are two of the clearest ways into smbCloud.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              If you're comparing auth vendors or trying to clean up your domain
              mail setup, start with the product page that matches the job.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className={`group rounded-2xl border p-8 transition-colors ${
                  service.accent === "orange"
                    ? "border-orange-200 bg-orange-50/70 hover:border-orange-300 hover:bg-orange-50 dark:border-orange-500/20 dark:bg-orange-500/10 dark:hover:border-orange-500/35 dark:hover:bg-orange-500/14"
                    : "border-indigo-200 bg-indigo-50/70 hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:hover:border-indigo-500/35 dark:hover:bg-indigo-500/14"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          service.accent === "orange"
                            ? "bg-orange-500"
                            : "bg-indigo-500"
                        }`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-6 text-sm font-semibold ${
                    service.accent === "orange"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-indigo-600 dark:text-indigo-400"
                  }`}
                >
                  {service.cta} →
                </p>
              </Link>
            ))}
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
              Deploys should be boring.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Run `smb`. Watch the logs. Move on.
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
              Good fit
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
              Supported stacks
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Node.js
                </p>
                <p className="mt-1 leading-7">
                  Web apps, APIs, dashboards, backend services.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Ruby on Rails
                </p>
                <p className="mt-1 leading-7">
                  Still my favorite stack for shipping fast.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Swift / Vapor
                </p>
                <p className="mt-1 leading-7">
                  Works. Doesn't treat Vapor as an afterthought.
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
              Pick the service you're comparing.
            </h2>
          </div>

          <div className="space-y-16">
            <div>
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  smbCloud Auth
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Auth0, Clerk, or Supabase Auth?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  Sign-in, signup, sessions. Hosted, out of the way.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {authComparisonPages.map((page) => (
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
                  Resend, useSend, or SendGrid?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  Domain routes, forwarding, stored inbound mail.
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

            <div className="border-t border-slate-200 pt-16 dark:border-white/[0.06]">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  smbCloud Deploy
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Heroku or Railway?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  Direct comparisons, honest about where smbCloud fits and where
                  it doesn't.
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
                  smbCloud GresIQ
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Supabase, PlanetScale, or Neon?
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                  A data layer that lives with your stack, not next to it.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {gresiqComparisonPages.map((page) => (
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
              Try it on one app.
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Create an account and install the CLI.
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
              <span className="font-semibold text-white">smbcloud-cli</span> as
              a native app. Review changes, edit, and deploy from your phone.
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
