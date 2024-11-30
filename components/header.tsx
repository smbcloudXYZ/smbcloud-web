import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <ModeToggle />
        <nav className="ml-auto text-sm font-medium space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
