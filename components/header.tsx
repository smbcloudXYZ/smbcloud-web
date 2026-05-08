import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-white/[0.06] bg-white/80 dark:bg-[#0A0E14]/90 backdrop-blur-md">
      <div className="border-b border-slate-200/60 bg-slate-900 text-white dark:border-white/[0.06] dark:bg-[#11162A]">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-2 text-center text-[11px] font-medium tracking-wide text-slate-200 lg:px-8">
          <Link
            href="https://console.smbcloud.xyz/signup-mailx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Get a free @smbcloud.xyz inbox with smbCloud MailX →
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-[38px] items-center justify-center rounded-md bg-indigo-600 text-white">
              <span className="text-[10px] font-bold tracking-tight leading-none">
                smb
              </span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white tracking-tight text-sm">
              smbCloud
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link
              href="/"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/kti"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              KTI (ID)
            </Link>
            <Link
              href="/posts"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-md bg-slate-900 dark:bg-white px-3.5 py-1.5 text-xs font-semibold text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
            >
              Create account →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
