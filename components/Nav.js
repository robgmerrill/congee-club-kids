import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <ul className="flex justify-around items-center space-between border-b-8 border-red-400 h-36 w-full text-2xl">
      <li>Home</li>
      <li onClick={() => scroll.scrollTo(700)} className="cursor-pointer">
        About
      </li>
      <li onClick={() => scroll.scrollTo(700)} className="cursor-pointer">
        Contact
      </li>
      <Image src={logo} alt="logo" width="120px" />

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
