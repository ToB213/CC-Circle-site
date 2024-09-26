/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        {/* <Logo num={150} /> */}
        <CCC />
      </Link>
      <SNSIcons />
    </div>
  );

  // function Logo({ num: num }: Readonly<{ num: number }>) {
  //   return <Image src="/logo.svg" alt="logo" width={num} height={num} />;
  // }

  function CCC() {
    return <div className="text-7xl font-bold">CCC</div>;
  }

  function SNSIcons() {
    return (
      <div>
        <FontAwesomeIcon className="size-5 px-2" icon={faGithub} />
        <FontAwesomeIcon className="size-5" icon={faXTwitter} />
      </div>
    );
  }
}
