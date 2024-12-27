import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function AboutMedia() {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center">
        <Image
          src={"/logo.png"}
          alt={"smbCloudXYZ logo"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center space-x-4">
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
    </div>
  );
}
