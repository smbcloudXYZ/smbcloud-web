"use client"

import { JSX, useState } from "react";

const runnerSnippets = {
  NodeJS: `$ smb
✔ Valid config
✔ NodeJs 🟩 runner detected
✔ Valid project
✔ Valid deployment setup
☱ Deploying > Use key path: ~/.ssh/id_11@smbcloud
☱ Deploying > Building the app ✔
☲ Deploying > App restart ✔
☱ Deploying > App is running ✔
✔ Deployment complete.`,
  Ruby: `$ smb
✔ Valid config
✔ Ruby 🟥 runner detected (coming soon)
✔ Valid project
✔ Valid deployment setup
☱ Deploying > Use key path: ~/.ssh/id_11@smbcloud
☱ Deploying > Building the app ✔
☲ Deploying > App restart ✔
☱ Deploying > App is running ✔
✔ Deployment complete.`,
  Swift: `$ smb
✔ Valid config
✔ Swift 🟧 runner detected (coming soon)
✔ Valid project
✔ Valid deployment setup
☱ Deploying > Use key path: ~/.ssh/id_11@smbcloud
☱ Deploying > Building the app ✔
☲ Deploying > App restart ✔
☱ Deploying > App is running ✔
✔ Deployment complete.`
};

export default function TabbedRunner() {
  const [tab, setTab] = useState<keyof typeof runnerSnippets>('NodeJS');
  const tabs: { key: keyof typeof runnerSnippets; label: string }[] = [
    { key: 'NodeJS', label: 'NodeJS' },
    { key: 'Ruby', label: 'Ruby (coming soon)' },
    { key: 'Swift', label: 'Swift (coming soon)' }
  ];
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              border: 'none',
              background: tab === t.key ? '#222' : '#eee',
              color: tab === t.key ? '#fff' : '#222',
              padding: '4px 12px',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: tab === t.key ? 'bold' : 'normal'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <pre>
        {
          runnerSnippets[tab]
            .split('\n')
            .map((line, idx) => (
              <span key={idx}>
                {line.split('✔').reduce((acc, part, i, arr) => {
                  if (i === arr.length - 1) return [...acc, part];
                  return [
                    ...acc,
                    part,
                    <span key={`check-${i}`} style={{ color: 'green' }}>✔</span>
                  ];
                }, [] as (string | JSX.Element)[])}
                {'\n'}
              </span>
            ))
        }
      </pre>
    </div>
  );
}
