"use client";
import { useState, useRef, useEffect } from "react";
import arrow from "@/../public/icons/arrow-icon.svg";
import Image from "next/image";
import { ChevronDownIcon, ArrowBottomRightIcon } from "@radix-ui/react-icons";

const BuildCommunityContent = ({ title, minutes, date, content }) => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div className='w-full text-white flex h-fit'>
        {/* Judul */}
        <div
          className={`w-1/3 py-8 pr-12 flex flex-col gap-2 h-full ${
            click ? "sticky top-[5%]" : ""
          }`}
        >
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p>
            {minutes}
            <span>min. read </span>
            <span>|</span> {date}
          </p>
        </div>
        {/* Konten */}
        <div
          className={`cursor-pointer w-2/3 border-t-2 border-b-2 p-8 gap-12 flex text-ellipsis text-wrap overflow-hidden ${
            click ? "h-full" : "h-fit"
          }`}
          onClick={() => setClick(!click)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* teks */}
          <div className={`h-full w-fit`}>
            <p className={`text-justify ${click ? "" : "line-clamp-[8]"}`}>
              {content}
            </p>
          </div>
          <div className={`w-fit`}>
            <ArrowBottomRightIcon
              className={`h-16 w-16 shrink-0 text-white text-muted-foreground transition-transform duration-200 border-2 border-white rounded-full inline-block p-3 ${
                hover ? "bg-white text-blue-900 " : "bg-transparent"
              } ${click ? "-rotate-90 " : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCommunityContent;
