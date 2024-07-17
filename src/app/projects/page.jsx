"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import HomeCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import ProjectSidebar from "@/components/projectSidebar";
import Link from "next/link";
import ProjectContentSlider from "@/components/projectContentSlider";
import pic1 from "@/../public/images/AJ1.webp";
import pic2 from "@/../public/images/Giorno.png";
import pic3 from "@/../public/images/living room lt.1.webp";
import pic4 from "@/../public/images/XT-NOON-3.webp";

const Projects = () => {
  const [category, setCategory] = useState("Housing");

  const OPTIONS = { loop: true };
  const projectData = {
    "Housing": [
      {
        title: "Modern Apartment",
        src: pic1,
      },
      {
        title: "Cozy Living Room",
        src: pic2,
      },
      {
        title: "Luxury Villa",
        src: pic4,
      },
    ],
    "Commercial": [
      {
        title: "Office Space",
        src: pic3,
      },
      {
        title: "Shopping Center",
        src: pic4,
      },
    ],
    "Restaurant/Cafe": [
      {
        title: "Giorno Pizzeria",
        src: pic2,
      },
      {
        title: "Cozy Cafe",
        src: pic3,
      },
    ],
    "Public Space": [
      {
        title: "Community Park",
        src: pic2,
      },
      {
        title: "Town Square",
        src: pic4,
      },
    ],
    "Guesthouse/Villa": [
      {
        title: "Beachfront Villa",
        src: pic1,
      },
      {
        title: "Mountain Retreat",
        src: pic4,
      },
    ],
    "Office": [
      {
        title: "Corporate HQ",
        src: pic2,
      },
      {
        title: "Startup Hub",
        src: pic3,
      },
    ],
  };

  return (
    <div className={`${styles.pageSize} flex h-[120vh] z-0`}>
      <Header title='Projects' />
      <p className={`${styles.head} text-right mb-2`}>OUR PROJECTS</p>
      <div id='projects' className='flex justify-center gap-5 '>
        <ProjectSidebar category={category} setCategory={setCategory} />
        <ProjectContentSlider
          category={category}
          slides={projectData[category] || projectData.default}
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
