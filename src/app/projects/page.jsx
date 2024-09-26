"use client";
import React, { useState, useCallback } from "react";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import Footer from "@/components/footer";
import ProjectSidebar from "@/components/projectSidebar";
import ProjectContentSlider from "@/components/projectContentSlider";
import ProjectDataFetcher from "@/components/ProjectDataFetcher";

const Projects = () => {
  const OPTIONS = { loop: true };
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Housing");
  const [loading, setLoading] = useState(true);

  const handleDataFetched = useCallback(
    ({ posts, categories, loading, selectedCategory }) => {
      if (posts && posts.length > 0) {
        setPosts(posts);
        setCategories(categories || []);
        setLoading(loading);
        if (selectedCategory) {
          setSelectedCategory(selectedCategory);
        }
      } else {
        setPosts([]);
        setCategories([]);
        setLoading(false);
      }
    },
    []
  );

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredPosts = useCallback(() => {
    if (!posts || posts.length === 0) return [];
    return selectedCategory === "All"
      ? posts
      : posts.filter(
          (post) => post.fields && post.fields.category === selectedCategory
        );
  }, [posts, selectedCategory]);

  return (
    <div className={`flex z-0 flex-col min-h-screen`}>
      <Header title='Projects' />
      <div className={`flex flex-col px-4 xl:px-0 xl:pr-20 gap-4 flex-grow`}>
        <div className='xl:ml-[27%]'>
          <p className={`text-4xl font-bold`}>Our Projects</p>
        </div>
        <div className='xl:hidden'>
          <ProjectDataFetcher
            onDataFetched={handleDataFetched}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div
          id='projects'
          className='flex flex-col xl:flex-row justify-center xl:max-h-[70vh] w-full'
        >
          <div className='hidden xl:flex xl:w-1/4'>
            <ProjectSidebar
              categories={categories}
              setCategory={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className='xl:w-3/4'>
            <ProjectContentSlider
              category={selectedCategory}
              slides={filteredPosts()}
              options={OPTIONS}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.pageContainer} mt-auto`}>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
