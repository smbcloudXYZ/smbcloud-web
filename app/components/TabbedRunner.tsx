"use client";

import { useState } from "react";

type Runtime = "NodeJS" | "Swift" | "Ruby";

interface TerminalLine {
  text: string;
  type: "command" | "success" | "progress" | "muted";
}

const runnerSnippets: Record<Runtime, TerminalLine[]> = {
  NodeJS: [
    { text: "$ smb", type: "command" },
    { text: "✔ Valid config", type: "success" },
    { text: "✔ NodeJS 🟩 runner detected", type: "success" },
    { text: "✔ Valid project", type: "success" },
    { text: "✔ Valid deployment setup", type: "success" },
    { text: "☱ Deploying › Use key path: ~/.ssh/id_11@smbcloud", type: "progress" },
    { text: "☱ Deploying › Building the app ✔", type: "progress" },
    { text: "☲ Deploying › App restart ✔", type: "progress" },
    { text: "☱ Deploying › App is running ✔", type: "progress" },
    { text: "✔ Deployment complete.", type: "success" },
  ],
  Swift: [
    { text: "$ smb", type: "command" },
    { text: "✔ Valid config", type: "success" },
    { text: "✔ Swift 🟧 runner detected", type: "success" },
    { text: "✔ Valid project", type: "success" },
    { text: "✔ Valid deployment setup", type: "success" },
    { text: "☱ Deploying › Use key path: ~/.ssh/id_11@smbcloud", type: "progress" },
    { text: "☱ Deploying › Building the app ✔", type: "progress" },
    { text: "☲ Deploying › App restart ✔", type: "progress" },
    { text: "☱ Deploying › App is running ✔", type: "progress" },
    { text: "✔ Deployment complete.", type: "success" },
  ],
  Ruby: [
    { text: "$ smb", type: "command" },
    { text: "✔ Valid config", type: "success" },
    { text: "✔ Ruby 🟥 runner detected", type: "success" },
    { text: "✔ Valid project", type: "success" },
    { text: "✔ Valid deployment setup", type: "success" },
    { text: "☱ Deploying › Use key path: ~/.ssh/id_11@smbcloud", type: "progress" },
    { text: "☱ Deploying › Building the app ✔", type: "progress" },
    { text: "☲ Deploying › App restart ✔", type: "progress" },
    { text: "☱ Deploying › App is running ✔", type: "progress" },
    { text: "✔ Deployment complete.", type: "success" },
  ],
};

const lineClass: Record<TerminalLine["type"], string> = {
  command: "text-slate-200",
  success: "text-emerald-400",
  progress: "text-sky-400",
  muted: "text-slate-500",
};

export default function TabbedRunner() {
  const [tab, setTab] = useState<Runtime>("NodeJS");
  const tabs: Runtime[] = ["NodeJS", "Swift", "Ruby"];
  const lines = runnerSnippets[tab];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0D1117] shadow-xl shadow-slate-900/5 dark:shadow-none">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#161B22] px-4 py-3">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Runtime tabs */}
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded px-3 py-1 text-xs font-medium transition-all ${
                tab === t
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-16" />
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        <div className="space-y-0.5">
          {lines.map((line, idx) => (
            <div key={idx} className={lineClass[line.type]}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
