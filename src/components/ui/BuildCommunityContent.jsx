"use client";
import { useState, useRef, useEffect, React } from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { ChevronDownIcon, ArrowBottomRightIcon } from "@radix-ui/react-icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const BuildCommunityContent = ({ title, date, content, number }) => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <>
          <br />
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.title}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
          <br />
        </>
      ),
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    preserveWhitespace: true,
  };
  const renderedContent = documentToReactComponents(content, options);
  // Format lama baca
  const calculateReadingTime = (content) => {
    const a = documentToHtmlString(content);
    const wordsPerMinute = 150;
    const textLength = a.split(" ").length;
    return Math.ceil(textLength / wordsPerMinute);
  };
  // Format tanggal
  const dated = new Date(date);
  const formattedDate = dated.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <div className='w-full text-white flex h-full'>
        {/* Judul */}
        <div
          className={`w-1/3 py-8 pr-12 flex flex-col gap-2 h-full ${
            click ? "sticky top-[5%]" : ""
          }`}
        >
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p>
            {calculateReadingTime(content)}
            <span> min. read </span>
            <span>|</span> {formattedDate}
          </p>
        </div>
        {/* Konten */}
        <div
          className={`cursor-pointer w-2/3 border-b-2 p-8 gap-12 flex text-ellipsis text-wrap overflow-hidden  ${
            click ? "h-full" : "h-fit"
          } ${number > 0 ? "border-t-0" : "border-t-2"}`}
          onClick={() => setClick(!click)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* teks */}
          <div className={`h-full w-fit`}>
            <div className={`text-justify ${click ? "" : "line-clamp-[8]"}`}>
              {renderedContent}
            </div>
          </div>
          <div className={`w-fit`}>
            <ArrowBottomRightIcon
              className={`h-16 w-16 shrink-0  transition-transform duration-300 border-2 border-white rounded-full inline-block p-3 ${
                hover ? "bg-white text-[#11468F] " : "bg-transparent"
              } ${click ? "-rotate-90 " : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCommunityContent;
