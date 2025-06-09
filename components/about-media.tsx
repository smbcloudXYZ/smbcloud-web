import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function AboutMedia() {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center">
        <Image
          src={"/logo.png"}
          alt={"smbCloud logo"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center space-x-4">
        <Link href={"https://www.youtube.com/@smbcloudXYZ"} target="_blank" title="smbCloud YouTube channel">
          <FaYoutube size={30} />
        </Link>
        <Link href={"https://instagram.com/smbcloudXYZ"} target="_blank" title="smbCloud Instagram account">
          <FaInstagram size={30} />
        </Link>
        <Link href={"https://facebook.com/smbcloudXYZ"} target="_blank" title="smbCloud Facebook page">
          <FaFacebook size={30} />
        </Link>
      </div>
    </div>
  );
}
