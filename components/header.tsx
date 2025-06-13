import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="mt-4 mb-8">
      <div className="flex items-center justify-between">
        <ModeToggle />
        <nav className="ml-auto text-sm font-medium space-x-6">
          <Link href="/">Home</Link>
          <Link href="https://docs.smbcloud.xyz" target="__blank">Docs</Link>
          <Link href="https://console.smbcloud.xyz" target="__blank">Console</Link>
        </nav>
      </div>
    </header>
  );
}
