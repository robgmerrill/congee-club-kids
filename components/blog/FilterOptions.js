import React, { useState } from "react";
import styled from "styled-components";
// import { Tag } from 'types/blog/tag';
import { useBlog } from "../../contexts/blog-context";
// import Box from 'components/particles/Box';
// import Button from 'components/particles/Button';
// import Text from 'components/particles/Text';
// import { COLOR_ROYAL_100 } from 'styles/common/color';

const ClearButtonWrapper = styled.button`
  border: none;
  background-color: #fff;
  outline: none;
`;

const ViewMoreTagsWrapper = styled.button`
  border: none;
  margin-bottom: 32px;
  background: #fff;
  color: black;
  font-size: 16px;
  outline: none;
`;

export default function FilterButton({ filterItems, type }) {
  const { activeFilters, setActiveFilters } = useBlog();
  const [tagsCount, setTagsCount] = useState(9);

  const filterPosts = (filterItem) => {
    const filterDoesExist = activeFilters.includes(filterItem);
    if (filterDoesExist) {
      const filterIndex = activeFilters.indexOf(filterItem);
      const newFilters = [...activeFilters];
      newFilters.splice(filterIndex, 1);
      setActiveFilters(newFilters);
    } else {
      setActiveFilters([...activeFilters, filterItem]);
    }
  };

  const isSelectedFilter = (filterItem) => {
    return !activeFilters.includes(filterItem);
  };

  const handleFilterReset = () => {
    setActiveFilters([]);
  };

  return (
    <div
      backgroundColor="neutral.0"
      //   pt={[0, 0, 40]}
      //   px={700}
      className="md:pt-10 px-8"
      style={{
        fontFamily: "Andika",
        textShadow: "2px 2px rgba(0,0,0,0.1)",
      }}
    >
      <div
        // alignItems="center"
        // display="flex"
        // justifyContent="space-between"
        // mb={500}
        className="flex justify-between items-center mb-5"
      >
        <div>
          {type === "tag" ? (
            <span
              as="span"
              color="midnight.1000"
              //   marginBottom={21}
              typeScale={[500, 500, 100]}
              className="mb-5 text-lg"
            >
              Tags
            </span>
          ) : (
            <span
              as="span"
              color="midnight.1000"
              //   marginBottom={21}
              typeScale={[500, 500, 100]}
              className="mb-5 text-lg"
            >
              Topics
            </span>
          )}
        </div>
        <ClearButtonWrapper onClick={handleFilterReset}>
          <span
            as="span"
            color="royal.80"
            fontSize={100}
            className="text-sm text-gray-500"
          >
            (Clear)
          </span>
        </ClearButtonWrapper>
      </div>
      <div
        // display="flex"
        // flexWrap="wrap"
        marginBottom={type === "topic" ? 700 : 0}
        className="flex flex-wrap"
      >
        {filterItems
          .slice(0, type === "topic" ? 9 : tagsCount)
          .map((filterItem, index) => (
            <div
              key={index}
              marginBottom={[300, 300, 500]}
              marginRight={14}
              className="mb-4 mr-4"
            >
              {isSelectedFilter(filterItem.sys.id) && (
                <button
                  //   appearance="primary-outline"
                  onClick={() => filterPosts(filterItem.sys.id)}
                  size="tiny"
                  className="px-2 py-4 rounded-lg"
                  style={{
                    border: "2px solid rgb(151, 255, 229)",
                    color: "rgb(151, 255, 229)",
                  }}
                >
                  {type === "tag"
                    ? `#${filterItem.name.slice(5)}`
                    : `${filterItem.name.slice(7)}`}
                </button>
              )}
              {!isSelectedFilter(filterItem.sys.id) && (
                <button
                  appearance="primary"
                  onClick={() => filterPosts(filterItem.sys.id)}
                  size="tiny"
                  className="px-2 py-4 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgb(151, 255, 229)",
                    border: "2px solid rgb(151, 255, 229)",
                  }}
                >
                  {type === "tag"
                    ? `#${filterItem.name.slice(5)}`
                    : `${filterItem.name.slice(7)}`}
                </button>
              )}
            </div>
          ))}
      </div>
      {type === "tag" && filterItems.length > tagsCount && (
        <div display="block" marginTop={500}>
          <ViewMoreTagsWrapper onClick={() => setTagsCount(tagsCount + 9)}>
            View more
          </ViewMoreTagsWrapper>
        </div>
      )}
    </div>
  );
}
