import React from "react";
import styled from "styled-components";

import { useBlog } from "../../contexts/blog-context";

// import Box from 'components/particles/Box';
// import { Input } from 'components/particles/Input';
// import Text from 'components/particles/Text';
// import { BORDER_RADIUS_200 } from 'styles/common/border';
// import { COLOR_CORAL_100, COLOR_MIDNIGHT_100 } from 'styles/common/color';

import FilterOptions from "./FilterOptions";

const FilterWrapper = styled.div`
  .show {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: #fff;
    opacity: 1;
    pointer-events: auto;
    transition: 0.5s all;
  }
  .hide {
    position: none;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  @media (min-width: 768px) {
    .show {
      position: static;
      z-index: 1;
      border-radius: 17px;
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const IconWrapper = styled.div`
  button {
    display: grid;
    width: 40px;
    height: 40px;
    border: none;
    background-color: black;
    border-radius: 50%;
    place-content: center;
  }
`;

const ShowResultsButton = styled.button`
  display: block;
  width: 100%;
  height: 52px;
  border: none;
  background-color: #97ffe5;
  border-radius: 16px;
  color: black;
`;

export default function FilterContainer() {
  const {
    toggleMobileFilter,
    setToggleMobileFilter,
    data,
    setActiveFilters,
    tags,
    setSearchValue,
  } = useBlog();

  console.warn({ tags });

  const topicsArray = tags.filter((t) => t.name.includes("Topic:"));
  const tagsArray = tags.filter((t) => t.name.includes("Tag:"));

  const closeFilterModal = () => {
    setActiveFilters([]);
    setToggleMobileFilter(!toggleMobileFilter);
  };

  const showResults = () => {
    setToggleMobileFilter(!toggleMobileFilter);
  };

  return (
    <FilterWrapper>
      <div
        // display={["none", "none", "flex"]}
        // justifyContent="space-between"
        // marginBottom={30}
        // width="100%"
        className="hidden md:flex justify-between mb-7 w-full"
      >
        <h3 as="h3" color="midnight.1000" typeScale={1100} className="text-xl">
          Filter Articles
        </h3>
        <div>
          <span
            // as="span"
            // color="midnight.60"
            // typeScale={1100}
            className="text-xl"
          >
            ({data.total})
          </span>
        </div>
      </div>
      <div
        // display={["none", "none", "block"]}
        // marginBottom={500}
        className="hidden md:block mb-5"
      >
        <input
          id="search"
          name="searchField"
          onChange={(e) => {
            setActiveFilters([]);
            setSearchValue(e.target.value);
          }}
          placeholder="Enter keyword..."
          className="border-2 rounded py-2 px-4"
        />
      </div>
      <div className={`show ${toggleMobileFilter ? "" : "hide"}`}>
        <div width={["100%", "100%"]} className="w-full">
          <div>
            {toggleMobileFilter && (
              <div
                // display={["flex", "flex", "none"]}
                // justifyContent="space-between"
                // pt={700}
                className="flex md:hidden justify-between pt-7"
              >
                <div
                  //   alignItems="center"
                  //   display="flex"
                  //   justifyContent="space-between"
                  //   px={700}
                  //   width="100%"
                  className="flex justify-between items-center px-7 w-full"
                >
                  <h3 as="h3" color="midnight.1000" fontSize={700}>
                    Filter
                  </h3>
                  <div>
                    <IconWrapper>
                      <button onClick={closeFilterModal}>
                        <svg
                          fill="none"
                          height="12"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1 1 11M11 11 1 1"
                            stroke="#FFFBF4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.667"
                          />
                        </svg>
                      </button>
                    </IconWrapper>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div mt={[35, 35, 0]} className="mt-9 md:mt-0">
            <FilterOptions filterItems={topicsArray} type={"topic"} />
          </div>
          <div
            borderBottom="1px solid #D5D9EF"
            height={1}
            // mb={[32, 32, 0]}
            width={1}
            className="mb-8 md:mb-0"
          />
          <div mb={[0, 0, 32]} className="mb-0 md:mb-8">
            <FilterOptions filterItems={tagsArray} type={"tag"} />
          </div>
          <div
            borderBottom="1px solid #D5D9EF"
            // display={["block", "block", "none"]}
            height={1}
            // mb={9}
            // mt={32}
            width={1}
            className="block md:hidden mb-2 mt-8"
          />
          <div
            backgroundColor="neutral.0"
            display={["block", "block", "none"]}
            mb={20}
            p={700}
            className="md:hidden mb-5 p-8"
          >
            <ShowResultsButton onClick={showResults}>
              Show Results
            </ShowResultsButton>
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
}
