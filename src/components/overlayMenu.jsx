import React from 'react';
import Link from 'next/link';

const OverlayMenu = ({ isOpen }) => {
  return (
    <div className={`h-full w-full fixed z-20 left-0 top-0 bg-black overflow-x-hidden flex items-center justify-center pt-[15%] sm:pt-[5%] lg:pt-0 transition-opacity duration-200 ${isOpen ? 'fadein' : 'opacity-0 fadeout'} `}>
      <nav className='flex flex-col text-white h-full w-full lg:flex-row lg:align-middle'>
        <Link href="/" className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full iframe-home  hover:ease-in-out hover:underline' >Home</Link>

        <Link href="/projects" className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full hover:ease-in-out iframe-projects'>Projects</Link>

        <Link href="/services" className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full iframe-services'>Services</Link>

        <Link href="/urbians" className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl lg:h-full iframe-about-us'>About Us</Link>
      </nav>
    </div>
  );
};

export default OverlayMenu;
