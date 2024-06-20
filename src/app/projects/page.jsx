'use client'
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from '@/components/styles'
import HomeCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import ProjectSidebar from "@/components/projectSidebar";
import Link from "next/link"
import ProjectContentSlider from "@/components/projectContentSlider";

const Projects = () => {
  const [category, setCategory] = useState('Housing');


  return(
    <div className={`${styles.pageSize} flex h-[120vh] z-0`}>
        <Header title="projects" />
        <p className={`${styles.head} text-right`}>  
            OUR PROJECTS
        </p>
        <div id="projects" className="flex justify-center gap-5 ">
          <ProjectSidebar category={category} setCategory={setCategory}/>
          <ProjectContentSlider category={category}/>
        </div>

        <div className='bottom-0 fixed'>
          <Footer />
        </div>

    </div>
    );
};

export default Projects;
