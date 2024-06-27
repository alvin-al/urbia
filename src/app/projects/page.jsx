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
import pic1 from '@/../public/images/AJ1.webp'
import pic2 from '@/../public/images/Giorno.png'
import pic3 from '@/../public/images/living room lt.1.webp'
import pic4 from '@/../public/images/XT-NOON-3.webp'

const Projects = () => {
  const [category, setCategory] = useState('Housing');
  
  const OPTIONS = { loop: true }
  const SLIDES = {
  'Housing': [{ src: pic1 }, { src: pic2 }, { src: pic3 }],
  'Commercial': [{ src: pic3 }, { src: pic4 }],
  'Restaurant/Cafe': [{ src: pic3 }, { src: pic2 }],
  'Public Space': [{ src: pic2 }, { src: pic4 }],
  'Guesthouse/Villa': [{ src: pic1 }, { src: pic4 }],
  'Office': [{ src: pic2 }, { src: pic3 }],
  'default': [{ src: pic1 }, { src: pic2 }, { src: pic3 }, { src: pic4 }]
};

  return(
    <div className={`${styles.pageSize} flex h-[120vh] z-0`}>
        <Header title="Projects" />
        <p className={`${styles.head} text-right mb-2`}>  
            OUR PROJECTS
        </p>
        <div id="projects" className="flex justify-center gap-5 ">
          <ProjectSidebar category={category} setCategory={setCategory}/>
          <ProjectContentSlider 
            category={category} 
            slides={SLIDES[category] || SLIDES.default} 
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
