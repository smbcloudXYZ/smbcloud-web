import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Platform" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/term-of-use", label: "Terms" },
];

const resourceLinks = [
  { href: "/posts", label: "Blog" },
  { href: "/kti", label: "KTI (ID)" },
  {
    href: "https://docs.smbcloud.xyz",
    label: "Docs",
    external: true,
  },
  {
    href: "https://sigit.si/",
    label: "siGit",
    external: true,
  },
  {
    href: "https://ondeinference.com/",
    label: "Onde Inference",
    external: true,
  },
  {
    href: "https://github.com/smbcloudXYZ",
    label: "GitHub",
    external: true,
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-[30px] items-center justify-center rounded bg-indigo-600 text-white">
                <span className="text-[9px] font-bold leading-none">smb</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
                smbCloud
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-500 dark:text-slate-500">
              Enterprise power at startup velocity
            </p>
            <p className="mt-2 text-xs text-slate-400 dark:text-slate-600">
              Built by Splitfire AB in Stockholm, Sweden.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-sm text-slate-500 dark:text-slate-500">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                Company
              </p>
              <div className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                Resources
              </p>
              <div className="flex flex-col gap-3">
                {resourceLinks.map((link) =>
                  link.external ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                    >
                      {link.icon && <link.icon className="h-3.5 w-3.5" />}
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 dark:border-white/[0.06] pt-6">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Splitfire AB (smbCloud). All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            support@smbcloud.xyz
          </p>
        </div>
      </div>
    </footer>
  );
}
