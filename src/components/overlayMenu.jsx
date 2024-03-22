import React from 'react'

const OverlayMenu = () => {
  // Define the base styles for the overlay menu



  return (
    <div className="h-full w-full fixed z-10 left-0 top-0 bg-black overflow-x-hidden flex items-center justify-center pt-[15%]">
      <ul className='flex flex-col text-white h-full w-full border-white'>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b'><a href="">Home</a></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b'><a href="">Projects</a></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b'><a href="">Services</a></li>
        <li className='w-full h-1/4 flex justify-center items-center text-center text-4xl'><a href="">About Us</a></li>
      </ul>
    </div>
  )
} 

export default OverlayMenu