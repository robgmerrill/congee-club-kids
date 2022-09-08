import Image from "next/image";

export default function BlogHeader({ post }) {
  console.log("blog header post", post);
  const { title, author, coverImage } = post.fields;
  console.log({ title, author, coverImage });

  return (
    <div className="bg-white" style={{ fontFamily: "Andika" }}>
      <div
        // alignItems="center"
        // display="flex"
        // justifyContent="center"
        // margin="0 auto"
        // marginBottom={[500, 500, 600]}
        // maxWidth={714}
        // px={[500, 500, 0]}
        className="flex justify-center items-center mx-auto mb-4 md:mb-5 max-w-2xl px-4 md:px-0"
      >
        <h1
          as="h1"
          display="flex"
          textAlign="center"
          typeScale={[1300, 1400, 1600]}
          className="flex text-6xl text-center"
        >
          {title}
        </h1>
      </div>
      <div
        // alignItems="center"
        // color="midnight.600"
        // display="flex"
        // justifyContent="center"
        // mb={[800, 800, 64]}
        className="flex justify-center items-center mb-7"
      >
        <div fontSize={300}>
          <div as="span">
            {author.fields.firstName.toUpperCase()}{" "}
            {author.fields.lastName.toUpperCase()}
          </div>
        </div>
      </div>
      <div
        borderRadius={[0, 0, 26.5]}
        height={[205, 315, 435]}
        margin="0 auto"
        marginBottom={[800, 800, 64]}
        maxHeight={435}
        maxWidth={796}
        overflow="hidden"
        position="relative"
        width="100%"
        className="md:rounded-lg h-52 overflow-hidden mx-auto mb-8 max-h-96 max-w-3xl relative w-full"
      >
        <Image
          alt={coverImage.fields.description}
          layout="fill"
          objectFit="cover"
          src={"https:" + coverImage.fields.file.url}
        />
      </div>
    </div>
  );
}
