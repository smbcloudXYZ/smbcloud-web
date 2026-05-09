import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const comparisonRows = [
  {
    label: "What it is",
    smbcloud:
      "A data layer service managed inside your smbCloud project, alongside Deploy, Auth, and Mail.",
    planetscale:
      "A MySQL-compatible serverless database platform with a Git-like schema branching workflow.",
  },
  {
    label: "Best fit",
    smbcloud:
      "Teams that want database management without a separate platform or schema branch workflow.",
    planetscale:
      "Teams that need a highly scalable MySQL-compatible database with developer-friendly schema migrations.",
  },
  {
    label: "Schema workflow",
    smbcloud:
      "Standard migration tooling that comes with your app framework. No separate branching required.",
    planetscale:
      "Branch-based schema changes with non-blocking migrations as a core feature.",
  },
  {
    label: "Platform scope",
    smbcloud:
      "Narrow. The data layer is one service in a broader stack, not a standalone product.",
    planetscale:
      "Database-first. Deep investment in schema management, analytics, and scaling features.",
  },
  {
    label: "Why teams pick it",
    smbcloud:
      "Because they want less tooling to learn and a database that fits naturally into one platform.",
    planetscale:
      "Because they want best-in-class MySQL scalability and a thoughtful schema branching story.",
  },
];

const smbcloudFits = [
  "You want database management inside the same platform you use for deploys and auth.",
  "You do not need MySQL-specific features or PlanetScale's branching workflow.",
  "You prefer fewer specialised tools and a smaller operational footprint.",
  "Your app uses PostgreSQL or a standard relational setup.",
];

const planetscaleStillFits = [
  "You need MySQL-compatible databases at serious scale.",
  "Your team relies on schema branching and non-blocking migrations.",
  "You want a database-first platform with deep analytics and insight tooling.",
  "You are already using PlanetScale's SDK or Serverless Driver for edge deployments.",
];

const faqs = [
  {
    question: "Is smbCloud GresIQ a PlanetScale replacement?",
    answer:
      "For teams that want a simpler data layer without MySQL or schema branching, it can be. If you only used PlanetScale as a managed relational database and never leaned on its branching model, GresIQ is worth evaluating.",
  },
  {
    question: "Does GresIQ support MySQL?",
    answer:
      "GresIQ is focused on relational database management and is built to work alongside the smbCloud stack. It is not a MySQL-specific platform the way PlanetScale is.",
  },
  {
    question: "What happens to my schema migrations with GresIQ?",
    answer:
      "You use your framework's standard migration tooling. GresIQ handles connection and service management — it does not add a new migration layer on top of your existing workflow.",
  },
  {
    question: "Who should consider switching from PlanetScale to GresIQ?",
    answer:
      "Teams using PlanetScale mainly as a hosted relational database who do not depend on its branching model and would prefer to consolidate tooling under one platform.",
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "PlanetScale alternative for teams that want less tooling",
    description:
      "Looking for a PlanetScale alternative? smbCloud GresIQ manages the data layer inside the same platform as your app, auth, and mail — no schema branching workflow required.",
    path: "/planetscale-alternative",
    keywords: [
      "PlanetScale alternative",
      "PlanetScale replacement",
      "managed database service",
      "GresIQ database",
      "smbCloud GresIQ",
      "database without branching",
      "relational database platform",
    ],
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/planetscale-alternative#webpage"),
      url: absoluteUrl("/planetscale-alternative"),
      name: "PlanetScale alternative for teams that want less tooling",
      description:
        "Compare smbCloud GresIQ and PlanetScale for teams that want a simpler data layer without branch-based schema management.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
    },
    {
      "@type": "BreadcrumbList",
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
          name: "PlanetScale alternative",
          item: absoluteUrl("/planetscale-alternative"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function PlanetScaleAlternativePage() {
  return (
    <div>
      <StructuredData data={structuredData} />

      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
              GresIQ comparison
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
            Looking for a PlanetScale alternative?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            PlanetScale is a serious platform for teams that need MySQL at
            scale. But most teams do not need branch-based schema management.
            smbCloud GresIQ manages the data layer inside the same platform as
            your app, auth, and mail — with your normal migration workflow and
            nothing extra to learn.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              Try smbCloud GresIQ
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why teams look beyond PlanetScale
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Usually they needed a managed database. The branching came along
              for the ride.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              PlanetScale built something genuinely impressive around schema
              branching. But for most small teams shipping Rails, Node.js, or
              Vapor apps, standard migrations already work fine. GresIQ skips
              the extra model and keeps the database close to the rest of your
              stack.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              What GresIQ does well
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Database service management inside the same platform as your app and auth.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>No new migration model. Use the tooling that ships with your framework.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Smaller surface area and fewer accounts to manage.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud GresIQ vs PlanetScale
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Here is the trade, without the usual sales fog.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.06]">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-slate-50 text-sm font-semibold text-slate-900 dark:bg-white/[0.03] dark:text-white">
              <div className="border-b border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                Area
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                smbCloud GresIQ
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                PlanetScale
              </div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.8fr_1fr_1fr] text-sm leading-7 text-slate-600 dark:text-slate-400"
              >
                <div className="border-b border-slate-200 bg-white px-5 py-5 font-semibold text-slate-900 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-white">
                  {row.label}
                </div>
                <div className="border-b border-l border-slate-200 bg-white px-5 py-5 dark:border-white/[0.06] dark:bg-white/[0.02]">
                  {row.smbcloud}
                </div>
                <div className="border-b border-l border-slate-200 bg-white px-5 py-5 dark:border-white/[0.06] dark:bg-white/[0.02]">
                  {row.planetscale}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Pick smbCloud GresIQ if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {smbcloudFits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Stay on PlanetScale if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {planetscaleStillFits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Common questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-14 text-center shadow-2xl shadow-indigo-500/20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white">
              If PlanetScale feels like more than you need, try GresIQ.
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Run it on one project. That is usually enough to know.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://console.smbcloud.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
              >
                Start with smbCloud
              </Link>
              <Link
                href="/neon-alternative"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare Neon alternative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
