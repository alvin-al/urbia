import React from 'react';
import Link from 'next/link';

const OverlayMenu = ({ isOpen }) => {
  return (
    <div className={`h-full w-full fixed z-10 left-0 top-0 bg-black overflow-x-hidden flex items-center justify-center pt-[15%] sm:pt-[5%] lg:pt-0 transition-opacity duration-200 ${isOpen ? 'fadein' : 'opacity-0 fadeout'} `}>
      <ul className='flex flex-col text-white h-full w-full lg:flex-row lg:align-middle'>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full hover:bg-yellow-800 hover:transition hover:duration-200 hover:ease-in-out'><Link href="/" className='hover:underline'>Home</Link></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full hover:bg-yellow-800 hover:transition hover:duration-200 hover:ease-in-out'><Link href="" className='hover:underline'>Projects</Link></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full hover:bg-yellow-800 hover:transition hover:duration-200 hover:ease-in-out'><Link href="/services" className='hover:underline'>Services</Link></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl lg:h-full hover:bg-yellow-800 hover:transition hover:duration-200 hover:ease-in-out'><Link href="/urbians" className='hover:underline'>About Us</Link></li>
      </ul>
    </div>
  );
};

export default OverlayMenu;
