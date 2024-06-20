import React from 'react'
import EmblaCarousel from './EmblaCarousel'

const ProjectCarousel = () => {
    const OPTIONS = { containScroll: false }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ProjectCarousel;
