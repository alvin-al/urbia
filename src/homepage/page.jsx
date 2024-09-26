"use client";
import React from "react";
import Header from "@/components/header";
import HomeCarousel from "@/components/carousel";
import Social from "@/components/social";
import Footer from "@/components/footer";
import * as styles from "@/components/styles";
import Navbar from "@/components/ui/Navbar";
import ButtonOval from "@/components/ButtonOval";

const Homepage = () => {
  return (
    <div className={`${styles.pageSize} h-dvh`}>
      {/* Loading */}

      {/* Carousel */}
      <div className='absolute inset-0 z-0'>
        <HomeCarousel />
      </div>
      {/* Header */}
      <div className='z-10'>
        <Header title='Home' />
      </div>
      {/* Text urbia */}
      <div className='absolute ml-8 lg:ml-20 top-[40%] transform -translate-y-[40%]'>
        <p className='text-6xl leading-tight lg:leading-tight lg:text-7xl font-extrabold xl:text-8xl text-white'>
          Urbia
          <br />
          Spatial
          <br />
          Manifesto
        </p>
      </div>
      {/* Footer */}
      <div
        className={`${styles.pageContainer} z-0 bottom-0 relative mt-auto bg-white py-6 lg:py-4 gap-8 flex flex-col rounded-t-[48px]`}
      >
        <div className=' items-center justify-between hidden lg:flex'>
          {/* <Social /> */}
          <Navbar className={``} />
        </div>
        <div className='flex items-center justify-between'>
          <Footer />
          <ButtonOval href='http://wa.me/6282134363346'>
            Get in touch 👋
          </ButtonOval>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
