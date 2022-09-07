import React from "react";
import styled from "styled-components";
// import { SPACE_500, SPACE_600, SPACE_700 } from '@circulohealth/particles-theme';
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { INLINES, Text } from "@contentful/rich-text-types";
import Image from "next/image";

// import PhotoGallery from '../embeddedEntries/PhotoGallery';
// import PullQuote from '../embeddedEntries/PullQuote';

const BodyContentWrapper = styled.div`
  max-width: 992px;
  background-color: white;
  font-family: "Andika";

  :not(.full-width) {
    max-width: 714px;
    padding: 0 16px;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  a {
    color: purple;
    text-decoration: none;
  }

  p {
    margin-bottom: 16px;
    color: black;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    p {
      padding: 0;
      font-size: 18px;
      line-height: 1.44;
    }
    .full-width {
      position: relative;
      right: 50%;
      left: 50%;
      width: 100vw;
      margin-right: -50vw;
      margin-left: -50vw;
    }
  }
`;

const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          rel={`${
            node.data.uri.startsWith("https://circulohealth.com")
              ? ""
              : "noopener noreferrer"
          }`}
          target={`${
            node.data.uri.startsWith("https://circulohealth.com")
              ? "_self"
              : "_blank"
          }`}
        >
          {node.content[0].value}
        </a>
      );
    },
    // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
    //   const nodeId = node.data.target.sys.contentType.sys.id;
    //   const { fields } = node.data.target;

    //   switch (nodeId) {
    //     case "photoGallery":
    //       return <PhotoGallery photos={fields.photos} />;
    //     case "pullQuote":
    //       return <PullQuote author={fields} />;
    //   }
    // },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div
          //   borderRadius={0}
          //   className="full-width"
          //   marginBottom={80}
          //   marginTop={900}
          //   overflow="hidden"
          //   p={0}
          className="w-full mb-20 mt-8 overflow-hidden p-0"
        >
          <Image
            height={node.data.target.fields.file.details.image.height}
            layout="responsive"
            src={"https:" + node.data.target.fields.file.url}
            width={node.data.target.fields.file.details.image.width}
          />
        </div>
      );
    },
  },
};

export default function BlogContent({ bodyContent }) {
  return (
    <div mb={59} className="mb-14">
      <BodyContentWrapper>
        {documentToReactComponents(bodyContent, renderOptions)}
      </BodyContentWrapper>
    </div>
  );
}
