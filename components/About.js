import styled from "styled-components";
import Image from "next/image";
import TestProfile from "./congee-club-test-profile.jpg";
import MarProfile from "./mar-profile.jpg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../lib/ThemeContext";
import Carousel from "./Carousel";

const StyledCard = styled.div`
  display: inline-block;
  width: 100%;
  .second-card {
    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    width: 478px;
    margin-right: 24px;
    margin-bottom: 72px;

    .second-card {
      padding-bottom: 0;
    }
  }
`;

const AboutWrapper = styled.div`
  background-color: #97ffe5;
  margin-bottom: 40px;
  height: 2200px;
  @media (min-width: 478px) {
    height: 2000px;
  }
  @media (min-width: 768px) {
    height: 100%;
  }
`;

export default function About() {
  const context = useContext(ThemeContext);
  console.log(context);

  return (
    <AboutWrapper className="text-center p-8 lg:pt-12">
      {/* the team */}
      <div className="">
        <div className="text-6xl text-red-400">The Team</div>
        <div className="text-xl  flex justify-center items-center">
          <div className="text-xl md:w-2/3 w-full px-8 md:px-0">
            Sara Menges and Marissa Merrill met in college and instantly became
            friends. We quickly discovered that we enjoyed working on school
            projects together and found that our ethics, styles and standards
            complimented one another to achieve our goals and also have fun
            along the way. Almost ten years later, Sara (a current content
            creator, grant writer and artist) and Marissa (a current mental
            health therapist, mother and writer) found themselves wanting to
            tackle other fun projects that could impact others in a positive
            manner. We are so excited to embark on this journey of publishing
            children’s books for the AAPI community{" "}
          </div>
        </div>
        <div className=" mt-12">
          <StyledCard>
            <div className="second-card">
              <figure className=" bg-yellow-300 rounded-3xl p-8    mx-8 md:mx-0">
                <Image
                  class="w-24 h-24  rounded-full mx-auto"
                  src={MarProfile}
                  alt=""
                  width="360"
                  height="360"
                />
                <div className="pt-6  text-center  space-y-4">
                  <blockquote></blockquote>
                  <figcaption className="font-medium">
                    <div className="text-red-400  text-4xl">
                      Marissa Merrill
                    </div>
                    <div className="text-slate-700  text-2xl">Author</div>
                  </figcaption>
                </div>
              </figure>
            </div>

            {/* </motion.div> */}
          </StyledCard>
        </div>
      </div>

      {/* The mission */}
      <div className="mb-6">
        <div className="text-6xl text-red-400">The Mission</div>
        <div className="text-xl">
          Congee Club Kids creates children’s books that illuminate AAPI
          experience and celebrate AAPI culture in a kid friendly, fun and
          creative way.{" "}
        </div>
      </div>
      <div>
        <div className="text-6xl text-red-400">The Vision</div>
        <div className="text-xl">
          Our vision is to help kids see themselves, their traditions and their
          cultures reflected in literature so that they can grow confident in
          their heritage and customs...Our vision is to help kids see
          themselves, their traditions and their cultures reflected in
          literature so that they can grow confident in their heritage and
          customs. Through our products, we encourage them to celebrate their
          diversity and embrace the gift they are to the world.
        </div>
      </div>
    </AboutWrapper>
  );
}
