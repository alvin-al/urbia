import React from "react";
import EmblaCarousel2 from "./ui/EmblaCarousel2";

const ProjectContentSlider = ({ category, slides, options }) => {
  return (
    <div className='w-full h-[80vh] xl:h-fit'>
      <EmblaCarousel2 slides={slides} options={options} className='' />
    </div>
  );
};

export default ProjectContentSlider;
