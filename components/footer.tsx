import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.06] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
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
              Enterprise Power at Startup Velocity
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-500">
            <Link
              href="/about"
              className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/term-of-use"
              className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/smbcloudXYZ"
              target="_blank"
              className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              <FaGithub className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 dark:border-white/[0.06] pt-6">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} smbCloud. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            Powered by{" "}
            <a
              href="https://debian.org"
              target="_blank"
              className="font-medium hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Debian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
