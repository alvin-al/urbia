"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from '@/../public/images/logo.svg'
import HoverMenu from './hoverMenu';


const Header = () => {
  // const [isActive, setIsActive] = useState(false); 
  // const whenClicked = 'rotate-fade-off';
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[4px] w-6 my-[2px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex h-[60px] items-center gap-2 ">
      <button 
        className="flex flex-col h-10 w-10 rounded justify-center items-center group hover:bg-slate-200 hover:fade-in-100 z-20" 
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 opacity-100" : "opacity-50 group-hover:opacity-100"}`}/>
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}/>
        <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2 opacity-100" : "opacity-50 group-hover:opacity-100"}`}/>
      </button>
        <div>
            <a href=""><Image src={logo} alt='logo' sizes="(max-width : 375px) 80vw"/></a>
        </div>
    </div>
  )
}

export default Header;