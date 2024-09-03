import React, { useEffect, useState } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const EmblaCarousel2 = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      // Do something with Embla instance
    }
  }, [emblaApi]);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {Array.isArray(slides) && slides.length > 0 ? (
            slides.map((slides, index) => (
              <div className={`embla__slide relative`} key={slides.sys.id}>
                <Link href={`/projects/${slides.fields.slug}`}>
                  <div
                    className={`z-10 absolute w-full h-full text-2xl font-semibold opacity-0 hover:opacity-100 hover:bg-black rounded-xl hover:bg-opacity-70 text-white hover:delay-50 flex justify-center items-center hover:transition`}
                  >
                    {slides.fields.title}
                  </div>
                  <div className='w-full h-full relative overflow-hidden rounded-xl'>
                    <Image
                      width={2000}
                      height={2000}
                      src={`https:${slides.fields.mainImage.fields.file.url}`}
                      alt={`Slide ${index + 1}`}
                      className='object-cover w-full h-full'
                    />
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Uncomment this part if you want to add dot navigation
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel2;
