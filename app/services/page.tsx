import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import siteMetadata from "@/content/siteMetadata";
import { absoluteUrl, genPageMetadata } from "../seo";

const services = [
  {
    name: "Deploy",
    eyebrow: "Ship apps",
    description:
      "Deploy NodeJS, Swift, and Ruby apps with one command. No YAML maze. No container busywork just to get something online.",
    bullets: [
      "SSH-based deploys from the smb CLI",
      "NodeJS, Swift, and Ruby support out of the box",
      "Release history and rollback-friendly workflow",
    ],
  },
  {
    name: "Auth",
    eyebrow: "Accounts and access",
    description:
      "Handle sign-in, signup, sessions, and hosted auth flows without bolting together three different vendors first.",
    bullets: [
      "Console account signup and sign-in",
      "Hosted auth apps for end users",
      "User and access management across projects",
    ],
  },
  {
    name: "Mail",
    eyebrow: "Domain mail routing",
    description:
      "Set up one Mail app per project, add inbox routes for the domain, keep forwarding on, and start keeping a real record of what came in.",
    bullets: [
      "One Mail app per project",
      "Many inbox routes under one domain",
      "Forwarding plus stored inbound messages",
    ],
  },
  {
    name: "GresIQ",
    eyebrow: "Data layer",
    description:
      "Run the database side of your product inside the same platform instead of scattering app logic, auth, and data across disconnected tools.",
    bullets: [
      "Database-oriented service setup",
      "Connection and service management in one place",
      "Built to live alongside Deploy, Auth, and Mail",
    ],
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "Services",
    description:
      "Explore smbCloud services for deploys, auth, mail, and GresIQ. One platform for shipping apps, handling accounts, routing email, and managing the data layer.",
    path: "/services",
  }),
  keywords: [
    "smbCloud services",
    "app deployment platform",
    "hosted auth",
    "mail routing",
    "developer database platform",
    "NodeJS deployment",
    "Swift deployment",
    "Ruby deployment",
    "email forwarding platform",
    "authentication service",
    "GresIQ",
  ],
  alternates: {
    canonical: `${siteMetadata.siteUrl}/services`,
  },
  openGraph: {
    title: `Services | ${siteMetadata.title}`,
    description:
      "Deploy, Auth, Mail, and GresIQ live under one smbCloud platform instead of four disconnected products.",
    url: `${siteMetadata.siteUrl}/services`,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/services#webpage"),
        url: absoluteUrl("/services"),
        name: "smbCloud Services",
        description:
          "Deploy, Auth, Mail, and GresIQ live under one smbCloud platform instead of four disconnected tools.",
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
            name: "Services",
            item: absoluteUrl("/services"),
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "smbCloud services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          description: service.description,
        })),
      },
    ],
  };

  return (
    <div>
      <StructuredData data={servicesStructuredData} />
      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
              smbCloud services
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
            Four services. One platform.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Deploy apps, handle auth, route domain email, and keep the data
            layer close to the rest of your stack without stitching together
            four disconnected vendors.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              Open Console
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {service.name}
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why this matters
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Most teams do not need more tools. They need fewer seams.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Deploy, Auth, Mail, and GresIQ solve different problems. Still,
              they are all part of the same application stack. smbCloud keeps
              them close, so you spend less time stitching products together and
              more time shipping.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              A simple stack
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/[0.06] pb-4">
                <dt className="text-slate-500 dark:text-slate-400">Deploy</dt>
                <dd className="text-right font-medium text-slate-900 dark:text-white">
                  ship the app
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/[0.06] pb-4">
                <dt className="text-slate-500 dark:text-slate-400">Auth</dt>
                <dd className="text-right font-medium text-slate-900 dark:text-white">
                  handle accounts
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/[0.06] pb-4">
                <dt className="text-slate-500 dark:text-slate-400">Mail</dt>
                <dd className="text-right font-medium text-slate-900 dark:text-white">
                  route domain email
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">GresIQ</dt>
                <dd className="text-right font-medium text-slate-900 dark:text-white">
                  run the data layer
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-14 text-center shadow-2xl shadow-indigo-500/20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-white">
              Start with one service. Add the rest when you need them.
            </h2>
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              className="relative mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
