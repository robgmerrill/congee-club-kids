import React from "react";
import styled from "styled-components";

import { useBlog } from "../../contexts/blog-context";

import Post from "./Post";

const FilterButtonWrapper = styled.button`
  width: 74px;
  height: 40px;
  padding: 6px 20px;
  border: none;
  background-color: #97ffe5;
  border-radius: 16px;
  color: black;
  font-size: 16px;
`;

export default function RecentPosts() {
  const { toggleMobileFilter, setToggleMobileFilter, data } = useBlog();
  const openFilterModal = () => {
    setToggleMobileFilter(!toggleMobileFilter);
  };

  return (
    <div className="pb-24">
      <div
        alignItems="center"
        display={["flex", "flex", "none"]}
        justifyContent="space-between"
        mb={600}
        className="flex md:hidden justify-between items-center mb-6"
      >
        <div>
          <span as="span" mr={300} typeScale={600}>
            All Articles
          </span>
          <span as="span" color="midnight.60" typeScale={500}>
            ({data.total})
          </span>
        </div>
        <FilterButtonWrapper onClick={openFilterModal}>
          Filter
        </FilterButtonWrapper>
      </div>
      <div
        // display={["block", "grid"]}
        // gridGap={600}
        // gridTemplateColumns="1fr 1fr"
        // width="100%"
        className="md:grid grid-cols-2 w-full gap-4"
      >
        {data.items.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
