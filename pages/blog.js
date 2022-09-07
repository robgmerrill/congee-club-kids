import { useEffect } from "react";
import safeJsonStringify from "safe-json-stringify";
import Hero from "../components/blog/Hero";
import FeaturedArticle from "../components/blog/FeaturedArticle";

import { createClient } from "contentful";
import {
  getRecentEntries,
  BlogProvider,
  useBlog,
} from "../contexts/blog-context";
import RecentPosts from "../components/blog/RecentPosts";

const blogTitle = "Blog";
const description = "Welcome to the Congee Club Kids Blog. Join us.";

function Blog({ featured, items, tags, total }) {
  console.log({ featured, items, tags, total });
  const { setFeatured, setData, setTags } = useBlog();

  useEffect(() => {
    if (featured) setFeatured(featured);
    if (tags) setTags(tags);
    if (items) setData({ items, total });
  }, []);

  return (
    <div className="overflow-hidden" style={{ backgroundColor: "white" }}>
      <Hero />
      <FeaturedArticle />
      <div
        className="md:grid gap-4  max-w-5xl sm:mb-6 md:mb-12 mx-auto pb-7 px-4"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="border-2">Filter Container</div>
        <RecentPosts />
      </div>
    </div>
  );
}

const WrappedBlog = (props) => (
  <BlogProvider>
    <Blog {...props} />
  </BlogProvider>
);

export default WrappedBlog;

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

export const getServerSideProps = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const stringifyFeatured = safeJsonStringify(res.items[0]);
  const featured = JSON.parse(stringifyFeatured);

  const { items, total } = await getRecentEntries([]);

  const stringifiedData = safeJsonStringify(items);
  const posts = JSON.parse(stringifiedData);

  const { items: tags } = await client.getTags();

  return {
    props: { featured, items: posts, tags, total },
  };
};
