import type { Metadata } from "next";
import Link from "next/link";
import {
  FaApple,
  FaCheckCircle,
  FaGlobe,
  FaInbox,
  FaShieldAlt,
} from "react-icons/fa";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, genPageMetadata } from "../seo";

const FREE_SIGNUP_URL = "https://console.smbcloud.xyz/signup-mailx";
const BUSINESS_SIGNUP_URL =
  "https://console.smbcloud.xyz/signup-mailx?business=true";
const MAILX_WEB_URL = "https://console.smbcloud.xyz/mail/x";
const TESTFLIGHT_URL = "https://testflight.apple.com/join/rXW6vYXJ";

const offerings = [
  {
    name: "Free hosted email",
    eyebrow: "@smbcloud.xyz",
    description:
      "A hosted inbox on the shared smbCloud Mail domain. Good if you want to try the product, keep things simple, and live in MailX.",
    bullets: [
      "Hosted @smbcloud.xyz inbox",
      "MailX on web, iOS, macOS, Android, Linux, and Windows",
      "Best fit for early access and personal use",
    ],
    cta: "Get a free inbox",
    href: FREE_SIGNUP_URL,
    highlighted: false,
  },
  {
    name: "smbCloud Mail Business",
    eyebrow: "Your own domain",
    description:
      "Business email with your own domain. Your quotes, invoices, and replies come from @yourcompany.com, not a Gmail address.",
    bullets: [
      "Custom domain email",
      "Deliverability score and outbound controls",
      "MailX for the whole team",
    ],
    cta: "Start business setup",
    href: BUSINESS_SIGNUP_URL,
    highlighted: true,
  },
];

const plans = [
  {
    key: "starter",
    name: "Starter",
    price: "$15",
    period: "/mo",
    description:
      "For the local shop, the consultant, or the team that needs to stop looking tiny.",
    bullets: [
      "Up to 5 team members",
      "Custom domain email",
      "MailX app access",
      "Deliverability score",
    ],
    highlighted: false,
  },
  {
    key: "business",
    name: "Business",
    price: "$49",
    period: "/mo",
    description:
      "For teams that send newsletters, handle sales replies, and need one inbox story that makes sense.",
    bullets: [
      "Unlimited team members",
      "Newsletter sends",
      "Priority Inbox for client replies",
      "Basic automation",
    ],
    highlighted: true,
  },
  {
    key: "premium",
    name: "Premium",
    price: "$99",
    period: "/mo",
    description:
      "For higher volume sending, tighter security, and a human who can actually help when something goes sideways.",
    bullets: [
      "Everything in Business",
      "High-volume sending",
      "Advanced encryption",
      "Personal Account Assistant",
    ],
    highlighted: false,
  },
];

const proofCards = [
  {
    title: "Look like a real business",
    description:
      "Clients notice the sender line first. you@yourcompany.com lands better than another Gmail address.",
    icon: FaInbox,
  },
  {
    title: "Keep spam anxiety down",
    description:
      "smbCloud Mail watches deliverability, so you are not guessing whether your invoice disappeared into Junk.",
    icon: FaShieldAlt,
  },
  {
    title: "Use one app everywhere",
    description:
      "MailX is how people actually use the service. Web, desktop, phone. Same product, same inbox.",
    icon: FaGlobe,
  },
];

export const metadata: Metadata = {
  ...genPageMetadata({
    title: "smbCloud Mail",
    description:
      "Free hosted @smbcloud.xyz inboxes and business email with your own domain. Use smbCloud Mail through the MailX app on web, desktop, and mobile.",
    path: "/mail",
    keywords: [
      "smbCloud Mail",
      "business email hosting",
      "custom domain email",
      "hosted @smbcloud.xyz inbox",
      "MailX app",
      "email for small business",
    ],
  }),
};

export default function MailPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/mail#webpage"),
        url: absoluteUrl("/mail"),
        name: "smbCloud Mail",
        description:
          "Free hosted @smbcloud.xyz inboxes and business email with your own domain.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "Service",
        name: "smbCloud Mail",
        serviceType: "Hosted email service",
        areaServed: "Worldwide",
        url: absoluteUrl("/mail"),
        offers: [
          {
            "@type": "Offer",
            name: "smbCloud Mail Starter",
            price: "15",
            priceCurrency: "USD",
            url: `${BUSINESS_SIGNUP_URL}&plan=starter`,
          },
          {
            "@type": "Offer",
            name: "smbCloud Mail Business",
            price: "49",
            priceCurrency: "USD",
            url: `${BUSINESS_SIGNUP_URL}&plan=business`,
          },
          {
            "@type": "Offer",
            name: "smbCloud Mail Premium",
            price: "99",
            priceCurrency: "USD",
            url: `${BUSINESS_SIGNUP_URL}&plan=premium`,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <StructuredData data={structuredData} />

      <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(249,115,22,0.22),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(249,115,22,0.16),transparent)]" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 dark:border-orange-500/30 dark:bg-orange-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-700 dark:text-orange-300">
              smbCloud Mail
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.05]">
                Email that does not make your business look small.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                smbCloud Mail gives you two ways in. Start with a free hosted
                inbox on <span className="font-semibold">@smbcloud.xyz</span>,
                or set up{" "}
                <span className="font-semibold">smbCloud Mail Business</span>{" "}
                with your own domain. Either way, you use MailX to read, reply,
                and keep moving.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BUSINESS_SIGNUP_URL}
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.98]"
                >
                  Start business setup
                </a>
                <a
                  href={FREE_SIGNUP_URL}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                >
                  Get a free inbox
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                Free personal inboxes live on @smbcloud.xyz. Business inboxes
                use your own domain.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                MailX
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                One client app. All your inboxes.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                smbCloud Mail is the service. MailX is the app people use to
                actually get work done. Web console, desktop, phone. Same inbox.
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                  <span>Web at console.smbcloud.xyz/mail/x</span>
                </li>
                <li className="flex gap-3">
                  <FaApple className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                  <span>iOS and macOS through App Store and TestFlight</span>
                </li>
                <li className="flex gap-3">
                  <FaGlobe className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                  <span>
                    Android, Linux, and Windows through the Tauri client family
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAILX_WEB_URL}
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Open MailX web
                </a>
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                >
                  Join TestFlight
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <div
              key={offering.name}
              className={`rounded-2xl border p-6 sm:p-8 ${
                offering.highlighted
                  ? "border-orange-200 bg-orange-50/70 dark:border-orange-500/25 dark:bg-orange-500/10"
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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={offering.href}
                className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  offering.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-400"
                    : "bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                }`}
              >
                {offering.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              Why people pick smbCloud Mail
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Because email is still where trust gets won or lost.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              If your quote lands in spam, it does not matter how good the quote
              was. If your invoice comes from a random Gmail address, you start
              the conversation one step behind. smbCloud Mail fixes that part.
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
                  <div className="inline-flex rounded-xl bg-orange-50 p-3 text-orange-500 dark:bg-orange-500/10">
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

      <section className="border-y border-slate-200 px-6 py-20 dark:border-white/[0.06] lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              smbCloud Mail Business pricing
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Flat monthly pricing. No weird surprises.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Small businesses hate mystery bills. Fair enough. These plans are
              simple on purpose.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-orange-200 bg-orange-50/70 shadow-sm dark:border-orange-500/25 dark:bg-orange-500/10"
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
                    <span className="rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-slate-500 dark:text-slate-500">
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${BUSINESS_SIGNUP_URL}&plan=${plan.key}`}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-white/[0.12] dark:text-slate-200 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                The first win
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Your client sees your domain and takes you seriously.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
                That is the moment that matters. The sender line looks right.
                The reply comes back to the right place. The business feels more
                real because it is more real.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href={BUSINESS_SIGNUP_URL}
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.98]"
              >
                Start smbCloud Mail Business
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
