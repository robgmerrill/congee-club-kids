import React from "react";
import Image from "next/image";

export default function AuthorBio({ author }) {
  const { about, lastName, firstName, authorImage } = author.fields;

  return (
    <div
      borderBottom="1px solid #CED2DC"
      maxWidth={714}
      mx={[500, 500, "auto"]}
      py={700}
      className="border border-b-gray-500 max-w-3xl mx-4 md:mx-auto py-7"
      style={{ fontFamily: "Andika" }}
    >
      <div display={["flex"]} className="flex">
        <div
          borderRadius="50%"
          height={[74, 74, 140]}
          minWidth={[74, 74, 140]}
          mr={19}
          overflow="hidden"
          position="relative"
          className="overflow-hidden rounded-full h-20 md:h-36 w-20 md:w-36 mr-4 relative"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={"https:" + authorImage.fields.file.url}
          />
        </div>
        <div
          alignContent="center"
          display={["block", "flex"]}
          flexDirection="column"
          justifyContent="center"
        >
          <div>
            <div mb={200}>
              <div color="midnight.800" fontFamily="Inter" fontSize={100}>
                ABOUT THE AUTHOR
              </div>
            </div>
            <div mb={300}>
              <div fontSize={700}>
                {firstName.toUpperCase()} {lastName.toUpperCase()}
              </div>
            </div>
          </div>
          <div display={["none", "none", "block"]}>
            <div color="midnight.800" fontFamily="Inter" typeScale={600}>
              {about}
            </div>
          </div>
        </div>
      </div>
      <div display={["block", "block", "none"]} pt={500}>
        <div color="midnight.800" fontFamily="Inter" typeScale={600}>
          {about}
        </div>
      </div>
    </div>
  );
}
