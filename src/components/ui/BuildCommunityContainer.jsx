"use client";
import { React, useState } from "react";
import BuildCommunityContent from "./BuildCommunityContent";
import client from "@/lib/contentful";
import { PuffLoader } from "react-spinners";

const BuildCommunityContainer = () => {
  const [data, setData] = useState(null);

  client
    .getEntries({
      content_type: "buildTheCommunity",
    })
    .then((response) => setData(response.items))
    .catch(console.error);

  if (!data) {
    return (
      <div className='w-full h-[70vh] justify-center items-center flex '>
        <PuffLoader color='white' />
      </div>
    );
  }

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <BuildCommunityContent
              title={item.fields.title}
              date={item.sys.updatedAt}
              content={item.fields.content}
              number={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildCommunityContainer;
