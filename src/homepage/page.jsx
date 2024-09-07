import React from "react";
import Header from "@/components/header";
import HomeCarousel from "@/components/carousel";
import Social from "@/components/social";
import Footer from "@/components/footer";
import * as styles from "@/components/styles";
import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import ButtonOval from "@/components/ButtonOval";

const Homepage = () => {
  return (
    <div className={`${styles.pageSize} h-screen`}>
      {/* Carousel */}
      <div className='absolute inset-0 z-0'>
        <HomeCarousel />
      </div>
      {/* Header */}
      <div className='z-10'>
        <Header title='Home' />
      </div>
      {/* Text urbia */}
      <div className='absolute ml-20 top-[40%] transform -translate-y-[40%]'>
        <p className='font-extrabold text-8xl text-white'>
          Urbia
          <br />
          Spatial
          <br />
          Manifesto
        </p>
      </div>
      {/* Footer */}
      <div
        className={`${styles.pageContainer} z-0 bottom-0 relative mt-auto bg-white py-4 gap-8 flex flex-col rounded-t-[48px]`}
      >
        <div className='flex items-center justify-between'>
          <Social />
          <Navbar />
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
