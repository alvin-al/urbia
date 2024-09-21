"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import Footer from "@/components/footer";
import ProjectSidebar from "@/components/projectSidebar";
import Link from "next/link";
import ProjectContentSlider from "@/components/projectContentSlider";
import client from "@/lib/contentful";
import { PuffLoader } from "react-spinners";

const Projects = () => {
  const OPTIONS = { loop: true };
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "projects",
      })
      .then((response) => {
        if (response.items.length > 0) {
          setPosts(response.items);
          setLoading(false);

          const categoryOrder = [
            "Housing",
            "Commercial",
            "Restaurant/Cafe",
            "Public Space",
            "Guesthouse/Villa",
            "Office",
          ];

          const uniqueCategories = [
            ...new Set(response.items.map((item) => item.fields.category)),
          ];

          const sortedCategories = categoryOrder.filter((category) =>
            uniqueCategories.includes(category)
          );

          setCategories(sortedCategories);

          if (selectedCategory === null) {
            setSelectedCategory(sortedCategories[0]);
          }
        } else {
          setPosts([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredPosts = useCallback(
    () =>
      selectedCategory === null || selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.fields.category === selectedCategory),
    [posts, selectedCategory]
  );

  return (
    <div className={`flex z-0 flex-col h-screen`}>
      <Header title='Projects' />
      {/* Container */}
      <div className={`flex flex-col pr-20 gap-4`}>
        <div className='ml-80'>
          <p className={`text-4xl font-bold`}>Our Projects</p>
        </div>
        <div
          id='projects'
          className='flex justify-center xl:max-h-[70vh] 2xl:max-h-full w-full'
        >
          <ProjectSidebar
            categories={categories}
            setCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <ProjectContentSlider
            category={selectedCategory || "All"}
            slides={filteredPosts()}
            options={OPTIONS}
          />
        </div>
      </div>
      <div className={`${styles.pageContainer} relative mt-auto bottom-0`}>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
