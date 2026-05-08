import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const comparisonRows = [
  {
    label: "What it is",
    smbcloud:
      "A data layer service that lives inside your smbCloud project alongside Deploy, Auth, and Mail.",
    supabase:
      "A full BaaS platform: Postgres, auth, storage, realtime, edge functions — all bundled together.",
  },
  {
    label: "Best fit",
    smbcloud:
      "Teams that already use smbCloud and want the database managed in the same place.",
    supabase:
      "Teams that want a Firebase-like platform on top of Postgres and are happy to use the full suite.",
  },
  {
    label: "Platform scope",
    smbcloud:
      "Narrow on purpose. Manages the data layer without becoming a platform of its own.",
    supabase:
      "Broad. Auth, storage, and realtime are first-class citizens alongside the database.",
  },
  {
    label: "Auth story",
    smbcloud:
      "Auth is a separate smbCloud service. You pick what you need.",
    supabase:
      "Auth is built in. Supabase Auth ships with every project by default.",
  },
  {
    label: "Why teams pick it",
    smbcloud:
      "Because they want less surface area and want the data layer close to the rest of the stack.",
    supabase:
      "Because they want one product that covers most backend needs out of the box.",
  },
];

const smbcloudFits = [
  "You already use smbCloud Deploy or Auth and want the data layer in the same platform.",
  "You want a focused data service, not a full BaaS.",
  "You do not need Supabase Auth, Storage, or Realtime alongside your database.",
  "You prefer fewer moving parts and a smaller blast radius when something goes wrong.",
];

const supabaseStillFits = [
  "You want Firebase-style convenience on top of Postgres.",
  "You need auth, storage, and realtime out of the box.",
  "Your team is already building around the Supabase SDK and tooling.",
  "You want a generous free tier with Postgres included.",
];

const faqs = [
  {
    question: "Is smbCloud GresIQ a Supabase replacement?",
    answer:
      "For teams that only need the data layer, it can be. If you are using Supabase mainly for its database and find the rest of the platform growing into something you manage instead of use, GresIQ is worth a look.",
  },
  {
    question: "Does smbCloud GresIQ include auth or storage?",
    answer:
      "No. Auth is a separate smbCloud service. GresIQ focuses on the data layer. That is intentional — you add what you need instead of inheriting everything.",
  },
  {
    question: "What type of database does GresIQ manage?",
    answer:
      "GresIQ is built for relational databases and is designed to run alongside the rest of the smbCloud stack in the same platform.",
  },
  {
    question: "Who should consider switching from Supabase to GresIQ?",
    answer:
      "Teams using Supabase mainly as a managed Postgres instance who want fewer abstractions and a data layer that stays inside one platform with their app and auth.",
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Supabase alternative for teams that want less BaaS",
    description:
      "Looking for a Supabase alternative? smbCloud GresIQ is a focused data layer that lives inside the same platform as your app, auth, and mail — without the full BaaS overhead.",
    path: "/supabase-alternative",
    keywords: [
      "Supabase alternative",
      "Supabase replacement",
      "managed database platform",
      "GresIQ database",
      "smbCloud GresIQ",
      "data layer service",
      "Postgres alternative",
    ],
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/supabase-alternative#webpage"),
      url: absoluteUrl("/supabase-alternative"),
      name: "Supabase alternative for teams that want less BaaS",
      description:
        "Compare smbCloud GresIQ and Supabase for teams that want a focused data layer without the full BaaS platform.",
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
          name: "Supabase alternative",
          item: absoluteUrl("/supabase-alternative"),
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

export default function SupabaseAlternativePage() {
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
            Looking for a Supabase alternative?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Supabase does a lot. That is exactly why some teams want something
            smaller. smbCloud GresIQ is a data layer that lives inside the same
            platform as your app, auth, and mail — without growing into its own
            product you have to manage on top of everything else.
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
              Why teams look beyond Supabase
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Usually they only needed the database. The rest came along anyway.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Supabase is generous and well-built. But when you just need a
              managed data layer, inheriting auth, storage, and realtime
              alongside it adds surface area you did not ask for and will
              eventually have to understand.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              What GresIQ does well
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Database management inside the same platform as your app and auth.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Connection and service management without a separate dashboard to learn.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Built to stay focused — a data layer, not a backend platform.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud GresIQ vs Supabase
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
                Supabase
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
                  {row.supabase}
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
              Stay on Supabase if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {supabaseStillFits.map((item) => (
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
              If Supabase feels like more platform than you need, try GresIQ.
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
                href="/planetscale-alternative"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare PlanetScale alternative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
