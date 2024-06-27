import React from "react";
import EmblaCarousel2 from "./ui/EmblaCarousel2";

const ProjectContentSlider = ({ category, slides, options }) => {
  return (
    <div className="w-[80%]">
      <EmblaCarousel2 slides={slides} options={options} className='w-full'/>
    </div>
  );
};

export default ProjectContentSlider;
