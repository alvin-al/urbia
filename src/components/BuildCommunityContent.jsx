"use client";
import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "@/lib/contentful";

const BuildCommunityContent = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "buildTheCommunity" })
      .then((response) => {
        if (response.items.length > 0) {
          setPost(response.items);
          setLoading(false);
        } else {
          setPost(null);
          setLoading(false);
        }
      })
      .catch(console.error);
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  console.log(post[0].fields.title);

  return (
    <div>{/* <h1>{JSON.stringify(post.metadata.fields.title)}</h1> */}</div>
  );
};

export default BuildCommunityContent;
