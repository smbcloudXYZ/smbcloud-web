// Generate footer

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm">
      <div className="flex justify-center space-x-4 m-2">
        <Link href={"https://www.youtube.com/@smbcloudXYZ"} target="_blank">
          <FaYoutube size={30} />
          smbCloudXYZ
        </Link>
        <Link href={"https://instagram.com/smbcloudXYZ"} target="_blank">
          <FaInstagram size={30} />
          smbCloudXYZ
        </Link>
        <Link href={"https://facebook.com/smbcloudXYZ"} target="_blank">
          <FaFacebook size={30} />
          smbCloudXYZ
        </Link>
      </div>
      <p className="m-4">
        &copy; {new Date().getFullYear()} <a href="https://www.smbcloud.xyz">smbCloudXYZ</a>
      </p>
    </footer>
  )
}