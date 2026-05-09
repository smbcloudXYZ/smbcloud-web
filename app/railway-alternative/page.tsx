import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const comparisonRows = [
  {
    label: "Deploy workflow",
    smbcloud: "Run `smb`, deploy over SSH, and watch the logs.",
    railway:
      "Quick platform workflow for apps and services, with more platform around it.",
  },
  {
    label: "Best fit",
    smbcloud:
      "Small teams that want a narrower product and a simpler deploy story.",
    railway: "Teams that like Railway's broader approach and flexibility.",
  },
  {
    label: "Runtime focus",
    smbcloud: "Node.js, Ruby on Rails, and Swift/Vapor.",
    railway: "General app platform across more service shapes.",
  },
  {
    label: "Why teams pick it",
    smbcloud: "Because the smaller surface area feels easier to work with.",
    railway: "Because they want more flexibility under one roof.",
  },
];

const smbcloudFits = [
  "You want a calmer, more focused deploy flow.",
  "You are mostly shipping Node.js, Rails, or Vapor.",
  "You prefer SSH and straightforward app operations.",
  "You would rather have less platform to think about.",
];

const railwayStillFits = [
  "You want one platform for lots of service types.",
  "Your team already likes how Railway works.",
  "You need flexibility beyond smbCloud's current focus.",
];

const bestFor = [
  "Founders and small product teams",
  "Agencies that want a repeatable deploy workflow",
  "Node.js backends and dashboards",
  "Rails apps",
  "Vapor apps",
];

const faqs = [
  {
    question: "Is smbCloud better than Railway?",
    answer:
      "Depends what you want. If you want a simpler SSH-first deploy flow for Node.js, Rails, or Vapor, maybe yes. If you want a broader platform, probably not.",
  },
  {
    question: "What makes smbCloud different from Railway?",
    answer: "It is narrower. That is intentional.",
  },
  {
    question: "Who should consider switching from Railway?",
    answer:
      "Teams that want less platform in the middle and a deploy flow that feels easier to follow.",
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Railway alternative for Node.js, Rails, and Vapor",
    description:
      "smbCloud is a Railway alternative for small teams that want an SSH-first deploy workflow for Node.js, Ruby on Rails, and Swift/Vapor apps.",
    path: "/railway-alternative",
    keywords: [
      "Railway alternative",
      "Railway replacement",
      "SSH-first deploy platform",
      "deploy Node.js app",
      "deploy Ruby on Rails app",
      "deploy Vapor app",
      "small team hosting platform",
    ],
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/railway-alternative#webpage"),
      url: absoluteUrl("/railway-alternative"),
      name: "Railway alternative for small teams",
      description:
        "Compare smbCloud and Railway for small-team app deployment workflows.",
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
          name: "Railway alternative",
          item: absoluteUrl("/railway-alternative"),
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

export default function RailwayAlternativePage() {
  return (
    <div>
      <StructuredData data={structuredData} />

      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
              Railway alternative
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
            Looking for a Railway alternative?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            We built smbCloud for teams that like fast deploys but do not want
            the platform to keep getting bigger around the work. SSH-first, one
            command, not much ceremony.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              Start deploying
            </Link>
            <Link
              href="/posts/cli"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
            >
              Install the CLI
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why people leave Railway
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Usually they are not asking for more features. They want less to
              think about.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Railway is fast to get started with. I get the appeal. But some
              teams eventually decide the broader platform is not actually the
              part they wanted.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              What smbCloud does well
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Deploy over SSH with one command.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Support for Node.js, Rails, and Swift/Vapor.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>A smaller surface area, which is kind of the point.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud vs Railway
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              If you want a focused platform, this is the trade.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.06]">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-slate-50 text-sm font-semibold text-slate-900 dark:bg-white/[0.03] dark:text-white">
              <div className="border-b border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                Area
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                smbCloud
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                Railway
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
                  {row.railway}
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
              Pick smbCloud if
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
              Stay on Railway if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {railwayStillFits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Best fit
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              I would look at smbCloud if you keep thinking, "I just want to
              deploy the app."
            </h2>
          </div>
          <ul className="rounded-2xl border border-slate-200 bg-white p-8 text-sm leading-7 text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400">
            {bestFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-slate-200 py-3 last:border-0 last:pb-0 first:pt-0 dark:border-white/[0.06]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
              If Railway feels a bit too broad, try smbCloud.
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Try it on one app. You will know pretty quickly if the smaller
              workflow is what you wanted.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://console.smbcloud.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
              >
                Try smbCloud
              </Link>
              <Link
                href="/heroku-alternative"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare Heroku alternative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
