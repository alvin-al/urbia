"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import Footer from "@/components/footer";
import ProjectSidebar from "@/components/projectSidebar";
import Link from "next/link";
import ProjectContentSlider from "@/components/projectContentSlider";
import client from "../../lib/contentful";

const Projects = () => {
  const OPTIONS = { loop: true };
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getEntries({
        content_type: "projects",
      });

      setPosts(response.items);

      const uniqueCategories = [
        ...new Set(response.items.map((item) => item.fields.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  useEffect(() => {
    if (categories.length > 0 && selectedCategory === null) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const filteredPosts = useCallback(
    () =>
      selectedCategory === null || selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.fields.category === selectedCategory),
    [posts, selectedCategory]
  );

  return (
    <div className={`${styles.pageSize} flex h-[120vh] z-0`}>
      <Header title='Projects' />
      <p className={`${styles.head} text-right mb-2`}>OUR PROJECTS</p>
      <div id='projects' className='flex justify-center gap-5 '>
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

      <div className='bottom-0 fixed'>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
