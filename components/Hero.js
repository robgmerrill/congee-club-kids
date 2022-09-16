import { motion } from "framer-motion";
import steamer from "./dim-sum-steamer.png";
import HeroImage from "./hero-image.png";
import kickstarter from "./Kickstarter.png";
import Image from "next/image";
import Squiggle from "./squiggle.png";
import Link from "next/link";
import Subscribe from "./Subscribe";
import NewsLetterSignUpForm from "./NewsletterSignUpForm";
import styled from "styled-components";
import { useEffect } from "react";

const LinkWrapper = styled.span`
  /* .hover-3 { */
  font-weight: bold;
  --b: 0.1em; /* the thickness of the line */
  --c: #8a3ab9; /* the color */

  color: #0000;
  cursor: pointer;
  padding-block: var(--b);
  background: linear-gradient(var(--c) 50%, #000 0) 0%
      calc(100% - var(--_p, 0%)) / 100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
      no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.3s var(--_s, 0s) linear,
    background-size 0.3s calc(0.3s - var(--_s, 0s));
  /* } */
  :hover {
    --_p: 100%;
    --_s: 0.3s;
  }
`;

export default function Hero() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <>
      <div
        className="flex justify-center items-center flex-col md:flex-row"
        style={{ backgroundColor: "#97FFE5" }}
      >
        <div className="w-full px-4 lg:px-0 pt-16 md:pt-0">
          <div className="flex  justify-center items-center flex-col text-8xl md:text-9xl text-white ">
            <h2
              style={{
                textShadow: "2px 4px 3px rgba(0,0,0,0.1)",
                backgroundImage:
                  "linear-gradient(0deg,transparent 12px,#FDE046 13px,#FDE046 22px,transparent 23px,transparent)",
              }}
            >
              Congee
            </h2>
            <p
              style={{
                textShadow: "2px 4px 3px rgba(0,0,0,0.1)",
                backgroundImage:
                  "linear-gradient(0deg,transparent 12px,#FDE046 13px,#FDE046 22px,transparent 23px,transparent)",
              }}
            >
              Club Kids
            </p>
          </div>
          {/* BUtton Container */}
          <div className="flex justify-center items-center md:pb-24 md:pt-12">
            <NewsLetterSignUpForm />
          </div>
        </div>

        <div className="w-full flex justify-center items-center pt-12 md:p-0 pb-24 md:pb-0">
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
            <span className="fancy-link">
              <Link href="https://www.instagram.com/congeeclubkids/">
                Instagram
              </Link>
            </span>
          </span>{" "}
          or{" "}
          <span className="underline">
            <span className="fancy-link">
              <Link href="https://www.facebook.com/congeeclubkids">
                Facebook
              </Link>
            </span>
          </span>{" "}
          and sign up for our newsletter for updates!
        </div>
      </div>
    </>
  );
}
