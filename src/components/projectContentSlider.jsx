import { useEffect } from "react";
import React from "react";
import HomeCarousel from "./carousel";
import EmblaCarousel2 from "./ui/EmblaCarousel2";
import pic1 from '@/../public/images/AJ1.webp'
import pic2 from '@/../public/images/Giorno.png'
import pic3 from '@/../public/images/living room lt.1.webp'
import pic4 from '@/../public/images/XT-NOON-3.webp'


const OPTIONS = { loop: true }
const SLIDES = [pic1, pic2, pic3, pic4];


const ProjectContentSlider = ({ category }) => {
  return (
    <div className="w-[80%]">
        {/* <HomeCarousel /> */}
        <EmblaCarousel2  slides={SLIDES} options={OPTIONS} className='w-full'/>
    </div>

    );
};

export default ProjectContentSlider;
