import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const comparisonRows = [
  {
    label: "Primary job",
    smbcloud:
      "Handle sign-in, signup, sessions, and hosted auth flows without extra platform sprawl.",
    auth0:
      "Provide a broad identity platform with many enterprise-oriented capabilities.",
  },
  {
    label: "Best fit",
    smbcloud:
      "Small teams that want hosted auth to stay straightforward.",
    auth0:
      "Teams that need a broader identity stack and are willing to own the complexity.",
  },
  {
    label: "Product shape",
    smbcloud: "Focused auth service inside the smbCloud platform.",
    auth0: "Large identity platform with more moving parts and deeper scope.",
  },
  {
    label: "Why teams pick it",
    smbcloud: "Because auth should not turn into its own side project.",
    auth0: "Because identity is large enough to justify a larger toolset.",
  },
];

const smbcloudFits = [
  "You want hosted sign-in, signup, and session flows.",
  "You want auth to stay out of the way of the product.",
  "You do not want to spend half the week configuring identity plumbing.",
  "You want a cleaner fit for a small team shipping quickly.",
];

const auth0StillFits = [
  "You need a broader identity platform with deeper enterprise scope.",
  "Your organization already runs substantial Auth0 workflows.",
  "The extra complexity is acceptable because identity is a major internal system.",
];

const bestFor = [
  "Small product teams",
  "SaaS apps that need hosted auth fast",
  "Projects that want auth close to deploy and mail inside one platform",
  "Founders who want sessions and sign-in solved without a new platform problem",
  "Teams that want hosted auth without a giant identity stack",
];

const faqs = [
  {
    question: "Is smbCloud Auth an Auth0 replacement?",
    answer:
      "For some teams, yes. If you want hosted sign-in, signup, sessions, and user management without adopting a broader identity stack, smbCloud Auth may fit better. If identity is large and complex enough to justify a bigger platform, Auth0 may fit better.",
  },
  {
    question: "What is the biggest difference between smbCloud Auth and Auth0?",
    answer:
      "Auth0 is broader. smbCloud Auth is narrower on purpose.",
  },
  {
    question: "Who should switch from Auth0 to smbCloud Auth?",
    answer:
      "Teams that feel like they bought a bigger identity platform than they actually needed.",
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Auth0 alternative for simpler hosted auth",
    description:
      "smbCloud Auth is an Auth0 alternative for teams that want hosted sign-in, signup, sessions, and auth flows without adopting a larger identity platform than they need.",
    path: "/auth0-alternative",
    keywords: [
      "Auth0 alternative",
      "hosted auth alternative",
      "sign in and signup platform",
      "session management platform",
      "hosted auth flows",
      "identity platform alternative",
      "smbCloud Auth",
    ],
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/auth0-alternative#webpage"),
      url: absoluteUrl("/auth0-alternative"),
      name: "Auth0 alternative for simpler hosted auth",
      description:
        "Compare smbCloud Auth and Auth0 for simpler hosted auth workflows.",
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
          name: "Auth0 alternative",
          item: absoluteUrl("/auth0-alternative"),
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

export default function Auth0AlternativePage() {
  return (
    <div>
      <StructuredData data={structuredData} />

      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
              smbCloud Auth
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
            Looking for an Auth0 alternative?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            smbCloud Auth is for teams that want hosted auth flows without
            turning identity into its own platform project. Sign-in, signup,
            sessions, and hosted auth should not be heavier than the app.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              Create free account
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
            >
              Explore smbCloud Auth
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why teams compare them
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Usually this comes down to how much identity platform you actually want.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Some teams really do need a larger identity stack. Others mostly
              need auth to work well and stay out of the way.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              What smbCloud Auth does well
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Hosted sign-in and signup flows.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>Sessions and account workflows that stay manageable.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <span>A smaller auth product for teams that want less auth sprawl.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud Auth vs Auth0
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              One is broader. One is simpler. That is the trade.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.06]">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-slate-50 text-sm font-semibold text-slate-900 dark:bg-white/[0.03] dark:text-white">
              <div className="border-b border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                Area
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                smbCloud Auth
              </div>
              <div className="border-b border-l border-slate-200 px-5 py-4 dark:border-white/[0.06]">
                Auth0
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
                  {row.auth0}
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
              Pick smbCloud Auth if
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
              Stay with Auth0 if
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {auth0StillFits.map((item) => (
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
              A good fit if you want hosted auth without giving auth its own empire.
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
              If auth keeps getting bigger than the app, try smbCloud Auth.
            </h2>
            <p className="relative mt-4 text-indigo-200">
              Create an account and see if the smaller auth workflow is the better fit.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://console.smbcloud.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
              >
                Create free account
              </Link>
              <Link
                href="/clerk-alternative"
                className="inline-flex rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare Clerk alternative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
