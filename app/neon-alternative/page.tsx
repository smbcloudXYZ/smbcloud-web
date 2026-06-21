import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const comparisonRows = [
  {
    label: "What it is",
    smbcloud:
      "A data layer service managed inside your smbCloud project alongside Deploy, Auth, and Mail.",
    neon: "A serverless PostgreSQL platform with instant branching, autoscaling, and a generous free tier.",
  },
  {
    label: "Best fit",
    smbcloud:
      "Teams that want always-on database management without cold starts or serverless compute trade-offs.",
    neon: "Teams building on serverless or edge infrastructure that want Postgres to scale down to zero.",
  },
  {
    label: "Cold starts",
    smbcloud:
      "No serverless compute model. Database connections behave like a standard managed database.",
    neon: "Serverless by design. Databases can pause and wake on first connection, which may add latency.",
  },
  {
    label: "Branching",
    smbcloud:
      "Standard database management. Use your framework migration tooling the same way you always have.",
    neon: "Instant Postgres branching, a core feature for preview environments and development workflows.",
  },
  {
    label: "Why teams pick it",
    smbcloud:
      "Because they want a predictable always-on data layer inside one coherent platform.",
    neon: "Because they want Postgres that scales to zero on the free tier and integrates with serverless workflows.",
  },
];

const smbcloudFits = [
  "You want an always-on database without cold start concerns.",
  "You are already using smbCloud Deploy or Auth and want the data layer in the same place.",
  "You do not need Postgres branching for preview environments or CI workflows.",
  "You prefer a predictable operational model over serverless autoscaling.",
];

const neonStillFits = [
  "Your architecture is serverless or edge-first and you want Postgres that matches it.",
  "You rely on Neon's branching for preview environments or per-PR databases.",
  "The free tier's scale-to-zero behavior saves you real money.",
  "You are deeply integrated with Neon's serverless driver or platform integrations.",
];

const faqs = [
  {
    question: "Is smbCloud GresIQ a Neon replacement?",
    answer:
      "For teams running traditional server-side apps that want an always-on managed database, it can be. If you never leaned on Neon's serverless scaling or branching features, GresIQ is worth evaluating.",
  },
  {
    question: "Does GresIQ support PostgreSQL?",
    answer:
      "GresIQ is built for relational database management and is designed to work alongside the smbCloud stack. It is not built around the serverless Postgres model the way Neon is.",
  },
  {
    question: "Will I notice cold starts with GresIQ?",
    answer:
      "No. GresIQ does not use a serverless compute model. Your database stays on and connections behave the same way they would with any managed relational database.",
  },
  {
    question: "Who should consider switching from Neon to GresIQ?",
    answer:
      "Teams using Neon as a hosted Postgres instance that do not rely on branching or scale-to-zero and would prefer to manage less tooling across fewer platforms.",
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Neon alternative for teams that want always-on managed Postgres",
    description:
      "Looking for a Neon alternative? smbCloud GresIQ is an always-on data layer inside the same platform as your app, auth, and mail, with no cold starts or serverless trade-offs.",
    path: "/neon-alternative",
    keywords: [
      "Neon alternative",
      "Neon Postgres alternative",
      "serverless Postgres alternative",
      "always-on managed database",
      "GresIQ database",
      "smbCloud GresIQ",
      "managed PostgreSQL",
    ],
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/neon-alternative#webpage"),
      url: absoluteUrl("/neon-alternative"),
      name: "Neon alternative for teams that want always-on managed Postgres",
      description:
        "Compare smbCloud GresIQ and Neon for teams that want a standard always-on database instead of serverless Postgres.",
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
          name: "Neon alternative",
          item: absoluteUrl("/neon-alternative"),
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

export default function NeonAlternativePage() {
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
            Looking for a Neon alternative?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Neon built something clever with serverless Postgres. But
            scale-to-zero and cold starts are the wrong trade-off for most
            server-side apps. smbCloud GresIQ gives you an always-on data layer
            inside the same platform as your app, auth, and mail, with no
            serverless surprises.
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
              Why teams look beyond Neon
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Usually they wanted managed Postgres. The serverless model came
              with it.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Neon is a genuine innovation in the Postgres space. But for Rails,
              Node.js, and Vapor apps running on standard servers, an always-on
              database is simpler to reason about and easier to operate. GresIQ
              keeps the database predictable and keeps it close to the rest of
              your stack.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              What GresIQ does well
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Always-on relational database management, with no cold starts or wake-up latency.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Lives inside the same platform as your app, auth, and mail.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Standard connection model. Works with the ORM and migration tooling you already use.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud GresIQ vs Neon
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
                Neon
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
                  {row.neon}
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
              Stay on Neon if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {neonStillFits.map((item) => (
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
              If Neon feels like the wrong model for your stack, try GresIQ.
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
                href="/supabase-alternative"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare Supabase alternative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
