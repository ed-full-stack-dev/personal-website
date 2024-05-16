import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { CodeBlock, getLanguageFromCode } from "./code-blocks";
export const RICHTEXT_OPTIONS = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="text-blue-500 hover:underline">
            {children}
          </a>
        );
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => {
        return <ul className="blog-ul">{children}</ul>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        const nodeHasVideoLink = node?.content.find(
          (content: any) => content.nodeType === "hyperlink"
        );
        if (nodeHasVideoLink) {
          const videoId = nodeHasVideoLink?.data.uri.split("youtu.be/")[1];
          return (
            <div className="vlog">
              <iframe
                className=""
                title="Tutorial Video"
                // width="560"
                // height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              ></iframe>
            </div>
          );
        }
  
        if (node?.content[0].marks[0]?.type === "code") {
          const codeStr = node?.content[0]?.value;
          const lang = getLanguageFromCode(codeStr);
          return (
            <div className="w-full">
              <CodeBlock codeString={codeStr} language={lang} />
            </div>
          );
        }
  
        return <p className=" text-gray-700 my-1">{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1 className=" text-2xl font-bold text-gray-800">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 className=" text-3xl font-bold text-gray-800">{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any, children: any) => {
        return <h3 className=" text-2xl font-bold text-gray-800">{children}</h3>;
      },
    },
  };