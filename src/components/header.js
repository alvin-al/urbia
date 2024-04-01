"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from '@/../public/images/logo.svg'
import logoWhite from '@/../public/images/logo-white.svg'
import OverlayMenu from './overlayMenu';
import Link from "next/link";


const Header = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const genericHamburgerLine = `h-[4px] w-6 my-[2px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex h-[60px] items-center gap-2 z-0">
      <title>{title}</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <button 
        className={`${"flex flex-col h-10 w-10 rounded justify-center items-center group hover:fade-in-100 z-30"} ${isOpen ? "border-2 lg:hover:bg-gray-600" : "hover:bg-gray-200"} ${title == "services" ? "hover:bg-gray-400" : null}`} 
        onClick={() => {
          toggleMenu();
        }}>
        
        <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 opacity-100 bg-white" : "opacity-50 group-hover:opacity-100 "} ${title == "services" ? "bg-white" : null}`}/>
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"} ${title == "services" ? "bg-white" : null}`}/>
        <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2 opacity-100 bg-white" : "opacity-50 group-hover:opacity-100"} ${title == "services" ? "bg-white" : null}`}/>
      </button>
        <div>
            <Link href="/">
              <Image src={title === 'services' ? logoWhite : logo} alt='logo' sizes="(max-width : 375px) 80vw" />
            </Link>
        </div>
        <OverlayMenu isOpen={isOpen} />
    </div>
  )
}

export default Header;