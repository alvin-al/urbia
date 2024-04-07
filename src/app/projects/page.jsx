import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from '@/components/styles'
import HomeCarousel from "@/components/carousel";
import Footer from "@/components/footer";


const Projects = () => {
  const hoverBtn = 'focus:bg-gray-600 focus:text-white focus:py-1 focus:pr-5 focus:rounded-sm focus:pl-6';

  return(
    <div className={`${styles.pageSize} flex h-[120vh]`}>
        <Header title="projects" />
        <p className={`${styles.head} text-right`}>  
            OUR PROJECTS
        </p>
        <div id="projects" className="">
          <div>
            <HomeCarousel />
          </div>
          <div id="projects-category" className="absolute left-0 mt-2 flex flex-col">
            <button className={`${styles.head} ${hoverBtn} py-1 pr-5 rounded-sm pl-6 text-gray-600`}>
              Housing
            </button>
            <button className={`${styles.head} ${hoverBtn} py-1 pr-5 rounded-sm pl-6 text-gray-600`}>
              Housing
            </button>
          </div>
        </div>

        <div className='bottom-0 fixed'>
          <Footer />
        </div>

    </div>
    );
};

export default Projects;
