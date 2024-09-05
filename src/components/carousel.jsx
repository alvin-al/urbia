"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import pic1 from "@/../public/images/AJ1.webp";
import pic2 from "@/../public/images/Giorno.png";
import pic3 from "@/../public/images/living room lt.1.webp";
import pic4 from "@/../public/images/XT-NOON-3.webp";
import Autoplay from "embla-carousel-autoplay";
import client from "@/lib/contentful";
import { useEffect } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const HomeCarousel = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  client
    .getEntries()
    .then((response) => {
      setPost(response.items);
      setLoading(false);
    })
    .catch(console.error);

  if (loading) {
    return (
      <div className='flex flex-col h-[72vh] 2xl:h-[75vh] rounded-xl my-2'>
        <Skeleton className='w-full h-[72vh] 2xl:h-[75vh]' />
      </div>
    );
  }

  return (
    <div className='rounded-lg my-2'>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='flex flex-col h-[72vh] 2xl:h-[74vh] rounded-xl overflow-hidden'
      >
        <CarouselContent>
          {post.map((item) => (
            <CarouselItem key={item.sys.id} className='hover:cursor-pointer'>
              <Link href={`/projects/${item.fields.slug}`} key={item.sys.id}>
                <Image
                  src={`https:${item.fields.mainImage.fields.file.url}`}
                  alt={item.fields.mainImage.fields.description || "image"}
                  title={`Project: ${item.fields.title}`}
                  className='object-cover w-full h-[72vh] 2xl:h-[75vh] object-bottom hover:cursor-pointer'
                  width={1000}
                  height={1000}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
