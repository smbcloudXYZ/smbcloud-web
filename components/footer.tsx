// Generate footer

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcDebian } from "react-icons/fc";

export default function Footer() {
  return (
    <footer className="py-8 px-8 text-center text-gray-500 text-sm">
      <div className="flex justify-center space-x-4 m-2 mb-8">
        <Link href={"https://github.com/smbcloudXYZ"} target="_blank">
          <FaGithub size={30} className="m-2" />
          smbCloudXYZ
        </Link>
        <Link href={""} target="_blank">
          <FcDebian size={30} className="m-2" />
          Debian powered
        </Link>
      </div>
      <div className="flex justify-center space-x-4 m-2">
        <Link href={"privacy-policy"}>
          Privacy Policy
        </Link>
        <Link href={"term-of-use"}>
          Term of Use
        </Link> 
      </div>
      <p className="m-2">
        &copy; {new Date().getFullYear()} <a href="https://www.smbcloud.xyz">smbCloudXYZ</a>
      </p>
    </footer>
  )
}