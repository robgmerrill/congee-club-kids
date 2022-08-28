import { motion } from "framer-motion";
import steamer from "./dim-sum-steamer.png";
import HeroImage from "./hero-image.png";
import kickstarter from "./Kickstarter.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col md:flex-row"
        style={{ backgroundColor: "#97FFE5", height: "calc(100vh - 100px)" }}
      >
        <div className="md:w-1/2">
          <div className="flex justify-center items-center flex-col text-6xl md:text-9xl">
            <h2>Congee</h2>
            <p>Club Kids</p>
          </div>
          <div className="text-2xl md:text-4xl flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-3xl  p-4 w-64"
              style={{ backgroundColor: "#EBE152" }}
            >
              Button
            </motion.button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={HeroImage}
            height="350px"
            width="350px"
            alt="steamer basket"
          />
        </div>
      </div>
      <div
        className="bg-white h-96 flex justify-center items-center "
        style={{ boxShadow: "inset 0 0 5px gray" }}
      >
        <div
          className="px-4 md:px-0 md:text-center md:w-4/5"
          style={{ fontFamily: "Andika" }}
        >
          Welcome! We’re Congee Club Kids, a brand that celebrates AAPI culture
          through its publication of children’s books! Thank you for being here.
          More information about our first book launch will be coming soon. For
          now, follow us on{" "}
          <span className="underline">
            <Link href="https://www.instagram.com/congeeclubkids/">
              Instagram
            </Link>
          </span>{" "}
          or{" "}
          <span className="underline">
            <Link href="https://www.facebook.com/congeeclubkids">Facebook</Link>
          </span>{" "}
          updates! and sign up for our newsletter for more
        </div>
      </div>
    </>
  );
}
