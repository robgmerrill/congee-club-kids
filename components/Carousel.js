import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import MarProfile from "./mar-profile.jpg";
import SaraProfile from "./congee-sara.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";

// returns the window width and height
// based on https://usehooks.com/useWindowSize/
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });
  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

const StyledCard = styled.div`
  margin-top: -24px;
  height: 100%;
  display: inline-block;
  width: 100%;
  .second-card {
    /* padding-bottom: 40px; */
  }

  @media (min-width: 768px) {
    width: 478px;
    margin-right: 24px;
    margin-bottom: 190px;

    .second-card {
      padding-bottom: 0;
    }
  }
`;

const Header = styled.h2`
  font-size: 2rem;

  margin: 0 auto;
  /* margin-top: 3rem; */
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  width: 80%;
  position: relative;
  z-index: 2;
  background: white;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 478px) {
    font-size: 4rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
  }
`;

export default function NextJsCarousel() {
  const { width } = useWindowSize();
  console.log(width);

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <div className="h-full  relative">
      <Carousel
        showThumbs={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={width > 478}
        useKeyboardArrows={true}
        // .control-arrow .control-next
      >
        {/* So Why Congee? */}
        <div
          className="h-full  top-0 bottom-0 flex flex-col items-center"
          style={{ backgroundColor: "#97FFE5" }}
        >
          {/* slanted text */}
          <Header>So Why Congee?</Header>
          {/* paragraph */}
          <p
            className="text-lg md:text-2xl w-4/5"
            style={{ fontFamily: "Andika", height: "1000px" }}
          >
            As two AAPI women who are multi-ethnic/multi-racial, we wanted our
            brand name to represent Asian culture in a way that reflected our
            shared values, customs and traditions, while also leaving room for
            the uniqueness and particularities of our cultures.
            <br />
            <br />
            One thing that felt mutual is how we show our love through food.
            Often times, when you enter our houses, the first question that is
            asked is, &quot;have you eaten yet?&quot; We show our love through
            feeding one another. <br /> <br />
            We decided to specifically choose congee as a representation of
            Asian culture, because although it is likely thought to have
            originated in China, many Asian cultures have variations of this
            comforting, hearty, warm and homey rice porridge. It felt like a
            dish that both encompassed the umbrella category of,
            &quot;Asian,&quot; yet left room for diverse expressions and
            representations. It also is often a good food to feed babies since
            it&quot;s easy to digest and swallow! So that&quot;s where we landed
            on the name <strong>Congee Club Kids</strong>!
          </p>
        </div>
        {/* The Team */}
        <div className="h-full  top-0 bottom-0 flex flex-col items-center bg-blue-300">
          {/* slanted text */}
          <Header>The Team</Header>
          {/* paragraph */}
          <p
            className="text-lg md:text-2xl w-4/5"
            style={{ fontFamily: "Andika" }}
          >
            Sara Menges and Marissa Merrill met in college and instantly became
            friends. We quickly discovered that we enjoyed working on school
            projects together and found that our ethics, styles and standards
            complimented one another to achieve our goals and also have fun
            along the way. Almost ten years later, Sara (a current content
            creator, grant writer and artist) and Marissa (a current mental
            health therapist, mother and writer) found themselves wanting to
            tackle other fun projects that could impact others in a positive
            manner. We are so excited to embark on this journey of publishing
            children’s books for our Asian American community.
          </p>
        </div>
        {/* Sara Menges */}
        <div className="bg-yellow-300 h-full w-full  top-0 bottom-0 flex flex-col items-center">
          {/* slanted text */}
          <Header>Sara Menges - Illustrator</Header>
          {/* paragraph */}
          <StyledCard>
            <figure className=" bg-yellow-300 rounded-xl p-8   rounded-3xl mx-8 md:mx-0 mb-8 md:mb-0">
              <Image
                className="w-24 h-24  rounded-full mx-auto"
                src={SaraProfile}
                alt=""
                width="360"
                height="360"
              />
            </figure>
          </StyledCard>
        </div>
        {/* Marissa Merrill */}
        <div className="bg-purple-300 h-full w-full  top-0 bottom-0 flex flex-col items-center">
          {/* slanted text */}
          <Header>Marissa - Author</Header>
          {/* paragraph */}
          <StyledCard>
            <figure className="p-8   rounded-3xl mx-8 md:mx-0 mb-8 md:mb-0">
              <Image
                className="w-24 h-24  rounded-full mx-auto"
                src={MarProfile}
                alt=""
                width="360"
                height="360"
              />
            </figure>
          </StyledCard>
        </div>

        {/* The mission placeholder */}
        {/* The Mission */}
        <div className="bg-green-400 h-full  top-0 bottom-0 flex flex-col items-center">
          {/* slanted text */}
          <Header>The Mission</Header>
          {/* paragraph */}
          <p
            className="text-lg md:text-2xl w-4/5"
            style={{ fontFamily: "Andika" }}
          >
            Congee Club Kids creates children’s books that illuminate AAPI
            experience and celebrate AAPI culture in a kid friendly, fun and
            creative way.
          </p>
        </div>
        {/* The Vision */}
        <div className="bg-blue-300 h-full  top-0 bottom-0 flex flex-col items-center">
          {/* slanted text */}
          <Header>The Vision</Header>
          {/* paragraph */}
          <p
            className="text-lg md:text-2xl w-4/5"
            style={{ fontFamily: "Andika" }}
          >
            Our vision is to help kids see themselves, their traditions and
            their cultures reflected in literature so that they can grow
            confident in their heritage and customs...Our vision is to help kids
            see themselves, their traditions and their cultures reflected in
            literature so that they can grow confident in their heritage and
            customs. Through our products, we encourage them to celebrate their
            diversity and embrace the gift they are to the world.
          </p>
        </div>
        {/* <div className="bg-blue-300 absolute top-0 bottom-0 flex flex-col items-center">
            lkj;lsdfjds
          </div> */}
        {/* <div>
            <Header>The Vision</Header>
            <p className="text-2xl w-4/5">
              Our vision is to help kids see themselves, their traditions and
              their cultures reflected in literature so that they can grow
              confident in their heritage and customs...Our vision is to help
              kids see themselves, their traditions and their cultures reflected
              in literature so that they can grow confident in their heritage
              and customs. Through our products, we encourage them to celebrate
              their diversity and embrace the gift they are to the world.
            </p>
          </div> */}
      </Carousel>
    </div>
  );
}
