import React from "react";
import EmblaCarousel2 from "./ui/EmblaCarousel2";

const ProjectContentSlider = ({ category, slides, options }) => {
  return (
    <div className='w-full h-fit pl-4'>
      <EmblaCarousel2
        slides={slides}
        options={options}
        className='w-full h-48'
      />
    </div>
  );
};

export default ProjectContentSlider;
