import React from "react";
import HomeCarousel from "./carousel";
import ProjectCarousel from "./projectCarousel";

const ProjectContentSlider = ({ category }) => {
  return (
    <div className="w-[80%]">
        {/* <HomeCarousel /> */}
        <ProjectCarousel />
    </div>   
    );
};

export default ProjectContentSlider;
