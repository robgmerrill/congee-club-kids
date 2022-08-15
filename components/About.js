import styled from "styled-components";
import Image from "next/image";
import TestProfile from "./congee-club-test-profile.jpg";
import MarProfile from "./mar-profile.jpg";
import { motion } from "framer-motion";

const StyledCard = styled.div`
  display: inline-block;
  width: 100%;
  /* margin-bottom: 72px; */
  .second-card {
    padding-bottom: 72px;
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

export default function About() {
  return (
    <div
      className="  text-center"
      style={{ height: "1800px", backgroundColor: "#97FFE5" }}
    >
      {/* the team */}
      <div className="">
        <div className="text-6xl">The Team</div>
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
            <figure className=" bg-yellow-300 rounded-xl p-8  dark:bg-slate-800 rounded-3xl mx-8 md:mx-0 mb-8 md:mb-0">
              <Image
                class="w-24 h-24  rounded-full mx-auto"
                src={MarProfile}
                alt=""
                width="240"
                height="240"
              />
              <div className="pt-6  text-center  space-y-4">
                <blockquote></blockquote>
                <figcaption className="font-medium">
                  <div className="text-red-400 dark:text-sky-400">
                    Sara Menges
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Illustrator
                  </div>
                </figcaption>
              </div>
            </figure>
          </StyledCard>
          <StyledCard>
            <div className="second-card">
              <figure className=" bg-yellow-300 rounded-3xl p-8  dark:bg-slate-800 rounded-md mx-8 md:mx-0">
                <Image
                  class="w-24 h-24  rounded-full mx-auto"
                  src={MarProfile}
                  alt=""
                  width="240"
                  height="240"
                />
                <div className="pt-6  text-center  space-y-4">
                  <blockquote>
                    {/* <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p> */}
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-red-400 dark:text-sky-400">
                      Marissa Merrill
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                      Author
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>

            {/* </motion.div> */}
          </StyledCard>
        </div>
      </div>

      {/* The mission */}
      <div className="mt-12">
        <div className="text-6xl">The Mission</div>
        <div className="text-xl">
          Congee Club Kids creates children’s books that illuminate AAPI
          experience and celebrate AAPI culture in a kid friendly, fun and
          creative way.{" "}
        </div>
      </div>
      <div>
        <div className="text-6xl">The Vision</div>
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
    </div>
  );
}
