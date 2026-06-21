"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-white/[0.06] bg-white/80 dark:bg-[#0A0E14]/90 backdrop-blur-md">
      {/* Announcement banner */}
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

      {/* Main nav bar */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-[38px] items-center justify-center rounded-md bg-indigo-600 text-white">
              <span className="text-[10px] font-bold tracking-tight leading-none">
                smb
              </span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white tracking-tight text-sm">
              smbCloud Platform
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link
              href="/auth"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Auth
            </Link>
            <Link
              href="/mail"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Mail
            </Link>
            <Link
              href="https://docs.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {/* Desktop CTA */}
            <Link
              href="https://console.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-md bg-slate-900 dark:bg-white px-3.5 py-1.5 text-xs font-semibold text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
            >
              Create account →
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="sm:hidden flex items-center justify-center rounded-md p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {menuOpen ? (
                /* X icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-200/60 dark:border-white/[0.06] bg-white dark:bg-[#0A0E14]">
          <nav className="mx-auto max-w-5xl flex flex-col px-6 py-3 gap-0.5">
            <Link
              href="/auth"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Auth
            </Link>
            <Link
              href="/mail"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Mail
            </Link>
            <Link
              href="https://docs.smbcloud.xyz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
            <div className="pt-2 pb-1">
              <Link
                href="https://console.smbcloud.xyz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-md bg-slate-900 dark:bg-white px-4 py-2.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
              >
                Create account →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
