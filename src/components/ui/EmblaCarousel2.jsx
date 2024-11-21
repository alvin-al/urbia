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
import * as styles from "@/components/styles";

const EmblaCarousel2 = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [loading, setLoading] = useState(true);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (slides && slides.length > 0) {
      setLoading(false);
    }
  }, [slides]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[80vh] xl:h-[67vh]'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
      </div>
    );
  }

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container xl:h-[67vh]'>
          {Array.isArray(slides) && slides.length > 0 ? (
            slides.map((slides, index) => (
              <div className={`embla__slide relative`} key={slides.sys.id}>
                <Link href={`/projects/${slides.fields.slug}`}>
                  <div
                    className={`hidden z-10 absolute w-full xl:h-[67vh] font-semibold opacity-0 hover:opacity-100 hover:bg-black rounded-xl hover:bg-opacity-70 text-white hover:delay-50 lg:flex justify-center items-center hover:transition text-2xl`}
                  >
                    {slides.fields.title}
                  </div>
                  <div
                    className={`lg:hidden z-20 absolute bottom-0 text-center w-full h-20 font-semibold ${styles.blueText} rounded-t-xl bg-white flex justify-center items-center text-2xl`}
                  >
                    {slides.fields.title}
                  </div>
                  <div className='w-fit flex h-[80vh] xl:h-[67vh] relative overflow-hidden rounded-xl'>
                    <Image
                      width={1500}
                      height={1500}
                      src={`https:${slides.fields.mainImage.fields.file.url}`}
                      alt={`Slide ${index + 1}`}
                      style={{ objectFit: "cover" }}
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
