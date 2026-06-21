import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCheckCircle,
  FaGlobe,
  FaLock,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const CONSOLE_URL = "https://console.smbcloud.xyz";

const offerings = [
  {
    name: "Starter",
    eyebrow: "Free forever",
    description:
      "Try smbCloud Auth with zero commitment. One auth app, 1,000 monthly active users, and the basics you need to ship login fast.",
    bullets: [
      "1 auth app with email/password and social login",
      "Up to 1,000 monthly active users",
      "Session management out of the box",
    ],
    cta: "Start for free",
    href: `${CONSOLE_URL}?plan=starter`,
    highlighted: false,
  },
  {
    name: "smbCloud Auth Business",
    eyebrow: "For production apps",
    description:
      "For apps that need real identity management. SSO, RBAC, audit logs, and an SLA your compliance team can live with.",
    bullets: [
      "Unlimited auth apps and collaborators",
      "SSO/SAML and role-based access control",
      "30-day audit logs with 99.9% SLA",
    ],
    cta: "Start business setup",
    href: `${CONSOLE_URL}?plan=business`,
    highlighted: true,
  },
];

const plans = [
  {
    key: "starter",
    name: "Starter",
    price: "$0",
    period: "/mo",
    overage: "",
    description:
      "For side projects, prototypes, and apps that are just getting started.",
    bullets: [
      "1,000 monthly active users",
      "1 auth app",
      "Email/password + social login",
      "Session management",
      "Community support",
    ],
    highlighted: false,
    cta: "Start for free",
    href: `${CONSOLE_URL}?plan=starter`,
  },
  {
    key: "pro",
    name: "Pro",
    price: "$29",
    period: "/mo",
    overage: "+ $0.005/MAU overage",
    description: "For growing apps that need more control and room to scale.",
    bullets: [
      "10,000 monthly active users",
      "5 auth apps, 3 collaborators",
      "Custom domain",
      "Webhooks + 7-day audit logs",
      "Standard support",
    ],
    highlighted: true,
    cta: "Choose Pro",
    href: `${CONSOLE_URL}?plan=pro`,
  },
  {
    key: "business",
    name: "Business",
    price: "$149",
    period: "/mo",
    overage: "+ $0.003/MAU overage",
    description:
      "For teams that need SSO, compliance controls, and enterprise-grade uptime.",
    bullets: [
      "100,000 monthly active users",
      "Unlimited apps + collaborators",
      "SSO/SAML + RBAC",
      "30-day audit logs, 99.9% SLA",
      "Priority support",
    ],
    highlighted: false,
    cta: "Choose Business",
    href: `${CONSOLE_URL}?plan=business`,
  },
  {
    key: "scale",
    name: "Scale",
    price: "Custom",
    period: "",
    overage: "",
    description:
      "For high-traffic apps that need dedicated infrastructure and a direct line to the team.",
    bullets: [
      "Everything in Business",
      "Custom MAU volume",
      "99.99% SLA",
      "Dedicated support",
      "Custom integrations",
    ],
    highlighted: false,
    cta: "Contact sales",
    href: "mailto:sales@smbcloud.xyz",
  },
];

const proofCards = [
  {
    title: "Own your auth stack",
    description:
      "No vendor lock-in, no black-box pricing. smbCloud Auth runs on your infrastructure, so your user data stays exactly where you put it.",
    icon: FaLock,
  },
  {
    title: "Ship faster",
    description:
      "SDK for Swift, web, and server. One integration covers login, sessions, and token refresh. Stop rebuilding auth for every project.",
    icon: FaRocket,
  },
  {
    title: "Scale without surprises",
    description:
      "Usage-based pricing tied to monthly active users. No per-seat gotchas, no hidden fees when your app starts growing.",
    icon: FaGlobe,
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "smbCloud Auth",
    description:
      "Authentication and identity management for your apps. Email/password, social login, SSO/SAML, RBAC, and session management with SDKs for Swift, web, and server.",
    path: "/auth",
    keywords: [
      "smbCloud Auth",
      "authentication service",
      "identity management",
      "SSO SAML",
      "social login",
      "auth SDK",
      "user management",
    ],
  }),
};

export default function AuthPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/auth#webpage"),
        url: absoluteUrl("/auth"),
        name: "smbCloud Auth",
        description: "Authentication and identity management for your apps.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "Service",
        name: "smbCloud Auth",
        serviceType: "Authentication and identity management",
        areaServed: "Worldwide",
        url: absoluteUrl("/auth"),
        offers: [
          {
            "@type": "Offer",
            name: "smbCloud Auth Starter",
            price: "0",
            priceCurrency: "USD",
            url: `${CONSOLE_URL}?plan=starter`,
          },
          {
            "@type": "Offer",
            name: "smbCloud Auth Pro",
            price: "29",
            priceCurrency: "USD",
            url: `${CONSOLE_URL}?plan=pro`,
          },
          {
            "@type": "Offer",
            name: "smbCloud Auth Business",
            price: "149",
            priceCurrency: "USD",
            url: `${CONSOLE_URL}?plan=business`,
          },
          {
            "@type": "Offer",
            name: "smbCloud Auth Scale",
            price: "0",
            priceCurrency: "USD",
            url: "mailto:sales@smbcloud.xyz",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <StructuredData data={structuredData} />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.22),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.16),transparent)]" />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
                Auth that gets out of your way.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                smbCloud Auth handles login, sessions, and identity so you can
                focus on the product. Start free with{" "}
                <span className="font-semibold">
                  1,000 monthly active users
                </span>
                , then scale to SSO, RBAC, and enterprise compliance when your
                app needs it.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={CONSOLE_URL}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
                >
                  Open Console
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                >
                  Back to services
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                Free Starter tier includes 1,000 MAU. No credit card required.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                What you get
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Identity management, not identity crisis.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                smbCloud Auth covers the full auth lifecycle. Login flows,
                session tokens, user management, and access control, all from
                one service with SDKs that work across platforms.
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Email/password and social login out of the box</span>
                </li>
                <li className="flex gap-3">
                  <FaShieldAlt className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>SSO/SAML and role-based access control</span>
                </li>
                <li className="flex gap-3">
                  <FaUsers className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>
                    Webhooks, audit logs, and team collaboration tools
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${CONSOLE_URL}?plan=starter`}
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Start for free
                </a>
                <a
                  href={`${CONSOLE_URL}?plan=pro`}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                >
                  See Pro plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offering cards */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <div
              key={offering.name}
              className={`rounded-2xl border p-6 sm:p-8 ${
                offering.highlighted
                  ? "border-indigo-200 bg-indigo-50/70 dark:border-indigo-500/25 dark:bg-indigo-500/10"
                  : "border-slate-200 bg-white dark:border-white/[0.06] dark:bg-white/[0.02]"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                {offering.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {offering.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                {offering.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {offering.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={offering.href}
                className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  offering.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                }`}
              >
                {offering.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why smbCloud Auth */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why smbCloud Auth
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Because auth is the foundation, not a bolted-on feature.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Every app needs login. Most teams build it from scratch, bolt on a
              third-party black box, or spend weeks wrestling with OAuth flows.
              smbCloud Auth gives you the whole stack so you can move on to the
              work that actually matters.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {proofCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.02]"
                >
                  <div className="inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-500 dark:bg-indigo-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-slate-200 px-6 py-20 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud Auth pricing
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Start free. Pay for what you use.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Every plan includes the full auth feature set. You only pay more
              when your app has more users. Simple.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-indigo-200 bg-indigo-50/70 shadow-sm dark:border-indigo-500/25 dark:bg-indigo-500/10"
                    : "border-slate-200 bg-white dark:border-white/[0.06] dark:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {plan.description}
                    </p>
                  </div>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[11px] font-semibold text-white">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period ? (
                      <span className="pb-1 text-sm text-slate-500 dark:text-slate-500">
                        {plan.period}
                      </span>
                    ) : null}
                  </div>
                  {plan.overage ? (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                      {plan.overage}
                    </p>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                Get started
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Start with Starter. Upgrade when your app takes off.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                Every smbCloud Auth plan includes the same core features. The
                only thing that changes is how many users you can serve and the
                level of support. Start free today and scale when you are ready.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href={`${CONSOLE_URL}?plan=starter`}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
              >
                Start for free
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
              >
                Back to services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
