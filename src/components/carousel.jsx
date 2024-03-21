'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import pic1 from '@/../public/images/AJ1.webp'
import pic2 from '@/../public/images/Giorno.png'
import pic3 from '@/../public/images/living room lt.1.webp'
import pic4 from '@/../public/images/XT NOON 3.webp'
import Autoplay from 'embla-carousel-autoplay'  

const DemoCarousel = () => {
  const listOfPic = [
    {
      name : 'AJ House',
      link : pic1
    },
    {
      name : 'Giorno Pizzeria',
      link : pic2
    },
    {
      name : 'Casa Banjar',
      link : pic3
    },
    {
      name : 'Arahiwang',
      link : pic4
    }
  ]


  return (
    <div className="rounded-lg h-[70vh] lg:h-[75vh] my-2">
      <Carousel 
        opts={{
          loop: true,
          }} 
        plugins={[
            Autoplay({
              delay: 1000,
            }),
          ]}>
        <CarouselContent>
          <CarouselItem><Image src={pic1} alt="" className="rounded-lg object-cover h-[70vh] lg:h-[75vh] w-full"/></CarouselItem>
          <CarouselItem><Image src={pic2} alt="" className="rounded-lg object-cover h-[70vh] lg:h-[75vh] w-full"/></CarouselItem>
          <CarouselItem><Image src={pic3} alt="" className="rounded-lg object-cover h-[70vh] lg:h-[75vh] w-full object-bottom"/></CarouselItem>
        </CarouselContent>
      </Carousel>
      
    </div>
  )
}

export default DemoCarousel;