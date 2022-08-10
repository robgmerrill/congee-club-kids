import logo from "../public/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <ul className="flex justify-around items-center space-between border-b-8 border-red-400 h-36 w-full text-2xl">
      <Link href="/">
        <li className="cursor-pointer">Home</li>
      </Link>
      <Link href="/about">
        <li className="cursor-pointer">About</li>
      </Link>
      <Link href="/contact">
        <li className="cursor-pointer">Contact</li>
      </Link>
      <div className="h-24 w-24">
        <Image src={logo} alt="logo" fill="responsive" />
      </div>

      <Link href="https://congee-club-kids.myshopify.com/">
        <li className="cursor-pointer">Shop</li>
      </Link>
      <li className="cursor-pointer">Blog</li>
      <button className="rounded-3xl border-2 w-36 bg-yellow-300 border-black h-16 cursor-pointer">
        Donate
      </button>
    </ul>
  );
}
