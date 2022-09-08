import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { useBlog } from "../../contexts/blog-context";

const CircleWrapper = styled.div`
  background: linear-gradient(to bottom, #97ffe5 50%, #ec6139 50%);
  img {
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    background: linear-gradient(to right, #97ffe5 50%, #ec6139 50%);
  }
`;

const ExcerptLineClampWrap = styled.div`
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    -webkit-line-clamp: 4;
  }
`;

const TitleLineClampWrap = styled.div`
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 32px;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
  }
`;

export default function FeaturedArticle() {
  const { featured } = useBlog();
  if (!featured) return null;
  const { title, slug, excerpt, coverImage } = featured.fields;
  const coverImageUrl = coverImage?.fields.file.url;

  return (
    <div
      display={["block", "block", "flex"]}
      className="md:flex mb-24"
      mb={[101]}
      style={{ fontFamily: "Andika" }}
    >
      <div>
        <CircleWrapper>
          <div
            // height={["100%", "100%", 450, 560, 880]}
            // margin="0 auto"
            position="relative"
            width={["100%", "100%", 450, 560, 880]}
            className="my-0 mx-auto h-full md:h-96 md:w-96 relative w-full"
          >
            {coverImageUrl && (
              <Image
                height="376px"
                layout="responsive"
                objectFit="cover"
                src={"https:" + coverImageUrl}
                width="376px"
              />
            )}
          </div>
        </CircleWrapper>
      </div>
      <div
        // alignItems="left"
        // backgroundColor="#3E4C9F"
        // color="neutral.0"
        // display={["block", "block", "flex"]}
        // flexDirection="column"
        // flexGrow={1}
        // justifyContent="center"
        // pb={["69px", "69px", 0]}
        // pl={[25, 25, 25, 25, 97]}
        // pr={25}
        // pt={25}
        className="text-black flex flex-col justify-center text-left grow pb-16 md:pb-0 pl-6 lg:pb-24 pr-6 pt-6"
        style={{ backgroundColor: "#EC6139" }}
      >
        <div maxWidth={631} className="max-w-2xl">
          <div mb={300} className="mb-3">
            <TitleLineClampWrap>
              <div
                // typeScale={[1200, 1200, 1300, 1600]}
                className="text-3xl lg:text-5xl text-white font-bold"
                style={{ textShadow: "3px 3px rgba(0,0,0,0.1)" }}
              >
                {title}
              </div>
            </TitleLineClampWrap>
          </div>
          <div mb={40} className="mb-10">
            <div
              //   fontFamily="Inter"
              //   typeScale={[600, 600, 1100]}
              className="text-white text-2xl"
              style={{ textShadow: "3px 3px rgba(0,0,0,0.1)" }}
            >
              <ExcerptLineClampWrap>{excerpt}</ExcerptLineClampWrap>
            </div>
          </div>
        </div>
        <Link href={`blog/${slug}`} passHref>
          <div>
            {/* hide button on large screen */}
            <div
              display={["block", "block", "block", "none"]}
              className="lg:hidden"
            >
              <button>
                <div
                  fontSize={[400, 400, 500, 700]}
                  mr={6}
                  className="text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-xl bg-yellow-300 text-white"
                  style={{ textShadow: "1px 1px rgba(0,0,0,0.1)" }}
                >
                  Read the article
                </div>
                {/* <ArrowRightIcon fill={COLOR_MIDNIGHT_100} /> */}
              </button>
            </div>
            {/* show button on large screen */}
            <div
              //   display={["none", "none", "none", "block"]}
              className="hidden lg:block "
            >
              <button appearance="secondary">
                <div
                  //   fontSize={[400, 400, 500, 700]}
                  //   mr={12}
                  className="text-lg md:text-xl lg:text-2xl px-4 py-2 rounded-xl bg-yellow-300 text-white"
                  style={{ textShadow: "1px 1px rgba(0,0,0,0.1)" }}
                >
                  Read the article
                </div>
                {/* <ArrowRightIcon fill={COLOR_MIDNIGHT_100} /> */}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
