import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import MarProfile from "./mar-profile.jpg";
import SaraProfile from "./congee-sara.jpg";
import Image from "next/image";

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

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="h-full  relative">
        <Carousel
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {/* The Team */}
          <div className="bg-green-400 h-full  top-0 bottom-0 flex flex-col items-center">
            {/* slanted text */}
            <Header>The Team</Header>
            {/* paragraph */}
            <p
              className="text-lg md:text-2xl w-4/5"
              style={{ fontFamily: "Andika" }}
            >
              Sara Menges and Marissa Merrill met in college and instantly
              became friends. We quickly discovered that we enjoyed working on
              school projects together and found that our ethics, styles and
              standards complimented one another to achieve our goals and also
              have fun along the way. Almost ten years later, Sara (a current
              content creator, grant writer and artist) and Marissa (a current
              mental health therapist, mother and writer) found themselves
              wanting to tackle other fun projects that could impact others in a
              positive manner. We are so excited to embark on this journey of
              publishing children’s books for the AAPI community
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
              confident in their heritage and customs...Our vision is to help
              kids see themselves, their traditions and their cultures reflected
              in literature so that they can grow confident in their heritage
              and customs. Through our products, we encourage them to celebrate
              their diversity and embrace the gift they are to the world.
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
}
