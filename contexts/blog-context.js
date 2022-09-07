import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const BlogContext = createContext({
  activeFilters: [],
  data: { items: [], total: 0 },
  featured: undefined,
  searchValue: "",
  setActiveFilters: () => {
    Boolean;
  },
  setData: () => void {},
  setFeatured: () => void {},
  setSearchValue: () => "",
  setTags: () => void {},
  setToggleMobileFilter: () => void {},
  setTopics: () => void {},
  tags: [],
  toggleMobileFilter: false,
  topics: [],
});

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

export async function getRecentEntries(activeFilters) {
  const { items, total } = await client.getEntries({
    content_type: "post",
    ...(activeFilters.length
      ? { "metadata.tags.sys.id[in]": activeFilters.join() }
      : {}),
    "fields.date[lte]": new Date().toISOString(),
    order: "-fields.date",
  });
  return { items, total };
}

function BlogProvider({ children }) {
  const [data, setData] = useState({ items: [], total: 0 });
  const [toggleMobileFilter, setToggleMobileFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [topics, setTopics] = useState([]);
  const [tags, setTags] = useState([]);
  const [featured, setFeatured] = useState();
  const [searchValue, setSearchValue] = useState("");

  // run everytime the activeFilters array changes - call the fetchData method
  useEffect(() => {
    async function fetchData() {
      const res = await getRecentEntries(activeFilters);
      setData(res);
    }
    fetchData();
  }, [activeFilters]);

  // run everytime the search value changes - call the getSearchValue method
  useEffect(() => {
    async function getSearchValue() {
      const { items, total } = await client.getEntries({
        content_type: "post",
        "fields.date[lte]": new Date().toISOString(),
        query: searchValue,
      });
      setData({ items, total });
    }
    getSearchValue();
  }, [searchValue]);

  const value = {
    activeFilters,
    data,
    featured,
    searchValue,
    setActiveFilters,
    setData,
    setFeatured,
    setSearchValue,
    setTags,
    setToggleMobileFilter,
    setTopics,
    tags,
    toggleMobileFilter,
    topics,
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}

export { BlogProvider, useBlog };
