import React from "react";
import EmblaCarousel2 from "./ui/EmblaCarousel2";

const ProjectContentSlider = ({ category, slides, options }) => {
  return (
    <div className="w-full h-[20%] border">
      <EmblaCarousel2 slides={slides} options={options} className='w-full h-full'/>
    </div>
  );
};

export default ProjectContentSlider;
