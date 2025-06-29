// Generate footer

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcDebian } from "react-icons/fc";

export default function Footer() {
  return (
    <footer className="py-8 px-8 text-center text-gray-500 text-sm">
      <div className="flex justify-center space-x-4 m-2 mb-8">
        <Link
          href={"https://github.com/smbcloudXYZ"}
          target="_blank"
          title="smbCloud GitHub organization"
        >
          <FaGithub size={30} className="m-2" />
        </Link>
        <Link
          href={"https://debian.org"}
          target="_blank"
          title="smbCloud is powered by Debian"
        >
          <FcDebian size={30} className="m-2" />
        </Link>
      </div>
      <div className="flex justify-center space-x-4 m-2">
        <Link href="/about" title="smbCloud about page">
          About
        </Link>
        <Link href="/privacy-policy" title="smbCloud privacy policy page">
          Privacy Policy
        </Link>
        <Link href="/term-of-use" title="smbCloud term of use page">
          Term of Use
        </Link>
        <Link href="/contact" title="smbCloud contact page">
          Contact
        </Link>
      </div>
      <p className="m-2">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://smbcloud.xyz">smbCloud</a>
      </p>
    </footer>
  );
}
