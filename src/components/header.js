import React from 'react';
import Image from "next/image";
import logo from '@/../public/images/logo.svg'

const Header = () => {
  return (
    <div className="flex h-[60px] items-center gap-2">
        <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16">
                <path fill="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path>
            </svg>
        </div>
        <div>
            <a href=""><Image src={logo} alt='logo' sizes="(max-width : 375px) 80vw"/></a>
        </div>
    </div>
  )
}

export default Header;