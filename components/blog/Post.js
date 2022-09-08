import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LinkWrapper = styled.div`
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: inherit;
  }
  font-family: "Andika";
`;

const TitleLineClampWrap = styled.div`
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
`;

const ExcerptLineClampWrap = styled.div`
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

export default function Post({ post }) {
  const { coverImage, excerpt, title, slug, authorBio } = post.fields;
  //   if (!authorBio) return null;
  //   const { firstName, lastName } = authorBio.fields;
  const { tags } = post.metadata;
  console.log("posts component", post);

  let topic = "";
  tags.map((topicSelection) => {
    if (topicSelection.sys.id.includes("topic")) {
      topic = topicSelection.sys.id.slice(5);
    } else {
      topic = "Circulo Health";
    }
  });

  const formattedTopic = topic
    .match(/([A-Z]?[^A-Z]*)/g)
    .slice(0, -1)
    .join(" ")
    .toUpperCase();

  return (
    <LinkWrapper>
      <Link href={`/blog/${slug}`} passHref>
        <div
          //   backgroundColor="neutral.0"
          //   borderRadius="8px"
          //   mb={[600, 0]}
          //   width="100%"
          className="rounded-2xl  mb-5 sm:mb-0 w-full shadow-xl"
          style={{ backgroundColor: "white" }}
        >
          <div position="relative" className="relative">
            <div
              //   borderTopLeftRadius="8px"
              //   borderTopRightRadius="8px"
              //   height={177}
              //   overflow="hidden"
              //   position="relative"
              //   width={["100%"]}
              className="rounded-tl-2xl rounded-tr-2xl h-44 overflow-hidden relative w-full"
            >
              {coverImage && (
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={"https:" + coverImage.fields.file.url}
                />
              )}
            </div>
            <div
              left={12}
              position="absolute"
              top={400}
              className="absolute left-2 top-2 bg-yellow-300 rounded"
            >
              <div
                // alignItems="center"
                backgroundColor="coral.1000"
                borderRadius={7}
                // display="flex"
                height={600}
                // justifyContent="center"
                // width="100 %"
                className="flex justify-center items-center w-full"
              >
                <div
                  color="midnight.1000"
                  fontWeight={700}
                  px={6}
                  typeScale={100}
                  className="text-sm px-2 font-bold"
                >
                  {formattedTopic}
                </div>
              </div>
            </div>
          </div>
          <div
            // height={["200px", "230px", "230px", "200px", "200px"]}
            // padding={600}
            className="p-5 h-48"
          >
            <div color="midnight.800" mb={300}>
              <div typeScale={100}>
                <span as="span">
                  {/* {firstName.toUpperCase()} {lastName.toUpperCase()} */}
                  Marissa Merrill
                </span>
              </div>
            </div>
            <div mb={300} className="mb-3">
              <TitleLineClampWrap>
                <div typeScale={800} className="text-xl">
                  {title}
                </div>
              </TitleLineClampWrap>
            </div>
            <div>
              <div color="midnight.800" fontFamily="Inter" typeScale={400}>
                <ExcerptLineClampWrap>{excerpt}</ExcerptLineClampWrap>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </LinkWrapper>
  );
}
