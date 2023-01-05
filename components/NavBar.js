import Link from "next/link";
import { useState } from "react";
import Logo from "../public/logo1.png";
import Image from "next/image";
import Example from "./Logo";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    console.log({ active });
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Link className="text-xl font-semibold" href="/">
              {/* <button onClick={handleClick}> */}
              <Image src={Logo} width="56px" height="56px" alt="logo" />
              {/* <Example /> */}
              {/* </button> */}
            </Link>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-yellow-300 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <button onClick={handleClick}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-300 hover:text-white text-xl">
                  Home
                </a>
              </button>
            </Link>
            <Link href="/about">
              <button onClick={handleClick}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-300 hover:text-white text-xl">
                  About us
                </a>
              </button>
            </Link>
            <Link href="/contact">
              <button onClick={handleClick}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-300 hover:text-white text-xl">
                  Contact
                </a>
              </button>
            </Link>
            <a
              href="https://6c5c71.myshopify.com/password"
              target="_blank"
              rel="noreferrer"
            >
              <button onClick={handleClick}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-300 hover:text-white text-xl">
                  Shop
                </a>
              </button>
            </a>

            {/* <Link href="https://congee-club-kids.myshopify.com/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-300 hover:text-white">
                Store
              </a>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}
