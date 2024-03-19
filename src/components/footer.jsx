import React from 'react'
import Image from 'next/image';
import logo from '@/../public/images/logo.svg'

const Footer = () => {
  return (
    <div className="flex py-2 gap-2  justify-between">
        <Image src={logo} alt='logo' sizes="(max-width : 375px) 300vw"/>
        <p className=" text-xs font-semibold">Spatial Manifesto</p>
    </div>
  )
};

export default Footer;