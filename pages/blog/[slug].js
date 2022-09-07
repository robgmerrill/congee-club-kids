import { createClient } from "contentful";
import safeJsonStringify from "safe-json-stringify";
import BlogHeader from "../../components/blog/detail/BlogHeader";
import BlogContent from "../../components/blog/detail/BlogContent";
// import Metadata from 'components/global/Metadata';
// import { SectionIndicatorLeft, SectionIndicatorRight } from 'components/global/Section';
// import BlogAuthorBio from 'components/pages/resources/detail/BlogAuthorBio';
// import BlogHeader from 'components/pages/resources/detail/BlogHeader';
// import BlogTags from 'components/pages/resources/detail/BlogTags';
// import Breadcrumbs from 'components/pages/resources/detail/Breadcrumbs';
// import CallToAction from 'components/pages/resources/detail/CallToAction';
// import RelatedArticle from 'components/pages/resources/detail/RelatedArticle';
// import OGMetadata from 'components/pages/resources/OGMetadata';
// import Schema from 'components/pages/resources/Schema';
// import Box from 'components/particles/Box';

export default function PostPage({ post, postTags }) {
  console.log(post);
  return (
    <div
      backgroundColor="custard.200"
      //   pt={[104, 104, 133]}
      className="pt-28 bg-white pb-24"
    >
      {/* <Schema post={post} /> */}
      {/* <OGMetadata post={post} /> */}
      {/* <Metadata description={post.fields.metadata} title={post.fields.title} /> */}
      <div maxWidth={992} mx="auto">
        {/* <Breadcrumbs tags={post.metadata.tags} /> */}
        <div>
          <BlogHeader post={post} />
          <BlogContent bodyContent={post.fields.bodyContent} />
          {/* <BlogTags tags={postTags} twitterShareLink={post.fields.slug} twitterShareTitle={post.fields.title} /> */}
          {/* <BlogAuthorBio author={post.fields.authorBio} /> */}
          {/* <RelatedArticle relatedArticle={post.fields.relatedArticle} /> */}
        </div>
      </div>
      <div>{/* <CallToAction isBlogIndex={false} /> */}</div>
    </div>
  );
}

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

export const getServerSideProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
    include: 3,
  });

  const stringifiedData = safeJsonStringify(items);
  const data = JSON.parse(stringifiedData);

  const { items: tags } = await client.getTags();

  const postTags = data[0].metadata.tags.map((tag) => {
    return tags.find((t) => t.sys.id === tag.sys.id);
  });

  return {
    props: { post: data[0], postTags },
  };
};
