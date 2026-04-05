import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/smbcloudXYZ",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.youtube.com/@smbcloudXYZ",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://instagram.com/smbcloudXYZ",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://facebook.com/smbcloudXYZ",
    label: "Facebook",
    icon: FaFacebook,
  },
];

export default function AboutMedia() {
  return (
    <div className="mb-12 flex flex-col items-start gap-6 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 sm:flex-row sm:items-center">
      {/* Brand mark */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
        <span className="text-sm font-black tracking-tighter leading-none">
          smb
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-900 dark:text-white tracking-tight">
          smbCloud
        </p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          The unified cloud platform for modern app deployment.
        </p>

        {/* Social links */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={`smbCloud on ${label}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
